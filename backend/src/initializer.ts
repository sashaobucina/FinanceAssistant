import { DataLoader } from "./data_loader";
import { ILogger } from "./interfaces/logger";

export const initializerFactory = (
  dataLoader: DataLoader,
  cron: any,
  logger: ILogger,
  initializeServer: () => void
) =>
  new Initializer(
    cron,
    dataLoader,
    cronJobFactory(dataLoader, logger),
    initializeServer
  );

export class Initializer {
  constructor(
    private readonly cron: any,
    private readonly dataLoader: DataLoader,
    private readonly cronJob: () => Promise<void>,
    private readonly initializeServer: () => void
  ) {}

  public initialize(): Promise<void> {
    this.cron.job("00 00 06 * * 1-7", this.cronJob).start();
    return this.dataLoader.load().then(this.initializeServer);
  }
}

export const cronJobFactory = (
  dataLoader: DataLoader,
  logger: ILogger
) => (): Promise<void> =>
  dataLoader.load().catch(err => {
    logger.logError(err);
  });
