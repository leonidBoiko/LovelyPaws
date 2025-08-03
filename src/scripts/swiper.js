import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';

function initializeSwiper() {
  new Swiper('.mySwiper', {
    modules: [Pagination, Autoplay],
    spaceBetween: 30,
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
}

export default initializeSwiper;
