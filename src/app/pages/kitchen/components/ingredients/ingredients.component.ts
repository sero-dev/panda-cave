import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model';
import { IngredientService } from '../../services/ingredient.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  ingredients: Ingredient[] = [];
  addIngredientModeEnabled: boolean = false;
  searchText: string;

  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {
    this.getIngredients();
  }

  getIngredients(): void {
    this.ingredientService.getIngredients()
      .subscribe(ingredients => this.ingredients = ingredients);
  }

  addIngredient(ingredient: string): void {
    this.ingredientService.addIngredient(ingredient)
      .subscribe(() => this.disableAddIngredientMode())
  }

  enableAddIngredientMode(): void {
    this.addIngredientModeEnabled = true;
  }

  disableAddIngredientMode(): void {
    this.addIngredientModeEnabled = false;
    this.getIngredients();
  }

  searchForIngredients(searchText: string): void {
    if (searchText.trim() === "") {
      this.getIngredients();
      return;
    }

    this.ingredientService.searchIngredients(searchText)
      .subscribe(ingredients => this.ingredients = ingredients);
  }

  refreshList(): void {
    this.searchText = '';
    this.getIngredients();
  }

  onSearchTextChange(searchText: string) {
    if (searchText.trim() === '') this.getIngredients();
    else {
      this.ingredientService.searchIngredients(searchText)
        .subscribe(ingredients => this.ingredients = ingredients);
    }
  }

  deleteIngredient(ingredientId: number) {
    this.ingredientService.deleteIngredient(ingredientId)
      .subscribe(_ => this.getIngredients());
  }
}
