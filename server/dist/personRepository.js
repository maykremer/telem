"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const personModel_1 = require("./personModel");
class PersonRepository {
    static create(person) {
        return personModel_1.default.create(person);
    }
}
exports.PersonRepository = PersonRepository;
//# sourceMappingURL=personRepository.js.map