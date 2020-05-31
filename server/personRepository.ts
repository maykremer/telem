import PersonModel from "./personModel";
import { Person } from "./personInterface";
export class PersonRepository {
  static create(person: Person) {
    return PersonModel.create(person);
  }
}
