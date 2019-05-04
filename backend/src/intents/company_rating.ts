import { Requester } from "../requester";
import { IIntent } from "../intents";
import { IIntentInfo } from "../info/intent_info";
import { EntityType } from "../interfaces/entities";
import { CompanyRatingInfo } from "../info/company_rating_info";
import { IEntity } from "../interfaces/rasa";
import { extractTicker } from "./stock_price";

export const companyRatingFactory = (requester: Requester): IIntent =>
  new CompanyRating(requester)

export class CompanyRating {
  public readonly info: IIntentInfo = new CompanyRatingInfo()
  constructor(
    private readonly requester: Requester
  ) {}

  public call(entities: IEntity[]): Promise<any> {
    const symbol = extractTicker(entities)
    return this.requester.getCompanyRating(symbol).then(companyRating => {
      return {
        financials: {
          rating: companyRating
        },
        success: true,
        symbol
      }
    })
  }
}