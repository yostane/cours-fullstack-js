import { AllowNull, Column, Model, Table, Unique } from "sequelize-typescript";

@Table
export class File extends Model {
  @AllowNull(false)
  @Unique
  @Column
  name: string;
  @AllowNull(false)
  @Column
  size: number;
  @AllowNull(false)
  @Column
  url: string;
}
