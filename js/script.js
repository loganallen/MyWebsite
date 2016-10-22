$(document).ready(function() {

  $('#intro_caption').flowtype({
    minimum: 400,
    maximum: 1200,
    minFont: 30,
    maxFont: 45,
    fontRatio: 20
  });

  $('#projects_header').flowtype({
    minimum: 400,
    maximum: 1200,
    minFont: 30,
    maxFont: 45,
    fontRatio: 20
  });
  $('#about_header').flowtype({
    minimum: 400,
    maximum: 1200,
    minFont: 30,
    maxFont: 45,
    fontRatio: 20
  });

  $('.info').flowtype({
    minimum: 200,
    maximum: 500,
    minFont: 20,
    maxFont: 60,
    fontRatio: 9
  });

  var ch = $('#intro_caption').height();
  ch = ch/2 + 20;
  $('#intro_caption').css({'margin-top':'-'+ch+'px'});

  var cw = $('.project_tile').width();
  $('.project_tile').css({'height':cw+'px'});

  $('.info').css({'top':cw/6-10+'px'});
  $('.info_plus').css({'top':cw/2+40+'px'});

  $('.info_plus').click(function(event) {
    var project_id = $(this).parent().parent().attr('id');
    goToProjectPage(project_id);
  });

});


// Element height adjusts on window resize
$(window).resize(function() {

  var ch = $('#intro_caption').height();
  ch = ch/2 + 20;
  $('#intro_caption').css({'margin-top':'-'+ch+'px'});

  var cw = $('.project_tile').width();
  $('.project_tile').css({'height':cw+'px'});
  $('.info').css({'top':cw/6-10+'px'});
  $('.info_plus').css({'top':cw/2+40+'px'});

  var bh = $('#education_wrapper').height();
  $('.about_wrapper').css({'height':bh+'px'});
});

function goToProjectPage(id){
  var project = id.split("_")[0];
  window.location.href = "projects/"+project+".html";
}

