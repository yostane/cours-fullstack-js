import express from "express";
import { driveRouter } from "./routes/DriveRouter";
import bodyParser from "body-parser";
import { isUserInDatabase } from "./service/DatabaseHelper";
import { checkBasicAuth } from "./service/BasicChecker";

const app = express();

app.use(bodyParser.text());

app.get("/", (req, res) => {
  res.send(`<h1>Holà ${new Date()}</h1>`);
});

app.use("/drive", checkBasicAuth, driveRouter);

app.listen(3000, () => {
  console.log("Serveur démarré");
});
