// récupération de l'export par défaut de la lib (comme indiqué par sa documentation)
// On ne me pas les accolades si on veut récupérer l'export par défaut
import express from "express";
import { fileRouter } from "./routes/FileRouter";

// usine (factory) qui crée un serveur express
// On exporte le serveur pour pouvoir l'utiliser dans main.ts
export const server = express();

server.use("/", fileRouter);
