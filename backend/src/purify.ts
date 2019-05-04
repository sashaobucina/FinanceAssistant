import {
  IAnnualEntry,
  IIncomeStatement,
  IYearlyEntry
} from "./interfaces/income_statement";

export const purifyIncomeStatement = (
  ticker: string,
  statement: any
): IIncomeStatement => {
  const rawFinancials = statement[ticker];
  Object.keys(rawFinancials).forEach(key => {
    rawFinancials[key] = createAnnualEntry(rawFinancials[key]);
  });
  return {
    financials: rawFinancials,
    symbol: ticker
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
