import { Component, HostListener, OnInit } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model';
import { IngredientService } from '../../services/ingredient.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  ingredients: Ingredient[] = [];
  showAddIngredientModal: boolean = false;
  showEditIngredientModal: boolean = false;
  selectedIngredient: Ingredient;
  searchText: string;

  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {
    this.getIngredients();
  }

  getIngredients(): void {
    this.ingredientService.getIngredients()
      .subscribe(ingredients => this.ingredients = ingredients);
  }

  refreshList(): void {
    this.searchText = '';
    this.getIngredients();
    this.closeAddIngredientModal();
    this.closeEditIngredientModal();
  }

  openAddIngredientModal() {
    this.showAddIngredientModal = true;
  }

  openEditIngredientModal(ingredient: Ingredient) {
    this.selectedIngredient = JSON.parse(JSON.stringify(ingredient));
    this.showEditIngredientModal = true;
  }

  closeAddIngredientModal(): void {
    this.showAddIngredientModal = false;
  }

  closeEditIngredientModal(): void {
    this.showEditIngredientModal = false;
  }

  onSearchTextChange(searchText: string) {
    if (searchText.trim() === '') this.getIngredients();
    else {
      this.ingredientService.searchIngredients(searchText)
        .subscribe(ingredients => this.ingredients = ingredients);
    }
  }
}
