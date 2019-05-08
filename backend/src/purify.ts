import { rejectAttr } from "./helper";
import {
  IAnnualCashFlow,
  IAnnualCashFlowEntry,
  IAnnualEntry,
  IForex,
  IIncomeStatement,
  ISector,
  IYearlyEntry
} from "./interfaces/financials";

export const purifyIncomeStatement = (
  symbol: string,
  statement: any,
  csv: string
): IIncomeStatement => {
  const rawFinancials = statement[symbol];
  Object.keys(rawFinancials).forEach(key => {
    rawFinancials[key] = createAnnualEntry(rawFinancials[key]);
  });
  return {
    csv,
    financials: rawFinancials,
    symbol
  };
};

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

export const purifySectorPerformance = (rawSectors: any): ISector[] => {
  return Object.keys(rawSectors).map((key: string) => {
    const rawSector = rawSectors[key];
    return {
      change: rawSector.Change,
      name: rawSector.Name
    };
  });
};

export const purifyAnnualCashFlow = (
  symbol: string,
  rawAnnualCashFlow: any,
  csv: string
): IAnnualCashFlow => {
  const filterFn = (e: any) => e !== "date";
  const annualCashFlow: any[] = rawAnnualCashFlow.financials;
  const dates: string[] = annualCashFlow.map(annualEntry => annualEntry.date);
  const allFinancials = annualCashFlow.map(annualEntry =>
    rejectAttr(annualEntry, filterFn)
  );
  const entries: IAnnualCashFlowEntry[] = dates.map((date, i) => ({
    date,
    financials: allFinancials[i]
  }));
  return {
    csv,
    financials: entries,
    symbol
  };
};

export const createAnnualEntry = (entry: any): IAnnualEntry => {
  const entries: IYearlyEntry[] = Object.keys(entry)
    .filter(entryKey => entryKey !== "TTM")
    .map((entryKey: any) => {
      const monthYearPair = extractYear(entryKey);
      return {
        month: monthYearPair.month,
        value: parseInt(entry[entryKey], 10),
        year: monthYearPair.year
      };
    });
  return {
    TTM: entry.TTM,
    entries
  };
};

export const extractYear = (
  dateStr: string
): { month: number; year: number } => {
  const monthStr = dateStr.split("-")[1].replace(/[^\d.]/g, "");
  const yearStr = dateStr.split("-")[0].replace(/[^\d.]/g, "");
  return {
    month: parseInt(monthStr, 10),
    year: parseInt(yearStr, 10)
  };
};
