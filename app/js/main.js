const sliderThumbs = new Swiper('.slider-thumbs', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 3,
    centeredSlides: true
});

sliderThumbs.on('click', (swiper) => {
    swiper.slideTo(swiper.clickedIndex)
})

const sliderMain = new Swiper('.main__slider', {
    loop: true,
    loopedSlides: 4,
});

sliderThumbs.controller.control = sliderMain;
sliderMain.controller.control = sliderThumbs;