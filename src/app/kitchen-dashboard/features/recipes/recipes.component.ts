import { Component, HostListener, OnInit } from '@angular/core';
import { RecipeDetails } from '../../models/recipe-details.model';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[] = [];
  addRecipeModeEnabled: boolean = false;
  showRecipeContextMenu: boolean = false;
  contextMenuPositionX: number;
  contextMenuPositionY: number;
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getRecipes()
      .subscribe(recipes => this.recipes = recipes);
  }

  enableAddRecipeMode(): void {
    this.addRecipeModeEnabled = true;
  }

  disableAddRecipeMode(): void {
    this.addRecipeModeEnabled = false;
    this.getRecipes();
  }

  openItemContextMenu(event: MouseEvent, recipe: Recipe) {
    this.showRecipeContextMenu = true;
    this.contextMenuPositionX = event.clientX;
    this.contextMenuPositionY = event.clientY;
    this.selectedRecipe = recipe;
  }

  searchForRecipes(searchText: string) {
    if (searchText.trim() === "") {
      this.getRecipes();
      return;
    }

    this.recipeService.searchRecipes(searchText)
      .subscribe(recipes => this.recipes = recipes);
  }

  addRecipe(recipeName: string) {
    this.recipeService.addRecipe(recipeName)
      .subscribe(() => this.disableAddRecipeMode());
  }

  @HostListener('document:click')
  documentClick(): void {
    this.showRecipeContextMenu = false;
  }
}
