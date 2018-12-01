import { Container } from "inversify";
import { ITodoRepository, TodoRepository } from "./repositories";
import { ITodoService, TodoService } from './services';

var container = new Container();
container.bind<ITodoRepository>("ITodoRepository").to(TodoRepository);
container.bind<ITodoService>("ITodoService").to(TodoService);

export default container;