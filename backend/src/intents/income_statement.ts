import { EntityFinder } from "../entity_finder";
import { IncomeStatementInfo } from "../info/income_statement_info";
import { IIntentInfo } from "../info/intent_info";
import { IIntent } from "../intents";
import { ChatResponse } from "../interfaces/chat_response";
import { IEntity } from "../interfaces/rasa";
import { Requester } from "../requester";

export const incomeStatementFactory = (
  requester: Requester,
  entityFinder: EntityFinder
): IncomeStatement => new IncomeStatement(requester, entityFinder);
export class IncomeStatement implements IIntent {
  public readonly info: IIntentInfo = new IncomeStatementInfo();
  constructor(
    private readonly requester: Requester,
    private readonly entityFinder: EntityFinder
  ) {}

  public call(entities: IEntity[]): Promise<ChatResponse> {
    const ticker = this.entityFinder.extractTicker(entities);
    if (ticker === undefined) {
      return Promise.resolve(
        new ChatResponse({ error: "Invalid ticker given" }, "NullIntent", false)
      );
    }
    return this.requester
      .getIncomeStatment(ticker.symbol)
      .then(incomeStatement => {
        return new ChatResponse(
          {
            csv: incomeStatement.csv,
            financials: incomeStatement.financials,
            ticker
          },
          this.info.intent,
          true
        );
      });
  }
}
