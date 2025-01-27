import { createFeatureSelector } from '@ngrx/store';
import { Category } from './categories.constants';

export const selectCategories = createFeatureSelector<Category>('categories');
