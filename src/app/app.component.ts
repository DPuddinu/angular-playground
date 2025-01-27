import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { SelectChangeEvent, SelectModule } from 'primeng/select';
import { select } from './slices/categories/categories.actions';
import { categories, Category } from './slices/categories/categories.constants';
import { selectCategories } from './slices/categories/catetories.selectors';

interface AppState {
  categories: Category;
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule, SelectModule, FormsModule, ReactiveFormsModule],
  template: `
    @let category = this.category();
    <p>category: {{ category }}</p>
    <div class="card flex justify-center">
      <form [formGroup]="formGroup">
        <p-select
          [options]="categories"
          (onChange)="onCategoryChange($event)"
          formControlName="category"
          placeholder="Select a Category"
          class="w-full md:w-56"
        />
      </form>
    </div>
  `,
})
export class AppComponent {
  private readonly store = inject(Store<AppState>);
  category = toSignal(this.store.select(selectCategories));
  categories = [...categories];
  formGroup = new FormGroup({
    category: new FormControl<Category | null>(this.category() ?? null),
  });

  onCategoryChange(event: SelectChangeEvent) {
    this.store.dispatch(select({ payload: event.value }));
  }
}
