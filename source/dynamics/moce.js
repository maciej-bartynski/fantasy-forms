'use strict';
document.addEventListener('DOMContentLoaded', initializeThisSelect)
function initializeThisSelect(){
    let options = document.querySelectorAll('.corpus_section_form_fields-2_fieldset-d_container_moce');
    let iter = options.length;
    for (let i=0;i<iter;i++){
        let opt=options[i];
        opt.addEventListener('click', function (){itIsClicked(opt, options, iter)})
    }
}
function itIsClicked(opt, opts, iter) {
    for (let j=0;j<iter;j++){
        opts[j].classList.add('itIsHidden');
    }
    opt.classList.remove('itIsHidden');
}