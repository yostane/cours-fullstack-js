import express from "express";
import { planets } from "../constants.js";

export const planetRouter = express.Router();

planetRouter.post("/", (req, res) => {
  console.log("headers", req.headers);
  console.log("body", req.body);
  planets.push(req.body);
  res.end();
});

planetRouter.post("/favorite/:id", (req, res) => {
  const planet = planets.find((planet) => planet.id === +req.params.id);
  if (!planet) {
    res.status(404).end();
    return;
  }
  const user = req.user;
  // Pas nécessaire car déjà fait dans authentication.js, mais on fait quand même pour être vraiment tranquille
  if (!user) {
    res.status(401).end();
    return;
  }
  // à partir de là, on a le user et la planete, donc on peut enregistrer le favori
  console.log(
    "TODO: mettre cette planete:",
    planet,
    "en favori du user:",
    user.toDto()
  );
  res.end();
});

planetRouter.get("/", (req, res) => {
  res.json(planets);
});

planetRouter.patch("/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  const planet = planets.find((planet) => planet.id === +req.params.id);
  if (planet) {
    console.log("planet found");
    for (const key in req.body) {
      if (Object.hasOwnProperty.call(req.body, key)) {
        const element = req.body[key];
        planet[key] = element;
      }
    }
    res.end();
  } else {
    res.status(404).end();
  }
});

planetRouter.delete("/:id", (req, res) => {
  const index = planets.findIndex((planet) => planet.id === +req.params.id);
  if (index >= 0) {
    planets.splice(index, 1);
    res.end();
  } else {
    res.status(404).end();
  }
});

planetRouter.delete("/bis/:id", (req, res) => {
  const remainingPlanets = planets.filter(
    (planet) => planet.id !== +req.params.id
  );
  if (remainingPlanets.length < planets.length) {
    planets.splice(0, planets.length);
    planets.push(...remainingPlanets);
    res.end();
  } else {
    res.status(404).end();
  }
});
