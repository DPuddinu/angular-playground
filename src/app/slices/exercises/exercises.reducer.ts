import { createReducer, on } from '@ngrx/store';
import { selectCategory } from '../categories/categories.actions';
import { reset } from './exercises.actions';
import { exercises } from './exercises.constants';

export const initialState: string[] = [];

export const exercisesReducer = createReducer(
  initialState,
  on(selectCategory, (_state, { payload }) => exercises[payload]),
  on(reset, () => initialState)
);
