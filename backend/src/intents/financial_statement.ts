import { failureResponses } from "../chat";
import { EntityFinder } from "../entity_finder";
import { BalanceSheetInfo } from "../info/balance_sheet_info";
import { CashFlowInfo } from "../info/cash_flow_info";
import { IncomeStatementInfo } from "../info/income_statement_info";
import { IIntentInfo } from "../info/intent_info";
import { IIntent } from "../intents";
import { ChatResponse } from "../interfaces/chat_response";
import { IEntity } from "../interfaces/rasa";
import { Requester } from "../requester";

export const cashFlowFactory = (
  requester: Requester,
  entityFinder: EntityFinder
): FinancialStatement =>
  new FinancialStatement(
    requester,
    entityFinder,
    new CashFlowInfo(),
    "cash-flow-statement"
  );

export const incomeStatementFactory = (
  requester: Requester,
  entityFinder: EntityFinder
): FinancialStatement =>
  new FinancialStatement(
    requester,
    entityFinder,
    new IncomeStatementInfo(),
    "income-statement"
  );

export const balanceSheetFactory = (
  requester: Requester,
  entityFinder: EntityFinder
): FinancialStatement =>
  new FinancialStatement(
    requester,
    entityFinder,
    new BalanceSheetInfo(),
    "balance-sheet-statement"
  );

export class FinancialStatement implements IIntent {
  constructor(
    private readonly requester: Requester,
    private readonly entityFinder: EntityFinder,
    public readonly info: IIntentInfo,
    private readonly urlRoute: string
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
      .getFinancialStatement(this.urlRoute, ticker.symbol)
      .then(financialStatement => {
        return new ChatResponse(
          {
            csv: financialStatement.csv,
            financials: financialStatement.financials,
            ticker
          },
          this.info.intent,
          true
        );
      });
  }
}
