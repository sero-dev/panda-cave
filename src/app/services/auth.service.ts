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


  register(email: string, password: string): Observable<void> {
    const url = this.authUrl + '/register';
    return this.http.post(url, { email, password }, { responseType: 'text' })
      .pipe(
        tap(() => {
          const result = {
            level: 'success',
            message: 'Account Created',
            icon: 'add-user',
            length: 4000
          } as AlertMessage;
          this.alertService.sendMessage(result);
        }),
        map(() => {}),
        catchError((response: HttpErrorResponse) => {
          this.handleError(response);
          throw new Error(response.error);
        })
      );
  }


  login(email: string, password: string): Observable<void> {
    this.alertService.sendMessage({message: 'Attempting to login...', level: 'ongoing', icon: 'spinner'})
    return this.http.post(this.authUrl + '/login', { email, password }, { responseType: 'text' })
      .pipe(
        tap(token => localStorage.setItem('accessToken', token)),
        tap(() => {
          const result = {
            level: 'success',
            message: 'Login Successful',
            icon: 'lock-open',
            length: 4000
          } as AlertMessage;
          this.alertService.sendMessage(result);
        }),
        map(() => {}),
        catchError((response: HttpErrorResponse) => {
          this.handleError(response);
          throw new Error(response.error);
        })
      )
  }


  logout(): Observable<void> {
    localStorage.removeItem('accessToken');
    return this.http.get<void>(this.authUrl + '/logout')
      .pipe(
        tap(() => {
          const result = {
            level: 'success',
            message: 'Logout Successful',
            icon: 'lock-closed',
            length: 4000
          } as AlertMessage;
          this.alertService.sendMessage(result);
        }),
        map(() => {}),
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
    const alertMessage: AlertMessage = {
      message: response.error,
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