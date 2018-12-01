
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('todos', table => {
      table.increments('id').primary();
      table.string('title');
      table.string('description');
      table.datetime('due').defaultTo(knex.fn.now())
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('todos');
};
