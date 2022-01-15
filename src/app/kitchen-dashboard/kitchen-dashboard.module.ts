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
import { RecipeContextMenuComponent } from './features/recipes/recipe-context-menu/recipe-context-menu.component';
import { IngredientsComponent } from './features/ingredients/ingredients.component';
import { AddIngredientModalComponent } from './features/ingredients/add-ingredient-modal/add-ingredient-modal.component';
import { EditIngredientModalComponent } from './features/ingredients/edit-ingredient-modal/edit-ingredient-modal.component';
import { AddRecipeToolbarComponent } from './features/recipes/add-recipe-toolbar/add-recipe-toolbar.component';
import { SearchRecipeToolbarComponent } from './features/recipes/search-recipe-toolbar/search-recipe-toolbar.component';
import { RecipeDetailsComponent } from './features/recipes/recipe-details/recipe-details.component';
import { IngredientSelectorComponent } from './features/recipes/recipe-details/ingredient-selector/ingredient-selector.component';

@NgModule({
  declarations: [
    KitchenDashboardComponent,
    RecipesComponent,
    ShoppingCartComponent,
    WeeklyMenuComponent,
    DailyMenuComponent,
    SelectRecipeModalComponent,
    RecipeContextMenuComponent,
    IngredientsComponent,
    AddIngredientModalComponent,
    EditIngredientModalComponent,
    AddRecipeToolbarComponent,
    SearchRecipeToolbarComponent,
    RecipeDetailsComponent,
    IngredientSelectorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    KitchenDashboardRoutingModule
  ]
})
export class KitchenDashboardModule { }
