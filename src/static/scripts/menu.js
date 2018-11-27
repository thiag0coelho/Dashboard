///////////////////////////////////////////////////
// Plugin Menu                              
// Author: Genilda Oliveira de Araujo
// Built: 19 de janeiro de 2015                                  
///////////////////////////////////////////////////

(function ($) {
    $.fn.menu = function (options) {
    
    var isWindowsPhone = /windows phone/i.test(navigator.userAgent.toLowerCase());
	var isWebOS = /webos/i.test(navigator.userAgent.toLowerCase());
	var isBlackBerry = /blackberry/i.test(navigator.userAgent.toLowerCase());
	var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());
	var isiDevice = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());

    
    
    // FUÇÕES DO MENU PRINCIPAL
    
    function mainMenuOver() {	
   	 if($('#app').hasClass("desktop")) {
        var larguraContainer = $(this).closest('.container').outerWidth();
        var larguraDropDown = $(this).closest('li').find('div.dropdown').outerWidth();
        var inicioAreaUtil = (window.innerWidth - larguraContainer)/2;
        var posicaoMenu = $(this).offset().left;  
             
        if((posicaoMenu-inicioAreaUtil+larguraDropDown)<larguraContainer) {
             $(this).find('div.dropdown').css({'left':'-5px'});
		} else {
		     $(this).find('div.dropdown').css({'left':(larguraContainer-(posicaoMenu-inicioAreaUtil+larguraDropDown+5))+'px'});
		}
		$(this).addClass( "aberto", 0 );
		$(this).focus();
		
	  }
	  return false;   	   
    }
    
    function mainMenuOut() {
		if($('#app').hasClass("desktop")) {
			$(this).removeClass( "aberto", 0 );
		}
    	return false;   	   
    }
    
     function dropdownOut() {
		if($('#app').hasClass("desktop")) {
			$(this).closest("li").removeClass( "aberto", 0 );
		}
    	return false;   	   
    }		
    
    function mainMenuClick() {
    	if($('#app').hasClass("mobile")) {
			if ($(this).closest("li").hasClass( "aberto")) {
				$(this).closest("li").removeClass( "aberto", 0 );
			} else {
				$(this).closest("li").addClass( "aberto", 0 );
			}
		}
    	return false;   	   
    }
    
    function buttonMenuOpen() {    	
    	var altura_overlay = window.innerHeight+40;
    	var largura_overlay = window.innerWidth+40;
    	
    	$('#app').css({'height':(window.innerHeight)+'px'});
    	$('#app').css({'overflow':'hidden'});
    	
    	$('#cabecalho .container').append('<div id="overlay-menu"></div>');
		$('#overlay-menu').css({'height':(altura_overlay)+'px'});
		$('#overlay-menu').css({'width':(largura_overlay)+'px'});
		$('#overlay-menu').offset({ top: 0, left: -20 });
		$('#overlay-menu').click(buttonMenuClose); 
		
		$('.submenu').removeClass( "selecionado", 0 );

    	
    	$('#menu').addClass( "lateral", 0 );
    	$('#menu').css({'height':(window.innerHeight+20)+'px'});
    	$("#menu").animate({
			left: "0px",
			opacity: 1
		}, 500 );
		

    	return false;   	   
    }	
    
    function buttonMenuClose() {
    	var altura = $('#cabecalho').outerHeight() + $('#corpo').outerHeight() + $('#rodape').outerHeight();
    	$('#app').css({'height':(altura)+'px'});
    	$('#overlay-menu').animate({opacity: 0},600);
    	setTimeout(function() {
	      $('#overlay-menu').remove();
		}, 800);
		
		$('.submenu').removeClass( "selecionado", 0 );
    	
    
    	$("#menu").animate({
			left: "-500px",
			opacity: 1
		}, 500 );
		$('#menu').css({'left':'0px'});
    	return false;   	   
    }	  
          
       
    function submenuActivate() {
		var menu = '#menu_' + $(this).attr('id');
		var anterior = $(this).closest('ul').attr('rel');
		var atual = $(this).attr('id');		
		
		if($('#app').hasClass("desktop")) {			
			if (!(typeof anterior === "undefined")) {
				$('#'+anterior).removeClass( "selecionado", 0 );
				$('#menu_'+anterior).removeClass( "ativo", 0 );
			}
			$(this).closest('ul').attr('rel', atual);
			
			$(this).addClass( "selecionado", 0 );
			$(menu).addClass( "ativo", 0 );	
	
		}
    	return false;   	   
    }

    
    function overLink() {
		
		if($('#app').hasClass("desktop")) {
		
			$(this).closest('.dropdown').find('.coluna-1 ul li').removeClass( "selecionado", 100 );
			
		}
    	return false;   	   
    }
    
    function submenuActivateMobile() {

		if($('#app').hasClass("mobile")) {
		
			if ($(this).closest('.submenu').hasClass("expandir")) {
				$(this).closest('.submenu').removeClass( "expandir", 100 );
			} else {
				$(this).closest('.submenu').removeClass( "expandir", 100 );
				$(this).closest('.submenu').addClass( "expandir", 100 );
			}
		}
    	return false;   	   
    }
    	 


	 // ATIVAÇÃO DE FUNÇÕES
	
	
	if (isiDevice || isAndroid || isWindowsPhone) {
		$('#app').addClass( "mobile", 0 );
	} else {
		$('#app').addClass( "desktop", 0 );
	}
	
	if (isiDevice) { $('#app').addClass( "iOS", 0 );}
	if (isAndroid) { $('#app').addClass( "androind", 0 );}
	if (isWindowsPhone) { $('#app').addClass( "windows", 0 );}
	
	
	$(window).resize(function() {
		var altura = $('#cabecalho').outerHeight() + $('#corpo').outerHeight() + $('#rodape').outerHeight();
		if($('#app').hasClass( "mobile")){
			$('#app').css({'height':(altura)+'px'});
			$('#menu').removeClass( "lateral", 0 );
			$('#menu > ul > li').removeClass( "aberto", 0 );
			$('#menu .dropdown').css({'left':'0px'});
    	}
	});
	
	
	$('#menu > ul > li').mousemove(mainMenuOver);
    $('#menu > ul > li').mouseleave(mainMenuOut);
    $('#menu > ul > li').focusout(mainMenuOut);
    $('#menu .dropdown').mouseleave(dropdownOut);
    $('#menu > ul > li > span').click(mainMenuClick);
    
    $('#menu .submenu').mouseenter(submenuActivate);
    $('#menu .submenu_titulo').click(submenuActivateMobile);
    
	$('#open-menu').click(buttonMenuOpen); 
	$('#close-menu').click(buttonMenuClose); 
	

    };
})(jQuery);
