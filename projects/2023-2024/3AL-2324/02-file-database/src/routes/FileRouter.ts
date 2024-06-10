import express from "express";

const files = [
  {
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
  res.end();
});

fileRouter.put("/", (req, res) => {
  res.end();
});

fileRouter.delete("/", (req, res) => {
  res.end();
});
