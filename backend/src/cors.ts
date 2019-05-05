import { NextFunction, Request, Response } from "express";

export const cors = (req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", req.get("Origin"));
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
};
