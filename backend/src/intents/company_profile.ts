import { failureResponses } from "../chat";
import { EntityFinder } from "../entity_finder";
import { CompanyProfileInfo } from "../info/company_profile_info";
import { IIntentInfo } from "../info/intent_info";
import { IIntent } from "../intents";
import { ChatResponse } from "../interfaces/chat_response";
import { IEntity } from "../interfaces/rasa";
import { Requester } from "../requester";

export const companyProfileFactory = (
  requester: Requester,
  entityFinder: EntityFinder
): CompanyProfile => new CompanyProfile(requester, entityFinder);

export class CompanyProfile implements IIntent {
  public readonly info: IIntentInfo = new CompanyProfileInfo();
  constructor(
    private readonly requester: Requester,
    private readonly entityFinder: EntityFinder
  ) {}

  public call(entities: IEntity[]): Promise<ChatResponse> {
    const ticker = this.entityFinder.extractTicker(entities);
    if (ticker === undefined) {
      return Promise.resolve(
        new ChatResponse(
          { error: failureResponses.invalidTicker },
          "NullIntent",
          false
        )
      );
    }
    const promises: Array<Promise<any>> = [
      this.requester.getCompanyProfile(ticker.symbol),
      this.requester.getCompanyRating(ticker.symbol)
    ];
    return Promise.all(promises).then(result => {
      const [companyProfile, companyRating] = result;
      return new ChatResponse(
        {
          profile: companyProfile,
          rating: companyRating,
          ticker
        },
        this.info.intent,
        true
      );
    });
  }
}
