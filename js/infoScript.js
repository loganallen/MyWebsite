// Enable tooltip popup showing brief info
$(document).ready(function(){
    $('[rel="tooltip"]').tooltip(); 
});

// Parallax scrolling
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
	$("#parallax").css({
		// width: (100 + scroll/10)  + "%",
		top: -(scroll/50)  + "%",
		"-webkit-filter": "blur(" + (scroll/150) + "px)",
		filter: "blur(" + (scroll/150) + "px)"
	});
});

$(function(){
  $('.projectCaption').inview({'viewFactor': 0.7});
  $('.linkCaption').inview({'viewFactor': 0.8});
  $('.nav > button').inview({'viewFactor': 0.6});
});

$(function(){
  $('.projectImage').css('visibility', 'visible')
  $('.projectImage').css('display','none')
  $('.projectImage').fadeIn(4000)
});