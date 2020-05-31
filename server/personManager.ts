import { PersonRepository } from "./personRepository";
import { Person } from "./personInterface";

export class PersonManager {
  static create(person: Person) {
    return PersonRepository.create(person);
  }
}
