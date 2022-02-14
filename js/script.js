let swiper1 = new Swiper(".swiperHero", {
    pagination: {
        el: ".hero-pagination",
    },
});

let swiper2 = new Swiper(".swiperLook", {
    centeredSlides: false,
    navigation: {
        nextEl: ".lookNext",
        prevEl: ".lookPrev",
    },
    keyboard: true,

    breakpoints: {
        // when window width is >= 320px
        1920: {
            slidesPerView: 2,
            spaceBetween: 64,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 64,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 64,
        },
    }
});

let swiper3 = new Swiper(".swiperAnno", {
    slidesPerView: 1,
    spaceBetween: 0,
    initialSlide : 1,
    centeredSlides: false,
    navigation: {
        nextEl: ".annoNext",
        prevEl: ".annoPrev",
    },
    keyboard: true,

    1920: {
        slidesPerView: 1,
    },

    1024: {
        slidesPerView: 1,
    },

    768: {
        slidesPerView: 2,
    },

});

let swiperBottom = new Swiper(".swiperBottom", {
    initialSlide : 1,
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-button-next-bottom",
        prevEl: ".swiper-button-prev-bottom",
    },
});

let swiperTop = new Swiper(".swiperTop", {
    navigation: {
        nextEl: ".swiper-button-next-bottom",
        prevEl: ".swiper-button-prev-bottom",
    },
    initialSlide : 1,
    spaceBetween: 30,
    centeredSlides: true,
    slideActiveClass: "swiper-slide-top-active",
    // loop: true,
    thumbs: {
        swiper: swiperBottom,
        multipleActiveThumbs: false
    },
    breakpoints: {
        // when window width is >= 320px
        1920: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 1,
        },
    }
});