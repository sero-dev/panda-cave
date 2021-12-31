import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/kitchen-dashboard/models/recipe.model';
import { RecipeService } from 'src/app/kitchen-dashboard/services/recipe.service';

@Component({
  selector: 'app-select-recipe-modal',
  templateUrl: './select-recipe-modal.component.html',
  styleUrls: ['./select-recipe-modal.component.scss']
})
export class SelectRecipeModalComponent implements OnInit {

  @Output('selected')
  onSelected = new EventEmitter<Recipe>();

  @Output('cancel')
  onCancel = new EventEmitter<void>();

  @Output('clear')
  onClear = new EventEmitter<void>();

  searchText: string;
  suggestions: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onSearchTextChange(searchText: string) {
    if (searchText.trim() == '') return;

    this.recipeService.searchRecipes(searchText)
      .subscribe(recipes => this.suggestions = JSON.parse(JSON.stringify(recipes)))
  }

  onCancelClicked() {
    this.searchText = '';
    this.onCancel.emit();
  }

  onClearClicked() {
    this.searchText = '';
    this.onClear.emit();
  }

  onSuggestionClicked(recipe: Recipe) {
    this.onSelected.emit(recipe);
  }
}
