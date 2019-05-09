import { Request, Response } from "express";
import { Chat } from "../chat";
import { mapToObj } from "../helper";
import { ILogger } from "./logger";
import { TickerMapBox } from "./symbols";

export const symbolsFactory = (
  tickerMapBox: TickerMapBox,
  logger: ILogger
): Chat => (_req: Request, res: Response): void => {
  logger.log("Requested list of all valid symbols...");
  const tickerMapAsJSON = mapToObj(tickerMapBox.tickerMap);
  res.send({
    tickers: tickerMapAsJSON
  });
};
