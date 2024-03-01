import { Sequelize } from "sequelize";

// export const sequelize = new Sequelize({
//   dialect: "sqlite",
//   storage: "db.sqlite",
// });

export const sequelize = new Sequelize("api-db", "yassine", undefined, {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});
