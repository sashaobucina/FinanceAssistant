import { EntityType } from "../interfaces/entities";
import { IIntentInfo } from "./intent_info";

export class CompanyProfileInfo implements IIntentInfo {
  public readonly entity: EntityType;
  public readonly intent: string;
  public readonly description: string;
  public readonly sampleUsages: string[];

  constructor() {
    this.entity = "ticker";
    this.intent = "CompanyProfile";
    this.description = "";
    this.sampleUsages = [];
  }
}
