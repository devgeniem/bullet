import { Middleware, ExpressErrorMiddlewareInterface } from 'routing-controllers';
import { injectable, inject } from 'inversify';
import { ILogger, ILoggerFactory, ILoggerFactoryType } from '../utils/LoggerFactory';

@Middleware({ type: 'after' })
@injectable()
export class ErrorLogger implements ExpressErrorMiddlewareInterface {

  private logger: ILogger;

  constructor(@inject(ILoggerFactoryType) loggerFactory: ILoggerFactory) {
    this.logger = loggerFactory.createLogger(this);
  }

  error(error: any, request: any, response: any, next: (err?: any) => any) {
    // TODO
    this.logger.error(`CODE: ${error.httpCode} NAME: ${error.name} MESSAGE: ${error.message}`);
    next();
  }
}
