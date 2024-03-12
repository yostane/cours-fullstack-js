import express from "express";
import { FolderController } from "../controller/FolderController";
import passport from "passport";
import "../services/authentication";

export const folderRouter = express.Router();

folderRouter.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const folderController = new FolderController();
    const content = await folderController.getChildren(req.body.path);
    res.json(content);
  }
);

folderRouter.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const folderController = new FolderController();
    await folderController.createFolder(req.body.path);
    res.end();
  }
);
