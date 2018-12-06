import { JsonController, Get } from 'routing-controllers';
import { ITodoService, ITodoServiceType } from '../services';
import { inject, injectable } from 'inversify';


@JsonController('/todos')
@injectable()
export class TodoController {

  constructor(@inject(ITodoServiceType) private todoService: ITodoService) { }

  @Get('/')
  async getAll() {
    return await this.todoService.getTodos();
  }
}