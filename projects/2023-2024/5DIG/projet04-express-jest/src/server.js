import { app } from "./app";

const port = 3000;
app.listen(port, () => {
  console.log("serveur démarré sur le port", port);
});
