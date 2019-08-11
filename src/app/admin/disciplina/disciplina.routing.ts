// ############## Core Angular ##############
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ############## Components ##############


// ############## Helpers ##############



const disciplinaRoutes: Routes = [
    //{ path: '', component: ListarComponent },
    // { path: 'success/:success', component: BlocoListComponent },
    // path: 'form', component: FormComponent },
    // { path: 'form/:id', component: BlocoFormComponent, canActivate: [CheckCondominioGuard] },
    // { path: 'visualizar/:id', component: BlocoVisualizarComponent, canActivate: [CheckCondominioGuard] },
    // { path: '404', component: Status404Component },
];

@NgModule({
    imports: [RouterModule.forChild(disciplinaRoutes)],
    exports: [RouterModule]
})
export class DisciplinaRoutes { }