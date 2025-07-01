const swiper = new Swiper(".threecards", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 70,

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    868: {
      slidesPerView: 3,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperfourcards = new Swiper(".fourcards", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 70,

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    868: {
      slidesPerView: 3,
    },
    950: {
      slidesPerView: 4,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
