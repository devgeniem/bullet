
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('users', table => {
      table.increments('id').primary();
      table.string('username').notNullable();
      table.string('password').notNullable();
      table.datetime('created').defaultTo(knex.fn.now());
      table.unique(['username']);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('users');
};
