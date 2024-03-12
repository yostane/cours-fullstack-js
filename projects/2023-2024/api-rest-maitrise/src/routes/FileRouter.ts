import express from "express";
import { FolderController } from "../controller/FolderController";
import multer from "multer";

const upload = multer({ dest: "uploads/" });
export const fileRouter = express.Router();

fileRouter.post("/upload", upload.single("datafile"), async (req, res) => {
  console.log(req.body, req.body.extra);
  console.log(req.file?.filename);
});
