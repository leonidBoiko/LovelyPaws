import 'bootstrap/dist/css/bootstrap.min.css';
// Swiper imports
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
import './fonts.css';
// Load Bootstrap JS bundle (includes Modal, Data API, Popper)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import initCareModal from './care';
import navigation from './navigation';
import {includes, includeLogo} from './includes';
import privacyModal from './privacy';
import aboutCollapse from './about-collapse';
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
  // Privacy Modal setup
  privacyModal(); 
  // Initialize Swiper after includes are loaded
  initializeSwiper();
  // About Collapse functionality
  aboutCollapse();
});
