'use strict';
document.addEventListener('DOMContentLoaded', initializeThisSelect)

function initializeThisSelect() {
    hideUserGuide();
    let options = document.querySelectorAll('.corpus_section_form_fields-2_fieldset-d_container_moce');
    let iter = options.length;
    for (let i = 0; i < iter; i++) {
        let opt = options[i];
        opt.addEventListener('click', function () {
            itIsClicked(opt, options, iter, i);
        })
    }
}
function itIsClicked(opt, opts, iter, i) {
    let checks = document.querySelectorAll('input[name="moc-pietno"]');
    if (checks[i].checked===true){
        checks[i].checked=false;
    }else{
        checks[i].checked=true;
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
function hideUserGuide(){
    let btn = document.querySelector('.user-guide_hide');
    btn.addEventListener('click', rotateAndHideAside);
}
let controller=0;
function rotateAndHideAside(){
    let aside = document.querySelector('aside');
    if(controller===0){
        aside.style.transform="rotate(90deg)";
        aside.style.left="-150px";
        aside.style.top="10px";
        controller = 1;
    }else if(controller===1){
        aside.style.transform="rotate(0deg)";
        controller = 0;
    }
}