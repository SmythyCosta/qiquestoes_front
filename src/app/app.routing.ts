import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
//import { PurchasesReportComponent }   from './report/purchases-report/purchases-report.component';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/index';
export const appRoutes: Routes = [
//   {
//     path: '',
//     redirectTo: 'dashboard',
//     pathMatch: 'full',
//   },
//   {
//     path: '',
//     component: FullLayoutComponent,
//     data: {
//       title: 'Dashboard'
//     },
    //children: [
      //{  path: 'dashboard',component:DashboardComponent, canActivate: [AuthGuard],data: {title: 'Home'}},
      //{  path: 'customer', component: CustomerComponent, canActivate: [AuthGuard],data: {title: 'Manage Customer'}},
      //{  path: 'sales-report', component: SalesReportComponent, canActivate: [AuthGuard],data: {title: 'Sales Report'}},
      //{  path: 'purchases-report', component: PurchasesReportComponent, canActivate: [AuthGuard],data: {title: 'Purchases Report'}}
    //]
//  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'login'
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
  /* imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ] */
})
export class AppRoutingModule {}
