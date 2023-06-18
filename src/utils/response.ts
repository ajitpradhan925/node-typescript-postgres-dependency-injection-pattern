import { Response } from 'express';

export function sendResponse(res: Response, statusCode: number, data: any, msg: string) {
  return res.status(statusCode).json({
    status: statusCode,
    msg,
    data
  });
}
