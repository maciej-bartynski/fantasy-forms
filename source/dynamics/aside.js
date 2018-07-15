document.addEventListener('DOMContentLoaded', initializeGuide)

function initializeGuide () {
  hideUserGuide()
  changeGuide()
  //pointsIterator()
}
function hideUserGuide () {
  let ornm = document.querySelector('.aside-head')
  ornm.addEventListener('click', rotateAndHideAside)
  let btn = document.querySelector('.user-guide_hide')
  btn.addEventListener('click', rotateAndHideAside)
}
let controller = 0
function rotateAndHideAside () {
  let aside = document.querySelector('aside')
  if (controller === 0) {
    aside.style.transform = 'rotate(90deg)'
    let aw = aside.offsetWidth
    let ah = aside.offsetHeight
    let wsp = ah + ((aw - ah) / 2)
    let x = (wsp * -1) + 20
    let y = x + 'px'
    let z = ((aw - ah) / 2) + 'px'
    aside.style.left = y
    aside.style.top = z
    controller = 1
  }else if (controller === 1) {
    aside.style.transform = 'rotate(0deg)'
    aside.style.left = 0
    aside.style.top = 0
    controller = 0
  }
}
function changeGuide () {
  let guide = document.querySelector('.aside-foot .user-guide')
  let parts = document.querySelectorAll('fieldset')
  for (let i = 0;i <= 6;i++) {
    parts[i].addEventListener('mouseenter', function () {
      guideReacts(i, guide)
    })
  }
}
function guideReacts (i, guide) {
  let arr = [
    'Gdy wpiszesz imię, przydomek i zawołanie, po zatwierdzeniu zmian pojawi się następna część formularza.',
    'Po wyborze klasy, pojawi sie okno wyboru ataku spośród uderzeń charakterystycznych dla tej postaci.',
    'Wybierz uderzenie, klikając w słowo opisujące je. Przy każdym epitecie widnieje charakterystyka ciosu w Ikonach Żywiołów i Ikonach Uderzeń.',
    'Wymyśl nazwe dla uderzenia z poprzedniego kroku. Gdy ją zatwierdzisz, pojawi sie kolejna cześć karty postaci.',
    'Po wyborze jednej opcji z każdej listy, pojawi sie kolejna cześć karty postaci.',
    'Kliknij tyle opcji, ile chcesz. Każdy zestaw (czyli moc i pietno) zabiera ci pewną ilość punktów Mądrości.',
    'Rozdaj pozostałe punkty mądrości na współczynniki postaci: Życie, Mądrość, Ruch i Działanie.'
  ]
  guide.innerText = arr[i]
}

var iteratorOfPointsLeft = {
  left: 20,
  spentOnAttack: 0,
  iterator(cont, x) {
    let iterDevice = document.querySelector('.aside-body_how-much');
    let opt = cont.querySelectorAll('.corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt')[x];
    let points = opt.querySelectorAll('img');
    let amount = (points.length - 1);
    let bilans = amount-this.spentOnAttack;
    this.left = this.left-bilans;
    this.spentOnAttack = amount;
    iterDevice.innerText = 'Pozostało' + ' ' + this.left + 'x';
  },
  deletator(){
    let iterDevice = document.querySelector('.aside-body_how-much');
    this.left = this.left + this.spentOnAttack;
    this.spentOnAttack=0;
    iterDevice.innerText = 'Pozostało' + ' ' + this.left + 'x';
  }
}
export default iteratorOfPointsLeft;
