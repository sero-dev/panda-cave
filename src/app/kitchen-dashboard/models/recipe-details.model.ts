import { Ingredient } from "./ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeDetails extends Recipe {
  ingredients: RecipeIngredients[];
}

export class RecipeIngredients {
  id: number;
  amount: number;
  unitOfMeasure: string;
  ingredient: Ingredient;
}