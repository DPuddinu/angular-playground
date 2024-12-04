import { Injectable, signal } from '@angular/core';
import { User } from '../models/user';

const SESSION_STORAGE_USER_KEY = 'angular-quiz-user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly user = signal<User | null>(null);

  constructor() {
    const user = sessionStorage.getItem(SESSION_STORAGE_USER_KEY);
    if (user) {
      this.user.set(JSON.parse(user));
    }
  }

  getUser() {
    return this.user();
  }

  setUser(user: User) {
    this.user.set(user);
    sessionStorage.setItem(SESSION_STORAGE_USER_KEY, JSON.stringify(user));
  }
}
