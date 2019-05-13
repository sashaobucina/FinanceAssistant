import { EntityType } from "../interfaces/entities";
import { IIntentInfo } from "./intent_info";

export class CashFlowInfo implements IIntentInfo {
  public readonly entity: EntityType;
  public readonly intent: string;
  public readonly description: string;
  public readonly sampleUsages: string[];

  constructor() {
    this.entity = "ticker";
    this.intent = "CashFlow";
    this.description = "";
    this.sampleUsages = [];
  }
}
