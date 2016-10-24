$(document).on('ready', function() {
	$('.bxslider').bxSlider({
		auto: true
	});
})
$(document).on('ready', function() {
	$('.bxslider-mobile').bxSlider({
		auto: true
	});
})

$('#m-nav-btn').on('click', function() {
	$('#mobile-menu').toggleClass('open');
})


function initMap() {
	// Create a map object and specify the DOM element for display.
	var map = new google.maps.Map(document.getElementById('map'), {
	  center: {lat: 50.442105, lng: 30.4960563},
	  scrollwheel: false,
	  zoom: 17
	});
}

$('#callbackclose').on('click', function() {
  $('.main-modal').removeClass('open')
  $('body').removeClass('blackshadow')
})
$('#callbackopen').on('click', function() {
  $('.main-modal').addClass('open')
  $('body').addClass('blackshadow')
})

$('#orderBtn').on('click', function(e) {
	e.preventDefault();
	var wWidth = $(window).width() * 0.8,
		wHeight = $(window).height() * 0.8;

	 var popupWin = window.open(this.href, 'contacts', 'location,width='+wWidth+',height='+wHeight+',top=0');
	 popupWin.focus();
});


$("#textarea").keyup(function() {
    if (this.value.length > 240)
        this.value = this.value.substr(0, 240);
});