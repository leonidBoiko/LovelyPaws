import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import '../public/fonts/fonts.css';

// Swiper.js imports
import 'swiper/css';
import 'swiper/css/pagination';
import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';

// Encapsulate Swiper initialization
function initializeSwiper() {
  new Swiper('.mySwiper', {
    modules: [Pagination, Autoplay],
    spaceBetween: 30,
    slidesPerView: 3,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

// Initialize Swiper when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
  const includeEls = document.querySelectorAll('[data-include]');
  const includePromises = Array.from(includeEls).map(async el => {
    const file = el.getAttribute('data-include');
    const res = await fetch(file);
    const html = await res.text();
    el.innerHTML = html;
  });

  // Wait for all includes to finish
  await Promise.all(includePromises);

  // Initialize Swiper after includes are loaded
  initializeSwiper();
});