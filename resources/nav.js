const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.burger');
const menuText = document.querySelector('.menu-text');
const closeText = document.querySelector('.close-text');

navToggle.addEventListener('click', () => {
    primaryNav.classList.toggle('primary-navigation-visible');
    navToggle.classList.toggle('close-symbol');
    menuText.classList.toggle('menu-text-off');
    closeText.classList.toggle('close-text-on');
    
    const visibility = navToggle.getAttribute('aria-expanded');
    if (visibility === "false"){
        navToggle.setAttribute('aria-expanded', true)
    } else {
        navToggle.setAttribute('aria-expanded', false)
    }
})

/*to minimise transition when resizing screen [its not really necessary]*/
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.   body.classList.remove("resize-animation-stopper");
  }, 400);
});





