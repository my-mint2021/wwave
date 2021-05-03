$(function () {
 

  $('.blog__slider').slick({
    dots: true,
    arrows: false,
    // autoplay:true,
    // autoplaySpeed:4000,
  });

$('.menu__burger').on('click', function(){
$('.menu').toggleClass('menu--active');
});

  var mixer = mixitup('.gallery__content');
});