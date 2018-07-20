"use strict";
import iteratorOfPointsLeft from "./aside.js";
import { showBtnOfAcceptance } from "./form_initializeNextSection.js";
import { objectToArray } from "./object-to-array.js";
document.addEventListener("DOMContentLoaded", initializeAttacksPart);
export function enableAttacks(i) {
  let attacks = objectToArray(
    document.querySelectorAll(
      ".corpus_section_form_fields_fieldset-b_container_select-container"
    )
  );
  attacks.forEach(function(attack, idx) {
    attack.classList.remove("enabled");
    let options = objectToArray(attack.querySelectorAll("option"));
    options.forEach(function(option) {
      if (option.selected === true) {
        option.selected = false;
      }
    });
  });
  attacks[i].classList.add("enabled");
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
  ).forEach(function(container) {
    objectToArray(container.querySelectorAll("option")).forEach(function(
      option,
      idx
    ) {
      option.addEventListener("mouseout", function(event) {
        highlightBackground(container, option, event, idx);
      });
      option.addEventListener("mouseenter", function(event) {
        highlightBackground(container, option, event, idx);
      });
    });
    //
    container.querySelector("select").addEventListener('change',function(event){
        //tu bedzie dalej jutrop
    });
  });
  /*let amount = containers.length;
  for (let i = 0; i < amount; i++) {
    let cont = containers[i];
    let options = cont.querySelectorAll("option");
    let iter = options.length;
    for (let x = 0; x < iter; x++) {
      let opt = options[x];
      opt.addEventListener("mouseout", onMOut);
      opt.addEventListener("mouseenter", onMEnter);
      function onMEnter() {
        if (opt.selected === false) {
          synchronizeThisBckgrWithImageBeltHoverBckgr(opt, cont, x, true);
        }
      }
      function onMOut() {
        if (opt.selected === false) {
          synchronizeThisBckgrWithImageBeltHoverBckgr(opt, cont, x, false);
        }
      }
    }
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
function highlightBackground(container, option, event, idx) {
  if (event.type === "mouseenter") {
    let style = window
      .getComputedStyle(option)
      .getPropertyValue("background-color");
    container.querySelectorAll(
      ".corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt"
    )[idx].style.backgroundColor = style;
  } else if (event.type === "mouseout") {
    container.querySelectorAll(
      ".corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt"
    )[idx].style.backgroundColor =
      "inherit";
  }
}
function synchronizeBackgroundsOfOtherOptns(cont, iter) {
  for (let x = 0; x < iter; x++) {
    let belt = cont.querySelectorAll(
      ".corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt"
    )[x];
    belt.style.backgroundColor = "inherit";
  }
}
