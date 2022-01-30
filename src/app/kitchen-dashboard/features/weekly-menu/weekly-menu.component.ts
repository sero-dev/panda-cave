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

  constructor(private weeklyMenuService: WeeklyMenuService) { }

  ngOnInit(): void {
    this.getWeeklyMenu();
  }

  getWeeklyMenu(): void {
    this.weeklyMenuService.getWeeklyMenu().subscribe(
      response => this.weeklyMenu = response
    );
  }

  clearWeeklyMenu(): void {
    this.weeklyMenu.forEach(wmi => {
      wmi.lunch = null;
      wmi.dinner = null;
    });

    this.weeklyMenuService.updateWeeklyMenu(this.weeklyMenu)
      .subscribe(_ => this.getWeeklyMenu());
  }
}
