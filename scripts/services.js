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
const shadowBlock= document.querySelector('#shadow_block');
const serviceDescr= document.querySelector('#service_descr');
const modalsServices= {
   "Consumer protection":[
   "Защита прав потребителей",
   "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов, которые", 
   "Требуются в рамках судебного разбирательства", "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов"
   ],
   "Family disputes":[
   "Семейные споры",
   "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов, которые",
   "Требуются в рамках судебного разбирательства", "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов"
   ]
   } 
   for(var key in modalsServices){
   console.log(key);
   console.log(modalsServices[key])
   document.querySelector('[data-service="'+key+'"]'). addEventListener('click', ()=>checkText(modalsServices[key]))
   }
   function checkText (modalService){
   console.log(modalService)
   shadowBlock.style.display= "flex";
   serviceDescr.style.display= "flex";
   
   serviceDescr.querySelector("h2").innerHTML = modalService[0]
   serviceDescr.querySelector("#p1").innerHTML = modalService[1];
   document.querySelector('#p2').innerHTML = modalService[2];
   document.querySelector('#p3').innerHTML = modalService[3];
   }

document.querySelector('#close_descr').onclick= function(){
   shadowBlock.style.display= "";
   serviceDescr.style.display= "";
};