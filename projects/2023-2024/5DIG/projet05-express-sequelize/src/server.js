import { app } from "./app.js";

const port = process.env.PORT ?? 3000;
app.listen(port, () => {
  console.log("serveur démarré sur le port", port);
});
