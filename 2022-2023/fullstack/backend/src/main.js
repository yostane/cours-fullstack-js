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

// TODO: Ces middleware ne communiquent pas avec la BDD. Ce sera à faire en exercice.

const localDishes = [{ name: "Banana", price: 100 }];

app.get("/dish/random", (req, res) => {
  const index = Math.floor(Math.random() * localDishes.length);
  res.json(localDishes[index]);
});

// Modifier le prix d'un plat (le json contient le nom et le nouveau prix)
app.put("/dish", (req, res) => {
  const dish = req.body;
  const index = localDishes.findIndex((p) => p.name === dish.name);
  if (index != -1) {
    localDishes[index] = dish;
  } else {
    res.status(400);
  }
  res.end();
});

app.delete("/dish/:name", (req, res) => {
  const name = req.params.name;
  const index = localDishes.findIndex((p) => p.name === name);
  if (index != -1) {
    localDishes.splice(index, 1);
  } else {
    res.status(400);
  }
  res.end();
});

app.listen(process.env.PORT ?? 3000);
