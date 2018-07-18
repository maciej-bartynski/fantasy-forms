import { setNameToDes } from "./ataki-set-txt.js";
import { setNicknameToDes } from "./ataki-set-txt.js";
import { setSentenceToDes } from "./ataki-set-txt.js";
import { guideReacts } from "./aside.js";
("use strict");
document.addEventListener("DOMContentLoaded", function() {
  userFlowViaFirstFieldset();
});

function userFlowViaFirstFieldset() {
  let userName = document.querySelector('input[name="imie"]');
  let userNick = document.querySelector('input[name="przydomek"]');
  let userMotto = document.querySelector('input[name="zawolanie"]');
  userNameAccept(userName, userNick);
  userNickAccept(userNick, userMotto);
  userMottoAccept(userMotto, userName);
}

function userNameAccept(item, nextItem) {
  let partOfForm = document.querySelector(".corpus_section_form_fields");
  item.addEventListener("change", function() {
    let allFieldsAreSet = checkIfFieldsAreSet();
    let term = partOfForm.classList.contains("itIsHidden");
    if (allFieldsAreSet === true && term === true) {
      enableNextPartOfFormula();
    }
    setThisDataToDescription();
  });
  item.addEventListener("keyup", function(event) {
    let allFieldsAreSet = checkIfFieldsAreSet();
    if (event.keyCode === 13) {
      if (allFieldsAreSet !== true) {
        nextItem.focus();
      } else {
        item.blur();
      }
    }
  });
}
function userNickAccept(item, nextItem) {
  let partOfForm = document.querySelector(".corpus_section_form_fields");
  item.addEventListener("change", function() {
    let allFieldsAreSet = checkIfFieldsAreSet();
    let term = partOfForm.classList.contains("itIsHidden");
    if (allFieldsAreSet === true && term === true) {
      enableNextPartOfFormula();
    }
    setThisDataToDescription();
  });
  item.addEventListener("keyup", function(event) {
    let allFieldsAreSet = checkIfFieldsAreSet();
    if (event.keyCode === 13) {
      if (allFieldsAreSet !== true) {
        nextItem.focus();
      } else {
        item.blur();
      }
    }
  });
}
function userMottoAccept(item, nextItem) {
  let partOfForm = document.querySelector(".corpus_section_form_fields");
  item.addEventListener("change", function() {
    let allFieldsAreSet = checkIfFieldsAreSet();
    let term = partOfForm.classList.contains("itIsHidden");
    if (allFieldsAreSet === true && term === true) {
      //enableNextPartOfFormula();
      showBtnOfAcceptation();
    }
    setThisDataToDescription();
  });
  item.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      item.blur();
    }
  });
}

function checkIfFieldsAreSet() {
  let userName = document.querySelector('input[name="imie"]');
  let userNick = document.querySelector('input[name="przydomek"]');
  let userMotto = document.querySelector('input[name="zawolanie"]');
  let valueA = userName.value;
  let valueB = userNick.value;
  let valueC = userMotto.value;
  if (valueA.trim() !== "") {
    if (valueB.trim() !== "") {
      if (valueC.trim() !== "") {
        return true;
      }
    }
  }
}
function showBtnOfAcceptation() {
  let btn = document.querySelector('.corpus_section_form_field-A_btn-belt_btn-positioner');
  btn.classList.remove('itIsHidden');
  btn.addEventListener('click', function(){
    enableNextPartOfFormula();
  })
}
function enableNextPartOfFormula() {
  let thisOrnament = document.querySelector(
    "img.corpus_section_form_ornament-marker"
  );
  let allOrnaments = document.querySelectorAll(
    "img.corpus_section_form_ornament-marker"
  );
  thisOrnament.setAttribute("src", "./icons/pole.2.svg");
  thisOrnament.classList.add("itIsPassedThrought");
  let nextOrnament = allOrnaments[1];
  nextOrnament.classList.remove("itIsHidden");
  let partOfForm = document.querySelector(".corpus_section_form_fields");
  partOfForm.classList.remove("itIsHidden");
  guideReacts(1);
}

function setThisDataToDescription() {
  setNameToDes();
  setNicknameToDes();
  setSentenceToDes();
}
