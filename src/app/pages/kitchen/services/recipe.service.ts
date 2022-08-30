import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AlertMessage } from 'src/app/models/alert-message.model';
import { AlertService } from 'src/app/services/alert.service';
import { environment } from 'src/environments/environment';
import { RecipeDetails } from '../models/recipe-details.model';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipesUrl = `${environment.recipeBookEndpoint}/recipe`

  constructor(
    private http: HttpClient,
    private alertService: AlertService
  ) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipesUrl);
    
  }

  getRecipesDetails(recipeId: number): Observable<RecipeDetails> {
    return this.http.get<RecipeDetails>(`${this.recipesUrl}/${recipeId}`);
  }

  addRecipe(recipeName: string): Observable<void> {
    return this.http.post<void>(this.recipesUrl, { name: recipeName })
      .pipe(
        tap(() => {
          const result = {
            level: 'success',
            message: `Added '${recipeName}' Recipe`,
            icon: 'document-add',
            length: 4000
          } as AlertMessage;
          this.alertService.sendMessage(result);
        })
      );
  }

  searchRecipes(searchText: string): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.recipesUrl}/search?name=${searchText}`);
  }

  deleteRecipe(recipeId: number): Observable<void> {
    return this.http.delete<void>(`${this.recipesUrl}/${recipeId}`)
      .pipe(
        tap(() => {
          const result = {
            level: 'success',
            message: `Recipe Deleted`,
            icon: 'trash',
            length: 4000
          } as AlertMessage;
          this.alertService.sendMessage(result);
        })
      );
  }

  updateRecipe(recipe: RecipeDetails): Observable<void> {
    return this.http.put<void>(`${this.recipesUrl}/${recipe.id}`, recipe)
      .pipe(
        tap(() => {
          const result = {
            level: 'success',
            message: `Updated '${recipe.name}' Recipe`,
            icon: 'switch-vertical',
            length: 4000
          } as AlertMessage;
          this.alertService.sendMessage(result);
        })
      );
  }
}
