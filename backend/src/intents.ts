import { EntityFinder } from "./entity_finder";
import { IIntentInfo } from "./info/intent_info";
import { companyProfileFactory } from "./intents/company_profile";
import { companyRatingFactory } from "./intents/company_rating";
import { cryptocurrenciesFactory } from "./intents/cyptos";
import { financialRatiosFactory } from "./intents/financial_ratio";
import {
  annualCashFlowFactory,
  balanceSheetFactory,
  incomeStatementFactory
} from "./intents/financial_statement";
import { forexFactory } from "./intents/forex";
import {
  biggestLosersFactory,
  highestGainersFactory
} from "./intents/highest_mover";
import { historicalStockPricesFactory } from "./intents/historical_stock_prices";
import { majorIndexesFactory } from "./intents/major_indexes";
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
  const balanceSheet = balanceSheetFactory(requester, entityFinder);
  const biggestLosers = biggestLosersFactory(requester);
  const companyProfile = companyProfileFactory(requester, entityFinder);
  const cryptocurrencies = cryptocurrenciesFactory(requester);
  const companyRating = companyRatingFactory(requester, entityFinder);
  const financialRatios = financialRatiosFactory(requester, entityFinder);
  const forex = forexFactory(requester);
  const highestGainers = highestGainersFactory(requester);
  const historicalStockPrices = historicalStockPricesFactory(
    requester,
    entityFinder
  );
  const incomeStatement = incomeStatementFactory(requester, entityFinder);
  const majorIndexes = majorIndexesFactory(requester);
  const sectorPerformance = sectorPerformanceFactory(requester);
  const stockPrice = stockPriceFactory(requester, entityFinder);
  return {
    annualCashFlow,
    balanceSheet,
    biggestLosers,
    companyProfile,
    companyRating,
    cryptocurrencies,
    financialRatios,
    forex,
    highestGainers,
    historicalStockPrices,
    incomeStatement,
    majorIndexes,
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
