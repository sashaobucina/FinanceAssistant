export interface IRawTicker {
  Ticker: string;
  Price: number;
  companyName: string;
}

export class Ticker {
  constructor(
    public readonly symbol: string,
    public readonly companyName: string,
    public readonly price: number
  ) {}
}

export class TickerListBox {
  constructor(public tickerList: Ticker[]) {}
}

export interface IRealTimeStockPrice {
  symbol: string;
  price: number;
  updated_at: string;
}
