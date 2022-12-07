const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.navbar__links');
function togglemenu() {
     menu_btn.classList.toggle('is-active');
     mobile_menu.classList.toggle('is-active');
}
menu_btn.addEventListener('click', togglemenu);
