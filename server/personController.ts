import { PersonManager } from "./personManager";
import { Request, Response, NextFunction } from "express";
import * as mongoose from "mongoose";
import { Person } from "./personInterface";
import { AuthenticationHandler } from "./authentication/hanlder";

export class PersonController {
  static async create(req: Request, res: Response, next: NextFunction) {
    const person: Person = {
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      armyId: req.body.armyId,
      unit: req.body.unit,
      location: req.body.location
    };
    res.json(await PersonManager.create(person));
    res.end();
  }

  static async getUser(req: Request, res: Response, next: NextFunction){
    console.log(` controllerrrrrrrrr: ${AuthenticationHandler.user}`);
     res.send(AuthenticationHandler.user)
  }
}
