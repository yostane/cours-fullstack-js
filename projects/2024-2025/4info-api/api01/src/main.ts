import express from "express";
import { driveRouter } from "./routes/DriveRouter";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.text());

app.get("/", (req, res) => {
  res.send(`<h1>Holà ${new Date()}</h1>`);
});

app.use("/drive", driveRouter);

app.listen(3000, () => {
  console.log("Serveur démarré");
});
