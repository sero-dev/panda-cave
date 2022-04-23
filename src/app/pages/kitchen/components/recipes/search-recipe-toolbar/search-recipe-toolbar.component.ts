import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-recipe-toolbar',
  templateUrl: './search-recipe-toolbar.component.html',
  styleUrls: ['./search-recipe-toolbar.component.scss']
})
export class SearchRecipeToolbarComponent {

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
