
$(document).ready(function () {
    $('.call').click(function (e) { 
        $('.alert__wrapper__call').css({display : `flex`});
    });
    $('.aboutus-alert').click(function (e) { 
        $('.alert__wrapper__aboutus').css({display : `flex`});
    });
    $('.works-alert').click(function (e) { 
        $('.alert__wrapper__works').css({display : `flex`});
    });
    $('.aboutus__menu').click(function (e) { 
        console.log('alert')
        $('.wrapper__menu').css({display : `flex`});
    });
    $('.language__active').click(function (e) { 
        $('.language__items').toggleClass('flex');
    });
    $('.btn__close').click(function (e) { 
        console.log('close')
        $('.alert').css({display : `none`});
        $('.wrapper__menu').css({display : `none`});
    });
    $('.links').click(function (e) { 
        $('.wrapper__menu').css({display : `none`});
    });
    $('.menulogo').click(function (e) { 
        $('.wrapper__menu').css({display : `none`});
    });
    if(document.documentElement.scroll>1100){
        $('.wrapper__aside').css({display : `none`});
    }


$(window).scroll(function(){
    if ($(window).scrollTop() > 3000) {
        $('.wrapper__aside').css({display : `none`});
    }
    else {
        $('.wrapper__aside').css({display : `flex`});
    };
});


    if($(window).innerWidth() <= 480){
        $(document).scroll(function () {
            var y = $(this).scrollTop();
            var x = $(".jumbotron__content").position();
            if (y > x.top) {
                $('.aboutus__nav').fadeIn().css({"position":"fixed", "background" : "#fff", "z-index" : "200"});
                
            } else {
                $('.aboutus__nav').css({"position" : "static", "background" : "none"});
            }
        });
    }

    var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

    if(isSafari){
        $('.container').css({zoom : '1.2'});
        $('.wrapper__aside').css({height : '100vh'});
    }

});

