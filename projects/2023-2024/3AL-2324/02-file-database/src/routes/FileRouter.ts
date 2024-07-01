import { log } from "console";
import express from "express";

const files = [
  {
    id: 1,
    name: "image01.png",
    size: 200,
    url: "https://placehold.co/600x400",
  },
];

export const fileRouter = express.Router();

fileRouter.get("/", (req, res) => {
  res.json(files);
});

fileRouter.post("/", (req, res) => {
  const file = req.body;
  // Un auto increment fait à la main
  file.id = files[files.length - 1].id + 1;
  files.push(file);
  res.sendStatus(201);
});

fileRouter.put("/:id", (req, res) => {
  const newFile = req.body;
  res.end();
});

// :id est un path param
// ?p1=v1&p2=v2 sont des query params
fileRouter.delete("/:id", (req, res) => {
  const id = +req.params.id;
  console.log("deleting file with id from path parameter", id);
  // méthode 1
  const index = files.findIndex((file) => file.id === id);
  files.splice(index, 1);
  res.end();
});
