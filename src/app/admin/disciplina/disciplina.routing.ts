// ############## Core Angular ##############
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { FormComponent } from './form/form.component';

// ############## Components ##############


// ############## Helpers ##############



const disciplinaRoutes: Routes = [
    { path: '', component: ListarComponent },
    { path: 'form', component: FormComponent },
    // { path: 'form/:id', component: BlocoFormComponent, canActivate: [CheckCondominioGuard] },
    // { path: 'visualizar/:id', component: BlocoVisualizarComponent, canActivate: [CheckCondominioGuard] },
    // { path: '404', component: Status404Component },
];

@NgModule({
    imports: [RouterModule.forChild(disciplinaRoutes)],
    exports: [RouterModule]
})
export class DisciplinaRoutes { }