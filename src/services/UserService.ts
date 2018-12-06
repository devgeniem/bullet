import { IUserRepositoryType, IUserRepository } from '../repositories';
import User from '../models/User';
import { injectable, inject } from 'inversify';


export const IUserServiceType = 'IUserService';

export interface IUserService {
  createUser(username: string, password: string): Promise<User>;
  getUserByUsername(username: string): Promise<User>;
}

@injectable()
export class UserService implements IUserService {
  constructor(@inject(IUserRepositoryType) private userRepository : IUserRepository) { }

  async createUser(username: string, password: string): Promise<User> {
    const user = await this.userRepository.createUser(username, password);
    if (user) throw new Error('user-creation-failed');
    return user;
  }

  async getUserByUsername(username: string): Promise<User>{
    const user = await this.userRepository.getUserByUsername(username);
    if (!user) throw new Error('no-such-user-found');
    return user;
  }
};