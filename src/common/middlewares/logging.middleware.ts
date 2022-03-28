import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { Observable } from 'rxjs';
import { logger } from '../lib/logger';

export default async (req: Request, res: Response, next: NextFunction) => {
  const ip: string | string[] | undefined =
    req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  logger.info('[' + req.method.toUpperCase() + "] '" + ip + "' " + req.url);

  next();
};
