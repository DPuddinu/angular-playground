import { Component, computed, inject } from '@angular/core';
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
import { selectCategory } from './slices/categories/categories.actions';
import { categories, Category } from './slices/categories/categories.constants';
import { selectCategories } from './slices/categories/catetories.selectors';
import { exercises } from './slices/exercises/exercises.constants';
import { selectExercises } from './slices/exercises/exercises.selectors';

interface AppState {
  categories: Category;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule, SelectModule, FormsModule, ReactiveFormsModule],
  template: `
    <p>category: {{ category() }}</p>
    <div class="card flex flex-col gap-4">
      <form [formGroup]="formGroup">
        <p-select
          [options]="categories"
          (onChange)="onCategoryChange($event)"
          formControlName="category"
          placeholder="Select a Category"
          class="w-full md:w-56"
        />
      </form>

      @if (category()) {
      <div class="flex flex-col gap-2">
        <h3 class="text-lg font-semibold">Exercises (Signal Approach):</h3>
        <ul class="list-disc pl-6">
          @for (exercise of exercises(); track exercise) {
          <li>{{ exercise }}</li>
          }
        </ul>

       
      </div>
      }
    </div>
  `,
})
export class AppComponent {
  private readonly store = inject(Store<AppState>);
  category = toSignal(this.store.select(selectCategories));
  exercises = toSignal(this.store.select(selectExercises));
  categories = [...categories];
  formGroup = new FormGroup({
    category: new FormControl<Category | null>(this.category() ?? null),
  });

  onCategoryChange(event: SelectChangeEvent) {
    this.store.dispatch(selectCategory({ payload: event.value }));
  }
}
