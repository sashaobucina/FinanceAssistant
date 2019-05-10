import { failureResponses } from "../chat";
import { EntityFinder } from "../entity_finder";
import { FinancialRatiosInfo } from "../info/finanical_ratios_info";
import { IIntentInfo } from "../info/intent_info";
import { IIntent } from "../intents";
import { ChatResponse } from "../interfaces/chat_response";
import { IEntity } from "../interfaces/rasa";
import { Requester } from "../requester";

export const financialRatiosFactory = (
  requester: Requester,
  entityFinder: EntityFinder
) => new FinancialRatios(requester, entityFinder);

export class FinancialRatios implements IIntent {
  public readonly info: IIntentInfo = new FinancialRatiosInfo();
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
    return this.requester
      .getFinancialRatios(ticker.symbol)
      .then(financialRatios => {
        return new ChatResponse(
          { financialRatios, ticker },
          this.info.intent,
          true
        );
      });
  }
}
