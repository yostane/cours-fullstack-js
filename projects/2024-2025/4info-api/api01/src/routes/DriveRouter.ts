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
  res.json(driveController.generateSimulatedData());
});

// TODO: A enlever car redondant avec get("/drive/:p"
driveRouter.get("/", async (req, res) => {
  res.json(await new DriveController().listRootItems());
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

driveRouter.post("/content/*", async (req, res) => {
  const filePath = getStarParam(req.params);
  const content = await new DriveController().setTextFileContent(
    filePath,
    req.body
  );
  res.end();
});

// :p est un path parameter (paramètre de chemin d'url)
driveRouter.get("/*", async (req, res) => {
  const path = getStarParam(req.params);
  const items = await new DriveController().listItemsByPath(path);
  res.json(items);
});
