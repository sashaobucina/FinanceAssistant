import { failureResponses } from "../chat";
import { EntityFinder } from "../entity_finder";
import { IIntentInfo } from "../info/intent_info";
import { KeyMetricsInfo } from "../info/key_metrics_info";
import { IIntent } from "../intents";
import { ChatResponse } from "../interfaces/chat_response";
import { IEntity } from "../interfaces/rasa";
import { Requester } from "../requester";

export const keyMetricsFactory = (
  requester: Requester,
  entityFinder: EntityFinder
): KeyMetrics => new KeyMetrics(requester, entityFinder);

export class KeyMetrics implements IIntent {
  public readonly info: IIntentInfo = new KeyMetricsInfo();
  constructor(
    private readonly requester: Requester,
    private readonly entityFinder: EntityFinder
  ) {}

  public call(entities: IEntity[]): Promise<ChatResponse> {
    const ticker = this.entityFinder.extractTicker(entities);
    if (ticker === undefined) {
      return Promise.resolve(
        new ChatResponse(
          { error: failureResponses.invalidTicker },
          "InvalidTicker",
          false
        )
      );
    }
    return this.requester.getKeyMetrics(ticker.symbol).then(keyMetrics => {
      return new ChatResponse({ keyMetrics, ticker }, this.info.intent, true);
    });
  }
}
