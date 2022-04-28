import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertMessage } from 'src/app/models/alert-message';
import { AlertService } from 'src/app/services/alert.service';
import { environment } from 'src/environments/environment';
import { ShoppingList } from '../models/shopping-list.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private shoppingCartUrl = `${environment.recipeBookEndpoint}/shoppingcart`

  constructor(
    private http: HttpClient,
    private alertService: AlertService
  ) { }

  getShoppingCart(): Observable<ShoppingList> {
    return this.http.get<ShoppingList>(this.shoppingCartUrl)
      .pipe(
        catchError((response: HttpErrorResponse) => {
          this.handleError(response);
          throw new Error(response.error);
        })
      );
  }

  private handleError(response: HttpErrorResponse) {
    const alertMessage: AlertMessage = {
      message: response.error,
      level: 'error',
      icon: 'x-circle',
      length: 4000
    }

    if (response.status === 0) {
      alertMessage.message = 'Connection to server failed. Try again later';
      alertMessage.icon = 'server';
    }

    this.alertService.sendMessage(alertMessage);
  }
}
