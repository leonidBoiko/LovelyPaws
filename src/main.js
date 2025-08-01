import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import '../public/fonts/fonts.css';
import * as bootstrap from 'bootstrap';

// Swiper imports
import 'swiper/css';
import 'swiper/css/pagination';
import initCareModal from './care';
import navigation from './navigation';
import {includes, includeLogo} from './includes';
import initializeSwiper from './swiper';

// Initialize Swiper when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
  // Load includes first
  await includes();
  await includeLogo();
  // Initialize Care Modal
  initCareModal();
  // Navigation setup
  navigation();
  // Initialize Swiper after includes are loaded
  initializeSwiper();
});
