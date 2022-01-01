import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { WeeklyMenuItem } from '../models/weekly-menu.model';

@Injectable({
  providedIn: 'root'
})
export class WeeklyMenuService {
  
  private weeklyMenuUrl = 'http://localhost:5000/api/weeklymenu'

  constructor(private http: HttpClient) { }

  getWeeklyMenu(): Observable<WeeklyMenuItem[]> {
    return this.http.get<WeeklyMenuItem[]>(this.weeklyMenuUrl);
  }

  updateWeeklyMenu(weeklyMenu: WeeklyMenuItem[]): Observable<void> {
    return this.http.put<void>(this.weeklyMenuUrl, weeklyMenu);
  }
}
