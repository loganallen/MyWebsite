// Enable tooltip popup showing brief info
$(document).ready(function(){
    $('[rel="tooltip"]').tooltip(); 
});

// Parallax scrolling
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
	$("#parallax").css({
		// width: (100 + scroll/10)  + "%",
		top: -(scroll/25)  + "%",
		"-webkit-filter": "blur(" + (scroll/130) + "px)",
		filter: "blur(" + (scroll/130) + "px)"
	});
});

$(function(){
  $('.projectCaption').inview({'viewFactor': 0.7});
  $('.linkCaption').inview({'viewFactor': 0.8});
});