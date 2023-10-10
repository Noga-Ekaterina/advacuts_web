const divPlayers = document.querySelectorAll('div.player');
const allPlayers = document.querySelectorAll('.player');
const idVideoYT ={
   player1: "XAlnpQTzyRI",
   player2: "GBmL2DZj9F8",
   player3: "WZB2l6kHAnE",
   player4: "FDerDFnBdbQ"
} ;
let players ; 



let playersAPI = [];

// function onYouTubeIframeAPIReady() {
//    players.forEach((el, index) => {
//       playersAPI[index] = new YT.Player(el.id, {
//          events: {
//             'onStateChange': onPlayerStateChange
//          }
//       });
//    });
// }
divPlayers.forEach((div, index)=>{
   div.onclick= function(){
      let id= div.id;
      console.log(idVideoYT[id]);
      
      playersAPI[index] = new YT.Player(id, {
         videoid: idVideoYT[id],
         events: {
            'onStateChange': onPlayerStateChange
         }
      });

      players= document.querySelectorAll('iframe.player');
   }
})
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
