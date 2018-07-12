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
        var array = ['brutalną.', 'strzelecką.', 'zdradziecką.', 'szaleńczą.', 'szarlatańską.', 'lub czymkolwiek, co wpadnie karłowi w łapska.'];
        desPart.innerText = array[i];
    }
    function synchronizeBackgroundsOfOtherOpts(containers) {
        var amount = containers.length;
        for (var i = 0; i < amount; i++) {
            var cont = containers[i];
            var options = cont.querySelectorAll('option');
            var iter = options.length;
            for (var x = 0; x < iter; x++) {
                var belt = cont.querySelectorAll('.corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt')[x];
                belt.style.backgroundColor = "inherit";
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
                }        }
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
        });
      };

      for (var i = 0; i < amount; i++) {
        _loop(i);
      }
    }
    function setPartOfAttackDescription(i) {
      var desPart = document.querySelector('p span.--des_epitet');
      var array = ['brutalne', 'nieprzewidywalne', 'wyćwiczone', 'niezawodne', 'precyzyjne', 'zmasowane', 'podstępne', 'wyrachowane', 'zdradzieckie', 'szaleńcze', 'opracowane w laboratorium alchemicznym', 'niepowstrzymane', 'władcze', 'mroczne', 'tajemne', 'wściekłe', 'wspierane mocą otchłani', 'przesycone złą mocą'];
      desPart.innerText = array[i];
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
    function setNameToDes() {
      var inp = document.querySelector('input[name="imie"]');
      var nam = inp.value;
      var inpB = document.querySelector('input[name="przydomek"]');
      var surnam = inpB.value;
      var item = document.querySelector('.--des_imie');
      item.innerText = nam + ' ' + surnam;
    }
    function setStrikeNameToDes(i) {
      var inp = document.querySelector('input[name="nazwauderzenia"]');
      inp.addEventListener('change', function () {
        var strName = inp.value;
        var item = document.querySelector('.--des_nazwa-ciosu');
        item.innerText = strName;
        setPartOfAttackDescription(i);
        setNameToDes();
        setForceDes(i);
        showAllDes();
      });
      inp.addEventListener('click', function () {
        var itm = inp.value;
        if (itm.trim() !== '') {
          var strName = inp.value;
          var item = document.querySelector('.--des_nazwa-ciosu');
          item.innerText = strName;
          setPartOfAttackDescription(i);
          setNameToDes();
          setForceDes(i);
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
      var spnDes = document.querySelector('.--des_zywiol');
      spnDes.innerText = stringToSet + '.';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyIuLi9zb3VyY2UvZHluYW1pY3MvcG9kc3Rhd3kuanMiLCIuLi9zb3VyY2UvZHluYW1pY3Mva2xhc2EuanMiLCIuLi9zb3VyY2UvZHluYW1pY3MvYXRha2kuanMiLCIuLi9zb3VyY2UvZHluYW1pY3MvYXRha2ktc2V0LXR4dC5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9hdHRyeWJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gIHVzZXJGbG93VmlhRmlyc3RGaWVsZHNldCgpXHJcbn0pXHJcbmZ1bmN0aW9uIHVzZXJGbG93VmlhRmlyc3RGaWVsZHNldCAoKSB7XHJcbiAgbGV0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImltaWVcIl0nKTtcclxuICBsZXQgdXNlck5pY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJ6eWRvbWVrXCJdJyk7XHJcbiAgbGV0IHVzZXJNb3R0byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhW25hbWU9XCJ6YXdvbGFuaWVcIl0nKTtcclxuICB1c2VyTmFtZUFjY2VwdCh1c2VyTmFtZSwgdXNlck5pY2spXHJcbiAgdXNlck5pY2tBY2NlcHQodXNlck5pY2ssIHVzZXJNb3R0bylcclxuICB1c2VyTW90dG9BY2NlcHQodXNlck1vdHRvLCB1c2VyTmFtZSlcclxufVxyXG5mdW5jdGlvbiB1c2VyTmFtZUFjY2VwdCAoaXRlbSwgbmV4dEl0ZW0pIHtcclxuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBsZXQgYWxsRmllbGRzQXJlU2V0ID0gY2hlY2tJZkZpZWxkc0FyZVNldCgpO1xyXG4gICAgaWYgKGFsbEZpZWxkc0FyZVNldCA9PT0gdHJ1ZSkge1xyXG4gICAgICBlbmFibGVOZXh0UGFydE9mRm9ybXVsYSgpO1xyXG4gICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICBuZXh0SXRlbS5mb2N1cygpXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5mdW5jdGlvbiB1c2VyTmlja0FjY2VwdCAoaXRlbSwgbmV4dEl0ZW0pIHtcclxuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBsZXQgYWxsRmllbGRzQXJlU2V0ID0gY2hlY2tJZkZpZWxkc0FyZVNldCgpO1xyXG4gICAgaWYgKGFsbEZpZWxkc0FyZVNldCA9PT0gdHJ1ZSkge1xyXG4gICAgICBlbmFibGVOZXh0UGFydE9mRm9ybXVsYSgpO1xyXG4gICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICBuZXh0SXRlbS5mb2N1cygpXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5mdW5jdGlvbiB1c2VyTW90dG9BY2NlcHQgKGl0ZW0sIG5leHRJdGVtKSB7XHJcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgbGV0IGFsbEZpZWxkc0FyZVNldCA9IGNoZWNrSWZGaWVsZHNBcmVTZXQoKTtcclxuICAgIGlmIChhbGxGaWVsZHNBcmVTZXQgPT09IHRydWUpIHtcclxuICAgICAgZW5hYmxlTmV4dFBhcnRPZkZvcm11bGEoKTtcclxuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgbmV4dEl0ZW0uZm9jdXMoKVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuZnVuY3Rpb24gY2hlY2tJZkZpZWxkc0FyZVNldCgpIHtcclxuICAgIGxldCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJpbWllXCJdJyk7XHJcbiAgICBsZXQgdXNlck5pY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJ6eWRvbWVrXCJdJyk7XHJcbiAgICBsZXQgdXNlck1vdHRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWFbbmFtZT1cInphd29sYW5pZVwiXScpO1xyXG4gICAgbGV0IHZhbHVlQSA9IHVzZXJOYW1lLnZhbHVlO1xyXG4gICAgbGV0IHZhbHVlQiA9IHVzZXJOaWNrLnZhbHVlO1xyXG4gICAgbGV0IHZhbHVlQyA9IHVzZXJNb3R0by52YWx1ZTtcclxuICAgIGlmICh2YWx1ZUEudHJpbSgpIT09XCJcIiYmdmFsdWVBLnRyaW0oKS50b0xvd2VyQ2FzZSgpIT09XCJoZXJvc1wiKXtcclxuICAgICAgICBpZih2YWx1ZUIudHJpbSgpIT09XCJcIiYmdmFsdWVCLnRyaW0oKS50b0xvd2VyQ2FzZSgpIT09XCJ3b2plbm55IHBpZXNcIil7XHJcbiAgICAgICAgICBpZih2YWx1ZUMudHJpbSgpIT09XCJcIiYmdmFsdWVDLnRyaW0oKS50b0xvd2VyQ2FzZSgpIT09XCJ6YXdzemUgd2llcm55XCIpe1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH0gIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBlbmFibGVOZXh0UGFydE9mRm9ybXVsYSgpe1xyXG4gICAgbGV0IHRoaXNPcm5hbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZy5jb3JwdXNfc2VjdGlvbl9mb3JtX29ybmFtZW50LW1hcmtlcicpO1xyXG4gICAgbGV0IGFsbE9ybmFtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZy5jb3JwdXNfc2VjdGlvbl9mb3JtX29ybmFtZW50LW1hcmtlcicpO1xyXG4gICAgdGhpc09ybmFtZW50LnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaWNvbnMvcG9sZS5zdmcnKTtcclxuICAgIHRoaXNPcm5hbWVudC5jbGFzc0xpc3QuYWRkKCdpdElzUGFzc2VkVGhyb3VnaHQnKTtcclxuICAgIGxldCBuZXh0T3JuYW1lbnQgPSBhbGxPcm5hbWVudHNbMV07XHJcbiAgICBuZXh0T3JuYW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0hpZGRlbicpO1xyXG4gICAgbGV0IHBhcnRPZkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHMnKTtcclxuICAgIHBhcnRPZkZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0hpZGRlbicpO1xyXG59IiwiXHJcbid1c2Ugc3RyaWN0JztcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGNob29zZVlvdXJBdmF0YXIpO1xyXG5mdW5jdGlvbiBjaG9vc2VZb3VyQXZhdGFyKCl7XHJcbiAgICBsZXQgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyJyk7XHJcbiAgICBsZXQgYXZhdGFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9yYWRpby1sYWItY29udGFpbmVyJyk7XHJcbiAgICBsZXQgYW1vdW50ID0gYXZhdGFycy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpPTA7aTxhbW91bnQ7aSsrKXtcclxuICAgICAgICBsZXQgaXRlbSA9IGF2YXRhcnNbaV07XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY2hvb3NlVGhpc0F2YXRhcihpdGVtKTtcclxuICAgICAgICAgICAgc2V0T25lUGFydE9mQXR0YWNrRGVzY3JpcHRpb24oaSk7XHJcbiAgICAgICAgICAgIHN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0cyhjb250YWluZXJzKTtcclxuICAgICAgICAgICAgZW5hYmxlQXR0YWNrcyhpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjaG9vc2VUaGlzQXZhdGFyKGl0ZW0pIHtcclxuICAgIGl0ZW0ucXVlcnlTZWxlY3RvcignaW5wdXQnKS5jaGVja2VkPXRydWU7XHJcbn1cclxuZnVuY3Rpb24gc2V0T25lUGFydE9mQXR0YWNrRGVzY3JpcHRpb24oaSl7XHJcbiAgICBsZXQgZGVzUGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Agc3Bhbi4tLWRlc19rbGFzYScpO1xyXG4gICAgbGV0IGFycmF5ID0gW1xyXG4gICAgICAgICdicnV0YWxuxIUuJyxcclxuICAgICAgICAnc3RyemVsZWNrxIUuJyxcclxuICAgICAgICAnemRyYWR6aWVja8SFLicsXHJcbiAgICAgICAgJ3N6YWxlxYRjesSFLicsXHJcbiAgICAgICAgJ3N6YXJsYXRhxYRza8SFLicsXHJcbiAgICAgICAgJ2x1YiBjenlta29sd2llaywgY28gd3BhZG5pZSBrYXLFgm93aSB3IMWCYXBza2EuJ1xyXG4gICAgXVxyXG4gICAgZGVzUGFydC5pbm5lclRleHQ9YXJyYXlbaV07XHJcbn1cclxuZnVuY3Rpb24gc3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRzKGNvbnRhaW5lcnMpe1xyXG4gICAgbGV0IGFtb3VudCA9IGNvbnRhaW5lcnMubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xyXG4gICAgICAgIGxldCBjb250ID0gY29udGFpbmVyc1tpXTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyk7XHJcbiAgICAgICAgbGV0IGl0ZXIgPSBvcHRpb25zLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGl0ZXI7IHgrKykge1xyXG4gICAgICAgICAgICBsZXQgYmVsdCA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdCcpW3hdO1xyXG4gICAgICAgICAgICBiZWx0LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cImluaGVyaXRcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZW5hYmxlQXR0YWNrcyhpKSB7XHJcbiAgICBsZXQgZW5hYmxlZEF0dGFja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcicpO1xyXG4gICAgZm9yIChsZXQgeD0wOyB4PDY7IHgrKyl7XHJcbiAgICAgICAgbGV0IGRpc2FibGVkSXRlbSA9IGVuYWJsZWRBdHRhY2tzW3hdO1xyXG4gICAgICAgIGRpc2FibGVkSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdlbmFibGVkJyk7XHJcbiAgICAgICAgbGV0IG9wdHMgPSBkaXNhYmxlZEl0ZW0ucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyk7XHJcbiAgICAgICAgbGV0IGFtb3VudCA9IG9wdHMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGo9MDtqPGFtb3VudDtqKyspe1xyXG4gICAgICAgICAgICBpZiAob3B0c1tqXS5zZWxlY3RlZD09PXRydWUpe1xyXG4gICAgICAgICAgICAgICAgb3B0c1tqXS5zZWxlY3RlZD1mYWxzZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgZW5hYmxlZEF0dGFjayA9IGVuYWJsZWRBdHRhY2tzW2ldO1xyXG4gICAgZW5hYmxlZEF0dGFjay5jbGFzc0xpc3QuYWRkKCdlbmFibGVkJyk7XHJcbn0iLCIndXNlIHN0cmljdCc7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0aWFsaXplQXR0YWNrc1BhcnQpO1xyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZUF0dGFja3NQYXJ0KCkge1xyXG4gICAgbGV0IGNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcicpO1xyXG4gICAgbGV0IGFtb3VudCA9IGNvbnRhaW5lcnMubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xyXG4gICAgICAgIGxldCBjb250ID0gY29udGFpbmVyc1tpXTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyk7XHJcbiAgICAgICAgbGV0IGl0ZXIgPSBvcHRpb25zLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGl0ZXI7IHgrKykge1xyXG4gICAgICAgICAgICBsZXQgb3B0ID0gb3B0aW9uc1t4XTtcclxuICAgICAgICAgICAgb3B0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0Jywgb25NT3V0KTtcclxuICAgICAgICAgICAgb3B0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBvbk1FbnRlcik7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBvbk1FbnRlcigpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvcHQuc2VsZWN0ZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3luY2hyb25pemVUaGlzQmNrZ3JXaXRoSW1hZ2VCZWx0SG92ZXJCY2tncihvcHQsIGNvbnQsIHgsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gb25NT3V0KCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdC5zZWxlY3RlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBzeW5jaHJvbml6ZVRoaXNCY2tncldpdGhJbWFnZUJlbHRIb3ZlckJja2dyKG9wdCwgY29udCwgeCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBvcHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzeW5jaHJvbml6ZUJhY2tncm91bmRzT2ZPdGhlck9wdG5zKGNvbnQsIGl0ZXIpO1xyXG4gICAgICAgICAgICAgICAgc3luY2hyb25pemVUaGlzQmNrZ3JXaXRoSW1hZ2VCZWx0SG92ZXJCY2tncihvcHQsIGNvbnQsIHgsIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzeW5jaHJvbml6ZUJhY2tncm91bmRzT2ZPdGhlck9wdG5zKGNvbnQsIGl0ZXIpIHtcclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlcjsgeCsrKSB7XHJcbiAgICAgICAgbGV0IGJlbHQgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnKVt4XTtcclxuICAgICAgICBiZWx0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiaW5oZXJpdFwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzeW5jaHJvbml6ZVRoaXNCY2tncldpdGhJbWFnZUJlbHRIb3ZlckJja2dyKG9wdCwgY29udCwgeCwgaXNFbnRlcikge1xyXG4gICAgbGV0IGJlbHQgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnKVt4XTtcclxuICAgIGlmIChpc0VudGVyID09PSB0cnVlKSB7XHJcbiAgICAgICAgbGV0IHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUob3B0KTtcclxuICAgICAgICBsZXQgYmNnQ29sID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1jb2xvcicpO1xyXG4gICAgICAgIGJlbHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmNnQ29sO1xyXG4gICAgfSBlbHNlIGlmIChpc0VudGVyID09PSBmYWxzZSkge1xyXG4gICAgICAgIGJlbHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJpbmhlcml0XCI7XHJcbiAgICB9XHJcbn0iLCIndXNlIHN0cmljdCdcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRpYWxpemUpXHJcbmZ1bmN0aW9uIGluaXRpYWxpemUgKCkge1xyXG4gIGxldCBvcHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9zZWxlY3QtbGlzdCBvcHRpb24nXHJcbiAgKVxyXG4gIGxldCBhbW91bnQgPSBvcHRzLmxlbmd0aFxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50OyBpKyspIHtcclxuICAgIGxldCBpdGVtID0gb3B0c1tpXVxyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgc2V0SU1HKGkpXHJcbiAgICAgIHNldFN0cmlrZU5hbWVUb0RlcyhpKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gc2V0UGFydE9mQXR0YWNrRGVzY3JpcHRpb24gKGkpIHtcclxuICBsZXQgZGVzUGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Agc3Bhbi4tLWRlc19lcGl0ZXQnKVxyXG4gIGxldCBhcnJheSA9IFtcclxuICAgICdicnV0YWxuZScsXHJcbiAgICAnbmllcHJ6ZXdpZHl3YWxuZScsXHJcbiAgICAnd3nEh3dpY3pvbmUnLFxyXG4gICAgJ25pZXphd29kbmUnLFxyXG4gICAgJ3ByZWN5enlqbmUnLFxyXG4gICAgJ3ptYXNvd2FuZScsXHJcbiAgICAncG9kc3TEmXBuZScsXHJcbiAgICAnd3lyYWNob3dhbmUnLFxyXG4gICAgJ3pkcmFkemllY2tpZScsXHJcbiAgICAnc3phbGXFhGN6ZScsXHJcbiAgICAnb3ByYWNvd2FuZSB3IGxhYm9yYXRvcml1bSBhbGNoZW1pY3pueW0nLFxyXG4gICAgJ25pZXBvd3N0cnp5bWFuZScsXHJcbiAgICAnd8WCYWRjemUnLFxyXG4gICAgJ21yb2N6bmUnLFxyXG4gICAgJ3RhamVtbmUnLFxyXG4gICAgJ3fFm2NpZWvFgmUnLFxyXG4gICAgJ3dzcGllcmFuZSBtb2PEhSBvdGNoxYJhbmknLFxyXG4gICAgJ3ByemVzeWNvbmUgesWCxIUgbW9jxIUnXHJcbiAgXVxyXG4gIGRlc1BhcnQuaW5uZXJUZXh0ID0gYXJyYXlbaV1cclxufVxyXG5mdW5jdGlvbiBzZXRJTUcgKGkpIHtcclxuICBsZXQgYmVsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdCdcclxuICApW2ldXHJcbiAgbGV0IGltYWcgPSBiZWx0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpWzBdXHJcbiAgbGV0IGF0dHJ5YiA9IGltYWcuZ2V0QXR0cmlidXRlKCdzcmMnKVxyXG4gIGxldCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tcGxhdGVfaW1nX2ljb24nKVxyXG4gIGljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBhdHRyeWIpXHJcbiAgbGV0IGFsbElNR3MgPSBiZWx0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpLmxlbmd0aFxyXG4gIGxldCBzdGFuZGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLXN0YW5kYXJ0X2ltZ19iY2tnJylcclxuICB3aGlsZSAoc3RhbmRhcnQucXVlcnlTZWxlY3RvcignSU1HJykgIT09IG51bGwpIHtcclxuICAgIGxldCBpbWFnZVRvRGVsID0gc3RhbmRhcnQucXVlcnlTZWxlY3RvcignSU1HJylcclxuICAgIHN0YW5kYXJ0LnJlbW92ZUNoaWxkKGltYWdlVG9EZWwpXHJcbiAgfVxyXG4gIGZvciAobGV0IGogPSAwOyBqIDwgYWxsSU1HczsgaisrKSB7XHJcbiAgICBpZiAoaiA+IDApIHtcclxuICAgICAgbGV0IHRoZUlNRyA9IGJlbHQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylbal1cclxuICAgICAgbGV0IHNvdXJjZUlNRyA9IHRoZUlNRy5nZXRBdHRyaWJ1dGUoJ3NyYycpXHJcbiAgICAgIGxldCBuZXdJTUcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICBuZXdJTUcuc2V0QXR0cmlidXRlKCdzcmMnLCBzb3VyY2VJTUcpXHJcbiAgICAgIHN0YW5kYXJ0LmFwcGVuZENoaWxkKG5ld0lNRylcclxuICAgIH1cclxuICB9XHJcbn1cclxuZnVuY3Rpb24gc2V0TmFtZVRvRGVzICgpIHtcclxuICBsZXQgaW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImltaWVcIl0nKVxyXG4gIGxldCBuYW0gPSBpbnAudmFsdWVcclxuICBsZXQgaW5wQiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcnp5ZG9tZWtcIl0nKVxyXG4gIGxldCBzdXJuYW0gPSBpbnBCLnZhbHVlXHJcbiAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfaW1pZScpXHJcbiAgaXRlbS5pbm5lclRleHQgPSBuYW0gKyAnICcgKyBzdXJuYW1cclxufVxyXG5mdW5jdGlvbiBzZXRTdHJpa2VOYW1lVG9EZXMgKGkpIHtcclxuICBsZXQgaW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm5hendhdWRlcnplbmlhXCJdJylcclxuICBpbnAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHN0ck5hbWUgPSBpbnAudmFsdWVcclxuICAgIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX25hendhLWNpb3N1JylcclxuICAgIGl0ZW0uaW5uZXJUZXh0ID0gc3RyTmFtZVxyXG4gICAgc2V0UGFydE9mQXR0YWNrRGVzY3JpcHRpb24oaSlcclxuICAgIHNldE5hbWVUb0RlcygpXHJcbiAgICBzZXRGb3JjZURlcyhpKVxyXG4gICAgc2hvd0FsbERlcygpXHJcbiAgfSlcclxuICBpbnAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgaXRtID0gaW5wLnZhbHVlXHJcbiAgICBpZiAoaXRtLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgbGV0IHN0ck5hbWUgPSBpbnAudmFsdWVcclxuICAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfbmF6d2EtY2lvc3UnKVxyXG4gICAgICBpdGVtLmlubmVyVGV4dCA9IHN0ck5hbWVcclxuICAgICAgc2V0UGFydE9mQXR0YWNrRGVzY3JpcHRpb24oaSlcclxuICAgICAgc2V0TmFtZVRvRGVzKClcclxuICAgICAgc2V0Rm9yY2VEZXMoaSlcclxuICAgICAgc2hvd0FsbERlcygpXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5mdW5jdGlvbiBzZXRGb3JjZURlcyAoaSkge1xyXG4gIGxldCBiZWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0J1xyXG4gIClbaV1cclxuICBsZXQgSU1HcyA9IGJlbHQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylcclxuICBsZXQgaXRlciA9IElNR3MubGVuZ3RoXHJcbiAgbGV0IHN0cm5nID0gW11cclxuICBmb3IgKGxldCBqID0gMDsgaiA8IGl0ZXI7IGorKykge1xyXG4gICAgbGV0IElNRyA9IElNR3Nbal1cclxuICAgIGxldCBhdHRyeWIgPSBJTUcuZ2V0QXR0cmlidXRlKCdzcmMnKVxyXG4gICAgaWYgKGogIT09IDApIHtcclxuICAgICAgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL2Jyb24tYmFyYmEuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ2RvZGF0a293xIUgbW9jxIUgdWRlcnplbmlvd8SFJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy9icm9uLWN6YXIuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ2RvZGF0a293xIUgbW9jxIUgY3phcm5va3NpxJlza8SFJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy9icm9uLXN0cnouc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ2RvZGF0a293eW0ga3Vuc3p0ZW0gc3RyemVsZWNraW0nKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL2Jyb24tc3phbC5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnZG9kYXRrb3d5bSBzemFsZcWEc3R3ZW0nKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL2Jyb24temRyYS5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnbmllc3BvZHppYW55bSB6ZHJhZGxpd3ltIGNpb3NlbScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvenl3LW9naWVuLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCfFvHl3aW/FgmVtIG9nbmlhJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy96eXctcm96a2xhZC5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnxbx5d2lvxYJlbSByb3prxYJhZHUnKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL3p5dy13b2Quc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ8W8eXdpb8WCZW0gd29keScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvenl3LXptaWFuYS5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnxbx5d2lvxYJlbSB6bWlhbnknKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL3p5dy16eXdpYS5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnxbx5d2lvxYJlbSDFvHl3aWknKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ3fFgmFzbsSFIG3EhWRyb8WbY2nEhSDFvHl3aW/FgsOzdyBpIHRhbGVudMOzdycpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgbGV0IHN0cmluZ1RvU2V0ID0gc3Rybmcuam9pbignLCAnKVxyXG4gIGxldCBzcG5EZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfenl3aW9sJylcclxuICBzcG5EZXMuaW5uZXJUZXh0ID0gc3RyaW5nVG9TZXQgKyAnLidcclxufVxyXG5mdW5jdGlvbiBzaG93QWxsRGVzICgpIHtcclxuICBsZXQgYWxsRGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzJylcclxuICBhbGxEZXMuY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJylcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0KTtcclxubGV0IGFtb3VudE9mUG9pbnRzID0gMjA7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgbGV0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHMtMl9maWVsZHNldC1kX2NvbnRhaW5lcl9hdHJ5YiAuLS1iZWx0X2ljb24tY29udGFpbmVyJyk7XHJcbiAgICBsZXQgYmVsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHMtMl9maWVsZHNldC1kX2NvbnRhaW5lcl9hdHJ5YiAuLS1iZWx0X2JvZHktY29udGFpbmVyX2JvZHknKTtcclxuICAgIGxldCBpdGVyID0gYnRucy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXI7IGkrKykge1xyXG4gICAgICAgIGlmIChpID4gNCkge1xyXG4gICAgICAgICAgICBsZXQgYXR0cnliID0gYnRuc1tpXTtcclxuICAgICAgICAgICAgbGV0IGJlbHQgPSBiZWx0c1tpXTtcclxuICAgICAgICAgICAgYXR0cnliLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFtb3VudE9mUG9pbnRzID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFBvaW50KGJlbHQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUG9pbnQoYmVsdCkge1xyXG4gICAgbGV0IElNRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0lNRycpO1xyXG4gICAgSU1HLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2ljb25zL2lrb25hLXBvdGVnLnN2ZycpO1xyXG4gICAgYmVsdC5hcHBlbmRDaGlsZChJTUcpO1xyXG4gICAgYW1vdW50T2ZQb2ludHMtLTtcclxuICAgIElNRy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkZWxldGVUaGlzSU1HKElNRylcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVRoaXNJTUcoeCkge1xyXG4gICAgeC5yZW1vdmUoKTtcclxuICAgIGFtb3VudE9mUG9pbnRzKys7XHJcbn0iXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwidXNlckZsb3dWaWFGaXJzdEZpZWxkc2V0IiwidXNlck5hbWUiLCJxdWVyeVNlbGVjdG9yIiwidXNlck5pY2siLCJ1c2VyTW90dG8iLCJ1c2VyTmFtZUFjY2VwdCIsInVzZXJOaWNrQWNjZXB0IiwidXNlck1vdHRvQWNjZXB0IiwiaXRlbSIsIm5leHRJdGVtIiwiZXZlbnQiLCJhbGxGaWVsZHNBcmVTZXQiLCJjaGVja0lmRmllbGRzQXJlU2V0IiwiZW5hYmxlTmV4dFBhcnRPZkZvcm11bGEiLCJrZXlDb2RlIiwiZm9jdXMiLCJ2YWx1ZUEiLCJ2YWx1ZSIsInZhbHVlQiIsInZhbHVlQyIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsInRoaXNPcm5hbWVudCIsImFsbE9ybmFtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZXRBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJuZXh0T3JuYW1lbnQiLCJyZW1vdmUiLCJwYXJ0T2ZGb3JtIiwiY2hvb3NlWW91ckF2YXRhciIsImNvbnRhaW5lcnMiLCJhdmF0YXJzIiwiYW1vdW50IiwibGVuZ3RoIiwiaSIsImNob29zZVRoaXNBdmF0YXIiLCJzZXRPbmVQYXJ0T2ZBdHRhY2tEZXNjcmlwdGlvbiIsInN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0cyIsImVuYWJsZUF0dGFja3MiLCJjaGVja2VkIiwiZGVzUGFydCIsImFycmF5IiwiaW5uZXJUZXh0IiwiY29udCIsIm9wdGlvbnMiLCJpdGVyIiwieCIsImJlbHQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImVuYWJsZWRBdHRhY2tzIiwiZGlzYWJsZWRJdGVtIiwib3B0cyIsImoiLCJzZWxlY3RlZCIsImVuYWJsZWRBdHRhY2siLCJpbml0aWFsaXplQXR0YWNrc1BhcnQiLCJvcHQiLCJvbk1PdXQiLCJvbk1FbnRlciIsInN5bmNocm9uaXplVGhpc0Jja2dyV2l0aEltYWdlQmVsdEhvdmVyQmNrZ3IiLCJzeW5jaHJvbml6ZUJhY2tncm91bmRzT2ZPdGhlck9wdG5zIiwiaXNFbnRlciIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJiY2dDb2wiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiaW5pdGlhbGl6ZSIsInNldElNRyIsInNldFN0cmlrZU5hbWVUb0RlcyIsInNldFBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uIiwiaW1hZyIsImF0dHJ5YiIsImdldEF0dHJpYnV0ZSIsImljb24iLCJhbGxJTUdzIiwic3RhbmRhcnQiLCJpbWFnZVRvRGVsIiwicmVtb3ZlQ2hpbGQiLCJ0aGVJTUciLCJzb3VyY2VJTUciLCJuZXdJTUciLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJzZXROYW1lVG9EZXMiLCJpbnAiLCJuYW0iLCJpbnBCIiwic3VybmFtIiwic3RyTmFtZSIsInNldEZvcmNlRGVzIiwic2hvd0FsbERlcyIsIml0bSIsIklNR3MiLCJzdHJuZyIsIklNRyIsInB1c2giLCJzdHJpbmdUb1NldCIsImpvaW4iLCJzcG5EZXMiLCJhbGxEZXMiLCJpbml0IiwiYW1vdW50T2ZQb2ludHMiLCJidG5zIiwiYmVsdHMiLCJhZGRQb2ludCIsImRlbGV0ZVRoaXNJTUciXSwibWFwcGluZ3MiOiI7OztJQUNBQSxTQUFTQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTtJQUN4REM7SUFDRCxDQUZEO0lBR0EsU0FBU0Esd0JBQVQsR0FBcUM7SUFDbkMsTUFBSUMsV0FBV0gsU0FBU0ksYUFBVCxDQUF1QixvQkFBdkIsQ0FBZjtJQUNBLE1BQUlDLFdBQVdMLFNBQVNJLGFBQVQsQ0FBdUIseUJBQXZCLENBQWY7SUFDQSxNQUFJRSxZQUFZTixTQUFTSSxhQUFULENB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
