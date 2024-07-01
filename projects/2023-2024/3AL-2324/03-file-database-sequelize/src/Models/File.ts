import { AllowNull, Column, Model, Table } from "sequelize-typescript";

@Table
export class File extends Model {
  @AllowNull(false)
  @Column
  name: string;
  @AllowNull(false)
  @Column
  size: number;
  @AllowNull(false)
  @Column
  url: string;
}
