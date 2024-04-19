import express from "express";
import bodyParser from "body-parser";
import { animalRouter } from "./routes/AnimalRouter.js";
import { userRouter } from "./routes/UserRouter.js";
import passport from "passport";
import "./service/authentication.js";

import { sequelize } from "./service/database.js";
import { User } from "./model/User.js";
import { Animal } from "./model/Animal.js";
import { Apointment } from "./model/Apointment.js";
User.hasMany(Animal);
Animal.belongsTo(User);

Apointment.hasOne(User);
Apointment.hasOne(Animal);
Animal.hasMany(Apointment);
User.hasMany(Apointment);
sequelize.sync();

export const app = express();
app.use(bodyParser.json());

app.use(
  "/animals",
  passport.authenticate("jwt", { session: false }),
  animalRouter
);
app.use("/users", userRouter);
