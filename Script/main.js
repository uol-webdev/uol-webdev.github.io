window.onload = function () {
    //initialize swiper when document ready
    new Swiper('.swiper-container', {
        direction: 'horizontal',
        centeredSlides: true,
        // go back to first slide after last slide
        loop: true,

        // Pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
};