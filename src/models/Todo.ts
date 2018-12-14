import { Model } from 'objection';


export default class Todo extends Model {
  readonly id!: number;
  title?: string;
  description?: string;
  due?: Date;

  static tableName = 'todos';

  static jsonSchema = {
    type: 'object',
    required: ['title', 'due'],
    properties: {
      id: { type: 'integer' },
      title: { type: 'string', minLength: 1, maxLength: 63 },
      description: { type: 'string', minLength: 1, maxLength: 255 },
      due: { type: 'string', format: 'date' },
    },
  };
}
