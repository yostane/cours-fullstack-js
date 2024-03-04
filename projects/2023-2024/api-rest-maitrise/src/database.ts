import { Sequelize } from "sequelize";
import "@dotenvx/dotenvx";

function getDatabase(): Sequelize {
  const dialect = process.env.DB_DIALECT;
  if (dialect === "sqlite") {
    return new Sequelize({
      dialect: "sqlite",
      storage: "db.sqlite",
    });
  } else if (dialect === "postgres") {
    return new Sequelize(
      process.env.DB_DATABASE ?? "",
      process.env.DB_USER ?? "",
      process.env.DB_PASSWORD ?? "",
      {
        host: "localhost",
        port: 5432,
        dialect: dialect,
      }
    );
  }
  throw new Error();
}

export const sequelize = getDatabase();
