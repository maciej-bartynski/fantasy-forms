'use strict';
document.addEventListener('DOMContentLoaded', initializeThisSection);

function initializeThisSection() {
    let listA = document.querySelector('.corpus_section_form_fieldset-c #zaslona');
    let listB = document.querySelector('.corpus_section_form_fieldset-c #pancerz');
    let imagesA = document.querySelectorAll('.corpus_section_form_fieldset-c_imgs_img.a');
    let imagesB = document.querySelectorAll('.corpus_section_form_fieldset-c_imgs_img.b');
    let optsA = listA.querySelectorAll('option');
    let optsB = listB.querySelectorAll('option');
    dynamizeThis(optsA, imagesA);
    dynamizeThis(optsB, imagesB);
}

function dynamizeThis(setOfOptions, setOfImages) {
    let itms = setOfOptions;
    let iter = itms.length;
    let optD = itms[3];
    for (let i = 0; i < iter; i++) {
        let opt = itms[i];
        let imag = setOfImages[i];
        opt.addEventListener('click', function () {
            for (let j = 0; j < iter - 1; j++) {
                setOfImages[j].classList.add('itIsUnselected');
            }
            if (opt !== optD) {
                imag.classList.remove('itIsUnselected');
            }
        })
    }
}