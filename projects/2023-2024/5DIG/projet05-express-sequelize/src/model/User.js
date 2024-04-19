import { Model, DataTypes } from "sequelize";
import { sequelize } from "../service/database.js";

export class User extends Model {}
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
