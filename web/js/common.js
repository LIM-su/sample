// JavaScript Document

$(document).ready(function () {


    //스크롤트리거
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



    // 메인슬라이드
    $(".mv").bxSlider({
        auto: true
    });



    // 모바일 메뉴    
    $(".m_menu").click(function () {
        $(".mgnb_wrap").animate({
            left: '0'
        });
    });

    $(".close").click(function () {
        $(".mgnb_wrap").animate({
            left: '100%'
        });
    });



    // 아코디언 슬라이드
    var m = matchMedia("screen and (min-width:1024px)");
    if (m.matches) {
        $("#room ul li:nth-child(1)").addClass("active");
        $("#room ul li").mouseenter(function () {
            $(this).addClass("active").siblings().removeClass("active");
        });
    } else {
        $("#room ul li").removeClass("active");
    }



});
