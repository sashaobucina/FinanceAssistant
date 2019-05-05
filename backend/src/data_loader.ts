import { ILogger } from "./interfaces/logger";
import { TickerMapBox } from "./interfaces/symbols";
import { Requester } from "./requester";

export class DataLoader {
  constructor(
    private readonly requester: Requester,
    private readonly tickerMapBox: TickerMapBox,
    private readonly logger: ILogger
  ) {}

  public load(): Promise<void> {
    this.logger.log(`Sending request to load initial symbol data...`);
    return this.requester.getTickers().then(tickers => {
      tickers.forEach(ticker =>
        this.tickerMapBox.tickerMap.set(ticker.symbol.toLowerCase(), ticker)
      );
    });
  }
}
