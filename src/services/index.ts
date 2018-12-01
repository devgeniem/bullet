import { ITodoRepository } from '../repositories';
import Todo from '../models/Todo';
import { injectable, inject } from 'inversify';


export interface ITodoService {
  getTodos(): Promise<Todo>;
}

@injectable()
export class TodoService implements ITodoService {
  @inject("ITodoRepository") private todoRepository;

  async getTodos(): Promise<Todo> {
    return await this.todoRepository.getTodos();
  }
};