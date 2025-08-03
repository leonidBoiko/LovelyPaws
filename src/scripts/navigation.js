function navigation() {
  const navbarToggler = document.getElementById('nav-toggler');
  const navbarMenu = document.getElementById('nav-menu');
  const navBackground = document.getElementById('nav-bg');
  const links = navbarMenu.querySelectorAll('a');
  const body = document.getElementsByTagName("body")[0];

  links.forEach(link => {
    link.addEventListener('click', event => {
      navbarMenu.classList.add('d-none');
      navBackground.classList.add('d-none');
      body.classList.remove('overflow-hidden');
    });
  });

  if (navbarToggler) {
    navbarToggler.addEventListener('click', () => {
      if (navbar) {
        if (navbarMenu.classList.contains('d-none')) {
          navbarMenu.classList.remove('d-none');
          navBackground.classList.remove('d-none');
          body.classList.add('overflow-hidden');
        } else {
          navbarMenu.classList.add('d-none');
          navBackground.classList.add('d-none');
          body.classList.remove('overflow-hidden');
        }
      }
    });
  }
}

export default navigation;