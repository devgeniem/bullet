// Config environment variables using dotenv
// tslint:disable no-var-requires no-implicit-dependencies no-submodule-imports

// TODO don't do this in prod
require("ts-node/register");

require("dotenv").config();

// Update with your config settings.
module.exports = {
  client: "mysql",
  connection: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  },
  migrations: {
    tableName: "migrations",
    stub: "migrations/template.ts"
  },
  seeds: {
    directory: "./seeds/dev",
    stub: "./seeds/sample-data.ts"
  }
};
