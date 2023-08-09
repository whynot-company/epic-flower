$(document).ready(function(){
    $('.slider').slick({
        infinite: true, // Нескінченний слайдер
        slidesToShow: 5, // Кількість слайдів, які показуються одночасно
        slidesToScroll: 5, // Кількість слайдів, які пересуваються за один раз
        dots: true,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    arrows: {
                        prevBtn: $('#prevBtn'),
                        nextBtn: $('#nextBtn')
                    },
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: {
                        prevBtn: $('#prevBtn'),
                        nextBtn: $('#nextBtn')
                    }
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 359,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]
        // Додайте ваші додаткові параметри та налаштування за потребою
    });
});

$(document).ready(function(){
    $('.elite-slides').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: true,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 4,
                    prevBtn: $('#prevBtns'),
                    nextBtn: $('#nextBtns')
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    prevBtn: $('#prevBtns'),
                    nextBtn: $('#nextBtns')
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 359,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]
    });
});
