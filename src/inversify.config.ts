import { UserController } from "./controllers/UserController";
import { TodoController } from "./controllers/TodoController";
import { PhotoController } from "./controllers/PhotoController";
import { Container } from "inversify";
import {
  IJSONPlaceholderGateway,
  IJSONPlaceholderGatewayType,
  JSONPlaceholderGateway
} from "./integrations/JSONPlaceholderIntegration/Gateway";
import {
  IJSONPlaceholderPhotos,
  IJSONPlaceholderPhotosType,
  JSONPlaceholderPhotos
} from "./integrations/JSONPlaceholderIntegration/Photos";
import {
  IJSONPlaceholderPosts,
  IJSONPlaceholderPostsType,
  JSONPlaceholderPosts
} from "./integrations/JSONPlaceholderIntegration/Posts";
import {
  IReqResIn,
  IReqResInType,
  ReqResIn
} from "./integrations/ReqResIn/ReqResIn";

import {
  ITodoRepository,
  ITodoRepositoryType,
  TodoRepository
} from "./repositories";
import { ITodoService, ITodoServiceType, TodoService } from "./services";

const container = new Container();
container.bind<ITodoRepository>(ITodoRepositoryType).to(TodoRepository);
container.bind<ITodoService>(ITodoServiceType).to(TodoService);
container
  .bind<IJSONPlaceholderGateway>(IJSONPlaceholderGatewayType)
  .to(JSONPlaceholderGateway);
container
  .bind<IJSONPlaceholderPhotos>(IJSONPlaceholderPhotosType)
  .to(JSONPlaceholderPhotos);
container
  .bind<IJSONPlaceholderPosts>(IJSONPlaceholderPostsType)
  .to(JSONPlaceholderPosts);
container.bind<PhotoController>(PhotoController).toSelf();
container.bind<TodoController>(TodoController).toSelf();
container.bind<UserController>(UserController).toSelf();
container.bind<IReqResIn>(IReqResInType).to(ReqResIn);
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  // container.applyMiddleware(makeLoggerMiddleware());
}

export default container;
