
'use strict';
document.addEventListener('DOMContentLoaded', chooseYourAvatar);
function chooseYourAvatar(){
    let containers = document.querySelectorAll('.corpus_section_form_fields_fieldset-b_container_select-container');
    let avatars = document.querySelectorAll('.corpus_section_form_fields_fieldset-b_container_radio-lab-container');
    let amount = avatars.length;
    for (let i=0;i<amount;i++){
        let item = avatars[i];
        item.addEventListener('click', function () {
            chooseThisAvatar(item);
            setOnePartOfAttackDescription(i);
            synchronizeBackgroundsOfOtherOpts(containers);
            enableAttacks(i);
        });
    }
}
function chooseThisAvatar(item) {
    item.querySelector('input').checked=true;
}
function setOnePartOfAttackDescription(i){
    let desPart = document.querySelector('p span.--des_klasa');
    let array = [
        'brutalną.',
        'strzelecką.',
        'zdradziecką.',
        'szaleńczą.',
        'szarlatańską.',
        'lub czymkolwiek, co wpadnie karłowi w łapska.'
    ]
    desPart.innerText=array[i];
}
function synchronizeBackgroundsOfOtherOpts(containers){
    let amount = containers.length;
    for (let i = 0; i < amount; i++) {
        let cont = containers[i];
        let options = cont.querySelectorAll('option');
        let iter = options.length;
        for (let x = 0; x < iter; x++) {
            let belt = cont.querySelectorAll('.corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt')[x];
            belt.style.backgroundColor="inherit";
        }
    }
}
function enableAttacks(i) {
    let enabledAttacks = document.querySelectorAll('.corpus_section_form_fields_fieldset-b_container_select-container');
    for (let x=0; x<6; x++){
        let disabledItem = enabledAttacks[x];
        disabledItem.classList.remove('enabled');
        let opts = disabledItem.querySelectorAll('option');
        let amount = opts.length;
        for (let j=0;j<amount;j++){
            if (opts[j].selected===true){
                opts[j].selected=false;
            };
        }
    }
    let enabledAttack = enabledAttacks[i];
    enabledAttack.classList.add('enabled');
}