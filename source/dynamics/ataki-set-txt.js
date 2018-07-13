'use strict'
document.addEventListener('DOMContentLoaded', initialize)
function initialize () {
  let opts = document.querySelectorAll(
    '.corpus_section_form_fields_fieldset-b_container_select-container_select-list option'
  )
  let amount = opts.length
  for (let i = 0; i < amount; i++) {
    let item = opts[i]
    item.addEventListener('click', function () {
      setIMG(i)
      enableStrikeNamePart()
      setStrikeNameToDes(i)
      setPartOfAttackDescription(i)
      setForceDes(i)
    })
  }
}
let onlyOnce = 0
function enableStrikeNamePart () {
  onlyOnce++
  if (onlyOnce === 1) {
    let item = document.querySelector('.strikeName')
    item.classList.remove('strikeName')
  }
}
function setPartOfAttackDescription (i) {
  let desPart = document.querySelector('p span.--des_epitet')
  desPart.classList.remove('itsHidden')
  let array = [
    'brutalne',
    'nieprzewidywalne',
    'wyćwiczone',
    'niezawodne',
    'precyzyjne',
    'zmasowane',
    'podstępne',
    'wyrachowane',
    'zdradzieckie',
    'szaleńcze',
    'opracowane w laboratorium alchemicznym',
    'niepowstrzymane',
    'władcze',
    'mroczne',
    'tajemne',
    'wściekłe',
    'wspierane mocą otchłani',
    'przesycone złą mocą'
  ]
  desPart.innerText = ', ' + array[i]
}
function setIMG (i) {
  let belt = document.querySelectorAll(
    '.corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt'
  )[i]
  let imag = belt.querySelectorAll('img')[0]
  let attryb = imag.getAttribute('src')
  let icon = document.querySelector('.--plate_img_icon')
  icon.setAttribute('src', attryb)
  let allIMGs = belt.querySelectorAll('img').length
  let standart = document.querySelector('.--standart_img_bckg')
  while (standart.querySelector('IMG') !== null) {
    let imageToDel = standart.querySelector('IMG')
    standart.removeChild(imageToDel)
  }
  for (let j = 0; j < allIMGs; j++) {
    if (j > 0) {
      let theIMG = belt.querySelectorAll('img')[j]
      let sourceIMG = theIMG.getAttribute('src')
      let newIMG = document.createElement('img')
      newIMG.setAttribute('src', sourceIMG)
      standart.appendChild(newIMG)
    }
  }
}
function setStrikeNameToDes (i) {
  let inp = document.querySelector('input[name="nazwauderzenia"]')
  inp.addEventListener('change', function () {
    let strName = inp.value
    let item = document.querySelector('.--des_nazwa-ciosu')
    item.innerText = strName + ' to legendarne'
    showAllDes()
  })
  inp.addEventListener('click', function () {
    let itm = inp.value
    if (itm.trim() !== '') {
      let strName = inp.value
      let item = document.querySelector('.--des_nazwa-ciosu')
      item.innerText = strName + ' to legendarne'
      showAllDes()
    }
  })
}
function setForceDes (i) {
  let belt = document.querySelectorAll(
    '.corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt'
  )[i]
  let IMGs = belt.querySelectorAll('img')
  let iter = IMGs.length
  let strng = []
  for (let j = 0; j < iter; j++) {
    let IMG = IMGs[j]
    let attryb = IMG.getAttribute('src')
    if (j !== 0) {
      if (attryb === 'icons/bron-barba.svg') {
        strng.push('dodatkową mocą uderzeniową')
      } else if (attryb === 'icons/bron-czar.svg') {
        strng.push('dodatkową mocą czarnoksięską')
      } else if (attryb === 'icons/bron-strz.svg') {
        strng.push('dodatkowym kunsztem strzeleckim')
      } else if (attryb === 'icons/bron-szal.svg') {
        strng.push('dodatkowym szaleństwem')
      } else if (attryb === 'icons/bron-zdra.svg') {
        strng.push('niespodzianym zdradliwym ciosem')
      } else if (attryb === 'icons/zyw-ogien.svg') {
        strng.push('żywiołem ognia')
      } else if (attryb === 'icons/zyw-rozklad.svg') {
        strng.push('żywiołem rozkładu')
      } else if (attryb === 'icons/zyw-wod.svg') {
        strng.push('żywiołem wody')
      } else if (attryb === 'icons/zyw-zmiana.svg') {
        strng.push('żywiołem zmiany')
      } else if (attryb === 'icons/zyw-zywia.svg') {
        strng.push('żywiołem żywii')
      } else {
        strng.push('własną mądrością żywiołów i talentów')
      }
    }
  }
  setNameToDes()
  let stringToSet = strng.join(', ')
  let spnDes = document.querySelector('.--des_zywiol')
  spnDes.classList.remove('itsHidden')
  spnDes.innerText = stringToSet + '.'
}
function setNameToDes () {
  let inp = document.querySelector('input[name="imie"]')
  let nam = inp.value
  let inpB = document.querySelector('input[name="przydomek"]')
  let surnam = inpB.value
  let item = document.querySelector('.--des_imie')
  item.innerText = nam + ' ' + surnam + ' wzmacnia swój atak '
  item.classList.remove('itsHidden')
}
function showAllDes () {
  let allDes = document.querySelector('.--des')
  allDes.classList.remove('itsHidden')
}
