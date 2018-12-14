import { injectable, inject } from 'inversify';
import { IJSONPlaceholderPhotos, IJSONPlaceholderPhotosType } from './Photos';
import { IJSONPlaceholderPostsType, IJSONPlaceholderPosts } from './Posts';


export const IJSONPlaceholderGatewayType = 'IJSONPlaceholderGateway';

export interface IJSONPlaceholderGateway {
  getJSONPlaceholderPhotos(): IJSONPlaceholderPhotos;
  getJSONPlaceholderPosts(): IJSONPlaceholderPosts;
}

@injectable()
export class JSONPlaceholderGateway implements IJSONPlaceholderGateway {

  constructor(
    @inject(IJSONPlaceholderPhotosType) private photos : IJSONPlaceholderPhotos,
    @inject(IJSONPlaceholderPostsType) private posts: IJSONPlaceholderPosts,
  ) { }

  getJSONPlaceholderPhotos(): IJSONPlaceholderPhotos {
    return this.photos;
  }

  getJSONPlaceholderPosts(): IJSONPlaceholderPosts {
    return this.posts;
  }

}
