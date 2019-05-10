import { failureResponses } from "../chat";
import { EntityFinder } from "../entity_finder";
import { CompanyRatingInfo } from "../info/company_rating_info";
import { IIntentInfo } from "../info/intent_info";
import { IIntent } from "../intents";
import { ChatResponse } from "../interfaces/chat_response";
import { IEntity } from "../interfaces/rasa";
import { Requester } from "../requester";

export const companyRatingFactory = (
  requester: Requester,
  entityFinder: EntityFinder
): IIntent => new CompanyRating(requester, entityFinder);

export class CompanyRating {
  public readonly info: IIntentInfo = new CompanyRatingInfo();
  constructor(
    private readonly requester: Requester,
    private readonly entityFinder: EntityFinder
  ) {}

  public call(entities: IEntity[]): Promise<ChatResponse> {
    const ticker = this.entityFinder.extractTicker(entities);
    if (ticker === undefined) {
      return Promise.resolve(
        new ChatResponse(
          { error: failureResponses.invalidTicker, status: 400 },
          "InvalidTicker",
          false
        )
      );
    }
    return this.requester
      .getCompanyRating(ticker.symbol)
      .then(companyRating => {
        const data = {
          rating: companyRating.rating,
          ticker
        };
        return new ChatResponse(data, this.info.intent, true);
      });
  }
}
