export type NumberOrNull = number | null;

/* Financial statement interfaces */
export interface IFinancialStatement {
  csv: string;
  financials: Array<{ [key: string]: any }>;
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
  label: string;
  changeOverTime: number;
}

export interface IRawHistoricalPrices {
  name: string;
  historical: IHistoricalStockPrice[];
}

/* Highest Movers interface */
export interface IHighestMover {
  changes: number;
  changesPerc: number;
  companyName: string;
  price: number;
  ticker: string;
}

export type MoverType = "gainers" | "losers";

/* Crytocurrency interfaces */
export interface ICrypto {
  changes: number;
  marketCapUsd: number;
  name: string;
  price: number;
  ticker: string;
}

/* Financial ratio interfaces */
