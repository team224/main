(function($){
  $(function(){
 $('.collapsible').collapsible({
      accordion : false 
    });
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
$('.modal-trigger').leanModal();
$('.carousel.carousel-slider').carousel({full_width: true});
  }); // end of document ready
})(jQuery); // end of jQuery name space
var audio = new Audio('z.mp3');
audio.play();
