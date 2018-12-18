import { Middleware, ExpressErrorMiddlewareInterface } from 'routing-controllers';
import { injectable, inject } from 'inversify';
import { ILogger, ILoggerFactory, ILoggerFactoryType } from '../utils/LoggerFactory';

@Middleware({ type: 'after' })
@injectable()
export class ErrorHandler implements ExpressErrorMiddlewareInterface {

  private logger: ILogger;

  constructor(@inject(ILoggerFactoryType) loggerFactory: ILoggerFactory) {
    this.logger = loggerFactory.createLogger(this);
  }

  error(error: any, request: any, response: any, next: (err?: any) => any) {
    console.log(error.name, error.httpCode, error.message);
    this.logger.warn('moro');
    this.logger.warn('error.message', error.httpCode);
    next();
  }
}
