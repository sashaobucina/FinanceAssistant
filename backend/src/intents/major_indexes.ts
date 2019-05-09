import { IIntentInfo } from "../info/intent_info";
import { MajorIndexesInfo } from "../info/major_indexes_info";
import { IIntent } from "../intents";
import { ChatResponse } from "../interfaces/chat_response";
import { IEntity } from "../interfaces/rasa";
import { Requester } from "../requester";

export const majorIndexesFactory = (requester: Requester): MajorIndexes =>
  new MajorIndexes(requester);

export class MajorIndexes implements IIntent {
  public readonly info: IIntentInfo = new MajorIndexesInfo();
  constructor(private readonly requester: Requester) {}

  public call(_entities: IEntity[]): Promise<ChatResponse> {
    return this.requester.getMajorIndexes().then(majorIndexes => {
      return new ChatResponse({ majorIndexes }, this.info.intent, true);
    });
  }
}
