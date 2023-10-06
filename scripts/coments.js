const btnImg = document.querySelector('#btn_imgs');
const btnVideo = document.querySelector('#btn_video');
const imgSlider = document.querySelector('#images_slider');
const videoSlider = document.querySelector('#video_slider');
const sliderComents = new Sliders2Slide(btnImg, btnVideo, imgSlider, videoSlider);
sliderComents.click()

var swiperImg = new Swiper("#images_slider", {
   slidesPerView: 2,
   spaceBetween: 30,
   navigation: {
      nextEl: ".slider-button-next",
      prevEl: ".slider-button-prev",
   },
   breakpoints: {
      1920: {
         slidesPerView: 6,
      },
   },
});

var swiperImg = new Swiper("#video_slider", {
   //slidesPerView: 1,
   navigation: {
      nextEl: ".slider-button-next",
      prevEl: ".slider-button-prev",
   },
   breakpoints: {
      768: {
         slidesPerView: 3,
         spaceBetween: 25,
      },
      1920: {
         slidesPerView: 3,
         spaceBetween: 75,
      }
   },
});

const videoSlides = document.querySelectorAll('.video_slide>iframe');


var player1;

function onYouTubeIframeAPIReady() {
   player1 = new YT.Player('player1', {
      events: {
         'onStateChange': onPlayerStateChange
      }
   });
}

var player2;

function onYouTubeIframeAPIReady() {
   player2 = new YT.Player('player2', {
      events: {
         'onStateChange': onPlayerStateChange
      }
   });
}

var player3;

function onYouTubeIframeAPIReady() {
   player3 = new YT.Player('player3', {
      events: {
         'onStateChange': onPlayerStateChange
      }
   });
}

var player4;

function onYouTubeIframeAPIReady() {
   player4 = new YT.Player('player4', {
      events: {
         'onStateChange': onPlayerStateChange
      }
   });
}

function checkStateVideo(stateVide, div) {
   if (stateVide <= 0 || stateVide == 2 || stateVide == 5) {
      div.classList.remove("active_video");
   } else {
      div.classList.add("active_video");

   }
}

function onPlayerStateChange(event) {
   checkStateVideo(event.data, event.target.getIframe().parentNode);
}