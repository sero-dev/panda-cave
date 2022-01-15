import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { RecipeDetails } from 'src/app/kitchen-dashboard/models/recipe-details.model';
import { RecipeService } from 'src/app/kitchen-dashboard/services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() recipeId: number;
  @Output() update = new EventEmitter<RecipeDetails>();
  @Output() cancel = new EventEmitter<void>();
  @Output() delete = new EventEmitter<number>();

  recipe: RecipeDetails;
  recipeNameEditText: string;
  recipeNameEditible = false;

  recipeDescriptionEditText: string;
  recipeDescriptionEditible = false;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getRecipesDetails(this.recipeId)
      .subscribe(recipe => {
        this.recipe = recipe;
        this.recipeNameEditText = recipe.name;
      });
  }

  enableRecipeNameEdit(): void {
    this.recipeNameEditible = true;
  }

  confirmRecipeNameEdit(): void {
    this.recipe.name = this.recipeNameEditText;
    this.recipeNameEditible = false;
  }
  
  cancelRecipeNameEdit(): void {
    this.recipeNameEditText = this.recipe.name;
    this.recipeNameEditible = false;
  }

  enableRecipeDescriptionEdit(): void {
    this.recipeDescriptionEditible = true;
  }

  confirmRecipeDescriptionEdit(): void {
    this.recipe.name = this.recipeDescriptionEditText;
    this.recipeDescriptionEditible = false;
  }

  cancelRecipeDescriptionEdit(): void {
    this.recipeDescriptionEditText = this.recipe.name;
    this.recipeDescriptionEditible = false;
  }

  onUpdateClicked(): void {
    this.update.emit(this.recipe);
  }

  onDeleteClicked(): void {
    this.delete.emit(this.recipe.id);
  }

  onCancelClicked(): void {
    this.cancel.emit();
  }

  isRecipeNameValid(): boolean {
    return this.recipeNameEditText.trim() !== ''
  }
}
