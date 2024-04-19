import express from "express";
import bodyParser from "body-parser";
import { animalRouter } from "./routes/AnimalRouter.js";
import { userRouter } from "./routes/UserRouter.js";
import passport from "passport";
import "./service/authentication.js";

import { sequelize } from "./service/database.js";
import "./model/User.js";
import "./model/Animal.js";
sequelize.sync();

export const app = express();
app.use(bodyParser.json());

app.use(
  "/animals",
  passport.authenticate("jwt", { session: false }),
  animalRouter
);
app.use("/users", userRouter);
