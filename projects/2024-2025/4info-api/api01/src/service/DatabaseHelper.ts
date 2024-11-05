import { Database } from "bun:sqlite";

const db = new Database("./db.sqlite3");

function isUserInDatabase(login: string, password: string) {
  const query = db.query(
    "SELCT COUNT(ROWID) FROM USERS WHERE login = ?1 and password = ?2"
  );
  const result = query.all(login, password);
  console.log(result);
}
