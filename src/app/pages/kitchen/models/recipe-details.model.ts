import { Ingredient } from "./ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeDetails extends Recipe {
  ingredients: RecipeIngredient[];
}

export class RecipeIngredient {
  id: number;
  amount: number = 1;
  unitOfMeasure: string = 'Unit';
  ingredient: Ingredient;
}