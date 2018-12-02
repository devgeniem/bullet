import { Controller, Get } from 'routing-controllers';
import container from '../inversify.config';
import { ITodoService } from '../services';


@Controller('/todos')
export class TodoController {

  @Get('/')
  async getAll() {
    const todoService = container.get<ITodoService>("ITodoService");
    return await todoService.getTodos();
  }
}