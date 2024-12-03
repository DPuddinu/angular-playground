import { KeyValuePipe, NgFor, NgTemplateOutlet } from '@angular/common';
import { Component, TemplateRef, ContentChild, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor, KeyValuePipe, NgTemplateOutlet],
  template: `
    <table class="min-w-full border-collapse border border-gray-200 table-fixed">
      <thead class="bg-gray-100 text-slate-900 text-left">
        <tr>
          <ng-container *ngTemplateOutlet=" headers || defaultHeaderTemplate; context: { $implicit: data } " ></ng-container>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of data" class="border-t border-gray-200">
          <ng-container *ngTemplateOutlet=" rows || defaultRowTemplate; context: { $implicit: row } " ></ng-container>
        </tr>
      </tbody>
    </table>

    <ng-template #defaultHeaderTemplate let-data>
      @for (header of data[0] | keyvalue; track header.key) {
        <th class="p-2 text-left">
          {{ header.key }}
        </th>
      }
    </ng-template>

    <ng-template #defaultRowTemplate let-row>
      @for (cell of row | keyvalue; track cell.key) {
        <td class="p-2">
          {{ cell.value }}
        </td>
      }
    </ng-template>
  `,
})
export class TableComponent {
  @Input() data!: any[];
  @ContentChild('headers') headers: TemplateRef<any> | undefined;
  @ContentChild('rows') rows: TemplateRef<any> | undefined;
}
