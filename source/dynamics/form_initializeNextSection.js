import {
  guideReacts
} from './aside.js'
import {
  initUserFlowToNextSection_showLastBtnOfAcceptance
} from './attrybs.js';
import zenscroll from './../../node_modules/zenscroll/zenscroll.js'
'use strict'
document.addEventListener('DOMContentLoaded', initializeBtnsOfAcceptance)

function initializeBtnsOfAcceptance() {
  let acceptationBtn = document.querySelectorAll('.corpus_section_form_field-A_btn-belt_btn-positioner_btn')
  let amount = acceptationBtn.length
  for (let i = 0; i < amount; i++) {
    acceptationBtn[i].addEventListener('click', function () {
      if (acceptationBtn[i].classList.contains('beforeItIsClicked') === true) {
        acceptationBtn[i].classList.remove('beforeItIsClicked')
        acceptationBtn[i].classList.add('itIsClicked')
        signThisAsClicked(acceptationBtn[i])
        initializeNextSection(i)
      } else {
        initAgainGuideTextForThisSection(i)
      }
    })
  }
}

function signThisAsClicked(btn) {
  btn.innerText = '';
}

function initAgainGuideTextForThisSection(i) {
  guideReacts(i);
}

function initializeNextSection(iterator) {
  let allOrnaments = document.querySelectorAll('img.corpus_section_form_ornament-marker')
  let thisOrnament = allOrnaments[iterator];
  let nextOrnament = allOrnaments[iterator + 1];
  if (iterator === 1 || iterator === 2) {
    thisOrnament = allOrnaments[0];
    nextOrnament = allOrnaments[1];
  } else if (iterator >= 3 && iterator !== 5) {
    thisOrnament = allOrnaments[iterator - 2];
    nextOrnament = allOrnaments[iterator - 1];
  } else if (iterator >= 4) {
    thisOrnament = allOrnaments[iterator - 3];
    nextOrnament = allOrnaments[iterator - 2];
  }
  if (iterator !== 6) {
    thisOrnament.setAttribute('src', './icons/pole.2.svg');
    thisOrnament.classList.add('itIsPassedThrought');
    nextOrnament.classList.remove('itIsHidden');
    // window.scrollTo(0, nextOrnament.offsetTop)
    zenscroll.toY(thisOrnament.offsetTop);
  }
  enableNextSection(iterator);
  if (iterator === 1) {
    let PositionA = document.querySelectorAll('.corpus_section_form_fields fieldset')[1];
    zenscroll.toY(PositionA.offsetTop);
  } else if (iterator === 2) {
    let PositionB = document.querySelectorAll('.corpus_section_form_fields fieldset')[2];
    zenscroll.toY(PositionB.offsetTop);
  } else if (iterator === 5) {
    let PositionC = document.querySelectorAll('.corpus_section_form_fields-2 fieldset')[1];
    zenscroll.toY(PositionC.offsetTop);
    initUserFlowToNextSection_showLastBtnOfAcceptance();
  }
}

function enableNextSection(iterator) {
  iterator += 1
  guideReacts(iterator);
  
    let allSections = [
      undefined,
      document.querySelector('.corpus_section_form_fields'),
      document.querySelectorAll('.corpus_section_form_fields fieldset')[1],
      document.querySelectorAll('.corpus_section_form_fields fieldset')[2],
      document.querySelector('.corpus_section_form_field-C'),
      document.querySelector('.corpus_section_form_fields-2'),
      document.querySelectorAll('.corpus_section_form_fields-2 fieldset')[1],
      document.querySelectorAll('.corpus_section_form_fields-2 fieldset')[1]
    ]
    allSections[iterator].classList.remove('itIsHidden');
    if (iterator === 3) {
      allSections[iterator].querySelector('.corpus_section_form_fields_fieldset-b_container').classList.remove('strikeName');
    }
  
}
export function showBtnOfAcceptance(btn, container) {
  container.classList.remove('itIsHidden');
  btn.classList.add('beforeItIsClicked');
}