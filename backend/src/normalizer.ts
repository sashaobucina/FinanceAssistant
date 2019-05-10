import {
  IEntity,
  IRasaRawEntity,
  IRasaResponse,
  NlpResponse
} from "./interfaces/rasa";
import { RasaVerifier } from "./verifier";

export class RasaNormalizer {
  constructor(
    private readonly rasaResponse: IRasaResponse,
    private readonly verifier: RasaVerifier
  ) {}

  public normalize(): NlpResponse {
    const intent = this.rasaResponse.intent.name
      ? this.rasaResponse.intent.name
      : "NullIntent";
    const entities = this.normalizeEntities(this.rasaResponse.entities);
    const confidence = this.rasaResponse.intent.confidence
      ? this.rasaResponse.intent.confidence
      : 1;
    return new NlpResponse(intent, entities, confidence);
  }

  public normalizeEntities(entities: IRasaRawEntity[]): IEntity[] {
    return this.verifier.verify(
      entities.map(entity => ({
        entity: entity.entity,
        value: entity.value
      }))
    );
  }
}
