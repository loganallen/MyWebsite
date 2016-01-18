$(function() {
  var showcase = $(".showcase")

  showcase.Cloud9Carousel( {
    yPos: 42,
    yRadius: 32,
    farScale: 0.4,
    mirrorOptions: {
      gap: 12,
      height: 0.2
    },
    buttonLeft: $(".nav > .left"),
    buttonRight: $(".nav > .right"),
    autoPlay: false,
    bringToFront: true,
    onRendered: showcaseUpdated,
    onLoaded: function() {
      showcase.css( 'visibility', 'visible' )
      showcase.css( 'display', 'none' )
      showcase.fadeIn(2000)
    }
  } )

  function showcaseUpdated( showcase ) {
    var title = $('#item-title').html(
      $(showcase.nearestItem()).attr( 'alt' )
    )
  }

  // Simulate physical button click effect
  $('.nav > button').click( function( e ) {
    var b = $(e.target).addClass( 'down' )
    setTimeout( function() { b.removeClass( 'down' ) }, 80 )
  } )

  $(document).keydown( function( e ) {
    switch( e.keyCode ) {
      /* left arrow */
      case 37:
        $('.nav > .left').click()
        break
      /* right arrow */
      case 39:
        $('.nav > .right').click()
    }
  } )
});

window.addEventListener('resize', updateCarouselItems);

function updateCarouselItems(){
 
};

