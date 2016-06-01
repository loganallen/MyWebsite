// Parallax scrolling
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
	$(".intro_section").css({
		// width: (100 + scroll/10)  + "%",
		top: -(scroll/50)  + "%",
		"-webkit-filter": "blur(" + (scroll/150) + "px)",
		filter: "blur(" + (scroll/150) + "px)"
	});
});

$(document).ready(function() {
  $('#project_intro').flowtype({
    minimum: 400,
    maximum: 1200,
    minFont: 15,
    maxFont: 30,
    fontRatio: 20
  });
});
