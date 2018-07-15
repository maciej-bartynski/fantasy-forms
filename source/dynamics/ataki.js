import iteratorOfPointsLeft from './aside.js'
import { guideReacts } from './aside.js'
'use strict'
document.addEventListener('DOMContentLoaded', initializeAttacksPart)

function initializeAttacksPart () {
  let containers = document.querySelectorAll('.corpus_section_form_fields_fieldset-b_container_select-container')
  let amount = containers.length
  for (let i = 0; i < amount; i++) {
    let cont = containers[i]
    let options = cont.querySelectorAll('option')
    let iter = options.length
    for (let x = 0;x < iter;x++) {
      let opt = options[x]
      opt.addEventListener('mouseout', onMOut)
      opt.addEventListener('mouseenter', onMEnter)
      function onMEnter () {
        if (opt.selected === false) {
          synchronizeThisBckgrWithImageBeltHoverBckgr(opt, cont, x, true)
        }
      }
      function onMOut () {
        if (opt.selected === false) {
          synchronizeThisBckgrWithImageBeltHoverBckgr(opt, cont, x, false)
        }
      }
    }
    let selectList = cont.querySelector('select')
    selectList.addEventListener('change', function () {
      for (let q = 0; q < iter;q++) {
        let opt = options[q]
        if (opt.value === selectList.value) {
          iteratorOfPointsLeft.iterator(cont, q)
          guideReacts(3)
          synchronizeBackgroundsOfOtherOptns(cont, iter)
          synchronizeThisBckgrWithImageBeltHoverBckgr(opt, cont, q, true)
        }
      }
    })
  }
}
function synchronizeBackgroundsOfOtherOptns (cont, iter) {
  for (let x = 0; x < iter; x++) {
    let belt = cont.querySelectorAll('.corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt')[x]
    belt.style.backgroundColor = 'inherit'
  }
}

function synchronizeThisBckgrWithImageBeltHoverBckgr (opt, cont, x, isEnter) {
  let belt = cont.querySelectorAll('.corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt')[x]
  if (isEnter === true) {
    let style = window.getComputedStyle(opt)
    let bcgCol = style.getPropertyValue('background-color')
    belt.style.backgroundColor = bcgCol
  } else if (isEnter === false) {
    belt.style.backgroundColor = 'inherit'
  }
}
