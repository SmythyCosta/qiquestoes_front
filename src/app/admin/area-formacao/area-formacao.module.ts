import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';

import { AreaFormacaoRoutes } from './area-formacao.routing';


@NgModule({
  declarations: [],
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
