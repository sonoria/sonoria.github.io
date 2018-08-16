$(document).ready(function() {

	$('.menu_link').click( function(){ 
		var scroll_el = $(this).attr('href'); 
		if ($(scroll_el).length != 0) { 
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
		}
	});

	var btn = $(".menu-btn");
	var btn_active = $(".menu-btn_active");
	var menu = $(".menu-block-nav");
	var nav_link = $(".menu-block-nav");

	btn.click(function() {
		btn.toggleClass(" menu-btn_active");
		menu.toggleClass(" menu-block-nav_active");
	});

	nav_link.click(function() {
		btn.toggleClass(" menu-btn_active");
		nav_link.toggleClass(" menu-block-nav_active");
	});

});
