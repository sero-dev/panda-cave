import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KitchenDashboardComponent } from './kitchen-dashboard.component';
import { KitchenDashboardRoutingModule } from './kitchen-dashboard-routing.module';
import { ShoppingCartComponent } from './features/shopping-cart/shopping-cart.component';
import { WeeklyMenuComponent } from './features/weekly-menu/weekly-menu.component';
import { RecipeListComponent } from './features/recipe-list/recipe-list.component';
import { AddRecipeModalComponent } from './features/recipe-list/add-recipe-modal/add-recipe-modal.component';
import { EditRecipeModalComponent } from './features/recipe-list/edit-recipe-modal/edit-recipe-modal.component';
import { DailyMenuComponent } from './features/weekly-menu/daily-menu/daily-menu.component';
import { SelectRecipeModalComponent } from './features/weekly-menu/select-recipe-modal/select-recipe-modal.component';
import { RecipeContextMenuComponent } from './features/recipe-list/recipe-context-menu/recipe-context-menu.component';
import { IngredientsComponent } from './features/ingredients/ingredients.component';
import { AddIngredientModalComponent } from './features/ingredients/add-ingredient-modal/add-ingredient-modal.component';
import { EditIngredientModalComponent } from './features/ingredients/edit-ingredient-modal/edit-ingredient-modal.component';

@NgModule({
  declarations: [
    KitchenDashboardComponent,
    RecipeListComponent,
    ShoppingCartComponent,
    WeeklyMenuComponent,
    AddRecipeModalComponent,
    EditRecipeModalComponent,
    DailyMenuComponent,
    SelectRecipeModalComponent,
    RecipeContextMenuComponent,
    IngredientsComponent,
    AddIngredientModalComponent,
    EditIngredientModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    KitchenDashboardRoutingModule
  ]
})
export class KitchenDashboardModule { }
