import bodyParser from "body-parser";
import express from "express";
import requestPromise from "request-promise-native";
import { chatFactory } from "./chat";
import { cors } from "./cors";
import { dataGeneratorFactory } from "./data_generator";
import { DataLoader } from "./data_loader";
import { EntityFinder } from "./entity_finder";
import { IIntentMap, intents } from "./intents";
import { ILogger } from "./interfaces/logger";
import { Ticker, TickerMapBox } from "./interfaces/symbols";
import { IRasaConfig, ISentence } from "./interfaces/training_data";
import { Requester } from "./requester";
import { trainerFactory } from "./trainer";
import { RasaVerifier } from "./verifier";

const app = express();

const rasaConfig: IRasaConfig = require("./data/rasa_config.json");
const sentences: ISentence[] = require("./data/sentences.json");

app.use(bodyParser.json());
app.use(cors);
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

const httpRequests = (requestPromise as unknown) as (o: any) => Promise<any>;
const logger: ILogger = {
  log: (o: any) => console.log(o),
  logError: (err: string | Error) => console.error(err)
};
const tickerMapBox = new TickerMapBox(new Map<string, Ticker>());
const requester = new Requester(httpRequests, logger);
const entityFinder = new EntityFinder(tickerMapBox);
const intentMap: IIntentMap = intents(requester, entityFinder);
const dataLoader = new DataLoader(requester, tickerMapBox, logger);
const dataGenerator = dataGeneratorFactory(tickerMapBox, intentMap, sentences);
const verifier = new RasaVerifier(tickerMapBox);
const trainer = trainerFactory(
  dataLoader,
  dataGenerator,
  requester,
  rasaConfig,
  logger
);

// Starting the app
trainer.train().then(() => {
  logger.log(
    "Sending initial parse request to model to load model into memory"
  );
  requester
    .parseQuestion("income statement for aapl", "financebuddy")
    .then((res: any) => {
      console.log(res);
      const port = 8080;
      logger.log("Ready!");
      const chat = chatFactory(intentMap, requester, verifier, logger);
      app.post("/chat/", chat);
      app.listen(port);
      logger.log(`Started listening at port ${port}...`);
    });
});
