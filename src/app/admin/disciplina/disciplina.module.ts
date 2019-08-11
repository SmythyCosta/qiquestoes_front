import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ListarComponent } from './listar/listar.component';
import { DisciplinaRoutes } from './disciplina.routing';


@NgModule({
  declarations: [FormComponent, ListarComponent],
  imports: [
    CommonModule,
    DisciplinaRoutes
  ]
})
export class DisciplinaModule { }
