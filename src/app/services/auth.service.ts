import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = `${environment.authEndpoint}`;
  private user = {};

  constructor(private http: HttpClient) { }

  getUser() {
    return { ...this.user }
  }

  register(email: string, password: string): Observable<void> {
    return this.http.post<void>(this.authUrl + '/register', { email, password })
  }

  login(email: string, password: string): Observable<string> {
    return this.http.post<string>(this.authUrl + '/login', { email, password });
  }

  refresh(): Observable<void> {
    return this.http.get<void>(this.authUrl + '/refresh');
  }
}