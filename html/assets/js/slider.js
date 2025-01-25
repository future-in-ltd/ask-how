var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: true,
  scrollbar: {
    el: ".bar",
    hide: false,
    draggable: true,
  },

  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3.7,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".partners-list", {
  freeMode: true,
  // Default parameters
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});
