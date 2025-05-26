import "./style.css";
import Swiper from "swiper/bundle";
import { homepage } from "./pages/home";
import { detailPage } from "./pages/detail";
import { pageDetail } from "./pages/page-detail";
import { pembayaranPage } from "./pages/pembayaran";

const routes = {
  "/": homepage,
  "/detail": detailPage,
  "/page-detail": pageDetail,
  "/pembayaran": pembayaranPage,
};

function router() {
  const path = location.hash.replace("#", "") || "/";
  const page = routes[path] || (() => `<h2>404 - Not Found</h2>`);
  document.getElementById("app").innerHTML = page();
}

window.addEventListener("load", router);
window.addEventListener("hashchange", router);

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
