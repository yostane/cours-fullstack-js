import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const yugiohCards = [
  {
    name: "Magicien sombre",
    attack: 2500,
    type: "attack",
  },
  {
    name: "Monster rebord",
    attack: 0,
    type: "magick",
  },
  {
    name: "Dragon blanc aux yeux bleus",
    attack: 3000,
    type: "attack",
  },
];

app.get("/api/", (req, res) => {
  res.send("Express + TypeScript Server");
});

app.get("/api/cards", (req, res) => {
  res.json(yugiohCards);
});

app.post("/api/cards", (req, res) => {
  console.log("adding new card");
  const card = req.body;
  yugiohCards.push(card);
  res.end();
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
