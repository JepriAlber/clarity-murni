$(document).ready(function(){
    
    // -------------slick------------------
    $("#slick-product").not(".slick-initialized").slick({
    // $('#slick-product').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

    //----------sticky------------
    var targetSticky = $('.site-header');
    var rocket = $('.rocket');
    var positionScroll = 0;
    
        $(window).on('scroll',function(){
            var scroll = $(window).scrollTop();
                if(scroll > 0){
                    targetSticky.addClass('stiky-active');
                    if(positionScroll > scroll){
                        targetSticky.addClass('stiky-scroll');
                        rocket.addClass('rocket-up-active');
                        rocket.removeClass('rocket-down-active');
                    }else{
                        targetSticky.removeClass('stiky-scroll');
                        rocket.removeClass('rocket-up-active');
                        rocket.addClass('rocket-down-active');
                    }
                }else{
                    targetSticky.removeClass('stiky-active');
                    targetSticky.removeClass('stiky-scroll');
                    rocket.removeClass('rocket-up-active');
                    rocket.removeClass('rocket-down-active');
                }
            positionScroll =  scroll; 
        });

    //---------navbar humburger---------
    $(".btn-toggle-state").click(function () {
        $("#site-header").toggleClass("toggle-onactive");
    });

    // ------------pop up-------------
    $(".popup-toggle").click(function(){
        $(".popup").toggleClass("popup-active");
    });

    // ---------------auto scroll up-----------
    $('.rocket').click(function(){
        $('html, body').animate({
            scrollTop: $('html').offset().top
         }, 'slow');
    });
    
    //--------alert email------------
    $('.alert-email').hide();
    
    $('#sub-email').click(function(){
        $('.alert-email').show(1000);
    });
    
});