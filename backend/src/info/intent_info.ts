import { EntityType } from "../interfaces/entities";

export interface IIntentInfo {
  entity: EntityType | null;
  intent: string;
  description: string;
  sampleUsages: string[];
}
