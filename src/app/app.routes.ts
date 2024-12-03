import { Routes } from '@angular/router';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { postsResolver } from '../resolvers/posts.resolver';

export const routes: Routes = [
  {
    path: 'post/:id',
    component: PostDetailComponent,
    resolve: {
      post: postsResolver,
    },
  },
];
