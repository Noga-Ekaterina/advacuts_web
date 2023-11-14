class CheckForm{
   constructor(blockForm, postForm){
      this.blockForm= blockForm;
      this.postForm= postForm
   }

   start(){
      var Th= this;
      let thisBlockForm= document.getElementById(Th.blockForm);
      let thisPostForm= document.getElementById(Th.postForm)
      let form= thisBlockForm.querySelector("form");
      let btnSubmit= form.querySelector('[type="submit"]');
      form.oninput=()=>{
         if (form.userName.value.length!=0 && form.number.value.length!=0) {
            btnSubmit.removeAttribute("disabled")
         } else {
            btnSubmit.setAttribute("disabled", "true")
         }
      }
      form.onsubmit= ()=>{
         thisBlockForm.style.display="none";
         thisPostForm.style.display="flex";
         return false
      }
   }
}

new CheckForm("block_form", "post_form").start()