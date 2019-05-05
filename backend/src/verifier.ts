import { IEntity } from "./interfaces/rasa";
import { TickerMapBox } from "./interfaces/symbols";

export class RasaVerifier {
  constructor(private readonly tickerMapBox: TickerMapBox) {}

  public verify(entities: IEntity[]): IEntity[] {
    const symbols = Array.from(this.tickerMapBox.tickerMap.keys());
    return entities.filter(entity => symbols.includes(entity.value));
  }
}
