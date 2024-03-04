import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database";

export class Card extends Model {}
Card.init(
  {
    name: DataTypes.STRING,
    attack: DataTypes.INTEGER,
    type: DataTypes.STRING,
  },
  { sequelize }
);
