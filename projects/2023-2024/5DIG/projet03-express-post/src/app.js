import express from "express";
import { planets } from "./constants.js";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(`
  <html>
    <body>Hello express</body>
  </html>
  `);
});

app.post("/planets", (req, res) => {
  console.log("headers", req.headers);
  console.log("body", req.body);
  planets.push(req.body);
  res.end();
});

app.get("/planets", (req, res) => {
  res.json(planets);
});

app.patch("/planets/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  const planet = planets.find((planet) => planet.id === +req.params.id);
  if (planet) {
    console.log("planet found");
    for (const key in req.body) {
      if (Object.hasOwnProperty.call(req.body, key)) {
        const element = req.body[key];
        planet[key] = element;
      }
    }
  }
});

const port = 3000;
app.listen(port, () => {
  console.log("serveur démarré sur le port", port);
});
