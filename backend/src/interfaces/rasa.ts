import { EntityType } from "./entities";

export interface IRasaResponse {
  entities: IRasaRawEntity[];
  intent: IRasaRawIntent;
  intent_ranking: IRasaRawIntent[];
  model: string;
  project: string;
  text: string;
}

export interface IRasaRawIntent {
  name: string;
  confidence: number;
}

export interface IRasaRawEntity {
  confidence: number;
  end: number;
  entity: EntityType;
  extractor: string;
  start: number;
  value: string;
}

export interface IEntity {
  entity: EntityType;
  value: string;
}

export class NlpResponse {
  constructor(
    public readonly intent: string,
    public readonly entities: IEntity[],
    public readonly confidence: number
  ) {}
}

export class Result {
  constructor(
    public readonly intent: string,
    public readonly entities: IEntity[],
    public readonly success: boolean
  ) {}
}

export interface IRasaTrainingEntity {
  end: number;
  entity: EntityType;
  start: number;
  value: string;
}

export interface IRasaTrainingData {
  entities: IRasaTrainingEntity[];
  intent: string;
  text: string;
}

export interface IEntitySynonym {
  value: string;
  synonyms: string[];
}

export interface ILookUpTable {
  name: string;
  elements: string | string[];
}

export interface IRegexFeature {
  name: string;
  pattern: string;
}

export interface IRasaNlu {
  common_examples: IRasaTrainingData[];
  entity_synonyms?: IEntitySynonym[];
  lookup_tables?: ILookUpTable[];
  regex_features?: IRegexFeature[];
}
