import {guideReacts} from './aside.js';
import zenscroll from './../../node_modules/zenscroll/zenscroll.js'
export function initializeNextSection(iterator){
    let allOrnaments = document.querySelectorAll('img.corpus_section_form_ornament-marker');
    let thisOrnament = allOrnaments[iterator-1];
    let nextOrnament = allOrnaments[iterator-1];
    thisOrnament.setAttribute("src", "./icons/pole.2.svg");
    thisOrnament.classList.add("itIsPassedThrought");
    nextOrnament.classList.remove("itIsHidden");
    //window.scrollTo(0, nextOrnament.offsetTop);
    zenscroll.toY(nextOrnament.offsetTop);
    enableNextSection(iterator);
}
function enableNextSection(iterator){
    let allSections = [
        undefined,
        document.querySelector('.corpus_section_form_fields'),
        document.querySelector('.corpus_section_form_field-C'),
        document.querySelector('.corpus_section_form_fields-2') 
    ];
    allSections[iterator].classList.remove('itIsHidden')
    guideReacts(iterator);
}