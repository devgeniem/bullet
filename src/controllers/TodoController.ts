import { JsonController, Get } from 'routing-controllers';
import { ITodoService, ITodoServiceType } from '../services';
import { inject, injectable } from 'inversify';
import * as winston from 'winston';


@JsonController('/todos')
@injectable()
export class TodoController {
  private todoService : ITodoService;
  private logger: any;

  constructor(@inject(ITodoServiceType) todoService: ITodoService, @inject('LoggerFactoryType') loggerFactory: any) {
    this.todoService = todoService;
    this.logger = loggerFactory(TodoController);
  }

  @Get('/')
  async getAll() {
 
    this.logger.info('I get called here.');
    return await this.todoService.getTodos();
  }
}