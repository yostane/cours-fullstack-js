import express from "express";
import { FolderController } from "../controller/FolderController";

export const folderRouter = express.Router();

folderRouter.get("/", async (req, res) => {
  const folderController = new FolderController();
  const content = folderController.getContent(req.body.path);
  res.json(content);
});

folderRouter.post("/", async (req, res) => {
  const folderController = new FolderController();
  const content = folderController.createFolder(req.body.path);
  res.end();
});
