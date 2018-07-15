import iteratorOfPointsLeft from './aside.js';
'use strict';
document.addEventListener('DOMContentLoaded', init);

function init() {
    let btns = document.querySelectorAll('.corpus_section_form_fields-2_fieldset-d_container_atryb .--belt_icon-container');
    let belts = document.querySelectorAll('.corpus_section_form_fields-2_fieldset-d_container_atryb .--belt_body-container_body');
    let iter = btns.length;
    for (let i = 0; i < iter; i++) {
        if (i > 4) {
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
    //amountOfPoints--;
    iteratorOfPointsLeft.left--;
    iteratorOfPointsLeft.equalizator();
    IMG.addEventListener('click', function () {
        deleteThisIMG(IMG)
    })
}

function deleteThisIMG(x) {
    x.remove();
    //amountOfPoints++;
    iteratorOfPointsLeft.left++;
    iteratorOfPointsLeft.equalizator();
}