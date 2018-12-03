import { Controller, Get } from 'routing-controllers';
import container from '../inversify.config';
import { ITodoService, ITodoServiceType } from '../services';
import { inject, injectable } from 'inversify';


@Controller('/todos')
export class TodoController {

  private todoService: ITodoService;

  constructor(todoService?: ITodoService) {
    this.todoService = todoService || container.get<ITodoService>(ITodoServiceType);
  }

  @Get('/')
  async getAll() {
    return await this.todoService.getTodos();
  }
}