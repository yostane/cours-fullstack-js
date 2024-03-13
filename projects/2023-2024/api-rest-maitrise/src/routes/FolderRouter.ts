import { Router } from "express";
import { FolderController } from "../controller/FolderController";

export const folderRouter = Router();

folderRouter.get("/", async (req, res) => {
  const path = req.query.path as string;
  const folderController = new FolderController();
  if (!req.user || !path) {
    res.sendStatus(401);
    return;
  }
  const content = await folderController.getChildren(path, req.user);
  res.json(content);
});

folderRouter.post("/create", async (req, res) => {
  const folderController = new FolderController();
  const user = req.user;
  if (!user) {
    res.sendStatus(401);
    return;
  }
  await folderController.createFolder(
    {
      path: req.body.path,
    },
    user
  );
  res.end();
});
