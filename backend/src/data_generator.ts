import { IIntent, IIntentMap } from "./intents";
import {
  IRasaNlu,
  IRasaTrainingData,
  IRasaTrainingEntity
} from "./interfaces/rasa";
import { Ticker, TickerListBox } from "./interfaces/symbols";
import { ISentence } from "./interfaces/training_data";

export const dataGeneratorFactory = (
  tickerListBox: TickerListBox,
  intentMap: IIntentMap,
  sentences: ISentence[]
): DataGenerator => {
  const rand = new RandSelector(randomSelectionFactory(Math.random));
  return new DataGenerator(tickerListBox, sentences, intentMap, rand);
};

export class DataGenerator {
  constructor(
    private readonly tickerListBox: TickerListBox,
    private readonly sentences: ISentence[],
    private readonly intentMap: IIntentMap,
    private readonly rand: RandSelector
  ) {}

  public generateTrainingData(): IRasaNlu {
    const trainingEntries: IRasaTrainingData[] = [];
    this.sentences.forEach(entry => {
      const intentName = entry.intent;
      const intent = validateIntent(this.intentMap, intentName);
      entry.sentences.forEach(sentence => {
        const entity = intent.info.entity;
        if (entity !== null) {
          const tickers = this.rand.selectTickers(
            this.tickerListBox.tickerList,
            25
          );
          const entries = tickers.map(
            (ticker): IRasaTrainingData => {
              return this.createTrainingEntry(sentence, intentName, ticker);
            }
          );
          trainingEntries.push(...entries);
        } else {
          const trainingEntry: IRasaTrainingData = {
            entities: [],
            intent: intentName,
            text: sentence
          };
          trainingEntries.push(trainingEntry);
        }
      });
    });
    return {
      common_examples: trainingEntries
    };
  }

  public createTrainingEntry(
    sentence: string,
    intentName: string,
    entityVal: string
  ): IRasaTrainingData {
    const start = sentence.indexOf("%ticker%");
    const newSentence = sentence.slice().replace("%ticker%", entityVal);
    const trainingEntity: IRasaTrainingEntity = {
      end: start + entityVal.length,
      entity: "ticker",
      start,
      value: entityVal
    };
    return {
      entities: [trainingEntity],
      intent: intentName,
      text: newSentence
    };
  }
}

export const validateIntent = (
  intentMap: IIntentMap,
  intentName: string
): IIntent => {
  const intent = intentMap[intentName];
  if (intent === undefined) {
    throw new Error(`Undefined intent for ${intentName}`);
  } else {
    return intent;
  }
};

/* Randomized selection of symbols to train against */
type RandSelection = (list: string[], amount: number) => string[];
interface IRand {
  selectTickers(tickerList: Ticker[], amount: number): string[];
}

export class RandSelector implements IRand {
  constructor(private readonly randomSelection: RandSelection) {}

  public selectTickers(tickerList: Ticker[], amount: number): string[] {
    const symbols = tickerList.map(ticker => ticker.symbol);
    return this.randomSelection(symbols, amount);
  }
}

export const randomSelectionFactory = (rand: () => number): RandSelection => (
  list: string[],
  amount: number
): string[] => {
  const arr: string[] = [];
  const temp = list.slice();
  for (let i = 0; i < amount; i++) {
    const randIndex = Math.floor(rand() * temp.length);
    arr.push(temp[randIndex]);
    temp.splice(randIndex, 1);
  }
  return arr;
};

/* Main driver for data_generator */
// const tickers: Ticker[] = [
//   {price: 6, symbol: 'H', companyName: 'Hydro One'},
//   {price: 7, symbol: 'AMZN', companyName: 'Amazon'},
//   {price: 0, symbol: 'GOOG', companyName: 'Google'}
// ]
// const rand = new RandSelector(randomSelectionFactory(Math.random))
// console.log(rand.selectTickers(tickers, 1))
