// dynamic-table.component.ts
import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { DynamicTableColumnDirective } from './dynamic-table-column.directive';

@Component({
  selector: 'app-dynamic-table',
  imports: [CommonModule],
  template: `
    <div class="table-container">
      <!-- Search input remains the same -->
      <div class="search-container">
        <input
          type="text"
          placeholder="Search..."
          (input)="onSearch($event)"
          [value]="searchText"
        />
      </div>

      <!-- Updated table with dynamic templates -->
      <table>
        <thead>
          <tr>
            <th *ngFor="let col of columns" (click)="sort(col.key)">
              {{ col.label }}
              <span *ngIf="sortColumn === col.key">
                {{ sortDirection === 'asc' ? '↑' : '↓' }}
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of displayedData">
            <td *ngFor="let col of columns">
              <!-- Use custom template if available, otherwise default to simple value -->
              <ng-container
                *ngTemplateOutlet="
                  templateMap.get(col.key) || defaultTemplate;
                  context: { $implicit: row, column: col }
                "
              ></ng-container>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Default template -->
      <ng-template #defaultTemplate let-row let-column="column">
        {{ row[column.key] }}
      </ng-template>

      <!-- Pagination remains the same -->
      <div class="pagination">
        <!-- ... pagination content ... -->
      </div>
    </div>
  `,
  styleUrls: ['./dynamic-table.component.css'],
})
export class DynamicTableComponent<T extends Record<string, any>> implements OnInit {
  @Input() columns: Array<{ key: keyof T; label: string }> = [];
  @Input() data: T[] = [];
  @ContentChildren(DynamicTableColumnDirective)
  columnTemplates!: QueryList<DynamicTableColumnDirective<T>>;

  displayedData: T[] = [];
  sortColumn: keyof T | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';
  searchText: string = '';

  // Pagination
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages: number = 0;

  // Store template references
  templateMap = new Map<keyof T, TemplateRef<any>>();

  ngOnInit() {
    this.updateDisplayedData();
  }

  updateDisplayedData() {
    let filteredData = [...this.data];

    // Apply search filter with improved typing
    if (this.searchText) {
      filteredData = this.data.filter((item) =>
        Object.values(item).some((val) =>
          String(val).toLowerCase().includes(this.searchText.toLowerCase())
        )
      );
    }

    // Improve sort comparison typing
    if (this.sortColumn) {
      filteredData.sort((a, b) => {
        const aVal = String(a[this.sortColumn as keyof T]);
        const bVal = String(b[this.sortColumn as keyof T]);
        return this.sortDirection === 'asc' 
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      });
    }

    // Calculate pagination
    this.totalPages = Math.ceil(filteredData.length / this.pageSize);
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.displayedData = filteredData.slice(
      startIndex,
      startIndex + this.pageSize
    );
  }

  sort(column: keyof T) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.updateDisplayedData();
  }

  onSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchText = target.value;
    this.currentPage = 1;
    this.updateDisplayedData();
  }

  changePage(page: number) {
    this.currentPage = page;
    this.updateDisplayedData();
  }

  ngAfterContentInit() {
    this.columnTemplates.forEach((column) => {
      this.templateMap.set(column.columnKey as keyof T, column.template);
    });
  }
}
