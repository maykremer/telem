"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const personRepository_1 = require("./personRepository");
class PersonManager {
    static create(person) {
        return personRepository_1.PersonRepository.create(person);
    }
}
exports.PersonManager = PersonManager;
//# sourceMappingURL=personManager.js.map