const affairs =[
   [
      "Взыскали с Подрядчика сумму неосновательного обогащения в размере 3 245 364 руб",
      "Строительная компания ООО «СК данные скрыты» (далее Ответчик) заключила контракт с ООО «данные скрыты» (далее Заказчик) на выполнение работ по монтажу объекта – ангара. Согласно условиям контракта Заказчик оплатил аванс до начала работ. Подрядчик спустя несколько недель работ не вышел на площадку, телефонные звонки и претензии оставил без ответа. Заказчиком было принято решение направить исковое заявление в Арбитражный суд г. Москвы",
      "По результатам рассмотрения требований ООО «данные скрыты» Арбитражный суд вынес Решение о взыскании неосновательного обогащения, неустойки и процентов за пользование чужими денежными средствами в полном объеме.",
      "06.04.2016г"
   ],
   [
      "Списали сумму долга в размере 648 364 руб",
      "описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела",
      "результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат",
      "22.09.2017г"
   ],
   [
      "Отсудили сумму невыплаченного больничного в размере 48 000 руб",
      "описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела",
      "результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат",
      "08.10.2019г"
   ],
   [
      "Банк незаконно повысил ставку по кредиту, и иы помогли добиться компинцации в размере 240 000 руб",
      "описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела",
      "результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат",
      "30.06.2020г"
   ],
   [
      "Постановили место проживание ребёнка с матерью и назначили алеиенты в размере 25 000 руб в месяц",
      "описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела",
      "результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат"
   ],
   [
      "что-то добились, что-то добились, что-то добились, что-то добились",
      "описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела",
      "результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат",
      "18.08.2022г"
   ],
   [
      "Подрядчик не справился с соблюдением сроков проведения строительных мероприяти, взыскали компенцацю в размере 348 364 руб",
      "описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела, описание дела",
      "результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат, результат",
      "25.05.2022г"
   ],
];
const divAffairs =document.querySelectorAll('.affair');
const affairsModal =document.querySelector('#affair_descr');
const affairH= affairsModal.querySelector('h3');
const descrDispute = document.querySelector('#descr_dispute');
const btnDescrDispute = document.querySelector('#show_descr_dispute');
const result = document.querySelector('#result');
const affairData = document.querySelector('#affair_data');
divAffairs.forEach((el, index)=>{
   el.onclick= ()=>{
      let thisAffair= affairs[index];
      affairsModal.style.display="flex";
      descrDispute.classList.add("small_dispute");
      el.classList.add("affair_active");
      body.classList.add("open_modal_no_xl")
      divAffairs. forEach((el2, index2)=>{
         if (index!=index2) {
            el2.classList.remove("affair_active")
         }
      })

      affairH.innerHTML= thisAffair[0];
      descrDispute.innerHTML= thisAffair[1];
      btnDescrDispute.innerHTML= "читать полностью";
      result.innerHTML= thisAffair[2]
      affairData.innerHTML= thisAffair[3]
   }
})
btnDescrDispute.onclick=()=>{
   if (descrDispute.className=="small_dispute"){
      descrDispute.classList.remove("small_dispute");
      btnDescrDispute.innerHTML= "скрыть";
   }
   else{
      descrDispute.classList.add("small_dispute");
      btnDescrDispute.innerHTML= "читать полностью";

   }
}

document.querySelector('#close_affair').onclick = function () {
   affairsModal.style.display="";
   body.classList.remove("open_modal_no_xl")
}