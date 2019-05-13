import { EntityType } from "../interfaces/entities";
import { IIntentInfo } from "./intent_info";

export class HistoricalStockPricesInfo implements IIntentInfo {
  public readonly entity: EntityType;
  public readonly intent: string;
  public readonly description: string;
  public readonly sampleUsages: string[];

  constructor() {
    this.entity = "ticker";
    this.intent = "HistoricalStockPrice";
    this.description = "";
    this.sampleUsages = [
      "stock price for FB",
      "historical stock price for AAPL",
      "show the historical stock prices for GOOG",
      "how is NFLX doing"
    ];
  }
}
