import { showBtnOfAcceptance } from './form_initializeNextSection.js'
'use strict'
document.addEventListener('DOMContentLoaded', function () {
  initUserFlowViaSection_selectNodesToThisProcess()
})
function initUserFlowViaSection_selectNodesToThisProcess () {
  let nodes = [
    document.querySelectorAll('input[name="klasa"]'),
    document.querySelectorAll('select[name="uderzenie"]'),
    document.querySelectorAll('input[name="nazwauderzenia"]')
  ]
  initUserFlowViaSection_goToNextNode(nodes);
  //nodes[2].addEventListener('change', function () {
    //let btnContainerForThisSection = document.querySelector('.corpus_section_form_field-A_btn-belt_btn-positioner.secondSectionBtn')
    //let btnOfThisSection = btnContainerForThisSection.querySelector('.corpus_section_form_field-A_btn-belt_btn-positioner_btn')
   // showBtnOfAcceptance(btnOfThisSection, btnContainerForThisSection)
  //})
}
function initUserFlowViaSection_goToNextNode(nodes){
    let amount = nodes.length;
    for (let i=0; i<amount; i++){
        let nodeSet = nodes[i];
        let optIterator = nodeSet.length;
        for (let j=0; j<optIterator; j++){
            let option = nodeSet[j];
            option.addEventListener('change', function(){
                goToNextNode(nodes, i);
            });
        }
    }
}

