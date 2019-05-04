import { EntityType } from "../interfaces/entities";

export interface IIntentInfo {
  entity: EntityType | null;
  intent: string;
  longDescription: string;
  sampleUsages: string[];
  shortDescription: string;
}
