import iteratorOfPointsLeft from './aside.js';
import {
    showBtnOfAcceptance
} from './form_initializeNextSection.js';
'use strict';
document.addEventListener('DOMContentLoaded', init);

function init() {
    let btns = document.querySelectorAll('.corpus_section_form_fields-2_fieldset-d_container_atryb .--belt_icon-container');
    let belts = document.querySelectorAll('.corpus_section_form_fields-2_fieldset-d_container_atryb .--belt_body-container_body');
    let iter = btns.length;
    for (let i = 0; i < iter; i++) {
        if (i > -1) {
            let attryb = btns[i];
            let belt = belts[i];
            attryb.addEventListener('click', function () {
                if (iteratorOfPointsLeft.left > 0) {
                    addPoint(belt)
                }
            });
        }
    }
}

function addPoint(belt) {
    let IMG = document.createElement('IMG');
    IMG.setAttribute('src', 'icons/ikona-poteg.svg');
    belt.appendChild(IMG);
    iteratorOfPointsLeft.left--;
    iteratorOfPointsLeft.equalizator();
    IMG.addEventListener('click', function () {
        deleteThisIMG(IMG)
    })
}

function deleteThisIMG(x) {
    x.remove();
    iteratorOfPointsLeft.left++;
    iteratorOfPointsLeft.equalizator();
}

let controller = 0;

export function initUserFlowToNextSection_showLastBtnOfAcceptance() {
    if (controller === 0) {
        let btnContainerForThisSection = document.querySelector(
            ".corpus_section_form_field-A_btn-belt_btn-positioner.seventhSectionBtn"
        );
        let btnOfThisSection = btnContainerForThisSection.querySelector(
            ".corpus_section_form_field-A_btn-belt_btn-positioner_btn"
        );
        showBtnOfAcceptance(btnOfThisSection, btnContainerForThisSection);
        controller = 1;
        clickBtnOfAcceptance(btnOfThisSection);
    }
}
function clickBtnOfAcceptance(btn){
    let clickBtn = document.createEvent('MouseEvent');
    clickBtn.initMouseEvent('click');
    btn.dispatchEvent(clickBtn);
}