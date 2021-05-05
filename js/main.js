$(function () {
 

  $('.blog__slider').slick({
    dots: true,
    arrows: false,
    // autoplay:true,
    // autoplaySpeed:4000,
  });

// $('.menu__burger').on('click', function(){
// $('.menu').toggleClass('menu--active');
// $('body').toggleClass('lock');
// });

$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger').toggleClass('header__burger--active');
		$('.menu').toggleClass('menu--active');
		$('body').toggleClass('body--lock');
	});
});


  var mixer = mixitup('.gallery__content');
});