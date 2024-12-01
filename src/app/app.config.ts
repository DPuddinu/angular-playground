import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { randomTimeoutInterceptor } from './services/interceptors/randomTimeoutInterceptor';
import { baseUrlInterceptor } from './services/interceptors/baseUrlInterceptor';
import { tokenInterceptor } from './services/interceptors/tokenInterceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([randomTimeoutInterceptor, baseUrlInterceptor, tokenInterceptor])
    ),
  ],
};
