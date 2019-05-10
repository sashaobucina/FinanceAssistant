import { failureResponses } from "../chat";
import { EntityFinder } from "../entity_finder";
import { AnnualCashFlowInfo } from "../info/annual_cash_flow_info";
import { IIntentInfo } from "../info/intent_info";
import { IIntent } from "../intents";
import { ChatResponse } from "../interfaces/chat_response";
import { IEntity } from "../interfaces/rasa";
import { Requester } from "../requester";

export const annualCashFlowFactory = (
  requester: Requester,
  entityFinder: EntityFinder
): AnnualCashFlow => new AnnualCashFlow(requester, entityFinder);

export class AnnualCashFlow implements IIntent {
  public readonly info: IIntentInfo = new AnnualCashFlowInfo();
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
      .getAnnualCashFlow(ticker.symbol)
      .then(annualCashFlow => {
        return new ChatResponse(
          {
            csv: annualCashFlow.csv,
            financials: annualCashFlow.financials,
            ticker
          },
          this.info.intent,
          true
        );
      });
  }
}
