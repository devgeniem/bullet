import { JsonController, Get, Authorized } from 'routing-controllers';
import { ITodoService, ITodoServiceType } from '../services';
import { inject, injectable } from 'inversify';


@JsonController('/todos')
@injectable()
export class TodoController {

  constructor(@inject(ITodoServiceType) private todoService: ITodoService) { }

  @Authorized()
  @Get('/')
  async getAll() {
    return await this.todoService.getTodos();
  }
}