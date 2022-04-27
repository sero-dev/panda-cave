import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ActionResult } from '../models/action-result';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = `${environment.authEndpoint}`;

  constructor(private http: HttpClient) {}


  isAuthenticated(): boolean {
    const token = localStorage.getItem('accessToken');

    if (!token) return false;

    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) < expiry;
  }

  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }


  register(email: string, password: string): Observable<ActionResult> {
    const url = this.authUrl + '/register';
    return this.http.post(url, { email, password }, { responseType: 'text' })
      .pipe(
        map(() => {
          return {
            level: 'success',
            message: 'Account Created'
          } as ActionResult;
        }),
        catchError((error, caught) => {
          console.log(error);
          return throwError(new Error(error));
        })
      );
  }


  login(email: string, password: string): Observable<ActionResult> {
    return this.http.post(this.authUrl + '/login', { email, password }, { responseType: 'text' })
      .pipe(
        tap(token => localStorage.setItem('accessToken', token)),
        map(() => {
          return {
            level: 'success',
            message: 'Login Successful'
          } as ActionResult;
        }),
        catchError((error, caught) => {
          console.log(error);
          return throwError(new Error(error));
        })
      )
  }


  logout(): Observable<void> {
    localStorage.removeItem('accessToken');
    return this.http.get<void>(this.authUrl + '/logout')
      .pipe(
        catchError((error, caught) => {
          console.log(error);
          return throwError(new Error(error));
        })
      );
  }


  refresh(): boolean {
    this.http.get<string>(this.authUrl + '/refresh')
      .subscribe(response => localStorage.setItem('accessToken', response));
    
    return true;
  }
}