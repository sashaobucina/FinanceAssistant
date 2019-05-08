import { IIntentInfo } from "./intent_info";

export class SectorPerformanceInfo implements IIntentInfo {
  public readonly entity: null;
  public readonly intent: string;
  public readonly longDescription: string;
  public readonly shortDescription: string;
  public readonly sampleUsages: string[];

  constructor() {
    this.entity = null;
    this.intent = "SectorPerformance";
    this.longDescription = "";
    this.shortDescription = "";
    this.sampleUsages = [];
  }
}
