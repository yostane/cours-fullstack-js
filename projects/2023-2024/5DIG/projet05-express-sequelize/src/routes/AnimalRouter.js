import express from "express";
import { AnimalService } from "../service/AnimalService.js";

export const animalRouter = express.Router();

animalRouter.get("/", async (req, res) => {
  const animalService = new AnimalService();
  const animals = await animalService.findAll();
  res.send(animals.map((animal) => animal.toDto()));
});

animalRouter.post("/", async (req, res) => {
  const animalService = new AnimalService();
  try {
    await animalService.add(req.body);
    res.end();
  } catch (e) {
    res.sendStatus(400);
  }
});

animalRouter.put("/:id", async (req, res) => {
  const animalService = new AnimalService();
  try {
    await animalService.update(+req.params.id, req.body);
    res.end();
  } catch (e) {
    res.sendStatus(400);
  }
});

animalRouter.delete("/:id", async (req, res) => {
  const animalService = new AnimalService();
  try {
    await animalService.deleteOne(+req.params.id);
    res.end();
  } catch (e) {
    res.sendStatus(404);
  }
});
