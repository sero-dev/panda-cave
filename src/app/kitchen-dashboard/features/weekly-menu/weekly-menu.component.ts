import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { MealType, WeeklyMenuItem } from '../../models/weekly-menu.model';

@Component({
  selector: 'app-weekly-menu',
  templateUrl: './weekly-menu.component.html',
  styleUrls: ['./weekly-menu.component.scss']
})
export class WeeklyMenuComponent implements OnInit {

  weeklyMenu: WeeklyMenuItem[] = [
    { order: 1, day: 'Monday', lunch: null, dinner: null },
    { order: 2, day: 'Tuesday', lunch: null, dinner: null },
    { order: 3, day: 'Wednesday', lunch: null, dinner: null },
    { order: 4, day: 'Thursday', lunch: null, dinner: null },
    { order: 5, day: 'Friday', lunch: null, dinner: null },
    { order: 6, day: 'Saturday', lunch: null, dinner: null },
    { order: 7, day: 'Sunday', lunch: null, dinner: null },
  ];

  selectedWeekday: WeeklyMenuItem;
  selectedMeal: MealType;

  showSelectRecipeModal = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectRecipeModalSelected(recipe: Recipe) {
    switch (this.selectedMeal) {
      case MealType.Lunch:
        this.selectedWeekday.lunch = recipe;
        break;
      case MealType.Dinner:
        this.selectedWeekday.dinner = recipe;
        break;
      default:
        console.error('Meal Type was not selected');
    }
  }

  onSelectRecipeModalCancel() {
    this.showSelectRecipeModal = false;
  }

  onSelectRecipeModalClear() {
    this.showSelectRecipeModal = false;
  }

  onLunchClicked(menuItem: WeeklyMenuItem) {
    this.selectedMeal = MealType.Lunch;
    this.selectedWeekday = menuItem;
    this.showSelectRecipeModal = true;
  }

  onDinnerClicked(menuItem: WeeklyMenuItem) {
    this.selectedMeal = MealType.Lunch;
    this.selectedWeekday = menuItem;
    this.showSelectRecipeModal = true;
  }

}
