import { Controller, Get, Param } from 'routing-controllers';
import container from '../inversify.config';
import { inject, injectable } from 'inversify';
import { IJSONPlaceholderGatewayType, IJSONPlaceholderGateway } from '../integrations/JSONPlaceholderIntegration/Gateway';


@Controller('/photos')
@injectable()
export class PhotoController {

  constructor(@inject(IJSONPlaceholderGatewayType) private jsonPlaceholderIntegration: IJSONPlaceholderGateway) { }

  @Get('/')
  async getAll() {
    return await this.jsonPlaceholderIntegration.getJSONPlaceholderPhotos().getPhotos();
  }

  @Get('/:id')
  async getOneById(@Param('id') id: number) {
    return await this.jsonPlaceholderIntegration.getJSONPlaceholderPhotos().getPhotoById(id);
  }
}