function teamSlider() {
    var swiper = new Swiper('.team .swiper-container', {
        slidesPerView: 2,
        spaceBetween: 50,
        speed: 1000,
        loop: true,
        navigation: {
            nextEl: '.team .swiper-button-next',
            prevEl: '.team .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,

            },
            480: {
                slidesPerView: 2,
                spaceBetween: 0
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 50
            }
        }
    });
}


$(document).ready(function() {
    teamSlider()


    $(".offer__tab").click(function() {
        let path = $(this).attr("data-tab-path")
        $(".offer__tab").removeClass("offer__tab--active")
        $(this).addClass("offer__tab--active")
        $(`.offer__content`).removeClass("offer__content--active")
        $(`.offer__content[data-content-path='${path}']`).addClass("offer__content--active")
    })

    $(".our-work__item-show").click(function() {
        if ($(this).hasClass('our-work__item-show--active')) {
            $(this).removeClass("our-work__item-show--active")
        } else {
            $(".our-work__item-show").removeClass("our-work__item-show--active")
            $(this).addClass("our-work__item-show--active")
        }

    })

})