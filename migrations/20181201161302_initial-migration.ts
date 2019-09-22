import * as Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("todos", table => {
    table.increments("id").primary();
    table.string("title");
    table.string("description");
    table.dateTime("due").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTableIfExists("todos");
}
