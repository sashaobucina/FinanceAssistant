import { IIntentInfo } from "../info/intent_info";
import { StockPriceInfo } from "../info/stock_price_info";
import { IIntent } from "../intents";
import { EntityType } from "../interfaces/entities";
import { IEntity } from "../interfaces/rasa";
import { Requester } from "../requester";

export const stockPriceFactory = (requester: Requester): IIntent =>
  new StockPrice(requester);

export class StockPrice implements IIntent {
  public readonly info: IIntentInfo = new StockPriceInfo();
  constructor(private readonly requester: Requester) {}

  public call(entites: IEntity[]): Promise<any> {
    const symbol = extractTicker(entites);
    return this.requester.getRealTimeStockPrice(symbol).then(stockPrice => {
      return {
        financials: {
          price: stockPrice.price,
          updateData: stockPrice.updated_at
        },
        success: true,
        symbol
      };
    });
  }
}

export const extractTicker = (entities: IEntity[]): string => {
  return "aapl";
};
