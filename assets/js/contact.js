
//Load all the json content
$(document).ready(function(){


  //Load contact page content
  $.getJSON( "assets/content/contact.json", function( data ) {

    var location = data.location;
    var email = data.email;
    var phone = data.phone;

    $('.addressInfo').html(location);
    $('.emailInfo').html(email);
    $('.phoneInfo').html(phone);

    $('.sendMailButton').attr('href','mailto:'+email)
  });

});
