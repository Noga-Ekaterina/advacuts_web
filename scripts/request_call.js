const btnRequestCall = document.querySelectorAll('.request_call');
const blockRequestCall = document.querySelector('#block_request_call');

btnRequestCall.forEach((btn)=>{
   btn.onclick=()=>{
      body.style.overflow="hidden"
      shadowBlock.style.display = "flex";
      blockRequestCall.style.display = "block";
   }
})

document.querySelector('#close_request_call').onclick = function() {
   body.style.overflow = ""
   shadowBlock.style.display = "";
   blockRequestCall.style.display = "";
};