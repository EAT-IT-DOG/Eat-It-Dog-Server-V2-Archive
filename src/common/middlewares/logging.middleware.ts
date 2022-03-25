import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { Observable } from 'rxjs';
import { logger } from '../lib/logger';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  constructor() {}

  use(req: Request, res: Response, next: NextFunction) {
    const ip: string | string[] | undefined = req.headers['x-forwarded-for'];

    logger.info('[' + req.method.toUpperCase() + "] '" + ip + "' " + req.url);

    next();
  }
}
