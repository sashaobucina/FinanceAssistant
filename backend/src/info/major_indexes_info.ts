import { IIntentInfo } from "./intent_info";

export class MajorIndexesInfo implements IIntentInfo {
  public readonly entity: null;
  public readonly intent: string;
  public readonly description: string;
  public readonly sampleUsages: string[];

  constructor() {
    this.entity = null;
    this.intent = "MajorIndexes";
    this.description = "";
    this.sampleUsages = [
      "major indexes",
      "how are the major indexes doing",
      "how are the stock markets doing",
      "stock market activity",
    ];
  }
}
