import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { FormComponent } from './form/form.component';
import { QuestoesRoutes } from './questoes.routing';



@NgModule({
  declarations: [ListarComponent, FormComponent],
  imports: [
    CommonModule,
    QuestoesRoutes
  ]
})
export class QuestoesModule { }
