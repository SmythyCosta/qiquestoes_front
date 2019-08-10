import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AreaFormacaoComponent } from './admin/area-formacao/area-formacao.component';
import { DisciplinaComponent } from './admin/disciplina/disciplina.component';

// Routing Module
import { AppRoutingModule } from './app.routing';
import { LoginComponent } from './login/index';


import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NavbarExpandComponent } from './admin/navbar-expand/navbar-expand.component';
import { SidebarMenuComponent } from './admin/sidebar-menu/sidebar-menu.component';
import { FooterComponent } from './admin/footer/footer.component';
import { ContentComponent } from './admin/content/content.component';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';



@NgModule({
  declarations: [
    AppComponent,
    AreaFormacaoComponent,
    DisciplinaComponent,
    LoginComponent,
    DashboardComponent,
    NavbarExpandComponent,
    SidebarMenuComponent,
    FooterComponent,
    ContentComponent,
    FullLayoutComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // provider used to create fake backend
    //fakeBackendProvider
],
  bootstrap: [AppComponent]
})
export class AppModule { }
