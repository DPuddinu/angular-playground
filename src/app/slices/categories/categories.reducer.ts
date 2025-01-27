import { createReducer, on } from '@ngrx/store';
import { selectCategory, resetCategory } from './categories.actions';
import { Category } from './categories.constants';

export const initialState = 'arms' as Category;

export const categoriesReducer = createReducer(
  initialState,
  on(selectCategory, (_state, action) => action.payload),
  on(resetCategory, (_state) => initialState)
);
