// ############## Core Angular ##############
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ############## Components ##############

// ############## Helpers ##############



const areaFormacaoRoutes: Routes = [
    // { path: '', component: BlocoListComponent, canActivate: [CheckCondominioGuard] },
    // { path: 'success/:success', component: BlocoListComponent },
    // { path: 'form', component: BlocoFormComponent, canActivate: [CheckCondominioGuard] },
    // { path: 'form/:id', component: BlocoFormComponent, canActivate: [CheckCondominioGuard] },
    // { path: 'visualizar/:id', component: BlocoVisualizarComponent, canActivate: [CheckCondominioGuard] },
    // { path: '404', component: Status404Component },
];

@NgModule({
    imports: [RouterModule.forChild(areaFormacaoRoutes)],
    exports: [RouterModule]
})
export class AreaFormacaoRoutes { }