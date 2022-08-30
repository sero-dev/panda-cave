import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from '../models/ingredient.model';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { AlertMessage } from 'src/app/models/alert-message.model';
import { AlertService } from 'src/app/services/alert.service';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private ingredientsUrl = `${environment.recipeBookEndpoint}/ingredient`

  constructor(
    private http: HttpClient,
    private alertService: AlertService
  ) { }

  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.ingredientsUrl);
  }

  addIngredient(ingredientName: string): Observable<void> {
    return this.http.post<void>(this.ingredientsUrl, { name: ingredientName })
      .pipe(
        tap(() => {
          const result = {
            level: 'success',
            message: `Added '${ingredientName}' Ingredient`,
            icon: 'document-add',
            length: 4000
          } as AlertMessage;
          this.alertService.sendMessage(result);
        })
      );
  }

  searchIngredients(searchText: string): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(`${this.ingredientsUrl}/search?name=${searchText}`);
  }

  deleteIngredient(ingredientId: number): Observable<void> {
    return this.http.delete<void>(`${this.ingredientsUrl}/${ingredientId}`)
      .pipe(
        tap(() => {
          const result = {
            level: 'success',
            message: `Ingredient Deleted`,
            icon: 'trash',
            length: 4000
          } as AlertMessage;
          this.alertService.sendMessage(result);
        }),
      );
  }

  updateIngredient(ingredient: Ingredient): Observable<void> {
    return this.http.put<void>(`${this.ingredientsUrl}/${ingredient.id}`, ingredient)
      .pipe(
        tap(() => {
          const result = {
            level: 'success',
            message: `Updated ${ingredient.name} Ingredient`,
            icon: 'switch-vertical',
            length: 4000
          } as AlertMessage;
          this.alertService.sendMessage(result);
        })
      );
  }
}
