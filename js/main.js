$(function () {



    $('.slider__inner').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/slide-left.png" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/slide-right.png" alt=""></button>',
        responsive: [
            {
                breakpoint: 1034,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 610,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


});