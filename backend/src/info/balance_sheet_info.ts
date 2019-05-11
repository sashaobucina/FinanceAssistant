import { EntityType } from "../interfaces/entities";
import { IIntentInfo } from "./intent_info";

export class BalanceSheetInfo implements IIntentInfo {
  public readonly entity: EntityType;
  public readonly intent: string;
  public readonly shortDescription: string;
  public readonly longDescription: string;
  public readonly sampleUsages: string[];

  constructor() {
    this.shortDescription = "";
    this.longDescription = "";
    this.entity = "ticker";
    this.intent = "BalanceSheet";
    this.sampleUsages = [""];
  }
}
