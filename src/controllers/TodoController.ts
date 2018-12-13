import { JsonController, Get, Authorized } from 'routing-controllers';
import { ITodoService, ITodoServiceType } from '../services';
import { inject, injectable } from 'inversify';
import { ILogger, ILoggerFactoryType, ILoggerFactory } from '../logging';


@JsonController('/todos')
@injectable()
export class TodoController {
  private logger: ILogger;

  constructor(
    @inject(ITodoServiceType) private todoService: ITodoService,
    @inject(ILoggerFactoryType) loggerFactory: ILoggerFactory
  ) {
    this.logger = loggerFactory.createLogger(this);
  }

  @Get('/')
  @Authorized()
  async getAll() {
    this.logger.info('Getting todos...');
    this.logger.warn('This is a warning');

    try {
      throw new Error('An error occurred while trying to fetch todos!');
    } catch (e) {
      this.logger.error(e.message);
    }
    return await this.todoService.getTodos();
  }
}