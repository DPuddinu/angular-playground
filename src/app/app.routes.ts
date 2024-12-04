import { Routes } from '@angular/router';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { quizGuard } from './services/guards/quiz.guard';

export const routes: Routes = [
  {
    path: '',
    component: UserInfoComponent,
  },
  {
    path: 'user-info',
    component: UserInfoComponent,
  },
  {
    path: 'quiz',
    loadComponent: () =>
      import('./components/quiz/quiz.component').then((m) => m.QuizComponent),
    canActivate: [quizGuard],
  },
];
