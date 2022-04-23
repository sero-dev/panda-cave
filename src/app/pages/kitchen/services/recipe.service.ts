import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RecipeDetails } from '../models/recipe-details.model';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipesUrl = `${environment.recipeBookEndpoint}/recipe`

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipesUrl);
  }

  getRecipesDetails(recipeId: number): Observable<RecipeDetails> {
    return this.http.get<RecipeDetails>(`${this.recipesUrl}/${recipeId}`);
  }

  addRecipe(recipeName: string): Observable<void> {
    return this.http.post<void>(this.recipesUrl, { name: recipeName });
  }

  searchRecipes(searchText: string): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.recipesUrl}/search?name=${searchText}`);
  }

  deleteRecipe(recipeId: number): Observable<void> {
    return this.http.delete<void>(`${this.recipesUrl}/${recipeId}`)
  }

  updateRecipe(recipe: RecipeDetails): Observable<void> {
    return this.http.put<void>(`${this.recipesUrl}/${recipe.id}`, recipe)
  }
}
