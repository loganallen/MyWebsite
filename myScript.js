// Enable tooltip popup showing brief info
$(document).ready(function(){
    $('[rel="tooltip"]').tooltip(); 
});

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 10;
var navbarHeight = $('nav').outerHeight();

// Make variable didScroll true if user scrolls
$(window).scroll(function(event){
    didScroll = true;
});

// Check for scrolling every 250ms
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

// Display navBar if scroll up, hide it if scroll down
function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
      return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('nav').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('nav').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

// var main = function(){
// 	$('#myFooter p').click(function(){
//      //$('<div id="happiness">What the flock</div>').appendTo('#myFooter');
//   });
// };

// $(document).ready(main);

