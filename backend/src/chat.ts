import { Request, Response } from "express";
import { IIntent } from "./intents";
import { ILogger } from "./interfaces/logger";
import { IRasaResponse } from "./interfaces/rasa";
import { RasaNormalizer } from "./normalizer";
import { Requester } from "./requester";
import { RasaVerifier } from "./verifier";

export type Chat = (req: Request, res: Response) => void;

export const failureResponses = {
  understanding: "Sorry, I could not understand your message",
  wrong: "Something went wrong, please try again later."
};

export const chatFactory = (
  intentMap: { [key: string]: IIntent },
  requester: Requester,
  verifier: RasaVerifier,
  logger: ILogger
): Chat => (req: Request, res: Response): void => {
  const question = req.body.message.toLowerCase().trim();
  requester
    .parseQuestion(question, "financebuddy")
    .then((rawResponse: IRasaResponse) => {
      const nlpResponse = new RasaNormalizer(rawResponse, verifier).normalize();
      const intentStr = nlpResponse.intent;
      const confidence = nlpResponse.confidence;
      logger.log(
        `Got back following response from the model: ${JSON.stringify(
          nlpResponse
        )}`
      );
      if (intentStr === "nullIntent") {
        res.status(404).send(failureResponses.understanding);
      } else if (confidence < 0.5) {
        res.status(404).send(failureResponses.understanding);
      } else {
        const intentPromise = intentMap[intentStr].call(nlpResponse.entities);
        intentPromise
          .then(result => {
            if (result.success) {
              res.send(result);
            } else {
              res.status(404).send(failureResponses.wrong);
            }
          })
          .catch(err => {
            logger.logError(err);
            res.status(404).send(failureResponses.wrong);
          });
      }
    })
    .catch(err => {
      logger.logError(err);
      logger.logError(`Failed to parse the question - "${question}"`);
      res.send(failureResponses.wrong);
    });
};
