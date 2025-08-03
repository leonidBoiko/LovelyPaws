function aboutCollapse() {
  const textBlock = document.getElementById('about-collapsible-content');
  const toggleBtn = document.getElementById('about-collapsible-button');

  toggleBtn.addEventListener('click', () => {
    const isExpanded = textBlock.classList.toggle('about-expanded');
    toggleBtn.textContent = isExpanded ? 'Show less' : 'Show more';
  });
}

export default aboutCollapse;
