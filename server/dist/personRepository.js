"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonRepository = void 0;
const personModel_1 = __importDefault(require("./personModel"));
class PersonRepository {
    static create(person) {
        return personModel_1.default.create(person);
    }
}
exports.PersonRepository = PersonRepository;
