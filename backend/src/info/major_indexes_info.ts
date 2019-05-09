import { IIntentInfo } from "./intent_info";

export class MajorIndexesInfo implements IIntentInfo {
  public readonly entity: null;
  public readonly intent: string;
  public readonly shortDescription: string;
  public readonly longDescription: string;
  public readonly sampleUsages: string[];

  constructor() {
    this.entity = null;
    this.intent = "MajorIndexes";
    this.shortDescription = "";
    this.longDescription = "";
    this.sampleUsages = [""];
  }
}
