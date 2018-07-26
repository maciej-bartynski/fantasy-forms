"use strict";
import iteratorOfPointsLeft from "./aside.js";
import {
  showBtnOfAcceptance
} from "./form_initializeNextSection.js";
import {
  objectToArray
} from "./object-to-array.js";
import {
  useThisValueToCreateDescription
} from './form_section-fourth.js';
document.addEventListener("DOMContentLoaded", initializeAttacksPart);
export function enableAttacks(i) {
  let attacks = objectToArray(
    document.querySelectorAll(
      ".corpus_section_form_fields_fieldset-b_container_select-container"
    )
  );
  attacks.forEach(function (attack, idx) {
    attack.classList.remove("enabled");
    let options = objectToArray(attack.querySelectorAll("option"));
    attack.querySelector("select").addEventListener("change", function () {
      synchronizeBackgroundsOnChange(attack, options);
      sendListValueToFunctionThatSendsItFurther(attack.querySelector("select").value, 1);
      sendIMGlistToFunctionThatSendsItFurther(attack, options);
      sendPowersToFunctionThatSensItFurther(attack, options);
    });
    attack.querySelector("select").addEventListener("blur", function () {
      synchronizeBackgroundsOnBlur(
        attack,
        attack.querySelector("select"),
        options
      );
    });
    options.forEach(function (option) {
      if (option.selected === true) {
        option.selected = false;
      }
    });
    objectToArray(
      attack.querySelectorAll(
        ".corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt"
      )
    ).forEach(function (belt) {
      belt.classList.remove("JSonBlur", "JSonSelect");
    });
  });
  attacks[i].classList.add("enabled");
}

function synchronizeBackgroundsOnChange(node, children) {
  let belts = objectToArray(
    node.querySelectorAll(
      ".corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt"
    )
  );
  belts.forEach(belt => belt.classList.remove("JSonSelect", "JSonBlur"));
  children.forEach(function (opt, idx) {
    if (opt.value === node.querySelector("select").value) {
      belts[idx].classList.add("JSonSelect");
      initUserFlowToNextSection_showBtnOfAcceptance();
      iteratorOfPointsLeft.iterator(node, idx);
    }
  });
}

function synchronizeBackgroundsOnBlur(node, list, options) {
  options.forEach(function (option, idx) {
    if (option.value === list.value) {
      node
        .querySelectorAll(
          ".corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt"
        )[idx].classList.add("JSonBlur");
    }
  });
}

let controller = 0;

function initUserFlowToNextSection_showBtnOfAcceptance() {
  if (controller === 0) {
    let btnContainerForThisSection = document.querySelector(
      ".corpus_section_form_field-A_btn-belt_btn-positioner.thirdSectionBtn"
    );
    let btnOfThisSection = btnContainerForThisSection.querySelector(
      ".corpus_section_form_field-A_btn-belt_btn-positioner_btn"
    );
    showBtnOfAcceptance(btnOfThisSection, btnContainerForThisSection);
    controller = 1;
  }
}

function initializeAttacksPart() {
  objectToArray(
    document.querySelectorAll(
      ".corpus_section_form_fields_fieldset-b_container_select-container"
    )
  ).forEach(function (container) {
    //on select-list option mouse hover over
    objectToArray(container.querySelectorAll("option")).forEach(function (
      option,
      idx
    ) {
      option.addEventListener("mouseout", function (event) {
        highlightBackground(container, event, idx);
      });
      option.addEventListener("mouseover", function (event) {
        highlightBackground(container, event, idx);
      });
    });
    //option-like div
    objectToArray(
      container.querySelectorAll(
        ".corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt"
      )
    ).forEach(function (belt, idx) {
      belt.addEventListener("mouseover", function (event) {
        highlightBackground(container, event, idx);
      });
      belt.addEventListener("mouseout", function (event) {
        highlightBackground(container, event, idx);
      });
      belt.addEventListener("click", function (event) {
        let changeEv = document.createEvent('Event')
        changeEv.initEvent('change');
        container.querySelectorAll("option")[idx].selected = true;
        container.querySelector("select").dispatchEvent(changeEv);
      });
    });
  });
}

