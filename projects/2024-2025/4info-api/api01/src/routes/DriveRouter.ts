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

// Exos: implémenter les endpoints move en patch et copy en post
driveRouter.patch("/move/*/to/*", async (req, res) => {
  // sortie { "0": "souvenirs/2024/souvenir1.txt", "1": "hello.txt" }
  console.log(req.params);
  res.end();
});

// Exos: implémenter le endpoint driveRouter.delete("/*") qui supprime un fichier ou dossier récursivement
// !!!! attention à ne pas supprimer des fichiers de votre PC autre ce qu'il y a dans drive !!!!

// :p est un path parameter (paramètre de chemin d'url)
driveRouter.get("/*", async (req, res) => {
  const path = getStarParam(req.params);
  const items = await new DriveController().listItemsByPath(path);
  res.json(items);
});
