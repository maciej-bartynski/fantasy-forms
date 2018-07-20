'use strict';
import iteratorOfPointsLeft from './aside.js'
import {
    showBtnOfAcceptance
} from './form_initializeNextSection.js';
document.addEventListener('DOMContentLoaded', initializeAttacksPart);
export function enableAttacks(i) {
    let enabledAttacks = document.querySelectorAll('.corpus_section_form_fields_fieldset-b_container_select-container')
    for (let x = 0; x < 6; x++) {
        let disabledItem = enabledAttacks[x]
        disabledItem.classList.remove('enabled')
        let opts = disabledItem.querySelectorAll('option')
        let amount = opts.length
        for (let j = 0; j < amount; j++) {
            if (opts[j].selected === true) {
                opts[j].selected = false
            }
        }
    }
    let enabledAttack = enabledAttacks[i]
    enabledAttack.classList.add('enabled');
}
let controller = 0;

function initUserFlowToNextSection_showBtnOfAcceptance() {
    if (controller === 0) {
        let btnContainerForThisSection = document.querySelector('.corpus_section_form_field-A_btn-belt_btn-positioner.thirdSectionBtn')
        let btnOfThisSection = btnContainerForThisSection.querySelector('.corpus_section_form_field-A_btn-belt_btn-positioner_btn')
        showBtnOfAcceptance(btnOfThisSection, btnContainerForThisSection)
        controller = 1;
    }
}

function initializeAttacksPart() {
    let containers = document.querySelectorAll('.corpus_section_form_fields_fieldset-b_container_select-container')
    let amount = containers.length
    for (let i = 0; i < amount; i++) {
        let cont = containers[i]
        let options = cont.querySelectorAll('option')
        let iter = options.length
        for (let x = 0; x < iter; x++) {
            let opt = options[x]
            opt.addEventListener('mouseout', onMOut)
            opt.addEventListener('mouseenter', onMEnter)

            function onMEnter() {
                if (opt.selected === false) {
                    synchronizeThisBckgrWithImageBeltHoverBckgr(opt, cont, x, true)
                }
            }

            function onMOut() {
                if (opt.selected === false) {
                    synchronizeThisBckgrWithImageBeltHoverBckgr(opt, cont, x, false)
                }
            }
        }
        let selectList = cont.querySelector('select')
        selectList.addEventListener('change', function () {
            for (let q = 0; q < iter; q++) {
                let opt = options[q]
                if (opt.value === selectList.value) {
                    iteratorOfPointsLeft.iterator(cont, q)
                    //guideReacts(3)
                    initUserFlowToNextSection_showBtnOfAcceptance();
                    synchronizeBackgroundsOfOtherOptns(cont, iter)
                    synchronizeThisBckgrWithImageBeltHoverBckgr(opt, cont, q, true)
                }
            }
        })
    }
}

function synchronizeBackgroundsOfOtherOptns(cont, iter) {
    for (let x = 0; x < iter; x++) {
        let belt = cont.querySelectorAll('.corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt')[x]
        belt.style.backgroundColor = 'inherit'
    }
}

function synchronizeThisBckgrWithImageBeltHoverBckgr(opt, cont, x, isEnter) {
    let belt = cont.querySelectorAll('.corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt')[x]
    if (isEnter === true) {
        let style = window.getComputedStyle(opt)
        let bcgCol = style.getPropertyValue('background-color')
        belt.style.backgroundColor = bcgCol
    } else if (isEnter === false) {
        belt.style.backgroundColor = 'inherit'
    }
}