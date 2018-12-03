import { Container } from "inversify";
import { makeLoggerMiddleware } from 'inversify-logger-middleware';
import { ITodoRepositoryType, ITodoRepository, TodoRepository } from "./repositories";
import { ITodoServiceType, ITodoService, TodoService } from './services';
import { PhotoController, TodoController } from "./controllers";
import { IJSONPlaceholderGateway, IJSONPlaceholderGatewayType, JSONPlaceholderGateway } from "./integrations/JSONPlaceholderIntegration/Gateway";
import { IJSONPlaceholderPhotos, IJSONPlaceholderPhotosType, JSONPlaceholderPhotos } from "./integrations/JSONPlaceholderIntegration/Photos";
import { IJSONPlaceholderPosts, IJSONPlaceholderPostsType, JSONPlaceholderPosts } from "./integrations/JSONPlaceholderIntegration/Posts";

var container = new Container();
container.bind<ITodoRepository>(ITodoRepositoryType).to(TodoRepository);
container.bind<ITodoService>(ITodoServiceType).to(TodoService);
container.bind<IJSONPlaceholderGateway>(IJSONPlaceholderGatewayType).to(JSONPlaceholderGateway);
container.bind<IJSONPlaceholderPhotos>(IJSONPlaceholderPhotosType).to(JSONPlaceholderPhotos);
container.bind<IJSONPlaceholderPosts>(IJSONPlaceholderPostsType).to(JSONPlaceholderPosts);
container.bind<PhotoController>(PhotoController).toSelf();
container.bind<TodoController>(TodoController).toSelf();

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  container.applyMiddleware(makeLoggerMiddleware());
}

export default container;