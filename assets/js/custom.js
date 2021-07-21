// Pre Loader Start **/
function preloader() {
    $('#preloader').delay(1000).fadeOut();
};

$(window).on('load', function () {
    preloader(),
    wowanimation();
});
// Pre Loader End **/

/**== Navabar script related(header-area) */

  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
    $('.header').addClass('fixed');
    } else {
    $('.header').removeClass('fixed');
    }
  });

// End Navabar script related(header-area)

// counter js */
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 5000
    });
});

// portfolio mixitup js ==**/

  var containerEl = document.querySelector('.my-portfolio');
  var mixer = mixitup(containerEl);

// Testimonila owl-carousel js ==**/

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots:true,
    autoplay:false,
    autoplayTimeout:4000,
    responsive:{
        10:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// Header Menu Toogle ==**/
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}
    
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// WOW active
function wowanimation() {
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: false,
		live: true
	});
	wow.init();
}

