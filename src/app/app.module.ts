import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AreaFormacaoComponent } from './admin/area-formacao/area-formacao.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaFormacaoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
