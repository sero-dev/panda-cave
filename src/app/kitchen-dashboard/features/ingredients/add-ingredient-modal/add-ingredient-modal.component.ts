import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IngredientService } from 'src/app/kitchen-dashboard/services/ingredient.service';

@Component({
  selector: 'app-add-ingredient-modal',
  templateUrl: './add-ingredient-modal.component.html',
  styleUrls: ['./add-ingredient-modal.component.scss']
})
export class AddIngredientModalComponent implements OnInit {

  @Output() onIngredientAdded: EventEmitter<void> = new EventEmitter<void>();
  @Output() onCancelled: EventEmitter<void> = new EventEmitter<void>();

  ingredientName: string = ''

  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void { }

  onAddButtonClick() {
    if (this.ingredientName.trim() !== '') {
      this.ingredientService.addIngredient(this.ingredientName).subscribe(
        () => {
          this.onIngredientAdded.emit();
          this.clearIngredientName()
        }
      )
    }
  }

  onCancelButtonClick() {
    this.clearIngredientName();
    this.onCancelled.emit();
  }

  clearIngredientName() {
    this.ingredientName = '';
  }
}
