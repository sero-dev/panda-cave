import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AlertMessage } from '../models/alert-message.model';
import { User } from '../models/user.model';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = `${environment.authEndpoint}`;

  constructor(
    private http: HttpClient,
    private alertService: AlertService,
    private router: Router
  ) { }


  isAuthenticated(): boolean {
    return !!this.token; 
  }


  public get token(): string | null {
    return localStorage.getItem('accessToken');
  }


  public set token(token: string | null) {
    if (token) localStorage.setItem('accessToken', token);
  }


  signup(userAccount: User): Observable<string> {
    this.alertService.sendMessage({message: 'Attempting to sign up...', level: 'ongoing', icon: 'spinner'})
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
          this.router.navigate(['/login']);
        })
      );
  }


  login(email: string, password: string): Observable<string> {
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
          this.router.navigate(['/kitchen']);
        })
      );
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
          this.router.navigate(['/login']);
        })
      );
  }
}