import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from '../models/ingredient.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private ingredientsUrl = `${environment.recipeBookEndpoint}/ingredient`

  constructor(private http: HttpClient) { }

  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.ingredientsUrl);
  }

  addIngredient(ingredientName: string): Observable<void> {
    return this.http.post<void>(this.ingredientsUrl, { name: ingredientName });
  }

  searchIngredients(searchText: string): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(`${this.ingredientsUrl}/search?name=${searchText}`);
  }

  deleteIngredient(ingredientId: number): Observable<void> {
    return this.http.delete<void>(`${this.ingredientsUrl}/${ingredientId}`)
  }

  updateIngredient(ingredient: Ingredient): Observable<void> {
    return this.http.put<void>(`${this.ingredientsUrl}/${ingredient.id}`, ingredient)
  }
}
