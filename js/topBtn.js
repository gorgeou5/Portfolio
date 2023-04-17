$(function () {
  let $win = $(window);
  let $btnTop = $(".to-top");
  $win.on("scroll", function () {
    var scTop = $(this).scrollTop();
    if (scTop >= 550) {
      $btnTop.html("<span>&#8593;</span>");
      $btnTop.addClass("active");
    } else if (scTop < 500) {
      $btnTop.removeClass("active");
    }
  });

  //   topBtn on event
  $btnTop.on("click", function () {
    // $('html', 'body').animate({},1000, function(){} <<callback함수 위의 동작이 다 끝나면 된다);
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500,
      function () {
        $btnTop.hide();
      }
    );
  });
});
