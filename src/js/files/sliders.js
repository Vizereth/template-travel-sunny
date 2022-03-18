import Swiper, { Navigation } from "swiper";

import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

const initTestimonialsSwiper = () => {
  new Swiper(".testimonials__swiper", {
    modules: [Navigation],
    slidesPerView: 1,
    autoHeight: true,
    speed: 800,

    navigation: {
      prevEl: ".testimonials__swiper-btn-prev",
      nextEl: ".testimonials__swiper-btn-next",
      disabledClass: "testimonials__swiper-btn--disabled",
    },

    breakpoints: {
      320: {
        spaceBetween: 250,
        speed: 600,
      },
      480: {
        spaceBetween: 100,
      },
    },
  });
};

function initSliders() {
  if (document.querySelector(".swiper")) {
    initTestimonialsSwiper();
  }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});
