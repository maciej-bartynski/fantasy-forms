import {
    initializeNextSection
} from './form_initializeNextSection.js';
import {
    setNameToDes
} from "./ataki-set-txt.js";
import {
    setNicknameToDes
} from "./ataki-set-txt.js";
import {
    setSentenceToDes
} from "./ataki-set-txt.js";
'use strict';
document.addEventListener('DOMContentLoaded', function () {
    initUserFlowViaSection_selectNodesToThisProcess();
});

function initUserFlowViaSection_selectNodesToThisProcess() {
    let nodes = [
        document.querySelector('input[name="imie"]'),
        document.querySelector('input[name="przydomek"]'),
        document.querySelector('input[name="zawolanie"]')
    ];
    nodes.forEach((node, idx) => node.addEventListener('keyup', function (event) {
        let sectionCompleted = initUserFlowToNextSection_checkIfThisSectionIsCompleted(nodes);
        if (event.keyCode === 13 && sectionCompleted !== true) {
            initUserFlowViaSection_goToNextNode(node, idx, nodes);
        } else if (event.keyCode === 13 && sectionCompleted === true) {
            node.blur();
            initUserFlowToNextSection_showBtnOfAcceptance();
        }
    }));
    nodes.forEach((node, idx) => node.addEventListener('change', function (event) {
        let sectionCompleted = initUserFlowToNextSection_checkIfThisSectionIsCompleted(nodes);
        if (sectionCompleted === true) {
            initUserFlowToNextSection_showBtnOfAcceptance();
        }
    }));
}

function initUserFlowViaSection_goToNextNode(node, idx, nodes) {
    node.blur();
    if (idx < 2) {
        nodes[idx + 1].focus();
    } else if (idx === 2) {
        nodes[0].focus();
    }
}

function initUserFlowToNextSection_checkIfThisSectionIsCompleted(nodes) {
    let arr = [false, false, false];
    nodes.forEach(function (node, idx) {
        if (node.value.trim() === "") {
            arr[idx] = false;
        } else {
            arr[idx] = true;
        }
    });
    if (arr.indexOf(false) === -1) {
        return true;
    } else {
        return false;
    }
}

function initUserFlowToNextSection_showBtnOfAcceptance() {
    let acceptationBtn = document.querySelector('.corpus_section_form_field-A_btn-belt_btn-positioner.firstSectionBtn');
    acceptationBtn.classList.remove('itIsHidden');
    acceptationBtn.addEventListener('click', function () {
        setCurrentDataToAvatarDescription();
        initializeNextSection(1);
        //initializeNextGuideText(1);
        //thisIsClicked(acceptationBtn);
    })
}

function setCurrentDataToAvatarDescription() {
    setNameToDes();
    setNicknameToDes();
    setSentenceToDes();
}