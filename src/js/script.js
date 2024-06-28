jQuery(function ($) {
    // アコーディオンを初期状態で閉じる
    document.querySelectorAll(".js-accordion").forEach(function (elem) {
        elem.classList.remove("open");
        elem.addEventListener("click", function () {
            elem.classList.toggle("open");
            // 次のfaq__itemのmargin-topを変更
            const nextItem = elem.closest(".faq__item").nextElementSibling;
            if (nextItem && nextItem.classList.contains("faq__item")) {
                if (elem.classList.contains("open")) {
                    if (window.innerWidth <= 768) {
                        nextItem.style.marginTop = "20px"; // 768px以下のとき
                    } else {
                        nextItem.style.marginTop = "40px"; // 768px以上のとき
                    }
                } else {
                    nextItem.style.marginTop = "8px"; // 閉じたときのデフォルト
                }
            }
        });
    });

    // ウィンドウリサイズ時にも適用
    window.addEventListener("resize", function () {
        document.querySelectorAll(".js-accordion").forEach(function (elem) {
            const nextItem = elem.closest(".faq__item").nextElementSibling;
            if (nextItem && nextItem.classList.contains("faq__item")) {
                if (elem.classList.contains("open")) {
                    if (window.innerWidth <= 768) {
                        nextItem.style.marginTop = "20px"; // 768px以下のとき
                    } else {
                        nextItem.style.marginTop = "40px"; // 768px以上のとき
                    }
                }
            }
        });
    });



      ////////////
  // コンタクト 未入力エラー
  ////////////

  $(document).ready(function () {
    $(".js-submit").on("click", function (event) {
      var form = document.getElementById("form");
      var requiredElements = form.querySelectorAll("[required]");
      var hasRequiredFields = false;
      var inquiryCheckboxes = form.querySelectorAll(
        'input[name="お問合せ項目"]'
      );

      // 必須項目のクラスとチェックボックスの選択状態をチェック
      requiredElements.forEach(function (element) {
        if (element.type === "checkbox") {
          if (!element.checked) {
            element.classList.add("required");
            hasRequiredFields = true;
          } else {
            element.classList.remove("required");
          }
        } else {
          if (element.value.trim() === "") {
            element.classList.add("required");
            hasRequiredFields = true;
          } else {
            element.classList.remove("required");
          }
        }
      });


      // .requiredが一つでもあるかをチェック
      var hasAnyRequiredField = form.querySelector(".required") !== null;

      // .sub-contact__errorの表示制御
      var errorElement = $(".sub-contact__error");
      errorElement.toggleClass("active", hasAnyRequiredField);

      // .breadcrumb__item--errorの表示制御
      var breadcrumbErrorElement = $(".breadcrumb__item--error");
      breadcrumbErrorElement.toggleClass("active", hasAnyRequiredField);

      if (hasAnyRequiredField) {
        event.preventDefault(); // バリデーションエラー時はデフォルトの送信を阻止
      } else {
        // 未入力項目がない場合の処理
        window.location.href = "contact-thanks.html"; // ページ遷移
      }
    });
  });


  const swiper = new Swiper(".swiper", {
    loop: true,
    // ページネーション
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // 前後の矢印
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
});
// 消さない

