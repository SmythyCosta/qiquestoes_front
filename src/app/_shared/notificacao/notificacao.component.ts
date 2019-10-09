import { Component, Input  } from '@angular/core';

@Component({
  selector: 'notificacao',
  templateUrl: './notificacao.component.html',
})
export class NotificacaoComponent {

  // escutar o valor do componente pai
  @Input() notificacaoExibir : number;

}
