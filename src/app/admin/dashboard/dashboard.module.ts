import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutes } from './dashboard.routing';
import { WelcomeComponent } from './welcome/welcome.component';



@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    DashboardRoutes
  ]
})
export class DashboardModule { }
