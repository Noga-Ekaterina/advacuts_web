const btnKaicesFis = document.querySelector('#fiz_faise');
const btnKaicesCompany = document.querySelector('#company');
const kaicesFiz = document.querySelector('#fiz_kaices_slider');
const kaicesCompany = document.querySelector('#company_kaices_slider');
const sliderComents = new Sliders2Slide(btnKaicesFis, btnKaicesCompany, kaicesFiz, kaicesCompany);
sliderComents.click();

var swiperKaicesFiz = new Swiper("#fiz_kaices_slider", {
   slidesPerView: 1,
   spaceBetween: 25,
   navigation: {
      nextEl: ".slider-button-next",
      prevEl: ".slider-button-prev",
   },
   breakpoints: {
      768: {
         slidesPerView: 2,
         spaceBetween: 45,
      },
      1920: {
         slidesPerView: 4,
         spaceBetween: 30,
      }
   },
});
var swiperKaicesCompany = new Swiper("#company_kaices_slider", {
   slidesPerView: 1,
   spaceBetween: 25,
   navigation: {
      nextEl: ".slider-button-next",
      prevEl: ".slider-button-prev",
   },
   breakpoints: {
      768: {
         slidesPerView: 2,
         spaceBetween: 45,
      },
      1920: {
         slidesPerView: 4,
         spaceBetween: 30,
      }
   },
});

const kaice = document.querySelectorAll('.kaice');
const kaiceDescr = document.querySelector('#kaice_descr');
const customer = document.querySelector('#customer');
const affairN = document.querySelector('#affair_n_descr');
const resultKaice = document.querySelector('#result_kaice');
const recoveredDescr = document.querySelector('#recovered_descr');
const term = document.querySelector('#term');

const kaiceText = [
   [
      "ООО «Новый дом»",
      "Договор с Подрядчиком расторгнут, взысканы денежные средства уплаченные по договору, неустойка, моральный вред, расходы на представителя, штраф.",
      "5 месяцев"
   ],
   [
      "ООО «Дом пом-пом»",
      "Договор с Подрядчиком расторгнут, взысканы денежные средства уплаченные по договору, неустойка, моральный вред, расходы на представителя, штраф.",
      "8 месяцев"
   ],
   [
      "ООО «Брусничка»",
      "Договор с Подрядчиком расторгнут, взысканы денежные средства уплаченные по договору, неустойка, моральный вред, расходы на представителя, штраф.",
      "7 месяцев"
   ],
   [
      "ООО «Шашлычок»",
      "Договор с Подрядчиком расторгнут, взысканы денежные средства уплаченные по договору, неустойка, моральный вред, расходы на представителя, штраф.",
      "4 месяца"
   ],
   [
      "ООО «Ласточкины дома»",
      "Договор с Подрядчиком расторгнут, взысканы денежные средства уплаченные по договору, неустойка, моральный вред, расходы на представителя, штраф.",
      "6 месяцев"
   ],
   [
      "ООО «Джунгли»",
      "Договор с Подрядчиком расторгнут, взысканы денежные средства уплаченные по договору, неустойка, моральный вред, расходы на представителя, штраф.",
      "3,5 месяца"
   ],
   [
      "ООО «Русская печь»",
      "Договор с Подрядчиком расторгнут, взысканы денежные средства уплаченные по договору, неустойка, моральный вред, расходы на представителя, штраф.",
      "10 месяцев"
   ],
   [
      "ООО «Жилые массивы»",
      "Договор с Подрядчиком расторгнут, взысканы денежные средства уплаченные по договору, неустойка, моральный вред, расходы на представителя, штраф.",
      "5 месяцев"
   ],
   [
      "ООО «Русская кухня»",
      "Договор с Подрядчиком расторгнут, взысканы денежные средства уплаченные по договору, неустойка, моральный вред, расходы на представителя, штраф.",
      "7 месяцев"
   ],
   [
      "ООО «Наш дом»",
      "Договор с Подрядчиком расторгнут, взысканы денежные средства уплаченные по договору, неустойка, моральный вред, расходы на представителя, штраф.",
      "5 месяцев"
   ],
   [
      "ООО «Япония в России»",
      "Договор с Подрядчиком расторгнут, взысканы денежные средства уплаченные по договору, неустойка, моральный вред, расходы на представителя, штраф.",
      "9,5 месяцев"
   ],
   [
      "ООО «РоссПирог»",
      "Договор с Подрядчиком расторгнут взысканы денежные средства уплаченные по договору неустойка моральный вред расходы на представителя штраф.",
      "7 месяцев"
   ]
];
kaice. forEach((el, index)=>{
   el.onclick=()=>{
      let thisKaice= kaiceText[index];
      body.style.overflow="hidden"
      shadowBlock.style.display = "flex";
      kaiceDescr.style.display = "flex";

      customer.innerHTML= thisKaice[0];
      affairN.innerHTML= el.querySelector(".affair_n").innerHTML;
      resultKaice.innerHTML= thisKaice[1];
      recoveredDescr.innerHTML= el.querySelector(".recovered").innerHTML;
      term.innerHTML= thisKaice[2]
   }
})

new CloseModal("close_kaice_descr", "kaice_descr").click()