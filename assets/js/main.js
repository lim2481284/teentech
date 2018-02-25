
//Detect screen size changing
$(window).resize(function() {
  if(!( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )) {
    location.reload();
  }
});

//Wait for all resource load first
$(window).load(function(){

  //Loader fade out function
  $('.logoGif').addClass('gone');
  $('.loader').delay(500).fadeOut(700);


  //Reset scroll
  $('html,body').animate({
     scrollTop: $('.body').offset().top
  },100);

  //Handle user scrolling input : later
  $(window).bind('mousewheel DOMMouseScroll', function(event){
      if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {

      }
      else {

      }
  });


  /*==========================================
        Navigation function : auto scroll
  ===========================================*/

  //Declaration
  var about = $('.body');
  var team = $('.teamSection');
  var portfolio = $('.portfolioSection');
  var achievement = $('.achievementSection');
  var contact = $('.contactSection');


  //Onclick handle

  $('.sideBarIcon').click(function(){
      $('.boxRow').removeClass('grow');
      $('.sendBtn').removeClass('show');
  });

  $('.aboutIcon').click(function(){

    $('html,body').animate({
       scrollTop: about.offset().top
    });

    $('.iconImg').each(function(i, obj) {
      var imgName = $(this).attr('id');
      $(this).attr('src','assets/img/'+imgName+'.png');
    });

    $('.active').removeClass('active');
    $(this).addClass('active');
    $('#about_icon').attr('src','assets/img/about_icon_active.png');

  });

  $('.teamIcon').click(function(){
    $('html,body').animate({
       scrollTop: team.offset().top
    });

    $('.iconImg').each(function(i, obj) {
      var imgName = $(this).attr('id');
      $(this).attr('src','assets/img/'+imgName+'.png');
    });

    $('.active').removeClass('active');
    $(this).addClass('active');
    $('#team_icon').attr('src','assets/img/team_icon_active.png');

  });

  $('.portfolioIcon').click(function(){

    $('html,body').animate({
       scrollTop: portfolio.offset().top
    },function(){
      $('.boxRow').each(function() {

        //Random popout time
        var min = 0;
        var max = 1000;
        // and the formula is:
        var random_time = Math.floor(Math.random() * (max - min + 1)) + min

        var box = $(this);
        window.setTimeout(function(){
            box.addClass('grow');
        }, random_time);

      });
    });

    $('.iconImg').each(function(i, obj) {
      var imgName = $(this).attr('id');
      $(this).attr('src','assets/img/'+imgName+'.png');
    });

    $('.active').removeClass('active');
    $(this).addClass('active');
    $('#portfolio_icon').attr('src','assets/img/portfolio_icon_active.png');

  });

  $('.achievementIcon').click(function(){

    $('html,body').animate({
       scrollTop: achievement.offset().top
    });

    $('.iconImg').each(function(i, obj) {
      var imgName = $(this).attr('id');
      $(this).attr('src','assets/img/'+imgName+'.png');
    });

    $('.active').removeClass('active');
    $(this).addClass('active');
    $('#achievement_icon').attr('src','assets/img/achievement_icon_active.png');

  });

  $('.contactIcon').click(function(){

    $('html,body').animate({
       scrollTop: contact.offset().top
    },function(){
      window.setTimeout(function(){
          $('.sendBtn').addClass('show');
      }, 500);
      window.setTimeout(function(){
          $('.sendBtn').addClass('animate');
      }, 1000);
    });

    $('.iconImg').each(function(i, obj) {
      var imgName = $(this).attr('id');
      $(this).attr('src','assets/img/'+imgName+'.png');
    });

    $('.active').removeClass('active');
    $(this).addClass('active');
    $('#contact_icon').attr('src','assets/img/contact_icon_active.png');



  });

});
