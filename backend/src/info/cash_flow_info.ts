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
    this.sampleUsages = [
      "cash flow for INTC",
      "what is the cash flow for X",
      "give the cash flow for NVR",
      "cash flow ALX"
    ];
  }
}
