import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AlertMessage } from '../models/alert-message';
import { UserAccount } from '../models/user-account';
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

  setToken(token: string) {
    return localStorage.setItem('accessToken', token);
  }


  signup(userAccount: UserAccount): Observable<void> {
    const url = this.authUrl + '/signup';
    return this.http.post(url, userAccount, { responseType: 'text' })
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
        map(() => {})
      );
  }


  login(email: string, password: string): Observable<void> {
    this.alertService.sendMessage({message: 'Attempting to login...', level: 'ongoing', icon: 'spinner'})
    return this.http.post(this.authUrl + '/login', { email, password }, { responseType: 'text' })
      .pipe(
        tap(() => {
          const result = {
            level: 'success',
            message: 'Login Successful',
            icon: 'lock-open',
            length: 4000
          } as AlertMessage;
          this.alertService.sendMessage(result);
        }),
        map(() => {})
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
      );
  }

  refresh(): boolean {
    this.http.get<string>(this.authUrl + '/refresh')
      .subscribe(response => localStorage.setItem('accessToken', response));
    
    return true;
  }
}