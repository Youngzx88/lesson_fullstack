import { Injectable,NestMiddleware } from "@nestjs/common";

@Injectable()
export class LoggerMiddleWare implements NestMiddleware{
  use(req: any, res: any, next: (error?: any) => void) {
    console.log('Request...', req.method, req.originalUrl);
    next();
  }
}