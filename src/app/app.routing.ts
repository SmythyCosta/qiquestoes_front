import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { FullLayoutComponent } from './layout/index';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/index';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'register', component: RegisterComponent, data: {title: 'register'} },
  {
    path: 'admin',
    component: FullLayoutComponent,
    children: [
      { path: 'dashboard', loadChildren: './admin/dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard] },
      { path: 'area-formacao', loadChildren: './admin/area-formacao/area-formacao.module#AreaFormacaoModule', canActivate: [AuthGuard] },
      { path: 'disciplina', loadChildren: './admin/disciplina/disciplina.module#DisciplinaModule', canActivate: [AuthGuard] },
      { path: 'questoes', loadChildren: './admin/questoes/questoes.module#QuestoesModule', canActivate: [AuthGuard] },
    ]
 },
  { path: 'login', component: LoginComponent, data: {title: 'login'} },
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
