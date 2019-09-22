import { inject, injectable } from "inversify";
import Todo from "../models/Todo";
import { ITodoRepository, ITodoRepositoryType } from "../repositories";

export const ITodoServiceType = "ITodoService";

export interface ITodoService {
  getTodos(): Promise<Todo[]>;
}

@injectable()
export class TodoService implements ITodoService {
  constructor(
    @inject(ITodoRepositoryType) private todoRepository: ITodoRepository
  ) {}

  public async getTodos(): Promise<Todo[]> {
    return this.todoRepository.getTodos();
  }
}
