import { Model, DataTypes } from "sequelize";
import { sequelize } from "../service/database.js";

export class Animal extends Model {
  toDto() {
    return {
      name: this.name,
      id: this.id,
    };
  }
}
Animal.init(
  {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  { sequelize, modelName: "animal" }
);
