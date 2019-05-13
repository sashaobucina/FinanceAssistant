import { EntityType } from "../interfaces/entities";
import { IIntentInfo } from "./intent_info";

export class BalanceSheetInfo implements IIntentInfo {
  public readonly entity: EntityType;
  public readonly intent: string;
  public readonly description: string;
  public readonly sampleUsages: string[];

  constructor() {
    this.description = "";
    this.entity = "ticker";
    this.intent = "BalanceSheet";
    this.sampleUsages = [""];
  }
}
