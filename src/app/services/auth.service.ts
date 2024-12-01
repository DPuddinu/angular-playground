import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  httpClient = inject(HttpClient);
  pocketbaseUrl = environment.POCKETBASE_URL;

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();


  login(username: string, password: string) {
    return this.httpClient.post(
      `${this.pocketbaseUrl}/api/collections/_superusers/auth-with-password`,
      {
        identity: username,
        password: password
      }
    );
  }

  logout() {
    this.isAuthenticatedSubject.next(false);
  }
}
