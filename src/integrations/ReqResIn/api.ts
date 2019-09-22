import { create } from "apisauce";

const api = create({
  baseURL: "https://reqres.in/api",
  headers: { Accept: "application/json" }
});

export const getUsers = async (): Promise<any> => {
  return api.get("/users");
};
