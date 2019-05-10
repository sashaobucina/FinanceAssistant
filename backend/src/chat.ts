import { Request, Response } from "express";
import { IIntentInfo } from "./info/intent_info";
import { IIntent } from "./intents";
import { ChatResponse } from "./interfaces/chat_response";
import { ILogger } from "./interfaces/logger";
import { IRasaResponse } from "./interfaces/rasa";
import { RasaNormalizer } from "./normalizer";
import { Requester } from "./requester";
import { RasaVerifier } from "./verifier";

export type Chat = (req: Request, res: Response) => void;

export const failureResponses = {
  confidenceTooLow: "Sorry, I could not understand your message.",
  connectionIssue:
    "Server may be temporarily down, I could not parse your question at this moment.",
  invalidTicker:
    "Invalid company symbol given! Please re-enter your message with a valid company symbol.",
  noIntentMapping:
    "Sorry, you asked something outside the scope of my knowledge.",
  runtimeErr:
    "Something went wrong while parsing your question, please try again later."
};

export const chatFactory = (
  intentMap: { [key: string]: IIntent },
  requester: Requester,
  verifier: RasaVerifier,
  logger: ILogger
): Chat => (req: Request, res: Response): void => {
  const question = req.body.message.toLowerCase().trim();
  if (question === undefined) {
    res.send(
      new ChatResponse(
        { error: failureResponses.runtimeErr },
        "NullIntent",
        false
      )
    );
  } else if (question === "help") {
    const intentInfos: IIntentInfo[] = Object.keys(intentMap).map(
      intent => intentMap[intent].info
    );
    res.send(new ChatResponse({ intentInfos }, "Help", true));
  } else {
    requester
      .parseQuestion(question, "financeassistant")
      .then((rawResponse: IRasaResponse) => {
        const nlpResponse = new RasaNormalizer(
          rawResponse,
          verifier
        ).normalize();
        const intentStr = nlpResponse.intent;
        // const confidence = nlpResponse.confidence;
        logger.log(
          `Got back following response from the model: ${JSON.stringify(
            nlpResponse
          )}`
        );
        if (intentStr === "NullIntent") {
          res.send(
            new ChatResponse(
              { error: failureResponses.noIntentMapping, status: 400 },
              "NullIntent",
              false
            )
          );
        // } else if (confidence < 0.5) {
        //   res.send(
        //     new ChatResponse(
        //       { error: failureResponses.confidenceTooLow, status: 400 },
        //       "NullIntent",
        //       false
        //     )
        //   );
        } else {
          const intentPromise = intentMap[intentStr].call(nlpResponse.entities);
          intentPromise
            .then(result => res.send(result))
            .catch(err => {
              logger.logError(err);
              res.send(
                new ChatResponse(
                  { error: failureResponses.runtimeErr, status: 404 },
                  "NullIntent",
                  false
                )
              );
            });
        }
      })
      .catch(err => {
        logger.logError(err);
        logger.logError(`Failed to parse the question - "${question}"`);
        res.send(
          new ChatResponse(
            { error: failureResponses.connectionIssue, status: 503 },
            "NullIntent",
            false
          )
        );
      });
  }
};
