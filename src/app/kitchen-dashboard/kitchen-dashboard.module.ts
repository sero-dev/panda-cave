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

@NgModule({
  declarations: [
    KitchenDashboardComponent,
    RecipeListComponent,
    ShoppingCartComponent,
    WeeklyMenuComponent,
    AddRecipeModalComponent,
    EditRecipeModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    KitchenDashboardRoutingModule
  ]
})
export class KitchenDashboardModule { }
