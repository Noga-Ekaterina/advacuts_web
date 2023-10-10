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
   slidesPerView: 1,
   spaceBetween: 25,
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


const arrComents =[
   "Вероника Медведева",
   "Виктория Веселова",
   "Виктория Веселова",
   "Константин Щербаков",
   "Елена Алексеева",
   "Инна Андреев",
   "Константин Щербаков",
   "Вероника Медведева",
];
const comentsImg = document.querySelectorAll('.slide_img');
const comentModal = document.querySelector('#coment_modal');
const comentH = document.querySelector('#coment_h');
const comentP = document.querySelector('#coment_p');
const comentModalImg = document.querySelector('#coment_img');
const btnPrevComentModal =document.querySelector('.coment_moda_btn_prev');
const btnNextComentModal =document.querySelector('.coment_moda_btn_next');

let comentImgActive;
comentsImg. forEach((slide, index)=>{
   slide.onclick=()=>{
      comentImgActive=index;
      body.style.overflow="hidden"
      shadowBlock.style.display = "flex";
      comentModal.style.display = "block";
      showComent()
   }
})
function showComent(){
   let elActive=comentsImg[comentImgActive];
   comentH.innerHTML= arrComents[comentImgActive];
   comentP.innerHTML= elActive.querySelector('span').innerHTML;
   comentModalImg.setAttribute("src", elActive.querySelector("img").src);
   if(comentImgActive>0){
      btnPrevComentModal.removeAttribute("disabled")
   }else{
      btnPrevComentModal.setAttribute("disabled", "true")
   }
   if (comentImgActive>=comentsImg.length -1) {
      btnNextComentModal.setAttribute("disabled", "true")
   } else {
      btnNextComentModal.removeAttribute("disabled")
   }
}
function newComentImgActive(index){
   comentImgActive= comentImgActive+index;
   showComent();
   comentModal.style.opacity= "0";
   setTimeout(() => {
      comentModal.style.opacity= ""   
   }, 200);
}
const comentImgNext =()=> newComentImgActive(1);
const comentImgPrev =()=> newComentImgActive(-1);
btnPrevComentModal.onclick= comentImgPrev;
btnNextComentModal.onclick= comentImgNext;

document.querySelector('#close_coment_modal').onclick = function () {
   body.style.overflow=""
   shadowBlock.style.display = "";
   comentModal.style.display = "";
};