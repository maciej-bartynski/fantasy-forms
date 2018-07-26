import iteratorOfPointsLeft from './aside.js';
import {guideReacts} from './aside.js';
import {
    showBtnOfAcceptance
} from './form_initializeNextSection.js';
'use strict';
document.addEventListener('DOMContentLoaded', initializeThisSelect)

function initializeThisSelect() {
    let options = document.querySelectorAll('.corpus_section_form_fields-2_fieldset-d_container_moce');
    let iter = options.length;
    for (let i = 0; i < iter; i++) {
        let opt = options[i];
        opt.addEventListener('click', function () {
            itIsClicked(opt, options, iter, i);
            initUserFlowToNextSection_showBtnOfAcceptance();
        })
    }
}
function itIsClicked(opt, opts, iter, i) {
    let checks = document.querySelectorAll('input[name="moc-pietno"]');
    let costOfThis = [1,2,2,1,3,1];
    if (checks[i].checked===true){
        checks[i].checked=false;
        iteratorOfPointsLeft.iteratorB(costOfThis[i]);
    }else{
        checks[i].checked=true;
        iteratorOfPointsLeft.deletatorB(costOfThis[i]);
        //guideReacts(6);
    }
    for (let j = 0; j < iter; j++) {
        if (checks[j].checked === true) {
            opts[j].classList.remove('itIsHidden');
        }
        if (checks[j].checked === false) {
            opts[j].classList.add('itIsHidden');
        }
    }
}
let controller = 0;

function initUserFlowToNextSection_showBtnOfAcceptance() {
    if (controller === 0) {
        let btnContainerForThisSection = document.querySelector(
            ".corpus_section_form_field-A_btn-belt_btn-positioner.sixthSectionBtn"
        );
        let btnOfThisSection = btnContainerForThisSection.querySelector(
            ".corpus_section_form_field-A_btn-belt_btn-positioner_btn"
        );
        showBtnOfAcceptance(btnOfThisSection, btnContainerForThisSection);
        controller = 1;
    }
}