import { Sequelize } from "sequelize-typescript";
import { File } from "../Models/File";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  models: [File],
  storage: "database.sqlite", // le fichier où sera stockée la BDD
});
