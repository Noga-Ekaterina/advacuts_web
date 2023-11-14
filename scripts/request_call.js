const btnRequestCall = document.querySelectorAll('.request_call');
const blockRequestCall = document.querySelector('#block_request_call');

btnRequestCall.forEach((btn)=>{
   btn.onclick=()=>{
      body.style.overflow="hidden"
      shadowBlock.style.display = "flex";
      blockRequestCall.style.display = "block";
   }
})

new CheckForm("block_request_call", "post_form_modal").start()

new CloseModal("close_request_call", "block_request_call").click()

new CloseModal("close_post_form_modal", "post_form_modal").click()
