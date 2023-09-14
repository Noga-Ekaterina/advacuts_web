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
class MondalService{
   constructor(nameService, h2, p1, p2, p3){
      this.nameService= nameService;
      this.h2= h2;
      this.p1= p1;
      this.p2= p2;
      this.p3= p3
   }

   checkText(){
      shadowBlock.style.display= "flex";
      serviceDescr.style.display= "flex";

      serviceDescr.querySelector("#p1").innerHTML= this.p1;
      document.querySelector('#p2').innerHTML= this.p2;
      document.querySelector('#p3').innerHTML= this.p3;
      serviceDescr.querySelector("h2").innerHTML= this.h2
   }
   showMondal(){
      document.querySelector('[data-service="'+this.nameService+'"]').onclick= this.checkText;
   }
}
const mondalsService= [
   new MondalService(
      "Consumer protection", 
      "Защита прав потребителей",
      "Юридически грамотное составление  документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление  документов, которые ",
      "Требуются  в рамках судебного разбирательства",
      "Юридически грамотное составление  документов, которые требуются  в рамках судебного разбирательстваЮридически грамотное составление  документов"
   ),
   new MondalService(
      "Family disputes",
      "Семейные споры",
      "Юридически грамотное составление  документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление  документов, которые ",
      "Требуются  в рамках судебного разбирательства",
      "Юридически грамотное составление  документов, которые требуются  в рамках судебного разбирательстваЮридически грамотное составление  документов"
   )
]
mondalsService.forEach((el)=>{
   el.showMondal()
})