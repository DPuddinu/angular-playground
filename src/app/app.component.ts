import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: ` <div class=" container mx-auto p-4 "><router-outlet /></div> `,
  styleUrl: './app.component.css', 
})
export class AppComponent {
  title = 'angular-playground';
}
