import express from "express";
import bodyParser from "body-parser";
import { animalRouter } from "./routes/AnimalRouter.js";
import { userRouter } from "./routes/UserRouter.js";
import passport from "passport";
import "./service/authentication.js";

import { sequelize } from "./service/database.js";
import { User } from "./model/User.js";
import { Animal } from "./model/Animal.js";
import { Appointment } from "./model/Appointment.js";
import { appointmentRouter } from "./routes/AppointmentRouter.js";

User.hasMany(Animal);
Animal.belongsTo(User);

Appointment.hasOne(User);
Appointment.hasOne(Animal);
Animal.hasMany(Appointment);
User.hasMany(Appointment);

// Déclenche l'exécution du SQL qui créé les tables
sequelize.sync();

export const app = express();
app.use(bodyParser.json());

app.use(
  "/animals",
  passport.authenticate("jwt", { session: false }),
  animalRouter
);
app.use(
  "/appointments",
  passport.authenticate("jwt", { session: false }),
  appointmentRouter
);
app.use("/users", userRouter);
