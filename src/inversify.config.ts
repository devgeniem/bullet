import { Container } from "inversify";
import { ITodoRepository, TodoRepository } from "./repositories";
import { ITodoService, TodoService } from './services';
import { IPhotoIntegrationService, PhotoIntegrationService } from './integrations';

var container = new Container();
container.bind<ITodoRepository>("ITodoRepository").to(TodoRepository);
container.bind<ITodoService>("ITodoService").to(TodoService);
container.bind<IPhotoIntegrationService>("IPhotoIntegrationService").to(PhotoIntegrationService);

export default container;