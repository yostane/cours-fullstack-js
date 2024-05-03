import express from "express";
import { AppointmentService } from "../service/AppointmentService.js";

export const appointmentRouter = express.Router();

appointmentRouter.get("/", async (req, res) => {
  const appointmentService = new AppointmentService();
  try {
    // ?? -> valeur par défaut si on a null ou undefined
    const appointments =
      (await appointmentService.findAllForVet(req.user.id)) ?? [];
    const dtoAppointmentsPromise = appointments.map(
      async (appointment) => await appointment.toDto()
    );
    res.json(await Promise.all(dtoAppointmentsPromise));
  } catch (e) {
    console.error(e);
    res.status(403).json({
      message: e.message,
    });
  }
});

appointmentRouter.post("/", async (req, res) => {
  const appointmentService = new AppointmentService();
  // on  suppose que le body a ce format { vetId: **, animalId: **, date: ** }
  // req.user -> utilisateur connecté
  try {
    await appointmentService.add(req.body.idVet, req.body.idAnimal, {
      date: req.body.date,
      comment: req.body.comment,
    });
    res.end();
  } catch (e) {
    res.sendStatus(400);
  }
});
