import { Model, DataTypes } from "sequelize";
import { sequelize } from "../service/database.js";

export class User extends Model {
  toDto() {
    return {
      email: this.email,
      isVet: this.isVet,
      id: this.id,
    };
  }
}
User.init(
  {
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isVet: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  { sequelize, modelName: "user" }
);
