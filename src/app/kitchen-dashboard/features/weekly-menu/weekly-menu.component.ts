import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { MealType, WeeklyMenuItem } from '../../models/weekly-menu.model';
import { WeeklyMenuService } from '../../services/weekly-menu.service';

@Component({
  selector: 'app-weekly-menu',
  templateUrl: './weekly-menu.component.html',
  styleUrls: ['./weekly-menu.component.scss']
})
export class WeeklyMenuComponent implements OnInit {

  weeklyMenu: WeeklyMenuItem[];
  selectedWeekday: WeeklyMenuItem;
  selectedMeal: MealType;

  showSelectRecipeModal = false;

  constructor(private weeklyMenuService: WeeklyMenuService) { }

  ngOnInit(): void {
    this.weeklyMenuService.getWeeklyMenu().subscribe(
      response => this.weeklyMenu = response
    )
  }

  onSelectRecipeModalSelected(recipe: Recipe) {
    this.showSelectRecipeModal = false;
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

    this.weeklyMenuService.updateWeeklyMenu(this.weeklyMenu).subscribe(
      response => console.log(response)
    );
  }

  onSelectRecipeModalCancel() {
    this.showSelectRecipeModal = false;
  }

  onSelectRecipeModalClear() {
    this.showSelectRecipeModal = false;
    switch (this.selectedMeal) {
      case MealType.Lunch:
        this.selectedWeekday.lunch = null;
        break;
      case MealType.Dinner:
        this.selectedWeekday.dinner = null;
        break;
      default:
        console.error('Meal Type was not selected');
    }

    this.weeklyMenuService.updateWeeklyMenu(this.weeklyMenu).subscribe(
      response => console.log(response)
    );
  }

  onLunchClicked(menuItem: WeeklyMenuItem) {
    this.selectedMeal = MealType.Lunch;
    this.selectedWeekday = menuItem;
    this.showSelectRecipeModal = true;
  }

  onDinnerClicked(menuItem: WeeklyMenuItem) {
    this.selectedMeal = MealType.Dinner;
    this.selectedWeekday = menuItem;
    this.showSelectRecipeModal = true;
  }
}
