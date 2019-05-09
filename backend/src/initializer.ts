import { DataLoader } from "./data_loader";
import { ILogger } from "./interfaces/logger";
import { ITrainer } from "./interfaces/training_data";

export const initializerFactory = (
  dataLoader: DataLoader,
  trainer: ITrainer,
  cron: any,
  logger: ILogger,
  initializeServer: () => void
) =>
  new Initializer(
    cron,
    trainer,
    cronJobFactory(dataLoader, logger),
    initializeServer
  );

export class Initializer {
  constructor(
    private readonly cron: any,
    private readonly trainer: ITrainer,
    private readonly cronJob: () => Promise<void>,
    private readonly initializeServer: () => void
  ) {}

  public initialize(): Promise<void> {
    this.cron.job("00 00 06 * * 1-7", this.cronJob).start();
    return this.trainer.train().then(this.initializeServer);
  }
}

export const cronJobFactory = (
  dataLoader: DataLoader,
  logger: ILogger
) => (): Promise<void> =>
  dataLoader.load().catch(err => {
    logger.logError(err);
  });
