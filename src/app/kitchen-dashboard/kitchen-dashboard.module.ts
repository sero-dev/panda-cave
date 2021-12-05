import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitchenDashboardComponent } from './kitchen-dashboard.component';
import { KitchenDashboardRoutingModule } from './kitchen-dashboard-routing.module';
import { ShoppingCartComponent } from './features/shopping-cart/shopping-cart.component';
import { WeeklyMenuComponent } from './features/weekly-menu/weekly-menu.component';

@NgModule({
  declarations: [
    KitchenDashboardComponent,
    ShoppingCartComponent,
    WeeklyMenuComponent
  ],
  imports: [
    CommonModule,
    KitchenDashboardRoutingModule
  ]
})
export class KitchenDashboardModule { }
