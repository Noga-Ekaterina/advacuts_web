const btnRequestCall = document.querySelectorAll('.request_call');
const blockRequestCall = document.querySelectorAll('#block_request_call');

btnRequestCall.forEach((btn)=>{
   btn.onclick=()=>{
      body.style.overflow="hidden"
      shadowBlock.style.display = "flex";
      blockRequestCall.style.display = "block";
   }
})