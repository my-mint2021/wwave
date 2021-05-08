$(function () {
 
  $('.blog-slider').slick({
    dots: true,
    arrows: false,
  });

$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger').toggleClass('header__burger--active');
		$('.menu').toggleClass('menu--active');
		$('body').toggleClass('body--lock');
	});
});

$( '.menu' ).on("click", function(){
  $('.header__burger').removeClass('header__burger--active');
  $('.menu').removeClass('menu--active');
  $('body').removeClass('body--lock');
});

$(".menu a, footer a").on("click", function (e) {
  e.preventDefault();
  var id  = $(this).attr('href'),
      top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
});
  
// $(window).scroll(function(){
//   if ($(this).scrollTop() > 500) {
//       $('.header__top').addClass('header__top--fixed');
//   } else {
//       $('.header__top').removeClass('header__top--fixed');
//   }
// });

var header = $('.header__top'),
		scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 600 && scrolled > scrollPrev ) {
		header.addClass('header__top--fixed');
	} else {
		header.removeClass('header__top--fixed');
	}
	scrollPrev = scrolled;
});


  var mixer = mixitup('.gallery__content');
});