import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
  Unique,
} from "sequelize-typescript";
import { IItem } from "./Item";
import { User } from "./User";

/**
 * Path examples: /photos/souvenir.png, /documents/2024/js-lecture.pdf
 */
export interface IFile extends IItem {}

@Table
export class File extends Model implements IFile {
  @Unique
  @Column
  path!: string;

  @BelongsTo(() => User)
  owner!: User;

  @ForeignKey(() => User)
  @Column
  ownerId!: number;
}
