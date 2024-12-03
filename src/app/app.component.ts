import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="p-4">
      <nav class="flex gap-4 mb-4">
        <a
          class="text-blue-600 hover:text-blue-800"
          routerLink="post/1"
          routerLinkActive="text-red-600"
          ariaCurrentWhenActive="page"
          >Post 1</a
        >
        <a
          class="text-blue-600 hover:text-blue-800"
          routerLink="post/2"
          routerLinkActive="text-red-600"
          ariaCurrentWhenActive="page"
          >Post 2</a
        >
        <a
          class="text-blue-600 hover:text-blue-800"
          routerLink="post/3"
          routerLinkActive="text-red-600"
          ariaCurrentWhenActive="page"
          >Post 3</a
        >
      </nav>
      <router-outlet />
    </div>
  `,
})
export class AppComponent {}
