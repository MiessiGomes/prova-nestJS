import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ValueMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    req.body.valor = req.body.valor * 0.5;
    next();
  }
}
