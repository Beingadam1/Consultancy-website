// On scroll
window.addEventListener('scroll', function() {
  let nav = document.querySelector('nav');
  let windowPosition =  window.scrollY > 10;

  nav.classList.toggle('active', windowPosition);
});