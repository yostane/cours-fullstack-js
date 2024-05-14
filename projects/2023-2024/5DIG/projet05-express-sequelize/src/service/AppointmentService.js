import { Appointment } from "../model/Appointment.js";
import { AnimalService } from "./AnimalService.js";
import { UserService } from "./UserService.js";

export class AppointmentService {
  constructor() {}

  /**
   * Permet de prendre un rendez-vous à un animal avec un médecin
   * @param {number} idUser Le médecin (attention, ce n'est pas forcément l'utilisateur connecté)
   * @param {number} idAnimal le patient
   * @param {Date} date la date du rendez-vous
   */
  async add(idUser, idAnimal, appointmentInfo) {
    const userService = new UserService();
    const user = await userService.findById(idUser);
    if (!user || !user.isVet) {
      throw new Error("Not found or not vet");
    }

    const animalService = new AnimalService();
    const animal = await animalService.findById(idAnimal);
    if (!animal) {
      throw new Error("Animal not found");
    }
    //TODO: vérifier que le créneaux n'a pas été pris ni par l'animal ni par le véto
    const appointment = await Appointment.create(appointmentInfo);
    await user.addAppointment(appointment);
    await animal.addAppointment(appointment);
    await appointment.setUser(user);
    await appointment.setAnimal(animal);
  }

  /**
   * Trouve les rendez-vous d'un médecin
   * @param {*} idUser: l'identidiant du médecin
   */
  async findAllForVet(idUser) {
    const userService = new UserService();
    const user = await userService.findById(idUser);
    if (!user || !user.isVet) {
      throw new Error("not found or not vet");
    }
    // mixin rajouté par sequelize quand on a précisé la relation one-to-many dans le app.js
    return await user.getAppointments();
  }

  async deleteOne(idUser, id) {}
}
