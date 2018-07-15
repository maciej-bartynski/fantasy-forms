import {setNameToDes} from './ataki-set-txt.js';
import {setNicknameToDes} from './ataki-set-txt.js';
import {setSentenceToDes} from './ataki-set-txt.js';
import {guideReacts} from './aside.js';
'use strict';
document.addEventListener('DOMContentLoaded', function () {
  userFlowViaFirstFieldset()
})
function userFlowViaFirstFieldset () {
  let userName = document.querySelector('input[name="imie"]');
  let userNick = document.querySelector('input[name="przydomek"]');
  let userMotto = document.querySelector('textarea[name="zawolanie"]');
  userNameAccept(userName, userNick)
  userNickAccept(userNick, userMotto)
  userMottoAccept(userMotto, userName)
}
function userNameAccept (item, nextItem) {
  item.addEventListener('keyup', function (event) {
    let allFieldsAreSet = checkIfFieldsAreSet();
    if (allFieldsAreSet === true) {
      enableNextPartOfFormula();
    } else if (event.keyCode === 13) {
      nextItem.focus()
    }
    setThisDataToDescription();
  })
}
function userNickAccept (item, nextItem) {
  item.addEventListener('keyup', function (event) {
    let allFieldsAreSet = checkIfFieldsAreSet();
    if (allFieldsAreSet === true) {
      enableNextPartOfFormula();
    } else if (event.keyCode === 13) {
      nextItem.focus()
    }
    setThisDataToDescription();
  })
}
function userMottoAccept (item, nextItem) {
  item.addEventListener('keyup', function (event) {
    let allFieldsAreSet = checkIfFieldsAreSet();
    if (allFieldsAreSet === true) {
      enableNextPartOfFormula();
    } else if (event.keyCode === 13) {
      nextItem.focus()
    }
    setThisDataToDescription();
  })
}
function checkIfFieldsAreSet() {
    let userName = document.querySelector('input[name="imie"]');
    let userNick = document.querySelector('input[name="przydomek"]');
    let userMotto = document.querySelector('textarea[name="zawolanie"]');
    let valueA = userName.value;
    let valueB = userNick.value;
    let valueC = userMotto.value;
    if (valueA.trim()!==""&&valueA.trim().toLowerCase()!=="heros"){
        if(valueB.trim()!==""&&valueB.trim().toLowerCase()!=="wojenny pies"){
          if(valueC.trim()!==""&&valueC.trim().toLowerCase()!=="zawsze wierny"){
            return true;
          }  
        }
    }
}
function enableNextPartOfFormula(){
    let thisOrnament = document.querySelector('img.corpus_section_form_ornament-marker');
    let allOrnaments = document.querySelectorAll('img.corpus_section_form_ornament-marker');
    thisOrnament.setAttribute('src', './icons/pole.svg');
    thisOrnament.classList.add('itIsPassedThrought');
    let nextOrnament = allOrnaments[1];
    nextOrnament.classList.remove('itIsHidden');
    let partOfForm = document.querySelector('.corpus_section_form_fields');
    partOfForm.classList.remove('itIsHidden');
    guideReacts (1);
}
function setThisDataToDescription(){
  setNameToDes();
  setNicknameToDes();
  setSentenceToDes();
}