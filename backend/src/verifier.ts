import { IEntity } from "./interfaces/rasa";
import { TickerListBox } from "./interfaces/symbols";

export class RasaVerifier {
  constructor(private readonly tickerListBox: TickerListBox) {}

  public verify(entities: IEntity[]): IEntity[] {
    const symbols = this.tickerListBox.tickerList.map(ticker =>
      ticker.symbol.toLowerCase()
    );
    return entities.filter(entity => symbols.includes(entity.value));
  }
}
