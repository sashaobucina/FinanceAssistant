import { Request, Response } from "express";
import { TickerMapBox } from "./symbols";
import { Chat } from "../chat";
import { mapToObj } from "../helper";

export const symbolsFactory = (
  tickerMapBox: TickerMapBox
): Chat => (_req: Request, res: Response): void => {
  const tickerMapAsJSON = mapToObj(tickerMapBox.tickerMap)
  res.send({
    tickerMap: tickerMapAsJSON
  })
}