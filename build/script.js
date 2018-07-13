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
      inp.addEventListener('change', function () {
        var strName = inp.value;
        var item = document.querySelector('.--des_nazwa-ciosu');
        item.innerText = strName + ' to legendarne';
        showAllDes();
      });
      inp.addEventListener('click', function () {
        var itm = inp.value;
        if (itm.trim() !== '') {
          var strName = inp.value;
          var item = document.querySelector('.--des_nazwa-ciosu');
          item.innerText = strName + ' to legendarne';
          showAllDes();
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

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyIuLi9zb3VyY2UvZHluYW1pY3MvYXRha2ktc2V0LXR4dC5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9wb2RzdGF3eS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9rbGFzYS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9hdGFraS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9hdHRyeWJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdGlhbGl6ZSlcclxuZnVuY3Rpb24gaW5pdGlhbGl6ZSAoKSB7XHJcbiAgbGV0IG9wdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX3NlbGVjdC1saXN0IG9wdGlvbidcclxuICApXHJcbiAgbGV0IGFtb3VudCA9IG9wdHMubGVuZ3RoXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xyXG4gICAgbGV0IGl0ZW0gPSBvcHRzW2ldXHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBzZXRJTUcoaSlcclxuICAgICAgZW5hYmxlU3RyaWtlTmFtZVBhcnQoKVxyXG4gICAgICBzZXRTdHJpa2VOYW1lVG9EZXMoaSlcclxuICAgICAgc2V0UGFydE9mQXR0YWNrRGVzY3JpcHRpb24oaSlcclxuICAgICAgc2V0Rm9yY2VEZXMoaSlcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbmxldCBvbmx5T25jZSA9IDBcclxuZnVuY3Rpb24gZW5hYmxlU3RyaWtlTmFtZVBhcnQgKCkge1xyXG4gIG9ubHlPbmNlKytcclxuICBpZiAob25seU9uY2UgPT09IDEpIHtcclxuICAgIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0cmlrZU5hbWUnKVxyXG4gICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzdHJpa2VOYW1lJylcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gc2V0UGFydE9mQXR0YWNrRGVzY3JpcHRpb24gKGkpIHtcclxuICBsZXQgZGVzUGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Agc3Bhbi4tLWRlc19lcGl0ZXQnKVxyXG4gIGRlc1BhcnQuY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJylcclxuICBsZXQgYXJyYXkgPSBbXHJcbiAgICAnYnJ1dGFsbmUnLFxyXG4gICAgJ25pZXByemV3aWR5d2FsbmUnLFxyXG4gICAgJ3d5xId3aWN6b25lJyxcclxuICAgICduaWV6YXdvZG5lJyxcclxuICAgICdwcmVjeXp5am5lJyxcclxuICAgICd6bWFzb3dhbmUnLFxyXG4gICAgJ3BvZHN0xJlwbmUnLFxyXG4gICAgJ3d5cmFjaG93YW5lJyxcclxuICAgICd6ZHJhZHppZWNraWUnLFxyXG4gICAgJ3N6YWxlxYRjemUnLFxyXG4gICAgJ29wcmFjb3dhbmUgdyBsYWJvcmF0b3JpdW0gYWxjaGVtaWN6bnltJyxcclxuICAgICduaWVwb3dzdHJ6eW1hbmUnLFxyXG4gICAgJ3fFgmFkY3plJyxcclxuICAgICdtcm9jem5lJyxcclxuICAgICd0YWplbW5lJyxcclxuICAgICd3xZtjaWVrxYJlJyxcclxuICAgICd3c3BpZXJhbmUgbW9jxIUgb3RjaMWCYW5pJyxcclxuICAgICdwcnplc3ljb25lIHrFgsSFIG1vY8SFJ1xyXG4gIF1cclxuICBkZXNQYXJ0LmlubmVyVGV4dCA9ICcsICcgKyBhcnJheVtpXVxyXG59XHJcbmZ1bmN0aW9uIHNldElNRyAoaSkge1xyXG4gIGxldCBiZWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0J1xyXG4gIClbaV1cclxuICBsZXQgaW1hZyA9IGJlbHQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylbMF1cclxuICBsZXQgYXR0cnliID0gaW1hZy5nZXRBdHRyaWJ1dGUoJ3NyYycpXHJcbiAgbGV0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1wbGF0ZV9pbWdfaWNvbicpXHJcbiAgaWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIGF0dHJ5YilcclxuICBsZXQgYWxsSU1HcyA9IGJlbHQucXVlcnlTZWxlY3RvckFsbCgnaW1nJykubGVuZ3RoXHJcbiAgbGV0IHN0YW5kYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tc3RhbmRhcnRfaW1nX2Jja2cnKVxyXG4gIHdoaWxlIChzdGFuZGFydC5xdWVyeVNlbGVjdG9yKCdJTUcnKSAhPT0gbnVsbCkge1xyXG4gICAgbGV0IGltYWdlVG9EZWwgPSBzdGFuZGFydC5xdWVyeVNlbGVjdG9yKCdJTUcnKVxyXG4gICAgc3RhbmRhcnQucmVtb3ZlQ2hpbGQoaW1hZ2VUb0RlbClcclxuICB9XHJcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBhbGxJTUdzOyBqKyspIHtcclxuICAgIGlmIChqID4gMCkge1xyXG4gICAgICBsZXQgdGhlSU1HID0gYmVsdC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVtqXVxyXG4gICAgICBsZXQgc291cmNlSU1HID0gdGhlSU1HLmdldEF0dHJpYnV0ZSgnc3JjJylcclxuICAgICAgbGV0IG5ld0lNRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgIG5ld0lNRy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNvdXJjZUlNRylcclxuICAgICAgc3RhbmRhcnQuYXBwZW5kQ2hpbGQobmV3SU1HKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBzZXRTdHJpa2VOYW1lVG9EZXMgKGkpIHtcclxuICBsZXQgaW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm5hendhdWRlcnplbmlhXCJdJylcclxuICBpbnAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHN0ck5hbWUgPSBpbnAudmFsdWVcclxuICAgIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX25hendhLWNpb3N1JylcclxuICAgIGl0ZW0uaW5uZXJUZXh0ID0gc3RyTmFtZSArICcgdG8gbGVnZW5kYXJuZSdcclxuICAgIHNob3dBbGxEZXMoKVxyXG4gIH0pXHJcbiAgaW5wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGl0bSA9IGlucC52YWx1ZVxyXG4gICAgaWYgKGl0bS50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgIGxldCBzdHJOYW1lID0gaW5wLnZhbHVlXHJcbiAgICAgIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX25hendhLWNpb3N1JylcclxuICAgICAgaXRlbS5pbm5lclRleHQgPSBzdHJOYW1lICsgJyB0byBsZWdlbmRhcm5lJ1xyXG4gICAgICBzaG93QWxsRGVzKClcclxuICAgIH1cclxuICB9KVxyXG59XHJcbmZ1bmN0aW9uIHNldEZvcmNlRGVzIChpKSB7XHJcbiAgbGV0IGJlbHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnXHJcbiAgKVtpXTtcclxuICBsZXQgSU1HcyA9IGJlbHQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylcclxuICBsZXQgaXRlciA9IElNR3MubGVuZ3RoXHJcbiAgbGV0IHN0cm5nID0gW11cclxuICBmb3IgKGxldCBqID0gMDsgaiA8IGl0ZXI7IGorKykge1xyXG4gICAgbGV0IElNRyA9IElNR3Nbal1cclxuICAgIGxldCBhdHRyeWIgPSBJTUcuZ2V0QXR0cmlidXRlKCdzcmMnKVxyXG4gICAgaWYgKGogIT09IDApIHtcclxuICAgICAgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL2Jyb24tYmFyYmEuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ2RvZGF0a293xIUgbW9jxIUgdWRlcnplbmlvd8SFJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy9icm9uLWN6YXIuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ2RvZGF0a293xIUgbW9jxIUgY3phcm5va3NpxJlza8SFJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy9icm9uLXN0cnouc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ2RvZGF0a293eW0ga3Vuc3p0ZW0gc3RyemVsZWNraW0nKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL2Jyb24tc3phbC5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnZG9kYXRrb3d5bSBzemFsZcWEc3R3ZW0nKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL2Jyb24temRyYS5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnbmllc3BvZHppYW55bSB6ZHJhZGxpd3ltIGNpb3NlbScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvenl3LW9naWVuLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCfFvHl3aW/FgmVtIG9nbmlhJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy96eXctcm96a2xhZC5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnxbx5d2lvxYJlbSByb3prxYJhZHUnKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL3p5dy13b2Quc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ8W8eXdpb8WCZW0gd29keScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvenl3LXptaWFuYS5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnxbx5d2lvxYJlbSB6bWlhbnknKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL3p5dy16eXdpYS5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnxbx5d2lvxYJlbSDFvHl3aWknKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ3fFgmFzbsSFIG3EhWRyb8WbY2nEhSDFvHl3aW/FgsOzdyBpIHRhbGVudMOzdycpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgbGV0IHN0cmluZ1RvU2V0ID0gc3Rybmcuam9pbignLCAnKTtcclxuICBsZXQgenl3RGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3p5d2lvbCcpO1xyXG4gIGxldCBpbWlEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfaW1pZScpO1xyXG4gIGxldCBwcnpEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfcHJ6eWRvbWVrJyk7XHJcbiAgbGV0IHpkYURlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc196ZGFuaWUnKTtcclxuICB6eXdEZXMuY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJyk7XHJcbiAgaW1pRGVzLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpO1xyXG4gIHByekRlcy5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKTtcclxuICB6ZGFEZXMuY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJyk7XHJcbiAgenl3RGVzLmlubmVyVGV4dCA9IHN0cmluZ1RvU2V0ICsgJy4nO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXROYW1lVG9EZXMgKCkge1xyXG4gIGxldCBpbnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiaW1pZVwiXScpXHJcbiAgbGV0IG5hbSA9IGlucC52YWx1ZVxyXG4gIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX2ltaWUnKVxyXG4gIGl0ZW0uaW5uZXJUZXh0ID0gbmFtICsgJyAnO1xyXG4gIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJylcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0Tmlja25hbWVUb0RlcyAoKSB7XHJcbiAgbGV0IGlucEIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJ6eWRvbWVrXCJdJylcclxuICBsZXQgc3VybmFtID0gaW5wQi52YWx1ZVxyXG4gIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3Byenlkb21laycpXHJcbiAgaXRlbS5pbm5lclRleHQgPSBzdXJuYW07XHJcbiAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTZW50ZW5jZVRvRGVzICgpIHtcclxuICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc196ZGFuaWUnKVxyXG4gIGl0ZW0uaW5uZXJUZXh0ID0gJyB3em1hY25pYSBzd8OzaiBhdGFrICdcclxuICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpXHJcbn1cclxuZnVuY3Rpb24gc2hvd0FsbERlcyAoKSB7XHJcbiAgbGV0IGFsbERlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlcycpXHJcbiAgYWxsRGVzLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpXHJcbn1cclxuIiwiaW1wb3J0IHtzZXROYW1lVG9EZXN9IGZyb20gJy4vYXRha2ktc2V0LXR4dC5qcyc7XHJcbmltcG9ydCB7c2V0Tmlja25hbWVUb0Rlc30gZnJvbSAnLi9hdGFraS1zZXQtdHh0LmpzJztcclxuaW1wb3J0IHtzZXRTZW50ZW5jZVRvRGVzfSBmcm9tICcuL2F0YWtpLXNldC10eHQuanMnO1xyXG4ndXNlIHN0cmljdCc7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgdXNlckZsb3dWaWFGaXJzdEZpZWxkc2V0KClcclxufSlcclxuZnVuY3Rpb24gdXNlckZsb3dWaWFGaXJzdEZpZWxkc2V0ICgpIHtcclxuICBsZXQgdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiaW1pZVwiXScpO1xyXG4gIGxldCB1c2VyTmljayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcnp5ZG9tZWtcIl0nKTtcclxuICBsZXQgdXNlck1vdHRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWFbbmFtZT1cInphd29sYW5pZVwiXScpO1xyXG4gIHVzZXJOYW1lQWNjZXB0KHVzZXJOYW1lLCB1c2VyTmljaylcclxuICB1c2VyTmlja0FjY2VwdCh1c2VyTmljaywgdXNlck1vdHRvKVxyXG4gIHVzZXJNb3R0b0FjY2VwdCh1c2VyTW90dG8sIHVzZXJOYW1lKVxyXG59XHJcbmZ1bmN0aW9uIHVzZXJOYW1lQWNjZXB0IChpdGVtLCBuZXh0SXRlbSkge1xyXG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGxldCBhbGxGaWVsZHNBcmVTZXQgPSBjaGVja0lmRmllbGRzQXJlU2V0KCk7XHJcbiAgICBpZiAoYWxsRmllbGRzQXJlU2V0ID09PSB0cnVlKSB7XHJcbiAgICAgIGVuYWJsZU5leHRQYXJ0T2ZGb3JtdWxhKCk7XHJcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgIG5leHRJdGVtLmZvY3VzKClcclxuICAgIH1cclxuICAgIHNldFRoaXNEYXRhVG9EZXNjcmlwdGlvbigpO1xyXG4gIH0pXHJcbn1cclxuZnVuY3Rpb24gdXNlck5pY2tBY2NlcHQgKGl0ZW0sIG5leHRJdGVtKSB7XHJcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgbGV0IGFsbEZpZWxkc0FyZVNldCA9IGNoZWNrSWZGaWVsZHNBcmVTZXQoKTtcclxuICAgIGlmIChhbGxGaWVsZHNBcmVTZXQgPT09IHRydWUpIHtcclxuICAgICAgZW5hYmxlTmV4dFBhcnRPZkZvcm11bGEoKTtcclxuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgbmV4dEl0ZW0uZm9jdXMoKVxyXG4gICAgfVxyXG4gICAgc2V0VGhpc0RhdGFUb0Rlc2NyaXB0aW9uKCk7XHJcbiAgfSlcclxufVxyXG5mdW5jdGlvbiB1c2VyTW90dG9BY2NlcHQgKGl0ZW0sIG5leHRJdGVtKSB7XHJcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgbGV0IGFsbEZpZWxkc0FyZVNldCA9IGNoZWNrSWZGaWVsZHNBcmVTZXQoKTtcclxuICAgIGlmIChhbGxGaWVsZHNBcmVTZXQgPT09IHRydWUpIHtcclxuICAgICAgZW5hYmxlTmV4dFBhcnRPZkZvcm11bGEoKTtcclxuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgbmV4dEl0ZW0uZm9jdXMoKVxyXG4gICAgfVxyXG4gICAgc2V0VGhpc0RhdGFUb0Rlc2NyaXB0aW9uKCk7XHJcbiAgfSlcclxufVxyXG5mdW5jdGlvbiBjaGVja0lmRmllbGRzQXJlU2V0KCkge1xyXG4gICAgbGV0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImltaWVcIl0nKTtcclxuICAgIGxldCB1c2VyTmljayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcnp5ZG9tZWtcIl0nKTtcclxuICAgIGxldCB1c2VyTW90dG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYVtuYW1lPVwiemF3b2xhbmllXCJdJyk7XHJcbiAgICBsZXQgdmFsdWVBID0gdXNlck5hbWUudmFsdWU7XHJcbiAgICBsZXQgdmFsdWVCID0gdXNlck5pY2sudmFsdWU7XHJcbiAgICBsZXQgdmFsdWVDID0gdXNlck1vdHRvLnZhbHVlO1xyXG4gICAgaWYgKHZhbHVlQS50cmltKCkhPT1cIlwiJiZ2YWx1ZUEudHJpbSgpLnRvTG93ZXJDYXNlKCkhPT1cImhlcm9zXCIpe1xyXG4gICAgICAgIGlmKHZhbHVlQi50cmltKCkhPT1cIlwiJiZ2YWx1ZUIudHJpbSgpLnRvTG93ZXJDYXNlKCkhPT1cIndvamVubnkgcGllc1wiKXtcclxuICAgICAgICAgIGlmKHZhbHVlQy50cmltKCkhPT1cIlwiJiZ2YWx1ZUMudHJpbSgpLnRvTG93ZXJDYXNlKCkhPT1cInphd3N6ZSB3aWVybnlcIil7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfSAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGVuYWJsZU5leHRQYXJ0T2ZGb3JtdWxhKCl7XHJcbiAgICBsZXQgdGhpc09ybmFtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nLmNvcnB1c19zZWN0aW9uX2Zvcm1fb3JuYW1lbnQtbWFya2VyJyk7XHJcbiAgICBsZXQgYWxsT3JuYW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLmNvcnB1c19zZWN0aW9uX2Zvcm1fb3JuYW1lbnQtbWFya2VyJyk7XHJcbiAgICB0aGlzT3JuYW1lbnQuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pY29ucy9wb2xlLnN2ZycpO1xyXG4gICAgdGhpc09ybmFtZW50LmNsYXNzTGlzdC5hZGQoJ2l0SXNQYXNzZWRUaHJvdWdodCcpO1xyXG4gICAgbGV0IG5leHRPcm5hbWVudCA9IGFsbE9ybmFtZW50c1sxXTtcclxuICAgIG5leHRPcm5hbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbiAgICBsZXQgcGFydE9mRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkcycpO1xyXG4gICAgcGFydE9mRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbn1cclxuZnVuY3Rpb24gc2V0VGhpc0RhdGFUb0Rlc2NyaXB0aW9uKCl7XHJcbiAgc2V0TmFtZVRvRGVzKCk7XHJcbiAgc2V0Tmlja25hbWVUb0RlcygpO1xyXG4gIHNldFNlbnRlbmNlVG9EZXMoKTtcclxufSIsIid1c2Ugc3RyaWN0J1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY2hvb3NlWW91ckF2YXRhcilcclxuZnVuY3Rpb24gY2hvb3NlWW91ckF2YXRhciAoKSB7XHJcbiAgbGV0IGNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcicpXHJcbiAgbGV0IGF2YXRhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfcmFkaW8tbGFiLWNvbnRhaW5lcicpXHJcbiAgbGV0IGFtb3VudCA9IGF2YXRhcnMubGVuZ3RoXHJcbiAgZm9yIChsZXQgaSA9IDA7aSA8IGFtb3VudDtpKyspIHtcclxuICAgIGxldCBpdGVtID0gYXZhdGFyc1tpXVxyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgY2hvb3NlVGhpc0F2YXRhcihpdGVtLCBhdmF0YXJzLCBhbW91bnQpXHJcbiAgICAgIHNldE9uZVBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uKGkpXHJcbiAgICAgIHN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0cyhjb250YWluZXJzKVxyXG4gICAgICBlbmFibGVBdHRhY2tzKGkpXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBjaG9vc2VUaGlzQXZhdGFyIChpdGVtLCBhdmF0YXJzLCBhbW91bnQpIHtcclxuICBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuY2hlY2tlZCA9IHRydWU7XHJcbiAgZm9yIChsZXQgaT0wOyBpPGFtb3VudDsgaSsrKXtcclxuICAgICAgbGV0IGF2ID0gYXZhdGFyc1tpXTtcclxuICAgICAgYXYuY2xhc3NMaXN0LnJlbW92ZSgnaXNDbGlja2VkJyk7XHJcbiAgfVxyXG4gIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXNDbGlja2VkJyk7XHJcbn1cclxuZnVuY3Rpb24gc2V0T25lUGFydE9mQXR0YWNrRGVzY3JpcHRpb24gKGkpIHtcclxuICBsZXQgZGVzUGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Agc3Bhbi4tLWRlc19rbGFzYScpXHJcbiAgbGV0IGFycmF5ID0gW1xyXG4gICAgJyB1ZGVyemVuaWUgYnJvbmnEhSBicnV0YWxuxIUuJyxcclxuICAgICcgdWRlcnplbmllIGJyb25pxIUgc3RyemVsZWNrxIUuJyxcclxuICAgICcgdWRlcnplbmllIGJyb25pxIUgemRyYWR6aWVja8SFLicsXHJcbiAgICAnIHVkZXJ6ZW5pZSBicm9uacSFIHN6YWxlxYRjesSFLicsXHJcbiAgICAnIHVkZXJ6ZW5pZSBicm9uacSFIHN6YXJsYXRhxYRza8SFLicsXHJcbiAgICAnIHVkZXJ6ZW5pZSBicm9uacSFIGx1YiBjenlta29sd2llaywgY28gd3BhZG5pZSBrYXLFgm93aSB3IMWCYXBza2EuJ1xyXG4gIF1cclxuICBkZXNQYXJ0LmlubmVyVGV4dCA9IGFycmF5W2ldXHJcbiAgbGV0IG5leHREZXNQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncCBzcGFuLi0tZGVzX2VwaXRldCcpO1xyXG4gIG5leHREZXNQYXJ0LmNsYXNzTGlzdC5hZGQoJ2l0c0hpZGRlbicpO1xyXG4gIGxldCBhbm90aGVyTmV4dERlc1BhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfenl3aW9sJyk7XHJcbiAgYW5vdGhlck5leHREZXNQYXJ0LmNsYXNzTGlzdC5hZGQoJ2l0c0hpZGRlbicpO1xyXG4gIGxldCBvdGhlckFub3RoZXJOZXh0RGVzUGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19pbWllJyk7XHJcbiAgb3RoZXJBbm90aGVyTmV4dERlc1BhcnQuY2xhc3NMaXN0LmFkZCgnaXRzSGlkZGVuJyk7XHJcbiAgbGV0IHByekRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19wcnp5ZG9tZWsnKTtcclxuICBsZXQgemRhRGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3pkYW5pZScpO1xyXG4gIHByekRlcy5jbGFzc0xpc3QuYWRkKCdpdHNIaWRkZW4nKTtcclxuICB6ZGFEZXMuY2xhc3NMaXN0LmFkZCgnaXRzSGlkZGVuJyk7XHJcbn1cclxuZnVuY3Rpb24gc3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRzIChjb250YWluZXJzKSB7XHJcbiAgbGV0IGFtb3VudCA9IGNvbnRhaW5lcnMubGVuZ3RoXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xyXG4gICAgbGV0IGNvbnQgPSBjb250YWluZXJzW2ldXHJcbiAgICBsZXQgb3B0aW9ucyA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJylcclxuICAgIGxldCBpdGVyID0gb3B0aW9ucy5sZW5ndGhcclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlcjsgeCsrKSB7XHJcbiAgICAgIGxldCBiZWx0ID0gY29udC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0JylbeF1cclxuICAgICAgYmVsdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5oZXJpdCdcclxuICAgIH1cclxuICB9XHJcbn1cclxuZnVuY3Rpb24gZW5hYmxlQXR0YWNrcyAoaSkge1xyXG4gIGxldCBlbmFibGVkQXR0YWNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyJylcclxuICBmb3IgKGxldCB4ID0gMDsgeCA8IDY7IHgrKykge1xyXG4gICAgbGV0IGRpc2FibGVkSXRlbSA9IGVuYWJsZWRBdHRhY2tzW3hdXHJcbiAgICBkaXNhYmxlZEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnZW5hYmxlZCcpXHJcbiAgICBsZXQgb3B0cyA9IGRpc2FibGVkSXRlbS5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKVxyXG4gICAgbGV0IGFtb3VudCA9IG9wdHMubGVuZ3RoXHJcbiAgICBmb3IgKGxldCBqID0gMDtqIDwgYW1vdW50O2orKykge1xyXG4gICAgICBpZiAob3B0c1tqXS5zZWxlY3RlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIG9wdHNbal0uc2VsZWN0ZWQgPSBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCBlbmFibGVkQXR0YWNrID0gZW5hYmxlZEF0dGFja3NbaV1cclxuICBlbmFibGVkQXR0YWNrLmNsYXNzTGlzdC5hZGQoJ2VuYWJsZWQnKVxyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRpYWxpemVBdHRhY2tzUGFydCk7XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplQXR0YWNrc1BhcnQoKSB7XHJcbiAgICBsZXQgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyJyk7XHJcbiAgICBsZXQgYW1vdW50ID0gY29udGFpbmVycy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGNvbnQgPSBjb250YWluZXJzW2ldO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gY29udC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKTtcclxuICAgICAgICBsZXQgaXRlciA9IG9wdGlvbnMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlcjsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBvcHQgPSBvcHRpb25zW3hdO1xyXG4gICAgICAgICAgICBvcHQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBvbk1PdXQpO1xyXG4gICAgICAgICAgICBvcHQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIG9uTUVudGVyKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uTUVudGVyKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdC5zZWxlY3RlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBzeW5jaHJvbml6ZVRoaXNCY2tncldpdGhJbWFnZUJlbHRIb3ZlckJja2dyKG9wdCwgY29udCwgeCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBvbk1PdXQoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0LnNlbGVjdGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN5bmNocm9uaXplVGhpc0Jja2dyV2l0aEltYWdlQmVsdEhvdmVyQmNrZ3Iob3B0LCBjb250LCB4LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIG9wdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0bnMoY29udCwgaXRlcik7XHJcbiAgICAgICAgICAgICAgICBzeW5jaHJvbml6ZVRoaXNCY2tncldpdGhJbWFnZUJlbHRIb3ZlckJja2dyKG9wdCwgY29udCwgeCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0bnMoY29udCwgaXRlcikge1xyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVyOyB4KyspIHtcclxuICAgICAgICBsZXQgYmVsdCA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdCcpW3hdO1xyXG4gICAgICAgIGJlbHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJpbmhlcml0XCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN5bmNocm9uaXplVGhpc0Jja2dyV2l0aEltYWdlQmVsdEhvdmVyQmNrZ3Iob3B0LCBjb250LCB4LCBpc0VudGVyKSB7XHJcbiAgICBsZXQgYmVsdCA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdCcpW3hdO1xyXG4gICAgaWYgKGlzRW50ZXIgPT09IHRydWUpIHtcclxuICAgICAgICBsZXQgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShvcHQpO1xyXG4gICAgICAgIGxldCBiY2dDb2wgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XHJcbiAgICAgICAgYmVsdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBiY2dDb2w7XHJcbiAgICB9IGVsc2UgaWYgKGlzRW50ZXIgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgYmVsdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImluaGVyaXRcIjtcclxuICAgIH1cclxufSIsIid1c2Ugc3RyaWN0JztcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXQpO1xyXG5sZXQgYW1vdW50T2ZQb2ludHMgPSAyMDtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBsZXQgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkcy0yX2ZpZWxkc2V0LWRfY29udGFpbmVyX2F0cnliIC4tLWJlbHRfaWNvbi1jb250YWluZXInKTtcclxuICAgIGxldCBiZWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkcy0yX2ZpZWxkc2V0LWRfY29udGFpbmVyX2F0cnliIC4tLWJlbHRfYm9keS1jb250YWluZXJfYm9keScpO1xyXG4gICAgbGV0IGl0ZXIgPSBidG5zLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcjsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGkgPiA0KSB7XHJcbiAgICAgICAgICAgIGxldCBhdHRyeWIgPSBidG5zW2ldO1xyXG4gICAgICAgICAgICBsZXQgYmVsdCA9IGJlbHRzW2ldO1xyXG4gICAgICAgICAgICBhdHRyeWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYW1vdW50T2ZQb2ludHMgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkUG9pbnQoYmVsdClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb2ludChiZWx0KSB7XHJcbiAgICBsZXQgSU1HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnSU1HJyk7XHJcbiAgICBJTUcuc2V0QXR0cmlidXRlKCdzcmMnLCAnaWNvbnMvaWtvbmEtcG90ZWcuc3ZnJyk7XHJcbiAgICBiZWx0LmFwcGVuZENoaWxkKElNRyk7XHJcbiAgICBhbW91bnRPZlBvaW50cy0tO1xyXG4gICAgSU1HLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRlbGV0ZVRoaXNJTUcoSU1HKVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlVGhpc0lNRyh4KSB7XHJcbiAgICB4LnJlbW92ZSgpO1xyXG4gICAgYW1vdW50T2ZQb2ludHMrKztcclxufSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0aWFsaXplIiwib3B0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhbW91bnQiLCJsZW5ndGgiLCJpIiwiaXRlbSIsInNldElNRyIsImVuYWJsZVN0cmlrZU5hbWVQYXJ0Iiwic2V0U3RyaWtlTmFtZVRvRGVzIiwic2V0UGFydE9mQXR0YWNrRGVzY3JpcHRpb24iLCJzZXRGb3JjZURlcyIsIm9ubHlPbmNlIiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImRlc1BhcnQiLCJhcnJheSIsImlubmVyVGV4dCIsImJlbHQiLCJpbWFnIiwiYXR0cnliIiwiZ2V0QXR0cmlidXRlIiwiaWNvbiIsInNldEF0dHJpYnV0ZSIsImFsbElNR3MiLCJzdGFuZGFydCIsImltYWdlVG9EZWwiLCJyZW1vdmVDaGlsZCIsImoiLCJ0aGVJTUciLCJzb3VyY2VJTUciLCJuZXdJTUciLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJpbnAiLCJzdHJOYW1lIiwidmFsdWUiLCJzaG93QWxsRGVzIiwiaXRtIiwidHJpbSIsIklNR3MiLCJpdGVyIiwic3RybmciLCJJTUciLCJwdXNoIiwic3RyaW5nVG9TZXQiLCJqb2luIiwienl3RGVzIiwiaW1pRGVzIiwicHJ6RGVzIiwiemRhRGVzIiwic2V0TmFtZVRvRGVzIiwibmFtIiwic2V0Tmlja25hbWVUb0RlcyIsImlucEIiLCJzdXJuYW0iLCJzZXRTZW50ZW5jZVRvRGVzIiwiYWxsRGVzIiwidXNlckZsb3dWaWFGaXJzdEZpZWxkc2V0IiwidXNlck5hbWUiLCJ1c2VyTmljayIsInVzZXJNb3R0byIsInVzZXJOYW1lQWNjZXB0IiwidXNlck5pY2tBY2NlcHQiLCJ1c2VyTW90dG9BY2NlcHQiLCJuZXh0SXRlbSIsImV2ZW50IiwiYWxsRmllbGRzQXJlU2V0IiwiY2hlY2tJZkZpZWxkc0FyZVNldCIsImVuYWJsZU5leHRQYXJ0T2ZGb3JtdWxhIiwia2V5Q29kZSIsImZvY3VzIiwic2V0VGhpc0RhdGFUb0Rlc2NyaXB0aW9uIiwidmFsdWVBIiwidmFsdWVCIiwidmFsdWVDIiwidG9Mb3dlckNhc2UiLCJ0aGlzT3JuYW1lbnQiLCJhbGxPcm5hbWVudHMiLCJhZGQiLCJuZXh0T3JuYW1lbnQiLCJwYXJ0T2ZGb3JtIiwiY2hvb3NlWW91ckF2YXRhciIsImNvbnRhaW5lcnMiLCJhdmF0YXJzIiwiY2hvb3NlVGhpc0F2YXRhciIsInNldE9uZVBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uIiwic3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRzIiwiZW5hYmxlQXR0YWNrcyIsImNoZWNrZWQiLCJhdiIsIm5leHREZXNQYXJ0IiwiYW5vdGhlck5leHREZXNQYXJ0Iiwib3RoZXJBbm90aGVyTmV4dERlc1BhcnQiLCJjb250Iiwib3B0aW9ucyIsIngiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImVuYWJsZWRBdHRhY2tzIiwiZGlzYWJsZWRJdGVtIiwic2VsZWN0ZWQiLCJlbmFibGVkQXR0YWNrIiwiaW5pdGlhbGl6ZUF0dGFja3NQYXJ0Iiwib3B0Iiwib25NT3V0Iiwib25NRW50ZXIiLCJzeW5jaHJvbml6ZVRoaXNCY2tncldpdGhJbWFnZUJlbHRIb3ZlckJja2dyIiwic3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRucyIsImlzRW50ZXIiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiYmNnQ29sIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImluaXQiLCJhbW91bnRPZlBvaW50cyIsImJ0bnMiLCJiZWx0cyIsImFkZFBvaW50IiwiZGVsZXRlVGhpc0lNRyJdLCJtYXBwaW5ncyI6Ijs7O0lBQ0FBLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4Q0MsVUFBOUM7SUFDQSxTQUFTQSxVQUFULEdBQXVCO0lBQ3JCLE1BQUlDLE9BQU9ILFNBQVNJLGdCQUFULENBQ1Qsc0ZBRFMsQ0FBWDtJQUdBLE1BQUlDLFNBQVNGLEtBQUtHLE1BQWxCOztJQUpxQiw2QkFLWkMsQ0FMWTtJQU1uQixRQUFJQyxPQUFPTCxLQUFLSSxDQUFMLENBQVg7SUFDQUMsU0FBS1AsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBWTtJQUN6Q1EsYUFBT0YsQ0FBUDtJQUNBRztJQUNBQyx5QkFBbUJKLENBQW5CO0lBQ0FLLGlDQUEyQkwsQ0FBM0I7SUFDQU0sa0JBQVlOLENBQVo7SUFDRCxLQU5EO0lBUG1COztJQUtyQixPQUFLLElBQUlBLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsTUFBcEIsRUFBNEJFLEdBQTVCLEVBQWlDO0lBQUEsVUFBeEJBLENBQXdCO0lBU2hDO0lBQ0Y7SUFDRCxJQUFJTyxXQUFXLENBQWY7SUFDQSxTQUFTSixvQkFBVCxHQUFpQztJQUMvQkk7SUFDQSxNQUFJQSxhQUFhLENBQWpCLEVBQW9CO0lBQ2xCLFFBQUlOLE9BQU9SLFNBQVNlLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBWDtJQUNBUCxTQUFLUSxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsWUFBdEI7SUFDRDtJQUNGO0lBQ0QsU0FBU0wsMEJBQVQsQ0FBcUNMLENBQXJDLEVBQXdDO0lB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
