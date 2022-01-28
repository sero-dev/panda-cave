import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KitchenDashboardComponent } from './kitchen-dashboard.component';
import { KitchenDashboardRoutingModule } from './kitchen-dashboard-routing.module';
import { ShoppingCartComponent } from './features/shopping-cart/shopping-cart.component';
import { WeeklyMenuComponent } from './features/weekly-menu/weekly-menu.component';
import { RecipesComponent } from './features/recipes/recipes.component';
import { DailyMenuComponent } from './features/weekly-menu/daily-menu/daily-menu.component';
import { SelectRecipeModalComponent } from './features/weekly-menu/select-recipe-modal/select-recipe-modal.component';
import { IngredientsComponent } from './features/ingredients/ingredients.component';
import { AddRecipeToolbarComponent } from './features/recipes/add-recipe-toolbar/add-recipe-toolbar.component';
import { SearchRecipeToolbarComponent } from './features/recipes/search-recipe-toolbar/search-recipe-toolbar.component';
import { RecipeDetailsComponent } from './features/recipe-details/recipe-details.component';
import { IngredientSelectorComponent } from './features/recipe-details/ingredient-selector/ingredient-selector.component';
import { WeeklyMenuPickerComponent } from './features/recipe-details/weekly-menu-picker/weekly-menu-picker.component';
import { AddIngredientToolbarComponent } from './features/ingredients/add-ingredient-toolbar/add-ingredient-toolbar.component';
import { SearchIngredientToolbarComponent } from './features/ingredients/search-ingredient-toolbar/search-ingredient-toolbar.component';

@NgModule({
  declarations: [
    KitchenDashboardComponent,
    RecipesComponent,
    ShoppingCartComponent,
    WeeklyMenuComponent,
    DailyMenuComponent,
    SelectRecipeModalComponent,
    IngredientsComponent,
    AddRecipeToolbarComponent,
    SearchRecipeToolbarComponent,
    RecipeDetailsComponent,
    IngredientSelectorComponent,
    WeeklyMenuPickerComponent,
    AddIngredientToolbarComponent,
    SearchIngredientToolbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    KitchenDashboardRoutingModule
  ]
})
export class KitchenDashboardModule { }
