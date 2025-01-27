import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { provideStore } from '@ngrx/store';

import { routes } from './app.routes';
import { categoriesReducer } from './slices/categories/categories.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { exercisesReducer } from './slices/exercises/exercises.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
        theme: {
            preset: Aura,
        },
    }),
    provideStore({
        categories: categoriesReducer,
        exercises: exercisesReducer,
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
],
};
