import { MoverType } from "../interfaces/financials";
import { IIntentInfo } from "./intent_info";

export class HighestMoversInfo implements IIntentInfo {
  public readonly entity: null;
  public readonly intent: string;
  public readonly description: string;
  public readonly sampleUsages: string[];

  constructor(type: MoverType) {
    this.entity = null;
    this.intent = type === "gainers" ? "HighestGainers" : "BiggestLosers";
    this.description = "";
    this.sampleUsages = [""];
  }
}
