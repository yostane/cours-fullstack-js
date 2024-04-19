import { Animal } from "../model/Animal.js";
import { UserService } from "./UserService.js";

export class AnimalService {
  constructor() {}

  async add(idUser, animal) {
    const userService = new UserService();
    const user = await userService.findById(idUser);
    if (!user) {
      throw new Error("not found");
    }
    await user.createAnimal(animal);
  }

  async findAll(idUser) {
    const userService = new UserService();
    const user = await userService.findById(idUser);
    if (!user) {
      throw new Error("not found");
    }
    return user.getAnimals();
  }

  async update(id, newAnimal) {
    const animal = await this.findById(id);
    if (!animal) {
      throw new Error("not found");
    }
    animal.set(newAnimal);
    await animal.save();
  }

  async findById(id) {
    return await Animal.findOne({
      where: { id },
    });
  }

  async deleteOne(id) {
    const animal = await this.findById(id);
    if (!animal) {
      throw new Error("not found");
    }
    await animal.destroy();
  }
}
