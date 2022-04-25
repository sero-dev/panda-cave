import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { WeeklyMenuComponent } from './components/weekly-menu/weekly-menu.component';
import { KitchenComponent } from './kitchen.component';

const routes: Routes = [
  {
    path: 'kitchen', canActivate: [AuthGuard], component: KitchenComponent, children: [
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
export class KitchenRoutingModule { }