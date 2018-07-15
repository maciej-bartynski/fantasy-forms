(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', initializeGuide);

    function initializeGuide() {
      hideUserGuide();
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
    var arrayWithIters = [0, 0, 0, 0, 0, 0, 0];
    function guideReacts(i) {
      var parts = document.querySelectorAll('fieldset');
      var currentPart = parts[i];
      var position = currentPart.offsetTop;
      if (arrayWithIters[i] === 0) {
        window.scrollTo(0, position);
        arrayWithIters[i] = 1;
        if (controller === 1) {
          rotateAndHideAside();
        }

        var guide = document.querySelector('.aside-foot .user-guide');
        var title = document.querySelector('.aside-foot_title');
        var arr = ['Gdy wpiszesz imię, przydomek i zawołanie, po zatwierdzeniu zmian pojawi się następna część formularza.', 'Po wyborze klasy, pojawi sie okno wyboru ataku spośród uderzeń charakterystycznych dla tej postaci.', 'Wybierz uderzenie, klikając w słowo opisujące je. Przy każdym epitecie widnieje charakterystyka ciosu w Ikonach Żywiołów i Ikonach Uderzeń.', 'Wymyśl nazwe dla uderzenia z poprzedniego kroku. Gdy ją zatwierdzisz, pojawi sie kolejna cześć karty postaci.', 'Po wyborze jednej opcji z każdej listy, pojawi sie kolejna cześć karty postaci.', 'Kliknij tyle opcji, ile chcesz. Każdy zestaw (czyli moc i pietno) zabiera ci pewną ilość punktów Mądrości.', 'Rozdaj pozostałe punkty mądrości na współczynniki postaci: Życie, Mądrość, Ruch i Działanie.'];
        guide.innerText = arr[i];
        var arrB = ['tożsamość:', 'klasa:', 'atak:', 'nazwa ataku:', 'obrona:', 'zdolność i słabość', 'atrybuty:'];
        title.innerText = arrB[i];
      }
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
      },
      iteratorB: function iteratorB(integer) {
        var iterDevice = document.querySelector('.aside-body_how-much');
        this.left = this.left + integer;
        iterDevice.innerText = 'Pozostało' + ' ' + this.left + 'x';
      },
      deletatorB: function deletatorB(integer) {
        var iterDevice = document.querySelector('.aside-body_how-much');
        this.left = this.left - integer;
        iterDevice.innerText = 'Pozostało' + ' ' + this.left + 'x';
      },
      equalizator: function equalizator() {
        var iterDevice = document.querySelector('.aside-body_how-much');
        iterDevice.innerText = 'Pozostało' + ' ' + this.left + 'x';
      }
    };

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
    var setNextPartOfFormulaForTheFirstTime = 0;
    function setStrikeNameToDes(i) {
      var inp = document.querySelector('input[name="nazwauderzenia"]');
      inp.addEventListener('keyup', function () {
        var strName = inp.value;
        var item = document.querySelector('.--des_nazwa-ciosu');
        item.innerText = strName + ' to legendarne';
        showAllDes();
      });
      inp.addEventListener('change', function () {
        var itm = inp.value;
        if (itm.trim() !== '' && setNextPartOfFormulaForTheFirstTime === 0) {
          var strName = inp.value;
          var item = document.querySelector('.--des_nazwa-ciosu');
          item.innerText = strName + ' to legendarne';
          showAllDes();
          setNextPartOfFormula();
          setNextPartOfFormulaForTheFirstTime = 1;
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
      guideReacts(4);
    }

    document.addEventListener("DOMContentLoaded", function () {
      userFlowViaFirstFieldset();
    });

    function userFlowViaFirstFieldset() {
      var userName = document.querySelector('input[name="imie"]');
      var userNick = document.querySelector('input[name="przydomek"]');
      var userMotto = document.querySelector('input[name="zawolanie"]');
      userNameAccept(userName, userNick);
      userNickAccept(userNick, userMotto);
      userMottoAccept(userMotto, userName);
    }

    function userNameAccept(item, nextItem) {
      var partOfForm = document.querySelector(".corpus_section_form_fields");
      item.addEventListener("change", function () {
        var allFieldsAreSet = checkIfFieldsAreSet();
        var term = partOfForm.classList.contains("itIsHidden");
        if (allFieldsAreSet === true && term === true) {
          enableNextPartOfFormula();
        }
        setThisDataToDescription();
      });
      item.addEventListener("keyup", function (event) {
        var allFieldsAreSet = checkIfFieldsAreSet();
        if (event.keyCode === 13) {
          if (allFieldsAreSet !== true) {
            nextItem.focus();
          } else {
            item.blur();
          }
        }
      });
    }
    function userNickAccept(item, nextItem) {
      var partOfForm = document.querySelector(".corpus_section_form_fields");
      item.addEventListener("change", function () {
        var allFieldsAreSet = checkIfFieldsAreSet();
        var term = partOfForm.classList.contains("itIsHidden");
        if (allFieldsAreSet === true && term === true) {
          enableNextPartOfFormula();
        }
        setThisDataToDescription();
      });
      item.addEventListener("keyup", function (event) {
        var allFieldsAreSet = checkIfFieldsAreSet();
        if (event.keyCode === 13) {
          if (allFieldsAreSet !== true) {
            nextItem.focus();
          } else {
            item.blur();
          }
        }
      });
    }
    function userMottoAccept(item, nextItem) {
      var partOfForm = document.querySelector(".corpus_section_form_fields");
      item.addEventListener("change", function () {
        var allFieldsAreSet = checkIfFieldsAreSet();
        var term = partOfForm.classList.contains("itIsHidden");
        if (allFieldsAreSet === true && term === true) {
          enableNextPartOfFormula();
        }
        setThisDataToDescription();
      });
      item.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
          item.blur();
        }
      });
    }

    function checkIfFieldsAreSet() {
      var userName = document.querySelector('input[name="imie"]');
      var userNick = document.querySelector('input[name="przydomek"]');
      var userMotto = document.querySelector('input[name="zawolanie"]');
      var valueA = userName.value;
      var valueB = userNick.value;
      var valueC = userMotto.value;
      if (valueA.trim() !== "") {
        if (valueB.trim() !== "") {
          if (valueC.trim() !== "") {
            return true;
          }
        }
      }
    }

    function enableNextPartOfFormula() {
      var thisOrnament = document.querySelector("img.corpus_section_form_ornament-marker");
      var allOrnaments = document.querySelectorAll("img.corpus_section_form_ornament-marker");
      thisOrnament.setAttribute("src", "./icons/pole.svg");
      thisOrnament.classList.add("itIsPassedThrought");
      var nextOrnament = allOrnaments[1];
      nextOrnament.classList.remove("itIsHidden");
      var partOfForm = document.querySelector(".corpus_section_form_fields");
      partOfForm.classList.remove("itIsHidden");
      guideReacts(1);
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
      iteratorOfPointsLeft.deletator();
      guideReacts(2);
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
          }
        };

        for (var x = 0; x < iter; x++) {
          _loop2(x);
        }
        var selectList = cont.querySelector('select');
        selectList.addEventListener('change', function () {
          for (var q = 0; q < iter; q++) {
            var _opt = options[q];
            if (_opt.value === selectList.value) {
              iteratorOfPointsLeft.iterator(cont, q);
              guideReacts(3);
              synchronizeBackgroundsOfOtherOptns(cont, iter);
              synchronizeThisBckgrWithImageBeltHoverBckgr(_opt, cont, q, true);
            }
          }
        });
      };

      for (var i = 0; i < amount; i++) {
        _loop(i);
      }
    }
    function synchronizeBackgroundsOfOtherOptns(cont, iter) {
      for (var x = 0; x < iter; x++) {
        var belt = cont.querySelectorAll('.corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt')[x];
        belt.style.backgroundColor = 'inherit';
      }
    }

    function synchronizeThisBckgrWithImageBeltHoverBckgr(opt, cont, x, isEnter) {
      var belt = cont.querySelectorAll('.corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt')[x];
      if (isEnter === true) {
        var style = window.getComputedStyle(opt);
        var bcgCol = style.getPropertyValue('background-color');
        belt.style.backgroundColor = bcgCol;
      } else if (isEnter === false) {
        belt.style.backgroundColor = 'inherit';
      }
    }

    document.addEventListener('DOMContentLoaded', init);

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
                        if (iteratorOfPointsLeft.left > 0) {
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
        //amountOfPoints--;
        iteratorOfPointsLeft.left--;
        iteratorOfPointsLeft.equalizator();
        IMG.addEventListener('click', function () {
            deleteThisIMG(IMG);
        });
    }

    function deleteThisIMG(x) {
        x.remove();
        //amountOfPoints++;
        iteratorOfPointsLeft.left++;
        iteratorOfPointsLeft.equalizator();
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
            guideReacts(5);
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
        var costOfThis = [1, 2, 2, 1, 3, 1];
        if (checks[i].checked === true) {
            checks[i].checked = false;
            iteratorOfPointsLeft.iteratorB(costOfThis[i]);
        } else {
            checks[i].checked = true;
            iteratorOfPointsLeft.deletatorB(costOfThis[i]);
            guideReacts(6);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyIuLi9zb3VyY2UvZHluYW1pY3MvYXNpZGUuanMiLCIuLi9zb3VyY2UvZHluYW1pY3MvYXRha2ktc2V0LXR4dC5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9wb2RzdGF3eS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9rbGFzYS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9hdGFraS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9hdHRyeWJzLmpzIiwiLi4vc291cmNlL2R5bmFtaWNzL29icm9ueS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9tb2NlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0aWFsaXplR3VpZGUpXHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplR3VpZGUgKCkge1xyXG4gIGhpZGVVc2VyR3VpZGUoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlVXNlckd1aWRlICgpIHtcclxuICBsZXQgb3JubSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1oZWFkJylcclxuICBvcm5tLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlQW5kSGlkZUFzaWRlKVxyXG4gIGxldCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1ndWlkZV9oaWRlJylcclxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVBbmRIaWRlQXNpZGUpXHJcbn1cclxubGV0IGNvbnRyb2xsZXIgPSAwXHJcblxyXG5mdW5jdGlvbiByb3RhdGVBbmRIaWRlQXNpZGUgKCkge1xyXG4gIGxldCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJylcclxuICBpZiAoY29udHJvbGxlciA9PT0gMCkge1xyXG4gICAgYXNpZGUuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknXHJcbiAgICBsZXQgYXcgPSBhc2lkZS5vZmZzZXRXaWR0aFxyXG4gICAgbGV0IGFoID0gYXNpZGUub2Zmc2V0SGVpZ2h0XHJcbiAgICBsZXQgd3NwID0gYWggKyAoKGF3IC0gYWgpIC8gMilcclxuICAgIGxldCB4ID0gKHdzcCAqIC0xKSArIDIwXHJcbiAgICBsZXQgeSA9IHggKyAncHgnXHJcbiAgICBsZXQgeiA9ICgoYXcgLSBhaCkgLyAyKSArICdweCdcclxuICAgIGFzaWRlLnN0eWxlLmxlZnQgPSB5XHJcbiAgICBhc2lkZS5zdHlsZS50b3AgPSB6XHJcbiAgICBjb250cm9sbGVyID0gMVxyXG4gIH0gZWxzZSBpZiAoY29udHJvbGxlciA9PT0gMSkge1xyXG4gICAgYXNpZGUuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSdcclxuICAgIGFzaWRlLnN0eWxlLmxlZnQgPSAwXHJcbiAgICBhc2lkZS5zdHlsZS50b3AgPSAwXHJcbiAgICBjb250cm9sbGVyID0gMFxyXG4gIH1cclxufVxyXG5sZXQgYXJyYXlXaXRoSXRlcnMgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMF1cclxuZXhwb3J0IGZ1bmN0aW9uIGd1aWRlUmVhY3RzIChpKSB7XHJcbiAgbGV0IHBhcnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZmllbGRzZXQnKVxyXG4gIGxldCBjdXJyZW50UGFydCA9IHBhcnRzW2ldXHJcbiAgbGV0IHBvc2l0aW9uID0gY3VycmVudFBhcnQub2Zmc2V0VG9wXHJcbiAgaWYgKGFycmF5V2l0aEl0ZXJzW2ldID09PSAwKSB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgcG9zaXRpb24pXHJcbiAgICBhcnJheVdpdGhJdGVyc1tpXSA9IDFcclxuICAgIGlmIChjb250cm9sbGVyID09PSAxKSB7XHJcbiAgICAgIHJvdGF0ZUFuZEhpZGVBc2lkZSgpXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGd1aWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWZvb3QgLnVzZXItZ3VpZGUnKVxyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWZvb3RfdGl0bGUnKVxyXG4gICAgbGV0IGFyciA9IFtcclxuICAgICAgJ0dkeSB3cGlzemVzeiBpbWnEmSwgcHJ6eWRvbWVrIGkgemF3b8WCYW5pZSwgcG8gemF0d2llcmR6ZW5pdSB6bWlhbiBwb2phd2kgc2nEmSBuYXN0xJlwbmEgY3rEmcWbxIcgZm9ybXVsYXJ6YS4nLFxyXG4gICAgICAnUG8gd3lib3J6ZSBrbGFzeSwgcG9qYXdpIHNpZSBva25vIHd5Ym9ydSBhdGFrdSBzcG/Fm3LDs2QgdWRlcnplxYQgY2hhcmFrdGVyeXN0eWN6bnljaCBkbGEgdGVqIHBvc3RhY2kuJyxcclxuICAgICAgJ1d5YmllcnogdWRlcnplbmllLCBrbGlrYWrEhWMgdyBzxYJvd28gb3Bpc3VqxIVjZSBqZS4gUHJ6eSBrYcW8ZHltIGVwaXRlY2llIHdpZG5pZWplIGNoYXJha3RlcnlzdHlrYSBjaW9zdSB3IElrb25hY2ggxbt5d2lvxYLDs3cgaSBJa29uYWNoIFVkZXJ6ZcWELicsXHJcbiAgICAgICdXeW15xZtsIG5hendlIGRsYSB1ZGVyemVuaWEgeiBwb3ByemVkbmllZ28ga3Jva3UuIEdkeSBqxIUgemF0d2llcmR6aXN6LCBwb2phd2kgc2llIGtvbGVqbmEgY3plxZvEhyBrYXJ0eSBwb3N0YWNpLicsXHJcbiAgICAgICdQbyB3eWJvcnplIGplZG5laiBvcGNqaSB6IGthxbxkZWogbGlzdHksIHBvamF3aSBzaWUga29sZWpuYSBjemXFm8SHIGthcnR5IHBvc3RhY2kuJyxcclxuICAgICAgJ0tsaWtuaWogdHlsZSBvcGNqaSwgaWxlIGNoY2Vzei4gS2HFvGR5IHplc3RhdyAoY3p5bGkgbW9jIGkgcGlldG5vKSB6YWJpZXJhIGNpIHBld27EhSBpbG/Fm8SHIHB1bmt0w7N3IE3EhWRyb8WbY2kuJyxcclxuICAgICAgJ1JvemRhaiBwb3pvc3RhxYJlIHB1bmt0eSBtxIVkcm/Fm2NpIG5hIHdzcMOzxYJjenlubmlraSBwb3N0YWNpOiDFu3ljaWUsIE3EhWRyb8WbxIcsIFJ1Y2ggaSBEemlhxYJhbmllLidcclxuICAgIF1cclxuICAgIGd1aWRlLmlubmVyVGV4dCA9IGFycltpXVxyXG4gICAgbGV0IGFyckIgPSBbXHJcbiAgICAgICd0b8W8c2Ftb8WbxIc6JyxcclxuICAgICAgJ2tsYXNhOicsXHJcbiAgICAgICdhdGFrOicsXHJcbiAgICAgICduYXp3YSBhdGFrdTonLFxyXG4gICAgICAnb2Jyb25hOicsXHJcbiAgICAgICd6ZG9sbm/Fm8SHIGkgc8WCYWJvxZvEhycsXHJcbiAgICAgICdhdHJ5YnV0eTonXHJcbiAgICBdXHJcbiAgICB0aXRsZS5pbm5lclRleHQgPSBhcnJCW2ldXHJcbiAgfVxyXG59XHJcblxyXG52YXIgaXRlcmF0b3JPZlBvaW50c0xlZnQgPSB7XHJcbiAgbGVmdDogMjAsXHJcbiAgc3BlbnRPbkF0dGFjazogMCxcclxuICBpdGVyYXRvcihjb250LCB4KSB7XHJcbiAgICBsZXQgaXRlckRldmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1ib2R5X2hvdy1tdWNoJylcclxuICAgIGxldCBvcHQgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnKVt4XVxyXG4gICAgbGV0IHBvaW50cyA9IG9wdC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVxyXG4gICAgbGV0IGFtb3VudCA9IChwb2ludHMubGVuZ3RoIC0gMSlcclxuICAgIGxldCBiaWxhbnMgPSBhbW91bnQgLSB0aGlzLnNwZW50T25BdHRhY2tcclxuICAgIHRoaXMubGVmdCA9IHRoaXMubGVmdCAtIGJpbGFuc1xyXG4gICAgdGhpcy5zcGVudE9uQXR0YWNrID0gYW1vdW50XHJcbiAgICBpdGVyRGV2aWNlLmlubmVyVGV4dCA9ICdQb3pvc3RhxYJvJyArICcgJyArIHRoaXMubGVmdCArICd4J1xyXG4gIH0sXHJcbiAgZGVsZXRhdG9yKCkge1xyXG4gICAgbGV0IGl0ZXJEZXZpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtYm9keV9ob3ctbXVjaCcpXHJcbiAgICB0aGlzLmxlZnQgPSB0aGlzLmxlZnQgKyB0aGlzLnNwZW50T25BdHRhY2tcclxuICAgIHRoaXMuc3BlbnRPbkF0dGFjayA9IDBcclxuICAgIGl0ZXJEZXZpY2UuaW5uZXJUZXh0ID0gJ1Bvem9zdGHFgm8nICsgJyAnICsgdGhpcy5sZWZ0ICsgJ3gnXHJcbiAgfSxcclxuICBpdGVyYXRvckIoaW50ZWdlcikge1xyXG4gICAgbGV0IGl0ZXJEZXZpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtYm9keV9ob3ctbXVjaCcpXHJcbiAgICB0aGlzLmxlZnQgPSB0aGlzLmxlZnQgKyBpbnRlZ2VyXHJcbiAgICBpdGVyRGV2aWNlLmlubmVyVGV4dCA9ICdQb3pvc3RhxYJvJyArICcgJyArIHRoaXMubGVmdCArICd4J1xyXG4gIH0sXHJcbiAgZGVsZXRhdG9yQihpbnRlZ2VyKSB7XHJcbiAgICBsZXQgaXRlckRldmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1ib2R5X2hvdy1tdWNoJylcclxuICAgIHRoaXMubGVmdCA9IHRoaXMubGVmdCAtIGludGVnZXJcclxuICAgIGl0ZXJEZXZpY2UuaW5uZXJUZXh0ID0gJ1Bvem9zdGHFgm8nICsgJyAnICsgdGhpcy5sZWZ0ICsgJ3gnXHJcbiAgfSxcclxuICBlcXVhbGl6YXRvcigpIHtcclxuICAgIGxldCBpdGVyRGV2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWJvZHlfaG93LW11Y2gnKVxyXG4gICAgaXRlckRldmljZS5pbm5lclRleHQgPSAnUG96b3N0YcWCbycgKyAnICcgKyB0aGlzLmxlZnQgKyAneCdcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgaXRlcmF0b3JPZlBvaW50c0xlZnRcclxuIiwiJ3VzZSBzdHJpY3QnXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0aWFsaXplKVxyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuICBsZXQgb3B0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfc2VsZWN0LWxpc3Qgb3B0aW9uJ1xyXG4gIClcclxuICBsZXQgYW1vdW50ID0gb3B0cy5sZW5ndGhcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XHJcbiAgICBsZXQgaXRlbSA9IG9wdHNbaV1cclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNldElNRyhpKVxyXG4gICAgICBlbmFibGVTdHJpa2VOYW1lUGFydCgpXHJcbiAgICAgIHNldFN0cmlrZU5hbWVUb0RlcyhpKVxyXG4gICAgICBzZXRQYXJ0T2ZBdHRhY2tEZXNjcmlwdGlvbihpKVxyXG4gICAgICBzZXRGb3JjZURlcyhpKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxubGV0IG9ubHlPbmNlID0gMFxyXG5cclxuZnVuY3Rpb24gZW5hYmxlU3RyaWtlTmFtZVBhcnQoKSB7XHJcbiAgb25seU9uY2UrK1xyXG4gIGlmIChvbmx5T25jZSA9PT0gMSkge1xyXG4gICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RyaWtlTmFtZScpXHJcbiAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3N0cmlrZU5hbWUnKVxyXG4gIH1cclxufVxyXG5cclxuaW1wb3J0IHtndWlkZVJlYWN0c30gZnJvbSAnLi9hc2lkZS5qcyc7XHJcbmZ1bmN0aW9uIHNldFBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uKGkpIHtcclxuICBsZXQgZGVzUGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Agc3Bhbi4tLWRlc19lcGl0ZXQnKVxyXG4gIGRlc1BhcnQuY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJylcclxuICBsZXQgYXJyYXkgPSBbXHJcbiAgICAnYnJ1dGFsbmUnLFxyXG4gICAgJ25pZXByemV3aWR5d2FsbmUnLFxyXG4gICAgJ3d5xId3aWN6b25lJyxcclxuICAgICduaWV6YXdvZG5lJyxcclxuICAgICdwcmVjeXp5am5lJyxcclxuICAgICd6bWFzb3dhbmUnLFxyXG4gICAgJ3BvZHN0xJlwbmUnLFxyXG4gICAgJ3d5cmFjaG93YW5lJyxcclxuICAgICd6ZHJhZHppZWNraWUnLFxyXG4gICAgJ3N6YWxlxYRjemUnLFxyXG4gICAgJ29wcmFjb3dhbmUgdyBsYWJvcmF0b3JpdW0gYWxjaGVtaWN6bnltJyxcclxuICAgICduaWVwb3dzdHJ6eW1hbmUnLFxyXG4gICAgJ3fFgmFkY3plJyxcclxuICAgICdtcm9jem5lJyxcclxuICAgICd0YWplbW5lJyxcclxuICAgICd3xZtjaWVrxYJlJyxcclxuICAgICd3c3BpZXJhbmUgbW9jxIUgb3RjaMWCYW5pJyxcclxuICAgICdwcnplc3ljb25lIHrFgsSFIG1vY8SFJ1xyXG4gIF1cclxuICBkZXNQYXJ0LmlubmVyVGV4dCA9ICcsICcgKyBhcnJheVtpXVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRJTUcoaSkge1xyXG4gIGxldCBiZWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0J1xyXG4gIClbaV1cclxuICBsZXQgaW1hZyA9IGJlbHQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylbMF1cclxuICBsZXQgYXR0cnliID0gaW1hZy5nZXRBdHRyaWJ1dGUoJ3NyYycpXHJcbiAgbGV0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1wbGF0ZV9pbWdfaWNvbicpXHJcbiAgaWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIGF0dHJ5YilcclxuICBsZXQgYWxsSU1HcyA9IGJlbHQucXVlcnlTZWxlY3RvckFsbCgnaW1nJykubGVuZ3RoXHJcbiAgbGV0IHN0YW5kYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tc3RhbmRhcnRfaW1nX2Jja2cnKVxyXG4gIHdoaWxlIChzdGFuZGFydC5xdWVyeVNlbGVjdG9yKCdJTUcnKSAhPT0gbnVsbCkge1xyXG4gICAgbGV0IGltYWdlVG9EZWwgPSBzdGFuZGFydC5xdWVyeVNlbGVjdG9yKCdJTUcnKVxyXG4gICAgc3RhbmRhcnQucmVtb3ZlQ2hpbGQoaW1hZ2VUb0RlbClcclxuICB9XHJcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBhbGxJTUdzOyBqKyspIHtcclxuICAgIGlmIChqID4gMCkge1xyXG4gICAgICBsZXQgdGhlSU1HID0gYmVsdC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVtqXVxyXG4gICAgICBsZXQgc291cmNlSU1HID0gdGhlSU1HLmdldEF0dHJpYnV0ZSgnc3JjJylcclxuICAgICAgbGV0IG5ld0lNRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgIG5ld0lNRy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNvdXJjZUlNRylcclxuICAgICAgc3RhbmRhcnQuYXBwZW5kQ2hpbGQobmV3SU1HKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5sZXQgc2V0TmV4dFBhcnRPZkZvcm11bGFGb3JUaGVGaXJzdFRpbWU9MDtcclxuZnVuY3Rpb24gc2V0U3RyaWtlTmFtZVRvRGVzKGkpIHtcclxuICBsZXQgaW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm5hendhdWRlcnplbmlhXCJdJylcclxuICBpbnAuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgc3RyTmFtZSA9IGlucC52YWx1ZTtcclxuICAgIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX25hendhLWNpb3N1Jyk7XHJcbiAgICBpdGVtLmlubmVyVGV4dCA9IHN0ck5hbWUgKyAnIHRvIGxlZ2VuZGFybmUnO1xyXG4gICAgc2hvd0FsbERlcygpO1xyXG4gIH0pXHJcbiAgaW5wLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBpdG0gPSBpbnAudmFsdWVcclxuICAgIGlmIChpdG0udHJpbSgpICE9PSAnJyYmc2V0TmV4dFBhcnRPZkZvcm11bGFGb3JUaGVGaXJzdFRpbWU9PT0wKSB7XHJcbiAgICAgIGxldCBzdHJOYW1lID0gaW5wLnZhbHVlXHJcbiAgICAgIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX25hendhLWNpb3N1JylcclxuICAgICAgaXRlbS5pbm5lclRleHQgPSBzdHJOYW1lICsgJyB0byBsZWdlbmRhcm5lJ1xyXG4gICAgICBzaG93QWxsRGVzKCk7XHJcbiAgICAgIHNldE5leHRQYXJ0T2ZGb3JtdWxhKCk7XHJcbiAgICAgIHNldE5leHRQYXJ0T2ZGb3JtdWxhRm9yVGhlRmlyc3RUaW1lPTE7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Rm9yY2VEZXMoaSkge1xyXG4gIGxldCBiZWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0J1xyXG4gIClbaV07XHJcbiAgbGV0IElNR3MgPSBiZWx0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpXHJcbiAgbGV0IGl0ZXIgPSBJTUdzLmxlbmd0aFxyXG4gIGxldCBzdHJuZyA9IFtdXHJcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBpdGVyOyBqKyspIHtcclxuICAgIGxldCBJTUcgPSBJTUdzW2pdXHJcbiAgICBsZXQgYXR0cnliID0gSU1HLmdldEF0dHJpYnV0ZSgnc3JjJylcclxuICAgIGlmIChqICE9PSAwKSB7XHJcbiAgICAgIGlmIChhdHRyeWIgPT09ICdpY29ucy9icm9uLWJhcmJhLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCdkb2RhdGtvd8SFIG1vY8SFIHVkZXJ6ZW5pb3fEhScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvYnJvbi1jemFyLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCdkb2RhdGtvd8SFIG1vY8SFIGN6YXJub2tzacSZc2vEhScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvYnJvbi1zdHJ6LnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCdkb2RhdGtvd3ltIGt1bnN6dGVtIHN0cnplbGVja2ltJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy9icm9uLXN6YWwuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ2RvZGF0a293eW0gc3phbGXFhHN0d2VtJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy9icm9uLXpkcmEuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ25pZXNwb2R6aWFueW0gemRyYWRsaXd5bSBjaW9zZW0nKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL3p5dy1vZ2llbi5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnxbx5d2lvxYJlbSBvZ25pYScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvenl3LXJvemtsYWQuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ8W8eXdpb8WCZW0gcm96a8WCYWR1JylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy96eXctd29kLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCfFvHl3aW/FgmVtIHdvZHknKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL3p5dy16bWlhbmEuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ8W8eXdpb8WCZW0gem1pYW55JylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy96eXctenl3aWEuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ8W8eXdpb8WCZW0gxbx5d2lpJylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCd3xYJhc27EhSBtxIVkcm/Fm2NpxIUgxbx5d2lvxYLDs3cgaSB0YWxlbnTDs3cnKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCBzdHJpbmdUb1NldCA9IHN0cm5nLmpvaW4oJywgJyk7XHJcbiAgbGV0IHp5d0RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc196eXdpb2wnKTtcclxuICBsZXQgaW1pRGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX2ltaWUnKTtcclxuICBsZXQgcHJ6RGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3Byenlkb21laycpO1xyXG4gIGxldCB6ZGFEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfemRhbmllJyk7XHJcbiAgenl3RGVzLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpO1xyXG4gIGltaURlcy5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKTtcclxuICBwcnpEZXMuY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJyk7XHJcbiAgemRhRGVzLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpO1xyXG4gIHp5d0Rlcy5pbm5lclRleHQgPSBzdHJpbmdUb1NldCArICcuJztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0TmFtZVRvRGVzKCkge1xyXG4gIGxldCBpbnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiaW1pZVwiXScpXHJcbiAgbGV0IG5hbSA9IGlucC52YWx1ZVxyXG4gIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX2ltaWUnKVxyXG4gIGl0ZW0uaW5uZXJUZXh0ID0gbmFtICsgJyAnO1xyXG4gIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJylcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0Tmlja25hbWVUb0RlcygpIHtcclxuICBsZXQgaW5wQiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcnp5ZG9tZWtcIl0nKVxyXG4gIGxldCBzdXJuYW0gPSBpbnBCLnZhbHVlXHJcbiAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfcHJ6eWRvbWVrJylcclxuICBpdGVtLmlubmVyVGV4dCA9IHN1cm5hbTtcclxuICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFNlbnRlbmNlVG9EZXMoKSB7XHJcbiAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfemRhbmllJylcclxuICBpdGVtLmlubmVyVGV4dCA9ICcgd3ptYWNuaWEgc3fDs2ogYXRhayAnXHJcbiAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93QWxsRGVzKCkge1xyXG4gIGxldCBhbGxEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXMnKVxyXG4gIGFsbERlcy5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXROZXh0UGFydE9mRm9ybXVsYSgpIHtcclxuICBsZXQgdGV4dEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibmF6d2F1ZGVyemVuaWFcIl0nKTtcclxuICBsZXQgYXJlYVZhbHVlID0gKHRleHRBcmVhLnZhbHVlKS50cmltKCk7XHJcbiAgaWYgKGFyZWFWYWx1ZSAhPT0gJycpIHtcclxuICAgIGVuYWJsZU5leHRQYXJ0T2ZGb3JtKCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbmFibGVOZXh0UGFydE9mRm9ybSgpIHtcclxuICBsZXQgbmV4dFBhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNldC1jJyk7XHJcbiAgbmV4dFBhcnQuY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0hpZGRlbicpO1xyXG4gIGxldCBhbGxPcm5hbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcuY29ycHVzX3NlY3Rpb25fZm9ybV9vcm5hbWVudC1tYXJrZXInKTtcclxuICBsZXQgdGhpc09ybmFtZW50ID0gYWxsT3JuYW1lbnRzWzFdO1xyXG4gIHRoaXNPcm5hbWVudC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ljb25zL3BvbGUuc3ZnJyk7XHJcbiAgdGhpc09ybmFtZW50LmNsYXNzTGlzdC5hZGQoJ2l0SXNQYXNzZWRUaHJvdWdodCcpO1xyXG4gIGxldCBuZXh0T3JuYW1lbnQgPSBhbGxPcm5hbWVudHNbMl07XHJcbiAgbmV4dE9ybmFtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2l0SXNIaWRkZW4nKTtcclxuICB0aGlzT3JuYW1lbnQuc3R5bGUubWFyZ2luQm90dG9tPVwiLTFyZW1cIjtcclxuICB0aGlzT3JuYW1lbnQuc3R5bGUuekluZGV4PVwiMVwiO1xyXG4gIG5leHRQYXJ0LnN0eWxlLnpJbmRleD1cIjJcIjtcclxuICBndWlkZVJlYWN0cyg0KTtcclxufSIsImltcG9ydCB7IHNldE5hbWVUb0RlcyB9IGZyb20gXCIuL2F0YWtpLXNldC10eHQuanNcIjtcclxuaW1wb3J0IHsgc2V0Tmlja25hbWVUb0RlcyB9IGZyb20gXCIuL2F0YWtpLXNldC10eHQuanNcIjtcclxuaW1wb3J0IHsgc2V0U2VudGVuY2VUb0RlcyB9IGZyb20gXCIuL2F0YWtpLXNldC10eHQuanNcIjtcclxuaW1wb3J0IHsgZ3VpZGVSZWFjdHMgfSBmcm9tIFwiLi9hc2lkZS5qc1wiO1xyXG4oXCJ1c2Ugc3RyaWN0XCIpO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcclxuICB1c2VyRmxvd1ZpYUZpcnN0RmllbGRzZXQoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiB1c2VyRmxvd1ZpYUZpcnN0RmllbGRzZXQoKSB7XHJcbiAgbGV0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImltaWVcIl0nKTtcclxuICBsZXQgdXNlck5pY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJ6eWRvbWVrXCJdJyk7XHJcbiAgbGV0IHVzZXJNb3R0byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJ6YXdvbGFuaWVcIl0nKTtcclxuICB1c2VyTmFtZUFjY2VwdCh1c2VyTmFtZSwgdXNlck5pY2spO1xyXG4gIHVzZXJOaWNrQWNjZXB0KHVzZXJOaWNrLCB1c2VyTW90dG8pO1xyXG4gIHVzZXJNb3R0b0FjY2VwdCh1c2VyTW90dG8sIHVzZXJOYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXNlck5hbWVBY2NlcHQoaXRlbSwgbmV4dEl0ZW0pIHtcclxuICBsZXQgcGFydE9mRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNcIik7XHJcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IGFsbEZpZWxkc0FyZVNldCA9IGNoZWNrSWZGaWVsZHNBcmVTZXQoKTtcclxuICAgIGxldCB0ZXJtID0gcGFydE9mRm9ybS5jbGFzc0xpc3QuY29udGFpbnMoXCJpdElzSGlkZGVuXCIpO1xyXG4gICAgaWYgKGFsbEZpZWxkc0FyZVNldCA9PT0gdHJ1ZSAmJiB0ZXJtID09PSB0cnVlKSB7XHJcbiAgICAgIGVuYWJsZU5leHRQYXJ0T2ZGb3JtdWxhKCk7XHJcbiAgICB9XHJcbiAgICBzZXRUaGlzRGF0YVRvRGVzY3JpcHRpb24oKTtcclxuICB9KTtcclxuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgbGV0IGFsbEZpZWxkc0FyZVNldCA9IGNoZWNrSWZGaWVsZHNBcmVTZXQoKTtcclxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICBpZiAoYWxsRmllbGRzQXJlU2V0ICE9PSB0cnVlKSB7XHJcbiAgICAgICAgbmV4dEl0ZW0uZm9jdXMoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpdGVtLmJsdXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHVzZXJOaWNrQWNjZXB0KGl0ZW0sIG5leHRJdGVtKSB7XHJcbiAgbGV0IHBhcnRPZkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzXCIpO1xyXG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuICAgIGxldCBhbGxGaWVsZHNBcmVTZXQgPSBjaGVja0lmRmllbGRzQXJlU2V0KCk7XHJcbiAgICBsZXQgdGVybSA9IHBhcnRPZkZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXRJc0hpZGRlblwiKTtcclxuICAgIGlmIChhbGxGaWVsZHNBcmVTZXQgPT09IHRydWUgJiYgdGVybSA9PT0gdHJ1ZSkge1xyXG4gICAgICBlbmFibGVOZXh0UGFydE9mRm9ybXVsYSgpO1xyXG4gICAgfVxyXG4gICAgc2V0VGhpc0RhdGFUb0Rlc2NyaXB0aW9uKCk7XHJcbiAgfSk7XHJcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGxldCBhbGxGaWVsZHNBcmVTZXQgPSBjaGVja0lmRmllbGRzQXJlU2V0KCk7XHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgaWYgKGFsbEZpZWxkc0FyZVNldCAhPT0gdHJ1ZSkge1xyXG4gICAgICAgIG5leHRJdGVtLmZvY3VzKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaXRlbS5ibHVyKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiB1c2VyTW90dG9BY2NlcHQoaXRlbSwgbmV4dEl0ZW0pIHtcclxuICBsZXQgcGFydE9mRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNcIik7XHJcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IGFsbEZpZWxkc0FyZVNldCA9IGNoZWNrSWZGaWVsZHNBcmVTZXQoKTtcclxuICAgIGxldCB0ZXJtID0gcGFydE9mRm9ybS5jbGFzc0xpc3QuY29udGFpbnMoXCJpdElzSGlkZGVuXCIpO1xyXG4gICAgaWYgKGFsbEZpZWxkc0FyZVNldCA9PT0gdHJ1ZSAmJiB0ZXJtID09PSB0cnVlKSB7XHJcbiAgICAgIGVuYWJsZU5leHRQYXJ0T2ZGb3JtdWxhKCk7XHJcbiAgICB9XHJcbiAgICBzZXRUaGlzRGF0YVRvRGVzY3JpcHRpb24oKTtcclxuICB9KTtcclxuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgIGl0ZW0uYmx1cigpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0lmRmllbGRzQXJlU2V0KCkge1xyXG4gIGxldCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJpbWllXCJdJyk7XHJcbiAgbGV0IHVzZXJOaWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByenlkb21la1wiXScpO1xyXG4gIGxldCB1c2VyTW90dG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiemF3b2xhbmllXCJdJyk7XHJcbiAgbGV0IHZhbHVlQSA9IHVzZXJOYW1lLnZhbHVlO1xyXG4gIGxldCB2YWx1ZUIgPSB1c2VyTmljay52YWx1ZTtcclxuICBsZXQgdmFsdWVDID0gdXNlck1vdHRvLnZhbHVlO1xyXG4gIGlmICh2YWx1ZUEudHJpbSgpICE9PSBcIlwiKSB7XHJcbiAgICBpZiAodmFsdWVCLnRyaW0oKSAhPT0gXCJcIikge1xyXG4gICAgICBpZiAodmFsdWVDLnRyaW0oKSAhPT0gXCJcIikge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbmFibGVOZXh0UGFydE9mRm9ybXVsYSgpIHtcclxuICBsZXQgdGhpc09ybmFtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiaW1nLmNvcnB1c19zZWN0aW9uX2Zvcm1fb3JuYW1lbnQtbWFya2VyXCJcclxuICApO1xyXG4gIGxldCBhbGxPcm5hbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgXCJpbWcuY29ycHVzX3NlY3Rpb25fZm9ybV9vcm5hbWVudC1tYXJrZXJcIlxyXG4gICk7XHJcbiAgdGhpc09ybmFtZW50LnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vaWNvbnMvcG9sZS5zdmdcIik7XHJcbiAgdGhpc09ybmFtZW50LmNsYXNzTGlzdC5hZGQoXCJpdElzUGFzc2VkVGhyb3VnaHRcIik7XHJcbiAgbGV0IG5leHRPcm5hbWVudCA9IGFsbE9ybmFtZW50c1sxXTtcclxuICBuZXh0T3JuYW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIml0SXNIaWRkZW5cIik7XHJcbiAgbGV0IHBhcnRPZkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzXCIpO1xyXG4gIHBhcnRPZkZvcm0uY2xhc3NMaXN0LnJlbW92ZShcIml0SXNIaWRkZW5cIik7XHJcbiAgZ3VpZGVSZWFjdHMoMSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFRoaXNEYXRhVG9EZXNjcmlwdGlvbigpIHtcclxuICBzZXROYW1lVG9EZXMoKTtcclxuICBzZXROaWNrbmFtZVRvRGVzKCk7XHJcbiAgc2V0U2VudGVuY2VUb0RlcygpO1xyXG59XHJcbiIsImltcG9ydCBpdGVyYXRvck9mUG9pbnRzTGVmdCBmcm9tICcuL2FzaWRlLmpzJztcclxuaW1wb3J0IHtndWlkZVJlYWN0c30gZnJvbSAnLi9hc2lkZS5qcyc7XHJcbid1c2Ugc3RyaWN0JztcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGNob29zZVlvdXJBdmF0YXIpXHJcbmZ1bmN0aW9uIGNob29zZVlvdXJBdmF0YXIgKCkge1xyXG4gIGxldCBjb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXInKVxyXG4gIGxldCBhdmF0YXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3JhZGlvLWxhYi1jb250YWluZXInKVxyXG4gIGxldCBhbW91bnQgPSBhdmF0YXJzLmxlbmd0aFxyXG4gIGZvciAobGV0IGkgPSAwO2kgPCBhbW91bnQ7aSsrKSB7XHJcbiAgICBsZXQgaXRlbSA9IGF2YXRhcnNbaV1cclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNob29zZVRoaXNBdmF0YXIoaXRlbSwgYXZhdGFycywgYW1vdW50KVxyXG4gICAgICBzZXRPbmVQYXJ0T2ZBdHRhY2tEZXNjcmlwdGlvbihpKVxyXG4gICAgICBzeW5jaHJvbml6ZUJhY2tncm91bmRzT2ZPdGhlck9wdHMoY29udGFpbmVycylcclxuICAgICAgZW5hYmxlQXR0YWNrcyhpKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gY2hvb3NlVGhpc0F2YXRhciAoaXRlbSwgYXZhdGFycywgYW1vdW50KSB7XHJcbiAgaXRlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmNoZWNrZWQgPSB0cnVlO1xyXG4gIGZvciAobGV0IGk9MDsgaTxhbW91bnQ7IGkrKyl7XHJcbiAgICAgIGxldCBhdiA9IGF2YXRhcnNbaV07XHJcbiAgICAgIGF2LmNsYXNzTGlzdC5yZW1vdmUoJ2lzQ2xpY2tlZCcpO1xyXG4gIH1cclxuICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2lzQ2xpY2tlZCcpO1xyXG4gIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0LmRlbGV0YXRvcigpO1xyXG4gIGd1aWRlUmVhY3RzKDIpO1xyXG59XHJcbmZ1bmN0aW9uIHNldE9uZVBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uIChpKSB7XHJcbiAgbGV0IGRlc1BhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwIHNwYW4uLS1kZXNfa2xhc2EnKVxyXG4gIGxldCBhcnJheSA9IFtcclxuICAgICcgdWRlcnplbmllIGJyb25pxIUgYnJ1dGFsbsSFLicsXHJcbiAgICAnIHVkZXJ6ZW5pZSBicm9uacSFIHN0cnplbGVja8SFLicsXHJcbiAgICAnIHVkZXJ6ZW5pZSBicm9uacSFIHpkcmFkemllY2vEhS4nLFxyXG4gICAgJyB1ZGVyemVuaWUgYnJvbmnEhSBzemFsZcWEY3rEhS4nLFxyXG4gICAgJyB1ZGVyemVuaWUgYnJvbmnEhSBzemFybGF0YcWEc2vEhS4nLFxyXG4gICAgJyB1ZGVyemVuaWUgYnJvbmnEhSBsdWIgY3p5bWtvbHdpZWssIGNvIHdwYWRuaWUga2FyxYJvd2kgdyDFgmFwc2thLidcclxuICBdXHJcbiAgZGVzUGFydC5pbm5lclRleHQgPSBhcnJheVtpXVxyXG4gIGxldCBuZXh0RGVzUGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Agc3Bhbi4tLWRlc19lcGl0ZXQnKTtcclxuICBuZXh0RGVzUGFydC5jbGFzc0xpc3QuYWRkKCdpdHNIaWRkZW4nKTtcclxuICBsZXQgYW5vdGhlck5leHREZXNQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3p5d2lvbCcpO1xyXG4gIGFub3RoZXJOZXh0RGVzUGFydC5jbGFzc0xpc3QuYWRkKCdpdHNIaWRkZW4nKTtcclxuICBsZXQgb3RoZXJBbm90aGVyTmV4dERlc1BhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfaW1pZScpO1xyXG4gIG90aGVyQW5vdGhlck5leHREZXNQYXJ0LmNsYXNzTGlzdC5hZGQoJ2l0c0hpZGRlbicpO1xyXG4gIGxldCBwcnpEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfcHJ6eWRvbWVrJyk7XHJcbiAgbGV0IHpkYURlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc196ZGFuaWUnKTtcclxuICBwcnpEZXMuY2xhc3NMaXN0LmFkZCgnaXRzSGlkZGVuJyk7XHJcbiAgemRhRGVzLmNsYXNzTGlzdC5hZGQoJ2l0c0hpZGRlbicpO1xyXG59XHJcbmZ1bmN0aW9uIHN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0cyAoY29udGFpbmVycykge1xyXG4gIGxldCBhbW91bnQgPSBjb250YWluZXJzLmxlbmd0aFxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50OyBpKyspIHtcclxuICAgIGxldCBjb250ID0gY29udGFpbmVyc1tpXVxyXG4gICAgbGV0IG9wdGlvbnMgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpXHJcbiAgICBsZXQgaXRlciA9IG9wdGlvbnMubGVuZ3RoXHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGl0ZXI7IHgrKykge1xyXG4gICAgICBsZXQgYmVsdCA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdCcpW3hdXHJcbiAgICAgIGJlbHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2luaGVyaXQnXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGVuYWJsZUF0dGFja3MgKGkpIHtcclxuICBsZXQgZW5hYmxlZEF0dGFja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcicpXHJcbiAgZm9yIChsZXQgeCA9IDA7IHggPCA2OyB4KyspIHtcclxuICAgIGxldCBkaXNhYmxlZEl0ZW0gPSBlbmFibGVkQXR0YWNrc1t4XVxyXG4gICAgZGlzYWJsZWRJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2VuYWJsZWQnKVxyXG4gICAgbGV0IG9wdHMgPSBkaXNhYmxlZEl0ZW0ucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJylcclxuICAgIGxldCBhbW91bnQgPSBvcHRzLmxlbmd0aFxyXG4gICAgZm9yIChsZXQgaiA9IDA7aiA8IGFtb3VudDtqKyspIHtcclxuICAgICAgaWYgKG9wdHNbal0uc2VsZWN0ZWQgPT09IHRydWUpIHtcclxuICAgICAgICBvcHRzW2pdLnNlbGVjdGVkID0gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBsZXQgZW5hYmxlZEF0dGFjayA9IGVuYWJsZWRBdHRhY2tzW2ldXHJcbiAgZW5hYmxlZEF0dGFjay5jbGFzc0xpc3QuYWRkKCdlbmFibGVkJylcclxufVxyXG4iLCJpbXBvcnQgaXRlcmF0b3JPZlBvaW50c0xlZnQgZnJvbSAnLi9hc2lkZS5qcydcclxuaW1wb3J0IHsgZ3VpZGVSZWFjdHMgfSBmcm9tICcuL2FzaWRlLmpzJ1xyXG4ndXNlIHN0cmljdCdcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRpYWxpemVBdHRhY2tzUGFydClcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVBdHRhY2tzUGFydCAoKSB7XHJcbiAgbGV0IGNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcicpXHJcbiAgbGV0IGFtb3VudCA9IGNvbnRhaW5lcnMubGVuZ3RoXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xyXG4gICAgbGV0IGNvbnQgPSBjb250YWluZXJzW2ldXHJcbiAgICBsZXQgb3B0aW9ucyA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJylcclxuICAgIGxldCBpdGVyID0gb3B0aW9ucy5sZW5ndGhcclxuICAgIGZvciAobGV0IHggPSAwO3ggPCBpdGVyO3grKykge1xyXG4gICAgICBsZXQgb3B0ID0gb3B0aW9uc1t4XVxyXG4gICAgICBvcHQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBvbk1PdXQpXHJcbiAgICAgIG9wdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgb25NRW50ZXIpXHJcbiAgICAgIGZ1bmN0aW9uIG9uTUVudGVyICgpIHtcclxuICAgICAgICBpZiAob3B0LnNlbGVjdGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgc3luY2hyb25pemVUaGlzQmNrZ3JXaXRoSW1hZ2VCZWx0SG92ZXJCY2tncihvcHQsIGNvbnQsIHgsIHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGZ1bmN0aW9uIG9uTU91dCAoKSB7XHJcbiAgICAgICAgaWYgKG9wdC5zZWxlY3RlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIHN5bmNocm9uaXplVGhpc0Jja2dyV2l0aEltYWdlQmVsdEhvdmVyQmNrZ3Iob3B0LCBjb250LCB4LCBmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBzZWxlY3RMaXN0ID0gY29udC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKVxyXG4gICAgc2VsZWN0TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGZvciAobGV0IHEgPSAwOyBxIDwgaXRlcjtxKyspIHtcclxuICAgICAgICBsZXQgb3B0ID0gb3B0aW9uc1txXVxyXG4gICAgICAgIGlmIChvcHQudmFsdWUgPT09IHNlbGVjdExpc3QudmFsdWUpIHtcclxuICAgICAgICAgIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0Lml0ZXJhdG9yKGNvbnQsIHEpXHJcbiAgICAgICAgICBndWlkZVJlYWN0cygzKVxyXG4gICAgICAgICAgc3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRucyhjb250LCBpdGVyKVxyXG4gICAgICAgICAgc3luY2hyb25pemVUaGlzQmNrZ3JXaXRoSW1hZ2VCZWx0SG92ZXJCY2tncihvcHQsIGNvbnQsIHEsIHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBzeW5jaHJvbml6ZUJhY2tncm91bmRzT2ZPdGhlck9wdG5zIChjb250LCBpdGVyKSB7XHJcbiAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVyOyB4KyspIHtcclxuICAgIGxldCBiZWx0ID0gY29udC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0JylbeF1cclxuICAgIGJlbHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2luaGVyaXQnXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzeW5jaHJvbml6ZVRoaXNCY2tncldpdGhJbWFnZUJlbHRIb3ZlckJja2dyIChvcHQsIGNvbnQsIHgsIGlzRW50ZXIpIHtcclxuICBsZXQgYmVsdCA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdCcpW3hdXHJcbiAgaWYgKGlzRW50ZXIgPT09IHRydWUpIHtcclxuICAgIGxldCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG9wdClcclxuICAgIGxldCBiY2dDb2wgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJylcclxuICAgIGJlbHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmNnQ29sXHJcbiAgfSBlbHNlIGlmIChpc0VudGVyID09PSBmYWxzZSkge1xyXG4gICAgYmVsdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5oZXJpdCdcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IGl0ZXJhdG9yT2ZQb2ludHNMZWZ0IGZyb20gJy4vYXNpZGUuanMnO1xyXG4ndXNlIHN0cmljdCc7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0KTtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBsZXQgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkcy0yX2ZpZWxkc2V0LWRfY29udGFpbmVyX2F0cnliIC4tLWJlbHRfaWNvbi1jb250YWluZXInKTtcclxuICAgIGxldCBiZWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkcy0yX2ZpZWxkc2V0LWRfY29udGFpbmVyX2F0cnliIC4tLWJlbHRfYm9keS1jb250YWluZXJfYm9keScpO1xyXG4gICAgbGV0IGl0ZXIgPSBidG5zLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcjsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGkgPiA0KSB7XHJcbiAgICAgICAgICAgIGxldCBhdHRyeWIgPSBidG5zW2ldO1xyXG4gICAgICAgICAgICBsZXQgYmVsdCA9IGJlbHRzW2ldO1xyXG4gICAgICAgICAgICBhdHRyeWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3JPZlBvaW50c0xlZnQubGVmdCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRQb2ludChiZWx0KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvaW50KGJlbHQpIHtcclxuICAgIGxldCBJTUcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJTUcnKTtcclxuICAgIElNRy5zZXRBdHRyaWJ1dGUoJ3NyYycsICdpY29ucy9pa29uYS1wb3RlZy5zdmcnKTtcclxuICAgIGJlbHQuYXBwZW5kQ2hpbGQoSU1HKTtcclxuICAgIC8vYW1vdW50T2ZQb2ludHMtLTtcclxuICAgIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0LmxlZnQtLTtcclxuICAgIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0LmVxdWFsaXphdG9yKCk7XHJcbiAgICBJTUcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZGVsZXRlVGhpc0lNRyhJTUcpXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVUaGlzSU1HKHgpIHtcclxuICAgIHgucmVtb3ZlKCk7XHJcbiAgICAvL2Ftb3VudE9mUG9pbnRzKys7XHJcbiAgICBpdGVyYXRvck9mUG9pbnRzTGVmdC5sZWZ0Kys7XHJcbiAgICBpdGVyYXRvck9mUG9pbnRzTGVmdC5lcXVhbGl6YXRvcigpO1xyXG59IiwiaW1wb3J0IHtndWlkZVJlYWN0c30gZnJvbSAnLi9hc2lkZS5qcyc7XHJcblwidXNlIHN0cmljdFwiO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0aWFsaXplVGhpc1NlY3Rpb24pO1xyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZVRoaXNTZWN0aW9uKCkge1xyXG4gICAgbGV0IGxpc3RBID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc2V0LWMgI3phc2xvbmFcIlxyXG4gICAgKTtcclxuICAgIGxldCBsaXN0QiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNldC1jICNwYW5jZXJ6XCJcclxuICAgICk7XHJcbiAgICBsZXQgaW1hZ2VzQSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNldC1jX2ltZ3NfaW1nLmFcIlxyXG4gICAgKTtcclxuICAgIGxldCBpbWFnZXNCID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICBcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc2V0LWNfaW1nc19pbWcuYlwiXHJcbiAgICApO1xyXG4gICAgbGV0IG9wdHNBID0gbGlzdEEucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvblwiKTtcclxuICAgIGxldCBvcHRzQiA9IGxpc3RCLnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb25cIik7XHJcbiAgICBkeW5hbWl6ZVRoaXNMaXN0KGxpc3RBLCBvcHRzQSwgaW1hZ2VzQSwgbGlzdEIpO1xyXG4gICAgZHluYW1pemVUaGlzTGlzdChsaXN0Qiwgb3B0c0IsIGltYWdlc0IsIGxpc3RBKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHluYW1pemVUaGlzTGlzdChsaXN0LCBvcHRzLCBpbWFnZXMsIG90aGVyTGlzdCkge1xyXG4gICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBsaXN0LnZhbHVlO1xyXG4gICAgICAgIGxldCBpdGVyID0gb3B0cy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpdGVyIC0gMTsgaisrKSB7XHJcbiAgICAgICAgICAgIGltYWdlc1tqXS5jbGFzc0xpc3QuYWRkKFwiaXRJc1Vuc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBvcHQgPSBvcHRzW2ldO1xyXG4gICAgICAgICAgICBsZXQgb3B0VmFsdWUgPSBvcHQudmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gb3B0VmFsdWUgJiYgaSAhPT0gMykge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJpdElzVW5zZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbmFibGVOZXh0Rm9ybVBhcnQobGlzdCwgb3RoZXJMaXN0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlbmFibGVOZXh0Rm9ybVBhcnQobGlzdCwgb3RoZXJMaXN0KSB7XHJcbiAgICBsZXQgYSA9IGxpc3QudmFsdWU7XHJcbiAgICBsZXQgYiA9IG90aGVyTGlzdC52YWx1ZTtcclxuICAgIGlmIChhICE9PSBcIlwiICYmIGIgIT09IFwiXCIpIHtcclxuICAgICAgICBsZXQgbmV4dFBhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHMtMicpO1xyXG4gICAgICAgIG5leHRQYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2l0SXNIaWRkZW4nKTtcclxuICAgICAgICBsZXQgYWxsT3JuYW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLmNvcnB1c19zZWN0aW9uX2Zvcm1fb3JuYW1lbnQtbWFya2VyJyk7XHJcbiAgICAgICAgbGV0IHRoaXNPcm5hbWVudCA9IGFsbE9ybmFtZW50c1syXTtcclxuICAgICAgICB0aGlzT3JuYW1lbnQuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pY29ucy9wb2xlLnN2ZycpO1xyXG4gICAgICAgIHRoaXNPcm5hbWVudC5jbGFzc0xpc3QuYWRkKCdpdElzUGFzc2VkVGhyb3VnaHQnKTtcclxuICAgICAgICBsZXQgbmV4dE9ybmFtZW50ID0gYWxsT3JuYW1lbnRzWzNdO1xyXG4gICAgICAgIG5leHRPcm5hbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbiAgICAgICAgZ3VpZGVSZWFjdHMoNSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgaXRlcmF0b3JPZlBvaW50c0xlZnQgZnJvbSAnLi9hc2lkZS5qcyc7XHJcbmltcG9ydCB7Z3VpZGVSZWFjdHN9IGZyb20gJy4vYXNpZGUuanMnO1xyXG4ndXNlIHN0cmljdCc7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0aWFsaXplVGhpc1NlbGVjdClcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVUaGlzU2VsZWN0KCkge1xyXG4gICAgbGV0IG9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHMtMl9maWVsZHNldC1kX2NvbnRhaW5lcl9tb2NlJyk7XHJcbiAgICBsZXQgaXRlciA9IG9wdGlvbnMubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVyOyBpKyspIHtcclxuICAgICAgICBsZXQgb3B0ID0gb3B0aW9uc1tpXTtcclxuICAgICAgICBvcHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGl0SXNDbGlja2VkKG9wdCwgb3B0aW9ucywgaXRlciwgaSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBpdElzQ2xpY2tlZChvcHQsIG9wdHMsIGl0ZXIsIGkpIHtcclxuICAgIGxldCBjaGVja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwibW9jLXBpZXRub1wiXScpO1xyXG4gICAgbGV0IGNvc3RPZlRoaXMgPSBbMSwyLDIsMSwzLDFdO1xyXG4gICAgaWYgKGNoZWNrc1tpXS5jaGVja2VkPT09dHJ1ZSl7XHJcbiAgICAgICAgY2hlY2tzW2ldLmNoZWNrZWQ9ZmFsc2U7XHJcbiAgICAgICAgaXRlcmF0b3JPZlBvaW50c0xlZnQuaXRlcmF0b3JCKGNvc3RPZlRoaXNbaV0pO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgY2hlY2tzW2ldLmNoZWNrZWQ9dHJ1ZTtcclxuICAgICAgICBpdGVyYXRvck9mUG9pbnRzTGVmdC5kZWxldGF0b3JCKGNvc3RPZlRoaXNbaV0pO1xyXG4gICAgICAgIGd1aWRlUmVhY3RzKDYpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBpdGVyOyBqKyspIHtcclxuICAgICAgICBpZiAoY2hlY2tzW2pdLmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgb3B0c1tqXS5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGVja3Nbal0uY2hlY2tlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgb3B0c1tqXS5jbGFzc0xpc3QuYWRkKCdpdElzSGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0aWFsaXplR3VpZGUiLCJoaWRlVXNlckd1aWRlIiwib3JubSIsInF1ZXJ5U2VsZWN0b3IiLCJyb3RhdGVBbmRIaWRlQXNpZGUiLCJidG4iLCJjb250cm9sbGVyIiwiYXNpZGUiLCJzdHlsZSIsInRyYW5zZm9ybSIsImF3Iiwib2Zmc2V0V2lkdGgiLCJhaCIsIm9mZnNldEhlaWdodCIsIndzcCIsIngiLCJ5IiwieiIsImxlZnQiLCJ0b3AiLCJhcnJheVdpdGhJdGVycyIsImd1aWRlUmVhY3RzIiwiaSIsInBhcnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImN1cnJlbnRQYXJ0IiwicG9zaXRpb24iLCJvZmZzZXRUb3AiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImd1aWRlIiwidGl0bGUiLCJhcnIiLCJpbm5lclRleHQiLCJhcnJCIiwiaXRlcmF0b3JPZlBvaW50c0xlZnQiLCJzcGVudE9uQXR0YWNrIiwiaXRlcmF0b3IiLCJjb250IiwiaXRlckRldmljZSIsIm9wdCIsInBvaW50cyIsImFtb3VudCIsImxlbmd0aCIsImJpbGFucyIsImRlbGV0YXRvciIsIml0ZXJhdG9yQiIsImludGVnZXIiLCJkZWxldGF0b3JCIiwiZXF1YWxpemF0b3IiLCJpbml0aWFsaXplIiwib3B0cyIsIml0ZW0iLCJzZXRJTUciLCJlbmFibGVTdHJpa2VOYW1lUGFydCIsInNldFN0cmlrZU5hbWVUb0RlcyIsInNldFBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uIiwic2V0Rm9yY2VEZXMiLCJvbmx5T25jZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImRlc1BhcnQiLCJhcnJheSIsImJlbHQiLCJpbWFnIiwiYXR0cnliIiwiZ2V0QXR0cmlidXRlIiwiaWNvbiIsInNldEF0dHJpYnV0ZSIsImFsbElNR3MiLCJzdGFuZGFydCIsImltYWdlVG9EZWwiLCJyZW1vdmVDaGlsZCIsImoiLCJ0aGVJTUciLCJzb3VyY2VJTUciLCJuZXdJTUciLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJzZXROZXh0UGFydE9mRm9ybXVsYUZvclRoZUZpcnN0VGltZSIsImlucCIsInN0ck5hbWUiLCJ2YWx1ZSIsInNob3dBbGxEZXMiLCJpdG0iLCJ0cmltIiwic2V0TmV4dFBhcnRPZkZvcm11bGEiLCJJTUdzIiwiaXRlciIsInN0cm5nIiwiSU1HIiwicHVzaCIsInN0cmluZ1RvU2V0Iiwiam9pbiIsInp5d0RlcyIsImltaURlcyIsInByekRlcyIsInpkYURlcyIsInNldE5hbWVUb0RlcyIsIm5hbSIsInNldE5pY2tuYW1lVG9EZXMiLCJpbnBCIiwic3VybmFtIiwic2V0U2VudGVuY2VUb0RlcyIsImFsbERlcyIsInRleHRBcmVhIiwiYXJlYVZhbHVlIiwiZW5hYmxlTmV4dFBhcnRPZkZvcm0iLCJuZXh0UGFydCIsImFsbE9ybmFtZW50cyIsInRoaXNPcm5hbWVudCIsImFkZCIsIm5leHRPcm5hbWVudCIsIm1hcmdpbkJvdHRvbSIsInpJbmRleCIsInVzZXJGbG93VmlhRmlyc3RGaWVsZHNldCIsInVzZXJOYW1lIiwidXNlck5pY2siLCJ1c2VyTW90dG8iLCJ1c2VyTmFtZUFjY2VwdCIsInVzZXJOaWNrQWNjZXB0IiwidXNlck1vdHRvQWNjZXB0IiwibmV4dEl0ZW0iLCJwYXJ0T2ZGb3JtIiwiYWxsRmllbGRzQXJlU2V0IiwiY2hlY2tJZkZpZWxkc0FyZVNldCIsInRlcm0iLCJjb250YWlucyIsImVuYWJsZU5leHRQYXJ0T2ZGb3JtdWxhIiwic2V0VGhpc0RhdGFUb0Rlc2NyaXB0aW9uIiwiZXZlbnQiLCJrZXlDb2RlIiwiZm9jdXMiLCJibHVyIiwidmFsdWVBIiwidmFsdWVCIiwidmFsdWVDIiwiY2hvb3NlWW91ckF2YXRhciIsImNvbnRhaW5lcnMiLCJhdmF0YXJzIiwiY2hvb3NlVGhpc0F2YXRhciIsInNldE9uZVBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uIiwic3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRzIiwiZW5hYmxlQXR0YWNrcyIsImNoZWNrZWQiLCJhdiIsIm5leHREZXNQYXJ0IiwiYW5vdGhlck5leHREZXNQYXJ0Iiwib3RoZXJBbm90aGVyTmV4dERlc1BhcnQiLCJvcHRpb25zIiwiYmFja2dyb3VuZENvbG9yIiwiZW5hYmxlZEF0dGFja3MiLCJkaXNhYmxlZEl0ZW0iLCJzZWxlY3RlZCIsImVuYWJsZWRBdHRhY2siLCJpbml0aWFsaXplQXR0YWNrc1BhcnQiLCJvbk1PdXQiLCJvbk1FbnRlciIsInN5bmNocm9uaXplVGhpc0Jja2dyV2l0aEltYWdlQmVsdEhvdmVyQmNrZ3IiLCJzZWxlY3RMaXN0IiwicSIsInN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0bnMiLCJpc0VudGVyIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImJjZ0NvbCIsImdldFByb3BlcnR5VmFsdWUiLCJpbml0IiwiYnRucyIsImJlbHRzIiwiYWRkUG9pbnQiLCJkZWxldGVUaGlzSU1HIiwiaW5pdGlhbGl6ZVRoaXNTZWN0aW9uIiwibGlzdEEiLCJsaXN0QiIsImltYWdlc0EiLCJpbWFnZXNCIiwib3B0c0EiLCJvcHRzQiIsImR5bmFtaXplVGhpc0xpc3QiLCJsaXN0IiwiaW1hZ2VzIiwib3RoZXJMaXN0Iiwib3B0VmFsdWUiLCJlbmFibGVOZXh0Rm9ybVBhcnQiLCJhIiwiYiIsImluaXRpYWxpemVUaGlzU2VsZWN0IiwiaXRJc0NsaWNrZWQiLCJjaGVja3MiLCJjb3N0T2ZUaGlzIl0sIm1hcHBpbmdzIjoiOzs7SUFBQUEsU0FBU0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDQyxlQUE5Qzs7SUFFQSxTQUFTQSxlQUFULEdBQTRCO0lBQzFCQztJQUNEOztJQUVELFNBQVNBLGFBQVQsR0FBMEI7SUFDeEIsTUFBSUMsT0FBT0osU0FBU0ssYUFBVCxDQUF1QixhQUF2QixDQUFYO0lBQ0FELE9BQUtILGdCQUFMLENBQXNCLE9BQXRCLEVBQStCSyxrQkFBL0I7SUFDQSxNQUFJQyxNQUFNUCxTQUFTSyxhQUFULENBQXVCLGtCQUF2QixDQUFWO0lBQ0FFLE1BQUlOLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCSyxrQkFBOUI7SUFDRDtJQUNELElBQUlFLGFBQWEsQ0FBakI7O0lBRUEsU0FBU0Ysa0JBQVQs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
