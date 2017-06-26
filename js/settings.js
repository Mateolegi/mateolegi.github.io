$(document).ready(function(){
	altura();

});


/*
*Esta funcion permite dar valores de css 
*a la barra de navegacion cuando se hace scroll
*/


var flag = true;
$(window).scroll(function(){
    var scroll = $(document).scrollTop();
    if(scroll > 100){
          $("#navContainer").css({
            'opacity' : 1,
            'border-bottom': 'solid 1px white',
            "background-color" : '#CDCDCD',
            // "background-color" : 'rgba(49,51,62,' + 0.7 + ')'
          })

  
      }
      else{
        $("#navContainer").css({
          "background-color" : 'rgba(0,0,0,' + 0.0 + ')',
          'border-bottom': 0
        })

    }
})



/*
*Esta funcion setea la altura minimo del banner
*con respecto a la pantalla desde donde se vé
*/

function altura(){
	var altura= $(window).height(); ;
	$("#bannerContainer").css({"min-height" : altura+"px"});
	$("#bannerRow").css({"min-height": altura+"px"})
}

// 



/* <<---------------------------------->>   Smoth scroll   <<-------------------------------------------------->> */
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });