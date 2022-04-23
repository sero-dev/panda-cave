import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-ingredient-toolbar',
  templateUrl: './add-ingredient-toolbar.component.html',
  styleUrls: ['./add-ingredient-toolbar.component.scss']
})
export class AddIngredientToolbarComponent {
  @Output() add = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<string>();

  ingredientName: string;

  onAddClicked() {
    this.add.emit(this.ingredientName);
    this.ingredientName = '';
  }

  onCancelClicked() {
    this.cancel.emit();
  }

  isIngredientNameValid() {
    return this.ingredientName && this.ingredientName.trim().length !== 0;
  }
}
