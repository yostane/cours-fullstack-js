import { Sequelize, Model, DataTypes } from "sequelize";
import { sequelize } from "../database";

export class Card extends Model {}
Card.init(
  {
    name: DataTypes.STRING,
    attack: DataTypes.NUMBER,
    type: DataTypes.STRING,
  },
  { sequelize, modelName: "card" }
);
