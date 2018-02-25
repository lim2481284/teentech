
$(document).ready(function(){

  //Hover effect
  $(document).on('mouseover','.portfolio_img ',function(){
    $('.boxRow').css('opacity','0.5');
    $(this).parent().css('opacity','1');
  });
  $(document).on('mouseout','.boxRow',function(){
    $('.boxRow').css('opacity','1');
  });


  //Handle onclick popup function
  $(document).on('click','.boxRow',function(){
    var popup = $(this).attr('popup-target');
    $('.'+popup).fadeIn(400);
  });

  $(document).on('click','.backBtn',function(){
    $(this).parent().parent().parent().fadeOut(300);

  });


  /*============================
        Metrix function
  ===========================*/

  //Get metrix configuration
  $.getJSON( "assets/content/portfolio_metrix.json", function( data ) {
    var column = data.column;
    var row = data.row;


    //Create meticx coloumn
    for(var i=0; i<column;i++){
      $('.portfolioBox').append(`
          <div class='boxColumn column_`+i+`'>
            <div class='column_row column_row_`+i+`'></div>
          </div>
      `);

      //Check even and odd row size
      var row_size = row;
      if(i%2==1){
          row_size=row-1;
      }

      //Create metcix row
      for(var j =0; j<row_size;j++){
        $('.column_row_'+i).append(`
            <div class='boxRow row_`+j+`'>
            </div>
        `);

      }

    }

    //create the random matrix array
    var arr_size = 0;
    var arr = [];
    for(var i = 0; i<= column;i++){
      var row_arr = [];
      for(var j =0; j <=row;j++){
        row_arr.push(0);
        arr_size++;
      }
      arr.push(row_arr);
    }



    //Get all json data
    $.getJSON( "assets/content/portfolio.json", function( data ) {
      var data_size = data.length;
      if(data_size > arr_size){
        alert("Too many portfolio, please increase matrix size!");
      }
      else {
        var count=1;

        //Get all json data
        $.each( data, function( key, val ) {
          var title = val.title;
          var description = val.description;
          var img = val.main_img;
          var imgList = val.img_list;


          //Insert popup
          var popHTML = `
            <div class='col-sm-12 portfolioPopup popup_`+count+`'>
              <div class='portfolioPopupBox'>

                <div class='col-sm-12 popupGallery'>
                  <div class="swiper-container">
                      <div class="swiper-wrapper">
          `;
          popHTML+=`
                      <div class="swiper-slide">
                        <img src='`+img+`' class='sliderImg'>
                      </div>
          `;
          $.each( imgList, function( key, val ) {
              var img_url = val.img_url;
              popHTML+=`
                          <div class="swiper-slide">
                            <img src='`+img_url+`' class='sliderImg'>
                          </div>
              `;
          });
          popHTML+=`
                      </div>
                      <div class="swiper-pagination"></div>
                      <div class="swiper-button-prev"></div>
                      <div class="swiper-button-next"></div>
                    </div>
                  </div>
                  <div class='col-sm-12 popupTitle'>
                    `+title+`
                  </div>
                  <div class='col-sm-12 popupDescription'>
                    `+description+`
                  </div>
                  <div class='col-sm-12 backSection'>
                    <button class='btn btn-default backBtn'>Back</button>
                  </div>
              </div>
            </div>
          `;
          $('.portfolioContent').append(popHTML);

          //Insert bubble randomly
          var check = 1;
          while(check==1)
          {

              //Get random x and y value
              var ran_column = Math.floor(Math.random() * column) + 1 ;
              ran_column--;
              var row_size = row;
              if(ran_column%2==1){
                row_size--;
              }
              var ran_row = Math.floor(Math.random() * row_size) + 1 ;
              ran_row--;

              //Check if value being used before or not
              if(arr[ran_column][ran_row]==0){
                  arr[ran_column][ran_row] = 1;
                  check++;

                  //Insert element into the metrix
                  $('.column_row_'+ran_column).find('.row_'+ran_row).append(`
                      <div class='portfolio_img portfolio_img_`+count+`'/>
                  `);

                  //Insert tooltip
                  $('.column_row_'+ran_column).find('.row_'+ran_row).attr('data-toggle',"tooltip");
                  $('.column_row_'+ran_column).find('.row_'+ran_row).attr('title',title);
                  $('.column_row_'+ran_column).find('.row_'+ran_row).attr('data-placement',"bottom");
                  $('.column_row_'+ran_column).find('.row_'+ran_row).attr('popup-target',"popup_"+count);

                  var img_height = $('.portfolio_img').height();
                   $('.portfolio_img').width(img_height);

                  //Insert background image
                  $('.portfolio_img_'+count).css('background-image', 'url(' + img + ')');
                  $('.portfolio_img_'+count).css('background-size', 'cover');
                  $('.portfolio_img_'+count).css('background-position', 'center');


                  //Tooltip function
                   $('[data-toggle="tooltip"]').tooltip();

                  count++;
              }
          }

        });
      }

    }).done(function(){
      //initialize swiper when document ready

      var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })

      $('.portfolioPopup').hide();
    });


    //Adjust metrix size
    var column_width = 100/column;
    var row_height = 100/row;
    $('.boxColumn').width(column_width+'%');
    $('.boxRow').css('height',row_height+'%');
  });

});
