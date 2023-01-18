const swiper_story = new Swiper('.story__swiper', {
  // slidesPerView: 'auto',
  slidesPerView: 1,
  allowTouchMove: false,
  watchOverflow: true,
  loop: true,
  spaceBetween: 20,
  autoHeight: true,
  autoplay: {
    delay: 10000,
  },
  speed: 2000,
  breakpoints: {
    // when window width is >= 992px
    100: {
      slidesPerView: 1,
    },
    844: {
      slidesPerView: 4,
    },
    1069: {
      slidesPerView: 5,
    },
  },
});

// $('.swiper-button-prev').remove();
// $('.swiper-button-next').remove();

// const swiper_sellers = new Swiper('.seller__slider', {
//   loop: false,
//   slidesPerView: 3,
//   grid: {
//     rows: 3,
//   },
//   spaceBetween: 30,
//   watchOverflow: true,
//   navigation: {
//     nextEl: '.seller__slider-bttn-prev',
//     prevEl: '.seller__slider-bttn-next',
//   },
// });

// swiper2.loopDestroy();

var swiper = new Swiper('.seller__slider', {
  allowTouchMove: false,
  slidesPerView: 1,
  grid: {
    rows: 2,
  },
  spaceBetween: 36,
  navigation: {
    nextEl: '.seller__slider-bttn-next',
    prevEl: '.seller__slider-bttn-prev',
  },
  breakpoints: {
    // when window width is >= 992px
    340: {
      slidesPerView: 1,
      grid: {
        rows: 2,
      },
    },
    460: {
      slidesPerView: 1.3,
      grid: {
        rows: 2,
      },
    },
    740: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
    },
    1036: {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
    },
  },
});
