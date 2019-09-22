import { inject, injectable } from "inversify";
import { Get, JsonController } from "routing-controllers";
import { IReqResIn, IReqResInType } from "../integrations/ReqResIn/ReqResIn";

@JsonController("/users")
@injectable()
export class UserController {
  constructor(@inject(IReqResInType) private reqResIntegration: IReqResIn) {}

  @Get("/")
  public async getAll() {
    return this.reqResIntegration.getUsers();
  }
}
