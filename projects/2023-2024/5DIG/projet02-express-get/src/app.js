// require est le système d'import commonJS utilisé par nodejs
import { readdirSync } from "fs";
import express from "express";

const files = readdirSync(".");
console.log(files);

const app = express();

app.get("/", (req, res) => {
  res.send(`
  <html>
    <body>Hello express</body>
  </html>
  `);
});

const planets = [
  {
    name: "soleil",
    speed: 1000000,
  },
  {
    name: "jupyter",
    speed: 23232,
  },
];

app.get("/planets", (req, res) => {
  res.json(planets);
});

const port = 3000;
app.listen(port, () => {
  console.log("serveur démarré sur le port", port);
});
