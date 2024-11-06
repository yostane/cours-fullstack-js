import { Database } from "bun:sqlite";

const db = new Database("./db.sqlite3");

export async function isUserInDatabase(
  login: string,
  password: string
): Promise<boolean> {
  const query = db.query("SELECT password FROM USERS WHERE login = ?1");
  type QueryResult = { password: string }[];
  const results = query.all(login) as QueryResult;
  return (
    results.length == 1 &&
    (await Bun.password.verify(password, results[0].password))
  );
}

export async function createUserInDatabase(
  login: string,
  password: string
): Promise<void> {
  const query = db.query("INSERT INTO USERS VALUES (?1, ?2)");
  query.run(login, await Bun.password.hash(password));
}
