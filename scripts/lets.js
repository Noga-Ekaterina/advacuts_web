const shadowBlock = document.querySelector('#shadow_block');
const body = document.querySelector('body');

class CloseModal{
   constructor(btnClose, block){
      this.btnClose= document.getElementById(btnClose)
      this.block= document.getElementById(block)
   }
   click(){
      var Th= this;
      Th.btnClose.onclick = () =>{
         body.style.overflow=""
         shadowBlock.style.display = "";
         Th.block.style.display = "";
      };
   }
}