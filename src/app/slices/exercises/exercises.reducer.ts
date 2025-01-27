import { createReducer, on } from '@ngrx/store';
import { select, reset } from './exercises.actions';

export const initialState = '';

export const exercisesReducer = createReducer(
  initialState,
  on(select, (_state, action) => action.payload),
  on(reset, (_state) => '')
);
