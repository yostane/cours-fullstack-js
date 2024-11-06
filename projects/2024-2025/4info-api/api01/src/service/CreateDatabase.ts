import { Database } from "bun:sqlite";
import fs from "fs/promises";

await fs.rm("./db.sqlite3");
const db = new Database("./db.sqlite3", { create: true });
db.query(
  `CREATE TABLE USERS(
  login TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL)`
).run();
db.query(
  `CREATE TABLE UserShares(
  owner_rowid integer NOT NULL,
  sharedto_rowid integer NOT NULL,
  owner_file_path TEXT NOT NULL,
  FOREIGN key(owner_rowid) references USERS(rowid),
  FOREIGN key(sharedto_rowid) references USERS(rowid))`
).run();
db.query(
  `INSERT INTO USERS VALUES ('luffy', '${await Bun.password.hash("niku")}')`
).run();
db.query(
  `INSERT INTO USERS VALUES ('naruto', '${await Bun.password.hash("ramen")}')`
).run();
db.query(
  `INSERT INTO USERS VALUES ('hit', '${await Bun.password.hash("dbs")}')`
).run();
db.query(`INSERT INTO UserShares VALUES (1, 2, 'souvenirs.txt')`).run();
