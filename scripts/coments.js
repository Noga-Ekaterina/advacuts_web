const btnImg= document.querySelector('#btn_imgs');
const btnVideo= document.querySelector('#btn_video');
const imgSlider = document.querySelector('#images_slider');
const videoSlider = document.querySelector('#video_slider');
const sliderComents= new Sliders2Slide(btnImg, btnVideo, imgSlider, videoSlider);
sliderComents.click()

var swiperImg = new Swiper(".slide_img", {
   slidesPerView: 2,
   spaceBetween: 10,
   // navigation: {
   //    nextEl: ".swiper-button-next",
   //    prevEl: ".swiper-button-prev",
   // },
   breakpoints: {
      1920: {
         slidesPerView: 6,
         spaceBetween: 50,
      },
   },
})