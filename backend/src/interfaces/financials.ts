/* Income statement interfaces */
export interface IIncomeStatement {
  csv: string;
  financials: { [key: string]: IAnnualEntry };
  symbol: string;
}

export interface IYearlyEntry {
  month: number;
  value: number;
  year: number;
}

export interface IAnnualEntry {
  entries: IYearlyEntry[];
  TTM: number;
}

/* Annual cash flow interfaces */
export interface IAnnualCashFlow {
  csv: string;
  financials: IAnnualCashFlowEntry[];
  symbol: string;
}

export interface IAnnualCashFlowEntry {
  date: string;
  financials: { [key: string]: number };
}

/* Company profile interfaces */
export interface ICompanyProfile {
  Price: number;
  Beta: string;
  VolAvg: string;
  MktCap: string;
  LastDiv: string;
  Range: string;
  Changes: number;
  ChangesPerc: string;
  companyName: string;
  exchange: string;
  industry: string;
  website: string;
  description: string;
  CEO: string;
  sector: string;
  date_is_filed?: string | null;
  date_bs_filed?: string | null;
  date_cs_filed?: string | null;
  image: string;
}

/* Sectors interface */
export type Sector =
  | "Information Technology"
  | "Consumer Staples"
  | "Consumer Discretionary"
  | "Materials"
  | "Financials"
  | "Industrials"
  | "Real Estate"
  | "Health Care"
  | "Telecommunication Services"
  | "Energy"
  | "Utilities"
  | "Communication Services";

export interface ISector {
  name: Sector;
  change: string;
}

/* Forex interfaces */
export interface IForex {
  change: number;
  currency: string;
  exchange: string;
  price: number;
}

/* Major Index interfaces */
export interface IMajorIndex {
  change: number;
  index: string;
  name: string;
  price: number;
  updateDate: string;
}

/* Historical Stock Prices interfaces */
export interface IHistoricalStockPrice {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  unadjustedVolume: number;
  change: number;
  changePercent: number;
  vwap: number;
  label: number;
  changeOverTime: number;
}

export interface IRawHistoricalPrices {
  name: string;
  historical: IHistoricalStockPrice[];
}
