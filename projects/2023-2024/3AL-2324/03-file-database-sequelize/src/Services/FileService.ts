import { File } from "../Models/File";

export class FileService {
  // je mets async en qualificateur car il y a un await
  getAll(): Promise<File[]> {
    // await permet de récupérer le résultat sans faire de callback (le then)
    return File.findAll();
  }

  async addOne(fileInfo: any): Promise<void> {
    await File.create({
      name: fileInfo.name,
      url: fileInfo.url,
      size: fileInfo.size,
    });
  }
}
