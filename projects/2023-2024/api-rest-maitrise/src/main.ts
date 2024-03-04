import express from "express";
import bodyParser from "body-parser";
import { Card } from "./model/Card";
import { sequelize } from "./database";

export const app = express();

app.use(bodyParser.json());

function getMessage(): string {
  return "Express + TypeScript Server";
}

app.get("/api/", (req, res) => {
  res.send({ message: getMessage() });
});

app.get("/api/cards", async (req, res) => {
  res.json(await Card.findAll());
});

app.post("/api/cards", async (req, res) => {
  console.log("adding new card");
  const card = req.body;
  await Card.create(card);
  res.end();
});

const PORT = 3000;

export const server = app.listen(PORT, async () => {
  // TODO: do only in development and test modes
  await sequelize.sync();
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
