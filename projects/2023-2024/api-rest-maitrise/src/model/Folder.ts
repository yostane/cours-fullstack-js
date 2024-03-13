import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
  Unique,
} from "sequelize-typescript";
import { IItem } from "./Item";
import { IUser, User } from "./User";
import { Body } from "tsoa";

/**
 * path example: /photos, /documents/2024
 */
export interface IFolder extends IItem {}

@Table
export class Folder extends Model implements IFolder {
  @Column
  path!: string;

  @BelongsTo(() => User)
  owner!: User;

  @ForeignKey(() => User)
  @Column
  ownerId!: number;
}

export interface IFolderRequest {
  path: string;
}
