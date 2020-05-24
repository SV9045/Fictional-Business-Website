const navabr = document.querySelector('.navbar');
window.addEventListener('scroll', fixNav);

function fixNav() {
  if(window.scrollY > navabr.offsetHeight + 100) {
    navabr.classList.remove('top');
  } else {
    navabr.classList.add('top')
  } 
}
