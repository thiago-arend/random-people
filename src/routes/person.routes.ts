import { Router } from "express";
import { personController } from "@/controllers/person.controllers";

const personRouter = Router();

personRouter.get("/person", personController.get);

export default personRouter;