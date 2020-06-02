import { PersonController } from "./personController";
import { Router } from "express";

const PersonRouter: Router = Router();

PersonRouter.post("/", PersonController.create);
PersonRouter.get('/user',PersonController.getUser )
export default PersonRouter;
