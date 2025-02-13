import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './person.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private http: HttpClient) {}
  units: string[] = ['יחידה 1', 'יחידה 2', 'יחידה 3', 'יחידה 4', 'יחידה 5 '];
  bases: string[] = ['בסיס 1', 'בסיס 2', 'בסיס 3', 'בסיס 4', 'בסיס 5 '];

  postData: Person = { name: '', armyId: '', unit: '', location: '' };
  user: { firstName: string; lastName: string; armyId: string } = {
    firstName: '',
    lastName: '',
    armyId: '',
  };

  ngOnInit(): void {
    this.http.get('http://localhost:3000/user').subscribe((user: any) => {
      this.user.firstName = user.name.firstName;
      this.user.lastName = user.name.lastName;
      this.user.armyId = user.iat;
      this.postData.name = user.name.firstName + ' ' + user.name.lastName;
      this.postData.armyId = user.iat;
    });
  }

  unitSelected(event: any) {
    this.postData.unit = event.value;
  }
  locationSelected(event: any) {
    this.postData.location = event.value;
  }

  checkData() {

    return Object.values(this.postData).some((value) => value === '');
  }

  addPerson() {
    console.log(`name:  ${this.postData.name}`);
    console.log(`army id:  ${this.postData.armyId}`);
    console.log(`unit:  ${this.postData.unit}`);
    console.log(`location:  ${this.postData.location}`);
    console.log(`post data:  ${this.postData}`);
    this.http
      .post('/', this.postData)
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }
}
