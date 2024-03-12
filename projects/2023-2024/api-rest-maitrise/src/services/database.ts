import { Sequelize } from "sequelize-typescript";
import "@dotenvx/dotenvx";
import { Folder } from "../model/Folder";
import { File } from "../model/File";
import { Card } from "../model/Card";
import { User } from "../model/User";

function getDatabase(): Sequelize {
  const dialect = process.env.DB_DIALECT;
  if (dialect === "sqlite") {
    return new Sequelize({
      dialect: "sqlite",
      storage: "db.sqlite",
      logging: false,
    });
  } else if (dialect === "postgres") {
    return new Sequelize(
      process.env.DB_DATABASE ?? "",
      process.env.DB_USER ?? "",
      process.env.DB_PASSWORD ?? "",
      {
        host: process.env.DB_HOST ?? "",
        port: +(process.env.DB_PORT ?? "0"),
        dialect: dialect,
      }
    );
  }
  throw new Error();
}

function getDatabaseWithModels(): Sequelize {
  const sequelize = getDatabase();
  sequelize.addModels([Folder, File, Card, User]);
  return sequelize;
}

export const sequelize = getDatabaseWithModels();
console.log("using database with dialect", sequelize.getDialect());
