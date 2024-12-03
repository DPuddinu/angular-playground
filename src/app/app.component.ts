import { Component } from '@angular/core';
import { TableComponent } from './components/table.component';
import { CurrencyPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TableComponent, CurrencyPipe],
  template: `
    <div class="p-4">
      <h1 class="text-2xl font-bold mb-4">Angular Table Demo</h1>
      
      <div class="space-y-8">
        <!-- Basic table -->
        <div>
          <h2 class="text-xl font-semibold mb-2">Employees</h2>
          <app-table [data]="employees"></app-table>
        </div>

        <!-- Inventory table -->
        <div>
          <h2 class="text-xl font-semibold mb-2">Inventory</h2>
          <app-table [data]="inventory">
            <ng-template #headers>
              <th class="p-2">Item</th>
              <th class="p-2">Price</th>
              <th class="p-2"></th>
              <th class="p-2"></th>
            </ng-template>
            <ng-template #rows let-row>
              <td class="p-2">{{ row.name }}</td>
              <td class="p-2">{{ row.price | currency : row.currency }}</td>
              <td class="p-2">
                @if (row.inStock > 0) {
                  <button 
                    class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    (click)="purchaseItem(row.plu)">
                    Buy now
                  </button>
                }
              </td>
              <td class="p-2">
                <button class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                  Delete
                </button>
              </td>
            </ng-template>
          </app-table>
        </div>
      </div>
    </div>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  employees = [
    { firstName: 'Employee', lastName: 'One' },
    { firstName: 'Employee', lastName: 'Two' },
    { firstName: 'Employee', lastName: 'Three' },
    { firstName: 'Employee', lastName: 'Four' },
    { firstName: 'Employee', lastName: 'Five' },
  ];

  inventory = [
    {
      plu: 110,
      supplier: 'X Corp',
      name: 'Table extender',
      inStock: 500,
      price: 50,
      currency: 'GBP',
    },
    {
      plu: 120,
      supplier: 'X Corp',
      name: 'Heated toilet seat',
      inStock: 0,
      price: 80,
      currency: 'GBP',
    },
    {
      plu: 155,
      supplier: 'Y Corp',
      name: 'Really good pencil',
      inStock: 1,
      price: 8000,
      currency: 'AUD',
    },
  ];

  purchaseItem(plu: number) {
    console.log('handle purchase for', plu);
  }
}
