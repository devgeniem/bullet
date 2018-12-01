import * as express from 'express';
import * as morgan from 'morgan';
import * as Knex from 'knex';
import { Model } from 'objection';
import container from './inversify.config';
import { ITodoService } from './services';

export const knex = Knex(require('../knexfile').development);
Model.knex(knex);

// // migrate db
// knex.migrate.latest();


const enviroment = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3000;


const app = express();

app.use(morgan('dev'));

app.use((req, res, next) => {
    const { method, originalUrl } = req; 
    console.log(`${method} ${originalUrl}`);
    next();
});

app.get('/hello', (req, res) => {
  res.send('Hello, wrold!');
});

app.get('/info', (req, res) => {
  res.send('I want to be a real boy!');
});

app.get('/json', (req, res) => {
  res.send({
    sc: 200,
    json: {
      ducks: [
        {
          name: 'Donald',
          occupation: 'Postman'
        },
        {
          name: 'Scrooge',
          occupation: 'Laundering money'
        }
      ]
    }
  })
});

app.get('/todos', async (req, res) => {
  const todoService = container.get<ITodoService>("ITodoService");
  const todos = await todoService.getTodos();
  res.send(todos);
});


app.listen(PORT, () => {
  console.log(`Server started at ${new Date()} on port ${PORT}!`);
});

export default app;