import express from "express";
import fs from "fs/promises";
import { Item } from "../model/Item";

export const driveRouter = express.Router();

driveRouter.get("/simu", (req, res) => {
  res.json([
    { name: "anime.txt", isFile: true },
    { name: "courses.txt", isFile: true },
    { name: "souvenirs", isFile: false },
  ]);
});

// TODO: A enlever car redondant avec get("/drive/:p"
driveRouter.get("/", async (req, res) => {
  const dir = await fs.opendir("./drive");
  // :Item[] -> tableau d'items.  = [] on initialise avec un tableau vide
  const items: Item[] = [];
  for await (const file of dir) {
    items.push({ name: file.name, isFile: file.isFile() });
  }
  res.json(items);
});

driveRouter.get("/info/*", async (req, res) => {
  const params = req.params as { "0": string };
  const filePath = params[0];
  const file = await fs.stat(`./drive/${filePath}`);
  res.json({
    size: file.size,
    path: filePath,
    name: filePath.split("/").pop(),
  });
});

driveRouter.get("/content/*", async (req, res) => {
  const params = req.params as { "0": string };
  const filePath = params[0];
  console.log(filePath);

  const content = await fs.readFile(`./drive/${filePath}`, {
    encoding: "utf8",
  });
  res.send(content);
});

// :p est un path parameter (paramètre de chemin d'url)
driveRouter.get("/*", async (req, res) => {
  const params = req.params as { "0": string };
  const path = params[0];
  const dir = await fs.opendir(`./drive/${path}`);
  const items: Item[] = [];
  for await (const file of dir) {
    items.push({ name: file.name, isFile: file.isFile() });
  }
  res.json(items);
});
