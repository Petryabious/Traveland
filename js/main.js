$(document).ready(function(){
    $(".offers__items").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        arrow: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1110,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 889,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000
                }
            },
        ]
    });

    $(".menu__burger").click(function (event) { 
        $(".menu__burger, .header__menu").toggleClass('active');
        $("body").toggleClass('lock');
    });
});