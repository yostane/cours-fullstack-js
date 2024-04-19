import { Model, DataTypes } from "sequelize";
import { sequelize } from "../service/database.js";

export class Apointment extends Model {
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
Apointment.init(
  {
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    comment: DataTypes.STRING,
  },
  { sequelize, modelName: "apointment" }
);
