(function($) {
    $('.menu_bar i').on('click', function() {
        $('.menu_item').animate({
            'right' : '0'
        });
    });
    $('.menu_item .close').on('click', function() {
        $('.menu_item').animate({
            'right' : '-100%'
        });
    });
}) (jQuery);



































