$(() => {

    $('.slider__items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinity: false,
        asNavFor: '.slider__small-items',
        prevArrow: '<button class="slick__arrow slick__prev"><img src="images/icons/prev-arrow.svg" alt=""></button>',
        nextArrow: '<button class="slick__arrow slick__next"><img src="images/icons/next-arrow.svg" alt=""></button>',
    });

    $('.slider__small-items').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider__items',
        arrows: false,
        focusOnSelect: true,
        infinity: false,
    });
    

});