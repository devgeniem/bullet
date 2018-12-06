import { JsonController, Get, Body, Post, HttpError, BadRequestError, BodyParam } from 'routing-controllers';
import { IReqResInType, IReqResIn } from '../integrations/ReqResIn/ReqResIn';
import { inject, injectable } from 'inversify';
import { IUserServiceType, IUserService } from '../services/UserService';


@JsonController('/users')
@injectable()
export class UserController {

  constructor(
    @inject(IReqResInType) private reqResIntegration: IReqResIn,
    @inject(IUserServiceType) private userService: IUserService
  ) { }

  @Get('/reqres')
  async getAllReqResUsers() {
    return await this.reqResIntegration.getUsers();
  }

  @Post('/')
  async createUser(
    @BodyParam('username') username: string
  ) {
    console.log(username);
    // try {
    //   await this.userService.createUser(username, password)
    // } catch (e) {
    //   throw new BadRequestError(e.message);
    // }
  } 
}