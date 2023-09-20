class Sliders2Slide{
   constructor(btnPrev, btnNext, slide1, slide2){
      this.btnPrev= btnPrev;
      this.btnNext= btnNext;
      this.slide1= slide1;
      this.slide2= slide2
   }
   click(){
      this.btnNext.onclick = function () {
         this.slide2.classList.remove("next");
         this.slide2.classList.add("active");
         this.slide1.classList.remove("active");
         this.slide1.classList.add("prev");
         this.btnPrev.removeAttribute("disabled");
         this.btnNext.setAttribute("disabled", "true")
      }
      this.btnPrev.onclick = function () {
         this.slide1.classList.remove("prev");
         this.slide1.classList.add("active");
         this.slide2.classList.remove("active");
         this.slide2.classList.add("next");
         this.btnNext.removeAttribute("disabled");
         this.btnPrev.setAttribute("disabled", "true")
      }
   }
}