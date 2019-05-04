import { ILogger } from "./interfaces/logger";
import { TickerListBox } from "./interfaces/symbols";
import { Requester } from "./requester";

export class DataLoader {
  constructor(
    private readonly requester: Requester,
    private readonly tickerListBox: TickerListBox,
    private readonly logger: ILogger
  ) {}

  public load(): Promise<void> {
    this.logger.log(`Sending request to load initial symbol data...`);
    return this.requester.getTickers().then(tickers => {
      this.tickerListBox.tickerList = tickers;
    });
  }
}
