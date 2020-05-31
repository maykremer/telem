"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonController = void 0;
const personManager_1 = require("./personManager");
const mongoose_1 = __importDefault(require("mongoose"));
class PersonController {
    static async create(req, res, next) {
        const person = {
            _id: new mongoose_1.default.Types.ObjectId(),
            name: req.body.name,
            armyId: req.body.armyId,
            unit: req.body.unit,
            location: req.body.location
        };
        console.log(req.body);
        res.json(await personManager_1.PersonManager.create(person));
        res.end();
    }
    static get(req, res, next) {
        res.end();
    }
}
exports.PersonController = PersonController;
