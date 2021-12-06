import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-recipe-modal',
  templateUrl: './add-recipe-modal.component.html',
  styleUrls: ['./add-recipe-modal.component.scss']
})
export class AddRecipeModalComponent implements OnInit {

  @Output() onRecipeAdded: EventEmitter<string> = new EventEmitter<string>();
  @Output() onCancelled: EventEmitter<void> = new EventEmitter<void>();

  recipeName: string = 'Helo'

  constructor() { }

  ngOnInit(): void { }

  onAddButtonClick() {
    this.onRecipeAdded.emit(this.recipeName);
  }

  onCancelButtonClick() {
    this.onCancelled.emit();
  }
}
