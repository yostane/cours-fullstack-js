import express from "express";
import { FolderController } from "../controller/FolderController";

export const folderRouter = express.Router();

folderRouter.post("/", async (req, res) => {
  const folderController = new FolderController();
  const user = req.user;
  if (!user) {
    res.sendStatus(401);
    return;
  }
  const content = await folderController.getChildren({
    path: req.body.path,
    user: user,
  });
  res.json(content);
});

folderRouter.post("/create", async (req, res) => {
  const folderController = new FolderController();
  const user = req.user;
  if (!user) {
    res.sendStatus(401);
    return;
  }
  await folderController.createFolder({
    path: req.body.path,
    user: user,
  });
  res.end();
});
