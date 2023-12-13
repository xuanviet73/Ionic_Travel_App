import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = ''; // Initialize email property
  password: string = ''; // Initialize password property

  constructor() {}

  ngOnInit() {}

  login() {
    // Implement the login logic here
    console.log('Logging in with email:', this.email, 'and password:', this.password);
  }
}
