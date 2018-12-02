import { Controller, Get, Param } from 'routing-controllers';
import container from '../inversify.config';
import { IPhotoIntegrationService } from '../integrations';


@Controller('/photos')
export class PhotoController {

  @Get('/')
  async getAll() {
    const photoIntegrationService = container.get<IPhotoIntegrationService>("IPhotoIntegrationService");
    return await photoIntegrationService.getPhotos();
  }

  @Get('/:id')
  async getOneById(@Param('id') id: number) {
    const photoIntegrationService = container.get<IPhotoIntegrationService>("IPhotoIntegrationService");
    return await photoIntegrationService.getPhotoById(id);
  }
}