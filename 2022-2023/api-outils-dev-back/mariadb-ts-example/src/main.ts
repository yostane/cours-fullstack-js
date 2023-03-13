import mariadb from "mariadb";
import { User } from "./user";
import express from "express";

const pool = mariadb.createPool({
  host: "localhost",
  user: "dev",
  password: "dev",
  database: "demo",
  connectionLimit: 5,
});

const app = express();
app.set("views", "./src/views");
app.set("view engine", "pug");

app.get("/test", async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const insertResponse = await connection.query(
      "INSERT INTO users(name) value (?)",
      ["mariadb"]
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

const items = ["Hello", "pug"];

app.get("/data.html", (req, res) => res.render("list.pug", { items: items }));

app.listen(3000, () => console.log("Serveur démarré"));
