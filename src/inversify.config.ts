import { Container } from "inversify";
import { makeLoggerMiddleware } from 'inversify-logger-middleware';
import { ITodoRepositoryType, ITodoRepository, TodoRepository } from "./repositories";
import { ITodoServiceType, ITodoService, TodoService } from './services';
import { IPhotoIntegrationServiceType, IPhotoIntegrationService, PhotoIntegrationService } from './integrations';

var container = new Container();
container.bind<ITodoRepository>(ITodoRepositoryType).to(TodoRepository);
container.bind<ITodoService>(ITodoServiceType).to(TodoService);
container.bind<IPhotoIntegrationService>(IPhotoIntegrationServiceType).to(PhotoIntegrationService);

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  container.applyMiddleware(makeLoggerMiddleware());
}

export default container;