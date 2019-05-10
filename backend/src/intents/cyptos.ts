import { CryptocurrenciesInfo } from "../info/cryptos_info";
import { IIntentInfo } from "../info/intent_info";
import { IIntent } from "../intents";
import { ChatResponse } from "../interfaces/chat_response";
import { IEntity } from "../interfaces/rasa";
import { Requester } from "../requester";

export const cryptocurrenciesFactory = (requester: Requester) =>
  new Cryptocurrencies(requester);

export class Cryptocurrencies implements IIntent {
  public readonly info: IIntentInfo = new CryptocurrenciesInfo();
  constructor(private readonly requester: Requester) {}

  public call(_entities: IEntity[]): Promise<ChatResponse> {
    return this.requester.getCryptos().then(cryptos => {
      return new ChatResponse({ cryptos }, this.info.intent, true);
    });
  }
}
