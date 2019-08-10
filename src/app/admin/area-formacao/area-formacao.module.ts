import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';

import { AreaFormacaoRoutes } from './area-formacao.routing';
import { ListarComponent } from './listar/listar/listar.component';


@NgModule({
  declarations: [ListarComponent],
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
