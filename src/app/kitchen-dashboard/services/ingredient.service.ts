import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private ingredientsUrl = 'http://localhost:5000/api/ingredient'

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
