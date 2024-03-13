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

folderRouter.post("/", async (req, res) => {
  const folderController = new FolderController();
  const user = req.user;
  if (!user) {
    res.sendStatus(401);
    return;
  }
  try {
    await folderController.createFolder(
      {
        path: req.body.path,
      },
      user
    );
    res.end();
  } catch (e) {
    if (e instanceof Error) {
      res.status(400).json({
        message: e.message,
      });
    } else {
      res.sendStatus(400);
    }
  }
});
