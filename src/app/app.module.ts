import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KitchenDashboardModule } from './kitchen-dashboard/kitchen-dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KitchenDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
