import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { Post } from '../types/Post';

export type PostsResolverResponse =
  | {
      status: 'success';
      data: Post[];
    }
  | {
      status: 'error';
      message: string;
    };

export const postsResolver: ResolveFn<PostsResolverResponse> = (
  route,
  state
) => {
  const http = inject(HttpClient);
  return http
    .get<Post[]>(
      `https://jsonplaceholder.typicode.com/todos/${route.params['id']}`
    )
    .pipe(
      map((data) => ({ status: 'success', data } as PostsResolverResponse)),
      catchError((err) => {
        return of({
          status: 'error',
          message: 'Failed to fetch posts',
        } as PostsResolverResponse);
      })
    );
};
