
//Load all the json content
$(document).ready(function(){

  //Load about page content
  $.getJSON( "assets/content/about.json", function( data ) {
    $.each( data, function( key, val ) {
      $('.introText').html(val);
    });
  });


});
