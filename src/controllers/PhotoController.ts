import { inject, injectable } from "inversify";
import {
  interfaces,
  controller,
  httpGet,
  httpPost,
  httpDelete,
  request,
  queryParam,
  response,
  requestParam,
  httpHead
} from "inversify-express-utils";

import {
  IJSONPlaceholderGateway,
  IJSONPlaceholderGatewayType
} from "../integrations/JSONPlaceholderIntegration/Gateway";

@controller("/photos")
export class PhotoController {
  @inject(IJSONPlaceholderGatewayType)
  private jsonPlaceholderIntegration: IJSONPlaceholderGateway;
  @httpGet("/")
  public async getAll() {
    return this.jsonPlaceholderIntegration
      .getJSONPlaceholderPhotos()
      .getPhotos();
  }

  @httpGet("/:id")
  public async getOneById(@requestParam("id") id: number) {
    return this.jsonPlaceholderIntegration
      .getJSONPlaceholderPhotos()
      .getPhotoById(id);
  }
}
