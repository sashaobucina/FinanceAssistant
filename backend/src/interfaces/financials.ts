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
