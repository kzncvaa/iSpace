
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
    if(document.documentElement.scroll>1100){
        $('.wrapper__aside').css({display : `none`});
    }
});

// var anchors = [];
// var currentAnchor = -1;
// var isAnimating  = false;
// $(function(){
//     function updateAnchors() {
//         anchors = [];
//         $('.anchor').each(function(i, element){
//             anchors.push( $(element).offset().top );
//         });
//     }
//     $('body').on('mousewheel', function(e){
//         e.preventDefault();
//         e.stopPropagation();
//         if( isAnimating ) {
//             return false;
//         }
//         isAnimating  = true;
//         if( e.originalEvent.wheelDelta >= 0 ) {
//             currentAnchor--;
//         }else{
//             currentAnchor++;
//         }
//         if( currentAnchor > (anchors.length - 1) 
//            || currentAnchor < 0 ) {
//             currentAnchor = 0;
//         }
//         isAnimating  = true;
//         $('html, body').animate({
//             scrollTop: parseInt( anchors[currentAnchor] )
//         }, 300, 'swing', function(){
//             isAnimating  = false;
//         });
//     });
//     updateAnchors();   
// });

$(window).scroll(function(){
   /* if ($(this).scrollTop() > 5) {
        $('.services__background').css({transform : `translateX(0)`});
    };
    if ($(this).scrollTop() > 400) {
        $('.choise__background').css({transform : `translateX(0)`});
    };
    if ($(this).scrollTop() > 1100) {
        $('.numbers__background').css({transform : `translateX(0)`});
    };
    if ($(this).scrollTop() > 1500) {
        $('.contacts__background').css({transform : `translateX(0)`});
    };*/
    if ($(window).scrollTop() > 3000) {
        $('.wrapper__aside').css({display : `none`});
    }
    else {
        $('.wrapper__aside').css({display : `flex`});
    };
});

