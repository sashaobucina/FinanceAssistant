import { ForexInfo } from "../info/forex_info";
import { IIntentInfo } from "../info/intent_info";
import { IIntent } from "../intents";
import { ChatResponse } from "../interfaces/chat_response";
import { IEntity } from "../interfaces/rasa";
import { Requester } from "../requester";

export const forexFactory = (requester: Requester): Forex =>
  new Forex(requester);

export class Forex implements IIntent {
  public readonly info: IIntentInfo = new ForexInfo();
  constructor(private readonly requester: Requester) {}

  public call(_entities: IEntity[]): Promise<ChatResponse> {
    return this.requester.getForex().then(forex => {
      return new ChatResponse({ forex }, this.info.intent, true);
    });
  }
}
