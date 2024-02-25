import mariadb from "mariadb";
import { User } from "./user";
import express from "express";

const pool = mariadb.createPool({
  host: process.env.DB_HOST ?? "localhost",
  user: "dev",
  password: "dev",
  database: "demo",
  connectionLimit: 5,
});

const app = express();

app.post("/test", async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const insertResponse = await connection.query(
      "INSERT INTO users(name, token) value (?, ?)",
      ["mariadb", "sdfdsfdsfdsfsdZ34324"]
    );
    console.log(insertResponse);
    const rows = await connection.query<User[]>("SELECT * from users");
    console.log(rows);
    res.send(rows);
    connection.end();
  } catch (err) {
    res.status(500);
    console.error(err);
  }
});

app.listen(3000, () => console.log("Serveur démarré"));
