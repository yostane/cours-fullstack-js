import express from "express";
import { driveRouter } from "./routes/DriveRouter";
import bodyParser from "body-parser";
import { isUserInDatabase } from "./service/DatabaseHelper";
import { checkBasicAuth, checkBearerAuth } from "./service/BasicChecker";
import { userRouter } from "./routes/UserRouter";

const app = express();

app.use(bodyParser.text());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(`<h1>Holà ${new Date()}</h1>`);
});

app.use("/drive", checkBearerAuth, driveRouter);
app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("Serveur démarré");
});
