import express from "express";
import { DriveController } from "../controller/DriveController";

export const driveRouter = express.Router();

function getStarParam(params: {}) {
  const p = params as { "0": string };
  return p[0];
}

driveRouter.get("/simu", (req, res) => {
  const driveController = new DriveController();
  console.log(res.locals.login);
  res.json(driveController.generateSimulatedData());
});

// TODO: A enlever car redondant avec get("/drive/:p"
driveRouter.get("/", async (req, res) => {
  res.json(await new DriveController().listRootItems(res.locals.login));
});

driveRouter.get("/info/*", async (req, res) => {
  try {
    const path = getStarParam(req.params);
    const info = await new DriveController().getItemInfo(
      res.locals.login,
      path
    );
    res.json(info);
  } catch (e) {
    console.error(e.message);
    res.status(400).end();
  }
});

driveRouter.get("/content/*", async (req, res) => {
  const filePath = getStarParam(req.params);
  const content = await new DriveController().getTextFileContent(
    res.locals.login,
    filePath
  );
  res.send(content);
});

driveRouter.post("/content/*", async (req, res) => {
  const filePath = getStarParam(req.params);
  const content = await new DriveController().setTextFileContent(
    res.locals.login,
    filePath,
    req.body
  );
  res.end();
});

driveRouter.patch("/move/*/to/*", async (req, res) => {
  // sortie { "0": "souvenirs/2024/souvenir1.txt", "1": "hello.txt" }
  console.log(req.params);
  res.end();
});

driveRouter.get("/*", async (req, res) => {
  const path = getStarParam(req.params);
  const items = await new DriveController().listItemsByPath(
    res.locals.login,
    path
  );
  res.json(items);
});
