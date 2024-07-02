import express from "express";
import { FileService } from "../Services/FileService";
import { File } from "../Models/File";

export const fileRouter = express.Router();
const fileService = new FileService();

// Comme on a mis un await dans l'implémentation de la fonction flèche () => {}
// , il faut donc la déclarer en async
fileRouter.get("/", async (req, res) => {
  // await permet de récupérer les fichiers sans faire le then (la callback)
  const files = await fileService.getAll();
  res.json(files);
});

fileRouter.get("/:id", async (req, res) => {
  const id = +req.params.id;
  const file = await fileService.findOne(id);
  res.json(file);
});

fileRouter.get("/name/:name", async (req, res) => {
  const name = req.params.name;
  const file = await fileService.findOneByName(name);
  res.json(file);
});

fileRouter.get("/name-op/:name", async (req, res) => {
  const name = req.params.name;
  const file = await fileService.findOneByNameWithOperator(name);
  res.json(file);
});

fileRouter.post("/", async (req, res) => {
  try {
    const file = req.body;
    await fileService.addOne(file);
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    // 400: bad request
    res.status(400).json({
      message: "add failed",
    });
  }
});

fileRouter.put("/:id", (req, res) => {
  res.end();
});

fileRouter.put("/", (req, res) => {
  res.end();
});

fileRouter.patch("/:id", (req, res) => {
  res.end();
});

// :id est un path param
// ?p1=v1&p2=v2 sont des query params
fileRouter.delete("/:id", (req, res) => {
  res.end();
});
