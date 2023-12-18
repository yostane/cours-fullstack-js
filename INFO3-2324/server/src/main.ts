import express from "express";
import bodyParser from "body-parser";
import mariadb from "mariadb";

const pool = mariadb.createPool({
  host: "localhost",
  user: "db_fs_user",
  password: "db_fs_user",
  database: "3info2324",
  connectionLimit: 5,
});

const app = express();
app.use(bodyParser.json());

app.get("/api/", (req, res) => {
  res.send("Express + TypeScript Server");
});

app.get("/api/cards", async (req, res) => {
  const connection = await pool.getConnection();
  const cards = await connection.query("SELECT * from CARDS");
  connection.end();
  res.json(cards);
});

app.post("/api/cards", async (req, res) => {
  const card = req.body;
  console.log("adding new card", card);
  const connection = await pool.getConnection();
  const cards = await connection.query(
    "INSERT INTO CARDS (name, attack, type) VALUES (?, ?, ?)",
    [card.name, card.attack, card.type]
  );
  connection.end();
  res.end();
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
