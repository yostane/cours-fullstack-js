import { Op } from "sequelize";
import { File } from "../Models/File";
import { FileDTO } from "../Models/FileDTO";

export class FileService {
  findOneByName(nameToFind: string): Promise<File> {
    return File.findOne({
      where: {
        name: nameToFind,
      },
    });
  }

  findOneByNameWithOperator(nameToFind: string): Promise<File> {
    return File.findOne({
      where: {
        name: {
          [Op.eq]: nameToFind,
        },
      },
    });
  }

  findOne(id: number): Promise<File> {
    return File.findByPk(id);
  }
  // je mets async en qualificateur car il y a un await
  getAll(): Promise<File[]> {
    // await permet de récupérer le résultat sans faire de callback (le then)
    return File.findAll();
  }

  async addOne(fileInfo: FileDTO): Promise<void> {
    await File.create({
      name: fileInfo.name,
      url: fileInfo.url,
      size: fileInfo.size,
    });
  }
}
