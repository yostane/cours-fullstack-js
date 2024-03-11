import { Column, Model, Table } from "sequelize-typescript";

/**
 * path example: /photos, /documents/2024
 */
export interface IFolder extends IItem {
  path: string;
}

@Table
export class Folder extends Model implements IFolder {
  @Column
  path!: string;
}
