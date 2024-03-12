import { randomInt } from "crypto";
import express from "express";
import multer from "multer";
import fs from "fs/promises";

const upload = multer({ dest: "uploads/" });
export const fileRouter = express.Router();

fileRouter.post("/upload", upload.single("datafile"), async (req, res) => {
  console.log(req.body, req.body.extra);
  const file = req.file;
  if (!file) {
    res.sendStatus(400);
    return;
  }
  console.log(file);
  const userId = randomInt(10000000); // a remplacer par l'ID du user courant
  const fileId = randomInt(10000000); // a remplacer par l'ID du fichier généré par la BDD
  await fs.rename(
    file.path,
    `uploads/${userId}-${fileId}-${file.originalname}`
  );
});
