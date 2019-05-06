import { EntityType } from "../interfaces/entities";
import { IIntentInfo } from "./intent_info";

export class CompanyRatingInfo implements IIntentInfo {
  public readonly intent: string;
  public readonly entity: EntityType;
  public readonly shortDescription: string;
  public readonly longDescription: string;
  public readonly sampleUsages: string[];

  constructor() {
    this.entity = "ticker";
    this.intent = "CompanyRating";
    this.shortDescription = "";
    this.longDescription = "";
    this.sampleUsages = [""];
  }
}
