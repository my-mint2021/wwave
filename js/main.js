$(function () {
  var mixer = mixitup('.gallery__content');

  $('.slider').slick({
    dots: true,
    arrows: false,
    autoplay:true,
    autoplaySpeed:4000,
  });
});