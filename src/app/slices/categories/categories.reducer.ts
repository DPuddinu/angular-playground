import { createReducer, on } from '@ngrx/store';
import { select, reset } from './categories.actions';
import { Category } from './categories.constants';

export const initialState = 'arms' as Category;

export const categoriesReducer = createReducer(
  initialState,
  on(select, (_state, action) => action.payload),
  on(reset, (_state) => initialState)
);
