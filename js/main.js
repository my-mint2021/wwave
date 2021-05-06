$(function () {
 
  $('.blog__slider').slick({
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

  var mixer = mixitup('.gallery__content');
});