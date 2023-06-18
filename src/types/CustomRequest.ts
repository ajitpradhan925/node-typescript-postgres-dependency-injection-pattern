import winston from "winston";
import { Request } from "express";

// Extend the Request interface to include the logger property
export interface CustomRequest extends Request {
  logger: winston.Logger;
}
