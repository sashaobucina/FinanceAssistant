import { IIntentInfo } from "./intent_info";

export class ForexInfo implements IIntentInfo {
  public readonly entity: null;
  public readonly intent: string;
  public readonly description: string;
  public readonly sampleUsages: string[];

  constructor() {
    this.entity = null;
    this.intent = "Forex";
    this.description = "";
    this.sampleUsages = [
      "how is the foreign exchange market doing",
      "how is the forex doing",
      "forex",
      "how are the currencies doing",
    ];
  }
}
