import { injectable } from "inversify";
import Todo from "../models/Todo";

export const ITodoRepositoryType = "ITodoRepository";

export interface ITodoRepository {
  getTodos(): Promise<Todo[]>;
}

@injectable()
export class TodoRepository implements ITodoRepository {
  public async getTodos(): Promise<Todo[]> {
    return Todo.query();
  }
}
