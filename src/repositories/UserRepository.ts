import User from '../models/User';
import { injectable } from 'inversify';
import 'reflect-metadata';


export const IUserRepositoryType = 'IUserRepository';

export interface IUserRepository {
  createUser(username: string, password: string): Promise<User>;
  getUserByUsername(username: string): Promise<User>;
}

@injectable()
export class UserRepository implements IUserRepository { 
  async createUser(username: string, password: string): Promise<User> {
    const user = {
      username,
      password // TODO: hash this
    };
    
    return await User.query().insert(user);
  }
  
  async getUserByUsername(username: string): Promise<User> {
    return await User.query()
      .select()
      .findOne({ username });
  }
}