import { create } from "apisauce";

const api = create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: { Accept: "application/json" }
});

export const getPhotos = async (): Promise<any> => {
  return api.get("/photos?_limit=20");
};

export const getPhotoById = async (id: number): Promise<any> => {
  return api.get(`/photos/${Math.ceil(id)}`);
};

export const getPosts = async (): Promise<any> => {
  return api.get("/posts?_limit=20");
};
