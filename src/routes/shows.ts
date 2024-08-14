import { Router } from "express";
import ShowController from "../controllers/ShowController";

export const showRouter = Router();

const showsCtrl = new ShowController();

// POST /products
//prova-felipe
showRouter.post("/", (req, res) => showsCtrl.save(req, res));

// GET /shows/:title
showRouter.get("/:title", (req, res) => showsCtrl.search(req, res));
