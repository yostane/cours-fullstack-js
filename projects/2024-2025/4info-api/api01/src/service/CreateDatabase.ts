import { Database } from "bun:sqlite";
import fs from "fs/promises";

await fs.rm("./db.sqlite3");
const db = new Database("./db.sqlite3", { create: true });
db.query(`CREATE TABLE USERS(login TEXT UNIQUE, password TEXT)`).run();
db.query(
  `INSERT INTO USERS VALUES ('luffy', '${await Bun.password.hash("niku")}')`
).run();
db.query(
  `INSERT INTO USERS VALUES ('naruto', '${await Bun.password.hash("ramen")}')`
).run();
db.query(
  `INSERT INTO USERS VALUES ('hit', '${await Bun.password.hash("dbs")}')`
).run();
