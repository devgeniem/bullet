import { Model } from "objection";

export default class Todo extends Model {

  public static tableName = "todos";

  public static jsonSchema = {
    type: "object",
    required: ["title", "due"],
    properties: {
      id: { type: "integer" },
      title: { type: "string", minLength: 1, maxLength: 63 },
      description: { type: "string", minLength: 1, maxLength: 255 },
      due: { type: "string", format: "date" }
    }
  };
  public readonly id!: number;
  public title?: string;
  public description?: string;
  public due?: Date;
}
