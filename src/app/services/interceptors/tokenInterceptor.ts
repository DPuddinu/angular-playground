import { environment } from '@/environments/environment';
import { HttpEvent, HttpHandlerFn, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { SKIP_INTERCEPTOR } from '../context/skip-interceptor-token';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export function tokenInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const router = inject(Router);

  // Skip the interceptor if the context token is true
  if (req.context.get(SKIP_INTERCEPTOR)) {
    return next(req);
  }

  const token = sessionStorage.getItem(environment.TOKEN_KEY);
  
  // If no token is present and we're not already on the login page, redirect
  if (!token && !req.url.includes('/login')) {
    router.navigate(['/login']);
    return throwError(() => new Error('No authentication token found'));
  }

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 511 || error.status === 401) {
        sessionStorage.removeItem(environment.TOKEN_KEY);
        router.navigate(['/login']);
      }
      return throwError(() => error);
    })
  );
}
