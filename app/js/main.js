const burger = document.querySelector('.header__burger');
const navigation = document.querySelector('.navigation');
const navigationClose = document.querySelector('.navigation__cross');

burger.addEventListener('click', () => {
    navigation.classList.add('navigation--active');
});

navigationClose.addEventListener('click', () => {
    navigation.classList.remove('navigation--active');
});

const sliderThumbs = new Swiper('.slider-thumbs', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 3,
    centeredSlides: true
});

//Музыка
try {
    const mute = document.querySelector('.mute__input');
    const audio = new Audio('audio/waterTower.mp3');
    const checkMute = () => {
        if (mute.checked) {
            audio.play().catch(() => {
                mute.checked = false;
            });
        } else {
            audio.pause();
        }
    };

    if (mute) {
        setTimeout(checkMute, 2000);
    }

    mute.addEventListener('change', checkMute);
} catch {
    console.log('На этой странице нет музыки');
}

sliderThumbs.on('click', (swiper) => {
    swiper.slideTo(swiper.clickedIndex);
});

const sliderMain = new Swiper('.main__slider', {
    loop: true,
    loopedSlides: 4,
});

sliderThumbs.controller.control = sliderMain;
sliderMain.controller.control = sliderThumbs;

const videos = document.querySelectorAll('video');

sliderMain.on('slideChange', () => {
    for (let i = 0; i < videos.length; i++) {
        videos[i].pause();
    }
});

try {
    const pagination = document.querySelector('.pagination');
    const paginationButton = document.querySelector('.pagination__arrow');

    paginationButton.addEventListener('click', () => {
    pagination.classList.toggle('pagination--active');
    });
} catch {
    console.log('На этой странице нет пагинации');
}