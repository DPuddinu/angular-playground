import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

export function randomTimeoutInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const randomDelay = Math.random() * 1700 + 300; // Random number between 300 and 2000 ms
  return next(req).pipe(
    delay(randomDelay)
  );
}
