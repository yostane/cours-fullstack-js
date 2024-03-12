import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { IItem } from "./Item";
import { IUser, User } from "./User";

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

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

export interface IFolderRequest {
  path: string;
  user?: User;
}
