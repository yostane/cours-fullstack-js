import { Request, Response, NextFunction } from "express";

export const myLogger = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("LOGGED", req.body, res.statusCode);
  // Permet de passer à l'élément suivant de la chaine
  next();
};

export const myOtherLogger = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("Other logger", req.body, res.statusCode);
  // Permet de passer à l'élément suivant de la chaine
  next();
};
