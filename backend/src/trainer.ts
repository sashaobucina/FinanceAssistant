/* tslint:disable */
import { DataGenerator } from "./data_generator";
import { DataLoader } from "./data_loader";
import { ILogger } from "./interfaces/logger";
import { IRasaConfig, ITrainer } from "./interfaces/training_data";
import { Requester } from "./requester";

export const trainerFactory = (
  dataLoader: DataLoader,
  dataGenerator: DataGenerator,
  requester: Requester,
  rasaConfig: IRasaConfig,
  logger: ILogger
): ITrainer =>
  new RasaTrainer(dataLoader, dataGenerator, requester, rasaConfig, logger);

export class RasaTrainer {
  constructor(
    private readonly dataLoader: DataLoader,
    private readonly dataGenerator: DataGenerator,
    private readonly requester: Requester,
    private readonly rasaConfig: IRasaConfig,
    private readonly logger: ILogger
  ) {}

  public train(): Promise<void> {
    return this.dataLoader.load().then(() => {
      this.logger.log("Sending request to start model training...");
      const trainingData = this.dataGenerator.generateTrainingData();
      // return this.requester
      //   .trainModel(trainingData, this.rasaConfig, "default", "financeassistant")
      //   .then(() => {
      //     this.logger.log("NLP model finished training");
      //   });
      return Promise.resolve();
    });
  }
}
/* tslint:enable */
