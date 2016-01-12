// Enable tooltip popup showing brief info
$(document).ready(function(){
    $('[rel="tooltip"]').tooltip(); 
});

/* Hide Header on on scroll down */
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

window.addEventListener("resize", hasResized);
var screenWidth;

function hasResized(){
  screenWidth = $(window).width();
}

// Smooth scrolling when links are clicked
$(document).ready(function(){
  $('#myNavbar ul li a').click(function(){
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
  });
  $('#name').click(function(){
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
  });
  $('figcaption a').click(function(){
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
  });
});

var currentProject;

function showProjectInfo(id){
  currentProject = id;
  document.getElementById(id).style.display = 'block';
  var backlay = document.getElementById('fade');
  backlay.style.display = 'block';
  backlay.style.height = document.height();
};

function hideProjectInfo(){
  document.getElementById(currentProject).style.display = 'none';
  document.getElementById('fade').style.display = 'none';
};

$(function() {
  $(".slideshowLabels").on('click', 'span', function() {
    $("#"+currentProject+" .slideshow img").removeClass("opaque");

    var newImage = $(this).index();

    $("#"+currentProject+" .slideshow img").eq(newImage).addClass("opaque");

    $(".slideshowLabels span").removeClass("selected");
    $(this).addClass("selected");
  });
});

$(function(){
    $('.blocks div').inview({'viewFactor': 0.8});
    $('.linkTile div').inview({'viewFactor': 1.0});
    $('#myFooter div').inview({'viewFactor': 1.0});
});

// $(function(){
//   $('.stack').stack();
// });

// Caption Hover for project images
$(function() {
  $('.projectTile').captionHover({
    fx: 'milo',
    headColor: '#000',
    captionColor: '#fff',
    overlay: '#2e5d5a',
  });
});

$(function() {
  
  // $("#down").RisingSun({
  //   timer:1500,duration:300,ease:"easeOutCubic"
  // });
  // $(".linkTile").RisingSun({duration:300,startPosition:1});
  // $(".linkTile").RisingSun({duration:500,scale:0.1,ease:"easeInCubic",startPosition:0.9});
  // $(".linkTile").RisingSun({duration:800,x:50,y:100,ease:"easeOutCubic",startPosition:0.55});
  // $("#popin").RisingSun({
  //   duration:300,scale:0.1,popanime:true,ease:"easeOutCubic"
  // });
  // $("#test").RisingSun({
  //   duration:1200,wipe:"LR",ease:"easeInOutCubic",startPosition:0.6
  // });
  // $("#test").RisingSun({
  //   duration:1200,slide:"LR",ease:"easeInOutCubic",startPosition:0.9
  // });
  // $("#rotatein").RisingSun({
  //   duration:800,scale:0.1,rotate:360,ease:"easeInOutCubic",startPosition:0.7
  // });
});
