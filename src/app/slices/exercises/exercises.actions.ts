import { createAction, props } from '@ngrx/store';

type Exercise = 'squat' | 'bench press' | 'deadlift' | 'shoulder press' | 'pull up' | 'row';
export const select = createAction('Select Exercise', props<{ payload: Exercise }>());
export const reset = createAction('Reset Exercise');
