"use strict";
import iteratorOfPointsLeft from "./aside.js";
import {
  showBtnOfAcceptance
} from "./form_initializeNextSection.js";
import {
  objectToArray
} from "./object-to-array.js";
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
    attack.querySelector('select').addEventListener('change', function () {
      synchronizeBackgroundsOnChange(attack, options);
    });
    options.forEach(function (option) {
      if (option.selected === true) {
        option.selected = false;
      }
    });
  });
  attacks[i].classList.add("enabled");
}

function synchronizeBackgroundsOnChange(node, children) {
  let belts = objectToArray(
    node
    .querySelectorAll(".corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt"));
  belts.forEach(belt => belt.removeAttribute('style'));
  children.forEach(function (opt, idx) {
    if (opt.value === node.querySelector('select').value) {
      belts[idx].style.backgroundColor = 'rgb(30, 144, 255)';
      initUserFlowToNextSection_showBtnOfAcceptance();
      iteratorOfPointsLeft.iterator(node, idx);
    }
  })
};

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
      container
      .querySelectorAll(".corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt")).forEach(function (belt, idx) {
      belt.addEventListener('mouseover', function (event) {
        highlightBackground(container, event, idx);
      });
      belt.addEventListener('mouseout', function (event) {
        highlightBackground(container, event, idx);
      });
    });
  });
  /*
    
    let selectList = cont.querySelector("select");
    selectList.addEventListener("change", function() {
      for (let q = 0; q < iter; q++) {
        let opt = options[q];
        if (opt.value === selectList.value) {
          iteratorOfPointsLeft.iterator(cont, q);
          //guideReacts(3)
          initUserFlowToNextSection_showBtnOfAcceptance();
          synchronizeBackgroundsOfOtherOptns(cont, iter);
          synchronizeThisBckgrWithImageBeltHoverBckgr(opt, cont, q, true);
        }
      }
    });
  }*/
}

function highlightBackground(container, event, idx) {
  if (event.type === "mouseover") {
    container.querySelectorAll(
      ".corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt"
    )[idx].classList.add('JSonHover');
    container.querySelectorAll(
      "option"
    )[idx].classList.add('JSonHover');
  } else if (event.type === "mouseout") {
    container.querySelectorAll(
      ".corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt"
    )[idx].classList.remove('JSonHover');
    container.querySelectorAll(
      "option"
    )[idx].classList.remove('JSonHover');
  }
}