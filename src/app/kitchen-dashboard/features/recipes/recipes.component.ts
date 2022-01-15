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
  editRecipeModeEnabled: boolean = false;
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

  refreshList(): void {
    this.getRecipes();
    this.disableAddRecipeMode();
    this.disableEditRecipeMode();
  }

  enableAddRecipeMode(): void {
    this.addRecipeModeEnabled = true;
  }

  disableAddRecipeMode(): void {
    this.addRecipeModeEnabled = false;
    this.getRecipes();
  }

  enableEditRecipeMode(recipe: Recipe) {
    this.selectedRecipe = JSON.parse(JSON.stringify(recipe));
    this.editRecipeModeEnabled = true;
  }

  disableEditRecipeMode(): void {
    this.editRecipeModeEnabled = false;
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
      .subscribe(() => this.refreshList());
  }

  updateRecipe(recipe: RecipeDetails) {
    this.recipeService.updateRecipe(recipe)
      .subscribe(() => this.refreshList());
  }

  deleteRecipe(recipeId: number) {
    this.recipeService.deleteRecipe(recipeId)
      .subscribe(() => this.refreshList());
  }

  @HostListener('document:click')
  documentClick(): void {
    this.showRecipeContextMenu = false;
  }
}
