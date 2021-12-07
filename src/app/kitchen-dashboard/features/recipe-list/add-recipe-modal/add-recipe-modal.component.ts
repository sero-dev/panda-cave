import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeService } from 'src/app/kitchen-dashboard/services/recipe.service';

@Component({
  selector: 'app-add-recipe-modal',
  templateUrl: './add-recipe-modal.component.html',
  styleUrls: ['./add-recipe-modal.component.scss']
})
export class AddRecipeModalComponent implements OnInit {

  @Output() onRecipeAdded: EventEmitter<void> = new EventEmitter<void>();
  @Output() onCancelled: EventEmitter<void> = new EventEmitter<void>();

  recipeName: string = ''

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void { }

  onAddButtonClick() {
    if (this.recipeName !== '') {
      this.recipeService.addRecipe(this.recipeName).subscribe(
        () => {
          this.onRecipeAdded.emit();
          this.clearRecipeName()
        }
      )
    }
  }

  onCancelButtonClick() {
    this.clearRecipeName();
    this.onCancelled.emit();
  }

  clearRecipeName() {
    this.recipeName = '';
  }
}
