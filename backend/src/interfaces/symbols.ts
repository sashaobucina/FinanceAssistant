export interface IRawTicker {
  Ticker: string;
  companyName: string;
}

export class Ticker {
  constructor(
    public readonly symbol: string,
    public readonly companyName: string
  ) {}
}

export class TickerMapBox {
  constructor(public tickerMap: Map<string, Ticker>) {}
}

export interface IRealTimeStockPrice {
  symbol: string;
  price: number;
  updated_at: string;
}
