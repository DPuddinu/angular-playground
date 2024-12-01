import { environment } from '@/environments/environment';
import { HttpClient, HttpContext } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { SKIP_INTERCEPTOR } from './context/skip-interceptor-token';

export interface LoginResponse {
  record: {
    avatar: string;
    collectionId: string;
    collectionName: string;
    created: Date;
    email: string;
    emailVisibility: boolean;
    id: string;
    name: string;
    updated: Date;
    verified: boolean;
  };
  token: string;
}
const TOKEN_KEY = 'token';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  httpClient = inject(HttpClient);
  router = inject(Router);
  pocketbaseUrl = environment.POCKETBASE_URL;

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  token$ = new BehaviorSubject<string | null>(null);

  constructor() {
    const token = sessionStorage.getItem(TOKEN_KEY);
    if (token) {
      this.token$.next(token);
      this.isAuthenticatedSubject.next(true);
    }
  }

  login(username: string, password: string) {
    return this.httpClient
      .post<LoginResponse>(
        `${this.pocketbaseUrl}/api/collections/users/auth-with-password`,
        {
          identity: username,
          password: password,
        },
        {
          context: new HttpContext().set(SKIP_INTERCEPTOR, true),
        }
      )
      .pipe(
        tap((res) => {
          console.log(res);
          this.isAuthenticatedSubject.next(true);
          this.token$.next(res.token);
          sessionStorage.setItem(TOKEN_KEY, res.token);
          this.router.navigate(['/posts']);
        })
      )
      .subscribe();
  }

  logout() {
    this.isAuthenticatedSubject.next(false);
    this.token$.next(null);
    sessionStorage.removeItem(TOKEN_KEY);
    this.router.navigate(['/login']);
  }
}
