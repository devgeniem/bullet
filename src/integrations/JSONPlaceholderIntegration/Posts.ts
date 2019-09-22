import { injectable } from "inversify";
import * as api from "./api";

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export const IJSONPlaceholderPostsType = "IJSONPlaceholderPosts";

export interface IJSONPlaceholderPosts {
  getPosts(): Promise<Post[]>;
}

@injectable()
export class JSONPlaceholderPosts implements IJSONPlaceholderPosts {
  public async getPosts(): Promise<Post[]> {
    const response = await api.getPosts();
    if (!response.ok) {
      throw new Error("Could not retrieve posts.");
    }
    return response.data;
  }
}
