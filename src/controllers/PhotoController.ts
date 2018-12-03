import { Controller, Get, Param } from 'routing-controllers';
import container from '../inversify.config';
import { IPhotoIntegrationService, IPhotoIntegrationServiceType } from '../integrations';


@Controller('/photos')
export class PhotoController {

  private photoIntegrationService: IPhotoIntegrationService;

  constructor(photoIntegrationService?: IPhotoIntegrationService) {
    this.photoIntegrationService = photoIntegrationService || container.get<IPhotoIntegrationService>(IPhotoIntegrationServiceType);
  }

  @Get('/')
  async getAll() {
    return await this.photoIntegrationService.getPhotos();
  }

  @Get('/:id')
  async getOneById(@Param('id') id: number) {
    return await this.photoIntegrationService.getPhotoById(id);
  }
}