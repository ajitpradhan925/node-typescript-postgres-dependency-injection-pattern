import logger from "../logs/logger";
import { Request, Response, NextFunction } from 'express';
import { CustomRequest } from "../types/CustomRequest";

// Middleware function to add the logger instance to the request object
export default function loggerMiddleware(req: Request, res: Response, next: NextFunction) {
    let customReq = req as CustomRequest;
    customReq.logger = logger;
    req = customReq
    next();
  }