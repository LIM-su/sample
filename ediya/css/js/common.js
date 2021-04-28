$(document).ready(function () {

    $(".dp2,.dp2_bg").hide();

    $(".gnb>li").mouseenter(function () {
        $(".dp2,.dp2_bg").stop().slideDown();
    });
    $(".gnb>li").mouseleave(function () {
        $(".dp2,.dp2_bg").stop().slideUp();
    });
   
     $('.sns_banner').bxSlider({
    
         auto:true,
         pager:false,
         moveSlides:1,
         maxSlides:5,
         slideWidth:240,

});
  });


 $(window).scroll(function () {
        $('.ani_stop').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() * .3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).removeClass('ani_stop');
            }
            if (bottom_of_window < bottom_of_object) {
                $(this).addClass('ani_stop');
            }
        });
    });











