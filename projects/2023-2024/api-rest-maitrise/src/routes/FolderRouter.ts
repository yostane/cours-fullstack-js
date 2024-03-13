import { Router } from "express";
import { FolderController } from "../controller/FolderController";

export const folderRouter = Router();

folderRouter.get("/", async (req, res) => {
  console.log(req.query.path, "path");
  const folderController = new FolderController();
  if (!req.user) {
    res.sendStatus(401);
    return;
  }
  const content = await folderController.getChildren(req.params.path, req.user);
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
