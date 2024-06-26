
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  //accordion
  document.querySelectorAll(".js-accordion").forEach(function (elem) {
    elem.classList.remove("open"); // これで最初に開いている状態を防ぐ
    elem.addEventListener("click", function () {
        elem.classList.toggle("open");
    });
});


});
