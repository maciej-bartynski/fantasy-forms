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

    document.addEventListener('DOMContentLoaded', initializeGuide);

    function initializeGuide() {
      hideUserGuide();
      changeGuide();
      //pointsIterator()
    }
    function hideUserGuide() {
      var ornm = document.querySelector('.aside-head');
      ornm.addEventListener('click', rotateAndHideAside);
      var btn = document.querySelector('.user-guide_hide');
      btn.addEventListener('click', rotateAndHideAside);
    }
    var controller = 0;
    function rotateAndHideAside() {
      var aside = document.querySelector('aside');
      if (controller === 0) {
        aside.style.transform = 'rotate(90deg)';
        var aw = aside.offsetWidth;
        var ah = aside.offsetHeight;
        var wsp = ah + (aw - ah) / 2;
        var x = wsp * -1 + 20;
        var y = x + 'px';
        var z = (aw - ah) / 2 + 'px';
        aside.style.left = y;
        aside.style.top = z;
        controller = 1;
      } else if (controller === 1) {
        aside.style.transform = 'rotate(0deg)';
        aside.style.left = 0;
        aside.style.top = 0;
        controller = 0;
      }
    }
    function changeGuide() {
      var guide = document.querySelector('.aside-foot .user-guide');
      var parts = document.querySelectorAll('fieldset');

      var _loop = function _loop(i) {
        parts[i].addEventListener('mouseenter', function () {
          guideReacts(i, guide);
        });
      };

      for (var i = 0; i <= 6; i++) {
        _loop(i);
      }
    }
    function guideReacts(i, guide) {
      var arr = ['Gdy wpiszesz imię, przydomek i zawołanie, po zatwierdzeniu zmian pojawi się następna część formularza.', 'Po wyborze klasy, pojawi sie okno wyboru ataku spośród uderzeń charakterystycznych dla tej postaci.', 'Wybierz uderzenie, klikając w słowo opisujące je. Przy każdym epitecie widnieje charakterystyka ciosu w Ikonach Żywiołów i Ikonach Uderzeń.', 'Wymyśl nazwe dla uderzenia z poprzedniego kroku. Gdy ją zatwierdzisz, pojawi sie kolejna cześć karty postaci.', 'Po wyborze jednej opcji z każdej listy, pojawi sie kolejna cześć karty postaci.', 'Kliknij tyle opcji, ile chcesz. Każdy zestaw (czyli moc i pietno) zabiera ci pewną ilość punktów Mądrości.', 'Rozdaj pozostałe punkty mądrości na współczynniki postaci: Życie, Mądrość, Ruch i Działanie.'];
      guide.innerText = arr[i];
    }

    var iteratorOfPointsLeft = {
      left: 20,
      spentOnAttack: 0,
      iterator: function iterator(cont, x) {
        var iterDevice = document.querySelector('.aside-body_how-much');
        var opt = cont.querySelectorAll('.corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt')[x];
        var points = opt.querySelectorAll('img');
        var amount = points.length - 1;
        var bilans = amount - this.spentOnAttack;
        this.left = this.left - bilans;
        this.spentOnAttack = amount;
        iterDevice.innerText = 'Pozostało' + ' ' + this.left + 'x';
      },
      deletator: function deletator() {
        var iterDevice = document.querySelector('.aside-body_how-much');
        this.left = this.left + this.spentOnAttack;
        this.spentOnAttack = 0;
        iterDevice.innerText = 'Pozostało' + ' ' + this.left + 'x';
      }
    };

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
      iteratorOfPointsLeft.deletator();
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
                    iteratorOfPointsLeft.iterator(cont, x);
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
                itIsClicked(opt, options, iter, i);
            });
        };

        for (var i = 0; i < iter; i++) {
            _loop(i);
        }
    }
    function itIsClicked(opt, opts, iter, i) {
        var checks = document.querySelectorAll('input[name="moc-pietno"]');
        if (checks[i].checked === true) {
            checks[i].checked = false;
        } else {
            checks[i].checked = true;
        }
        for (var j = 0; j < iter; j++) {
            if (checks[j].checked === true) {
                opts[j].classList.remove('itIsHidden');
            }
            if (checks[j].checked === false) {
                opts[j].classList.add('itIsHidden');
            }
        }
    }

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyIuLi9zb3VyY2UvZHluYW1pY3MvYXRha2ktc2V0LXR4dC5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9wb2RzdGF3eS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9hc2lkZS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9rbGFzYS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9hdGFraS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9hdHRyeWJzLmpzIiwiLi4vc291cmNlL2R5bmFtaWNzL29icm9ueS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9tb2NlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdGlhbGl6ZSlcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcbiAgbGV0IG9wdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX3NlbGVjdC1saXN0IG9wdGlvbidcclxuICApXHJcbiAgbGV0IGFtb3VudCA9IG9wdHMubGVuZ3RoXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xyXG4gICAgbGV0IGl0ZW0gPSBvcHRzW2ldXHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBzZXRJTUcoaSlcclxuICAgICAgZW5hYmxlU3RyaWtlTmFtZVBhcnQoKVxyXG4gICAgICBzZXRTdHJpa2VOYW1lVG9EZXMoaSlcclxuICAgICAgc2V0UGFydE9mQXR0YWNrRGVzY3JpcHRpb24oaSlcclxuICAgICAgc2V0Rm9yY2VEZXMoaSlcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbmxldCBvbmx5T25jZSA9IDBcclxuXHJcbmZ1bmN0aW9uIGVuYWJsZVN0cmlrZU5hbWVQYXJ0KCkge1xyXG4gIG9ubHlPbmNlKytcclxuICBpZiAob25seU9uY2UgPT09IDEpIHtcclxuICAgIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0cmlrZU5hbWUnKVxyXG4gICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzdHJpa2VOYW1lJylcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uKGkpIHtcclxuICBsZXQgZGVzUGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Agc3Bhbi4tLWRlc19lcGl0ZXQnKVxyXG4gIGRlc1BhcnQuY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJylcclxuICBsZXQgYXJyYXkgPSBbXHJcbiAgICAnYnJ1dGFsbmUnLFxyXG4gICAgJ25pZXByemV3aWR5d2FsbmUnLFxyXG4gICAgJ3d5xId3aWN6b25lJyxcclxuICAgICduaWV6YXdvZG5lJyxcclxuICAgICdwcmVjeXp5am5lJyxcclxuICAgICd6bWFzb3dhbmUnLFxyXG4gICAgJ3BvZHN0xJlwbmUnLFxyXG4gICAgJ3d5cmFjaG93YW5lJyxcclxuICAgICd6ZHJhZHppZWNraWUnLFxyXG4gICAgJ3N6YWxlxYRjemUnLFxyXG4gICAgJ29wcmFjb3dhbmUgdyBsYWJvcmF0b3JpdW0gYWxjaGVtaWN6bnltJyxcclxuICAgICduaWVwb3dzdHJ6eW1hbmUnLFxyXG4gICAgJ3fFgmFkY3plJyxcclxuICAgICdtcm9jem5lJyxcclxuICAgICd0YWplbW5lJyxcclxuICAgICd3xZtjaWVrxYJlJyxcclxuICAgICd3c3BpZXJhbmUgbW9jxIUgb3RjaMWCYW5pJyxcclxuICAgICdwcnplc3ljb25lIHrFgsSFIG1vY8SFJ1xyXG4gIF1cclxuICBkZXNQYXJ0LmlubmVyVGV4dCA9ICcsICcgKyBhcnJheVtpXVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRJTUcoaSkge1xyXG4gIGxldCBiZWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0J1xyXG4gIClbaV1cclxuICBsZXQgaW1hZyA9IGJlbHQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylbMF1cclxuICBsZXQgYXR0cnliID0gaW1hZy5nZXRBdHRyaWJ1dGUoJ3NyYycpXHJcbiAgbGV0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1wbGF0ZV9pbWdfaWNvbicpXHJcbiAgaWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIGF0dHJ5YilcclxuICBsZXQgYWxsSU1HcyA9IGJlbHQucXVlcnlTZWxlY3RvckFsbCgnaW1nJykubGVuZ3RoXHJcbiAgbGV0IHN0YW5kYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tc3RhbmRhcnRfaW1nX2Jja2cnKVxyXG4gIHdoaWxlIChzdGFuZGFydC5xdWVyeVNlbGVjdG9yKCdJTUcnKSAhPT0gbnVsbCkge1xyXG4gICAgbGV0IGltYWdlVG9EZWwgPSBzdGFuZGFydC5xdWVyeVNlbGVjdG9yKCdJTUcnKVxyXG4gICAgc3RhbmRhcnQucmVtb3ZlQ2hpbGQoaW1hZ2VUb0RlbClcclxuICB9XHJcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBhbGxJTUdzOyBqKyspIHtcclxuICAgIGlmIChqID4gMCkge1xyXG4gICAgICBsZXQgdGhlSU1HID0gYmVsdC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVtqXVxyXG4gICAgICBsZXQgc291cmNlSU1HID0gdGhlSU1HLmdldEF0dHJpYnV0ZSgnc3JjJylcclxuICAgICAgbGV0IG5ld0lNRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgIG5ld0lNRy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNvdXJjZUlNRylcclxuICAgICAgc3RhbmRhcnQuYXBwZW5kQ2hpbGQobmV3SU1HKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0U3RyaWtlTmFtZVRvRGVzKGkpIHtcclxuICBsZXQgaW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm5hendhdWRlcnplbmlhXCJdJylcclxuICBpbnAuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgc3RyTmFtZSA9IGlucC52YWx1ZTtcclxuICAgIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX25hendhLWNpb3N1Jyk7XHJcbiAgICBpdGVtLmlubmVyVGV4dCA9IHN0ck5hbWUgKyAnIHRvIGxlZ2VuZGFybmUnO1xyXG4gICAgc2hvd0FsbERlcygpO1xyXG4gICAgc2V0TmV4dFBhcnRPZkZvcm11bGEoKTtcclxuICB9KVxyXG4gIGlucC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgaXRtID0gaW5wLnZhbHVlXHJcbiAgICBpZiAoaXRtLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgbGV0IHN0ck5hbWUgPSBpbnAudmFsdWVcclxuICAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfbmF6d2EtY2lvc3UnKVxyXG4gICAgICBpdGVtLmlubmVyVGV4dCA9IHN0ck5hbWUgKyAnIHRvIGxlZ2VuZGFybmUnXHJcbiAgICAgIHNob3dBbGxEZXMoKTtcclxuICAgICAgc2V0TmV4dFBhcnRPZkZvcm11bGEoKTtcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRGb3JjZURlcyhpKSB7XHJcbiAgbGV0IGJlbHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnXHJcbiAgKVtpXTtcclxuICBsZXQgSU1HcyA9IGJlbHQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylcclxuICBsZXQgaXRlciA9IElNR3MubGVuZ3RoXHJcbiAgbGV0IHN0cm5nID0gW11cclxuICBmb3IgKGxldCBqID0gMDsgaiA8IGl0ZXI7IGorKykge1xyXG4gICAgbGV0IElNRyA9IElNR3Nbal1cclxuICAgIGxldCBhdHRyeWIgPSBJTUcuZ2V0QXR0cmlidXRlKCdzcmMnKVxyXG4gICAgaWYgKGogIT09IDApIHtcclxuICAgICAgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL2Jyb24tYmFyYmEuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ2RvZGF0a293xIUgbW9jxIUgdWRlcnplbmlvd8SFJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy9icm9uLWN6YXIuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ2RvZGF0a293xIUgbW9jxIUgY3phcm5va3NpxJlza8SFJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy9icm9uLXN0cnouc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ2RvZGF0a293eW0ga3Vuc3p0ZW0gc3RyemVsZWNraW0nKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL2Jyb24tc3phbC5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnZG9kYXRrb3d5bSBzemFsZcWEc3R3ZW0nKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL2Jyb24temRyYS5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnbmllc3BvZHppYW55bSB6ZHJhZGxpd3ltIGNpb3NlbScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvenl3LW9naWVuLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCfFvHl3aW/FgmVtIG9nbmlhJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy96eXctcm96a2xhZC5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnxbx5d2lvxYJlbSByb3prxYJhZHUnKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL3p5dy13b2Quc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ8W8eXdpb8WCZW0gd29keScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvenl3LXptaWFuYS5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnxbx5d2lvxYJlbSB6bWlhbnknKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL3p5dy16eXdpYS5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnxbx5d2lvxYJlbSDFvHl3aWknKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ3fFgmFzbsSFIG3EhWRyb8WbY2nEhSDFvHl3aW/FgsOzdyBpIHRhbGVudMOzdycpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgbGV0IHN0cmluZ1RvU2V0ID0gc3Rybmcuam9pbignLCAnKTtcclxuICBsZXQgenl3RGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3p5d2lvbCcpO1xyXG4gIGxldCBpbWlEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfaW1pZScpO1xyXG4gIGxldCBwcnpEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfcHJ6eWRvbWVrJyk7XHJcbiAgbGV0IHpkYURlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc196ZGFuaWUnKTtcclxuICB6eXdEZXMuY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJyk7XHJcbiAgaW1pRGVzLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpO1xyXG4gIHByekRlcy5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKTtcclxuICB6ZGFEZXMuY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJyk7XHJcbiAgenl3RGVzLmlubmVyVGV4dCA9IHN0cmluZ1RvU2V0ICsgJy4nO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXROYW1lVG9EZXMoKSB7XHJcbiAgbGV0IGlucCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJpbWllXCJdJylcclxuICBsZXQgbmFtID0gaW5wLnZhbHVlXHJcbiAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfaW1pZScpXHJcbiAgaXRlbS5pbm5lclRleHQgPSBuYW0gKyAnICc7XHJcbiAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXROaWNrbmFtZVRvRGVzKCkge1xyXG4gIGxldCBpbnBCID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByenlkb21la1wiXScpXHJcbiAgbGV0IHN1cm5hbSA9IGlucEIudmFsdWVcclxuICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19wcnp5ZG9tZWsnKVxyXG4gIGl0ZW0uaW5uZXJUZXh0ID0gc3VybmFtO1xyXG4gIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJylcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U2VudGVuY2VUb0RlcygpIHtcclxuICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc196ZGFuaWUnKVxyXG4gIGl0ZW0uaW5uZXJUZXh0ID0gJyB3em1hY25pYSBzd8OzaiBhdGFrICdcclxuICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dBbGxEZXMoKSB7XHJcbiAgbGV0IGFsbERlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlcycpXHJcbiAgYWxsRGVzLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldE5leHRQYXJ0T2ZGb3JtdWxhKCkge1xyXG4gIGxldCB0ZXh0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJuYXp3YXVkZXJ6ZW5pYVwiXScpO1xyXG4gIGxldCBhcmVhVmFsdWUgPSAodGV4dEFyZWEudmFsdWUpLnRyaW0oKTtcclxuICBpZiAoYXJlYVZhbHVlICE9PSAnJykge1xyXG4gICAgZW5hYmxlTmV4dFBhcnRPZkZvcm0oKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuYWJsZU5leHRQYXJ0T2ZGb3JtKCkge1xyXG4gIGxldCBuZXh0UGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc2V0LWMnKTtcclxuICBuZXh0UGFydC5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbiAgbGV0IGFsbE9ybmFtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZy5jb3JwdXNfc2VjdGlvbl9mb3JtX29ybmFtZW50LW1hcmtlcicpO1xyXG4gIGxldCB0aGlzT3JuYW1lbnQgPSBhbGxPcm5hbWVudHNbMV07XHJcbiAgdGhpc09ybmFtZW50LnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaWNvbnMvcG9sZS5zdmcnKTtcclxuICB0aGlzT3JuYW1lbnQuY2xhc3NMaXN0LmFkZCgnaXRJc1Bhc3NlZFRocm91Z2h0Jyk7XHJcbiAgbGV0IG5leHRPcm5hbWVudCA9IGFsbE9ybmFtZW50c1syXTtcclxuICBuZXh0T3JuYW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0hpZGRlbicpO1xyXG4gIHRoaXNPcm5hbWVudC5zdHlsZS5tYXJnaW5Cb3R0b209XCItMXJlbVwiO1xyXG4gIHRoaXNPcm5hbWVudC5zdHlsZS56SW5kZXg9XCIxXCI7XHJcbiAgbmV4dFBhcnQuc3R5bGUuekluZGV4PVwiMlwiO1xyXG59IiwiaW1wb3J0IHtzZXROYW1lVG9EZXN9IGZyb20gJy4vYXRha2ktc2V0LXR4dC5qcyc7XHJcbmltcG9ydCB7c2V0Tmlja25hbWVUb0Rlc30gZnJvbSAnLi9hdGFraS1zZXQtdHh0LmpzJztcclxuaW1wb3J0IHtzZXRTZW50ZW5jZVRvRGVzfSBmcm9tICcuL2F0YWtpLXNldC10eHQuanMnO1xyXG4ndXNlIHN0cmljdCc7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgdXNlckZsb3dWaWFGaXJzdEZpZWxkc2V0KClcclxufSlcclxuZnVuY3Rpb24gdXNlckZsb3dWaWFGaXJzdEZpZWxkc2V0ICgpIHtcclxuICBsZXQgdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiaW1pZVwiXScpO1xyXG4gIGxldCB1c2VyTmljayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcnp5ZG9tZWtcIl0nKTtcclxuICBsZXQgdXNlck1vdHRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWFbbmFtZT1cInphd29sYW5pZVwiXScpO1xyXG4gIHVzZXJOYW1lQWNjZXB0KHVzZXJOYW1lLCB1c2VyTmljaylcclxuICB1c2VyTmlja0FjY2VwdCh1c2VyTmljaywgdXNlck1vdHRvKVxyXG4gIHVzZXJNb3R0b0FjY2VwdCh1c2VyTW90dG8sIHVzZXJOYW1lKVxyXG59XHJcbmZ1bmN0aW9uIHVzZXJOYW1lQWNjZXB0IChpdGVtLCBuZXh0SXRlbSkge1xyXG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGxldCBhbGxGaWVsZHNBcmVTZXQgPSBjaGVja0lmRmllbGRzQXJlU2V0KCk7XHJcbiAgICBpZiAoYWxsRmllbGRzQXJlU2V0ID09PSB0cnVlKSB7XHJcbiAgICAgIGVuYWJsZU5leHRQYXJ0T2ZGb3JtdWxhKCk7XHJcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgIG5leHRJdGVtLmZvY3VzKClcclxuICAgIH1cclxuICAgIHNldFRoaXNEYXRhVG9EZXNjcmlwdGlvbigpO1xyXG4gIH0pXHJcbn1cclxuZnVuY3Rpb24gdXNlck5pY2tBY2NlcHQgKGl0ZW0sIG5leHRJdGVtKSB7XHJcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgbGV0IGFsbEZpZWxkc0FyZVNldCA9IGNoZWNrSWZGaWVsZHNBcmVTZXQoKTtcclxuICAgIGlmIChhbGxGaWVsZHNBcmVTZXQgPT09IHRydWUpIHtcclxuICAgICAgZW5hYmxlTmV4dFBhcnRPZkZvcm11bGEoKTtcclxuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgbmV4dEl0ZW0uZm9jdXMoKVxyXG4gICAgfVxyXG4gICAgc2V0VGhpc0RhdGFUb0Rlc2NyaXB0aW9uKCk7XHJcbiAgfSlcclxufVxyXG5mdW5jdGlvbiB1c2VyTW90dG9BY2NlcHQgKGl0ZW0sIG5leHRJdGVtKSB7XHJcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgbGV0IGFsbEZpZWxkc0FyZVNldCA9IGNoZWNrSWZGaWVsZHNBcmVTZXQoKTtcclxuICAgIGlmIChhbGxGaWVsZHNBcmVTZXQgPT09IHRydWUpIHtcclxuICAgICAgZW5hYmxlTmV4dFBhcnRPZkZvcm11bGEoKTtcclxuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgbmV4dEl0ZW0uZm9jdXMoKVxyXG4gICAgfVxyXG4gICAgc2V0VGhpc0RhdGFUb0Rlc2NyaXB0aW9uKCk7XHJcbiAgfSlcclxufVxyXG5mdW5jdGlvbiBjaGVja0lmRmllbGRzQXJlU2V0KCkge1xyXG4gICAgbGV0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImltaWVcIl0nKTtcclxuICAgIGxldCB1c2VyTmljayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcnp5ZG9tZWtcIl0nKTtcclxuICAgIGxldCB1c2VyTW90dG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYVtuYW1lPVwiemF3b2xhbmllXCJdJyk7XHJcbiAgICBsZXQgdmFsdWVBID0gdXNlck5hbWUudmFsdWU7XHJcbiAgICBsZXQgdmFsdWVCID0gdXNlck5pY2sudmFsdWU7XHJcbiAgICBsZXQgdmFsdWVDID0gdXNlck1vdHRvLnZhbHVlO1xyXG4gICAgaWYgKHZhbHVlQS50cmltKCkhPT1cIlwiJiZ2YWx1ZUEudHJpbSgpLnRvTG93ZXJDYXNlKCkhPT1cImhlcm9zXCIpe1xyXG4gICAgICAgIGlmKHZhbHVlQi50cmltKCkhPT1cIlwiJiZ2YWx1ZUIudHJpbSgpLnRvTG93ZXJDYXNlKCkhPT1cIndvamVubnkgcGllc1wiKXtcclxuICAgICAgICAgIGlmKHZhbHVlQy50cmltKCkhPT1cIlwiJiZ2YWx1ZUMudHJpbSgpLnRvTG93ZXJDYXNlKCkhPT1cInphd3N6ZSB3aWVybnlcIil7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfSAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGVuYWJsZU5leHRQYXJ0T2ZGb3JtdWxhKCl7XHJcbiAgICBsZXQgdGhpc09ybmFtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nLmNvcnB1c19zZWN0aW9uX2Zvcm1fb3JuYW1lbnQtbWFya2VyJyk7XHJcbiAgICBsZXQgYWxsT3JuYW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLmNvcnB1c19zZWN0aW9uX2Zvcm1fb3JuYW1lbnQtbWFya2VyJyk7XHJcbiAgICB0aGlzT3JuYW1lbnQuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pY29ucy9wb2xlLnN2ZycpO1xyXG4gICAgdGhpc09ybmFtZW50LmNsYXNzTGlzdC5hZGQoJ2l0SXNQYXNzZWRUaHJvdWdodCcpO1xyXG4gICAgbGV0IG5leHRPcm5hbWVudCA9IGFsbE9ybmFtZW50c1sxXTtcclxuICAgIG5leHRPcm5hbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbiAgICBsZXQgcGFydE9mRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkcycpO1xyXG4gICAgcGFydE9mRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbn1cclxuZnVuY3Rpb24gc2V0VGhpc0RhdGFUb0Rlc2NyaXB0aW9uKCl7XHJcbiAgc2V0TmFtZVRvRGVzKCk7XHJcbiAgc2V0Tmlja25hbWVUb0RlcygpO1xyXG4gIHNldFNlbnRlbmNlVG9EZXMoKTtcclxufSIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0aWFsaXplR3VpZGUpXHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplR3VpZGUgKCkge1xyXG4gIGhpZGVVc2VyR3VpZGUoKVxyXG4gIGNoYW5nZUd1aWRlKClcclxuICAvL3BvaW50c0l0ZXJhdG9yKClcclxufVxyXG5mdW5jdGlvbiBoaWRlVXNlckd1aWRlICgpIHtcclxuICBsZXQgb3JubSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1oZWFkJylcclxuICBvcm5tLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlQW5kSGlkZUFzaWRlKVxyXG4gIGxldCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1ndWlkZV9oaWRlJylcclxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVBbmRIaWRlQXNpZGUpXHJcbn1cclxubGV0IGNvbnRyb2xsZXIgPSAwXHJcbmZ1bmN0aW9uIHJvdGF0ZUFuZEhpZGVBc2lkZSAoKSB7XHJcbiAgbGV0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXNpZGUnKVxyXG4gIGlmIChjb250cm9sbGVyID09PSAwKSB7XHJcbiAgICBhc2lkZS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSdcclxuICAgIGxldCBhdyA9IGFzaWRlLm9mZnNldFdpZHRoXHJcbiAgICBsZXQgYWggPSBhc2lkZS5vZmZzZXRIZWlnaHRcclxuICAgIGxldCB3c3AgPSBhaCArICgoYXcgLSBhaCkgLyAyKVxyXG4gICAgbGV0IHggPSAod3NwICogLTEpICsgMjBcclxuICAgIGxldCB5ID0geCArICdweCdcclxuICAgIGxldCB6ID0gKChhdyAtIGFoKSAvIDIpICsgJ3B4J1xyXG4gICAgYXNpZGUuc3R5bGUubGVmdCA9IHlcclxuICAgIGFzaWRlLnN0eWxlLnRvcCA9IHpcclxuICAgIGNvbnRyb2xsZXIgPSAxXHJcbiAgfWVsc2UgaWYgKGNvbnRyb2xsZXIgPT09IDEpIHtcclxuICAgIGFzaWRlLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknXHJcbiAgICBhc2lkZS5zdHlsZS5sZWZ0ID0gMFxyXG4gICAgYXNpZGUuc3R5bGUudG9wID0gMFxyXG4gICAgY29udHJvbGxlciA9IDBcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gY2hhbmdlR3VpZGUgKCkge1xyXG4gIGxldCBndWlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1mb290IC51c2VyLWd1aWRlJylcclxuICBsZXQgcGFydHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmaWVsZHNldCcpXHJcbiAgZm9yIChsZXQgaSA9IDA7aSA8PSA2O2krKykge1xyXG4gICAgcGFydHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgZ3VpZGVSZWFjdHMoaSwgZ3VpZGUpXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBndWlkZVJlYWN0cyAoaSwgZ3VpZGUpIHtcclxuICBsZXQgYXJyID0gW1xyXG4gICAgJ0dkeSB3cGlzemVzeiBpbWnEmSwgcHJ6eWRvbWVrIGkgemF3b8WCYW5pZSwgcG8gemF0d2llcmR6ZW5pdSB6bWlhbiBwb2phd2kgc2nEmSBuYXN0xJlwbmEgY3rEmcWbxIcgZm9ybXVsYXJ6YS4nLFxyXG4gICAgJ1BvIHd5Ym9yemUga2xhc3ksIHBvamF3aSBzaWUgb2tubyB3eWJvcnUgYXRha3Ugc3BvxZtyw7NkIHVkZXJ6ZcWEIGNoYXJha3RlcnlzdHljem55Y2ggZGxhIHRlaiBwb3N0YWNpLicsXHJcbiAgICAnV3liaWVyeiB1ZGVyemVuaWUsIGtsaWthasSFYyB3IHPFgm93byBvcGlzdWrEhWNlIGplLiBQcnp5IGthxbxkeW0gZXBpdGVjaWUgd2lkbmllamUgY2hhcmFrdGVyeXN0eWthIGNpb3N1IHcgSWtvbmFjaCDFu3l3aW/FgsOzdyBpIElrb25hY2ggVWRlcnplxYQuJyxcclxuICAgICdXeW15xZtsIG5hendlIGRsYSB1ZGVyemVuaWEgeiBwb3ByemVkbmllZ28ga3Jva3UuIEdkeSBqxIUgemF0d2llcmR6aXN6LCBwb2phd2kgc2llIGtvbGVqbmEgY3plxZvEhyBrYXJ0eSBwb3N0YWNpLicsXHJcbiAgICAnUG8gd3lib3J6ZSBqZWRuZWogb3BjamkgeiBrYcW8ZGVqIGxpc3R5LCBwb2phd2kgc2llIGtvbGVqbmEgY3plxZvEhyBrYXJ0eSBwb3N0YWNpLicsXHJcbiAgICAnS2xpa25paiB0eWxlIG9wY2ppLCBpbGUgY2hjZXN6LiBLYcW8ZHkgemVzdGF3IChjenlsaSBtb2MgaSBwaWV0bm8pIHphYmllcmEgY2kgcGV3bsSFIGlsb8WbxIcgcHVua3TDs3cgTcSFZHJvxZtjaS4nLFxyXG4gICAgJ1JvemRhaiBwb3pvc3RhxYJlIHB1bmt0eSBtxIVkcm/Fm2NpIG5hIHdzcMOzxYJjenlubmlraSBwb3N0YWNpOiDFu3ljaWUsIE3EhWRyb8WbxIcsIFJ1Y2ggaSBEemlhxYJhbmllLidcclxuICBdXHJcbiAgZ3VpZGUuaW5uZXJUZXh0ID0gYXJyW2ldXHJcbn1cclxuXHJcbnZhciBpdGVyYXRvck9mUG9pbnRzTGVmdCA9IHtcclxuICBsZWZ0OiAyMCxcclxuICBzcGVudE9uQXR0YWNrOiAwLFxyXG4gIGl0ZXJhdG9yKGNvbnQsIHgpIHtcclxuICAgIGxldCBpdGVyRGV2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWJvZHlfaG93LW11Y2gnKTtcclxuICAgIGxldCBvcHQgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnKVt4XTtcclxuICAgIGxldCBwb2ludHMgPSBvcHQucXVlcnlTZWxlY3RvckFsbCgnaW1nJyk7XHJcbiAgICBsZXQgYW1vdW50ID0gKHBvaW50cy5sZW5ndGggLSAxKTtcclxuICAgIGxldCBiaWxhbnMgPSBhbW91bnQtdGhpcy5zcGVudE9uQXR0YWNrO1xyXG4gICAgdGhpcy5sZWZ0ID0gdGhpcy5sZWZ0LWJpbGFucztcclxuICAgIHRoaXMuc3BlbnRPbkF0dGFjayA9IGFtb3VudDtcclxuICAgIGl0ZXJEZXZpY2UuaW5uZXJUZXh0ID0gJ1Bvem9zdGHFgm8nICsgJyAnICsgdGhpcy5sZWZ0ICsgJ3gnO1xyXG4gIH0sXHJcbiAgZGVsZXRhdG9yKCl7XHJcbiAgICBsZXQgaXRlckRldmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1ib2R5X2hvdy1tdWNoJyk7XHJcbiAgICB0aGlzLmxlZnQgPSB0aGlzLmxlZnQgKyB0aGlzLnNwZW50T25BdHRhY2s7XHJcbiAgICB0aGlzLnNwZW50T25BdHRhY2s9MDtcclxuICAgIGl0ZXJEZXZpY2UuaW5uZXJUZXh0ID0gJ1Bvem9zdGHFgm8nICsgJyAnICsgdGhpcy5sZWZ0ICsgJ3gnO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBpdGVyYXRvck9mUG9pbnRzTGVmdDtcclxuIiwiaW1wb3J0IGl0ZXJhdG9yT2ZQb2ludHNMZWZ0IGZyb20gJy4vYXNpZGUuanMnO1xyXG4ndXNlIHN0cmljdCc7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjaG9vc2VZb3VyQXZhdGFyKVxyXG5mdW5jdGlvbiBjaG9vc2VZb3VyQXZhdGFyICgpIHtcclxuICBsZXQgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyJylcclxuICBsZXQgYXZhdGFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9yYWRpby1sYWItY29udGFpbmVyJylcclxuICBsZXQgYW1vdW50ID0gYXZhdGFycy5sZW5ndGhcclxuICBmb3IgKGxldCBpID0gMDtpIDwgYW1vdW50O2krKykge1xyXG4gICAgbGV0IGl0ZW0gPSBhdmF0YXJzW2ldXHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBjaG9vc2VUaGlzQXZhdGFyKGl0ZW0sIGF2YXRhcnMsIGFtb3VudClcclxuICAgICAgc2V0T25lUGFydE9mQXR0YWNrRGVzY3JpcHRpb24oaSlcclxuICAgICAgc3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRzKGNvbnRhaW5lcnMpXHJcbiAgICAgIGVuYWJsZUF0dGFja3MoaSlcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGNob29zZVRoaXNBdmF0YXIgKGl0ZW0sIGF2YXRhcnMsIGFtb3VudCkge1xyXG4gIGl0ZW0ucXVlcnlTZWxlY3RvcignaW5wdXQnKS5jaGVja2VkID0gdHJ1ZTtcclxuICBmb3IgKGxldCBpPTA7IGk8YW1vdW50OyBpKyspe1xyXG4gICAgICBsZXQgYXYgPSBhdmF0YXJzW2ldO1xyXG4gICAgICBhdi5jbGFzc0xpc3QucmVtb3ZlKCdpc0NsaWNrZWQnKTtcclxuICB9XHJcbiAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpc0NsaWNrZWQnKTtcclxuICBpdGVyYXRvck9mUG9pbnRzTGVmdC5kZWxldGF0b3IoKTtcclxufVxyXG5mdW5jdGlvbiBzZXRPbmVQYXJ0T2ZBdHRhY2tEZXNjcmlwdGlvbiAoaSkge1xyXG4gIGxldCBkZXNQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncCBzcGFuLi0tZGVzX2tsYXNhJylcclxuICBsZXQgYXJyYXkgPSBbXHJcbiAgICAnIHVkZXJ6ZW5pZSBicm9uacSFIGJydXRhbG7EhS4nLFxyXG4gICAgJyB1ZGVyemVuaWUgYnJvbmnEhSBzdHJ6ZWxlY2vEhS4nLFxyXG4gICAgJyB1ZGVyemVuaWUgYnJvbmnEhSB6ZHJhZHppZWNrxIUuJyxcclxuICAgICcgdWRlcnplbmllIGJyb25pxIUgc3phbGXFhGN6xIUuJyxcclxuICAgICcgdWRlcnplbmllIGJyb25pxIUgc3phcmxhdGHFhHNrxIUuJyxcclxuICAgICcgdWRlcnplbmllIGJyb25pxIUgbHViIGN6eW1rb2x3aWVrLCBjbyB3cGFkbmllIGthcsWCb3dpIHcgxYJhcHNrYS4nXHJcbiAgXVxyXG4gIGRlc1BhcnQuaW5uZXJUZXh0ID0gYXJyYXlbaV1cclxuICBsZXQgbmV4dERlc1BhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwIHNwYW4uLS1kZXNfZXBpdGV0Jyk7XHJcbiAgbmV4dERlc1BhcnQuY2xhc3NMaXN0LmFkZCgnaXRzSGlkZGVuJyk7XHJcbiAgbGV0IGFub3RoZXJOZXh0RGVzUGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc196eXdpb2wnKTtcclxuICBhbm90aGVyTmV4dERlc1BhcnQuY2xhc3NMaXN0LmFkZCgnaXRzSGlkZGVuJyk7XHJcbiAgbGV0IG90aGVyQW5vdGhlck5leHREZXNQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX2ltaWUnKTtcclxuICBvdGhlckFub3RoZXJOZXh0RGVzUGFydC5jbGFzc0xpc3QuYWRkKCdpdHNIaWRkZW4nKTtcclxuICBsZXQgcHJ6RGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3Byenlkb21laycpO1xyXG4gIGxldCB6ZGFEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfemRhbmllJyk7XHJcbiAgcHJ6RGVzLmNsYXNzTGlzdC5hZGQoJ2l0c0hpZGRlbicpO1xyXG4gIHpkYURlcy5jbGFzc0xpc3QuYWRkKCdpdHNIaWRkZW4nKTtcclxufVxyXG5mdW5jdGlvbiBzeW5jaHJvbml6ZUJhY2tncm91bmRzT2ZPdGhlck9wdHMgKGNvbnRhaW5lcnMpIHtcclxuICBsZXQgYW1vdW50ID0gY29udGFpbmVycy5sZW5ndGhcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XHJcbiAgICBsZXQgY29udCA9IGNvbnRhaW5lcnNbaV1cclxuICAgIGxldCBvcHRpb25zID0gY29udC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKVxyXG4gICAgbGV0IGl0ZXIgPSBvcHRpb25zLmxlbmd0aFxyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVyOyB4KyspIHtcclxuICAgICAgbGV0IGJlbHQgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnKVt4XVxyXG4gICAgICBiZWx0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdpbmhlcml0J1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBlbmFibGVBdHRhY2tzIChpKSB7XHJcbiAgbGV0IGVuYWJsZWRBdHRhY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXInKVxyXG4gIGZvciAobGV0IHggPSAwOyB4IDwgNjsgeCsrKSB7XHJcbiAgICBsZXQgZGlzYWJsZWRJdGVtID0gZW5hYmxlZEF0dGFja3NbeF1cclxuICAgIGRpc2FibGVkSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdlbmFibGVkJylcclxuICAgIGxldCBvcHRzID0gZGlzYWJsZWRJdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpXHJcbiAgICBsZXQgYW1vdW50ID0gb3B0cy5sZW5ndGhcclxuICAgIGZvciAobGV0IGogPSAwO2ogPCBhbW91bnQ7aisrKSB7XHJcbiAgICAgIGlmIChvcHRzW2pdLnNlbGVjdGVkID09PSB0cnVlKSB7XHJcbiAgICAgICAgb3B0c1tqXS5zZWxlY3RlZCA9IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgbGV0IGVuYWJsZWRBdHRhY2sgPSBlbmFibGVkQXR0YWNrc1tpXVxyXG4gIGVuYWJsZWRBdHRhY2suY2xhc3NMaXN0LmFkZCgnZW5hYmxlZCcpXHJcbn1cclxuIiwiaW1wb3J0IGl0ZXJhdG9yT2ZQb2ludHNMZWZ0IGZyb20gJy4vYXNpZGUuanMnO1xyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdGlhbGl6ZUF0dGFja3NQYXJ0KTtcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVBdHRhY2tzUGFydCgpIHtcclxuICAgIGxldCBjb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXInKTtcclxuICAgIGxldCBhbW91bnQgPSBjb250YWluZXJzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50OyBpKyspIHtcclxuICAgICAgICBsZXQgY29udCA9IGNvbnRhaW5lcnNbaV07XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpO1xyXG4gICAgICAgIGxldCBpdGVyID0gb3B0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVyOyB4KyspIHtcclxuICAgICAgICAgICAgbGV0IG9wdCA9IG9wdGlvbnNbeF07XHJcbiAgICAgICAgICAgIG9wdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIG9uTU91dCk7XHJcbiAgICAgICAgICAgIG9wdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgb25NRW50ZXIpO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gb25NRW50ZXIoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0LnNlbGVjdGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN5bmNocm9uaXplVGhpc0Jja2dyV2l0aEltYWdlQmVsdEhvdmVyQmNrZ3Iob3B0LCBjb250LCB4LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uTU91dCgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvcHQuc2VsZWN0ZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3luY2hyb25pemVUaGlzQmNrZ3JXaXRoSW1hZ2VCZWx0SG92ZXJCY2tncihvcHQsIGNvbnQsIHgsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgb3B0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaXRlcmF0b3JPZlBvaW50c0xlZnQuaXRlcmF0b3IoY29udCwgeCk7XHJcbiAgICAgICAgICAgICAgICBzeW5jaHJvbml6ZUJhY2tncm91bmRzT2ZPdGhlck9wdG5zKGNvbnQsIGl0ZXIpO1xyXG4gICAgICAgICAgICAgICAgc3luY2hyb25pemVUaGlzQmNrZ3JXaXRoSW1hZ2VCZWx0SG92ZXJCY2tncihvcHQsIGNvbnQsIHgsIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzeW5jaHJvbml6ZUJhY2tncm91bmRzT2ZPdGhlck9wdG5zKGNvbnQsIGl0ZXIpIHtcclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlcjsgeCsrKSB7XHJcbiAgICAgICAgbGV0IGJlbHQgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnKVt4XTtcclxuICAgICAgICBiZWx0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiaW5oZXJpdFwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzeW5jaHJvbml6ZVRoaXNCY2tncldpdGhJbWFnZUJlbHRIb3ZlckJja2dyKG9wdCwgY29udCwgeCwgaXNFbnRlcikge1xyXG4gICAgbGV0IGJlbHQgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnKVt4XTtcclxuICAgIGlmIChpc0VudGVyID09PSB0cnVlKSB7XHJcbiAgICAgICAgbGV0IHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUob3B0KTtcclxuICAgICAgICBsZXQgYmNnQ29sID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1jb2xvcicpO1xyXG4gICAgICAgIGJlbHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmNnQ29sO1xyXG4gICAgfSBlbHNlIGlmIChpc0VudGVyID09PSBmYWxzZSkge1xyXG4gICAgICAgIGJlbHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJpbmhlcml0XCI7XHJcbiAgICB9XHJcbn0iLCIndXNlIHN0cmljdCc7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0KTtcclxubGV0IGFtb3VudE9mUG9pbnRzID0gMjA7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgbGV0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHMtMl9maWVsZHNldC1kX2NvbnRhaW5lcl9hdHJ5YiAuLS1iZWx0X2ljb24tY29udGFpbmVyJyk7XHJcbiAgICBsZXQgYmVsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHMtMl9maWVsZHNldC1kX2NvbnRhaW5lcl9hdHJ5YiAuLS1iZWx0X2JvZHktY29udGFpbmVyX2JvZHknKTtcclxuICAgIGxldCBpdGVyID0gYnRucy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXI7IGkrKykge1xyXG4gICAgICAgIGlmIChpID4gNCkge1xyXG4gICAgICAgICAgICBsZXQgYXR0cnliID0gYnRuc1tpXTtcclxuICAgICAgICAgICAgbGV0IGJlbHQgPSBiZWx0c1tpXTtcclxuICAgICAgICAgICAgYXR0cnliLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFtb3VudE9mUG9pbnRzID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFBvaW50KGJlbHQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUG9pbnQoYmVsdCkge1xyXG4gICAgbGV0IElNRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0lNRycpO1xyXG4gICAgSU1HLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2ljb25zL2lrb25hLXBvdGVnLnN2ZycpO1xyXG4gICAgYmVsdC5hcHBlbmRDaGlsZChJTUcpO1xyXG4gICAgYW1vdW50T2ZQb2ludHMtLTtcclxuICAgIElNRy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkZWxldGVUaGlzSU1HKElNRylcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVRoaXNJTUcoeCkge1xyXG4gICAgeC5yZW1vdmUoKTtcclxuICAgIGFtb3VudE9mUG9pbnRzKys7XHJcbn0iLCJcInVzZSBzdHJpY3RcIjtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdGlhbGl6ZVRoaXNTZWN0aW9uKTtcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVUaGlzU2VjdGlvbigpIHtcclxuICAgIGxldCBsaXN0QSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNldC1jICN6YXNsb25hXCJcclxuICAgICk7XHJcbiAgICBsZXQgbGlzdEIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzZXQtYyAjcGFuY2VyelwiXHJcbiAgICApO1xyXG4gICAgbGV0IGltYWdlc0EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgIFwiLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzZXQtY19pbWdzX2ltZy5hXCJcclxuICAgICk7XHJcbiAgICBsZXQgaW1hZ2VzQiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNldC1jX2ltZ3NfaW1nLmJcIlxyXG4gICAgKTtcclxuICAgIGxldCBvcHRzQSA9IGxpc3RBLnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb25cIik7XHJcbiAgICBsZXQgb3B0c0IgPSBsaXN0Qi5xdWVyeVNlbGVjdG9yQWxsKFwib3B0aW9uXCIpO1xyXG4gICAgZHluYW1pemVUaGlzTGlzdChsaXN0QSwgb3B0c0EsIGltYWdlc0EsIGxpc3RCKTtcclxuICAgIGR5bmFtaXplVGhpc0xpc3QobGlzdEIsIG9wdHNCLCBpbWFnZXNCLCBsaXN0QSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGR5bmFtaXplVGhpc0xpc3QobGlzdCwgb3B0cywgaW1hZ2VzLCBvdGhlckxpc3QpIHtcclxuICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gbGlzdC52YWx1ZTtcclxuICAgICAgICBsZXQgaXRlciA9IG9wdHMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaXRlciAtIDE7IGorKykge1xyXG4gICAgICAgICAgICBpbWFnZXNbal0uY2xhc3NMaXN0LmFkZChcIml0SXNVbnNlbGVjdGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXI7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgb3B0ID0gb3B0c1tpXTtcclxuICAgICAgICAgICAgbGV0IG9wdFZhbHVlID0gb3B0LnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IG9wdFZhbHVlICYmIGkgIT09IDMpIHtcclxuICAgICAgICAgICAgICAgIGltYWdlc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiaXRJc1Vuc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZW5hYmxlTmV4dEZvcm1QYXJ0KGxpc3QsIG90aGVyTGlzdCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZW5hYmxlTmV4dEZvcm1QYXJ0KGxpc3QsIG90aGVyTGlzdCkge1xyXG4gICAgbGV0IGEgPSBsaXN0LnZhbHVlO1xyXG4gICAgbGV0IGIgPSBvdGhlckxpc3QudmFsdWU7XHJcbiAgICBpZiAoYSAhPT0gXCJcIiAmJiBiICE9PSBcIlwiKSB7XHJcbiAgICAgICAgbGV0IG5leHRQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzLTInKTtcclxuICAgICAgICBuZXh0UGFydC5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbiAgICAgICAgbGV0IGFsbE9ybmFtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZy5jb3JwdXNfc2VjdGlvbl9mb3JtX29ybmFtZW50LW1hcmtlcicpO1xyXG4gICAgICAgIGxldCB0aGlzT3JuYW1lbnQgPSBhbGxPcm5hbWVudHNbMl07XHJcbiAgICAgICAgdGhpc09ybmFtZW50LnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaWNvbnMvcG9sZS5zdmcnKTtcclxuICAgICAgICB0aGlzT3JuYW1lbnQuY2xhc3NMaXN0LmFkZCgnaXRJc1Bhc3NlZFRocm91Z2h0Jyk7XHJcbiAgICAgICAgbGV0IG5leHRPcm5hbWVudCA9IGFsbE9ybmFtZW50c1szXTtcclxuICAgICAgICBuZXh0T3JuYW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0hpZGRlbicpO1xyXG4gICAgfVxyXG59IiwiJ3VzZSBzdHJpY3QnO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdGlhbGl6ZVRoaXNTZWxlY3QpXHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplVGhpc1NlbGVjdCgpIHtcclxuICAgIGxldCBvcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzLTJfZmllbGRzZXQtZF9jb250YWluZXJfbW9jZScpO1xyXG4gICAgbGV0IGl0ZXIgPSBvcHRpb25zLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcjsgaSsrKSB7XHJcbiAgICAgICAgbGV0IG9wdCA9IG9wdGlvbnNbaV07XHJcbiAgICAgICAgb3B0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpdElzQ2xpY2tlZChvcHQsIG9wdGlvbnMsIGl0ZXIsIGkpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gaXRJc0NsaWNrZWQob3B0LCBvcHRzLCBpdGVyLCBpKSB7XHJcbiAgICBsZXQgY2hlY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cIm1vYy1waWV0bm9cIl0nKTtcclxuICAgIGlmIChjaGVja3NbaV0uY2hlY2tlZD09PXRydWUpe1xyXG4gICAgICAgIGNoZWNrc1tpXS5jaGVja2VkPWZhbHNlO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgY2hlY2tzW2ldLmNoZWNrZWQ9dHJ1ZTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgaXRlcjsgaisrKSB7XHJcbiAgICAgICAgaWYgKGNoZWNrc1tqXS5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIG9wdHNbal0uY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hlY2tzW2pdLmNoZWNrZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIG9wdHNbal0uY2xhc3NMaXN0LmFkZCgnaXRJc0hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdGlhbGl6ZSIsIm9wdHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYW1vdW50IiwibGVuZ3RoIiwiaSIsIml0ZW0iLCJzZXRJTUciLCJlbmFibGVTdHJpa2VOYW1lUGFydCIsInNldFN0cmlrZU5hbWVUb0RlcyIsInNldFBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uIiwic2V0Rm9yY2VEZXMiLCJvbmx5T25jZSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJkZXNQYXJ0IiwiYXJyYXkiLCJpbm5lclRleHQiLCJiZWx0IiwiaW1hZyIsImF0dHJ5YiIsImdldEF0dHJpYnV0ZSIsImljb24iLCJzZXRBdHRyaWJ1dGUiLCJhbGxJTUdzIiwic3RhbmRhcnQiLCJpbWFnZVRvRGVsIiwicmVtb3ZlQ2hpbGQiLCJqIiwidGhlSU1HIiwic291cmNlSU1HIiwibmV3SU1HIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiaW5wIiwic3RyTmFtZSIsInZhbHVlIiwic2hvd0FsbERlcyIsInNldE5leHRQYXJ0T2ZGb3JtdWxhIiwiaXRtIiwidHJpbSIsIklNR3MiLCJpdGVyIiwic3RybmciLCJJTUciLCJwdXNoIiwic3RyaW5nVG9TZXQiLCJqb2luIiwienl3RGVzIiwiaW1pRGVzIiwicHJ6RGVzIiwiemRhRGVzIiwic2V0TmFtZVRvRGVzIiwibmFtIiwic2V0Tmlja25hbWVUb0RlcyIsImlucEIiLCJzdXJuYW0iLCJzZXRTZW50ZW5jZVRvRGVzIiwiYWxsRGVzIiwidGV4dEFyZWEiLCJhcmVhVmFsdWUiLCJlbmFibGVOZXh0UGFydE9mRm9ybSIsIm5leHRQYXJ0IiwiYWxsT3JuYW1lbnRzIiwidGhpc09ybmFtZW50IiwiYWRkIiwibmV4dE9ybmFtZW50Iiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJ6SW5kZXgiLCJ1c2VyRmxvd1ZpYUZpcnN0RmllbGRzZXQiLCJ1c2VyTmFtZSIsInVzZXJOaWNrIiwidXNlck1vdHRvIiwidXNlck5hbWVBY2NlcHQiLCJ1c2VyTmlja0FjY2VwdCIsInVzZXJNb3R0b0FjY2VwdCIsIm5leHRJdGVtIiwiZXZlbnQiLCJhbGxGaWVsZHNBcmVTZXQiLCJjaGVja0lmRmllbGRzQXJlU2V0IiwiZW5hYmxlTmV4dFBhcnRPZkZvcm11bGEiLCJrZXlDb2RlIiwiZm9jdXMiLCJzZXRUaGlzRGF0YVRvRGVzY3JpcHRpb24iLCJ2YWx1ZUEiLCJ2YWx1ZUIiLCJ2YWx1ZUMiLCJ0b0xvd2VyQ2FzZSIsInBhcnRPZkZvcm0iLCJpbml0aWFsaXplR3VpZGUiLCJoaWRlVXNlckd1aWRlIiwiY2hhbmdlR3VpZGUiLCJvcm5tIiwicm90YXRlQW5kSGlkZUFzaWRlIiwiYnRuIiwiY29udHJvbGxlciIsImFzaWRlIiwidHJhbnNmb3JtIiwiYXciLCJvZmZzZXRXaWR0aCIsImFoIiwib2Zmc2V0SGVpZ2h0Iiwid3NwIiwieCIsInkiLCJ6IiwibGVmdCIsInRvcCIsImd1aWRlIiwicGFydHMiLCJndWlkZVJlYWN0cyIsImFyciIsIml0ZXJhdG9yT2ZQb2ludHNMZWZ0Iiwic3BlbnRPbkF0dGFjayIsIml0ZXJhdG9yIiwiY29udCIsIml0ZXJEZXZpY2UiLCJvcHQiLCJwb2ludHMiLCJiaWxhbnMiLCJkZWxldGF0b3IiLCJjaG9vc2VZb3VyQXZhdGFyIiwiY29udGFpbmVycyIsImF2YXRhcnMiLCJjaG9vc2VUaGlzQXZhdGFyIiwic2V0T25lUGFydE9mQXR0YWNrRGVzY3JpcHRpb24iLCJzeW5jaHJvbml6ZUJhY2tncm91bmRzT2ZPdGhlck9wdHMiLCJlbmFibGVBdHRhY2tzIiwiY2hlY2tlZCIsImF2IiwibmV4dERlc1BhcnQiLCJhbm90aGVyTmV4dERlc1BhcnQiLCJvdGhlckFub3RoZXJOZXh0RGVzUGFydCIsIm9wdGlvbnMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJlbmFibGVkQXR0YWNrcyIsImRpc2FibGVkSXRlbSIsInNlbGVjdGVkIiwiZW5hYmxlZEF0dGFjayIsImluaXRpYWxpemVBdHRhY2tzUGFydCIsIm9uTU91dCIsIm9uTUVudGVyIiwic3luY2hyb25pemVUaGlzQmNrZ3JXaXRoSW1hZ2VCZWx0SG92ZXJCY2tnciIsInN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0bnMiLCJpc0VudGVyIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImJjZ0NvbCIsImdldFByb3BlcnR5VmFsdWUiLCJpbml0IiwiYW1vdW50T2ZQb2ludHMiLCJidG5zIiwiYmVsdHMiLCJhZGRQb2ludCIsImRlbGV0ZVRoaXNJTUciLCJpbml0aWFsaXplVGhpc1NlY3Rpb24iLCJsaXN0QSIsImxpc3RCIiwiaW1hZ2VzQSIsImltYWdlc0IiLCJvcHRzQSIsIm9wdHNCIiwiZHluYW1pemVUaGlzTGlzdCIsImxpc3QiLCJpbWFnZXMiLCJvdGhlckxpc3QiLCJvcHRWYWx1ZSIsImVuYWJsZU5leHRGb3JtUGFydCIsImEiLCJiIiwiaW5pdGlhbGl6ZVRoaXNTZWxlY3QiLCJpdElzQ2xpY2tlZCIsImNoZWNrcyJdLCJtYXBwaW5ncyI6Ijs7O0lBQ0FBLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4Q0MsVUFBOUM7O0lBRUEsU0FBU0EsVUFBVCxHQUFzQjtJQUNwQixNQUFJQyxPQUFPSCxTQUFTSSxnQkFBVCxDQUNULHNGQURTLENBQVg7SUFHQSxNQUFJQyxTQUFTRixLQUFLRyxNQUFsQjs7SUFKb0IsNkJBS1hDLENBTFc7SUFNbEIsUUFBSUMsT0FBT0wsS0FBS0ksQ0FBTCxDQUFYO0lBQ0FDLFNBQUtQLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQVk7SUFDekNRLGFBQU9GLENBQVA7SUFDQUc7SUFDQUMseUJBQW1CSixDQUFuQjtJQUNBSyxpQ0FBMkJMLENBQTNCO0lBQ0FNLGtCQUFZTixDQUFaO0lBQ0QsS0FORDtJQVBrQjs7SUFLcEIsT0FBSyxJQUFJQSxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLE1BQXBCLEVBQTRCRSxHQUE1QixFQUFpQztJQUFBLFVBQXhCQSxDQUF3QjtJQVNoQztJQUNGO0lBQ0QsSUFBSU8sV0FBVyxDQUFmOztJQUVBLFNBQVNKLG9CQUFULEdBQWdDO0lBQzlCSTtJQUNBLE1BQUlBLGFBQWEsQ0FBakIsRUFBb0I7SUFDbEIsUUFBSU4sT0FBT1IsU0FBU2UsYUFBVCxDQUF1Qixh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
