const btnFiz = document.querySelector('#fiz_faise');
const btnCompany = document.querySelector('#company');
const slideFiz = document.querySelector('#service_fiz');
const slideCompany = document.querySelector('#service_company');

const servicesSliber = new Sliders2Slide(btnFiz, btnCompany, slideFiz, slideCompany);
servicesSliber.click();
const serviceDescr = document.querySelector('#service_descr');
const modalsServices = {
   "Consumer protection": [
      "Защита прав потребителей",
      "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов, которые",
      "Требуются в рамках судебного разбирательства", "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов"
   ],
   "Family disputes": [
      "Семейные споры",
      "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов, которые",
      "Требуются в рамках судебного разбирательства", "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов"
   ],
   "Housing disputes": [
      "Жилищные споры",
      "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов, которые",
      "Требуются в рамках судебного разбирательства", "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов"
   ],
   "Land disputes": [
      "Земельные споры",
      "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов, которые",
      "Требуются в рамках судебного разбирательства", "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов"
   ],
   "Insurance disputes": [
      "Страховые споры",
      "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов, которые",
      "Требуются в рамках судебного разбирательства", "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов"
   ],
   "Representation in court": [
      "Представительство в суде",
      "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов, которые",
      "Требуются в рамках судебного разбирательства", "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов"
   ],
   "Subscription service": [
      "Абонентское обслуживание",
      "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов, которые",
      "Требуются в рамках судебного разбирательства", "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов"
   ],
   "Representation in court (company)": [
      "Представительство в суде",
      "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов, которые",
      "Требуются в рамках судебного разбирательства", "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов"
   ],
   "Licensing": [
      "Лицензирование",
      "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов, которые",
      "Требуются в рамках судебного разбирательства", "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов"
   ],
   "Collection of accounts receivable": [
      "Взыскание дебиторской задолженности",
      "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов, которые",
      "Требуются в рамках судебного разбирательства", "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов"
   ],
   "Bankruptcy and anti-crisis protection": [
      "Банкротство и антикризисная защита",
      "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов, которые",
      "Требуются в рамках судебного разбирательства", "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов"
   ],
   "Arbitration and international courts": [
      "Арбитражные и международные суды",
      "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов, которые",
      "Требуются в рамках судебного разбирательства", "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов"
   ],
   "Debt collection": [
      "Взыскание долга",
      "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов, которые",
      "Требуются в рамках судебного разбирательства", "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов"
   ],
   "Labor disputes": [
      "Трудовые споры",
      "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов, которые",
      "Требуются в рамках судебного разбирательства", "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов"
   ],
   "Administrative disputes": [
      "Административные споры",
      "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов, которые",
      "Требуются в рамках судебного разбирательства", "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов"
   ],
   "Hereditary disputes": [
      "Наследственные споры",
      "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов, которые",
      "Требуются в рамках судебного разбирательства", "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов"
   ],
   "Medical affairs": [
      "Медицинские дела",
      "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов, которые",
      "Требуются в рамках судебного разбирательства", "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов"
   ],
   "Military law": [
      "Военное право",
      "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов, которые",
      "Требуются в рамках судебного разбирательства", "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов"
   ],
   "Intellectual property protection": [
      "Защита интеллектуальной собственности",
      "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов, которые",
      "Требуются в рамках судебного разбирательства", "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов"
   ],
   "Transaction support": [
      "Сопровождение сделок",
      "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов, которые",
      "Требуются в рамках судебного разбирательства", "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов"
   ],
   "LicensingTax consulting": [
      "Налоговое консультирование",
      "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов, которые",
      "Требуются в рамках судебного разбирательства", "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов"
   ],
   "Tender support": [
      "Тендерное сопровождение",
      "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов, которые",
      "Требуются в рамках судебного разбирательства", "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов"
   ],
   "Representation in state bodies": [
      "Представление в государственных органах",
      "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов, которые",
      "Требуются в рамках судебного разбирательства", "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов"
   ],
   "Support for joining the SRO": [
      "Сопровождение вступления в СРО",
      "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов, которые",
      "Требуются в рамках судебного разбирательства", "Юридически грамотное составление документов, которые требуются в рамках судебного разбирательстваЮридически грамотное составление документов"
   ]
}
for (let key in modalsServices) {
   if(body.contains(document.querySelector('[data-service="' + key + '"]')))
      document.querySelector('[data-service="' + key + '"]').addEventListener('click', () => checkText(modalsServices[key]))
}

function checkText(modalService) {
   body.style.overflow="hidden"
   shadowBlock.style.display = "flex";
   serviceDescr.style.display = "flex";

   serviceDescr.querySelector("h2").innerHTML = modalService[0]
   serviceDescr.querySelector("#p1").innerHTML = modalService[1];
   document.querySelector('#p2').innerHTML = modalService[2];
   document.querySelector('#p3').innerHTML = modalService[3];
}

new CloseModal("close_descr", "service_descr").click()