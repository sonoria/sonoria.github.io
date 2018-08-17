$(document).ready(function(){

	$('.menu-burger').click(function(){
		$('.menu-burger').toggleClass('menu-burger_active');
		$('.menu-block').toggleClass('menu-block_active');

	});

	$('.menu-block__link').click(function(){
		$('.menu-burger').toggleClass('menu-burger_active');
		$('.menu-block').toggleClass('menu-block_active');
	});
	$(window).scroll(function() {
		if($(this).scrollTop() >= 100) {
			$('.menu').addClass('stickytop');
			$('.main').addClass('padding-plus');
		}
		else{
			$('.menu').removeClass('stickytop');
			$('.main').removeClass('padding-plus');
		}
	});

	$('.menu-block__link').click( function(){ 
		var scroll_el = $(this).attr('href'); 
		if ($(scroll_el).length != 0) { 
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top-90 }, 500);
		}
	});

});