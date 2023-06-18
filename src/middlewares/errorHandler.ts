import { Request, Response, NextFunction } from 'express';
import AppError from '../errors/AppError';
import { RESPONSE_MESSAGES } from '../constants/responseMessages';

function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (error instanceof AppError) {
    console.log("errorCode ", {errorCode: error.statusCode});
    
    // Handle the custom AppError
    res.status(error.statusCode).json({ status: error.statusCode, msg: error.message });
  } else {
    // Handle other types of errors
    res.status(500).json({ error: RESPONSE_MESSAGES.SERVER_ERROR,  errorStack: error.stack });
  }
}

export default errorHandler;
