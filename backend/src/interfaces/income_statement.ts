export interface IIncomeStatement {
  financials: IIncomeStatementEntry;
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

export interface IIncomeStatementEntry {
  Revenue?: IAnnualEntry;
  "Cost of revenue"?: IAnnualEntry;
  "Gross Profit"?: IAnnualEntry;
  "Research and development"?: IAnnualEntry;
  "Sales, General and administrative"?: IAnnualEntry;
  "Total operating expenses"?: IAnnualEntry;
  "Operating income"?: IAnnualEntry;
  "Interest Expense"?: IAnnualEntry;
  "Other income (expense)"?: IAnnualEntry;
  "Income before taxes"?: IAnnualEntry;
  "Provision for income taxes"?: IAnnualEntry;
  "Net income from continuing operations"?: IAnnualEntry;
  "Net income"?: IAnnualEntry;
  "Net income available to common shareholders"?: IAnnualEntry;
  Basic: IAnnualEntry;
  Diluted: IAnnualEntry;
  EBITDA?: IAnnualEntry;
}
