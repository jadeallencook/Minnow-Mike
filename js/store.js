$(function () {
    // cache 
    var $store = $('div#store');
    var $gallary = $('div#photo-gallary');
    var $button = $('h1.directions');
    var $close = $('span#back-to-homepage');
    var $currentImage = $('img#current-image');
    var images = ['side_view', 'poll_notch', 'full_front', 'clamp_view', 'brand_engraving'];
    var current = 0;
    $('.order-now').mousedown(function () {
        $store.css({
            display: 'inline-block'
        });
    });
    $close.mousedown(function () {
        $store.css({
            display: 'none'
        });
    });
    $button.mousedown(function () {
        if ($(this).attr('id') == 'next') current++;
        else current--;
        if (current >= images.length) current = 0;
        else if (current <= 0) current = images.length;
        $currentImage.attr('src', 'images/product/' + images[current] + '.jpg');
    });
});