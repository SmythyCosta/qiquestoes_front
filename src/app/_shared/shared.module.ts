import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert-messege/alert.component';
import { MascaraDirective } from './mascaras/mascara.directive';
import { NotificacaoComponent } from './notificacao/notificacao.component';
import { ValidacaoMessageComponent } from './validacao-message/validacao-message.component';
import { NotFoundResultComponent } from './not-found-results/not-found-result';
import { Status404Component } from './status-404/status-404.component';
import { PAginacaoComponent } from './paginacao/paginacao.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        PAginacaoComponent,
        Status404Component,
        NotFoundResultComponent,
        AlertComponent, 
        MascaraDirective, 
        NotificacaoComponent, 
        ValidacaoMessageComponent
    ],
    exports: [
        PAginacaoComponent,
        Status404Component,
        NotFoundResultComponent,
        AlertComponent, 
        MascaraDirective, 
        NotificacaoComponent,
        ValidacaoMessageComponent
    ]
})
export class SharedModule { }