<?php  
function my_theme_enqueue_styles() {
    // Enqueue Swiper CSS
    wp_enqueue_style('swiper-css', 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css', array(), '9.0.0');
    
    // Enqueue theme CSS
    wp_enqueue_style('theme-style', get_theme_file_uri('/dist/assets/css/style.css'), array(), null);
    
    // Enqueue jQuery
    wp_enqueue_script('jquery', 'https://code.jquery.com/jquery-3.6.0.js', array(), '3.6.0', true);

    // Enqueue Swiper JS (only once)
    wp_enqueue_script('swiper-js', 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js', array(), '9.0.0', true);

    // Enqueue theme JS
    wp_enqueue_script('theme-script', get_theme_file_uri('/dist/assets/js/script.js'), array('jquery', 'swiper-js'), null, true);
}

add_action('wp_enqueue_scripts', 'my_theme_enqueue_styles');

// Adobe Fonts
function my_adobe_fonts() {
    ?>
    <script>
        (function(d) {
            var config = {
                kitId: 'mhe5whk',
                scriptTimeout: 3000,
                async: true
            },
            h = d.documentElement, t = setTimeout(function() {
                h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
            }, config.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a;
            h.className += " wf-loading";
            tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
            tk.async = true;
            tk.onload = tk.onreadystatechange = function() {
                a = this.readyState;
                if (f || a && a != "complete" && a != "loaded") return;
                f = true;
                clearTimeout(t);
                try {
                    Typekit.load(config);
                } catch (e) {}
            };
            s.parentNode.insertBefore(tk, s)
        })(document);
    </script>
    <?php
}

add_action('wp_head', 'my_adobe_fonts');






/*========================================================= 
Contact Form 7で自動挿入されるPタグ、brタグを削除
=========================================================*/
add_filter('wpcf7_autop_or_not', 'wpcf7_autop_return_false');
function wpcf7_autop_return_false() {
  return false;
}
