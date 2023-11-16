const blockPushDoc = document.querySelector('#block_push_doc');
document.querySelector('#push_doc').onclick=()=>{
   body.style.overflow="hidden"
   shadowBlock.style.display = "flex";
   blockPushDoc.style.display = "block";
}

new CloseModal("close_block_push_doc", "block_push_doc").click()
const formPushDoc = blockPushDoc.querySelector("form");
const inputFile = formPushDoc.iFiles;
inputFile.onchange=()=>{
   document.querySelector('#files_length').innerHTML= inputFile.files.length
}
new CheckForm("block_push_doc", "post_form_modal", "pushDoc").start()