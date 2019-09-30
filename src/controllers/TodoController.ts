import { inject, injectable } from "inversify";

import { ITodoService, ITodoServiceType } from "../services";
import { httpGet, controller } from "inversify-express-utils";

@controller("/todos")
export class TodoController {
  @inject(ITodoServiceType) private todoService: ITodoService;
  @httpGet("/")
  public async getAll() {
    throw new Error("An error occurred while trying to fetch todos!");
  }
}
