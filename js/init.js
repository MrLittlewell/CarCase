(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.carousel').carousel({
      dist: -50,
      numVisible: 3,
      shift: 100
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
