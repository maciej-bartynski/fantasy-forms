'use strict';
document.addEventListener('DOMContentLoaded', initializeThisSelect)

function initializeThisSelect() {
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
