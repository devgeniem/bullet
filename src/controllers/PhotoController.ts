import { inject, injectable } from "inversify";
import { Get, JsonController, Param } from "routing-controllers";
import {
  IJSONPlaceholderGateway,
  IJSONPlaceholderGatewayType
} from "../integrations/JSONPlaceholderIntegration/Gateway";
import {
  ILogger,
  ILoggerFactory,
  ILoggerFactoryType
} from "../utils/LoggerFactory";

@JsonController("/photos")
@injectable()
export class PhotoController {
  private logger: ILogger;

  constructor(
    @inject(IJSONPlaceholderGatewayType)
    private jsonPlaceholderIntegration: IJSONPlaceholderGateway,
    @inject(ILoggerFactoryType) loggerFactory: ILoggerFactory
  ) {
    this.logger = loggerFactory.createLogger(this);
  }

  @Get("/")
  public async getAll() {
    this.logger.info("Getting all photos");
    return this.jsonPlaceholderIntegration
      .getJSONPlaceholderPhotos()
      .getPhotos();
  }

  @Get("/:id")
  public async getOneById(@Param("id") id: number) {
    return this.jsonPlaceholderIntegration
      .getJSONPlaceholderPhotos()
      .getPhotoById(id);
  }
}
