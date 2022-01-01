import { Recipe } from './recipe.model';

export class WeeklyMenuItem {
  day: string
  lunch: Recipe | null
  dinner: Recipe | null
}

export enum MealType {
  Lunch,
  Dinner
}