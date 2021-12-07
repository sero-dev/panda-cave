import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/kitchen-dashboard/models/recipe.model';
import { RecipeService } from 'src/app/kitchen-dashboard/services/recipe.service';

@Component({
  selector: 'app-edit-recipe-modal',
  templateUrl: './edit-recipe-modal.component.html',
  styleUrls: ['./edit-recipe-modal.component.scss']
})
export class EditRecipeModalComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() onRecipeUpdated: EventEmitter<void> = new EventEmitter<void>();
  @Output() onRecipeDeleted: EventEmitter<void> = new EventEmitter<void>();
  @Output() onCancelled: EventEmitter<void> = new EventEmitter<void>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {}

  onUpdateButtonClick() {
    this.recipeService.updateRecipe(this.recipe)
      .subscribe(() => this.onRecipeUpdated.emit())
  }

  onDeleteButtonClick() {
    this.recipeService.deleteRecipe(this.recipe.id)
      .subscribe(() => this.onRecipeDeleted.emit())
  }

  onCancelButtonClick() {
    this.onCancelled.emit();
  }
}
