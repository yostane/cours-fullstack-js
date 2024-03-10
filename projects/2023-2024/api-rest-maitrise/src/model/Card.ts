import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database";
import { Column, Table } from "sequelize-typescript";

export class Card2 extends Model {}
Card2.init(
  {
    name: DataTypes.STRING,
    attack: DataTypes.INTEGER,
    type: DataTypes.STRING,
  },
  { sequelize }
);

export interface ICard {
  name: string;
  attack: number;
  type: string;
}

@Table
export class Card extends Model implements ICard {
  @Column
  name!: string;

  @Column
  attack!: number;

  @Column
  type!: string;
}
