import express from "express";
import fs from "fs/promises";
import { Item } from "../model/Item";
import { DriveController } from "../controller/DriveController";

export const driveRouter = express.Router();

function getStarParam(params: {}) {
  const p = params as { "0": string };
  return p[0];
}

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
  const filePath = getStarParam(req.params);
  const file = await fs.stat(`./drive/${filePath}`);
  res.json({
    size: file.size,
    path: filePath,
    name: filePath.split("/").pop(),
  });
});

driveRouter.get("/content/*", async (req, res) => {
  const filePath = getStarParam(req.params);
  const content = await new DriveController().getTextFileContent(filePath);
  res.send(content);
});

// :p est un path parameter (paramètre de chemin d'url)
driveRouter.get("/*", async (req, res) => {
  const path = getStarParam(req.params);
  const items = await new DriveController().listItemsByPath(path);
  res.json(items);
});
