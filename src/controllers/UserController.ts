import { inject, injectable } from "inversify";
import { IReqResIn, IReqResInType } from "../integrations/ReqResIn/ReqResIn";
import { httpGet, controller } from "inversify-express-utils";

@controller("/user")
export class UserController {
  constructor(@inject(IReqResInType) private reqResIntegration: IReqResIn) {}

  @httpGet("/")
  public async getAll() {
    return this.reqResIntegration.getUsers();
  }
}
