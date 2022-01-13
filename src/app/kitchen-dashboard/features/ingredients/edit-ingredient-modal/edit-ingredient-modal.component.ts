import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/kitchen-dashboard/models/ingredient.model';
import { IngredientService } from 'src/app/kitchen-dashboard/services/ingredient.service';

@Component({
  selector: 'app-edit-ingredient-modal',
  templateUrl: './edit-ingredient-modal.component.html',
  styleUrls: ['./edit-ingredient-modal.component.scss']
})
export class EditIngredientModalComponent implements OnInit {

  @Input() ingredient: Ingredient;
  @Output() onIngredientUpdated: EventEmitter<void> = new EventEmitter<void>();
  @Output() onIngredientDeleted: EventEmitter<void> = new EventEmitter<void>();
  @Output() onCancelled: EventEmitter<void> = new EventEmitter<void>();

  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void { }

  onUpdateButtonClick() {
    this.ingredientService.updateIngredient(this.ingredient)
      .subscribe(() => this.onIngredientUpdated.emit())
  }

  onDeleteButtonClick() {
    this.ingredientService.deleteIngredient(this.ingredient.id)
      .subscribe(() => this.onIngredientDeleted.emit())
  }

  onCancelButtonClick() {
    this.onCancelled.emit();
  }
}
