function navigation() {
  const navbarToggler = document.getElementById('nav-toggler');
  const navbarMenu = document.getElementById('nav-menu');
  const links = navbarMenu.querySelectorAll('a');

  links.forEach(link => {
    link.addEventListener('click', event => {
      navbarMenu.classList.add('d-none');
    });
  });

  if (navbarToggler) {
    navbarToggler.addEventListener('click', () => {
      if (navbar) {
        if (navbarMenu.classList.contains('d-none')) {
          navbarMenu.classList.remove('d-none');
        } else {
          navbarMenu.classList.add('d-none');
        }
      }
    });
  }
}

export default navigation;