// const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenu = document.querySelector('.header__menu');

const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');

//const toggleMenu = () => mobileMenu.classList.toggle('is-open');
const toggleMenu = () => mobileMenu.classList.toggle('menu-open');
// const disableScroll = () =>
//   document.body.classList.toggle('is-scroll-disabled');

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);

menuBtnOpen.addEventListener('click', disableScroll);
menuBtnClose.addEventListener('click', disableScroll);
