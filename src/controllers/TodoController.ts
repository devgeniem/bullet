import { Controller, Get } from 'routing-controllers';
import container from '../inversify.config';
import { ITodoService, ITodoServiceType } from '../services';
import { inject, injectable } from 'inversify';


@Controller('/todos')
@injectable()
export class TodoController {

  constructor(@inject(ITodoServiceType) private todoService: ITodoService) { }

  @Get('/')
  async getAll() {
    return await this.todoService.getTodos();
  }
}