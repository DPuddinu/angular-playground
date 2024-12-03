import { KeyValuePipe, NgFor } from '@angular/common';
import { Component, TemplateRef, ContentChild, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [NgFor, KeyValuePipe],
  template: `
    <table>
      <thead>
        <tr>
          <ng-container
            *ngTemplateOutlet="
              headers || defaultHeaderTemplate;
              context: { $implicit: data }
            "
          ></ng-container>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of data">
          <ng-container *ngTemplateOutlet=" rows || defaultRowTemplate; context: { $implicit: row }" ></ng-container>
        </tr>
      </tbody>
    </table>

    <!-- If no template is provided use keys as headers and display all values -->
    <ng-template #defaultHeaderTemplate let-data>
      <th *ngFor="let header of data[0] | keyvalue">{{ header.key }}</th>
    </ng-template>

    <ng-template #defaultRowTemplate let-row>
      <td *ngFor="let row of row | keyvalue">{{ row.value }}</td>
    </ng-template>
  `,
})
export class TableComponent {
  @Input() data!: any[];
  @ContentChild('headers') headers: TemplateRef<any> | undefined;
  @ContentChild('rows') rows: TemplateRef<any> | undefined;
}
