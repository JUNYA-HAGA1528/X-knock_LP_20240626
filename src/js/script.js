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





//   const swiper = new Swiper(".swiper", {
//     loop: true,
//     // ページネーション
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     // 前後の矢印
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     // 自動再生
//     autoplay: {
//         delay: 5000, // スライドが切り替わるまでの遅延時間（ミリ秒）
//         disableOnInteraction: false, // ユーザーの操作後も自動再生を続ける
//     },
// });



  
});
// 消さない

