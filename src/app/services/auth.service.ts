import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AlertMessage } from '../models/alert-message';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = `${environment.authEndpoint}`;

  constructor(
    private http: HttpClient,
    private alertService: AlertService
  ) { }


  isAuthenticated(): boolean {
    const token = localStorage.getItem('accessToken');

    if (!token) return false;

    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) < expiry;
  }

  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }


  register(email: string, password: string): Observable<AlertMessage> {
    const url = this.authUrl + '/register';
    return this.http.post(url, { email, password }, { responseType: 'text' })
      .pipe(
        map(() => {
          return {
            level: 'success',
            message: 'Account Created'
          } as AlertMessage;
        }),
        catchError((response: HttpErrorResponse) => {
          this.handleError(response);
          throw new Error(response.error);
        })
      );
  }


  login(email: string, password: string): Observable<AlertMessage> {
    return this.http.post(this.authUrl + '/login', { email, password }, { responseType: 'text' })
      .pipe(
        tap(token => localStorage.setItem('accessToken', token)),
        map(() => {
          return {
            level: 'success',
            message: 'Login Successful'
          } as AlertMessage;
        }),
        catchError((response: HttpErrorResponse) => {
          this.handleError(response);
          throw new Error(response.error);
        })
      )
  }


  logout(): Observable<AlertMessage> {
    localStorage.removeItem('accessToken');
    return this.http.get<void>(this.authUrl + '/logout')
      .pipe(
        map(() => {
          return {
            level: 'success',
            message: 'Logout Successful'
          } as AlertMessage;
        }),
        catchError((response: HttpErrorResponse) => {
          this.handleError(response);
          throw new Error(response.error);
        })
      );
  }


  refresh(): boolean {
    this.http.get<string>(this.authUrl + '/refresh')
      .subscribe(response => localStorage.setItem('accessToken', response));
    
    return true;
  }

  private handleError(response: HttpErrorResponse) {
    this.alertService.sendMessage({
      message: response.error,
      level: 'error',
      length: 4000
    });
  }
}