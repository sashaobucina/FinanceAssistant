import { IIntentInfo } from "../info/intent_info";
import { SectorPerformanceInfo } from "../info/sector_performance_info";
import { IIntent } from "../intents";
import { ChatResponse } from "../interfaces/chat_response";
import { IEntity } from "../interfaces/rasa";
import { Requester } from "../requester";

export const sectorPerformanceFactory = (
  requester: Requester
): SectorPerformance => new SectorPerformance(requester);

export class SectorPerformance implements IIntent {
  public readonly info: IIntentInfo = new SectorPerformanceInfo();
  constructor(private readonly requester: Requester) {}

  public call(_entities: IEntity[]): Promise<ChatResponse> {
    return this.requester.getSectorPerformance().then(sectorPerformances => {
      return new ChatResponse({ sectorPerformances }, this.info.intent, true);
    });
  }
}
