var owl = $('.owl-carousel');
owl.owlCarousel({
	loop:true,
	margin:10,
	autoplay:true,
	autoplayTimeout:4000,
	autoplayHoverPause:true,
	dots: false,
	items: 5
});
$('.play').on('click',function(){
	owl.trigger('play.owl.autoplay',[4000])
})
$('.stop').on('click',function(){
	owl.trigger('stop.owl.autoplay')
});