import express from "express";
import fs from "fs/promises";
import { Item } from "./model/Item";

const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Holà ${new Date()}</h1>`);
});

app.get("/drive-simu", (req, res) => {
  res.json([
    { name: "anime.txt", isFile: true },
    { name: "courses.txt", isFile: true },
    { name: "souvenirs", isFile: false },
  ]);
});

// TODO: A enlever car redondant avec get("/drive/:p"
app.get("/drive", async (req, res) => {
  const dir = await fs.opendir("./drive");
  // :Item[] -> tableau d'items.  = [] on initialise avec un tableau vide
  const items: Item[] = [];
  for await (const file of dir) {
    items.push({ name: file.name, isFile: file.isFile() });
  }
  res.json(items);
});

// :p est un path parameter (paramètre de chemin d'url)
app.get("/drive/:p", async (req, res) => {
  const dir = await fs.opendir(`./drive/${req.params.p}`);
  const items: Item[] = [];
  for await (const file of dir) {
    items.push({ name: file.name, isFile: file.isFile() });
  }
  res.json(items);
});

app.get("/drive/info/*", async (req, res) => {
  const params = req.params as { "0": string };
  const filePath = params[0];
  const file = await fs.stat(`./drive/${filePath}`);
  res.json({
    size: file.size,
    path: filePath,
    name: filePath.split("/").pop(),
  });
});

app.listen(3000, () => {
  console.log("Serveur démarré");
});
