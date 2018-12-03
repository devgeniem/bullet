import { injectable } from 'inversify';
import * as api from './api';


export interface Photo {
  id: number;
  title: string;
  albumId: number;
  url: string;
  thumbnailUrl: string;
}

export const IJSONPlaceholderPhotosType = 'IJSONPlaceholderPhotos';

export interface IJSONPlaceholderPhotos {
  getPhotos(): Promise<Array<Photo>>;
  getPhotoById(id): Promise<Photo>;
}

@injectable()
export class JSONPlaceholderPhotos implements IJSONPlaceholderPhotos {

  async getPhotos(): Promise<Photo[]> {
    const response = await api.getPhotos();
    if (!response.ok) throw new Error('Could not retrieve photos.');
    return response.data;
  }

  async getPhotoById(id: number): Promise<Photo> {
    const response = await api.getPhotos();
    if (!response.ok) throw new Error(`Could not retrieve photo ${id}.`);
    return response.data;
  }

}