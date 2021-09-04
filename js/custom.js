(function($) {
    $('.menu_bar i').on('click', function() {
        $('.menu_item').animate({
            'opacity' : '1'
        });
    });
    $('.menu_item .close').on('click', function() {
        $('.menu_item').animate({
            'opacity' : '0'
        });
    });
}) (jQuery);



































