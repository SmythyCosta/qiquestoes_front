import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { UsuarioRoutes } from './usuario.routing';



@NgModule({
  declarations: [ListarComponent],
  imports: [
    CommonModule,
    UsuarioRoutes
  ]
})
export class UsuariosModule { }
