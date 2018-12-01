import Todo from '../models/Todo';
import { injectable } from 'inversify';
import 'reflect-metadata';


export interface ITodoRepository {
  getTodos(): Promise<Array<Todo>>
}

@injectable()
export class TodoRepository implements ITodoRepository {
  async getTodos(): Promise<Todo[]> {
    return await Todo.query();
  }
}