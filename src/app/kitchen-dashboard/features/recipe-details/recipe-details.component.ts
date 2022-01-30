import { Component, OnInit } from '@angular/core';
import { RecipeDetails, RecipeIngredient } from 'src/app/kitchen-dashboard/models/recipe-details.model';
import { RecipeService } from 'src/app/kitchen-dashboard/services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WeeklyMenuService } from '../../services/weekly-menu.service';
import { MealType, WeeklyMenuItem } from '../../models/weekly-menu.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: RecipeDetails;
  weeklyMenu: WeeklyMenuItem[];
  recipeDescriptionEditText: string;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    private weeklyMenuService: WeeklyMenuService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipeService.getRecipesDetails(id)
      .subscribe(recipe => {
        this.recipe = recipe;
      });
    
    this.weeklyMenuService.getWeeklyMenu()
      .subscribe(menu => this.weeklyMenu = menu);
  }

  onUpdateClicked(): void {
    this.recipeService.updateRecipe(this.recipe)
      .subscribe(() => {
        this.weeklyMenuService.updateWeeklyMenu(this.weeklyMenu)
          .subscribe(() => this.router.navigate(['/kitchen']));
      });
  }

  onDeleteClicked(): void {
    this.recipeService.deleteRecipe(this.recipe.id)
      .subscribe(() => this.router.navigate(['/kitchen']));
  }

  onCancelClicked(): void {
    this.router.navigate(['/kitchen']);
  }

  addToWeeklyMenu(item: WeeklyMenuItem, mealType: MealType) {
    switch (mealType) {
      case MealType.Lunch:
        item.lunch = this.recipe;
        break;
      case MealType.Dinner:
        item.dinner = this.recipe;
        break;
    }
  }

  updateRecipeIngredientList(ingredientList: RecipeIngredient[]): void {
    this.recipe.ingredients = ingredientList;
  }
}
