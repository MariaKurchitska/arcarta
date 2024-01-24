$('[data-modal="consultation"]').on('click',function() {
    $('.overlay, #consultation').fadeIn('slow');
});
$('.modal__close').on('click', function() {
    $('.overlay, #consultation').fadeOut('slow');
});

$('.feed-form').validate();
$('#insight form').validate();

new WOW().init();

    $('.info-item__link').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.info-item__content').eq(i).toggleClass('info-item__content_active');
            $('.info-item__list').eq(i).toggleClass('info-item__list_active');
        })
    });

    $('.info-item__back').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.info-item__content').eq(i).toggleClass('info-item__content_active');
            $('.info-item__list').eq(i).toggleClass('info-item__list_active');
        })
    });