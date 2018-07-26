import {
    showBtnOfAcceptance
} from './form_initializeNextSection';
'use strict';
document.addEventListener('DOMContentLoaded', initializeUserFlowViaSectionOfDescriptions);

function initializeUserFlowViaSectionOfDescriptions() {
    let strikeName = document.querySelector('input[name="nazwauderzenia"]');
    strikeName.addEventListener('change', function () {
        showDescription();
        initUserFlowToNextSection_showBtnOfAcceptance();
        if (strikeName.value.trim() !== '') {
            useThisValueToCreateDescription(strikeName.value + ' to', 0);
        } else {
            useThisValueToCreateDescription('Gdy już wpiszesz nazwę tego uderzenia, to zasłynie ono jako', 0);
        }
    });
}
export function useThisValueToCreateDescription(string, integer) {
    let spans = document.querySelectorAll('p.--des span');
    spans[integer].innerText = string;
}
let onlyOnce = 0

function showDescription() {
    onlyOnce++
    if (onlyOnce === 1) {
        let item = document.querySelector('p.--des');
        item.classList.remove('itsHidden');
    }
}
let controller = 0;

function initUserFlowToNextSection_showBtnOfAcceptance() {
    if (controller === 0) {
        let btnContainerForThisSection = document.querySelector(
            ".corpus_section_form_field-A_btn-belt_btn-positioner.fourthSectionBtn"
        );
        let btnOfThisSection = btnContainerForThisSection.querySelector(
            ".corpus_section_form_field-A_btn-belt_btn-positioner_btn"
        );
        showBtnOfAcceptance(btnOfThisSection, btnContainerForThisSection);
        controller = 1;
    }
}
/*
function setStrikeNameOntoDescription(i) {
    let inp = document.querySelector('input[name="nazwauderzenia"]')
    inp.addEventListener('keyup', function () {
        let strName = inp.value;
        let item = document.querySelector('.--des_nazwa-ciosu');
        item.innerText = strName + ' to legendarne';
        showAllDes();
    })
    inp.addEventListener('change', function () {
        let itm = inp.value
        if (itm.trim() !== '' && setNextPartOfFormulaForTheFirstTime === 0) {
            let strName = inp.value
            let item = document.querySelector('.--des_nazwa-ciosu')
            item.innerText = strName + ' to legendarne'
            showAllDes();
            setNextPartOfFormula();
            setNextPartOfFormulaForTheFirstTime = 1;
        }
    })
}*/