///////////////////////////////////////////////////
// Plugin ShowHide Panels                               
// Author: Genilda Oliveira de Araujo
// Built: 15 de Outubro de 2012                                    
///////////////////////////////////////////////////

(function ($) {
    $.fn.showHide = function (options) {

		//variáveis padrão 
        var defaults = {
            speed: 200,
			easing: 'easeOutElastic'
        };
        var options = $.extend(defaults, options);

        $(this).click(function () {		
			 // armazena o botão que foi clicado
             var toggleClick = $(this);
		     // lê o atributo rel do elemento clicado para determinar o painel a ser aberto
		     var toggleDiv = $(this).attr('rel');
		   
			// adiciona a classe 'abrir' ao elemento, que é aberto em função da configuração CSS.
			$(toggleDiv).toggleClass( 'abrir', 200, 'swing');

		  return false;
		   	   
        });

    };
})(jQuery);