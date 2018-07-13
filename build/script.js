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
          chooseThisAvatar(item);
          setOnePartOfAttackDescription(i);
          synchronizeBackgroundsOfOtherOpts(containers);
          enableAttacks(i);
        });
      };

      for (var i = 0; i < amount; i++) {
        _loop(i);
      }
    }
    function chooseThisAvatar(item) {
      item.querySelector('input').checked = true;
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
          setStrikeNameToDes(i);
          setPartOfAttackDescription(i);
          setForceDes(i);
        });
      };

      for (var i = 0; i < amount; i++) {
        _loop(i);
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
        //setNameToDes();
        //setForceDes(i);
        showAllDes();
      });
      inp.addEventListener('click', function () {
        var itm = inp.value;
        if (itm.trim() !== '') {
          var strName = inp.value;
          var item = document.querySelector('.--des_nazwa-ciosu');
          item.innerText = strName + ' to legendarne';
          //setPartOfAttackDescription(i);
          //setNameToDes();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyIuLi9zb3VyY2UvZHluYW1pY3MvcG9kc3Rhd3kuanMiLCIuLi9zb3VyY2UvZHluYW1pY3Mva2xhc2EuanMiLCIuLi9zb3VyY2UvZHluYW1pY3MvYXRha2kuanMiLCIuLi9zb3VyY2UvZHluYW1pY3MvYXRha2ktc2V0LXR4dC5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9hdHRyeWJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gIHVzZXJGbG93VmlhRmlyc3RGaWVsZHNldCgpXHJcbn0pXHJcbmZ1bmN0aW9uIHVzZXJGbG93VmlhRmlyc3RGaWVsZHNldCAoKSB7XHJcbiAgbGV0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImltaWVcIl0nKTtcclxuICBsZXQgdXNlck5pY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJ6eWRvbWVrXCJdJyk7XHJcbiAgbGV0IHVzZXJNb3R0byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhW25hbWU9XCJ6YXdvbGFuaWVcIl0nKTtcclxuICB1c2VyTmFtZUFjY2VwdCh1c2VyTmFtZSwgdXNlck5pY2spXHJcbiAgdXNlck5pY2tBY2NlcHQodXNlck5pY2ssIHVzZXJNb3R0bylcclxuICB1c2VyTW90dG9BY2NlcHQodXNlck1vdHRvLCB1c2VyTmFtZSlcclxufVxyXG5mdW5jdGlvbiB1c2VyTmFtZUFjY2VwdCAoaXRlbSwgbmV4dEl0ZW0pIHtcclxuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBsZXQgYWxsRmllbGRzQXJlU2V0ID0gY2hlY2tJZkZpZWxkc0FyZVNldCgpO1xyXG4gICAgaWYgKGFsbEZpZWxkc0FyZVNldCA9PT0gdHJ1ZSkge1xyXG4gICAgICBlbmFibGVOZXh0UGFydE9mRm9ybXVsYSgpO1xyXG4gICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICBuZXh0SXRlbS5mb2N1cygpXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5mdW5jdGlvbiB1c2VyTmlja0FjY2VwdCAoaXRlbSwgbmV4dEl0ZW0pIHtcclxuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBsZXQgYWxsRmllbGRzQXJlU2V0ID0gY2hlY2tJZkZpZWxkc0FyZVNldCgpO1xyXG4gICAgaWYgKGFsbEZpZWxkc0FyZVNldCA9PT0gdHJ1ZSkge1xyXG4gICAgICBlbmFibGVOZXh0UGFydE9mRm9ybXVsYSgpO1xyXG4gICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICBuZXh0SXRlbS5mb2N1cygpXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5mdW5jdGlvbiB1c2VyTW90dG9BY2NlcHQgKGl0ZW0sIG5leHRJdGVtKSB7XHJcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgbGV0IGFsbEZpZWxkc0FyZVNldCA9IGNoZWNrSWZGaWVsZHNBcmVTZXQoKTtcclxuICAgIGlmIChhbGxGaWVsZHNBcmVTZXQgPT09IHRydWUpIHtcclxuICAgICAgZW5hYmxlTmV4dFBhcnRPZkZvcm11bGEoKTtcclxuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgbmV4dEl0ZW0uZm9jdXMoKVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuZnVuY3Rpb24gY2hlY2tJZkZpZWxkc0FyZVNldCgpIHtcclxuICAgIGxldCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJpbWllXCJdJyk7XHJcbiAgICBsZXQgdXNlck5pY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJ6eWRvbWVrXCJdJyk7XHJcbiAgICBsZXQgdXNlck1vdHRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWFbbmFtZT1cInphd29sYW5pZVwiXScpO1xyXG4gICAgbGV0IHZhbHVlQSA9IHVzZXJOYW1lLnZhbHVlO1xyXG4gICAgbGV0IHZhbHVlQiA9IHVzZXJOaWNrLnZhbHVlO1xyXG4gICAgbGV0IHZhbHVlQyA9IHVzZXJNb3R0by52YWx1ZTtcclxuICAgIGlmICh2YWx1ZUEudHJpbSgpIT09XCJcIiYmdmFsdWVBLnRyaW0oKS50b0xvd2VyQ2FzZSgpIT09XCJoZXJvc1wiKXtcclxuICAgICAgICBpZih2YWx1ZUIudHJpbSgpIT09XCJcIiYmdmFsdWVCLnRyaW0oKS50b0xvd2VyQ2FzZSgpIT09XCJ3b2plbm55IHBpZXNcIil7XHJcbiAgICAgICAgICBpZih2YWx1ZUMudHJpbSgpIT09XCJcIiYmdmFsdWVDLnRyaW0oKS50b0xvd2VyQ2FzZSgpIT09XCJ6YXdzemUgd2llcm55XCIpe1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH0gIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBlbmFibGVOZXh0UGFydE9mRm9ybXVsYSgpe1xyXG4gICAgbGV0IHRoaXNPcm5hbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZy5jb3JwdXNfc2VjdGlvbl9mb3JtX29ybmFtZW50LW1hcmtlcicpO1xyXG4gICAgbGV0IGFsbE9ybmFtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZy5jb3JwdXNfc2VjdGlvbl9mb3JtX29ybmFtZW50LW1hcmtlcicpO1xyXG4gICAgdGhpc09ybmFtZW50LnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaWNvbnMvcG9sZS5zdmcnKTtcclxuICAgIHRoaXNPcm5hbWVudC5jbGFzc0xpc3QuYWRkKCdpdElzUGFzc2VkVGhyb3VnaHQnKTtcclxuICAgIGxldCBuZXh0T3JuYW1lbnQgPSBhbGxPcm5hbWVudHNbMV07XHJcbiAgICBuZXh0T3JuYW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0hpZGRlbicpO1xyXG4gICAgbGV0IHBhcnRPZkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHMnKTtcclxuICAgIHBhcnRPZkZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0hpZGRlbicpO1xyXG59IiwiJ3VzZSBzdHJpY3QnXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjaG9vc2VZb3VyQXZhdGFyKVxyXG5mdW5jdGlvbiBjaG9vc2VZb3VyQXZhdGFyICgpIHtcclxuICBsZXQgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyJylcclxuICBsZXQgYXZhdGFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9yYWRpby1sYWItY29udGFpbmVyJylcclxuICBsZXQgYW1vdW50ID0gYXZhdGFycy5sZW5ndGhcclxuICBmb3IgKGxldCBpID0gMDtpIDwgYW1vdW50O2krKykge1xyXG4gICAgbGV0IGl0ZW0gPSBhdmF0YXJzW2ldXHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBjaG9vc2VUaGlzQXZhdGFyKGl0ZW0pXHJcbiAgICAgIHNldE9uZVBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uKGkpXHJcbiAgICAgIHN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0cyhjb250YWluZXJzKVxyXG4gICAgICBlbmFibGVBdHRhY2tzKGkpXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBjaG9vc2VUaGlzQXZhdGFyIChpdGVtKSB7XHJcbiAgaXRlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmNoZWNrZWQgPSB0cnVlXHJcbn1cclxuZnVuY3Rpb24gc2V0T25lUGFydE9mQXR0YWNrRGVzY3JpcHRpb24gKGkpIHtcclxuICBsZXQgZGVzUGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Agc3Bhbi4tLWRlc19rbGFzYScpXHJcbiAgbGV0IGFycmF5ID0gW1xyXG4gICAgJyB1ZGVyemVuaWUgYnJvbmnEhSBicnV0YWxuxIUuJyxcclxuICAgICcgdWRlcnplbmllIGJyb25pxIUgc3RyemVsZWNrxIUuJyxcclxuICAgICcgdWRlcnplbmllIGJyb25pxIUgemRyYWR6aWVja8SFLicsXHJcbiAgICAnIHVkZXJ6ZW5pZSBicm9uacSFIHN6YWxlxYRjesSFLicsXHJcbiAgICAnIHVkZXJ6ZW5pZSBicm9uacSFIHN6YXJsYXRhxYRza8SFLicsXHJcbiAgICAnIHVkZXJ6ZW5pZSBicm9uacSFIGx1YiBjenlta29sd2llaywgY28gd3BhZG5pZSBrYXLFgm93aSB3IMWCYXBza2EuJ1xyXG4gIF1cclxuICBkZXNQYXJ0LmlubmVyVGV4dCA9IGFycmF5W2ldXHJcbiAgbGV0IG5leHREZXNQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncCBzcGFuLi0tZGVzX2VwaXRldCcpXHJcbiAgbmV4dERlc1BhcnQuY2xhc3NMaXN0LmFkZCgnaXRzSGlkZGVuJylcclxuICBsZXQgYW5vdGhlck5leHREZXNQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3p5d2lvbCcpXHJcbiAgYW5vdGhlck5leHREZXNQYXJ0LmNsYXNzTGlzdC5hZGQoJ2l0c0hpZGRlbicpXHJcbiAgbGV0IG90aGVyQW5vdGhlck5leHREZXNQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX2ltaWUnKVxyXG4gIG90aGVyQW5vdGhlck5leHREZXNQYXJ0LmNsYXNzTGlzdC5hZGQoJ2l0c0hpZGRlbicpXHJcbn1cclxuZnVuY3Rpb24gc3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRzIChjb250YWluZXJzKSB7XHJcbiAgbGV0IGFtb3VudCA9IGNvbnRhaW5lcnMubGVuZ3RoXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xyXG4gICAgbGV0IGNvbnQgPSBjb250YWluZXJzW2ldXHJcbiAgICBsZXQgb3B0aW9ucyA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJylcclxuICAgIGxldCBpdGVyID0gb3B0aW9ucy5sZW5ndGhcclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlcjsgeCsrKSB7XHJcbiAgICAgIGxldCBiZWx0ID0gY29udC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0JylbeF1cclxuICAgICAgYmVsdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5oZXJpdCdcclxuICAgIH1cclxuICB9XHJcbn1cclxuZnVuY3Rpb24gZW5hYmxlQXR0YWNrcyAoaSkge1xyXG4gIGxldCBlbmFibGVkQXR0YWNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyJylcclxuICBmb3IgKGxldCB4ID0gMDsgeCA8IDY7IHgrKykge1xyXG4gICAgbGV0IGRpc2FibGVkSXRlbSA9IGVuYWJsZWRBdHRhY2tzW3hdXHJcbiAgICBkaXNhYmxlZEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnZW5hYmxlZCcpXHJcbiAgICBsZXQgb3B0cyA9IGRpc2FibGVkSXRlbS5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKVxyXG4gICAgbGV0IGFtb3VudCA9IG9wdHMubGVuZ3RoXHJcbiAgICBmb3IgKGxldCBqID0gMDtqIDwgYW1vdW50O2orKykge1xyXG4gICAgICBpZiAob3B0c1tqXS5zZWxlY3RlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIG9wdHNbal0uc2VsZWN0ZWQgPSBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCBlbmFibGVkQXR0YWNrID0gZW5hYmxlZEF0dGFja3NbaV1cclxuICBlbmFibGVkQXR0YWNrLmNsYXNzTGlzdC5hZGQoJ2VuYWJsZWQnKVxyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRpYWxpemVBdHRhY2tzUGFydCk7XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplQXR0YWNrc1BhcnQoKSB7XHJcbiAgICBsZXQgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyJyk7XHJcbiAgICBsZXQgYW1vdW50ID0gY29udGFpbmVycy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGNvbnQgPSBjb250YWluZXJzW2ldO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gY29udC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKTtcclxuICAgICAgICBsZXQgaXRlciA9IG9wdGlvbnMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlcjsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBvcHQgPSBvcHRpb25zW3hdO1xyXG4gICAgICAgICAgICBvcHQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBvbk1PdXQpO1xyXG4gICAgICAgICAgICBvcHQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIG9uTUVudGVyKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uTUVudGVyKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdC5zZWxlY3RlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBzeW5jaHJvbml6ZVRoaXNCY2tncldpdGhJbWFnZUJlbHRIb3ZlckJja2dyKG9wdCwgY29udCwgeCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBvbk1PdXQoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0LnNlbGVjdGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN5bmNocm9uaXplVGhpc0Jja2dyV2l0aEltYWdlQmVsdEhvdmVyQmNrZ3Iob3B0LCBjb250LCB4LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIG9wdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0bnMoY29udCwgaXRlcik7XHJcbiAgICAgICAgICAgICAgICBzeW5jaHJvbml6ZVRoaXNCY2tncldpdGhJbWFnZUJlbHRIb3ZlckJja2dyKG9wdCwgY29udCwgeCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0bnMoY29udCwgaXRlcikge1xyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVyOyB4KyspIHtcclxuICAgICAgICBsZXQgYmVsdCA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdCcpW3hdO1xyXG4gICAgICAgIGJlbHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJpbmhlcml0XCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN5bmNocm9uaXplVGhpc0Jja2dyV2l0aEltYWdlQmVsdEhvdmVyQmNrZ3Iob3B0LCBjb250LCB4LCBpc0VudGVyKSB7XHJcbiAgICBsZXQgYmVsdCA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdCcpW3hdO1xyXG4gICAgaWYgKGlzRW50ZXIgPT09IHRydWUpIHtcclxuICAgICAgICBsZXQgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShvcHQpO1xyXG4gICAgICAgIGxldCBiY2dDb2wgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XHJcbiAgICAgICAgYmVsdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBiY2dDb2w7XHJcbiAgICB9IGVsc2UgaWYgKGlzRW50ZXIgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgYmVsdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImluaGVyaXRcIjtcclxuICAgIH1cclxufSIsIid1c2Ugc3RyaWN0J1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdGlhbGl6ZSlcclxuZnVuY3Rpb24gaW5pdGlhbGl6ZSAoKSB7XHJcbiAgbGV0IG9wdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX3NlbGVjdC1saXN0IG9wdGlvbidcclxuICApXHJcbiAgbGV0IGFtb3VudCA9IG9wdHMubGVuZ3RoXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xyXG4gICAgbGV0IGl0ZW0gPSBvcHRzW2ldXHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBzZXRJTUcoaSk7XHJcbiAgICAgIHNldFN0cmlrZU5hbWVUb0RlcyhpKTtcclxuICAgICAgc2V0UGFydE9mQXR0YWNrRGVzY3JpcHRpb24oaSk7XHJcbiAgICAgIHNldEZvcmNlRGVzKGkpO1xyXG4gICAgfSlcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gc2V0UGFydE9mQXR0YWNrRGVzY3JpcHRpb24oaSkge1xyXG4gIGxldCBkZXNQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncCBzcGFuLi0tZGVzX2VwaXRldCcpO1xyXG4gIGRlc1BhcnQuY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJyk7XHJcbiAgbGV0IGFycmF5ID0gW1xyXG4gICAgJ2JydXRhbG5lJyxcclxuICAgICduaWVwcnpld2lkeXdhbG5lJyxcclxuICAgICd3ecSHd2ljem9uZScsXHJcbiAgICAnbmllemF3b2RuZScsXHJcbiAgICAncHJlY3l6eWpuZScsXHJcbiAgICAnem1hc293YW5lJyxcclxuICAgICdwb2RzdMSZcG5lJyxcclxuICAgICd3eXJhY2hvd2FuZScsXHJcbiAgICAnemRyYWR6aWVja2llJyxcclxuICAgICdzemFsZcWEY3plJyxcclxuICAgICdvcHJhY293YW5lIHcgbGFib3JhdG9yaXVtIGFsY2hlbWljem55bScsXHJcbiAgICAnbmllcG93c3RyenltYW5lJyxcclxuICAgICd3xYJhZGN6ZScsXHJcbiAgICAnbXJvY3puZScsXHJcbiAgICAndGFqZW1uZScsXHJcbiAgICAnd8WbY2lla8WCZScsXHJcbiAgICAnd3NwaWVyYW5lIG1vY8SFIG90Y2jFgmFuaScsXHJcbiAgICAncHJ6ZXN5Y29uZSB6xYLEhSBtb2PEhSdcclxuICBdXHJcbiAgZGVzUGFydC5pbm5lclRleHQgPScsICcrYXJyYXlbaV07XHJcbn1cclxuZnVuY3Rpb24gc2V0SU1HIChpKSB7XHJcbiAgbGV0IGJlbHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnXHJcbiAgKVtpXVxyXG4gIGxldCBpbWFnID0gYmVsdC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVswXVxyXG4gIGxldCBhdHRyeWIgPSBpbWFnLmdldEF0dHJpYnV0ZSgnc3JjJylcclxuICBsZXQgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLXBsYXRlX2ltZ19pY29uJylcclxuICBpY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgYXR0cnliKVxyXG4gIGxldCBhbGxJTUdzID0gYmVsdC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKS5sZW5ndGhcclxuICBsZXQgc3RhbmRhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1zdGFuZGFydF9pbWdfYmNrZycpXHJcbiAgd2hpbGUgKHN0YW5kYXJ0LnF1ZXJ5U2VsZWN0b3IoJ0lNRycpICE9PSBudWxsKSB7XHJcbiAgICBsZXQgaW1hZ2VUb0RlbCA9IHN0YW5kYXJ0LnF1ZXJ5U2VsZWN0b3IoJ0lNRycpXHJcbiAgICBzdGFuZGFydC5yZW1vdmVDaGlsZChpbWFnZVRvRGVsKVxyXG4gIH1cclxuICBmb3IgKGxldCBqID0gMDsgaiA8IGFsbElNR3M7IGorKykge1xyXG4gICAgaWYgKGogPiAwKSB7XHJcbiAgICAgIGxldCB0aGVJTUcgPSBiZWx0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpW2pdXHJcbiAgICAgIGxldCBzb3VyY2VJTUcgPSB0aGVJTUcuZ2V0QXR0cmlidXRlKCdzcmMnKVxyXG4gICAgICBsZXQgbmV3SU1HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgbmV3SU1HLnNldEF0dHJpYnV0ZSgnc3JjJywgc291cmNlSU1HKVxyXG4gICAgICBzdGFuZGFydC5hcHBlbmRDaGlsZChuZXdJTUcpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIHNldFN0cmlrZU5hbWVUb0RlcyAoaSkge1xyXG4gIGxldCBpbnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibmF6d2F1ZGVyemVuaWFcIl0nKVxyXG4gIGlucC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgc3RyTmFtZSA9IGlucC52YWx1ZVxyXG4gICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfbmF6d2EtY2lvc3UnKTtcclxuICAgIGl0ZW0uaW5uZXJUZXh0ID0gc3RyTmFtZSArICcgdG8gbGVnZW5kYXJuZSc7XHJcbiAgICAvL3NldE5hbWVUb0RlcygpO1xyXG4gICAgLy9zZXRGb3JjZURlcyhpKTtcclxuICAgIHNob3dBbGxEZXMoKTtcclxuICB9KVxyXG4gIGlucC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBpdG0gPSBpbnAudmFsdWVcclxuICAgIGlmIChpdG0udHJpbSgpICE9PSAnJykge1xyXG4gICAgICBsZXQgc3RyTmFtZSA9IGlucC52YWx1ZVxyXG4gICAgICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19uYXp3YS1jaW9zdScpXHJcbiAgICAgIGl0ZW0uaW5uZXJUZXh0ID0gc3RyTmFtZSArICcgdG8gbGVnZW5kYXJuZSc7XHJcbiAgICAgIC8vc2V0UGFydE9mQXR0YWNrRGVzY3JpcHRpb24oaSk7XHJcbiAgICAgIC8vc2V0TmFtZVRvRGVzKCk7XHJcbiAgICAgIHNob3dBbGxEZXMoKTtcclxuICAgIH1cclxuICB9KVxyXG59XHJcbmZ1bmN0aW9uIHNldEZvcmNlRGVzIChpKSB7XHJcbiAgbGV0IGJlbHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnXHJcbiAgKVtpXVxyXG4gIGxldCBJTUdzID0gYmVsdC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVxyXG4gIGxldCBpdGVyID0gSU1Hcy5sZW5ndGhcclxuICBsZXQgc3RybmcgPSBbXVxyXG4gIGZvciAobGV0IGogPSAwOyBqIDwgaXRlcjsgaisrKSB7XHJcbiAgICBsZXQgSU1HID0gSU1Hc1tqXVxyXG4gICAgbGV0IGF0dHJ5YiA9IElNRy5nZXRBdHRyaWJ1dGUoJ3NyYycpXHJcbiAgICBpZiAoaiAhPT0gMCkge1xyXG4gICAgICBpZiAoYXR0cnliID09PSAnaWNvbnMvYnJvbi1iYXJiYS5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnZG9kYXRrb3fEhSBtb2PEhSB1ZGVyemVuaW93xIUnKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL2Jyb24tY3phci5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnZG9kYXRrb3fEhSBtb2PEhSBjemFybm9rc2nEmXNrxIUnKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL2Jyb24tc3Ryei5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnZG9kYXRrb3d5bSBrdW5zenRlbSBzdHJ6ZWxlY2tpbScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvYnJvbi1zemFsLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCdkb2RhdGtvd3ltIHN6YWxlxYRzdHdlbScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvYnJvbi16ZHJhLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCduaWVzcG9kemlhbnltIHpkcmFkbGl3eW0gY2lvc2VtJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy96eXctb2dpZW4uc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ8W8eXdpb8WCZW0gb2duaWEnKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL3p5dy1yb3prbGFkLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCfFvHl3aW/FgmVtIHJvemvFgmFkdScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvenl3LXdvZC5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnxbx5d2lvxYJlbSB3b2R5JylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy96eXctem1pYW5hLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCfFvHl3aW/FgmVtIHptaWFueScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvenl3LXp5d2lhLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCfFvHl3aW/FgmVtIMW8eXdpaScpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnd8WCYXNuxIUgbcSFZHJvxZtjacSFIMW8eXdpb8WCw7N3IGkgdGFsZW50w7N3JylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBzZXROYW1lVG9EZXMoKTtcclxuICBsZXQgc3RyaW5nVG9TZXQgPSBzdHJuZy5qb2luKCcsICcpO1xyXG4gIGxldCBzcG5EZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfenl3aW9sJyk7XHJcbiAgc3BuRGVzLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpO1xyXG4gIHNwbkRlcy5pbm5lclRleHQgPSBzdHJpbmdUb1NldCArICcuJ1xyXG59XHJcbmZ1bmN0aW9uIHNldE5hbWVUb0RlcyAoKSB7XHJcbiAgbGV0IGlucCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJpbWllXCJdJyk7XHJcbiAgbGV0IG5hbSA9IGlucC52YWx1ZTtcclxuICBsZXQgaW5wQiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcnp5ZG9tZWtcIl0nKTtcclxuICBsZXQgc3VybmFtID0gaW5wQi52YWx1ZTtcclxuICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19pbWllJyk7XHJcbiAgaXRlbS5pbm5lclRleHQgPSBuYW0gKyAnICcgKyBzdXJuYW0gKyAnIHd6bWFjbmlhIHN3w7NqIGF0YWsgJztcclxuICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpO1xyXG59XHJcbmZ1bmN0aW9uIHNob3dBbGxEZXMgKCkge1xyXG4gIGxldCBhbGxEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXMnKVxyXG4gIGFsbERlcy5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKVxyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXQpO1xyXG5sZXQgYW1vdW50T2ZQb2ludHMgPSAyMDtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBsZXQgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkcy0yX2ZpZWxkc2V0LWRfY29udGFpbmVyX2F0cnliIC4tLWJlbHRfaWNvbi1jb250YWluZXInKTtcclxuICAgIGxldCBiZWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkcy0yX2ZpZWxkc2V0LWRfY29udGFpbmVyX2F0cnliIC4tLWJlbHRfYm9keS1jb250YWluZXJfYm9keScpO1xyXG4gICAgbGV0IGl0ZXIgPSBidG5zLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcjsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGkgPiA0KSB7XHJcbiAgICAgICAgICAgIGxldCBhdHRyeWIgPSBidG5zW2ldO1xyXG4gICAgICAgICAgICBsZXQgYmVsdCA9IGJlbHRzW2ldO1xyXG4gICAgICAgICAgICBhdHRyeWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYW1vdW50T2ZQb2ludHMgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkUG9pbnQoYmVsdClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb2ludChiZWx0KSB7XHJcbiAgICBsZXQgSU1HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnSU1HJyk7XHJcbiAgICBJTUcuc2V0QXR0cmlidXRlKCdzcmMnLCAnaWNvbnMvaWtvbmEtcG90ZWcuc3ZnJyk7XHJcbiAgICBiZWx0LmFwcGVuZENoaWxkKElNRyk7XHJcbiAgICBhbW91bnRPZlBvaW50cy0tO1xyXG4gICAgSU1HLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRlbGV0ZVRoaXNJTUcoSU1HKVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlVGhpc0lNRyh4KSB7XHJcbiAgICB4LnJlbW92ZSgpO1xyXG4gICAgYW1vdW50T2ZQb2ludHMrKztcclxufSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1c2VyRmxvd1ZpYUZpcnN0RmllbGRzZXQiLCJ1c2VyTmFtZSIsInF1ZXJ5U2VsZWN0b3IiLCJ1c2VyTmljayIsInVzZXJNb3R0byIsInVzZXJOYW1lQWNjZXB0IiwidXNlck5pY2tBY2NlcHQiLCJ1c2VyTW90dG9BY2NlcHQiLCJpdGVtIiwibmV4dEl0ZW0iLCJldmVudCIsImFsbEZpZWxkc0FyZVNldCIsImNoZWNrSWZGaWVsZHNBcmVTZXQiLCJlbmFibGVOZXh0UGFydE9mRm9ybXVsYSIsImtleUNvZGUiLCJmb2N1cyIsInZhbHVlQSIsInZhbHVlIiwidmFsdWVCIiwidmFsdWVDIiwidHJpbSIsInRvTG93ZXJDYXNlIiwidGhpc09ybmFtZW50IiwiYWxsT3JuYW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsImFkZCIsIm5leHRPcm5hbWVudCIsInJlbW92ZSIsInBhcnRPZkZvcm0iLCJjaG9vc2VZb3VyQXZhdGFyIiwiY29udGFpbmVycyIsImF2YXRhcnMiLCJhbW91bnQiLCJsZW5ndGgiLCJpIiwiY2hvb3NlVGhpc0F2YXRhciIsInNldE9uZVBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uIiwic3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRzIiwiZW5hYmxlQXR0YWNrcyIsImNoZWNrZWQiLCJkZXNQYXJ0IiwiYXJyYXkiLCJpbm5lclRleHQiLCJuZXh0RGVzUGFydCIsImFub3RoZXJOZXh0RGVzUGFydCIsIm90aGVyQW5vdGhlck5leHREZXNQYXJ0IiwiY29udCIsIm9wdGlvbnMiLCJpdGVyIiwieCIsImJlbHQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImVuYWJsZWRBdHRhY2tzIiwiZGlzYWJsZWRJdGVtIiwib3B0cyIsImoiLCJzZWxlY3RlZCIsImVuYWJsZWRBdHRhY2siLCJpbml0aWFsaXplQXR0YWNrc1BhcnQiLCJvcHQiLCJvbk1PdXQiLCJvbk1FbnRlciIsInN5bmNocm9uaXplVGhpc0Jja2dyV2l0aEltYWdlQmVsdEhvdmVyQmNrZ3IiLCJzeW5jaHJvbml6ZUJhY2tncm91bmRzT2ZPdGhlck9wdG5zIiwiaXNFbnRlciIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJiY2dDb2wiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiaW5pdGlhbGl6ZSIsInNldElNRyIsInNldFN0cmlrZU5hbWVUb0RlcyIsInNldFBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uIiwic2V0Rm9yY2VEZXMiLCJpbWFnIiwiYXR0cnliIiwiZ2V0QXR0cmlidXRlIiwiaWNvbiIsImFsbElNR3MiLCJzdGFuZGFydCIsImltYWdlVG9EZWwiLCJyZW1vdmVDaGlsZCIsInRoZUlNRyIsInNvdXJjZUlNRyIsIm5ld0lNRyIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImlucCIsInN0ck5hbWUiLCJzaG93QWxsRGVzIiwiaXRtIiwiSU1HcyIsInN0cm5nIiwiSU1HIiwicHVzaCIsInNldE5hbWVUb0RlcyIsInN0cmluZ1RvU2V0Iiwiam9pbiIsInNwbkRlcyIsIm5hbSIsImlucEIiLCJzdXJuYW0iLCJhbGxEZXMiLCJpbml0IiwiYW1vdW50T2ZQb2ludHMiLCJidG5zIiwiYmVsdHMiLCJhZGRQb2ludCIsImRlbGV0ZVRoaXNJTUciXSwibWFwcGluZ3MiOiI7OztJQUNBQSxTQUFTQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTtJQUN4REM7SUFDRCxDQUZEO0lBR0EsU0FBU0Esd0JBQVQsR0FBcUM7SUFDbkMsTUFBSUMsV0FBV0gsU0FBU0ksYUFBVCxDQUF1QixvQkFBdkIsQ0FBZjtJQUNBLE1BQUlDLFdBQVdMLFNBQVNJLGFBQVQsQ0FBdUIseUJBQXZCLENBQWY7SUFDQSxNQUFJRSxZQUFZTixTQUFTSSxhQUFULENBQXVCLDRCQUF2QixDQUFoQjtJQUNBRyxpQkFBZUosUUFBZixFQUF5QkUsUUFBekI7SUFDQUcsaUJBQWVILFFBQWYsRUFBeUJDLFNBQXpCO0lBQ0FHLGtCQUFnQkgsU0FBaEIsRUFBMkJILFFBQTNCO0lBQ0Q7SUFDRCxTQUFTSSxjQUFULENBQXlCRyxJQUF6QixFQUErQkMsUUFBL0IsRUFBeUM7SUFDdkNELE9BQUtULGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFVBQVVXLEtBQVYsRUFBaUI7SUFDOUMsUUFBSUMsa0JBQWtCQyxxQkFBdEI7SUFDQSxRQUFJRCxvQkFBb0IsSUFBeEIsRUFBOEI7SUFDNUJF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
