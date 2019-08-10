import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
//import { PurchasesReportComponent }   from './report/purchases-report/purchases-report.component';

import { LoginComponent } from './login/index';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { FullLayoutComponent } from './layout/index';
//import { AuthGuard } from './_guards/index';

export const appRoutes: Routes = [
//   {
//     path: '',
//     redirectTo: 'dashboard',
//     pathMatch: 'full',
//   },
  {
    path: 'admin',
    component: FullLayoutComponent,
    children: [
      {  path: 'area-formacao', loadChildren: './admin/area-formacao/area-formacao.module#areaFormacaoModule' },
    ]
 },
  { path: 'login', component: LoginComponent, data: {title: 'login'} },
  { path: 'dashboard', component: DashboardComponent },
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
