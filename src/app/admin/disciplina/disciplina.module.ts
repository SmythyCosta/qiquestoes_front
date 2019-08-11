import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ListarComponent } from './listar/listar.component';



@NgModule({
  declarations: [FormComponent, ListarComponent],
  imports: [
    CommonModule
  ]
})
export class DisciplinaModule { }
