// récupération de l'export par défaut de la lib (comme indiqué par sa documentation)
// On ne me pas les accolades si on veut récupérer l'export par défaut
import express from "express";
import { fileRouter } from "./routes/FileRouter";
import bodyParser from "body-parser";
import { myLogger, myOtherLogger } from "./middlewares/loggerMiddleware";

// usine (factory) qui crée un serveur express
// On exporte le serveur pour pouvoir l'utiliser dans main.ts
export const server = express();

// server.use(myLogger);
// middleware qui traite le json
server.use(bodyParser.json());
// server.use(myOtherLogger);
// middleware qui traite les urls en sur le chemin racine (/)
server.use("/", fileRouter);
