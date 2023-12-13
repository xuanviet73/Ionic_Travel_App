import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  async signup() {
    // Check if any of the fields is blank before proceeding
    if (this.name.trim() === '' || this.email.trim() === '' || this.password.trim() === '') {
      // Handle the case where any field is blank (show an error message or prevent submission)
      return;
    }

    await this.userService.signup(this.name, this.email, this.password);
    // Redirect back to the login page
    this.router.navigate(['/login-account']);
  }
}
