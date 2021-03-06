import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeeklyMenuItem } from '../models/weekly-menu.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeeklyMenuService {
  
  private weeklyMenuUrl = `${environment.recipeBookEndpoint}/weeklymenu`

  constructor(private http: HttpClient) { }

  getWeeklyMenu(): Observable<WeeklyMenuItem[]> {
    return this.http.get<WeeklyMenuItem[]>(this.weeklyMenuUrl);
  }

  updateWeeklyMenu(weeklyMenu: WeeklyMenuItem[]): Observable<void> {
    return this.http.put<void>(this.weeklyMenuUrl, weeklyMenu);
  }
}
