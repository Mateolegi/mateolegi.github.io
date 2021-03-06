// Global Variables
$(document).ready(function() {
	altura();
});

/**
 * Esta función setea la altura mínima del banner
 * con respecto a la pantalla desde donde se ve
 */
function altura() {
  var altura= $(window).height();
  $("#bannerContainer").css({"min-height" : altura+"px"});
  $("#bannerRow").css({"min-height": altura+"px"});
}

 $("#sk1").click(function() {
  setear1();
  $("#design").animateCss('fadeInLeft');
 });


 $("#sk2").click(function() {
  setear2();
  $("#database").animateCss('fadeInRight');
 });

 $("#sk3").click(function() {
  setear3();
  $("#backend").animateCss('fadeInLeft');
 });



/**
 * Esta función permite dar valores de css
 * a la barra de navegación cuando se hace scroll
 */
var flag = true;
$(window).scroll(function() {
  landingElement();
	quoteAnimation();
  navbar();
})

function navbar() {
  var wScroll = $(document).scrollTop();
  var skill = $('#skill').offset().top - ($(window).height() * .2);

  if (wScroll > skill){
    $("#burguerIcon").css({"color" : "#888"});
  } else {
    $("#burguerIcon").css({"color" : "#f3f3f3"});
  }
}

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    $(".wrapContainer").toggleClass("buttonToggled");
});

function landingElement() {
  var wScroll = $(document).scrollTop();
  var skill = $('#skill').offset().top - ($(window).height() * .3);
  if (wScroll > skill ) {
    $("#left-skill").css({
      'transform': 'translateX(0)',
      'opacity':1
    });
  } else {
    $("#left-skill").css({
      'transform': 'translateX(40px)',
      'opacity' : 0
    });
  }
}

 /**
  * this functions are using for setting the buttons by default
  * using the skill navbar buttons
  */
function setear1() {
  $("#c1").removeClass("unactive");
  $("#c2").removeClass("active");
  $("#c3").removeClass("active");

  $("#c1").addClass("active");
  $("#c2").addClass("unactive");
  $("#c3").addClass("unactive");

  // Setting Content
  $("#design").removeClass("none");
  $("#database").removeClass("show");
  $("#backend").removeClass("show");

  $("#design").addClass("show");
  $("#database").addClass("none");
  $("#backend").addClass("none");
}

function setear2() {
  $("#c1").removeClass("active");
  $("#c2").removeClass("unactive");
  $("#c3").removeClass("active");

  $("#c1").addClass("unactive");
  $("#c2").addClass("active");
  $("#c3").addClass("unactive");

  // Setting Content
  $("#design").removeClass("show");
  $("#database").removeClass("none");
  $("#backend").removeClass("show");

  $("#database").addClass("show");
  $("#design").addClass("none");
  $("#backend").addClass("none");
}

function setear3() {
  $("#c1").removeClass("active");
  $("#c2").removeClass("active");
  $("#c3").removeClass("unactive");

  $("#c1").addClass("unactive");
  $("#c2").addClass("unactive");
  $("#c3").addClass("active");

  // Setting Content
  $("#design").removeClass("show");
  $("#database").removeClass("show");
  $("#backend").removeClass("none");

  $("#backend").addClass("show");
  $("#design").addClass("none");
  $("#database").addClass("none");
}



function quoteAnimation() {
	var wScroll = $(document).scrollTop();
	var extra = $('#extraInfo').offset().top - ($(window).height() * .6);

	if (wScroll > extra) {
		$("#inside").css({
      'transform': 'translateX(0)',
      'opacity':1
    });

		$("#author").css({
      'transform': 'translateX(0)',
      'opacity':1
	   });
	} else {
		$("#inside").css({
			'transform': 'translateX(40px)',
			'opacity': 0
    });

    $("#author").css({
			'transform': 'translateX(-50px)',
			'opacity':1
		});
	}
}

/**
 * Animate css code
 */
$.fn.extend({
  animateCss: function (animationName) {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);
    });
  }
});
