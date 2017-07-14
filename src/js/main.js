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
	var wWidth = 530,
		wHeight = 500;

	 var popupWin = window.open(this.href, 'contacts', 'location,width='+wWidth+'px,height='+wHeight+'px,top=0');
	 popupWin.focus();
});


$("#textarea").keyup(function() {
    if (this.value.length > 240)
        this.value = this.value.substr(0, 240);
});




var DOM = {},
		state = {
			curentSlide: 0,
			slidesOnPage: 0,
			transformStyle: 0,
			animationState: false,
			autoSlide: true,
			autoSlideInterval: null
		},
		sliderNav = '<div class="slider-nav"><div id="next-btn"></div><div id="prev-btn"></div></div>';
var plg = {
	autoSlide: function() {
		autoSlideInterval = setInterval(function() {
			plg.nextSlide();
		}, 20000)
	},
	stopAutoSlide: function() {
		clearInterval(autoSlideInterval)
	},
	cacheDom: function() {

		DOM.$sliderContainer = $('.slider-container');

		DOM.$sliderContainerWidth = DOM.$sliderContainer.width();
		
		DOM.$slideWidth = $('.viewport').width();
		
		DOM.$carousel = $('.carousel');
		
		DOM.$slideItem = $('.slide');
		
		DOM.$slideItemNatural = $('.slide').not('.cloned');  
		
	},
	toSlide: function() {
		
		DOM.$carousel.css('transform', 'translateX(-'+ state.curentSlide * DOM.$slideWidth+'px)');
		
		
		DOM.$slideItemNatural.removeClass('active');
		
		$('.slide').eq(state.curentSlide).addClass('active');
		
	},
	nextSlide: function() {
		
		state.curentSlide++;
		
		if (state.curentSlide >= (DOM.$slideItemNatural.length * 2) - 1) {
			
				state.animationState = true;
			
				$('.slide').eq(DOM.$slideItemNatural.length - 1).addClass('active');
			
		};
		
		if (state.curentSlide > (DOM.$slideItemNatural.length * 2) - 1) {
			
			plg.fakeAinimation(true);
			
		};
		
		
		if (state.curentSlide < DOM.$slideItemNatural.length) {
			
			state.curentSlide =  DOM.$slideItemNatural.length * 2;
			
		};
		
		plg.toSlide();
		
		
	},
	prevSlide: function() {
		
		
		if (state.curentSlide > DOM.$slideItemNatural.length) {
			
			state.curentSlide--;
			
		} else {
			
			plg.fakeAinimation(false);
			
		};
		
		plg.toSlide();
		
		if (state.curentSlide < DOM.$slideItemNatural.length + 1) {
			
				$('.slide').eq(DOM.$slideItemNatural.length * 2).addClass('active');
			
		};
	},
	fakeAinimation: function(direction) {
			
			state.animationState = true;
		
		if (direction) {
			
				DOM.$carousel.removeClass('animated');
		
				state.curentSlide = DOM.$slideItemNatural.length - 1;
			
				$('.slide').eq(DOM.$slideItemNatural.length - 1).addClass('active');	

				plg.toSlide();
			
				

				var curentTransform = DOM.$carousel.css('transform'),
						transformState = state.curentSlide * DOM.$slideWidth;

				if (curentTransform = "matrix(1, 0, 0, 1, -"+transformState+", 0)") {

					DOM.$carousel.addClass('animated');

					DOM.$slideItem.removeClass('active');

					state.curentSlide++;
					
					state.animationState = false;

				};
		} else {
			
			DOM.$carousel.removeClass('animated');
			
			state.curentSlide = (DOM.$slideItemNatural.length * 2);
			
			plg.toSlide();
			
			$('.slide').eq(DOM.$slideItemNatural.length * 2).addClass('active');
			
			var curentTransform = DOM.$carousel.css('transform'),
						transformState = state.curentSlide * DOM.$slideWidth;
			
			if (curentTransform = "matrix(1, 0, 0, 1, -"+transformState+", 0)") {

					DOM.$carousel.addClass('animated');

					$('.slide').removeClass('active');

					state.curentSlide--;
				
					state.animationState = false;

				};
			
		};
		
	},
	resize: function() {
				
		
				DOM.$sliderContainerWidth = $('.slider-container').width();
		
				DOM.$slideWidth = $('.viewport').width();
		
				DOM.$slideItem = $('.slide');
			
				state.slidesOnPage = Math.floor(DOM.$sliderContainerWidth / DOM.$slideWidth);
				
				DOM.$slideItem.each(function() {
					
					$(this).width(DOM.$slideWidth);
					
				});
		
		
				DOM.$carousel.css('width', '' + DOM.$slideWidth * DOM.$slideItem.length +'px');
		
				if (!state.curentSlide) {
					state.curentSlide = DOM.$slideItemNatural.length;
				};
		
				plg.toSlide();
		
	},
	init: function() {
		
		$(DOM.$slideItem).each(function (i) {
			
			$(this)
				.clone()
				.addClass('cloned')
				.insertBefore( DOM.$slideItem.eq(0) )
				.clone()
				.appendTo( DOM.$carousel );
			
		});

		$()
		
		plg.resize();

		$(sliderNav).appendTo(DOM.$sliderContainer);
		
		DOM.$carousel.addClass('animated');

		plg.autoSlide();
		
	} 
};


plg.cacheDom();

plg.init();

$('#next-btn').on('click', function() {
	plg.stopAutoSlide();
	plg.nextSlide();
	
});

$('#prev-btn').on('click', function() {
	plg.stopAutoSlide();
	plg.prevSlide();
	
});

$(window).on('resize', function() {
	
	plg.resize();
	
});



function fitImageToHolder () {
  $('.image-holder').each(function () {
    var $holder = $(this);
    var $image = $holder.find('video');
    var image = $image.get(0);
    var holderWidth = $holder.width(),
      holderHeight = $holder.height(),
      imageWidth = $image.width(),
      imageHeight = $image.height();
    function fitImg (img) {
      if (holderWidth - imageWidth < holderHeight - imageHeight) {
        $(img).css({
          'width': 'auto',
          'height': '100%'
        });
      } else {
        $(img).css({
          'width': '100%',
          'height': 'auto'
        });
      }
    }
    if (imageWidth) {
      fitImg (image);
    } else {
      $image.on('load', function () {
        imageWidth = this.naturalWidth;
        imageHeight = this.naturalHeight;
        fitImg (this);
      });
    }
  });
}
fitImageToHolder ();
function fitOnResize () {
  clearTimeout(fitImageToHolder.timeoutId);
  fitImageToHolder.timeoutId = setTimeout(fitImageToHolder, 500);
}

$(window).on('resize', function () {
  fitOnResize ();
});

$(window).on('load', function() {
	fitOnResize ();
})





$(window).on('load', function() {
	$('#preloader').fadeOut();
	$('.rngst_phone_button').on('click', function() {
		$('.main-modal').toggleClass('open');
		$('body').toggleClass('blackshadow');
	});

	$('.close-btn').on('click', function() {
		$('.main-modal').removeClass('open');
		$('body').removeClass('blackshadow');
	});

	$('#send-mail').on('submit', function() {
		$('.main-modal').removeClass('open');
		$('body').removeClass('blackshadow');
	})
})


$('#send-mail').submit(function() {
	alert();
});
