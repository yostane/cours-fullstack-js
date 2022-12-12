// import standard JS (imports EcmaScript)
// Pour info: EcmaScript est un standard pour langages de programmation
// JavaScript est un langage de programmation qui utilise le standard EcmaScript
// ActionScript (utilisé pour Flash) implémente aussi EcmaScript

// Ajouter dans le package.json "type": "module" car node ne supporte pas les modules ES nativement
import express from "express";
import bodyParser from "body-parser";
import mariadb from "mariadb";

// Connexion à la BDD
const pool = mariadb.createPool({
  host: "localhost", //  mettre url de connexion ici
  user: "user",
  password: "user",
  database: "test",
  port: 3306,
  connectionLimit: 5,
});

const app = express();

// Dans le jargon expressjs app.use, app.get, etc. s'appellent des middlewares

// permet au serveur de traiter les requêtes dont le body (ou le corps) est au format JSON
app.use(bodyParser.json());

// /test_static -> l'url appelée par le client
// public c'est le dossier dans le serveur qui contient les fichiers
app.use("/", express.static("public"));

// endpoint ou route d'une API rest
// route => (méthode HTTP, chemin d'url)
// exemples (GET, /plats) (DELTE, /plats), (DELTE, /plat), etc.
app.get("/dishes", async (req, res) => {
  const conn = await pool.getConnection();
  const dishes = await conn.query("SELECT name, price FROM Dishes");
  res.json(dishes);
  conn.close();
});

app.get("/dish/random", (req, res) => {
  const index = Math.floor(Math.random() * dishes.length);
  res.json(dishes[index]);
});

app.post("/dish", async (req, res) => {
  const dish = req.body;
  const conn = await pool.getConnection();
  const queryResult = await conn.query(
    `INSERT INTO Dishes (name, price) value (?, ?)`,
    [dish.name, dish.price]
  );
  console.log(queryResult); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
  res.end();
  conn.close();
});

// Modifier le prix d'un plat (le json contient le nom et le nouveau prix)
app.put("/dish", (req, res) => {
  const dish = req.body;
  const index = dishes.findIndex((p) => p.name === dish.name);
  if (index != -1) {
    dishes[index] = dish;
  } else {
    res.status(400);
  }
  res.end();
});

app.delete("/dish/:name", (req, res) => {
  const name = req.params.name;
  const index = dishes.findIndex((p) => p.name === name);
  if (index != -1) {
    dishes.splice(index, 1);
  } else {
    res.status(400);
  }
  res.end();
});

app.listen(3000);
