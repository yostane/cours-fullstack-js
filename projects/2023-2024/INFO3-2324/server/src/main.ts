import express from "express";
import bodyParser from "body-parser";
import mariadb from "mariadb";

const pool = mariadb.createPool({
  host: process.env.DB_HOST ?? "localhost",
  user: process.env.DB_USER ?? "db_fs_user",
  password: process.env.DB_PASSWORD ?? "db_fs_user",
  database: process.env.DB_DATABASE ?? "3info2324",
  connectionLimit: 5,
});

console.log("ENV vars", process.env);
console.log("database pool", pool);

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/api/", (req, res) => {
  res.send("Express + TypeScript Server");
});

app.get("/api/cards", async (req, res) => {
  const connection = await pool.getConnection();
  const cards = await connection.query("SELECT * from CARDS");
  await connection.end();
  res.json(cards);
});

app.post("/api/cards", async (req, res) => {
  const card = req.body;
  console.log("adding new card", card);
  const connection = await pool.getConnection();
  await connection.query(
    "INSERT INTO CARDS (name, attack, type) VALUES (?, ?, ?)",
    [card.name, card.attack, card.type]
  );
  await connection.end();
  res.end();
});

app.post("/api/auth/login", async (req, res) => {
  const userInfo = req.body;
  let connection = await pool.getConnection();
  const users = await connection.query(
    "SELECT id FROM USERS WHERE mail = ? AND password = ?",
    [userInfo.mail, userInfo.password]
  );
  console.log("Found users", users);
  await connection.end();
  if (users.length != 1) {
    res.status(400).end();
  } else {
    // Création d'un token aléatoire
    const token = `${userInfo.mail}-${Number(new Date()).toString(36)}`;
    // Ajout du token dans la BDD (pour l'associer au user)
    connection = await pool.getConnection();
    await connection.query(
      "INSERT INTO USERS_TOKENS (id_user, token) VALUES (?, ?)",
      [users[0].id, token]
    );
    await connection.end();
    res.json({
      token,
    });
  }
});

app.get("/api/cards/favorites", async (req, res) => {
  // on récupère le header dans une var
  const authHeader = req.headers.authorization;
  console.log("req.headers.authorization", authHeader);
  // On vérifie que le header existe et que sa valeur commence par bearer
  if (
    authHeader == null ||
    !authHeader.toLocaleLowerCase().startsWith("bearer ")
  ) {
    res.sendStatus(403);
    return;
  }
  // On isole le token
  const token = authHeader.substring("bearer ".length);
  const connection = await pool.getConnection();
  // Récupération du token de la BDD
  const userIds = await connection.query(
    "SELECT id_user FROM USERS_TOKENS WHERE token = ?",
    [token]
  );
  console.log("Found user ids", userIds);
  connection.end();
  if (userIds.length != 1) {
    console.warn("no unique user id found", userIds);
    res.status(403).end();
    return;
  }
  const userId = userIds[0].id_user;
  const favorites = await connection.query(
    `select CARDS.id, CARDS.name, CARDS.attack, CARDS.type 
      from CARDS INNER JOIN USERS_CARDS 
      on USERS_CARDS.id_card = CARDS.id 
      AND USERS_CARDS.id_user = ?`,
    [userId]
  );
  res.send(favorites);
});

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
