import { failureResponses } from "../chat";
import { EntityFinder } from "../entity_finder";
import { HistoricalStockPricesInfo } from "../info/historical_stock_prices_info";
import { IIntentInfo } from "../info/intent_info";
import { IIntent } from "../intents";
import { ChatResponse } from "../interfaces/chat_response";
import { IEntity } from "../interfaces/rasa";
import { Requester } from "../requester";

export const historicalStockPricesFactory = (
  requester: Requester,
  entityFinder: EntityFinder
) => new HistoricalStockPrices(requester, entityFinder);

export class HistoricalStockPrices implements IIntent {
  public readonly info: IIntentInfo = new HistoricalStockPricesInfo();
  constructor(
    private readonly requester: Requester,
    private readonly entityFinder: EntityFinder
  ) {}

  public call(entities: IEntity[]): Promise<ChatResponse> {
    const ticker = this.entityFinder.extractTicker(entities);
    if (ticker === undefined) {
      return Promise.resolve(
        new ChatResponse(
          { error: failureResponses.invalidTicker },
          "InvalidTicker",
          false
        )
      );
    }
    return this.requester
      .getHistoricalStockPrice(ticker.symbol)
      .then(historicalStockPrices => {
        return new ChatResponse(
          { historicalStockPrices, ticker },
          this.info.intent,
          true
        );
      });
  }
}
