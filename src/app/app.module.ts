import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AreaFormacaoComponent } from './admin/area-formacao/area-formacao.component';
import { DisciplinaComponent } from './admin/disciplina/disciplina.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaFormacaoComponent,
    DisciplinaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
