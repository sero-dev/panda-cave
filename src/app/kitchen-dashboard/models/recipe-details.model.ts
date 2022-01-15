import { Ingredient } from "./ingredient.model";

export class RecipeDetails {
  id: number;
  name: string;
  ingredients: RecipeIngredients[];
}

export class RecipeIngredients {
  id: number;
  amount: number;
  unitOfMeasure: string;
  ingredient: Ingredient;
}