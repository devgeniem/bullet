import { injectable } from 'inversify';
import axios from 'axios';


export interface Photo {
  id: number;
  title: string;
  albumId: number;
  url: string;
  thumbnailUrl: string;
}

export interface IPhotoIntegrationService {
  getPhotos(): Promise<Array<Photo>>;
  getPhotoById(id): Promise<Photo>;
}

@injectable()
export class PhotoIntegrationService implements IPhotoIntegrationService {

  async getPhotos(): Promise<Photo[]> {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=20');
    return response.data;
  }

  async getPhotoById(id: number): Promise<Photo> {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${Math.ceil(id)}`);
    return response.data;
  }

}