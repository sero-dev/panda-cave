import { Component, HostListener, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  showAddRecipeModal: boolean = false;
  showEditRecipeModal: boolean = false;
  showRecipeContextMenu: boolean = false;
  contextMenuPositionX: number;
  contextMenuPositionY: number;
  selectedRecipe: Recipe;
  searchText: string;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getRecipes()
      .subscribe(recipes => this.recipes = recipes);
  }

  refreshList(): void {
    this.searchText = '';
    this.getRecipes();
    this.closeAddRecipeModal();
    this.closeEditRecipeModal();
  }

  openAddRecipeModal() {
    this.showAddRecipeModal = true;
  }

  openEditRecipeModal(recipe: Recipe) {
    this.selectedRecipe = JSON.parse(JSON.stringify(recipe));
    this.showEditRecipeModal = true;
  }

  openItemContextMenu(event: MouseEvent, recipe: Recipe) {
    this.showRecipeContextMenu = true;
    this.contextMenuPositionX = event.clientX;
    this.contextMenuPositionY = event.clientY;
    this.selectedRecipe = recipe;
  }

  closeAddRecipeModal(): void {
    this.showAddRecipeModal = false;
  }

  closeEditRecipeModal(): void {
    this.showEditRecipeModal = false;
  }

  onSearchTextChange(searchText: string) {
    if (searchText.trim() === '') this.getRecipes();
    else {
      this.recipeService.searchRecipes(searchText)
        .subscribe(recipes => this.recipes = recipes);
    }
  }

  @HostListener('document:click')
  documentClick(): void {
    this.showRecipeContextMenu = false;
  }
}
