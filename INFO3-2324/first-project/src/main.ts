import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const yugiohCards = [
  {
    name: "Magicien sombre",
    attack: 2500,
  },
  {
    name: "Dragon blanc aux yeux bleus",
    attack: 3000,
  },
];

app.get("/", (req, res) => {
  res.send("Express + TypeScript Server");
});

app.get("/cards", (req, res) => {
  res.json(yugiohCards);
});

app.post("/cards", (req, res) => {
  console.log("adding new card");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
