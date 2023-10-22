const blockForm = document.querySelector('#block_form');
const formContact = document.forms.formContact;
const inputName = formContact.userName;
const inputNumber = formContact.number;
const btnSubmit = document.querySelector('[type="submit"]');

formContact.oninput=()=>{
   
   if (inputName.value.length!=0 && inputNumber.value.length!=0) {
      btnSubmit.removeAttribute("disabled")
   } else {
      btnSubmit.setAttribute("disabled", "true")
   }
}
formContact.onsubmit= ()=>{
   blockForm.remove();
   document.querySelector('#post_form').style.display="flex";
   return false
}