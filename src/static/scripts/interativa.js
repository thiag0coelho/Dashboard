///////////////////////////////////////////////////
// Scripts da Interativa                              
// Author: Genilda Oliveira de Araujo
// Built: 27 de Maio de 2013                                    
///////////////////////////////////////////////////

(function ($) {
    $.fn.tableSelect = function (options) {

        // marca/desmarca linha inteira e habilita/desabilita check 
    	$(this).click(function() {
    	
    	if ($(this).find('td .checker span').length == 1 ) { //marca linha apenas se houver check
			if ($(this).hasClass('selecionada') ) {
			  	$(this).find('.checker span').removeClass('checked');
				$(this).find('input:checkbox').prop("checked", false);
			  	$(this).removeClass('selecionada');	
			  	$(this).closest('table').find('th .todos').prop("checked", false); 
				$(this).closest('table').find('th .checker span').removeClass('checked'); 
			} else {
			  	$(this).addClass('selecionada');	
				$(this).find('input:checkbox').prop("checked", true);
			  	$(this).find('.checker span').addClass('checked');
			  	
			  	if($(this).closest('.container_botoes_dados').find('td .checker .checked').length == $(this).closest('.container_botoes_dados').find('td .checker span').length) {
			  		$(this).closest('table').find('th .todos').prop("checked", true); 
					$(this).closest('table').find('th .checker span').addClass('checked'); 
			  	}
			}
			
			// habilita  
			if($(this).closest('.container_botoes_dados').find('td .checker .checked').length == 0) {
				$(this).closest('.container_botoes_dados').find('.selecao_multipla').prop('disabled', true);
				$(this).closest('.container_botoes_dados').find('.selecao_unica').prop('disabled', true);
				
			} else if($(this).closest('.container_botoes_dados').find('td .checker .checked').length == 1) {
				$(this).closest('.container_botoes_dados').find('.selecao_multipla').prop('disabled', false);
				$(this).closest('.container_botoes_dados').find('.selecao_unica').prop('disabled', false);
				
			} else if($(this).closest('.container_botoes_dados').find('td .checker .checked').length > 1){
				$(this).closest('.container_botoes_dados').find('.selecao_multipla').prop('disabled', false);
				$(this).closest('.container_botoes_dados').find('.selecao_unica').prop('disabled', true);
			} 
			
			return false;
		 }
   		 });
    };    


     $.fn.tableSelectTodos = function (options) {

         // marca/desmarca todos 
		 $(this).change(function() {
			 if ($(this).closest('.checker span').hasClass('checked') ) {
			 	$(this).closest('table').find('tbody tr').addClass('selecionada');
				$(this).closest('table').find('tbody tr input:checkbox').prop("checked", true); 
				$(this).closest('table').find('tbody tr .checker span').addClass('checked'); 	
			 } else {
				$(this).closest('table').find('tbody tr').removeClass('selecionada');
				$(this).closest('table').find('tbody tr input:checkbox').prop("checked", false); 
				$(this).closest('table').find('tbody tr .checker span').removeClass('checked');
			}
			
			// habilita  
			if($(this).closest('.container_botoes_dados').find('td .checker .checked').length == 0) {
				$(this).closest('.container_botoes_dados').find('.selecao_multipla').prop('disabled', true);
				$(this).closest('.container_botoes_dados').find('.selecao_unica').prop('disabled', true);
				
			} else if($(this).closest('.container_botoes_dados').find('td .checker .checked').length == 1) {
				$(this).closest('.container_botoes_dados').find('.selecao_multipla').prop('disabled', false);
				$(this).closest('.container_botoes_dados').find('.selecao_unica').prop('disabled', false);
				
			} else if($(this).closest('.container_botoes_dados').find('td .checker .checked').length > 1){
				$(this).closest('.container_botoes_dados').find('.selecao_multipla').prop('disabled', false);
				$(this).closest('.container_botoes_dados').find('.selecao_unica').prop('disabled', true);
			} 
			
			 
		 return false; 
		 });
    };
    
    
    $.fn.mensagemCampo = function (options) {

         $(this).click(function() {
			if ($(this).closest('.componente').hasClass('mensagem') ) {
				$('.componente').removeClass('mensagem');
			  	$(this).closest('.componente').removeClass('mensagem');
			} else {
				$('.componente').removeClass('mensagem');
			  	$(this).closest('.componente').addClass('mensagem');
			}
   		 });
		 
		 $(this).mouseover(function() {
			  	$(this).closest('.componente').addClass('mensagem');
   		 });
		 
		  $(this).mouseleave(function() {
			  	$(this).closest('.componente').removeClass('mensagem');
   		 });
    };
    
    
    $.fn.buscaAvancada = function (options) {

         $(this).click(function() {
			$(this).text($(this).text() == 'busca avançada' ? 'busca simples' : 'busca avançada'); 
			return false;
   		 });
    };
    
	$.fn.botaoMais = function (options) {

         $(this).click(function() {
			$(this).toggleClass('ativo');  
		  	$(this).closest('.container_dropdown_acoes').find('.dropdown_acoes').toggle();
			return false;
   		 });
    };
    
    
    
   fixarPainel = function (options) {

        var window_top = $(window).scrollTop();
  		
  		if ($(".container_botoes_dados").length > 0) {
    		$(".container_botoes_dados").each(function() {
    		if($(this).css('display') != 'none'){
    			var div_top = $(this).offset().top + 1;
				var div_bottom = div_top + $(this).height() - 50;
  				if ((window_top > div_top) && (window_top < div_bottom)) {
		    		if ($(this).find(".faixa_flutuante").length > 0) {
		    			$('.fixar').css({'padding-top':($(this).find(".faixa_flutuante").height)+'px'});
		    			$(this).addClass('fixar');
		    		}
				} else { 
					if ($(this).find(".faixa_flutuante").length > 0) {
		    			$(this).removeClass('fixar');
		    		}
				}
        	}
    		}); 
		}
    };
    
    
})(jQuery);