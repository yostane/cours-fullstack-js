import { Column, Table, Model, DataType } from "sequelize-typescript";

/* Remplacé par le code en dessous pour avoir
une compatibilité avec tsoa 
export class Card2 extends Model {}
Card2.init(
  {
    name: DataTypes.STRING,
    attack: DataTypes.INTEGER,
    type: DataTypes.STRING,
  },
  { sequelize }
);
*/

/** Pour être détecté par tsoa, il faut passer par une interface */
export interface ICard {
  name: string;
  attack: number;
  type: string;
}

/** Cette classe est compatible avec sequelize tout en gradant la compatiibilité avec tsoa */
@Table
export class Card extends Model implements ICard {
  @Column
  name!: string;

  @Column(DataType.INTEGER)
  attack!: number;

  @Column
  type!: string;
}
