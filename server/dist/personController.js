"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonController = void 0;
const personManager_1 = require("./personManager");
const mongoose = require("mongoose");
class PersonController {
    static async create(req, res, next) {
        const person = {
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            armyId: req.body.armyId,
            unit: req.body.unit,
            location: req.body.location
        };
        console.log(req.body);
        res.json(await personManager_1.PersonManager.create(person));
        res.end();
    }
}
exports.PersonController = PersonController;
//# sourceMappingURL=personController.js.map