import { inject, injectable } from "inversify";
import { IJSONPlaceholderPhotos, IJSONPlaceholderPhotosType } from "./Photos";
import { IJSONPlaceholderPosts, IJSONPlaceholderPostsType } from "./Posts";

export const IJSONPlaceholderGatewayType = "IJSONPlaceholderGateway";

export interface IJSONPlaceholderGateway {
  getJSONPlaceholderPhotos(): IJSONPlaceholderPhotos;
  getJSONPlaceholderPosts(): IJSONPlaceholderPosts;
}

@injectable()
export class JSONPlaceholderGateway implements IJSONPlaceholderGateway {
  constructor(
    @inject(IJSONPlaceholderPhotosType) private photos: IJSONPlaceholderPhotos,
    @inject(IJSONPlaceholderPostsType) private posts: IJSONPlaceholderPosts
  ) {}

  public getJSONPlaceholderPhotos(): IJSONPlaceholderPhotos {
    return this.photos;
  }

  public getJSONPlaceholderPosts(): IJSONPlaceholderPosts {
    return this.posts;
  }
}
