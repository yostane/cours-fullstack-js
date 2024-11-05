import express from "express";
import { driveRouter } from "./routes/DriveRouter";
import bodyParser from "body-parser";
import { isUserInDatabase } from "./service/DatabaseHelper";

const app = express();

app.use(bodyParser.text());

app.get("/", (req, res) => {
  res.send(`<h1>Holà ${new Date()}</h1>`);
});

app.use(
  "/drive",
  async (req, res, next) => {
    // Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
    // la partie parès basic: base64(login:password)
    const authorization = req.headers.authorization;
    if (authorization == undefined || !authorization.startsWith("Basic ")) {
      res.status(401).send();
      return;
    }
    const b64Credentials = authorization.substring(6);
    const credentials = atob(b64Credentials).split(":");
    console.log(b64Credentials, credentials);
    if (credentials.length != 2) {
      res.status(401).send();
      return;
    }
    await isUserInDatabase(credentials[0], credentials[1]);
    res.send();
  },
  driveRouter
);

app.listen(3000, () => {
  console.log("Serveur démarré");
});
