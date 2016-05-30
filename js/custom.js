/*
  * @package Arena
  * @subpackage Arena HTML
  * 
  * Template Scripts
  * Created by Themeturn

  
*/

$(window).load(function() { // makes sure the whole site is loaded
  "use strict";
    
    // $('.navbar-nav li a').on('click', function(){ 
    //     if($('.navbar-toggle').css('display') !='none'){
    //         $(".navbar-toggle").trigger( "click" );
    //     }
    // });

  /* ==============================================
      Menu toggle
    =============================================== */ 
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 40;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 70
    })
 


});
  

$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});

  $(document).ready(function(){
  
  "use strict";
   
    $('#app-carousel').carousel({
        interval: 100000
    })


/* ==============================================
Back To Top Button
=============================================== */  
 
  $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
      // scroll body to 0px on click
      $('#back-top').click(function () {
          $('#back-top a').tooltip('hide');
          $('body,html').animate({
              scrollTop: 0
          }, 800);
          return false;
      });
      
      $('#back-top').tooltip('hide');

  

});