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

const players = document.querySelectorAll('.video_slide>iframe');



var player;
var player2;
var player3;
var player4;


function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
      events: {
         'onStateChange': onPlayerStateChange
      }
   });
   player2 = new YT.Player('player2', {
      events: {
         'onStateChange': onPlayerStateChange
      }
   });
   player3 = new YT.Player('player3', {
      events: {
         'onStateChange': onPlayerStateChange
      }
   });
   player4 = new YT.Player('player4', {
      events: {
         'onStateChange': onPlayerStateChange
      }
   });
}

function checkStateVideo(stateVideo, div) {
   if (stateVideo <= 0 || stateVideo == 2 || stateVideo == 5) {
      div.classList.remove("active_video");
      btnImg.classList.remove("disabled_btn_active_video");
      btnImg.removeAttribute("disabled");
   } else {
      div.classList.add("active_video");
      btnImg.classList.add("disabled_btn_active_video");
      btnImg.setAttribute("disabled", "true")
   }
}

function stopVideos(stateVideo, video){
   if(stateVideo==1){players.forEach((el, index)=>{
      if (index != el.indexOf(video)){
         el.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      }
   })}
}

function onPlayerStateChange(event) {
   checkStateVideo(event.data, event.target.getIframe().parentNode);
   stopVideos(event.data, event.target.getIframe())
}