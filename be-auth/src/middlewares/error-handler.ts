import { Request, Response, NextFunction } from "express";
import { RequestError } from "../errors/request";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof RequestError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }
  res.status(400).send({ 
    errors: [{ message: 'Something went wrong' }]
  });
};