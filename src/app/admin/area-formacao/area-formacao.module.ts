import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';

import { AreaFormacaoRoutes } from './area-formacao.routing';
import { FormComponent } from './form/form.component';
import { ListarComponent } from './listar/listar.component';



@NgModule({
  declarations: [
    ListarComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AreaFormacaoRoutes,
  ],
  providers: [
  ]
})
export class AreaFormacaoModule { }
