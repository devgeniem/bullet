import {Middleware, ExpressMiddlewareInterface} from "routing-controllers";
import { injectable, inject } from "inversify";
import { ILoggerFactoryType, ILogger, ILoggerFactory } from "../logging";

@Middleware({ type: "before" })
@injectable()
export class ApiAccessCheck implements ExpressMiddlewareInterface {
  private logger: ILogger;

  constructor(@inject(ILoggerFactoryType) loggerFactory: ILoggerFactory) {
    this.logger = loggerFactory.createLogger(this);
  }

  use(request: any, response: any, next: (err?: any) => any): void {
    console.log('Request', request);
    const { apikey } = request.headers;
    if (apikey !== process.env.APIKEY) {
      this.logger.warn(`${apikey} does not match ${process.env.APIKEY}`);
      throw Error('eppääse');
    }
    next();
  }
}