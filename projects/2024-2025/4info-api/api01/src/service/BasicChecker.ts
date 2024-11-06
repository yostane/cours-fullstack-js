import { Request, Response, NextFunction } from "express";
import { isUserInDatabase } from "./DatabaseHelper";
import jwt, { decode } from "jsonwebtoken";
import { JWT_SECRET } from "../config/constants";

export async function checkBasicAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
  // la partie parès basic: base64(login:password)
  const authorization = req.headers.authorization;
  if (authorization == undefined || !authorization.startsWith("Basic ")) {
    res.status(401).send();
    return;
  }
  const b64Credentials = authorization.substring(6);
  const credentials = atob(b64Credentials).split(":");
  console.log(b64Credentials, credentials);
  if (credentials.length != 2) {
    res.status(401).send();
    return;
  }
  const isUser = await isUserInDatabase(credentials[0], credentials[1]);
  if (!isUser) {
    res.status(401).send();
    return;
  }
  res.locals.login = credentials[0];
  next();
}

export async function checkBearerAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization = req.headers.authorization;
  if (authorization == undefined || !authorization.startsWith("Bearer ")) {
    res.status(401).send();
    return;
  }
  const token = authorization.substring(7);
  // Vériier la validité du jwt (c'est bien un jwt qu'on a généré)
  try {
    type Payload = { name: string };
    const decoded = jwt.verify(token, JWT_SECRET) as Payload;
    res.locals.login = decoded.name;
  } catch (e) {
    res.status(401).send();
    return;
  }
  next();
}
