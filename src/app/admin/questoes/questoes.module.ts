import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [ListarComponent, FormComponent],
  imports: [
    CommonModule
  ]
})
export class QuestoesModule { }
