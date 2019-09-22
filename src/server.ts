import "reflect-metadata";

import * as dotenv from "dotenv";
import * as Knex from "knex";
import * as morgan from "morgan";
import { Model } from "objection";

import { createExpressServer, useContainer } from "routing-controllers";
import { PhotoController, TodoController, UserController } from "./controllers";
import iocContainer from "./inversify.config";
import { ApiAccessCheck, ErrorHandler } from "./middlewares";
import createAuthorizationChecker from "./utils/auth/createAuthorizationChecker";

dotenv.config();
const enviroment = process.env.NODE_ENV || "development";
// TODO knex should be dependency injected
// tslint:disable-next-line: no-var-requires
export const knex = Knex(require("../knexfile")[enviroment]);
Model.knex(knex);

const PORT = process.env.PORT || 3001;

useContainer(iocContainer);

const app = createExpressServer({
  controllers: [TodoController, PhotoController, UserController],
  middlewares: [ApiAccessCheck, ErrorHandler],
  authorizationChecker: createAuthorizationChecker(iocContainer),
  defaultErrorHandler: false
});

app.use(morgan("dev"));

app.listen(PORT, () => {
  // tslint:disable-next-line: no-console
  console.log(`Server started at ${new Date()} on port ${PORT}!`);
});

export default app;
