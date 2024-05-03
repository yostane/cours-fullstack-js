import { AnimalService } from "./AnimalService";
import { UserService } from "./UserService";

export class AppointmentService {
  constructor() {}

  async add(idUser, idAnimal, date) {
    const userService = new UserService();
    const user = await userService.findById(idUser);
    if (!user || !user.isVet) {
      throw new Error("Not found or not vet");
    }

    const animalService = new AnimalService();
    const animal = animalService.findById(idAnimal);
    if (!animal) {
      throw new Error("Animal not found");
    }
    //TODO: vérifier que le créneaux n'a pas été pris ni par l'animal ni par le véto
  }

  async findAll(idUser) {}

  async deleteOne(idUser, id) {
    const animal = await this.findById(id);
    if (!animal || (await animal.getUser()).id !== idUser) {
      throw new Error("not found");
    }
    await animal.destroy();
  }
}
