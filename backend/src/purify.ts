import { extractKeys } from "./helper";
import {
  ICrypto,
  IForex,
  IHighestMover,
  IHistoricalStockPrice,
  IMajorIndex,
  IRawHistoricalPrices,
  ISector
} from "./interfaces/financials";

export const purifyForex = (rawForex: any): IForex[] => {
  return Object.keys(rawForex).map(key => {
    const forexInfo = rawForex[key];
    const { Changes, Name, Price, Ticker } = forexInfo;
    return {
      change: Changes,
      currency: Name,
      exchange: Ticker,
      price: Price
    };
  });
};

export const purifyMajorIndexes = (rawMajorIndexes: any): IMajorIndex[] => {
  return Object.keys(rawMajorIndexes).map(key => {
    const majorIndex = rawMajorIndexes[key];
    const { Changes, Name, Price, Ticker, updated_at } = majorIndex;
    return {
      change: Changes,
      index: Ticker,
      name: Name,
      price: Price,
      updateDate: updated_at
    };
  });
};

export const purifySectorPerformance = (rawSectors: any): ISector[] => {
  return Object.keys(rawSectors).map((key: string) => {
    const rawSector = rawSectors[key];
    return {
      change: rawSector.Change,
      name: rawSector.Name
    };
  });
};

export const purifyHighestMovers = (highestMovers: any): IHighestMover[] => {
  return Object.values(highestMovers).map((rawMovers: any) => ({
    changes: rawMovers.Changes,
    changesPerc: rawMovers.ChangesPerc,
    companyName: rawMovers.companyName,
    price: rawMovers.Price,
    ticker: rawMovers.Ticker
  }));
};

export const purifyHistoricalPrices = (
  rawHistoricalPrices: IRawHistoricalPrices
): IHistoricalStockPrice[] => rawHistoricalPrices.historical;

export const purifyCryptos = (rawCryptos: any): ICrypto[] => {
  return Object.values(rawCryptos).map((rawCrypto: any) => ({
    changes: rawCrypto.Changes,
    marketCapUsd: rawCrypto.market_cap_usd,
    name: rawCrypto.name,
    price: rawCrypto.Price,
    ticker: rawCrypto.Ticker
  }));
};

export const purifyFinancialStatement = (rawFinancials: any): any => {
  const financialEntries: string[] = extractKeys(rawFinancials[0]);
  return financialEntries.map(financialEntry => {
    const row: { [key: string]: any } = {};
    row.Financials = financialEntry;
    rawFinancials.forEach((financialPeriod: any) => {
      row[financialPeriod.date] = financialPeriod[financialEntry];
    });
    return row;
  });
};
