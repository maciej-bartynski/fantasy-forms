(function () {
    'use strict';

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
      setNameToDes();
      var stringToSet = strng.join(', ');
      var spnDes = document.querySelector('.--des_zywiol');
      spnDes.classList.remove('itsHidden');
      spnDes.innerText = stringToSet + '.';
    }
    function setNameToDes() {
      var inp = document.querySelector('input[name="imie"]');
      var nam = inp.value;
      var inpB = document.querySelector('input[name="przydomek"]');
      var surnam = inpB.value;
      var item = document.querySelector('.--des_imie');
      item.innerText = nam + ' ' + surnam + ' wzmacnia swój atak ';
      item.classList.remove('itsHidden');
    }
    function showAllDes() {
      var allDes = document.querySelector('.--des');
      allDes.classList.remove('itsHidden');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyIuLi9zb3VyY2UvZHluYW1pY3MvcG9kc3Rhd3kuanMiLCIuLi9zb3VyY2UvZHluYW1pY3Mva2xhc2EuanMiLCIuLi9zb3VyY2UvZHluYW1pY3MvYXRha2kuanMiLCIuLi9zb3VyY2UvZHluYW1pY3MvYXRha2ktc2V0LXR4dC5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9hdHRyeWJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gIHVzZXJGbG93VmlhRmlyc3RGaWVsZHNldCgpXHJcbn0pXHJcbmZ1bmN0aW9uIHVzZXJGbG93VmlhRmlyc3RGaWVsZHNldCAoKSB7XHJcbiAgbGV0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImltaWVcIl0nKTtcclxuICBsZXQgdXNlck5pY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJ6eWRvbWVrXCJdJyk7XHJcbiAgbGV0IHVzZXJNb3R0byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhW25hbWU9XCJ6YXdvbGFuaWVcIl0nKTtcclxuICB1c2VyTmFtZUFjY2VwdCh1c2VyTmFtZSwgdXNlck5pY2spXHJcbiAgdXNlck5pY2tBY2NlcHQodXNlck5pY2ssIHVzZXJNb3R0bylcclxuICB1c2VyTW90dG9BY2NlcHQodXNlck1vdHRvLCB1c2VyTmFtZSlcclxufVxyXG5mdW5jdGlvbiB1c2VyTmFtZUFjY2VwdCAoaXRlbSwgbmV4dEl0ZW0pIHtcclxuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBsZXQgYWxsRmllbGRzQXJlU2V0ID0gY2hlY2tJZkZpZWxkc0FyZVNldCgpO1xyXG4gICAgaWYgKGFsbEZpZWxkc0FyZVNldCA9PT0gdHJ1ZSkge1xyXG4gICAgICBlbmFibGVOZXh0UGFydE9mRm9ybXVsYSgpO1xyXG4gICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICBuZXh0SXRlbS5mb2N1cygpXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5mdW5jdGlvbiB1c2VyTmlja0FjY2VwdCAoaXRlbSwgbmV4dEl0ZW0pIHtcclxuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBsZXQgYWxsRmllbGRzQXJlU2V0ID0gY2hlY2tJZkZpZWxkc0FyZVNldCgpO1xyXG4gICAgaWYgKGFsbEZpZWxkc0FyZVNldCA9PT0gdHJ1ZSkge1xyXG4gICAgICBlbmFibGVOZXh0UGFydE9mRm9ybXVsYSgpO1xyXG4gICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICBuZXh0SXRlbS5mb2N1cygpXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5mdW5jdGlvbiB1c2VyTW90dG9BY2NlcHQgKGl0ZW0sIG5leHRJdGVtKSB7XHJcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgbGV0IGFsbEZpZWxkc0FyZVNldCA9IGNoZWNrSWZGaWVsZHNBcmVTZXQoKTtcclxuICAgIGlmIChhbGxGaWVsZHNBcmVTZXQgPT09IHRydWUpIHtcclxuICAgICAgZW5hYmxlTmV4dFBhcnRPZkZvcm11bGEoKTtcclxuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgbmV4dEl0ZW0uZm9jdXMoKVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuZnVuY3Rpb24gY2hlY2tJZkZpZWxkc0FyZVNldCgpIHtcclxuICAgIGxldCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJpbWllXCJdJyk7XHJcbiAgICBsZXQgdXNlck5pY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJ6eWRvbWVrXCJdJyk7XHJcbiAgICBsZXQgdXNlck1vdHRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWFbbmFtZT1cInphd29sYW5pZVwiXScpO1xyXG4gICAgbGV0IHZhbHVlQSA9IHVzZXJOYW1lLnZhbHVlO1xyXG4gICAgbGV0IHZhbHVlQiA9IHVzZXJOaWNrLnZhbHVlO1xyXG4gICAgbGV0IHZhbHVlQyA9IHVzZXJNb3R0by52YWx1ZTtcclxuICAgIGlmICh2YWx1ZUEudHJpbSgpIT09XCJcIiYmdmFsdWVBLnRyaW0oKS50b0xvd2VyQ2FzZSgpIT09XCJoZXJvc1wiKXtcclxuICAgICAgICBpZih2YWx1ZUIudHJpbSgpIT09XCJcIiYmdmFsdWVCLnRyaW0oKS50b0xvd2VyQ2FzZSgpIT09XCJ3b2plbm55IHBpZXNcIil7XHJcbiAgICAgICAgICBpZih2YWx1ZUMudHJpbSgpIT09XCJcIiYmdmFsdWVDLnRyaW0oKS50b0xvd2VyQ2FzZSgpIT09XCJ6YXdzemUgd2llcm55XCIpe1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH0gIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBlbmFibGVOZXh0UGFydE9mRm9ybXVsYSgpe1xyXG4gICAgbGV0IHRoaXNPcm5hbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZy5jb3JwdXNfc2VjdGlvbl9mb3JtX29ybmFtZW50LW1hcmtlcicpO1xyXG4gICAgbGV0IGFsbE9ybmFtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZy5jb3JwdXNfc2VjdGlvbl9mb3JtX29ybmFtZW50LW1hcmtlcicpO1xyXG4gICAgdGhpc09ybmFtZW50LnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaWNvbnMvcG9sZS5zdmcnKTtcclxuICAgIHRoaXNPcm5hbWVudC5jbGFzc0xpc3QuYWRkKCdpdElzUGFzc2VkVGhyb3VnaHQnKTtcclxuICAgIGxldCBuZXh0T3JuYW1lbnQgPSBhbGxPcm5hbWVudHNbMV07XHJcbiAgICBuZXh0T3JuYW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0hpZGRlbicpO1xyXG4gICAgbGV0IHBhcnRPZkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHMnKTtcclxuICAgIHBhcnRPZkZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0hpZGRlbicpO1xyXG59IiwiJ3VzZSBzdHJpY3QnXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjaG9vc2VZb3VyQXZhdGFyKVxyXG5mdW5jdGlvbiBjaG9vc2VZb3VyQXZhdGFyICgpIHtcclxuICBsZXQgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyJylcclxuICBsZXQgYXZhdGFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9yYWRpby1sYWItY29udGFpbmVyJylcclxuICBsZXQgYW1vdW50ID0gYXZhdGFycy5sZW5ndGhcclxuICBmb3IgKGxldCBpID0gMDtpIDwgYW1vdW50O2krKykge1xyXG4gICAgbGV0IGl0ZW0gPSBhdmF0YXJzW2ldXHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBjaG9vc2VUaGlzQXZhdGFyKGl0ZW0sIGF2YXRhcnMsIGFtb3VudClcclxuICAgICAgc2V0T25lUGFydE9mQXR0YWNrRGVzY3JpcHRpb24oaSlcclxuICAgICAgc3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRzKGNvbnRhaW5lcnMpXHJcbiAgICAgIGVuYWJsZUF0dGFja3MoaSlcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGNob29zZVRoaXNBdmF0YXIgKGl0ZW0sIGF2YXRhcnMsIGFtb3VudCkge1xyXG4gIGl0ZW0ucXVlcnlTZWxlY3RvcignaW5wdXQnKS5jaGVja2VkID0gdHJ1ZTtcclxuICBmb3IgKGxldCBpPTA7IGk8YW1vdW50OyBpKyspe1xyXG4gICAgICBsZXQgYXYgPSBhdmF0YXJzW2ldO1xyXG4gICAgICBhdi5jbGFzc0xpc3QucmVtb3ZlKCdpc0NsaWNrZWQnKTtcclxuICB9XHJcbiAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpc0NsaWNrZWQnKTtcclxufVxyXG5mdW5jdGlvbiBzZXRPbmVQYXJ0T2ZBdHRhY2tEZXNjcmlwdGlvbiAoaSkge1xyXG4gIGxldCBkZXNQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncCBzcGFuLi0tZGVzX2tsYXNhJylcclxuICBsZXQgYXJyYXkgPSBbXHJcbiAgICAnIHVkZXJ6ZW5pZSBicm9uacSFIGJydXRhbG7EhS4nLFxyXG4gICAgJyB1ZGVyemVuaWUgYnJvbmnEhSBzdHJ6ZWxlY2vEhS4nLFxyXG4gICAgJyB1ZGVyemVuaWUgYnJvbmnEhSB6ZHJhZHppZWNrxIUuJyxcclxuICAgICcgdWRlcnplbmllIGJyb25pxIUgc3phbGXFhGN6xIUuJyxcclxuICAgICcgdWRlcnplbmllIGJyb25pxIUgc3phcmxhdGHFhHNrxIUuJyxcclxuICAgICcgdWRlcnplbmllIGJyb25pxIUgbHViIGN6eW1rb2x3aWVrLCBjbyB3cGFkbmllIGthcsWCb3dpIHcgxYJhcHNrYS4nXHJcbiAgXVxyXG4gIGRlc1BhcnQuaW5uZXJUZXh0ID0gYXJyYXlbaV1cclxuICBsZXQgbmV4dERlc1BhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwIHNwYW4uLS1kZXNfZXBpdGV0JylcclxuICBuZXh0RGVzUGFydC5jbGFzc0xpc3QuYWRkKCdpdHNIaWRkZW4nKVxyXG4gIGxldCBhbm90aGVyTmV4dERlc1BhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfenl3aW9sJylcclxuICBhbm90aGVyTmV4dERlc1BhcnQuY2xhc3NMaXN0LmFkZCgnaXRzSGlkZGVuJylcclxuICBsZXQgb3RoZXJBbm90aGVyTmV4dERlc1BhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfaW1pZScpXHJcbiAgb3RoZXJBbm90aGVyTmV4dERlc1BhcnQuY2xhc3NMaXN0LmFkZCgnaXRzSGlkZGVuJylcclxufVxyXG5mdW5jdGlvbiBzeW5jaHJvbml6ZUJhY2tncm91bmRzT2ZPdGhlck9wdHMgKGNvbnRhaW5lcnMpIHtcclxuICBsZXQgYW1vdW50ID0gY29udGFpbmVycy5sZW5ndGhcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XHJcbiAgICBsZXQgY29udCA9IGNvbnRhaW5lcnNbaV1cclxuICAgIGxldCBvcHRpb25zID0gY29udC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKVxyXG4gICAgbGV0IGl0ZXIgPSBvcHRpb25zLmxlbmd0aFxyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVyOyB4KyspIHtcclxuICAgICAgbGV0IGJlbHQgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnKVt4XVxyXG4gICAgICBiZWx0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdpbmhlcml0J1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBlbmFibGVBdHRhY2tzIChpKSB7XHJcbiAgbGV0IGVuYWJsZWRBdHRhY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXInKVxyXG4gIGZvciAobGV0IHggPSAwOyB4IDwgNjsgeCsrKSB7XHJcbiAgICBsZXQgZGlzYWJsZWRJdGVtID0gZW5hYmxlZEF0dGFja3NbeF1cclxuICAgIGRpc2FibGVkSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdlbmFibGVkJylcclxuICAgIGxldCBvcHRzID0gZGlzYWJsZWRJdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpXHJcbiAgICBsZXQgYW1vdW50ID0gb3B0cy5sZW5ndGhcclxuICAgIGZvciAobGV0IGogPSAwO2ogPCBhbW91bnQ7aisrKSB7XHJcbiAgICAgIGlmIChvcHRzW2pdLnNlbGVjdGVkID09PSB0cnVlKSB7XHJcbiAgICAgICAgb3B0c1tqXS5zZWxlY3RlZCA9IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgbGV0IGVuYWJsZWRBdHRhY2sgPSBlbmFibGVkQXR0YWNrc1tpXVxyXG4gIGVuYWJsZWRBdHRhY2suY2xhc3NMaXN0LmFkZCgnZW5hYmxlZCcpXHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdGlhbGl6ZUF0dGFja3NQYXJ0KTtcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVBdHRhY2tzUGFydCgpIHtcclxuICAgIGxldCBjb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXInKTtcclxuICAgIGxldCBhbW91bnQgPSBjb250YWluZXJzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50OyBpKyspIHtcclxuICAgICAgICBsZXQgY29udCA9IGNvbnRhaW5lcnNbaV07XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpO1xyXG4gICAgICAgIGxldCBpdGVyID0gb3B0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVyOyB4KyspIHtcclxuICAgICAgICAgICAgbGV0IG9wdCA9IG9wdGlvbnNbeF07XHJcbiAgICAgICAgICAgIG9wdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIG9uTU91dCk7XHJcbiAgICAgICAgICAgIG9wdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgb25NRW50ZXIpO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gb25NRW50ZXIoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0LnNlbGVjdGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN5bmNocm9uaXplVGhpc0Jja2dyV2l0aEltYWdlQmVsdEhvdmVyQmNrZ3Iob3B0LCBjb250LCB4LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uTU91dCgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvcHQuc2VsZWN0ZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3luY2hyb25pemVUaGlzQmNrZ3JXaXRoSW1hZ2VCZWx0SG92ZXJCY2tncihvcHQsIGNvbnQsIHgsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgb3B0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRucyhjb250LCBpdGVyKTtcclxuICAgICAgICAgICAgICAgIHN5bmNocm9uaXplVGhpc0Jja2dyV2l0aEltYWdlQmVsdEhvdmVyQmNrZ3Iob3B0LCBjb250LCB4LCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRucyhjb250LCBpdGVyKSB7XHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGl0ZXI7IHgrKykge1xyXG4gICAgICAgIGxldCBiZWx0ID0gY29udC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0JylbeF07XHJcbiAgICAgICAgYmVsdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImluaGVyaXRcIjtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3luY2hyb25pemVUaGlzQmNrZ3JXaXRoSW1hZ2VCZWx0SG92ZXJCY2tncihvcHQsIGNvbnQsIHgsIGlzRW50ZXIpIHtcclxuICAgIGxldCBiZWx0ID0gY29udC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0JylbeF07XHJcbiAgICBpZiAoaXNFbnRlciA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGxldCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG9wdCk7XHJcbiAgICAgICAgbGV0IGJjZ0NvbCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tncm91bmQtY29sb3InKTtcclxuICAgICAgICBiZWx0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJjZ0NvbDtcclxuICAgIH0gZWxzZSBpZiAoaXNFbnRlciA9PT0gZmFsc2UpIHtcclxuICAgICAgICBiZWx0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiaW5oZXJpdFwiO1xyXG4gICAgfVxyXG59IiwiJ3VzZSBzdHJpY3QnXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0aWFsaXplKVxyXG5mdW5jdGlvbiBpbml0aWFsaXplICgpIHtcclxuICBsZXQgb3B0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfc2VsZWN0LWxpc3Qgb3B0aW9uJ1xyXG4gIClcclxuICBsZXQgYW1vdW50ID0gb3B0cy5sZW5ndGhcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XHJcbiAgICBsZXQgaXRlbSA9IG9wdHNbaV1cclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNldElNRyhpKVxyXG4gICAgICBlbmFibGVTdHJpa2VOYW1lUGFydCgpXHJcbiAgICAgIHNldFN0cmlrZU5hbWVUb0RlcyhpKVxyXG4gICAgICBzZXRQYXJ0T2ZBdHRhY2tEZXNjcmlwdGlvbihpKVxyXG4gICAgICBzZXRGb3JjZURlcyhpKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxubGV0IG9ubHlPbmNlID0gMFxyXG5mdW5jdGlvbiBlbmFibGVTdHJpa2VOYW1lUGFydCAoKSB7XHJcbiAgb25seU9uY2UrK1xyXG4gIGlmIChvbmx5T25jZSA9PT0gMSkge1xyXG4gICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RyaWtlTmFtZScpXHJcbiAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3N0cmlrZU5hbWUnKVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBzZXRQYXJ0T2ZBdHRhY2tEZXNjcmlwdGlvbiAoaSkge1xyXG4gIGxldCBkZXNQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncCBzcGFuLi0tZGVzX2VwaXRldCcpXHJcbiAgZGVzUGFydC5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKVxyXG4gIGxldCBhcnJheSA9IFtcclxuICAgICdicnV0YWxuZScsXHJcbiAgICAnbmllcHJ6ZXdpZHl3YWxuZScsXHJcbiAgICAnd3nEh3dpY3pvbmUnLFxyXG4gICAgJ25pZXphd29kbmUnLFxyXG4gICAgJ3ByZWN5enlqbmUnLFxyXG4gICAgJ3ptYXNvd2FuZScsXHJcbiAgICAncG9kc3TEmXBuZScsXHJcbiAgICAnd3lyYWNob3dhbmUnLFxyXG4gICAgJ3pkcmFkemllY2tpZScsXHJcbiAgICAnc3phbGXFhGN6ZScsXHJcbiAgICAnb3ByYWNvd2FuZSB3IGxhYm9yYXRvcml1bSBhbGNoZW1pY3pueW0nLFxyXG4gICAgJ25pZXBvd3N0cnp5bWFuZScsXHJcbiAgICAnd8WCYWRjemUnLFxyXG4gICAgJ21yb2N6bmUnLFxyXG4gICAgJ3RhamVtbmUnLFxyXG4gICAgJ3fFm2NpZWvFgmUnLFxyXG4gICAgJ3dzcGllcmFuZSBtb2PEhSBvdGNoxYJhbmknLFxyXG4gICAgJ3ByemVzeWNvbmUgesWCxIUgbW9jxIUnXHJcbiAgXVxyXG4gIGRlc1BhcnQuaW5uZXJUZXh0ID0gJywgJyArIGFycmF5W2ldXHJcbn1cclxuZnVuY3Rpb24gc2V0SU1HIChpKSB7XHJcbiAgbGV0IGJlbHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnXHJcbiAgKVtpXVxyXG4gIGxldCBpbWFnID0gYmVsdC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVswXVxyXG4gIGxldCBhdHRyeWIgPSBpbWFnLmdldEF0dHJpYnV0ZSgnc3JjJylcclxuICBsZXQgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLXBsYXRlX2ltZ19pY29uJylcclxuICBpY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgYXR0cnliKVxyXG4gIGxldCBhbGxJTUdzID0gYmVsdC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKS5sZW5ndGhcclxuICBsZXQgc3RhbmRhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1zdGFuZGFydF9pbWdfYmNrZycpXHJcbiAgd2hpbGUgKHN0YW5kYXJ0LnF1ZXJ5U2VsZWN0b3IoJ0lNRycpICE9PSBudWxsKSB7XHJcbiAgICBsZXQgaW1hZ2VUb0RlbCA9IHN0YW5kYXJ0LnF1ZXJ5U2VsZWN0b3IoJ0lNRycpXHJcbiAgICBzdGFuZGFydC5yZW1vdmVDaGlsZChpbWFnZVRvRGVsKVxyXG4gIH1cclxuICBmb3IgKGxldCBqID0gMDsgaiA8IGFsbElNR3M7IGorKykge1xyXG4gICAgaWYgKGogPiAwKSB7XHJcbiAgICAgIGxldCB0aGVJTUcgPSBiZWx0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpW2pdXHJcbiAgICAgIGxldCBzb3VyY2VJTUcgPSB0aGVJTUcuZ2V0QXR0cmlidXRlKCdzcmMnKVxyXG4gICAgICBsZXQgbmV3SU1HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgbmV3SU1HLnNldEF0dHJpYnV0ZSgnc3JjJywgc291cmNlSU1HKVxyXG4gICAgICBzdGFuZGFydC5hcHBlbmRDaGlsZChuZXdJTUcpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIHNldFN0cmlrZU5hbWVUb0RlcyAoaSkge1xyXG4gIGxldCBpbnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibmF6d2F1ZGVyemVuaWFcIl0nKVxyXG4gIGlucC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgc3RyTmFtZSA9IGlucC52YWx1ZVxyXG4gICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfbmF6d2EtY2lvc3UnKVxyXG4gICAgaXRlbS5pbm5lclRleHQgPSBzdHJOYW1lICsgJyB0byBsZWdlbmRhcm5lJ1xyXG4gICAgc2hvd0FsbERlcygpXHJcbiAgfSlcclxuICBpbnAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgaXRtID0gaW5wLnZhbHVlXHJcbiAgICBpZiAoaXRtLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgbGV0IHN0ck5hbWUgPSBpbnAudmFsdWVcclxuICAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfbmF6d2EtY2lvc3UnKVxyXG4gICAgICBpdGVtLmlubmVyVGV4dCA9IHN0ck5hbWUgKyAnIHRvIGxlZ2VuZGFybmUnXHJcbiAgICAgIHNob3dBbGxEZXMoKVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuZnVuY3Rpb24gc2V0Rm9yY2VEZXMgKGkpIHtcclxuICBsZXQgYmVsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdCdcclxuICApW2ldXHJcbiAgbGV0IElNR3MgPSBiZWx0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpXHJcbiAgbGV0IGl0ZXIgPSBJTUdzLmxlbmd0aFxyXG4gIGxldCBzdHJuZyA9IFtdXHJcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBpdGVyOyBqKyspIHtcclxuICAgIGxldCBJTUcgPSBJTUdzW2pdXHJcbiAgICBsZXQgYXR0cnliID0gSU1HLmdldEF0dHJpYnV0ZSgnc3JjJylcclxuICAgIGlmIChqICE9PSAwKSB7XHJcbiAgICAgIGlmIChhdHRyeWIgPT09ICdpY29ucy9icm9uLWJhcmJhLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCdkb2RhdGtvd8SFIG1vY8SFIHVkZXJ6ZW5pb3fEhScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvYnJvbi1jemFyLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCdkb2RhdGtvd8SFIG1vY8SFIGN6YXJub2tzacSZc2vEhScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvYnJvbi1zdHJ6LnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCdkb2RhdGtvd3ltIGt1bnN6dGVtIHN0cnplbGVja2ltJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy9icm9uLXN6YWwuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ2RvZGF0a293eW0gc3phbGXFhHN0d2VtJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy9icm9uLXpkcmEuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ25pZXNwb2R6aWFueW0gemRyYWRsaXd5bSBjaW9zZW0nKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL3p5dy1vZ2llbi5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnxbx5d2lvxYJlbSBvZ25pYScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvenl3LXJvemtsYWQuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ8W8eXdpb8WCZW0gcm96a8WCYWR1JylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy96eXctd29kLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCfFvHl3aW/FgmVtIHdvZHknKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL3p5dy16bWlhbmEuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ8W8eXdpb8WCZW0gem1pYW55JylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy96eXctenl3aWEuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ8W8eXdpb8WCZW0gxbx5d2lpJylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCd3xYJhc27EhSBtxIVkcm/Fm2NpxIUgxbx5d2lvxYLDs3cgaSB0YWxlbnTDs3cnKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldE5hbWVUb0RlcygpXHJcbiAgbGV0IHN0cmluZ1RvU2V0ID0gc3Rybmcuam9pbignLCAnKVxyXG4gIGxldCBzcG5EZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfenl3aW9sJylcclxuICBzcG5EZXMuY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJylcclxuICBzcG5EZXMuaW5uZXJUZXh0ID0gc3RyaW5nVG9TZXQgKyAnLidcclxufVxyXG5mdW5jdGlvbiBzZXROYW1lVG9EZXMgKCkge1xyXG4gIGxldCBpbnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiaW1pZVwiXScpXHJcbiAgbGV0IG5hbSA9IGlucC52YWx1ZVxyXG4gIGxldCBpbnBCID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByenlkb21la1wiXScpXHJcbiAgbGV0IHN1cm5hbSA9IGlucEIudmFsdWVcclxuICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19pbWllJylcclxuICBpdGVtLmlubmVyVGV4dCA9IG5hbSArICcgJyArIHN1cm5hbSArICcgd3ptYWNuaWEgc3fDs2ogYXRhayAnXHJcbiAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKVxyXG59XHJcbmZ1bmN0aW9uIHNob3dBbGxEZXMgKCkge1xyXG4gIGxldCBhbGxEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXMnKVxyXG4gIGFsbERlcy5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKVxyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXQpO1xyXG5sZXQgYW1vdW50T2ZQb2ludHMgPSAyMDtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBsZXQgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkcy0yX2ZpZWxkc2V0LWRfY29udGFpbmVyX2F0cnliIC4tLWJlbHRfaWNvbi1jb250YWluZXInKTtcclxuICAgIGxldCBiZWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkcy0yX2ZpZWxkc2V0LWRfY29udGFpbmVyX2F0cnliIC4tLWJlbHRfYm9keS1jb250YWluZXJfYm9keScpO1xyXG4gICAgbGV0IGl0ZXIgPSBidG5zLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcjsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGkgPiA0KSB7XHJcbiAgICAgICAgICAgIGxldCBhdHRyeWIgPSBidG5zW2ldO1xyXG4gICAgICAgICAgICBsZXQgYmVsdCA9IGJlbHRzW2ldO1xyXG4gICAgICAgICAgICBhdHRyeWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYW1vdW50T2ZQb2ludHMgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkUG9pbnQoYmVsdClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb2ludChiZWx0KSB7XHJcbiAgICBsZXQgSU1HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnSU1HJyk7XHJcbiAgICBJTUcuc2V0QXR0cmlidXRlKCdzcmMnLCAnaWNvbnMvaWtvbmEtcG90ZWcuc3ZnJyk7XHJcbiAgICBiZWx0LmFwcGVuZENoaWxkKElNRyk7XHJcbiAgICBhbW91bnRPZlBvaW50cy0tO1xyXG4gICAgSU1HLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRlbGV0ZVRoaXNJTUcoSU1HKVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlVGhpc0lNRyh4KSB7XHJcbiAgICB4LnJlbW92ZSgpO1xyXG4gICAgYW1vdW50T2ZQb2ludHMrKztcclxufSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1c2VyRmxvd1ZpYUZpcnN0RmllbGRzZXQiLCJ1c2VyTmFtZSIsInF1ZXJ5U2VsZWN0b3IiLCJ1c2VyTmljayIsInVzZXJNb3R0byIsInVzZXJOYW1lQWNjZXB0IiwidXNlck5pY2tBY2NlcHQiLCJ1c2VyTW90dG9BY2NlcHQiLCJpdGVtIiwibmV4dEl0ZW0iLCJldmVudCIsImFsbEZpZWxkc0FyZVNldCIsImNoZWNrSWZGaWVsZHNBcmVTZXQiLCJlbmFibGVOZXh0UGFydE9mRm9ybXVsYSIsImtleUNvZGUiLCJmb2N1cyIsInZhbHVlQSIsInZhbHVlIiwidmFsdWVCIiwidmFsdWVDIiwidHJpbSIsInRvTG93ZXJDYXNlIiwidGhpc09ybmFtZW50IiwiYWxsT3JuYW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsImFkZCIsIm5leHRPcm5hbWVudCIsInJlbW92ZSIsInBhcnRPZkZvcm0iLCJjaG9vc2VZb3VyQXZhdGFyIiwiY29udGFpbmVycyIsImF2YXRhcnMiLCJhbW91bnQiLCJsZW5ndGgiLCJpIiwiY2hvb3NlVGhpc0F2YXRhciIsInNldE9uZVBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uIiwic3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRzIiwiZW5hYmxlQXR0YWNrcyIsImNoZWNrZWQiLCJhdiIsImRlc1BhcnQiLCJhcnJheSIsImlubmVyVGV4dCIsIm5leHREZXNQYXJ0IiwiYW5vdGhlck5leHREZXNQYXJ0Iiwib3RoZXJBbm90aGVyTmV4dERlc1BhcnQiLCJjb250Iiwib3B0aW9ucyIsIml0ZXIiLCJ4IiwiYmVsdCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZW5hYmxlZEF0dGFja3MiLCJkaXNhYmxlZEl0ZW0iLCJvcHRzIiwiaiIsInNlbGVjdGVkIiwiZW5hYmxlZEF0dGFjayIsImluaXRpYWxpemVBdHRhY2tzUGFydCIsIm9wdCIsIm9uTU91dCIsIm9uTUVudGVyIiwic3luY2hyb25pemVUaGlzQmNrZ3JXaXRoSW1hZ2VCZWx0SG92ZXJCY2tnciIsInN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0bnMiLCJpc0VudGVyIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImJjZ0NvbCIsImdldFByb3BlcnR5VmFsdWUiLCJpbml0aWFsaXplIiwic2V0SU1HIiwiZW5hYmxlU3RyaWtlTmFtZVBhcnQiLCJzZXRTdHJpa2VOYW1lVG9EZXMiLCJzZXRQYXJ0T2ZBdHRhY2tEZXNjcmlwdGlvbiIsInNldEZvcmNlRGVzIiwib25seU9uY2UiLCJpbWFnIiwiYXR0cnliIiwiZ2V0QXR0cmlidXRlIiwiaWNvbiIsImFsbElNR3MiLCJzdGFuZGFydCIsImltYWdlVG9EZWwiLCJyZW1vdmVDaGlsZCIsInRoZUlNRyIsInNvdXJjZUlNRyIsIm5ld0lNRyIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImlucCIsInN0ck5hbWUiLCJzaG93QWxsRGVzIiwiaXRtIiwiSU1HcyIsInN0cm5nIiwiSU1HIiwicHVzaCIsInNldE5hbWVUb0RlcyIsInN0cmluZ1RvU2V0Iiwiam9pbiIsInNwbkRlcyIsIm5hbSIsImlucEIiLCJzdXJuYW0iLCJhbGxEZXMiLCJpbml0IiwiYW1vdW50T2ZQb2ludHMiLCJidG5zIiwiYmVsdHMiLCJhZGRQb2ludCIsImRlbGV0ZVRoaXNJTUciXSwibWFwcGluZ3MiOiI7OztJQUNBQSxTQUFTQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTtJQUN4REM7SUFDRCxDQUZEO0lBR0EsU0FBU0Esd0JBQVQsR0FBcUM7SUFDbkMsTUFBSUMsV0FBV0gsU0FBU0ksYUFBVCxDQUF1QixvQkFBdkIsQ0FBZjtJQUNBLE1BQUlDLFdBQVdMLFNBQVNJLGFB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
