"use strict";
document.addEventListener("DOMContentLoaded", initializeThisSection);

function initializeThisSection() {
    let listA = document.querySelector(
        ".corpus_section_form_fieldset-c #zaslona"
    );
    let listB = document.querySelector(
        ".corpus_section_form_fieldset-c #pancerz"
    );
    let imagesA = document.querySelectorAll(
        ".corpus_section_form_fieldset-c_imgs_img.a"
    );
    let imagesB = document.querySelectorAll(
        ".corpus_section_form_fieldset-c_imgs_img.b"
    );
    let optsA = listA.querySelectorAll("option");
    let optsB = listB.querySelectorAll("option");
    dynamizeThisList(listA, optsA, imagesA, listB);
    dynamizeThisList(listB, optsB, imagesB, listA);
}

function dynamizeThisList(list, opts, images, otherList) {
    list.addEventListener("change", function () {
        let value = list.value;
        let iter = opts.length;
        for (let j = 0; j < iter - 1; j++) {
            images[j].classList.add("itIsUnselected");
        }
        for (let i = 0; i < iter; i++) {
            let opt = opts[i];
            let optValue = opt.value;
            if (value === optValue && i !== 3) {
                images[i].classList.remove("itIsUnselected");
            }
        }
        enableNextFormPart(list, otherList);
    });
}

function enableNextFormPart(list, otherList) {
    let a = list.value;
    let b = otherList.value;
    if (a !== "" && b !== "") {
        let nextPart = document.querySelector('.corpus_section_form_fields-2');
        nextPart.classList.remove('itIsHidden');
        let allOrnaments = document.querySelectorAll('img.corpus_section_form_ornament-marker');
        let thisOrnament = allOrnaments[2];
        thisOrnament.setAttribute('src', './icons/pole.svg');
        thisOrnament.classList.add('itIsPassedThrought');
        let nextOrnament = allOrnaments[3];
        nextOrnament.classList.remove('itIsHidden');
    }
}