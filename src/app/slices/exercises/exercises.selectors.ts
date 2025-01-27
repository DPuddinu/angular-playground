import { createFeatureSelector } from '@ngrx/store';
import { Exercise } from './exercises.constants';

export const selectExercises = createFeatureSelector<Exercise>('exercises');
