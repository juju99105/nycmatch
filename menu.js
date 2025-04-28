const hamburger = document.getElementById('hamburger');
const navOverlay = document.getElementById('nav-overlay');

hamburger.addEventListener('click', () => {
  navOverlay.classList.toggle('open');
});
