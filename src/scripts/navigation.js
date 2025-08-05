function navigation() {
  const navbarToggler = document.getElementById('nav-toggler');
  const navbarMenu = document.getElementById('nav-menu');
  const navBackground = document.getElementById('nav-bg');
  const links = navbarMenu.querySelectorAll('a');
  const body = document.getElementsByTagName('body')[0];

  function closeNavbar() {
    navbarMenu.classList.add('d-none');
    navBackground.classList.add('d-none');
    body.classList.remove('overflow-hidden');
  }

  links.forEach(link => {
    link.addEventListener('click', e => {
      closeNavbar();
    });
  });

  navBackground.addEventListener('click', () => {
    closeNavbar();
  });

  if (navbarToggler) {
    navbarToggler.addEventListener('click', () => {
      if (navbar) {
        if (navbarMenu.classList.contains('d-none')) {
          navbarMenu.classList.remove('d-none');
          navBackground.classList.remove('d-none');
          body.classList.add('overflow-hidden');
        } else {
          closeNavbar();
        }
      }
    });
  }
}

export default navigation;
