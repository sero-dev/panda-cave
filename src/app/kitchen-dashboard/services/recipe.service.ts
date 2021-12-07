import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipesUrl = 'http://localhost:5000/api/recipe'

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipesUrl);
  }

  addRecipe(recipeName: string): Observable<void> {
    return this.http.post<void>(this.recipesUrl, { name: recipeName });
  }

  searchRecipes(searchText: string): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.recipesUrl}/search?name=${searchText}`);
  }

}
