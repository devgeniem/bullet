import { JsonController, Get } from 'routing-controllers';
import { IReqResInType, IReqResIn } from '../integrations/ReqResIn/ReqResIn';
import { inject, injectable } from 'inversify';


@JsonController('/users')
@injectable()
export class UserController {

  constructor(@inject(IReqResInType) private reqResIntegration: IReqResIn) { }

  @Get('/')
  async getAll() {
    return await this.reqResIntegration.getUsers();
  }
}
