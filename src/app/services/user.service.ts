import { Injectable, signal } from '@angular/core';
import { User } from '../models/user';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly user = signal<User | null>(null);

  getUser() {
    return this.user();
  }

  setUser(user: User) {
    this.user.set(user);
  }
}
