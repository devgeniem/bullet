import "reflect-metadata";

import * as dotenv from "dotenv";
import * as Knex from "knex";
import * as morgan from "morgan";
import { Model } from "objection";
import iocContainer from "./inversify.config";
import { InversifyExpressServer } from "inversify-express-utils";

dotenv.config();
// TODO knex should be dependency injected
// tslint:disable-next-line: no-var-requires
export const knex = Knex(require("../knexfile"));
Model.knex(knex);

const PORT = process.env.PORT || 3001;

const server = new InversifyExpressServer(iocContainer);

const app = server.build();
app.use(morgan("dev"));

app.listen(PORT, () => {
  // tslint:disable-next-line: no-console
  console.log(`Server started at ${new Date()} on port ${PORT}!`);
});

export default app;
