import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeeklyMenuItem } from '../models/weekly-menu.model';
import { environment } from 'src/environments/environment';
import { AlertService } from 'src/app/services/alert.service';
import { AlertMessage } from 'src/app/models/alert-message.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeeklyMenuService {
  
  private weeklyMenuUrl = `${environment.recipeBookEndpoint}/weeklymenu`

  constructor(
    private http: HttpClient,
    private alertService: AlertService
  ) { }

  getWeeklyMenu(): Observable<WeeklyMenuItem[]> {
    return this.http.get<WeeklyMenuItem[]>(this.weeklyMenuUrl);
  }

  updateWeeklyMenu(weeklyMenu: WeeklyMenuItem[]): Observable<void> {
    return this.http.put<void>(this.weeklyMenuUrl, weeklyMenu)
      .pipe(
        tap(() => {
          const result = {
            level: 'success',
            message: `Updated Weekly Menu`,
            icon: 'switch-vertical',
            length: 4000
          } as AlertMessage;
          this.alertService.sendMessage(result);
        })
      );
  }
}
