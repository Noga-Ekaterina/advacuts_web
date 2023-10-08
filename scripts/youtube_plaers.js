const players = document.querySelectorAll('.video_slide>iframe');



let playersAPI = [];

function onYouTubeIframeAPIReady() {
   players.forEach((el, index) => {
      playersAPI[index] = new YT.Player(el.id, {
         events: {
            'onStateChange': onPlayerStateChange
         }
      });
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

function stopVideos(stateVideo, video) {
   if (stateVideo == 1) {
      players.forEach((el, index) => {
         if (el.id != video.id) {
            el.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
         }
      })
   }
}

function onPlayerStateChange(event) {
   checkStateVideo(event.data, event.target.getIframe().parentNode);
   stopVideos(event.data, event.target.getIframe())
}
function btnStopVideo(){
   players.forEach((el)=>{
      el.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
   })
}
let btnsSliderVideo = videoSlider.querySelectorAll('[class^="slider-button"]');
btnsSliderVideo.forEach((btn)=>{
   btn.onclick= btnStopVideo
});
