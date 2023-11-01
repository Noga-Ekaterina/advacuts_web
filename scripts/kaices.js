const btnKaicesFis = document.querySelector('#fiz_faise');
const btnKaicesCompany = document.querySelector('#company');
const kaicesFiz = document.querySelector('#fiz_kaices_slider');
const kaicesCompany = document.querySelector('#company_kaices_slider');
const sliderComents = new Sliders2Slide(btnKaicesFis, btnKaicesCompany, kaicesFiz, kaicesCompany);
sliderComents.click();

var swiperKaicesFiz = new Swiper("#fiz_kaices_slider", {
   slidesPerView: 1,
   spaceBetween: 25,
   navigation: {
      nextEl: ".slider-button-next",
      prevEl: ".slider-button-prev",
   },
   breakpoints: {
      768: {
         slidesPerView: 2,
         spaceBetween: 45,
      },
      1920: {
         slidesPerView: 4,
         spaceBetween: 30,
      }
   },
});
var swiperKaicesCompany = new Swiper("#company_kaices_slider", {
   slidesPerView: 1,
   spaceBetween: 25,
   navigation: {
      nextEl: ".slider-button-next",
      prevEl: ".slider-button-prev",
   },
   breakpoints: {
      768: {
         slidesPerView: 2,
         spaceBetween: 45,
      },
      1920: {
         slidesPerView: 4,
         spaceBetween: 30,
      }
   },
});