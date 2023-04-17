$(function () {
  var $tabCon = $(".content-wrap > .content");
  var $tabMenu = $(".tab-menu > .tab-btn");
  tabVisible(0);

  // 1. 탭메뉴 클릭하면 어떤 메뉴 클릭했는지 알아내서-인덱스 값을 구해서, 2. 같은 인덱스 (순번) 가진 컨텐츠를 보여준다
  $tabMenu.on("click", function (e) {
    e.preventDefault();
    var tabIdx = $(this).index();
    // tab 메뉴 활성화
    tabVisible(tabIdx);
  });

  // function tab-btn
  function tabVisible(index) {
    $tabMenu.removeClass("btn-active");
    $tabMenu.eq(index).addClass("btn-active");
    $tabCon.hide();
    $tabCon.eq(index).show();
  }
});
