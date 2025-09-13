// header scroll
window.onscroll = function headerScroll() {
    const header = document.querySelector('.header');
    if (window.pageYOffset > 60) {
        header.classList.add('header-scroll');
    } else {
        header.classList.remove('header-scroll');
    }
};

const swiper = new Swiper('.swiper', {
  // Optional parameters
  //direction: 'vertical',
  loop: true,

  // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

  // Navigation arrows
  navigation: {
    nextEl: '.reviews__arrow--prev',
    prevEl: '.reviews__arrow--next',
  },

  // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
});





