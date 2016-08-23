$(document).on('ready', function() {
	$('.bxslider').bxSlider();
})

$('#m-nav-btn').on('click', function() {
	$('#mobile-menu').toggleClass('open');
})