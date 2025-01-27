import { Category } from "../categories/categories.constants";

export const exercises: Record<Category, string[]> = {
  back: ['pull up', 'row', 'deadlift'],
  chest: ['bench press', 'shoulder press'],
  legs: ['squat', 'leg press'],
  shoulders: ['shoulder press'],
  arms: ['bench press', 'shoulder press'],
  core: ['squat', 'leg press'],
};
export type Exercise = (typeof exercises)[Category];
