import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredientsComponent } from './features/ingredients/ingredients.component';
import { RecipeDetailsComponent } from './features/recipe-details/recipe-details.component';
import { RecipesComponent } from './features/recipes/recipes.component';
import { ShoppingCartComponent } from './features/shopping-cart/shopping-cart.component';
import { WeeklyMenuComponent } from './features/weekly-menu/weekly-menu.component';
import { KitchenDashboardComponent } from './kitchen-dashboard.component';

const routes: Routes = [
  {
    path: 'kitchen', component: KitchenDashboardComponent, children: [
      { path: 'recipe', component: RecipesComponent },
      { path: 'recipe/:id/edit', component: RecipeDetailsComponent},
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'ingredients', component: IngredientsComponent },
      { path: 'weekly-menu', component: WeeklyMenuComponent },
      { path: '**', redirectTo: 'recipe' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KitchenDashboardRoutingModule { }