import { failureResponses } from "../chat";
import { EntityFinder } from "../entity_finder";
import { IIntentInfo } from "../info/intent_info";
import { StockPriceInfo } from "../info/stock_price_info";
import { IIntent } from "../intents";
import { ChatResponse } from "../interfaces/chat_response";
import { ITickerEntity } from "../interfaces/entities";
import { IEntity } from "../interfaces/rasa";
import { Requester } from "../requester";

export const stockPriceFactory = (
  requester: Requester,
  entityFinder: EntityFinder
): IIntent => new StockPrice(requester, entityFinder);

export class StockPrice implements IIntent {
  public readonly info: IIntentInfo = new StockPriceInfo();
  constructor(
    private readonly requester: Requester,
    private readonly entityFinder: EntityFinder
  ) {}

  public call(entites: IEntity[]): Promise<ChatResponse> {
    const ticker = this.entityFinder.extractTicker(entites);
    if (ticker === undefined) {
      return Promise.resolve(
        new ChatResponse(
          { error: failureResponses.invalidTicker, status: 400 },
          "NullIntent",
          false
        )
      );
    }
    return this.requester
      .getRealTimeStockPrice(ticker.symbol)
      .then(stockPrice => {
        const data = {
          price: stockPrice.price,
          ticker,
          updateDate: stockPrice.updated_at
        };
        return new ChatResponse(data, this.info.intent, true);
      });
  }
}
