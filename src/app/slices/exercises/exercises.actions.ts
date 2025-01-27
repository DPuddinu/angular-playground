import { createAction, props } from '@ngrx/store';
import { Exercise } from './exercises.constants';

export const selectExercises = createAction(
  'Select Exercise',
  props<{ payload: Exercise[] }>()
);
export const reset = createAction('Reset Exercise');
