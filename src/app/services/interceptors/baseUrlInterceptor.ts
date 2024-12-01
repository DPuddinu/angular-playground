import { environment } from '@/environments/environment';
import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SKIP_INTERCEPTOR } from '../context/skip-interceptor-token';

export function baseUrlInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const url = req.url.startsWith('/') ? environment.POCKETBASE_URL + req.url : req.url;
  return next(req.clone({ url }));
}
