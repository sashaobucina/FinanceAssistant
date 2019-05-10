import { HighestMoversInfo } from "../info/highest_movers_info";
import { IIntentInfo } from "../info/intent_info";
import { IIntent } from "../intents";
import { ChatResponse } from "../interfaces/chat_response";
import { MoverType } from "../interfaces/financials";
import { IEntity } from "../interfaces/rasa";
import { Requester } from "../requester";

export const biggestLosersFactory = (requester: Requester) =>
  new HighestMovers(requester, "losers");

export const highestGainersFactory = (requester: Requester) =>
  new HighestMovers(requester, "gainers");

export class HighestMovers implements IIntent {
  public readonly info: IIntentInfo;
  constructor(
    private readonly requester: Requester,
    private readonly type: MoverType
  ) {
    this.info = new HighestMoversInfo(type);
  }

  public call(_entities: IEntity[]): Promise<ChatResponse> {
    return this.requester.getHighestMovers(this.type).then(highestMovers => {
      return new ChatResponse({ highestMovers }, this.info.intent, true);
    });
  }
}
