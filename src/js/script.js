
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
    document.querySelectorAll('.faq-question').forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.nextElementSibling;
            const icon = item.querySelector('.faq-icon');
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
            icon.classList.toggle('open');
        });
    });

});
