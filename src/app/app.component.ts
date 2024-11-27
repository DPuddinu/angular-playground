import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicTableComponent } from "./components/dynamic-table/dynamic-table.component";
import { DynamicTableColumnDirective } from './components/dynamic-table/dynamic-table-column.directive';

// Add interface definition
interface TableRow {
  name: string;
  email: string;
  status: string;
  avatar: string;
}

@Component({
  selector: 'app-root',
  imports: [DynamicTableComponent, DynamicTableColumnDirective],
  template: `
    <app-dynamic-table [columns]="columns" [data]="data">
      <!-- Custom template for status column -->
      <ng-template appDynamicTableColumn="status" let-row>
        <span [class]="'status-' + row.status.toLowerCase()">
          {{ row.status }}
        </span>
      </ng-template>

      <!-- Custom template for name with avatar -->
      <ng-template appDynamicTableColumn="name" let-row>
        <div class="name-cell">
          <img [src]="row.avatar" alt="avatar" />
          <span>{{ row.name }}</span>
        </div>
      </ng-template>
    </app-dynamic-table>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-playground';

  columns: { key: 'name' | 'email' | 'status' | 'avatar' ; label: string }[] = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'status', label: 'Status' },
    { key: 'avatar', label: 'Avatar' },
  ];

  data = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      status: 'Active',
      avatar: 'path/to/avatar1.jpg',
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      status: 'Inactive',
      avatar: 'path/to/avatar2.jpg',
    },
  ];
}
