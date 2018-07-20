import {
    showBtnOfAcceptance
} from './form_initializeNextSection.js';
import {
    objectToArray
} from './object-to-array.js';
import {
    enableAttacks
} from './form_section-three.js';
'use strict'
document.addEventListener('DOMContentLoaded', function () {
    initUserFlowViaSection_selectNodesToThisProcess();
})

function initUserFlowViaSection_selectNodesToThisProcess() {
    let avatarObjects = document.querySelectorAll('.corpus_section_form_fields_fieldset-b_container_radio-lab-container');
    let avatars = objectToArray(avatarObjects);
    avatars.forEach((item, idx) => item.addEventListener('click', function () {
        avatarIsClicked(item, avatars, idx);
    }));
}

function avatarIsClicked(avatar, avatars, idx) {
    avatars.forEach(item => item.classList.remove('isClicked'));
    let av = avatar.querySelector('input');
    av.checked = true;
    avatar.classList.add('isClicked');
    initUserFlowToNextSection_showBtnOfAcceptance(idx);
}
let controller = 0;

function initUserFlowToNextSection_showBtnOfAcceptance(idx) {
    enableAttacks(idx);
    if (controller === 0) {
        let btnContainerForThisSection = document.querySelector('.corpus_section_form_field-A_btn-belt_btn-positioner.secondSectionBtn')
        let btnOfThisSection = btnContainerForThisSection.querySelector('.corpus_section_form_field-A_btn-belt_btn-positioner_btn')
        showBtnOfAcceptance(btnOfThisSection, btnContainerForThisSection)
        controller = 1;
    }
}



/*function initUserFlowViaSection_selectNodesToThisProcess () {
  let nodes = [
    document.querySelectorAll('input[name="klasa"]'),
    document.querySelectorAll('select[name="uderzenie"]'),
    document.querySelectorAll('input[name="nazwauderzenia"]')
  ]
  initUserFlowViaSection_goToNextNode(nodes);
  //nodes[2].addEventListener('change', function () {
    //let btnContainerForThisSection = document.querySelector('.corpus_section_form_field-A_btn-belt_btn-positioner.secondSectionBtn')
    //let btnOfThisSection = btnContainerForThisSection.querySelector('.corpus_section_form_field-A_btn-belt_btn-positioner_btn')
   // showBtnOfAcceptance(btnOfThisSection, btnContainerForThisSection)
  //})
}
function initUserFlowViaSection_goToNextNode(nodes){
    let amount = nodes.length;
    for (let i=0; i<amount; i++){
        let nodeSet = nodes[i];
        let optIterator = nodeSet.length;
        for (let j=0; j<optIterator; j++){
            let option = nodeSet[j];
            option.addEventListener('change', function(){
                goToNextNode(nodes, i);
            });
        }
    }
}
*/