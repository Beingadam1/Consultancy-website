const nav = document.querySelector('.nav-container');
const blob = document.querySelector('.nav-container svg');

gsap.set(blob, {xPercent: -48, x:innerWidth / 2});
nav.addEventListener('mouseover', function(e){
  gsap.to(blob, {duration: 0.2, x: e.clientX, overwrite: 'auto'});
})
nav.addEventListener('mouseleave', function(e){
  gsap.to(blob, {duration: 0.1, x: innerWidth / 2, overwrite: `auto`});
})