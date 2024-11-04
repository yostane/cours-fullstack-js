import express from "express";
import { driveRouter } from "./routes/DriveRouter";

const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Holà ${new Date()}</h1>`);
});

app.use("/drive", driveRouter);

app.listen(3000, () => {
  console.log("Serveur démarré");
});
