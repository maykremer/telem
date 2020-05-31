import { PersonManager } from "./personManager";
import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import { Person } from "./personInterface";

export class PersonController {
  static async create(req: Request, res: Response, next: NextFunction) {
    const person: Person = {
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      armyId: req.body.armyId,
      unit: req.body.unit,
      location: req.body.location
    };
    console.log(req.body)
    res.json(await PersonManager.create(person));
    res.end();
  }

  static get(req: Request, res: Response, next: NextFunction) {
    res.end();
  }
}
