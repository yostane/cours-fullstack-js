import express from "express";
import bodyParser from "body-parser";
import { planetRouter } from "./routes/PlanetRouter.js";

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(`
  <html>
    <body>Hello express</body>
  </html>
  `);
});

app.use("/planets", planetRouter);

const port = 3000;
app.listen(port, () => {
  console.log("serveur démarré sur le port", port);
});
