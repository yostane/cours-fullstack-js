import express from "express";
import { FolderController } from "../controller/FolderController";
import passport from "passport";
import "../services/authentication";

export const folderRouter = express.Router();

folderRouter.post("/", async (req, res) => {
  const folderController = new FolderController();
  const content = await folderController.getChildren({
    path: req.body.path,
    user: req.user,
  });
  res.json(content);
});

folderRouter.post("/create", async (req, res) => {
  const folderController = new FolderController();
  await folderController.createFolder({
    path: req.body.path,
    user: req.user,
  });
  res.end();
});
