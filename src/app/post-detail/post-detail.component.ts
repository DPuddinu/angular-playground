import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { PostsResolverResponse } from '../../resolvers/posts.resolver';

@Component({
  selector: 'app-post-detail',
  imports: [JsonPipe, AsyncPipe],
  template: `
    <div class="p-4">
      @if (todo$ | async; as todo) {
        @if (todo.status === 'success') {
          <div class="rounded-lg  p-4 shadow">
            <pre>{{ todo.data | json }}</pre>
          </div>
        } @else {
          <div class="rounded-lg bg-red-100 p-4 text-red-700">
            {{ todo.message }}
          </div>
        }
      } @else {
        <div class="text-gray-500">Loading...</div>
      }
    </div>
  `,
})
export class PostDetailComponent {
  private readonly activatedRoute = inject(ActivatedRoute);
  
  protected readonly todo$ = this.activatedRoute.data.pipe(
    map((data): PostsResolverResponse => data['post'])
  );
}
