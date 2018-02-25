

//Timeline function
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

// Prevent scrolling
document.body.addEventListener('touchstart', function(e){
	// allow clicks on links within the moveable area
	if($(e.target).is('a, iframe')) {
		return true;
	}
	e.preventDefault();
});


document.body.addEventListener('touchmove', function(e){
	e.preventDefault();
});



//Load all the json content
$(document).ready(function(){

  var json =[];

  //Load achievement page content
  $.getJSON( "assets/content/achievement.json", function( data ) {
    $.each( data, function( key, val ) {
      var title = val.title;
      var description = val.description;
      var startDate = val.startDate;
      var img = val.achievement_img;
      var label = val.achievement_label;

      json.push({
        title: title,
        description : description,
        startDate : new Date(startDate),
        achievement_img:img,
        achievement_label:label
      });
    });
  }).done(function() {
    //Timeline configuration
    $("#timeline").timeCube({
      data: json,
      granularity: "year",
      startDate: new Date('January 31, 2016 10:20:00 pm GMT+0'),
      endDate: new Date('September 30, 2018 02:20:00 am GMT+0'),
      nextButton: $("#next-link"),
      previousButton: $("#prev-link"),
      showDate: true
    });
  });

});


//Load json data
var json = [

];
