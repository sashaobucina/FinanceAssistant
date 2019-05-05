import { EntityFinder } from "./entity_finder";
import { IIntentInfo } from "./info/intent_info";
import { companyRatingFactory } from "./intents/company_rating";
import { stockPriceFactory } from "./intents/stock_price";
import { ChatResponse } from "./interfaces/chat_response";
import { IEntity } from "./interfaces/rasa";
import { Requester } from "./requester";

export const intents = (
  requester: Requester,
  entityFinder: EntityFinder
): IIntentMap => {
  // const incomeStatement = ({} as unknown) as IIntent; // TODO
  const companyRating = companyRatingFactory(requester, entityFinder);
  const stockPrice = stockPriceFactory(requester, entityFinder);
  return {
    companyRating,
    stockPrice
  };
};

export interface IIntent {
  info: IIntentInfo;
  call(entites: IEntity[]): Promise<ChatResponse>;
}

export interface IIntentMap {
  [key: string]: IIntent;
}
