import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitchenDashboardComponent } from './kitchen-dashboard.component';
import { KitchenDashboardRoutingModule } from './kitchen-dashboard-routing.module';
import { ShoppingCartComponent } from './features/shopping-cart/shopping-cart.component';
import { WeeklyMenuComponent } from './features/weekly-menu/weekly-menu.component';
import { RecipeListComponent } from './features/recipe-list/recipe-list.component';
import { FormsModule } from '@angular/forms';
import { AddRecipeModalComponent } from './features/recipe-list/add-recipe-modal/add-recipe-modal.component';

@NgModule({
  declarations: [
    KitchenDashboardComponent,
    RecipeListComponent,
    ShoppingCartComponent,
    WeeklyMenuComponent,
    AddRecipeModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    KitchenDashboardRoutingModule
  ]
})
export class KitchenDashboardModule { }
