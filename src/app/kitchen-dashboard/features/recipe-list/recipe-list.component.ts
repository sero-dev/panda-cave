import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  showAddRecipeModal: boolean = true;
  searchText: string = '';

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getRecipes()
      .subscribe(recipes => this.recipes = recipes);
  }

  addRecipe(recipeName: string): void {
    console.log(recipeName);
    this.closeModal();
  }

  closeModal(): void {
    this.showAddRecipeModal = false;
  }

  onSearchTextChange(searchText: string) {
    if (searchText === '') this.getRecipes();
    else {
      this.recipeService.searchRecipes(searchText)
        .subscribe(recipes => this.recipes = recipes);
    }
  }

  onAddButtonClick() {
    this.showAddRecipeModal = true;
  }
}
