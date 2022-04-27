import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KitchenComponent } from './kitchen.component';
import { KitchenRoutingModule } from './kitchen-routing.module';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { WeeklyMenuComponent } from './components/weekly-menu/weekly-menu.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { DailyMenuComponent } from './components/weekly-menu/daily-menu/daily-menu.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { AddRecipeToolbarComponent } from './components/recipes/add-recipe-toolbar/add-recipe-toolbar.component';
import { SearchRecipeToolbarComponent } from './components/recipes/search-recipe-toolbar/search-recipe-toolbar.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { IngredientSelectorComponent } from './components/recipe-details/ingredient-selector/ingredient-selector.component';
import { WeeklyMenuPickerComponent } from './components/recipe-details/weekly-menu-picker/weekly-menu-picker.component';
import { AddIngredientToolbarComponent } from './components/ingredients/add-ingredient-toolbar/add-ingredient-toolbar.component';
import { SearchIngredientToolbarComponent } from './components/ingredients/search-ingredient-toolbar/search-ingredient-toolbar.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/interceptors/auth.interceptor';

@NgModule({
  declarations: [
    KitchenComponent,
    RecipesComponent,
    ShoppingCartComponent,
    WeeklyMenuComponent,
    DailyMenuComponent,
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
    KitchenRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class KitchenModule { }
