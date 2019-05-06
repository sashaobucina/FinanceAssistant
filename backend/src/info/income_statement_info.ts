import { EntityType } from "../interfaces/entities";
import { IIntentInfo } from "./intent_info";

export class IncomeStatementInfo implements IIntentInfo {
  public readonly entity: EntityType;
  public readonly intent: string;
  public readonly longDescription: string;
  public readonly shortDescription: string;
  public readonly sampleUsages: string[];
  constructor() {
    this.entity = "ticker";
    this.intent = "IncomeStatement";
    this.longDescription = "";
    this.shortDescription = "";
    this.sampleUsages = [];
  }
}
