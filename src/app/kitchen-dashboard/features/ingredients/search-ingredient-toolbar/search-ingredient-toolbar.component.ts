import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-ingredient-toolbar',
  templateUrl: './search-ingredient-toolbar.component.html',
  styleUrls: ['./search-ingredient-toolbar.component.scss']
})
export class SearchIngredientToolbarComponent {

  @Output() search = new EventEmitter<string>();
  @Output() addClick = new EventEmitter<void>();

  searchText: string;

  onSearchTextChange(searchText: string) {
    this.search.emit(searchText);
  }

  onAddClicked() {
    this.addClick.emit();
  }
}
