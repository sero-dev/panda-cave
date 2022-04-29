import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ShoppingList } from '../models/shopping-list.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private shoppingCartUrl = `${environment.recipeBookEndpoint}/shoppingcart`

  constructor(
    private http: HttpClient
  ) { }

  getShoppingCart(): Observable<ShoppingList> {
    return this.http.get<ShoppingList>(this.shoppingCartUrl);
  }
}
