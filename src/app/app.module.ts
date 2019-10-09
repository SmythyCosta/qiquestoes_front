import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';

import { AppComponent } from './app.component';

// Routing Module
import { AppRoutingModule } from './app.routing';
import { LoginComponent } from './login/index';



import { ContentComponent,
  FooterComponent,
  FullLayoutComponent,
  NavbarExpandComponent,
  SidebarMenuComponent,  } from './layout/index';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { RegisterComponent } from './register/register.component';
import { AlertService, AuthenticationService } from './_services';
import { SharedModule } from './_shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarExpandComponent,
    SidebarMenuComponent,
    FooterComponent,
    ContentComponent,
    FullLayoutComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // provider used to create fake backend
    //fakeBackendProvider
    AlertService,
    AuthenticationService,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
