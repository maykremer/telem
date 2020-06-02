"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const personManager_1 = require("./personManager");
const mongoose = require("mongoose");
const hanlder_1 = require("./authentication/hanlder");
class PersonController {
    static async create(req, res, next) {
        const person = {
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            armyId: req.body.armyId,
            unit: req.body.unit,
            location: req.body.location
        };
        res.json(await personManager_1.PersonManager.create(person));
        res.end();
    }
    static async getUser(req, res, next) {
        console.log(` controllerrrrrrrrr: ${hanlder_1.AuthenticationHandler.user}`);
        res.send(hanlder_1.AuthenticationHandler.user);
    }
}
exports.PersonController = PersonController;
//# sourceMappingURL=personController.js.map