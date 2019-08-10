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



import { ContentComponent,
  FooterComponent,
  FullLayoutComponent,
  NavbarExpandComponent,
  SidebarMenuComponent,  } from './layout/index';

  import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { DashboardComponent } from './admin/dashboard/dashboard.component';



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
