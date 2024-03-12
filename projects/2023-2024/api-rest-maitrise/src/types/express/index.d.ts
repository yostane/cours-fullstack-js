// Sources: https://blog.logrocket.com/extend-express-request-object-typescript/#extending-the-express-request-type-in-typescript
// https://stackoverflow.com/a/60981984

// Le fichier index.d.ts dans src/types/express permet d'être reconnu partout dans le projet

// alias pour éviter le conflit de nom de classe
import { User as AppUser } from "../../model/User";
// to make the file a module and avoid the TypeScript error
export {};

declare global {
  namespace Express {
    // Le user express étand de notre user
    interface User extends AppUser {}
  }
}
