import express from "express";
import fs from "fs/promises";
import { Item } from "../model/Item";
import { DriveController } from "../controller/DriveController";
import path from "path";

export const driveRouter = express.Router();

function getStarParam(params: {}) {
  const p = params as { "0": string };
  return p[0];
}

driveRouter.get("/simu", (req, res) => {
  const driveController = new DriveController();
  res.json(driveController.getSimulatedData());
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
  const path = getStarParam(req.params);
  const info = await new DriveController().getItemInfo(path);
  res.json(info);
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
