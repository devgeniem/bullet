import { inject, injectable } from "inversify";
import {
  ExpressMiddlewareInterface,
  Middleware,
  UnauthorizedError
} from "routing-controllers";
import {
  ILogger,
  ILoggerFactory,
  ILoggerFactoryType
} from "../utils/LoggerFactory";

@Middleware({ type: "before" })
@injectable()
export class ApiAccessCheck implements ExpressMiddlewareInterface {
  private logger: ILogger;

  constructor(@inject(ILoggerFactoryType) loggerFactory: ILoggerFactory) {
    this.logger = loggerFactory.createLogger(this);
  }

  public use(request: any, response: any, next: (err?: any) => any): void {
    const { apikey } = request.headers;
    if (apikey !== process.env.APIKEY) {
      this.logger.warn(`${apikey} does not match ${process.env.APIKEY}`);
      throw new UnauthorizedError("INVALID_API_KEY");
    }
    next();
  }
}
