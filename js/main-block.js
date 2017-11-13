$(document).ready(function(){

  $('.block').mouseenter(
    function(){

      $(".block > .block-active").stop().animate({
        opacity: "1"
      }, 300),

      $(".block > .block-active > .text").stop().animate({
        opacity: "1",
        bottom: "-30%"
      }, 300);

    }),

    $('.block').mouseleave(
      function(){

        $(".block > .block-active").stop().animate({
          opacity: "0"
        }, 300),

        $(".block > .block-active > .text").stop().animate({
          opacity: "0",
          bottom: "-100%"
        }, 300);

      });


});
