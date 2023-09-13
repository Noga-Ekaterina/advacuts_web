const btnFiz= document.querySelector('#fiz_faise');
const btnCompany= document.querySelector('#company');
const slideFiz= document.querySelector('#service_fiz');
const slideCompany= document.querySelector('#service_company');

btnCompany.onclick= function(){
   slideCompany.classList.remove("next");
   slideCompany.classList.add("active");
   slideFiz.classList.remove("active");
   slideFiz.classList.add("prev");
   btnFiz.removeAttribute("disabled");
   btnCompany.setAttribute("disabled", "true")
}
btnFiz.onclick= function(){
   slideFiz.classList.remove("prev");
   slideFiz.classList.add("active");
   slideCompany.classList.remove("active");
   slideCompany.classList.add("next");
   btnCompany.removeAttribute("disabled");
   btnFiz.setAttribute("disabled", "true")
}