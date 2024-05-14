import { Sequelize } from "sequelize";

// Ces variables seront positionnées uniquement sur le serveur de production
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_USER = process.env.DB_USER;

function getDb() {
  if (!DB_HOST) {
    // En développement, on utilise une BDD mémoire
    return new Sequelize("sqlite::memory:");
  }
  return new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: "mysql",
  });
}

export const sequelize = getDb();
