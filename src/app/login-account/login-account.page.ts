import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-account',
  templateUrl: './login-account.page.html',
  styleUrls: ['./login-account.page.scss'],
})
export class LoginAccountPage {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  async login() {
    const loggedIn = await this.userService.login(this.email, this.password);
    if (loggedIn) {
      this.router.navigate(['/home']);
    } else {
      // Handle the case where login fails (e.g., show an error message)
    }
  }
}
