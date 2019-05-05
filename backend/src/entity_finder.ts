import { ITickerEntity } from "./interfaces/entities";
import { IEntity } from "./interfaces/rasa";
import { Ticker, TickerMapBox } from "./interfaces/symbols";

export const entityFinderFactory = (tickerMapBox: TickerMapBox): EntityFinder =>
  new EntityFinder(tickerMapBox);

export class EntityFinder {
  constructor(private readonly tickerMapBox: TickerMapBox) {}

  public extractTicker(entities: IEntity[]): Ticker | undefined {
    const tickerEntities = entities.filter(
      (entity): entity is ITickerEntity => entity.entity === "ticker"
    );
    return tickerEntities.length !== 0
      ? this.tickerMapBox.tickerMap.get(tickerEntities[0].value)
      : undefined;
  }
}
