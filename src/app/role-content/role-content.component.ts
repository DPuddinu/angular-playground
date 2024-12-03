import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-role-content',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-4">
      <select 
        #roleSelect
        (change)="setRole(roleSelect.value)"
        class="mb-4 p-2 border rounded-md text-black border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
        <option value="admin">Admin</option>
        <option value="user">User</option>
        <option value="guest">Guest</option>
        <option value="moderator">Moderator</option>
      </select>

      <div class="mt-4" [ngSwitch]="userRole">
        @switch (userRole) {
          @case ('admin') {
            <div class="p-4 bg-red-100 rounded-md">
              <h2 class="text-xl font-bold text-red-800">Admin Panel</h2>
              <p class="text-red-600">Full system access granted</p>
            </div>
          }
          @case ('moderator') {
            <div class="p-4 bg-yellow-100 rounded-md">
              <h2 class="text-xl font-bold text-yellow-800">Moderator Panel</h2>
              <p class="text-yellow-600">Content moderation tools available</p>
            </div>
          }
          @case ('user') {
            <div class="p-4 bg-green-100 rounded-md">
              <h2 class="text-xl font-bold text-green-800">User Dashboard</h2>
              <p class="text-green-600">Welcome to your personal dashboard</p>
            </div>
          }
          @default {
            <div class="p-4 bg-gray-100 rounded-md">
              <h2 class="text-xl font-bold text-gray-800">Guest View</h2>
              <p class="text-gray-600">Limited access mode</p>
            </div>
          }
        }
       
      </div>
    </div>
  `
})
export class RoleContentComponent {
  userRole = 'guest';
  setRole(role: string) {
    this.userRole = role;
  }
} 
