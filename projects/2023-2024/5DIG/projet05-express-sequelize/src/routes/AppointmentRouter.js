import express from "express";
import { AppointmentService } from "../service/AppointmentService.js";

export const appointmentRouter = express.Router();

appointmentRouter.get("/", async (req, res) => {
  const appointmentService = new AppointmentService();
  // ?? -> valeur par défaut si on a null ou undefined
  const appointments =
    (await appointmentService.findAllForVet(req.user.id)) ?? [];
  res.send(appointments.map((appointment) => appointment.toDto()));
});

appointmentRouter.post("/", async (req, res) => {
  const appointmentService = new AppointmentService();
  // on  suppose que le body a ce format { vetId: **, animalId: **, date: ** }
  // req.user -> utilisateur connecté
  try {
    await appointmentService.add(
      req.body.idVet,
      req.body.idAnimal,
      req.body.date
    );
    res.end();
  } catch (e) {
    res.sendStatus(400);
  }
});
