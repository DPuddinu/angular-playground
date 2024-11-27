// dynamic-table-column.directive.ts
import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appDynamicTableColumn]',
})
export class DynamicTableColumnDirective<T> {
  @Input({ alias: 'appDynamicTableColumn', required: true }) columnKey!: string;

  constructor(public template: TemplateRef<T>) {}
}
