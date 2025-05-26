import "./style.css";
import Swiper from "swiper/bundle";

const swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 15,
  centeredSlides: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
