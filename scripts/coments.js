const btnImg= document.querySelector('#btn_imgs');
const btnVideo= document.querySelector('#btn_video');
const imgSlider = document.querySelector('#images_slider');
const videoSlider = document.querySelector('#video_slider');
const sliderComents= new Sliders2Slide(btnImg, btnVideo, imgSlider, videoSlider);
sliderComents.click();

const widthSlider = imgSlider.offsetWidth;
const widtImgSlider = document.querySelector('.slide_img');

var swiperImg = new Swiper("wiper-slide", {
   slidesPerView: 2,
   spaceBetween: widthSlider - widtImgSlider*2,
   // navigation: {
   //    nextEl: ".swiper-button-next",
   //    prevEl: ".swiper-button-prev",
   // },
   breakpoints: {
      1920: {
         slidesPerView: 6,
         spaceBetween: 90,
      },
   },
})