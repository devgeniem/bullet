import { JsonController, Get, Param } from 'routing-controllers';
import { inject, injectable } from 'inversify';
import { IJSONPlaceholderGatewayType, IJSONPlaceholderGateway } from '../integrations/JSONPlaceholderIntegration/Gateway';
import { ILoggerFactoryType, ILoggerFactory, ILogger } from '../utils/LoggerFactory';


@JsonController('/photos')
@injectable()
export class PhotoController {
  private logger: ILogger;

  constructor(
    @inject(IJSONPlaceholderGatewayType) private jsonPlaceholderIntegration: IJSONPlaceholderGateway,
    @inject(ILoggerFactoryType) loggerFactory: ILoggerFactory,
  ) {
    this.logger = loggerFactory.createLogger(this);
  }

  @Get('/')
  async getAll() {
    this.logger.info('Getting all photos');
    return await this.jsonPlaceholderIntegration.getJSONPlaceholderPhotos().getPhotos();
  }

  @Get('/:id')
  async getOneById(@Param('id') id: number) {
    return await this.jsonPlaceholderIntegration.getJSONPlaceholderPhotos().getPhotoById(id);
  }
}
