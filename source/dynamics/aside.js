document.addEventListener('DOMContentLoaded', initializeGuide)

function initializeGuide() {
  hideUserGuide();
  setTimeout(function () {
    let aside = document.querySelector('aside');
    aside.classList.add('onLoad');
  }, 0)
}

function hideUserGuide() {
  let ornm = document.querySelector('.aside-head')
  ornm.addEventListener('click', rotateAndHideAside)
  let btn = document.querySelector('.user-guide_hide')
  btn.addEventListener('click', rotateAndHideAside)
}
let controller = 0

function rotateAndHideAside() {
  let aside = document.querySelector('aside')
  if (controller === 0) {
    let headBelt = aside.querySelector('.aside-head');
    let piece = headBelt.offsetHeight;
    aside.style.transform = 'rotate(90deg)'
    let aw = aside.offsetWidth
    let ah = aside.offsetHeight
    let wsp = ah + ((aw - ah) / 2)
    let x = (wsp * -1) + piece
    let y = x + 'px'
    let z = ((aw - ah) / 2) + 'px'
    aside.style.left = y
    aside.style.bottom = z
    controller = 1
  } else if (controller === 1) {
    aside.style.transform = 'rotate(0deg)'
    aside.style.left = 0
    aside.style.bottom = 0
    controller = 0
  }
}

export function guideReacts(i) {
  let aside = document.querySelector('aside');
  aside.classList.remove('onAdvice');
  aside.classList.remove('onAdviceB');
  setTimeout(function(){shakeToFocusUsersAttention(aside)},0);
  let guide = document.querySelector('.aside-foot .user-guide');
  let title = document.querySelector('.aside-foot_title');
  let arr = [
    'Gdy wpiszesz imię, przydomek i zawołanie, po zatwierdzeniu zmian pojawi się następna część formularza.',
    'Po wyborze klasy, pojawi sie okno wyboru ataku spośród uderzeń charakterystycznych dla tej postaci.',
    'Wybierz uderzenie, klikając w słowo opisujące je. Przy każdym epitecie widnieje charakterystyka ciosu w Ikonach Żywiołów i Ikonach Uderzeń.',
    'Wymyśl nazwe dla uderzenia z poprzedniego kroku. Gdy ją zatwierdzisz, pojawi sie kolejna cześć karty postaci.',
    'Po wyborze jednej opcji z każdej listy, pojawi sie kolejna cześć karty postaci.',
    'Kliknij tyle opcji, ile chcesz. Każdy zestaw (czyli moc i pietno) zabiera ci pewną ilość punktów Mądrości.',
    'Rozdaj pozostałe punkty mądrości na współczynniki postaci: Życie, Mądrość, Ruch i Działanie.',
    'Rozdaj pozostałe punkty mądrości na współczynniki postaci: Życie, Mądrość, Ruch i Działanie.'
  ]
  guide.innerText = arr[i]
  let arrB = [
    'tożsamość:',
    'klasa:',
    'atak:',
    'nazwa ataku:',
    'obrona:',
    'zdolność i słabość:',
    'atrybuty:',
    'atrybuty:'
  ]
  title.innerText = arrB[i]
}
function shakeToFocusUsersAttention(aside) {
  if (controller === 1) {
    let headBelt = aside.querySelector('.aside-head');
    let piece = headBelt.offsetHeight;
    aside.style.transform = 'rotate(90deg)';
    let aw = aside.offsetWidth;
    let ah = aside.offsetHeight;
    let wsp = ah + ((aw - ah) / 2);
    let x = (wsp * -1) + piece;
    let y = x + 'px';
    let z = ((aw - ah) / 2) + 'px';
    aside.style.left = y;
    aside.style.bottom = z;
    aside.classList.add('onAdvice');
  } else if (controller === 0) {
    aside.classList.add('onAdviceB');
  }
}

var iteratorOfPointsLeft = {
  left: 20,
  spentOnAttack: 0,
  iterator(cont, x) {
    let iterDevice = document.querySelector('.aside-body_how-much')
    let opt = cont.querySelectorAll('.corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt')[x]
    let points = opt.querySelectorAll('img')
    let amount = (points.length - 1)
    let bilans = amount - this.spentOnAttack
    this.left = this.left - bilans
    this.spentOnAttack = amount
    iterDevice.innerText = 'Pozostało' + ' ' + this.left + 'x'
    this.animateOptsSpending(opt, amount);
  },
  deletator() {
    let iterDevice = document.querySelector('.aside-body_how-much')
    this.left = this.left + this.spentOnAttack
    this.spentOnAttack = 0
    iterDevice.innerText = 'Pozostało' + ' ' + this.left + 'x'
  },
  animateOptsSpending(opt, amount) {
    let coin = document.createElement('IMG');
    coin.setAttribute('src', './icons/ikona-poteg.svg');
    coin.classList.add('itIsCoin');
    let axS = window.scrollY;
    let axX = opt.offsetTop;
    let axZ = axX - axS;
    let axY = opt.offsetLeft;
    coin.style.top = axZ + 'px';
    coin.style.left = axY + 'px';
    document.querySelector('body').appendChild(coin);
    setTimeout(function () {
      coin.style.left = '0';
      coin.style.top = '90%';
      coin.style.width = '55px';
      coin.style.height = '55px';
    }, 0);
    setTimeout(function () {
      document.querySelector('body').removeChild(coin);
      document.querySelector('aside').classList.add('onAdvice');
    }, 550);
  },
  iteratorB(integer) {
    let iterDevice = document.querySelector('.aside-body_how-much')
    this.left = this.left + integer
    iterDevice.innerText = 'Pozostało' + ' ' + this.left + 'x'
  },
  deletatorB(integer) {
    let iterDevice = document.querySelector('.aside-body_how-much')
    this.left = this.left - integer
    iterDevice.innerText = 'Pozostało' + ' ' + this.left + 'x'
  },
  equalizator() {
    let iterDevice = document.querySelector('.aside-body_how-much')
    iterDevice.innerText = 'Pozostało' + ' ' + this.left + 'x'
  }
}
export default iteratorOfPointsLeft