(function($){
  $(function(){
 $('.collapsible').collapsible({
      accordion : false 
    });
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
$('.modal-trigger').leanModal();

  }); // end of document ready
})(jQuery); // end of jQuery name space
var audio = new Audio('audio_file.mp3');
audio.play();
