import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private storage: Storage) {
    this.initStorage();
  }

  async initStorage() {
    await this.storage.create();
  }

  async signup(name: string, email: string, password: string) {
    // Store user data in Ionic Storage
    await this.storage.set('user', { name, email, password });
  }

  async login(email: string, password: string): Promise<boolean> {
    // Retrieve user data from Ionic Storage
    const user = await this.storage.get('user');

    // Check if user data matches the login credentials
    if (user && user.email === email && user.password === password) {
      return true;
    } else {
      return false;
    }
  }

  async isLoggedIn(): Promise<boolean> {
    // Check if a user is logged in (based on the presence of user data in storage)
    const user = await this.storage.get('user');
    return !!user;
  }
}
