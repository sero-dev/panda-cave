import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceDashboardComponent } from './finance-dashboard/finance-dashboard.component';

const routes: Routes = [
  { path: 'finance', component: FinanceDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
