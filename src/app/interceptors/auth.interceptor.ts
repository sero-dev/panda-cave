import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { catchError, tap } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';
import { AlertMessage } from '../models/alert-message';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private alertService: AlertService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`,
      }
    });

    return next.handle(request)
      .pipe(
        tap((event) => {
          if (event instanceof HttpResponse) {
            const token = event.headers.get('Set-Authorization');
            if(token) this.authService.setToken(token);
          }
        }),
        catchError((response: HttpErrorResponse) => {
          this.handleError(response);
          throw new Error(response.error);
        })
      );
  }

  private handleError(response: HttpErrorResponse) {
    const errorMessage = JSON.parse(response.error)
    const alertMessage: AlertMessage = {
      message: errorMessage.message,
      level: 'error',
      icon: 'x-circle',
      length: 4000
    };
    
    if (response.status === 0) {
      alertMessage.message = 'Connection to server failed. Try again later';
      alertMessage.icon = 'server';
    }

    this.alertService.sendMessage(alertMessage);
  }
}
