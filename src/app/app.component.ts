import { Component } from '@angular/core';
import { RoleContentComponent } from './role-content/role-content.component';

@Component({
  selector: 'app-root',
  imports: [RoleContentComponent],
  template: `
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Role-based Content Display</h1>
      <app-role-content />
    </div>
  `
})
export class AppComponent {}
