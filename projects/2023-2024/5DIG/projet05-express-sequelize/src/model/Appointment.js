import { Model, DataTypes } from "sequelize";
import { sequelize } from "../service/database.js";

export class Appointment extends Model {
  async toDto() {
    return {
      id: this.id,
      date: this.date,
      comment: this.comment,
      vet: (await this.getUser()).email,
      animal: (await this.getAnimal()).name,
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
