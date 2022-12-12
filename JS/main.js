const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.navbar__links');
function togglemenu() {
     menu_btn.classList.toggle('is-active');
     mobile_menu.classList.toggle('is-active');
}
menu_btn.addEventListener('click', togglemenu);

const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', () => {
     const currentScroll = window.pageYOffset
     if (currentScroll <= 0){
          body.classList.remove("scroll-up")
     }
     if (currentScroll > (lastScroll+10) && !body.classList.contains("scroll-down")){
          body.classList.remove("scroll-up")
          body.classList.add("scroll-down")
     }
     if (currentScroll < lastScroll && body.classList.contains("scroll-down")){
          body.classList.remove("scroll-down")
          body.classList.add("scroll-up")
     }

     lastScroll = currentScroll;
})