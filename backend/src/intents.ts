import { IIntentInfo } from "./info/intent_info";
import { stockPriceFactory } from "./intents/stock_price";
import { IEntity } from "./interfaces/rasa";
import { Requester } from "./requester";
import { companyRatingFactory } from "./intents/company_rating";

export const intents = (requester: Requester): IIntentMap => {
  // const incomeStatement = ({} as unknown) as IIntent; // TODO
  const companyRating = companyRatingFactory(requester);
  const stockPrice = stockPriceFactory(requester);
  return {
    companyRating,
    stockPrice
  };
};

export interface IIntent {
  info: IIntentInfo;
  call(entites: IEntity[]): Promise<any>;
}

export interface IIntentMap {
  [key: string]: IIntent;
}
