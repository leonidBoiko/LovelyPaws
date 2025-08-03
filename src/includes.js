const logo = `
<img src="/media/logo.svg" alt="Site Logo" class="logo" />`

async function includeLogo() {
  const includeEls = document.querySelectorAll('[data-logo-include]');
  const includePromises = Array.from(includeEls).map(async el => {
    el.innerHTML = logo;
  });

  // Wait for all includes to finish
  await Promise.all(includePromises);
}

async function includes() {
  const includeEls = document.querySelectorAll('[data-include]');
  const includePromises = Array.from(includeEls).map(async el => {
    const file = el.getAttribute('data-include');
    const res = await fetch(file);
    const html = await res.text();
    el.innerHTML = html;
  });

  // Wait for all includes to finish
  await Promise.all(includePromises);
}

export {includes, includeLogo};