function highlightBackground(container, event, idx) {
  if (event.type === "mouseover") {
    container
      .querySelectorAll(
        ".corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt"
      )[idx].classList.add("JSonHover");
    container.querySelectorAll("option")[idx].classList.add("JSonHover");
  } else if (event.type === "mouseout") {
    container
      .querySelectorAll(
        ".corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt"
      )[idx].classList.remove("JSonHover");
    container.querySelectorAll("option")[idx].classList.remove("JSonHover");
  }
}

function sendListValueToFunctionThatSendsItFurther(string, iter) {
  string = string.toLowerCase();
  useThisValueToCreateDescription(string, iter);
}

function sendIMGlistToFunctionThatSendsItFurther(attack, options) {
  options.forEach(function (opt, idx) {
    if (opt.value === attack.querySelector('select').value) {
      sendIMG(attack.querySelectorAll('.corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt')[idx]);
    }
  })
}

function sendIMG(beltOfImages) {
  let imag = beltOfImages.querySelectorAll('img')[0];
  let attryb = imag.getAttribute('src');
  let icon = document.querySelector('.--plate_img_icon');
  icon.setAttribute('src', attryb);
  let allIMGs = beltOfImages.querySelectorAll('img').length;
  let standart = document.querySelector('.--standart_img_bckg');
  while (standart.querySelector('IMG') !== null) {
    let imageToDel = standart.querySelector('IMG');
    standart.removeChild(imageToDel);
  }
  for (let j = 0; j < allIMGs; j++) {
    if (j > 0) {
      let theIMG = beltOfImages.querySelectorAll('img')[j];
      let sourceIMG = theIMG.getAttribute('src');
      let newIMG = document.createElement('img');
      newIMG.setAttribute('src', sourceIMG);
      standart.appendChild(newIMG);
    }
  }
}

function sendPowersToFunctionThatSensItFurther(node, opts) {
  let iterator;
  opts.forEach(function (opt, idx) {
    if (opt.value === node.querySelector('select').value) {
      iterator = idx;
    }
  })
  let belt = node.querySelectorAll(
    '.corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt'
  )[iterator];
  let strng = [];
  let IMGs = objectToArray(belt.querySelectorAll('img'));
  IMGs.forEach(function (IMG, idx) {
    if (idx !== 0) {
      let attryb = IMG.getAttribute('src');
      if (attryb === 'icons/bron-barba.svg') {
        strng.push('dodatkową mocą uderzeniową')
      } else if (attryb === 'icons/bron-czar.svg') {
        strng.push('dodatkową mocą czarnoksięską')
      } else if (attryb === 'icons/bron-strz.svg') {
        strng.push('dodatkowym kunsztem strzeleckim')
      } else if (attryb === 'icons/bron-szal.svg') {
        strng.push('dodatkowym szaleństwem')
      } else if (attryb === 'icons/bron-zdra.svg') {
        strng.push('niespodzianym zdradliwym ciosem')
      } else if (attryb === 'icons/zyw-ogien.svg') {
        strng.push('żywiołem ognia')
      } else if (attryb === 'icons/zyw-rozklad.svg') {
        strng.push('żywiołem rozkładu')
      } else if (attryb === 'icons/zyw-wod.svg') {
        strng.push('żywiołem wody')
      } else if (attryb === 'icons/zyw-zmiana.svg') {
        strng.push('żywiołem zmiany')
      } else if (attryb === 'icons/zyw-zywia.svg') {
        strng.push('żywiołem żywii')
      } else {
        strng.push('własną mądrością żywiołów i talentów')
      }
    }
  });
  strng = strng.join(', ')
  useThisValueToCreateDescription(strng + '.', 6);
}