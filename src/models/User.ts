import { Model } from 'objection';


export default class User extends Model {
  readonly id!: number;
  username: string;
  password: string;
  created: Date;

  static tableName = 'users';

  static jsonSchema = {
    type: 'object',
    required: ['username'],
    properties: {
      id: { type: 'integer' },
      username: { type: 'string', minLength: 1, maxLength: 63 },
      password: { type: 'string', minLength: 1, maxLength: 255 },
      created: { type: 'string', format: 'date' }
    }
  }
}