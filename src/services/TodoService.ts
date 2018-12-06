import { ITodoRepositoryType, ITodoRepository } from '../repositories';
import Todo from '../models/Todo';
import { injectable, inject } from 'inversify';


export const ITodoServiceType = 'ITodoService';

export interface ITodoService {
  getTodos(): Promise<Array<Todo>>;
}

@injectable()
export class TodoService implements ITodoService {

  constructor(@inject(ITodoRepositoryType) private todoRepository : ITodoRepository) { }

  async getTodos(): Promise<Todo[]> {
    return await this.todoRepository.getTodos();
  }
};