$(document).ready(function(){
    //----------sticky------------
    var targetSticky = $('.site-header');
    var positionScroll = 0;
        $(window).on('scroll',function(){
            var scroll = $(window).scrollTop();
                if(scroll > 0){
                    targetSticky.addClass('stiky-active');
                    if(positionScroll > scroll){
                        targetSticky.addClass('stiky-scroll');
                    }else{
                        targetSticky.removeClass('stiky-scroll');
                    }

                }else{
                    targetSticky.removeClass('stiky-active');
                    targetSticky.removeClass('stiky-scroll');
                }
            positionScroll =  scroll;  
        });
    //---------navbar humburger---------
    $(".btn-toggle-state").click(function () {
        $("#site-header").toggleClass("toggle-onactive");
    });

});