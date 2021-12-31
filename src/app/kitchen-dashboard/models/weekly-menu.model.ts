import { Recipe } from './recipe.model';

export class WeeklyMenuItem {
  order: number
  day: string
  lunch: Recipe | null
  dinner: Recipe | null
}

export enum MealType {
  Lunch,
  Dinner
}