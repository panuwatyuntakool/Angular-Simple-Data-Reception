import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: any = '';
  password: any = '';
  email: any = '';
  constructor() {}

  InputData(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
  }
}
