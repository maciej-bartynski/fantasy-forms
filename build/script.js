(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', initialize);

    function initialize() {
      var opts = document.querySelectorAll('.corpus_section_form_fields_fieldset-b_container_select-container_select-list option');
      var amount = opts.length;

      var _loop = function _loop(i) {
        var item = opts[i];
        item.addEventListener('click', function () {
          setIMG(i);
          enableStrikeNamePart();
          setStrikeNameToDes(i);
          setPartOfAttackDescription(i);
          setForceDes(i);
        });
      };

      for (var i = 0; i < amount; i++) {
        _loop(i);
      }
    }
    var onlyOnce = 0;

    function enableStrikeNamePart() {
      onlyOnce++;
      if (onlyOnce === 1) {
        var item = document.querySelector('.strikeName');
        item.classList.remove('strikeName');
      }
    }

    function setPartOfAttackDescription(i) {
      var desPart = document.querySelector('p span.--des_epitet');
      desPart.classList.remove('itsHidden');
      var array = ['brutalne', 'nieprzewidywalne', 'wyćwiczone', 'niezawodne', 'precyzyjne', 'zmasowane', 'podstępne', 'wyrachowane', 'zdradzieckie', 'szaleńcze', 'opracowane w laboratorium alchemicznym', 'niepowstrzymane', 'władcze', 'mroczne', 'tajemne', 'wściekłe', 'wspierane mocą otchłani', 'przesycone złą mocą'];
      desPart.innerText = ', ' + array[i];
    }

    function setIMG(i) {
      var belt = document.querySelectorAll('.corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt')[i];
      var imag = belt.querySelectorAll('img')[0];
      var attryb = imag.getAttribute('src');
      var icon = document.querySelector('.--plate_img_icon');
      icon.setAttribute('src', attryb);
      var allIMGs = belt.querySelectorAll('img').length;
      var standart = document.querySelector('.--standart_img_bckg');
      while (standart.querySelector('IMG') !== null) {
        var imageToDel = standart.querySelector('IMG');
        standart.removeChild(imageToDel);
      }
      for (var j = 0; j < allIMGs; j++) {
        if (j > 0) {
          var theIMG = belt.querySelectorAll('img')[j];
          var sourceIMG = theIMG.getAttribute('src');
          var newIMG = document.createElement('img');
          newIMG.setAttribute('src', sourceIMG);
          standart.appendChild(newIMG);
        }
      }
    }

    function setStrikeNameToDes(i) {
      var inp = document.querySelector('input[name="nazwauderzenia"]');
      inp.addEventListener('keyup', function () {
        var strName = inp.value;
        var item = document.querySelector('.--des_nazwa-ciosu');
        item.innerText = strName + ' to legendarne';
        showAllDes();
        setNextPartOfFormula();
      });
      inp.addEventListener('change', function () {
        var itm = inp.value;
        if (itm.trim() !== '') {
          var strName = inp.value;
          var item = document.querySelector('.--des_nazwa-ciosu');
          item.innerText = strName + ' to legendarne';
          showAllDes();
          setNextPartOfFormula();
        }
      });
    }

    function setForceDes(i) {
      var belt = document.querySelectorAll('.corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt')[i];
      var IMGs = belt.querySelectorAll('img');
      var iter = IMGs.length;
      var strng = [];
      for (var j = 0; j < iter; j++) {
        var IMG = IMGs[j];
        var attryb = IMG.getAttribute('src');
        if (j !== 0) {
          if (attryb === 'icons/bron-barba.svg') {
            strng.push('dodatkową mocą uderzeniową');
          } else if (attryb === 'icons/bron-czar.svg') {
            strng.push('dodatkową mocą czarnoksięską');
          } else if (attryb === 'icons/bron-strz.svg') {
            strng.push('dodatkowym kunsztem strzeleckim');
          } else if (attryb === 'icons/bron-szal.svg') {
            strng.push('dodatkowym szaleństwem');
          } else if (attryb === 'icons/bron-zdra.svg') {
            strng.push('niespodzianym zdradliwym ciosem');
          } else if (attryb === 'icons/zyw-ogien.svg') {
            strng.push('żywiołem ognia');
          } else if (attryb === 'icons/zyw-rozklad.svg') {
            strng.push('żywiołem rozkładu');
          } else if (attryb === 'icons/zyw-wod.svg') {
            strng.push('żywiołem wody');
          } else if (attryb === 'icons/zyw-zmiana.svg') {
            strng.push('żywiołem zmiany');
          } else if (attryb === 'icons/zyw-zywia.svg') {
            strng.push('żywiołem żywii');
          } else {
            strng.push('własną mądrością żywiołów i talentów');
          }
        }
      }
      var stringToSet = strng.join(', ');
      var zywDes = document.querySelector('.--des_zywiol');
      var imiDes = document.querySelector('.--des_imie');
      var przDes = document.querySelector('.--des_przydomek');
      var zdaDes = document.querySelector('.--des_zdanie');
      zywDes.classList.remove('itsHidden');
      imiDes.classList.remove('itsHidden');
      przDes.classList.remove('itsHidden');
      zdaDes.classList.remove('itsHidden');
      zywDes.innerText = stringToSet + '.';
    }
    function setNameToDes() {
      var inp = document.querySelector('input[name="imie"]');
      var nam = inp.value;
      var item = document.querySelector('.--des_imie');
      item.innerText = nam + ' ';
      item.classList.remove('itsHidden');
    }
    function setNicknameToDes() {
      var inpB = document.querySelector('input[name="przydomek"]');
      var surnam = inpB.value;
      var item = document.querySelector('.--des_przydomek');
      item.innerText = surnam;
      item.classList.remove('itsHidden');
    }
    function setSentenceToDes() {
      var item = document.querySelector('.--des_zdanie');
      item.innerText = ' wzmacnia swój atak ';
      item.classList.remove('itsHidden');
    }

    function showAllDes() {
      var allDes = document.querySelector('.--des');
      allDes.classList.remove('itsHidden');
    }

    function setNextPartOfFormula() {
      var textArea = document.querySelector('input[name="nazwauderzenia"]');
      var areaValue = textArea.value.trim();
      if (areaValue !== '') {
        enableNextPartOfForm();
      }
    }

    function enableNextPartOfForm() {
      var nextPart = document.querySelector('.corpus_section_form_fieldset-c');
      nextPart.classList.remove('itIsHidden');
      var allOrnaments = document.querySelectorAll('img.corpus_section_form_ornament-marker');
      var thisOrnament = allOrnaments[1];
      thisOrnament.setAttribute('src', './icons/pole.svg');
      thisOrnament.classList.add('itIsPassedThrought');
      var nextOrnament = allOrnaments[2];
      nextOrnament.classList.remove('itIsHidden');
      thisOrnament.style.marginBottom = "-1rem";
      thisOrnament.style.zIndex = "1";
      nextPart.style.zIndex = "2";
    }

    document.addEventListener('DOMContentLoaded', function () {
      userFlowViaFirstFieldset();
    });
    function userFlowViaFirstFieldset() {
      var userName = document.querySelector('input[name="imie"]');
      var userNick = document.querySelector('input[name="przydomek"]');
      var userMotto = document.querySelector('textarea[name="zawolanie"]');
      userNameAccept(userName, userNick);
      userNickAccept(userNick, userMotto);
      userMottoAccept(userMotto, userName);
    }
    function userNameAccept(item, nextItem) {
      item.addEventListener('keyup', function (event) {
        var allFieldsAreSet = checkIfFieldsAreSet();
        if (allFieldsAreSet === true) {
          enableNextPartOfFormula();
        } else if (event.keyCode === 13) {
          nextItem.focus();
        }
        setThisDataToDescription();
      });
    }
    function userNickAccept(item, nextItem) {
      item.addEventListener('keyup', function (event) {
        var allFieldsAreSet = checkIfFieldsAreSet();
        if (allFieldsAreSet === true) {
          enableNextPartOfFormula();
        } else if (event.keyCode === 13) {
          nextItem.focus();
        }
        setThisDataToDescription();
      });
    }
    function userMottoAccept(item, nextItem) {
      item.addEventListener('keyup', function (event) {
        var allFieldsAreSet = checkIfFieldsAreSet();
        if (allFieldsAreSet === true) {
          enableNextPartOfFormula();
        } else if (event.keyCode === 13) {
          nextItem.focus();
        }
        setThisDataToDescription();
      });
    }
    function checkIfFieldsAreSet() {
      var userName = document.querySelector('input[name="imie"]');
      var userNick = document.querySelector('input[name="przydomek"]');
      var userMotto = document.querySelector('textarea[name="zawolanie"]');
      var valueA = userName.value;
      var valueB = userNick.value;
      var valueC = userMotto.value;
      if (valueA.trim() !== "" && valueA.trim().toLowerCase() !== "heros") {
        if (valueB.trim() !== "" && valueB.trim().toLowerCase() !== "wojenny pies") {
          if (valueC.trim() !== "" && valueC.trim().toLowerCase() !== "zawsze wierny") {
            return true;
          }
        }
      }
    }
    function enableNextPartOfFormula() {
      var thisOrnament = document.querySelector('img.corpus_section_form_ornament-marker');
      var allOrnaments = document.querySelectorAll('img.corpus_section_form_ornament-marker');
      thisOrnament.setAttribute('src', './icons/pole.svg');
      thisOrnament.classList.add('itIsPassedThrought');
      var nextOrnament = allOrnaments[1];
      nextOrnament.classList.remove('itIsHidden');
      var partOfForm = document.querySelector('.corpus_section_form_fields');
      partOfForm.classList.remove('itIsHidden');
    }
    function setThisDataToDescription() {
      setNameToDes();
      setNicknameToDes();
      setSentenceToDes();
    }

    document.addEventListener('DOMContentLoaded', chooseYourAvatar);
    function chooseYourAvatar() {
      var containers = document.querySelectorAll('.corpus_section_form_fields_fieldset-b_container_select-container');
      var avatars = document.querySelectorAll('.corpus_section_form_fields_fieldset-b_container_radio-lab-container');
      var amount = avatars.length;

      var _loop = function _loop(i) {
        var item = avatars[i];
        item.addEventListener('click', function () {
          chooseThisAvatar(item, avatars, amount);
          setOnePartOfAttackDescription(i);
          synchronizeBackgroundsOfOtherOpts(containers);
          enableAttacks(i);
        });
      };

      for (var i = 0; i < amount; i++) {
        _loop(i);
      }
    }
    function chooseThisAvatar(item, avatars, amount) {
      item.querySelector('input').checked = true;
      for (var i = 0; i < amount; i++) {
        var av = avatars[i];
        av.classList.remove('isClicked');
      }
      item.classList.add('isClicked');
    }
    function setOnePartOfAttackDescription(i) {
      var desPart = document.querySelector('p span.--des_klasa');
      var array = [' uderzenie bronią brutalną.', ' uderzenie bronią strzelecką.', ' uderzenie bronią zdradziecką.', ' uderzenie bronią szaleńczą.', ' uderzenie bronią szarlatańską.', ' uderzenie bronią lub czymkolwiek, co wpadnie karłowi w łapska.'];
      desPart.innerText = array[i];
      var nextDesPart = document.querySelector('p span.--des_epitet');
      nextDesPart.classList.add('itsHidden');
      var anotherNextDesPart = document.querySelector('.--des_zywiol');
      anotherNextDesPart.classList.add('itsHidden');
      var otherAnotherNextDesPart = document.querySelector('.--des_imie');
      otherAnotherNextDesPart.classList.add('itsHidden');
      var przDes = document.querySelector('.--des_przydomek');
      var zdaDes = document.querySelector('.--des_zdanie');
      przDes.classList.add('itsHidden');
      zdaDes.classList.add('itsHidden');
    }
    function synchronizeBackgroundsOfOtherOpts(containers) {
      var amount = containers.length;
      for (var i = 0; i < amount; i++) {
        var cont = containers[i];
        var options = cont.querySelectorAll('option');
        var iter = options.length;
        for (var x = 0; x < iter; x++) {
          var belt = cont.querySelectorAll('.corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt')[x];
          belt.style.backgroundColor = 'inherit';
        }
      }
    }
    function enableAttacks(i) {
      var enabledAttacks = document.querySelectorAll('.corpus_section_form_fields_fieldset-b_container_select-container');
      for (var x = 0; x < 6; x++) {
        var disabledItem = enabledAttacks[x];
        disabledItem.classList.remove('enabled');
        var opts = disabledItem.querySelectorAll('option');
        var amount = opts.length;
        for (var j = 0; j < amount; j++) {
          if (opts[j].selected === true) {
            opts[j].selected = false;
          }
        }
      }
      var enabledAttack = enabledAttacks[i];
      enabledAttack.classList.add('enabled');
    }

    document.addEventListener('DOMContentLoaded', initializeAttacksPart);

    function initializeAttacksPart() {
        var containers = document.querySelectorAll('.corpus_section_form_fields_fieldset-b_container_select-container');
        var amount = containers.length;

        var _loop = function _loop(i) {
            var cont = containers[i];
            var options = cont.querySelectorAll('option');
            var iter = options.length;

            var _loop2 = function _loop2(x) {
                var opt = options[x];
                opt.addEventListener('mouseout', onMOut);
                opt.addEventListener('mouseenter', onMEnter);

                function onMEnter() {
                    if (opt.selected === false) {
                        synchronizeThisBckgrWithImageBeltHoverBckgr(opt, cont, x, true);
                    }
                }
                function onMOut() {
                    if (opt.selected === false) {
                        synchronizeThisBckgrWithImageBeltHoverBckgr(opt, cont, x, false);
                    }
                }            opt.addEventListener('click', function () {
                    synchronizeBackgroundsOfOtherOptns(cont, iter);
                    synchronizeThisBckgrWithImageBeltHoverBckgr(opt, cont, x, true);
                });
            };

            for (var x = 0; x < iter; x++) {
                _loop2(x);
            }
        };

        for (var i = 0; i < amount; i++) {
            _loop(i);
        }
    }

    function synchronizeBackgroundsOfOtherOptns(cont, iter) {
        for (var x = 0; x < iter; x++) {
            var belt = cont.querySelectorAll('.corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt')[x];
            belt.style.backgroundColor = "inherit";
        }
    }

    function synchronizeThisBckgrWithImageBeltHoverBckgr(opt, cont, x, isEnter) {
        var belt = cont.querySelectorAll('.corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt')[x];
        if (isEnter === true) {
            var style = window.getComputedStyle(opt);
            var bcgCol = style.getPropertyValue('background-color');
            belt.style.backgroundColor = bcgCol;
        } else if (isEnter === false) {
            belt.style.backgroundColor = "inherit";
        }
    }

    document.addEventListener('DOMContentLoaded', init);
    var amountOfPoints = 20;

    function init() {
        var btns = document.querySelectorAll('.corpus_section_form_fields-2_fieldset-d_container_atryb .--belt_icon-container');
        var belts = document.querySelectorAll('.corpus_section_form_fields-2_fieldset-d_container_atryb .--belt_body-container_body');
        var iter = btns.length;
        for (var i = 0; i < iter; i++) {
            if (i > 4) {
                (function () {
                    var attryb = btns[i];
                    var belt = belts[i];
                    attryb.addEventListener('click', function () {
                        if (amountOfPoints > 0) {
                            addPoint(belt);
                        }
                    });
                })();
            }
        }
    }

    function addPoint(belt) {
        var IMG = document.createElement('IMG');
        IMG.setAttribute('src', 'icons/ikona-poteg.svg');
        belt.appendChild(IMG);
        amountOfPoints--;
        IMG.addEventListener('click', function () {
            deleteThisIMG(IMG);
        });
    }

    function deleteThisIMG(x) {
        x.remove();
        amountOfPoints++;
    }

    document.addEventListener("DOMContentLoaded", initializeThisSection);

    function initializeThisSection() {
        var listA = document.querySelector(".corpus_section_form_fieldset-c #zaslona");
        var listB = document.querySelector(".corpus_section_form_fieldset-c #pancerz");
        var imagesA = document.querySelectorAll(".corpus_section_form_fieldset-c_imgs_img.a");
        var imagesB = document.querySelectorAll(".corpus_section_form_fieldset-c_imgs_img.b");
        var optsA = listA.querySelectorAll("option");
        var optsB = listB.querySelectorAll("option");
        dynamizeThisList(listA, optsA, imagesA, listB);
        dynamizeThisList(listB, optsB, imagesB, listA);
    }

    function dynamizeThisList(list, opts, images, otherList) {
        list.addEventListener("change", function () {
            var value = list.value;
            var iter = opts.length;
            for (var j = 0; j < iter - 1; j++) {
                images[j].classList.add("itIsUnselected");
            }
            for (var i = 0; i < iter; i++) {
                var opt = opts[i];
                var optValue = opt.value;
                if (value === optValue && i !== 3) {
                    images[i].classList.remove("itIsUnselected");
                }
            }
            enableNextFormPart(list, otherList);
        });
    }

    function enableNextFormPart(list, otherList) {
        var a = list.value;
        var b = otherList.value;
        if (a !== "" && b !== "") {
            var nextPart = document.querySelector('.corpus_section_form_fields-2');
            nextPart.classList.remove('itIsHidden');
            var allOrnaments = document.querySelectorAll('img.corpus_section_form_ornament-marker');
            var thisOrnament = allOrnaments[2];
            thisOrnament.setAttribute('src', './icons/pole.svg');
            thisOrnament.classList.add('itIsPassedThrought');
            var nextOrnament = allOrnaments[3];
            nextOrnament.classList.remove('itIsHidden');
        }
    }

    document.addEventListener('DOMContentLoaded', initializeThisSelect);
    function initializeThisSelect() {
        var options = document.querySelectorAll('.corpus_section_form_fields-2_fieldset-d_container_moce');
        var iter = options.length;

        var _loop = function _loop(i) {
            var opt = options[i];
            opt.addEventListener('click', function () {
                itIsClicked(opt, options, iter);
            });
        };

        for (var i = 0; i < iter; i++) {
            _loop(i);
        }
    }
    function itIsClicked(opt, opts, iter) {
        for (var j = 0; j < iter; j++) {
            opts[j].classList.add('itIsHidden');
        }
        opt.classList.remove('itIsHidden');
    }

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyIuLi9zb3VyY2UvZHluYW1pY3MvYXRha2ktc2V0LXR4dC5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9wb2RzdGF3eS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9rbGFzYS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9hdGFraS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9hdHRyeWJzLmpzIiwiLi4vc291cmNlL2R5bmFtaWNzL29icm9ueS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9tb2NlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdGlhbGl6ZSlcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcbiAgbGV0IG9wdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX3NlbGVjdC1saXN0IG9wdGlvbidcclxuICApXHJcbiAgbGV0IGFtb3VudCA9IG9wdHMubGVuZ3RoXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xyXG4gICAgbGV0IGl0ZW0gPSBvcHRzW2ldXHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBzZXRJTUcoaSlcclxuICAgICAgZW5hYmxlU3RyaWtlTmFtZVBhcnQoKVxyXG4gICAgICBzZXRTdHJpa2VOYW1lVG9EZXMoaSlcclxuICAgICAgc2V0UGFydE9mQXR0YWNrRGVzY3JpcHRpb24oaSlcclxuICAgICAgc2V0Rm9yY2VEZXMoaSlcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbmxldCBvbmx5T25jZSA9IDBcclxuXHJcbmZ1bmN0aW9uIGVuYWJsZVN0cmlrZU5hbWVQYXJ0KCkge1xyXG4gIG9ubHlPbmNlKytcclxuICBpZiAob25seU9uY2UgPT09IDEpIHtcclxuICAgIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0cmlrZU5hbWUnKVxyXG4gICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzdHJpa2VOYW1lJylcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uKGkpIHtcclxuICBsZXQgZGVzUGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Agc3Bhbi4tLWRlc19lcGl0ZXQnKVxyXG4gIGRlc1BhcnQuY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJylcclxuICBsZXQgYXJyYXkgPSBbXHJcbiAgICAnYnJ1dGFsbmUnLFxyXG4gICAgJ25pZXByemV3aWR5d2FsbmUnLFxyXG4gICAgJ3d5xId3aWN6b25lJyxcclxuICAgICduaWV6YXdvZG5lJyxcclxuICAgICdwcmVjeXp5am5lJyxcclxuICAgICd6bWFzb3dhbmUnLFxyXG4gICAgJ3BvZHN0xJlwbmUnLFxyXG4gICAgJ3d5cmFjaG93YW5lJyxcclxuICAgICd6ZHJhZHppZWNraWUnLFxyXG4gICAgJ3N6YWxlxYRjemUnLFxyXG4gICAgJ29wcmFjb3dhbmUgdyBsYWJvcmF0b3JpdW0gYWxjaGVtaWN6bnltJyxcclxuICAgICduaWVwb3dzdHJ6eW1hbmUnLFxyXG4gICAgJ3fFgmFkY3plJyxcclxuICAgICdtcm9jem5lJyxcclxuICAgICd0YWplbW5lJyxcclxuICAgICd3xZtjaWVrxYJlJyxcclxuICAgICd3c3BpZXJhbmUgbW9jxIUgb3RjaMWCYW5pJyxcclxuICAgICdwcnplc3ljb25lIHrFgsSFIG1vY8SFJ1xyXG4gIF1cclxuICBkZXNQYXJ0LmlubmVyVGV4dCA9ICcsICcgKyBhcnJheVtpXVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRJTUcoaSkge1xyXG4gIGxldCBiZWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0J1xyXG4gIClbaV1cclxuICBsZXQgaW1hZyA9IGJlbHQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylbMF1cclxuICBsZXQgYXR0cnliID0gaW1hZy5nZXRBdHRyaWJ1dGUoJ3NyYycpXHJcbiAgbGV0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1wbGF0ZV9pbWdfaWNvbicpXHJcbiAgaWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIGF0dHJ5YilcclxuICBsZXQgYWxsSU1HcyA9IGJlbHQucXVlcnlTZWxlY3RvckFsbCgnaW1nJykubGVuZ3RoXHJcbiAgbGV0IHN0YW5kYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tc3RhbmRhcnRfaW1nX2Jja2cnKVxyXG4gIHdoaWxlIChzdGFuZGFydC5xdWVyeVNlbGVjdG9yKCdJTUcnKSAhPT0gbnVsbCkge1xyXG4gICAgbGV0IGltYWdlVG9EZWwgPSBzdGFuZGFydC5xdWVyeVNlbGVjdG9yKCdJTUcnKVxyXG4gICAgc3RhbmRhcnQucmVtb3ZlQ2hpbGQoaW1hZ2VUb0RlbClcclxuICB9XHJcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBhbGxJTUdzOyBqKyspIHtcclxuICAgIGlmIChqID4gMCkge1xyXG4gICAgICBsZXQgdGhlSU1HID0gYmVsdC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVtqXVxyXG4gICAgICBsZXQgc291cmNlSU1HID0gdGhlSU1HLmdldEF0dHJpYnV0ZSgnc3JjJylcclxuICAgICAgbGV0IG5ld0lNRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgIG5ld0lNRy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNvdXJjZUlNRylcclxuICAgICAgc3RhbmRhcnQuYXBwZW5kQ2hpbGQobmV3SU1HKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0U3RyaWtlTmFtZVRvRGVzKGkpIHtcclxuICBsZXQgaW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm5hendhdWRlcnplbmlhXCJdJylcclxuICBpbnAuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgc3RyTmFtZSA9IGlucC52YWx1ZTtcclxuICAgIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX25hendhLWNpb3N1Jyk7XHJcbiAgICBpdGVtLmlubmVyVGV4dCA9IHN0ck5hbWUgKyAnIHRvIGxlZ2VuZGFybmUnO1xyXG4gICAgc2hvd0FsbERlcygpO1xyXG4gICAgc2V0TmV4dFBhcnRPZkZvcm11bGEoKTtcclxuICB9KVxyXG4gIGlucC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgaXRtID0gaW5wLnZhbHVlXHJcbiAgICBpZiAoaXRtLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgbGV0IHN0ck5hbWUgPSBpbnAudmFsdWVcclxuICAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfbmF6d2EtY2lvc3UnKVxyXG4gICAgICBpdGVtLmlubmVyVGV4dCA9IHN0ck5hbWUgKyAnIHRvIGxlZ2VuZGFybmUnXHJcbiAgICAgIHNob3dBbGxEZXMoKTtcclxuICAgICAgc2V0TmV4dFBhcnRPZkZvcm11bGEoKTtcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRGb3JjZURlcyhpKSB7XHJcbiAgbGV0IGJlbHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnXHJcbiAgKVtpXTtcclxuICBsZXQgSU1HcyA9IGJlbHQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylcclxuICBsZXQgaXRlciA9IElNR3MubGVuZ3RoXHJcbiAgbGV0IHN0cm5nID0gW11cclxuICBmb3IgKGxldCBqID0gMDsgaiA8IGl0ZXI7IGorKykge1xyXG4gICAgbGV0IElNRyA9IElNR3Nbal1cclxuICAgIGxldCBhdHRyeWIgPSBJTUcuZ2V0QXR0cmlidXRlKCdzcmMnKVxyXG4gICAgaWYgKGogIT09IDApIHtcclxuICAgICAgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL2Jyb24tYmFyYmEuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ2RvZGF0a293xIUgbW9jxIUgdWRlcnplbmlvd8SFJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy9icm9uLWN6YXIuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ2RvZGF0a293xIUgbW9jxIUgY3phcm5va3NpxJlza8SFJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy9icm9uLXN0cnouc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ2RvZGF0a293eW0ga3Vuc3p0ZW0gc3RyemVsZWNraW0nKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL2Jyb24tc3phbC5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnZG9kYXRrb3d5bSBzemFsZcWEc3R3ZW0nKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL2Jyb24temRyYS5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnbmllc3BvZHppYW55bSB6ZHJhZGxpd3ltIGNpb3NlbScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvenl3LW9naWVuLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCfFvHl3aW/FgmVtIG9nbmlhJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy96eXctcm96a2xhZC5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnxbx5d2lvxYJlbSByb3prxYJhZHUnKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL3p5dy13b2Quc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ8W8eXdpb8WCZW0gd29keScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvenl3LXptaWFuYS5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnxbx5d2lvxYJlbSB6bWlhbnknKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL3p5dy16eXdpYS5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnxbx5d2lvxYJlbSDFvHl3aWknKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ3fFgmFzbsSFIG3EhWRyb8WbY2nEhSDFvHl3aW/FgsOzdyBpIHRhbGVudMOzdycpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgbGV0IHN0cmluZ1RvU2V0ID0gc3Rybmcuam9pbignLCAnKTtcclxuICBsZXQgenl3RGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3p5d2lvbCcpO1xyXG4gIGxldCBpbWlEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfaW1pZScpO1xyXG4gIGxldCBwcnpEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfcHJ6eWRvbWVrJyk7XHJcbiAgbGV0IHpkYURlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc196ZGFuaWUnKTtcclxuICB6eXdEZXMuY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJyk7XHJcbiAgaW1pRGVzLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpO1xyXG4gIHByekRlcy5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKTtcclxuICB6ZGFEZXMuY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJyk7XHJcbiAgenl3RGVzLmlubmVyVGV4dCA9IHN0cmluZ1RvU2V0ICsgJy4nO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXROYW1lVG9EZXMoKSB7XHJcbiAgbGV0IGlucCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJpbWllXCJdJylcclxuICBsZXQgbmFtID0gaW5wLnZhbHVlXHJcbiAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfaW1pZScpXHJcbiAgaXRlbS5pbm5lclRleHQgPSBuYW0gKyAnICc7XHJcbiAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXROaWNrbmFtZVRvRGVzKCkge1xyXG4gIGxldCBpbnBCID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByenlkb21la1wiXScpXHJcbiAgbGV0IHN1cm5hbSA9IGlucEIudmFsdWVcclxuICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19wcnp5ZG9tZWsnKVxyXG4gIGl0ZW0uaW5uZXJUZXh0ID0gc3VybmFtO1xyXG4gIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJylcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U2VudGVuY2VUb0RlcygpIHtcclxuICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc196ZGFuaWUnKVxyXG4gIGl0ZW0uaW5uZXJUZXh0ID0gJyB3em1hY25pYSBzd8OzaiBhdGFrICdcclxuICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dBbGxEZXMoKSB7XHJcbiAgbGV0IGFsbERlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlcycpXHJcbiAgYWxsRGVzLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldE5leHRQYXJ0T2ZGb3JtdWxhKCkge1xyXG4gIGxldCB0ZXh0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJuYXp3YXVkZXJ6ZW5pYVwiXScpO1xyXG4gIGxldCBhcmVhVmFsdWUgPSAodGV4dEFyZWEudmFsdWUpLnRyaW0oKTtcclxuICBpZiAoYXJlYVZhbHVlICE9PSAnJykge1xyXG4gICAgZW5hYmxlTmV4dFBhcnRPZkZvcm0oKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuYWJsZU5leHRQYXJ0T2ZGb3JtKCkge1xyXG4gIGxldCBuZXh0UGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc2V0LWMnKTtcclxuICBuZXh0UGFydC5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbiAgbGV0IGFsbE9ybmFtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZy5jb3JwdXNfc2VjdGlvbl9mb3JtX29ybmFtZW50LW1hcmtlcicpO1xyXG4gIGxldCB0aGlzT3JuYW1lbnQgPSBhbGxPcm5hbWVudHNbMV07XHJcbiAgdGhpc09ybmFtZW50LnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaWNvbnMvcG9sZS5zdmcnKTtcclxuICB0aGlzT3JuYW1lbnQuY2xhc3NMaXN0LmFkZCgnaXRJc1Bhc3NlZFRocm91Z2h0Jyk7XHJcbiAgbGV0IG5leHRPcm5hbWVudCA9IGFsbE9ybmFtZW50c1syXTtcclxuICBuZXh0T3JuYW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0hpZGRlbicpO1xyXG4gIHRoaXNPcm5hbWVudC5zdHlsZS5tYXJnaW5Cb3R0b209XCItMXJlbVwiO1xyXG4gIHRoaXNPcm5hbWVudC5zdHlsZS56SW5kZXg9XCIxXCI7XHJcbiAgbmV4dFBhcnQuc3R5bGUuekluZGV4PVwiMlwiO1xyXG59IiwiaW1wb3J0IHtzZXROYW1lVG9EZXN9IGZyb20gJy4vYXRha2ktc2V0LXR4dC5qcyc7XHJcbmltcG9ydCB7c2V0Tmlja25hbWVUb0Rlc30gZnJvbSAnLi9hdGFraS1zZXQtdHh0LmpzJztcclxuaW1wb3J0IHtzZXRTZW50ZW5jZVRvRGVzfSBmcm9tICcuL2F0YWtpLXNldC10eHQuanMnO1xyXG4ndXNlIHN0cmljdCc7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgdXNlckZsb3dWaWFGaXJzdEZpZWxkc2V0KClcclxufSlcclxuZnVuY3Rpb24gdXNlckZsb3dWaWFGaXJzdEZpZWxkc2V0ICgpIHtcclxuICBsZXQgdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiaW1pZVwiXScpO1xyXG4gIGxldCB1c2VyTmljayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcnp5ZG9tZWtcIl0nKTtcclxuICBsZXQgdXNlck1vdHRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWFbbmFtZT1cInphd29sYW5pZVwiXScpO1xyXG4gIHVzZXJOYW1lQWNjZXB0KHVzZXJOYW1lLCB1c2VyTmljaylcclxuICB1c2VyTmlja0FjY2VwdCh1c2VyTmljaywgdXNlck1vdHRvKVxyXG4gIHVzZXJNb3R0b0FjY2VwdCh1c2VyTW90dG8sIHVzZXJOYW1lKVxyXG59XHJcbmZ1bmN0aW9uIHVzZXJOYW1lQWNjZXB0IChpdGVtLCBuZXh0SXRlbSkge1xyXG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGxldCBhbGxGaWVsZHNBcmVTZXQgPSBjaGVja0lmRmllbGRzQXJlU2V0KCk7XHJcbiAgICBpZiAoYWxsRmllbGRzQXJlU2V0ID09PSB0cnVlKSB7XHJcbiAgICAgIGVuYWJsZU5leHRQYXJ0T2ZGb3JtdWxhKCk7XHJcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgIG5leHRJdGVtLmZvY3VzKClcclxuICAgIH1cclxuICAgIHNldFRoaXNEYXRhVG9EZXNjcmlwdGlvbigpO1xyXG4gIH0pXHJcbn1cclxuZnVuY3Rpb24gdXNlck5pY2tBY2NlcHQgKGl0ZW0sIG5leHRJdGVtKSB7XHJcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgbGV0IGFsbEZpZWxkc0FyZVNldCA9IGNoZWNrSWZGaWVsZHNBcmVTZXQoKTtcclxuICAgIGlmIChhbGxGaWVsZHNBcmVTZXQgPT09IHRydWUpIHtcclxuICAgICAgZW5hYmxlTmV4dFBhcnRPZkZvcm11bGEoKTtcclxuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgbmV4dEl0ZW0uZm9jdXMoKVxyXG4gICAgfVxyXG4gICAgc2V0VGhpc0RhdGFUb0Rlc2NyaXB0aW9uKCk7XHJcbiAgfSlcclxufVxyXG5mdW5jdGlvbiB1c2VyTW90dG9BY2NlcHQgKGl0ZW0sIG5leHRJdGVtKSB7XHJcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgbGV0IGFsbEZpZWxkc0FyZVNldCA9IGNoZWNrSWZGaWVsZHNBcmVTZXQoKTtcclxuICAgIGlmIChhbGxGaWVsZHNBcmVTZXQgPT09IHRydWUpIHtcclxuICAgICAgZW5hYmxlTmV4dFBhcnRPZkZvcm11bGEoKTtcclxuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgbmV4dEl0ZW0uZm9jdXMoKVxyXG4gICAgfVxyXG4gICAgc2V0VGhpc0RhdGFUb0Rlc2NyaXB0aW9uKCk7XHJcbiAgfSlcclxufVxyXG5mdW5jdGlvbiBjaGVja0lmRmllbGRzQXJlU2V0KCkge1xyXG4gICAgbGV0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImltaWVcIl0nKTtcclxuICAgIGxldCB1c2VyTmljayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcnp5ZG9tZWtcIl0nKTtcclxuICAgIGxldCB1c2VyTW90dG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYVtuYW1lPVwiemF3b2xhbmllXCJdJyk7XHJcbiAgICBsZXQgdmFsdWVBID0gdXNlck5hbWUudmFsdWU7XHJcbiAgICBsZXQgdmFsdWVCID0gdXNlck5pY2sudmFsdWU7XHJcbiAgICBsZXQgdmFsdWVDID0gdXNlck1vdHRvLnZhbHVlO1xyXG4gICAgaWYgKHZhbHVlQS50cmltKCkhPT1cIlwiJiZ2YWx1ZUEudHJpbSgpLnRvTG93ZXJDYXNlKCkhPT1cImhlcm9zXCIpe1xyXG4gICAgICAgIGlmKHZhbHVlQi50cmltKCkhPT1cIlwiJiZ2YWx1ZUIudHJpbSgpLnRvTG93ZXJDYXNlKCkhPT1cIndvamVubnkgcGllc1wiKXtcclxuICAgICAgICAgIGlmKHZhbHVlQy50cmltKCkhPT1cIlwiJiZ2YWx1ZUMudHJpbSgpLnRvTG93ZXJDYXNlKCkhPT1cInphd3N6ZSB3aWVybnlcIil7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfSAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGVuYWJsZU5leHRQYXJ0T2ZGb3JtdWxhKCl7XHJcbiAgICBsZXQgdGhpc09ybmFtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nLmNvcnB1c19zZWN0aW9uX2Zvcm1fb3JuYW1lbnQtbWFya2VyJyk7XHJcbiAgICBsZXQgYWxsT3JuYW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLmNvcnB1c19zZWN0aW9uX2Zvcm1fb3JuYW1lbnQtbWFya2VyJyk7XHJcbiAgICB0aGlzT3JuYW1lbnQuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pY29ucy9wb2xlLnN2ZycpO1xyXG4gICAgdGhpc09ybmFtZW50LmNsYXNzTGlzdC5hZGQoJ2l0SXNQYXNzZWRUaHJvdWdodCcpO1xyXG4gICAgbGV0IG5leHRPcm5hbWVudCA9IGFsbE9ybmFtZW50c1sxXTtcclxuICAgIG5leHRPcm5hbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbiAgICBsZXQgcGFydE9mRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkcycpO1xyXG4gICAgcGFydE9mRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbn1cclxuZnVuY3Rpb24gc2V0VGhpc0RhdGFUb0Rlc2NyaXB0aW9uKCl7XHJcbiAgc2V0TmFtZVRvRGVzKCk7XHJcbiAgc2V0Tmlja25hbWVUb0RlcygpO1xyXG4gIHNldFNlbnRlbmNlVG9EZXMoKTtcclxufSIsIid1c2Ugc3RyaWN0J1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY2hvb3NlWW91ckF2YXRhcilcclxuZnVuY3Rpb24gY2hvb3NlWW91ckF2YXRhciAoKSB7XHJcbiAgbGV0IGNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcicpXHJcbiAgbGV0IGF2YXRhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfcmFkaW8tbGFiLWNvbnRhaW5lcicpXHJcbiAgbGV0IGFtb3VudCA9IGF2YXRhcnMubGVuZ3RoXHJcbiAgZm9yIChsZXQgaSA9IDA7aSA8IGFtb3VudDtpKyspIHtcclxuICAgIGxldCBpdGVtID0gYXZhdGFyc1tpXVxyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgY2hvb3NlVGhpc0F2YXRhcihpdGVtLCBhdmF0YXJzLCBhbW91bnQpXHJcbiAgICAgIHNldE9uZVBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uKGkpXHJcbiAgICAgIHN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0cyhjb250YWluZXJzKVxyXG4gICAgICBlbmFibGVBdHRhY2tzKGkpXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBjaG9vc2VUaGlzQXZhdGFyIChpdGVtLCBhdmF0YXJzLCBhbW91bnQpIHtcclxuICBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuY2hlY2tlZCA9IHRydWU7XHJcbiAgZm9yIChsZXQgaT0wOyBpPGFtb3VudDsgaSsrKXtcclxuICAgICAgbGV0IGF2ID0gYXZhdGFyc1tpXTtcclxuICAgICAgYXYuY2xhc3NMaXN0LnJlbW92ZSgnaXNDbGlja2VkJyk7XHJcbiAgfVxyXG4gIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXNDbGlja2VkJyk7XHJcbn1cclxuZnVuY3Rpb24gc2V0T25lUGFydE9mQXR0YWNrRGVzY3JpcHRpb24gKGkpIHtcclxuICBsZXQgZGVzUGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Agc3Bhbi4tLWRlc19rbGFzYScpXHJcbiAgbGV0IGFycmF5ID0gW1xyXG4gICAgJyB1ZGVyemVuaWUgYnJvbmnEhSBicnV0YWxuxIUuJyxcclxuICAgICcgdWRlcnplbmllIGJyb25pxIUgc3RyemVsZWNrxIUuJyxcclxuICAgICcgdWRlcnplbmllIGJyb25pxIUgemRyYWR6aWVja8SFLicsXHJcbiAgICAnIHVkZXJ6ZW5pZSBicm9uacSFIHN6YWxlxYRjesSFLicsXHJcbiAgICAnIHVkZXJ6ZW5pZSBicm9uacSFIHN6YXJsYXRhxYRza8SFLicsXHJcbiAgICAnIHVkZXJ6ZW5pZSBicm9uacSFIGx1YiBjenlta29sd2llaywgY28gd3BhZG5pZSBrYXLFgm93aSB3IMWCYXBza2EuJ1xyXG4gIF1cclxuICBkZXNQYXJ0LmlubmVyVGV4dCA9IGFycmF5W2ldXHJcbiAgbGV0IG5leHREZXNQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncCBzcGFuLi0tZGVzX2VwaXRldCcpO1xyXG4gIG5leHREZXNQYXJ0LmNsYXNzTGlzdC5hZGQoJ2l0c0hpZGRlbicpO1xyXG4gIGxldCBhbm90aGVyTmV4dERlc1BhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfenl3aW9sJyk7XHJcbiAgYW5vdGhlck5leHREZXNQYXJ0LmNsYXNzTGlzdC5hZGQoJ2l0c0hpZGRlbicpO1xyXG4gIGxldCBvdGhlckFub3RoZXJOZXh0RGVzUGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19pbWllJyk7XHJcbiAgb3RoZXJBbm90aGVyTmV4dERlc1BhcnQuY2xhc3NMaXN0LmFkZCgnaXRzSGlkZGVuJyk7XHJcbiAgbGV0IHByekRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19wcnp5ZG9tZWsnKTtcclxuICBsZXQgemRhRGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3pkYW5pZScpO1xyXG4gIHByekRlcy5jbGFzc0xpc3QuYWRkKCdpdHNIaWRkZW4nKTtcclxuICB6ZGFEZXMuY2xhc3NMaXN0LmFkZCgnaXRzSGlkZGVuJyk7XHJcbn1cclxuZnVuY3Rpb24gc3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRzIChjb250YWluZXJzKSB7XHJcbiAgbGV0IGFtb3VudCA9IGNvbnRhaW5lcnMubGVuZ3RoXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xyXG4gICAgbGV0IGNvbnQgPSBjb250YWluZXJzW2ldXHJcbiAgICBsZXQgb3B0aW9ucyA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJylcclxuICAgIGxldCBpdGVyID0gb3B0aW9ucy5sZW5ndGhcclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlcjsgeCsrKSB7XHJcbiAgICAgIGxldCBiZWx0ID0gY29udC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0JylbeF1cclxuICAgICAgYmVsdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5oZXJpdCdcclxuICAgIH1cclxuICB9XHJcbn1cclxuZnVuY3Rpb24gZW5hYmxlQXR0YWNrcyAoaSkge1xyXG4gIGxldCBlbmFibGVkQXR0YWNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyJylcclxuICBmb3IgKGxldCB4ID0gMDsgeCA8IDY7IHgrKykge1xyXG4gICAgbGV0IGRpc2FibGVkSXRlbSA9IGVuYWJsZWRBdHRhY2tzW3hdXHJcbiAgICBkaXNhYmxlZEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnZW5hYmxlZCcpXHJcbiAgICBsZXQgb3B0cyA9IGRpc2FibGVkSXRlbS5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKVxyXG4gICAgbGV0IGFtb3VudCA9IG9wdHMubGVuZ3RoXHJcbiAgICBmb3IgKGxldCBqID0gMDtqIDwgYW1vdW50O2orKykge1xyXG4gICAgICBpZiAob3B0c1tqXS5zZWxlY3RlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIG9wdHNbal0uc2VsZWN0ZWQgPSBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCBlbmFibGVkQXR0YWNrID0gZW5hYmxlZEF0dGFja3NbaV1cclxuICBlbmFibGVkQXR0YWNrLmNsYXNzTGlzdC5hZGQoJ2VuYWJsZWQnKVxyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRpYWxpemVBdHRhY2tzUGFydCk7XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplQXR0YWNrc1BhcnQoKSB7XHJcbiAgICBsZXQgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyJyk7XHJcbiAgICBsZXQgYW1vdW50ID0gY29udGFpbmVycy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGNvbnQgPSBjb250YWluZXJzW2ldO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gY29udC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKTtcclxuICAgICAgICBsZXQgaXRlciA9IG9wdGlvbnMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlcjsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBvcHQgPSBvcHRpb25zW3hdO1xyXG4gICAgICAgICAgICBvcHQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBvbk1PdXQpO1xyXG4gICAgICAgICAgICBvcHQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIG9uTUVudGVyKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uTUVudGVyKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdC5zZWxlY3RlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBzeW5jaHJvbml6ZVRoaXNCY2tncldpdGhJbWFnZUJlbHRIb3ZlckJja2dyKG9wdCwgY29udCwgeCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBvbk1PdXQoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0LnNlbGVjdGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN5bmNocm9uaXplVGhpc0Jja2dyV2l0aEltYWdlQmVsdEhvdmVyQmNrZ3Iob3B0LCBjb250LCB4LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIG9wdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0bnMoY29udCwgaXRlcik7XHJcbiAgICAgICAgICAgICAgICBzeW5jaHJvbml6ZVRoaXNCY2tncldpdGhJbWFnZUJlbHRIb3ZlckJja2dyKG9wdCwgY29udCwgeCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0bnMoY29udCwgaXRlcikge1xyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVyOyB4KyspIHtcclxuICAgICAgICBsZXQgYmVsdCA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdCcpW3hdO1xyXG4gICAgICAgIGJlbHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJpbmhlcml0XCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN5bmNocm9uaXplVGhpc0Jja2dyV2l0aEltYWdlQmVsdEhvdmVyQmNrZ3Iob3B0LCBjb250LCB4LCBpc0VudGVyKSB7XHJcbiAgICBsZXQgYmVsdCA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdCcpW3hdO1xyXG4gICAgaWYgKGlzRW50ZXIgPT09IHRydWUpIHtcclxuICAgICAgICBsZXQgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShvcHQpO1xyXG4gICAgICAgIGxldCBiY2dDb2wgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XHJcbiAgICAgICAgYmVsdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBiY2dDb2w7XHJcbiAgICB9IGVsc2UgaWYgKGlzRW50ZXIgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgYmVsdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImluaGVyaXRcIjtcclxuICAgIH1cclxufSIsIid1c2Ugc3RyaWN0JztcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXQpO1xyXG5sZXQgYW1vdW50T2ZQb2ludHMgPSAyMDtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBsZXQgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkcy0yX2ZpZWxkc2V0LWRfY29udGFpbmVyX2F0cnliIC4tLWJlbHRfaWNvbi1jb250YWluZXInKTtcclxuICAgIGxldCBiZWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkcy0yX2ZpZWxkc2V0LWRfY29udGFpbmVyX2F0cnliIC4tLWJlbHRfYm9keS1jb250YWluZXJfYm9keScpO1xyXG4gICAgbGV0IGl0ZXIgPSBidG5zLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcjsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGkgPiA0KSB7XHJcbiAgICAgICAgICAgIGxldCBhdHRyeWIgPSBidG5zW2ldO1xyXG4gICAgICAgICAgICBsZXQgYmVsdCA9IGJlbHRzW2ldO1xyXG4gICAgICAgICAgICBhdHRyeWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYW1vdW50T2ZQb2ludHMgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkUG9pbnQoYmVsdClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb2ludChiZWx0KSB7XHJcbiAgICBsZXQgSU1HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnSU1HJyk7XHJcbiAgICBJTUcuc2V0QXR0cmlidXRlKCdzcmMnLCAnaWNvbnMvaWtvbmEtcG90ZWcuc3ZnJyk7XHJcbiAgICBiZWx0LmFwcGVuZENoaWxkKElNRyk7XHJcbiAgICBhbW91bnRPZlBvaW50cy0tO1xyXG4gICAgSU1HLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRlbGV0ZVRoaXNJTUcoSU1HKVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlVGhpc0lNRyh4KSB7XHJcbiAgICB4LnJlbW92ZSgpO1xyXG4gICAgYW1vdW50T2ZQb2ludHMrKztcclxufSIsIlwidXNlIHN0cmljdFwiO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0aWFsaXplVGhpc1NlY3Rpb24pO1xyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZVRoaXNTZWN0aW9uKCkge1xyXG4gICAgbGV0IGxpc3RBID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc2V0LWMgI3phc2xvbmFcIlxyXG4gICAgKTtcclxuICAgIGxldCBsaXN0QiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNldC1jICNwYW5jZXJ6XCJcclxuICAgICk7XHJcbiAgICBsZXQgaW1hZ2VzQSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNldC1jX2ltZ3NfaW1nLmFcIlxyXG4gICAgKTtcclxuICAgIGxldCBpbWFnZXNCID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICBcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc2V0LWNfaW1nc19pbWcuYlwiXHJcbiAgICApO1xyXG4gICAgbGV0IG9wdHNBID0gbGlzdEEucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvblwiKTtcclxuICAgIGxldCBvcHRzQiA9IGxpc3RCLnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb25cIik7XHJcbiAgICBkeW5hbWl6ZVRoaXNMaXN0KGxpc3RBLCBvcHRzQSwgaW1hZ2VzQSwgbGlzdEIpO1xyXG4gICAgZHluYW1pemVUaGlzTGlzdChsaXN0Qiwgb3B0c0IsIGltYWdlc0IsIGxpc3RBKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHluYW1pemVUaGlzTGlzdChsaXN0LCBvcHRzLCBpbWFnZXMsIG90aGVyTGlzdCkge1xyXG4gICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBsaXN0LnZhbHVlO1xyXG4gICAgICAgIGxldCBpdGVyID0gb3B0cy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpdGVyIC0gMTsgaisrKSB7XHJcbiAgICAgICAgICAgIGltYWdlc1tqXS5jbGFzc0xpc3QuYWRkKFwiaXRJc1Vuc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBvcHQgPSBvcHRzW2ldO1xyXG4gICAgICAgICAgICBsZXQgb3B0VmFsdWUgPSBvcHQudmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gb3B0VmFsdWUgJiYgaSAhPT0gMykge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJpdElzVW5zZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbmFibGVOZXh0Rm9ybVBhcnQobGlzdCwgb3RoZXJMaXN0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlbmFibGVOZXh0Rm9ybVBhcnQobGlzdCwgb3RoZXJMaXN0KSB7XHJcbiAgICBsZXQgYSA9IGxpc3QudmFsdWU7XHJcbiAgICBsZXQgYiA9IG90aGVyTGlzdC52YWx1ZTtcclxuICAgIGlmIChhICE9PSBcIlwiICYmIGIgIT09IFwiXCIpIHtcclxuICAgICAgICBsZXQgbmV4dFBhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHMtMicpO1xyXG4gICAgICAgIG5leHRQYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2l0SXNIaWRkZW4nKTtcclxuICAgICAgICBsZXQgYWxsT3JuYW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLmNvcnB1c19zZWN0aW9uX2Zvcm1fb3JuYW1lbnQtbWFya2VyJyk7XHJcbiAgICAgICAgbGV0IHRoaXNPcm5hbWVudCA9IGFsbE9ybmFtZW50c1syXTtcclxuICAgICAgICB0aGlzT3JuYW1lbnQuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pY29ucy9wb2xlLnN2ZycpO1xyXG4gICAgICAgIHRoaXNPcm5hbWVudC5jbGFzc0xpc3QuYWRkKCdpdElzUGFzc2VkVGhyb3VnaHQnKTtcclxuICAgICAgICBsZXQgbmV4dE9ybmFtZW50ID0gYWxsT3JuYW1lbnRzWzNdO1xyXG4gICAgICAgIG5leHRPcm5hbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbiAgICB9XHJcbn0iLCIndXNlIHN0cmljdCc7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0aWFsaXplVGhpc1NlbGVjdClcclxuZnVuY3Rpb24gaW5pdGlhbGl6ZVRoaXNTZWxlY3QoKXtcclxuICAgIGxldCBvcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzLTJfZmllbGRzZXQtZF9jb250YWluZXJfbW9jZScpO1xyXG4gICAgbGV0IGl0ZXIgPSBvcHRpb25zLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGk9MDtpPGl0ZXI7aSsrKXtcclxuICAgICAgICBsZXQgb3B0PW9wdGlvbnNbaV07XHJcbiAgICAgICAgb3B0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCl7aXRJc0NsaWNrZWQob3B0LCBvcHRpb25zLCBpdGVyKX0pXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gaXRJc0NsaWNrZWQob3B0LCBvcHRzLCBpdGVyKSB7XHJcbiAgICBmb3IgKGxldCBqPTA7ajxpdGVyO2orKyl7XHJcbiAgICAgICAgb3B0c1tqXS5jbGFzc0xpc3QuYWRkKCdpdElzSGlkZGVuJyk7XHJcbiAgICB9XHJcbiAgICBvcHQuY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0hpZGRlbicpO1xyXG59Il0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImluaXRpYWxpemUiLCJvcHRzIiwicXVlcnlTZWxlY3RvckFsbCIsImFtb3VudCIsImxlbmd0aCIsImkiLCJpdGVtIiwic2V0SU1HIiwiZW5hYmxlU3RyaWtlTmFtZVBhcnQiLCJzZXRTdHJpa2VOYW1lVG9EZXMiLCJzZXRQYXJ0T2ZBdHRhY2tEZXNjcmlwdGlvbiIsInNldEZvcmNlRGVzIiwib25seU9uY2UiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZGVzUGFydCIsImFycmF5IiwiaW5uZXJUZXh0IiwiYmVsdCIsImltYWciLCJhdHRyeWIiLCJnZXRBdHRyaWJ1dGUiLCJpY29uIiwic2V0QXR0cmlidXRlIiwiYWxsSU1HcyIsInN0YW5kYXJ0IiwiaW1hZ2VUb0RlbCIsInJlbW92ZUNoaWxkIiwiaiIsInRoZUlNRyIsInNvdXJjZUlNRyIsIm5ld0lNRyIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImlucCIsInN0ck5hbWUiLCJ2YWx1ZSIsInNob3dBbGxEZXMiLCJzZXROZXh0UGFydE9mRm9ybXVsYSIsIml0bSIsInRyaW0iLCJJTUdzIiwiaXRlciIsInN0cm5nIiwiSU1HIiwicHVzaCIsInN0cmluZ1RvU2V0Iiwiam9pbiIsInp5d0RlcyIsImltaURlcyIsInByekRlcyIsInpkYURlcyIsInNldE5hbWVUb0RlcyIsIm5hbSIsInNldE5pY2tuYW1lVG9EZXMiLCJpbnBCIiwic3VybmFtIiwic2V0U2VudGVuY2VUb0RlcyIsImFsbERlcyIsInRleHRBcmVhIiwiYXJlYVZhbHVlIiwiZW5hYmxlTmV4dFBhcnRPZkZvcm0iLCJuZXh0UGFydCIsImFsbE9ybmFtZW50cyIsInRoaXNPcm5hbWVudCIsImFkZCIsIm5leHRPcm5hbWVudCIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwiekluZGV4IiwidXNlckZsb3dWaWFGaXJzdEZpZWxkc2V0IiwidXNlck5hbWUiLCJ1c2VyTmljayIsInVzZXJNb3R0byIsInVzZXJOYW1lQWNjZXB0IiwidXNlck5pY2tBY2NlcHQiLCJ1c2VyTW90dG9BY2NlcHQiLCJuZXh0SXRlbSIsImV2ZW50IiwiYWxsRmllbGRzQXJlU2V0IiwiY2hlY2tJZkZpZWxkc0FyZVNldCIsImVuYWJsZU5leHRQYXJ0T2ZGb3JtdWxhIiwia2V5Q29kZSIsImZvY3VzIiwic2V0VGhpc0RhdGFUb0Rlc2NyaXB0aW9uIiwidmFsdWVBIiwidmFsdWVCIiwidmFsdWVDIiwidG9Mb3dlckNhc2UiLCJwYXJ0T2ZGb3JtIiwiY2hvb3NlWW91ckF2YXRhciIsImNvbnRhaW5lcnMiLCJhdmF0YXJzIiwiY2hvb3NlVGhpc0F2YXRhciIsInNldE9uZVBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uIiwic3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRzIiwiZW5hYmxlQXR0YWNrcyIsImNoZWNrZWQiLCJhdiIsIm5leHREZXNQYXJ0IiwiYW5vdGhlck5leHREZXNQYXJ0Iiwib3RoZXJBbm90aGVyTmV4dERlc1BhcnQiLCJjb250Iiwib3B0aW9ucyIsIngiLCJiYWNrZ3JvdW5kQ29sb3IiLCJlbmFibGVkQXR0YWNrcyIsImRpc2FibGVkSXRlbSIsInNlbGVjdGVkIiwiZW5hYmxlZEF0dGFjayIsImluaXRpYWxpemVBdHRhY2tzUGFydCIsIm9wdCIsIm9uTU91dCIsIm9uTUVudGVyIiwic3luY2hyb25pemVUaGlzQmNrZ3JXaXRoSW1hZ2VCZWx0SG92ZXJCY2tnciIsInN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0bnMiLCJpc0VudGVyIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImJjZ0NvbCIsImdldFByb3BlcnR5VmFsdWUiLCJpbml0IiwiYW1vdW50T2ZQb2ludHMiLCJidG5zIiwiYmVsdHMiLCJhZGRQb2ludCIsImRlbGV0ZVRoaXNJTUciLCJpbml0aWFsaXplVGhpc1NlY3Rpb24iLCJsaXN0QSIsImxpc3RCIiwiaW1hZ2VzQSIsImltYWdlc0IiLCJvcHRzQSIsIm9wdHNCIiwiZHluYW1pemVUaGlzTGlzdCIsImxpc3QiLCJpbWFnZXMiLCJvdGhlckxpc3QiLCJvcHRWYWx1ZSIsImVuYWJsZU5leHRGb3JtUGFydCIsImEiLCJiIiwiaW5pdGlhbGl6ZVRoaXNTZWxlY3QiLCJpdElzQ2xpY2tlZCJdLCJtYXBwaW5ncyI6Ijs7O0lBQ0FBLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4Q0MsVUFBOUM7O0lBRUEsU0FBU0EsVUFBVCxHQUFzQjtJQUNwQixNQUFJQyxPQUFPSCxTQUFTSSxnQkFBVCxDQUNULHNGQURTLENBQVg7SUFHQSxNQUFJQyxTQUFTRixLQUFLRyxNQUFsQjs7SUFKb0IsNkJBS1hDLENBTFc7SUFNbEIsUUFBSUMsT0FBT0wsS0FBS0ks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
