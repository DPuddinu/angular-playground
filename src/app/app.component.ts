import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { toLoadingStateStream } from './lib/loadData';
import { CommonModule } from '@angular/common';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  template: ` <div>
    @if (data$ | async; as data) {
      @switch (data.state) {
        @case ('loading') { Loading... }
        @case ('error') { Error: {{ data.error.message }} }
        @case ('loaded') {
          <div>
            <p>{{ data.data.title }}</p>
            <p>{{ data.data.completed }}</p>
            <p>{{ data.data.userId }}</p>
          </div>
        } } }
    </div>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  httpClient = inject(HttpClient);
  data$ = toLoadingStateStream(
    this.httpClient.get<{
      title: string;
      completed: boolean;
      userId: number;
      id: number;
    }>('https://jsonplaceholder.typicode.com/todos/1')
  ).pipe(tap((res) => console.log(res)));
}
