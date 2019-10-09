/**
 * Componente utilitário para exibir os links de 
 * paginação para uma tabela HTML.
 * 
 * OBS: este componente foi desenvolvido para ser 
 * utilizado com a paginacao do Laravel 5.6 
 *
 */

import { Component, Input, OnInit, EventEmitter, Output  } from '@angular/core';


@Component({
    selector: 'paginacao',
    templateUrl: './paginacao.component.html',
})
export class PAginacaoComponent implements OnInit {

    // Envia valor para o component Pai.
    @Output() onPaginate = new EventEmitter<number>();

    // Escutar o valor do componente Pai.
    @Input() paginacao = {
         /**
         *  current_page => variavies para armazenar da api 
         *  pargina atual que se encontar no momento da apginacao.
         * 
         *  total_itens => total de elementos encontrados na busca
         *  
         */
        current_page: 0,
        total_itens: 0,
        /**
         * first_page => primeira pagina.
         * o primeiro valor sempre sera 1.
         * 
         * last_page => ultima pagina, este valor é obtido 
         * na api.
         */
        first_page: 1,
        last_page: 0,
        /**
         * previous_page => pagina anterior.
         * 
         * next_page => pagina seguinte.
         */
        previous_page: 0,
        next_page: 0, 
        /**
         * Variavel para implementar a logica para exibir 
         * os botoes de paginiacao
         */
        falta_percorer: 0,
    };

    ngOnInit(): void {
        this.checkNext();
        this.checkPrevious();
        this.faltaPercorer();
    }

    /**
     * Logica para exibir
     * os botoes de 
     * Proximo|Avancar.
     */
    checkNext(){

        this.paginacao.next_page = this.paginacao.current_page + 1;

        //Check Next
        // ==================================
        if (this.paginacao.next_page > this.paginacao.last_page){
            this.paginacao.next_page = this.paginacao.last_page;
        }else{
            this.paginacao.next_page = this.paginacao.next_page
        }
    }

    /**
     * Logica para exibir
     * os botoes de 
     * Proximo|Avancar.
     */
    checkPrevious(){

        this.paginacao.previous_page  = this.paginacao.current_page - 1;

        //Check Previous
        // ==================================
        if (this.paginacao.previous_page < 1){
            this.paginacao.previous_page = 1;
        }else{
            this.paginacao.previous_page = this.paginacao.previous_page
        }
    }

    faltaPercorer(){
        // LADO DIREITO
        this.paginacao.falta_percorer =  this.paginacao.last_page - this.paginacao.current_page;
    }

    
	/**
	 * Método responsável por chamar o Emitter de 
	 * paginação.
	 *
	 * @param queryAPI pagina
	 * @param event $event número da página a ser exibida.
	 */
	setPage(queryAPI, event: any) {
        event.preventDefault();
		this.onPaginate.emit(queryAPI);
	}


}
