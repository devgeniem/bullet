import * as dotenv from 'dotenv';
import 'reflect-metadata';
import container from './inversify.config';
import { createExpressServer, useContainer, Action } from 'routing-controllers';
import * as morgan from 'morgan';
import * as Knex from 'knex';
import { Model } from 'objection';
import { TodoController, PhotoController, UserController } from './controllers';


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
  authorizationChecker: async (action: Action, roles: string[]) => {
    // here you can use request/response objects from action
    // also if decorator defines roles it needs to access the action
    // you can use them to provide granular access check
    // checker must return either boolean (true or false)
    // either promise that resolves a boolean value
    // demo code:
    const token = action.request.headers["authorization"];

    console.log(token);
    return false;

    // const user = await getEntityManager().findOneByToken(User, token);
    // if (user && !roles.length)
    //     return true;
    // if (user && roles.find(role => user.roles.indexOf(role) !== -1))
    //     return true;

    // return false;
}
});

app.use(morgan('dev'));

app.listen(PORT, () => {
  console.log(`Server started at ${new Date()} on port ${PORT}!`);
});

export default app;