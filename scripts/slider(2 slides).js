class Sliders2Slide{
   constructor(btnPrev, btnNext, slide1, slide2){
      this.btnPrev= btnPrev;
      this.btnNext= btnNext;
      this.slide1= slide1;
      this.slide2= slide2
   }
   click(){
      var slider= this;
      this.btnNext.onclick = function () {
         slider.slide2.classList.remove("next");
         slider.slide2.classList.add("active");
         slider.slide1.classList.remove("active");
         slider.slide1.classList.add("prev");
         slider.btnPrev.removeAttribute("disabled");
         slider.btnNext.setAttribute("disabled", "true")
      }
      this.btnPrev.onclick = function () {
         slider.slide1.classList.remove("prev");
         slider.slide1.classList.add("active");
         slider.slide2.classList.remove("active");
         slider.slide2.classList.add("next");
         slider.btnNext.removeAttribute("disabled");
         slider.btnPrev.setAttribute("disabled", "true")
      }
   }
}