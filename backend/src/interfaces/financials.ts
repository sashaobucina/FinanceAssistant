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
