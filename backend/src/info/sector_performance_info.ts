import { IIntentInfo } from "./intent_info";

export class SectorPerformanceInfo implements IIntentInfo {
  public readonly entity: null;
  public readonly intent: string;
  public readonly description: string;
  public readonly sampleUsages: string[];

  constructor() {
    this.entity = null;
    this.intent = "SectorPerformance";
    this.description = "";
    this.sampleUsages = [];
  }
}
