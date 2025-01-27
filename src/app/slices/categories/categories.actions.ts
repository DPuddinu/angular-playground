import { createAction, props } from '@ngrx/store';
import { Category } from './categories.constants';

export const selectCategory = createAction(
  'Select Category',
  props<{ payload: Category }>()
);
export const resetCategory = createAction('Reset Category');
