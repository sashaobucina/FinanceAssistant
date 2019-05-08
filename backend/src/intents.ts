import { EntityFinder } from "./entity_finder";
import { IIntentInfo } from "./info/intent_info";
import { annualCashFlowFactory } from "./intents/annual_cash_flow";
import { companyProfileFactory } from "./intents/company_profile";
import { companyRatingFactory } from "./intents/company_rating";
import { incomeStatementFactory } from "./intents/income_statement";
import { sectorPerformanceFactory } from "./intents/sector_performance";
import { stockPriceFactory } from "./intents/stock_price";
import { ChatResponse } from "./interfaces/chat_response";
import { IEntity } from "./interfaces/rasa";
import { Requester } from "./requester";

export const intents = (
  requester: Requester,
  entityFinder: EntityFinder
): IIntentMap => {
  const annualCashFlow = annualCashFlowFactory(requester, entityFinder);
  const companyProfile = companyProfileFactory(requester, entityFinder);
  const companyRating = companyRatingFactory(requester, entityFinder);
  const incomeStatement = incomeStatementFactory(requester, entityFinder);
  const sectorPerformance = sectorPerformanceFactory(requester);
  const stockPrice = stockPriceFactory(requester, entityFinder);
  return {
    annualCashFlow,
    companyProfile,
    companyRating,
    incomeStatement,
    sectorPerformance,
    stockPrice
  };
};

export interface IIntent {
  info: IIntentInfo;
  call(entites: IEntity[]): Promise<ChatResponse>;
}

export interface IIntentMap {
  [key: string]: IIntent;
}
