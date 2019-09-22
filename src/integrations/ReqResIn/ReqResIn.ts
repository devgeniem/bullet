import { injectable } from "inversify";
import * as api from "./api";

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}

export const IReqResInType = "IReqResInType";

export interface IReqResIn {
  getUsers(): Promise<User[]>;
}

@injectable()
export class ReqResIn implements IReqResIn {
  public async getUsers(): Promise<User[]> {
    const response = await api.getUsers();
    if (!response.ok) {
      throw new Error("Could not retrieve users from ReqRes.");
    }
    return response.data;
  }
}
