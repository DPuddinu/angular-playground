import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: ` <div class="bg-slate-800"><router-outlet /></div> `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-playground';
}
