import { Column, Model, Table } from "sequelize-typescript";

/**
 * Path examples: /photos/souvenir.png, /documents/2024/js-lecture.pdf
 */
export interface IFile extends IItem {
  path: string;
}

@Table
export class File extends Model implements IFile {
  @Column
  path!: string;
}
