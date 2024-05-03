import { Model, DataTypes } from "sequelize";
import { sequelize } from "../service/database.js";

export class Appointment extends Model {
  async toDto() {
    const user = await this.getUser();
    const animal = await this.getAnimal();
    return {
      id: this.id,
      date: this.date,
      comment: this.comment,
      vet: {
        email: user.email,
      },
      animal: {
        name: animal.name,
      },
    };
  }
}
Appointment.init(
  {
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    comment: DataTypes.STRING,
  },
  { sequelize, modelName: "appointment" }
);
