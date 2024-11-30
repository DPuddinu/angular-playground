import { Routes } from '@angular/router';
import { authGuard } from './services/auth.guard';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';

export const routes: Routes = [
  {
    path: 'posts',
    component: PostsPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent,
    canActivate: [authGuard],
  },
  {
    path: '/',
    component: LoginPageComponent,
  },
  {
    path: '/login',
    component: LoginPageComponent,
  },
];
