import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
// import * as express from 'express';
import * as morgan from 'morgan';
import * as Knex from 'knex';
import { Model } from 'objection';
import container from './inversify.config';
import { ITodoService } from './services';
import { IPhotoIntegrationService } from './integrations';
import { TodoController, PhotoController } from './controllers';


export const knex = Knex(require('../knexfile').development);
Model.knex(knex);

// // migrate db
// knex.migrate.latest();


const enviroment = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3000;


const app = createExpressServer({
  controllers: [
    TodoController,
    PhotoController
  ]
});

app.use(morgan('dev'));

app.listen(PORT, () => {
  console.log(`Server started at ${new Date()} on port ${PORT}!`);
});

export default app;