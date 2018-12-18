import * as dotenv from 'dotenv';
import 'reflect-metadata';
import iocContainer from './inversify.config';
import { createExpressServer, useContainer, Action } from 'routing-controllers';
import * as morgan from 'morgan';
import * as Knex from 'knex';
import { Model } from 'objection';
import { TodoController, PhotoController, UserController } from './controllers';
import createAuthorizationChecker from './utils/auth/createAuthorizationChecker';
import { ApiAccessCheck, ErrorHandler } from './middlewares';


dotenv.config();
const enviroment = process.env.NODE_ENV || 'development';
export const knex = Knex(require('../knexfile')[enviroment]);
Model.knex(knex);

// // migrate db
// knex.migrate.latest();

const PORT = process.env.PORT || 3001;

useContainer(iocContainer);

const app = createExpressServer({
  controllers: [
    TodoController,
    PhotoController,
    UserController,
  ],
  middlewares: [
    ApiAccessCheck,
    ErrorHandler,
  ],
  authorizationChecker: createAuthorizationChecker(iocContainer),
  defaultErrorHandler: false,
});

app.use(morgan('dev'));

app.listen(PORT, () => {
  console.log(`Server started at ${new Date()} on port ${PORT}!`);
});

export default app;
