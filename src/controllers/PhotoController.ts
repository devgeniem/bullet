import { Controller, Get } from 'routing-controllers';
import container from '../inversify.config';
import { IPhotoIntegrationService } from '../integrations';


@Controller('/photos')
export class PhotoController {

  @Get('/')
  async getAll() {
    const photoIntegrationService = container.get<IPhotoIntegrationService>("IPhotoIntegrationService");
    return await photoIntegrationService.getPhotos();
  }
}