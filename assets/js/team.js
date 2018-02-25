

//Slider function
$(document).on('ready', function() {

    //Load team page content
    $.getJSON( "assets/content/team.json", function( data ) {
      $.each( data, function( key, val ) {
        var img_url = val.image_url;
        var name = val.name;
        var role = val.role;
        var description = val.description;

        var htmlContent =`
          <div class="slider-single">
            <img class="slider-single-image" src="`+img_url+`"/>
            <a class="slider-single-download" href="javascript:void(0);">`+name+`</i></a>
            <h1 class="slider-single-title title-header">`+role+`</h1>
            <h1 class="slider-single-title">`+description+` </h1>
            <!--
              Skill list ?
              <a class="slider-single-likes" href="javascript:void(0);">
              <i><img style='width:40px' src='assets/img/logo.png'/></i>
              <p></p>
            -->
            </a>
          </div>
        `;

        $('.slider-content').append(htmlContent);

      });

    var slide = $('.slider-single');
    var slideTotal = slide.length - 1;
    var slideCurrent = -1;

    function slideInitial() {
      slide.addClass('proactivede');
      setTimeout(function() {
        slideRight();
      }, 500);
    }

    function slideRight() {
      if (slideCurrent < slideTotal) {
        slideCurrent++;
      } else {
        slideCurrent = 0;
      }

      if (slideCurrent > 0) {
        var preactiveSlide = slide.eq(slideCurrent - 1);
      } else {
        var preactiveSlide = slide.eq(slideTotal);
      }
      var activeSlide = slide.eq(slideCurrent);
      if (slideCurrent < slideTotal) {
        var proactiveSlide = slide.eq(slideCurrent + 1);
      } else {
        var proactiveSlide = slide.eq(0);

      }

      slide.each(function() {
        var thisSlide = $(this);
        if (thisSlide.hasClass('preactivede')) {
          thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
        }
        if (thisSlide.hasClass('preactive')) {
          thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
        }
      });
      preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
      activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
      proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
    }

    function slideLeft() {
      if (slideCurrent > 0) {
        slideCurrent--;
      } else {
        slideCurrent = slideTotal;
      }

      if (slideCurrent < slideTotal) {
        var proactiveSlide = slide.eq(slideCurrent + 1);
      } else {
        var proactiveSlide = slide.eq(0);
      }
      var activeSlide = slide.eq(slideCurrent);
      if (slideCurrent > 0) {
        var preactiveSlide = slide.eq(slideCurrent - 1);
      } else {
        var preactiveSlide = slide.eq(slideTotal);
      }
      slide.each(function() {
        var thisSlide = $(this);
        if (thisSlide.hasClass('proactivede')) {
          thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
        }
        if (thisSlide.hasClass('proactive')) {
          thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
        }
      });
      preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
      activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
      proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
    }

    function skipSlide(slideNum) {
      slideCurrent = slideNum;
      if (slideCurrent > 0) {
        slideCurrent--;
      } else {
        slideCurrent = slideTotal;
      }

      if (slideCurrent < slideTotal) {
        var proactiveSlide = slide.eq(slideCurrent + 1);
      } else {
        var proactiveSlide = slide.eq(0);
      }
      var activeSlide = slide.eq(slideCurrent);
      if (slideCurrent > 0) {
        var preactiveSlide = slide.eq(slideCurrent - 1);
      } else {
        var preactiveSlide = slide.eq(slideTotal);
      }
      slide.each(function() {
        var thisSlide = $(this);
        if (thisSlide.hasClass('proactivede')) {
          thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
        }
        if (thisSlide.hasClass('proactive')) {
          thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
        }
        if (thisSlide.hasClass('active')) {
          thisSlide.removeClass('preactivede preactive active proactive');
        }
      });
      preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
      activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
      proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
    }

    var left = $('.slider-left');
    var right = $('.slider-right');
    left.on('click', function() {
      slideLeft();
    });
    right.on('click', function() {
      slideRight();
    });
    slideInitial();


    //Auto slide function
    var i =0;
    window.myLoop = function() {

      setTimeout(function () {    //  call a 3s setTimeout when the loop is called
        slideRight();          //  your code here
        i++;                     //  increment the counter
        if (i < 4) {            //  if the counter < 10, call the loop function
          myLoop();             //  ..  again which will trigger another
        }
        else {
          skipSlide(3);
        }
      }, 300)
    }
      $('.teamIcon').click(function(){
          skipSlide(0);
          slideInitial();
      });

  });
});
