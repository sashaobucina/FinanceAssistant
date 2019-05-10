import { IIntentInfo } from "./intent_info";

export class CryptocurrenciesInfo implements IIntentInfo {
  public readonly entity: null;
  public readonly intent: string;
  public readonly shortDescription: string;
  public readonly longDescription: string;
  public readonly sampleUsages: string[];

  constructor() {
    this.shortDescription = "";
    this.longDescription = "";
    this.entity = null;
    this.intent = "Cryptocurrencies";
    this.sampleUsages = [""];
  }
}
