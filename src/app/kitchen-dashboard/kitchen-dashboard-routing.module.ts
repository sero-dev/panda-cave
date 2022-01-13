import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredientsComponent } from './features/ingredients/ingredients.component';
import { RecipeListComponent } from './features/recipe-list/recipe-list.component';
import { ShoppingCartComponent } from './features/shopping-cart/shopping-cart.component';
import { WeeklyMenuComponent } from './features/weekly-menu/weekly-menu.component';
import { KitchenDashboardComponent } from './kitchen-dashboard.component';

const routes: Routes = [
  {
    path: 'kitchen', component: KitchenDashboardComponent, children: [
      { path: 'recipes', component: RecipeListComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'ingredients', component: IngredientsComponent },
      { path: 'weekly-menu', component: WeeklyMenuComponent },
      { path: '**', redirectTo: 'recipes' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KitchenDashboardRoutingModule { }