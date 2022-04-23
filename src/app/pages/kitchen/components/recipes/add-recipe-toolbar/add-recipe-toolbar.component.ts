import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-recipe-toolbar',
  templateUrl: './add-recipe-toolbar.component.html',
  styleUrls: ['./add-recipe-toolbar.component.scss']
})
export class AddRecipeToolbarComponent {
  @Output() add = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<string>();

  recipeName: string;

  onAddClicked() {
    this.add.emit(this.recipeName);
    this.recipeName = '';
  }

  onCancelClicked() {
    this.cancel.emit();
  }

  isRecipeNameValid() {
    return this.recipeName && this.recipeName.trim().length !== 0;
  }
}
