import { MoverType } from "../interfaces/financials";
import { IIntentInfo } from "./intent_info";

export class HighestMoversInfo implements IIntentInfo {
  public readonly entity: null;
  public readonly intent: string;
  public readonly shortDescription: string;
  public readonly longDescription: string;
  public readonly sampleUsages: string[];

  constructor(type: MoverType) {
    this.shortDescription = "";
    this.longDescription = "";
    this.entity = null;
    this.sampleUsages = [""];
    this.intent = type === "gainers" ? "HighestGainers" : "BiggestLosers";
  }
}
