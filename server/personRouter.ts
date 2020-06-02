import { PersonController } from "./personController";
import { Router } from "express";

const PersonRouter: Router = Router();

PersonRouter.post("/", PersonController.create);

export default PersonRouter;
