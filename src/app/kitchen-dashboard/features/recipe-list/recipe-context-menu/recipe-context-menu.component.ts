import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/kitchen-dashboard/models/recipe.model';
import { WeeklyMenuItem } from 'src/app/kitchen-dashboard/models/weekly-menu.model';
import { WeeklyMenuService } from 'src/app/kitchen-dashboard/services/weekly-menu.service';

@Component({
  selector: 'app-recipe-context-menu',
  templateUrl: './recipe-context-menu.component.html',
  styleUrls: ['./recipe-context-menu.component.scss']
})
export class RecipeContextMenuComponent implements OnInit {

  @Input() positionX: number;
  @Input() positionY: number;
  @Input() recipe: Recipe;
  @Output() cancel = new EventEmitter<void>();

  weeklyMenu: WeeklyMenuItem[];

  constructor(private weeklyMenuService: WeeklyMenuService) { }

  ngOnInit(): void {
    this.weeklyMenuService.getWeeklyMenu().subscribe(
      menu => this.weeklyMenu = menu
    );
  }

  getPositionStyle() {
    return {
      position: 'fixed',
      left: `${this.positionX}px`,
      top: `${this.positionY}px`
    }
  }

}
