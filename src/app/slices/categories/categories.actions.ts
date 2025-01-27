import { createAction, props } from '@ngrx/store';
import { Category } from './categories.constants';


export const select = createAction(
  'Select Category',
  props<{ payload: Category }>()
);
export const reset = createAction('Reset Category');
