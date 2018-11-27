///////////////////////////////////////////////////
// Plugin Abas                               
// Author: Genilda Oliveira de Araujo
// Built: 01 de Novembro de 2012                                    
///////////////////////////////////////////////////

(function ($) {
    $.fn.abas = function (options) {

        $(this).click(function () {		
			 // armazena o botão que foi clicado
             var toggleClick = $(this);
			 var grupo_abas = $(this).closest('.abas');
		     // lê o atributo rel do elemento clicado para determinar a aba a ser aberta
		     var toggleDiv = $(this).attr('rel');
			 
			 // desabilita todos as as abas
			 $(grupo_abas).find( ".botao_aba" ).removeClass( "ativo", 10 );
			 $(grupo_abas).find( ".aba" ).removeClass( "exibir_aba", 10 );
		   
			// ativa o botão clicado e exibe a aba relacionada
		    $(this).addClass( "ativo", 200 );
			$("#"+toggleDiv).addClass( "exibir_aba", 200 );

		  return false;
		   	   
        });

    };
})(jQuery);