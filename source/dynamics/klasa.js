import iteratorOfPointsLeft from './aside.js';
import {guideReacts} from './aside.js';
'use strict';
document.addEventListener('DOMContentLoaded', chooseYourAvatar)
function chooseYourAvatar () {
  let containers = document.querySelectorAll('.corpus_section_form_fields_fieldset-b_container_select-container')
  let avatars = document.querySelectorAll('.corpus_section_form_fields_fieldset-b_container_radio-lab-container')
  let amount = avatars.length
  for (let i = 0;i < amount;i++) {
    let item = avatars[i]
    item.addEventListener('click', function () {
      chooseThisAvatar(item, avatars, amount)
      setOnePartOfAttackDescription(i)
      synchronizeBackgroundsOfOtherOpts(containers)
      enableAttacks(i)
    })
  }
}
function chooseThisAvatar (item, avatars, amount) {
  item.querySelector('input').checked = true;
  for (let i=0; i<amount; i++){
      let av = avatars[i];
      av.classList.remove('isClicked');
  }
  item.classList.add('isClicked');
  iteratorOfPointsLeft.deletator();
  guideReacts(2);
}
function setOnePartOfAttackDescription (i) {
  let desPart = document.querySelector('p span.--des_klasa')
  let array = [
    ' uderzenie bronią brutalną.',
    ' uderzenie bronią strzelecką.',
    ' uderzenie bronią zdradziecką.',
    ' uderzenie bronią szaleńczą.',
    ' uderzenie bronią szarlatańską.',
    ' uderzenie bronią lub czymkolwiek, co wpadnie karłowi w łapska.'
  ]
  desPart.innerText = array[i]
  let nextDesPart = document.querySelector('p span.--des_epitet');
  nextDesPart.classList.add('itsHidden');
  let anotherNextDesPart = document.querySelector('.--des_zywiol');
  anotherNextDesPart.classList.add('itsHidden');
  let otherAnotherNextDesPart = document.querySelector('.--des_imie');
  otherAnotherNextDesPart.classList.add('itsHidden');
  let przDes = document.querySelector('.--des_przydomek');
  let zdaDes = document.querySelector('.--des_zdanie');
  przDes.classList.add('itsHidden');
  zdaDes.classList.add('itsHidden');
}
function synchronizeBackgroundsOfOtherOpts (containers) {
  let amount = containers.length
  for (let i = 0; i < amount; i++) {
    let cont = containers[i]
    let options = cont.querySelectorAll('option')
    let iter = options.length
    for (let x = 0; x < iter; x++) {
      let belt = cont.querySelectorAll('.corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt')[x]
      belt.style.backgroundColor = 'inherit'
    }
  }
}
function enableAttacks (i) {
  let enabledAttacks = document.querySelectorAll('.corpus_section_form_fields_fieldset-b_container_select-container')
  for (let x = 0; x < 6; x++) {
    let disabledItem = enabledAttacks[x]
    disabledItem.classList.remove('enabled')
    let opts = disabledItem.querySelectorAll('option')
    let amount = opts.length
    for (let j = 0;j < amount;j++) {
      if (opts[j].selected === true) {
        opts[j].selected = false
      }
    }
  }
  let enabledAttack = enabledAttacks[i]
  enabledAttack.classList.add('enabled')
}
