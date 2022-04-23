import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Ingredient } from '../../../models/ingredient.model';
import { RecipeIngredient } from '../../../models/recipe-details.model';
import { IngredientService } from '../../../services/ingredient.service';

@Component({
  selector: 'app-ingredient-selector',
  templateUrl: './ingredient-selector.component.html',
  styleUrls: ['./ingredient-selector.component.scss']
})
export class IngredientSelectorComponent implements OnChanges {

  @Input() ingredientList: RecipeIngredient[];
  @Output() onIngredientListChange = new EventEmitter<RecipeIngredient[]>();

  searchText: string
  searchResult: Ingredient[]

  constructor(private ingredientService: IngredientService) { }

  ngOnChanges(): void {
    this.getTopFiveIngredient();
  }

  getTopFiveIngredient(): void {
    this.ingredientService.getIngredients()
      .subscribe(ingredients => this.searchResult = this.filterSearchResultByRecipeIngredients(ingredients));
  }

  onSearchTextChange(searchText: string): void {
    if (!searchText || !searchText.trim()) {
      this.getTopFiveIngredient();
      return;
    }

    this.ingredientService.searchIngredients(searchText)
      .subscribe(result =>
        this.searchResult = this.filterSearchResultByRecipeIngredients(result));
  }

  addIngredientToList(ingredient: Ingredient): void {
    const recipeIngredient = new RecipeIngredient();
    recipeIngredient.ingredient = ingredient;

    this.ingredientList.push(recipeIngredient);
    this.searchResult = this.searchResult.filter(r => ingredient.id !== r.id);
    this.onIngredientListChange.emit(this.ingredientList);
  }

  filterSearchResultByRecipeIngredients(ingredients: Ingredient[]): Ingredient[] {
    return ingredients
      .filter(i => !this.ingredientList
        .map(i => i.ingredient.id)
        .includes(i.id))
      .splice(0, 5);
  }

  deleteIngredientFromList(recipeIngredient: RecipeIngredient): void {
    this.onSearchTextChange(this.searchText);
    this.ingredientList = this.ingredientList.filter(r => recipeIngredient.ingredient.id !== r.ingredient.id);
    this.onIngredientListChange.emit(this.ingredientList);
  }
}
