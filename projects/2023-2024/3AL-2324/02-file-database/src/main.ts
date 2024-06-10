// un import avec ./ pointe vers le même dossier que le fichier.
// sans le ./ au début, on chercher dans node_modules
import { server } from "./server";

const PORT = 3000;

server.listen(PORT, () => {
  // Cette callback est appelée quand le serveur démarre
  console.log(`Serveur démarré sur le port ${PORT}`);
});

// test api with curl http://localhost:3000/
