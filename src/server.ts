import * as dotenv from 'dotenv';
import 'reflect-metadata';
import container from './inversify.config';
import { createExpressServer, useContainer, Action } from 'routing-controllers';
import * as morgan from 'morgan';
import * as Knex from 'knex';
import { Model } from 'objection';
import { TodoController, PhotoController, UserController } from './controllers';
import { ILoggerFactory, ILoggerFactoryType } from './logging';
import createAuthorizationChecker from './auth/createAuthorizationChecker';


dotenv.config();
const enviroment = process.env.NODE_ENV || 'development';
export const knex = Knex(require('../knexfile')[enviroment]);
Model.knex(knex);

// // migrate db
// knex.migrate.latest();

const PORT = process.env.PORT || 3001;

useContainer(container);

const app = createExpressServer({
  controllers: [
    TodoController,
    PhotoController,
    UserController
  ],
  authorizationChecker: createAuthorizationChecker(container)
});

app.use(morgan('dev'));

app.listen(PORT, () => {
  console.log(`Server started at ${new Date()} on port ${PORT}!`);
});

export default app;