(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', initializeGuide);

    function initializeGuide() {
      hideUserGuide();
      setTimeout(function () {
        var aside = document.querySelector('aside');
        aside.classList.add('onLoad');
      }, 0);
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
        var headBelt = aside.querySelector('.aside-head');
        var piece = headBelt.offsetHeight;
        aside.style.transform = 'rotate(90deg)';
        var aw = aside.offsetWidth;
        var ah = aside.offsetHeight;
        var wsp = ah + (aw - ah) / 2;
        var x = wsp * -1 + piece;
        var y = x + 'px';
        var z = (aw - ah) / 2 + 'px';
        aside.style.left = y;
        aside.style.bottom = z;
        controller = 1;
      } else if (controller === 1) {
        aside.style.transform = 'rotate(0deg)';
        aside.style.left = 0;
        aside.style.bottom = 0;
        controller = 0;
      }
    }
    var arrayWithIters = [0, 0, 0, 0, 0, 0, 0];
    function guideReacts(i) {
      var aside = document.querySelector('aside');
      aside.classList.remove('onAdvice');
      aside.classList.remove('onAdviceB');
      var parts = document.querySelectorAll('fieldset');
      var currentPart = parts[i];
      var position = currentPart.offsetTop;
      if (arrayWithIters[i] === 0) {
        window.scrollTo(0, position);
        arrayWithIters[i] = 1;
        var guide = document.querySelector('.aside-foot .user-guide');
        var title = document.querySelector('.aside-foot_title');
        var arr = ['Gdy wpiszesz imię, przydomek i zawołanie, po zatwierdzeniu zmian pojawi się następna część formularza.', 'Po wyborze klasy, pojawi sie okno wyboru ataku spośród uderzeń charakterystycznych dla tej postaci.', 'Wybierz uderzenie, klikając w słowo opisujące je. Przy każdym epitecie widnieje charakterystyka ciosu w Ikonach Żywiołów i Ikonach Uderzeń.', 'Wymyśl nazwe dla uderzenia z poprzedniego kroku. Gdy ją zatwierdzisz, pojawi sie kolejna cześć karty postaci.', 'Po wyborze jednej opcji z każdej listy, pojawi sie kolejna cześć karty postaci.', 'Kliknij tyle opcji, ile chcesz. Każdy zestaw (czyli moc i pietno) zabiera ci pewną ilość punktów Mądrości.', 'Rozdaj pozostałe punkty mądrości na współczynniki postaci: Życie, Mądrość, Ruch i Działanie.'];
        guide.innerText = arr[i];
        var arrB = ['tożsamość:', 'klasa:', 'atak:', 'nazwa ataku:', 'obrona:', 'zdolność i słabość', 'atrybuty:'];
        title.innerText = arrB[i];
        isSomethingNewToSay();
      }
    }
    function isSomethingNewToSay() {
      var aside = document.querySelector('aside');

      if (controller === 1) {
        var headBelt = aside.querySelector('.aside-head');
        var piece = headBelt.offsetHeight;
        aside.style.transform = 'rotate(90deg)';
        var aw = aside.offsetWidth;
        var ah = aside.offsetHeight;
        var wsp = ah + (aw - ah) / 2;
        var x = wsp * -1 + piece;
        var y = x + 'px';
        var z = (aw - ah) / 2 + 'px';
        aside.style.left = y;
        aside.style.bottom = z;
        aside.classList.add('onAdvice');
      } else if (controller === 0) {
        aside.classList.add('onAdviceB');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyIuLi9zb3VyY2UvZHluYW1pY3MvYXNpZGUuanMiLCIuLi9zb3VyY2UvZHluYW1pY3MvYXRha2ktc2V0LXR4dC5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9wb2RzdGF3eS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9rbGFzYS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9hdGFraS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9hdHRyeWJzLmpzIiwiLi4vc291cmNlL2R5bmFtaWNzL29icm9ueS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9tb2NlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0aWFsaXplR3VpZGUpXHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplR3VpZGUgKCkge1xyXG4gIGhpZGVVc2VyR3VpZGUoKTtcclxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpO1xyXG4gICAgYXNpZGUuY2xhc3NMaXN0LmFkZCgnb25Mb2FkJyk7XHJcbiAgfSwgMClcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZVVzZXJHdWlkZSAoKSB7XHJcbiAgbGV0IG9ybm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtaGVhZCcpXHJcbiAgb3JubS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZUFuZEhpZGVBc2lkZSlcclxuICBsZXQgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItZ3VpZGVfaGlkZScpXHJcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlQW5kSGlkZUFzaWRlKVxyXG59XHJcbmxldCBjb250cm9sbGVyID0gMFxyXG5mdW5jdGlvbiByb3RhdGVBbmRIaWRlQXNpZGUgKCkge1xyXG4gIGxldCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJylcclxuICBpZiAoY29udHJvbGxlciA9PT0gMCkge1xyXG4gICAgbGV0IGhlYWRCZWx0ID0gYXNpZGUucXVlcnlTZWxlY3RvcignLmFzaWRlLWhlYWQnKTtcclxuICAgIGxldCBwaWVjZSA9IGhlYWRCZWx0Lm9mZnNldEhlaWdodDtcclxuICAgIGFzaWRlLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJ1xyXG4gICAgbGV0IGF3ID0gYXNpZGUub2Zmc2V0V2lkdGhcclxuICAgIGxldCBhaCA9IGFzaWRlLm9mZnNldEhlaWdodFxyXG4gICAgbGV0IHdzcCA9IGFoICsgKChhdyAtIGFoKSAvIDIpXHJcbiAgICBsZXQgeCA9ICh3c3AgKiAtMSkgKyBwaWVjZVxyXG4gICAgbGV0IHkgPSB4ICsgJ3B4J1xyXG4gICAgbGV0IHogPSAoKGF3IC0gYWgpIC8gMikgKyAncHgnXHJcbiAgICBhc2lkZS5zdHlsZS5sZWZ0ID0geVxyXG4gICAgYXNpZGUuc3R5bGUuYm90dG9tID0gelxyXG4gICAgY29udHJvbGxlciA9IDFcclxuICB9IGVsc2UgaWYgKGNvbnRyb2xsZXIgPT09IDEpIHtcclxuICAgIGFzaWRlLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknXHJcbiAgICBhc2lkZS5zdHlsZS5sZWZ0ID0gMFxyXG4gICAgYXNpZGUuc3R5bGUuYm90dG9tID0gMFxyXG4gICAgY29udHJvbGxlciA9IDBcclxuICB9XHJcbn1cclxubGV0IGFycmF5V2l0aEl0ZXJzID0gWzAsIDAsIDAsIDAsIDAsIDAsIDBdXHJcbmV4cG9ydCBmdW5jdGlvbiBndWlkZVJlYWN0cyAoaSkge1xyXG4gIGxldCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJyk7XHJcbiAgYXNpZGUuY2xhc3NMaXN0LnJlbW92ZSgnb25BZHZpY2UnKTtcclxuICBhc2lkZS5jbGFzc0xpc3QucmVtb3ZlKCdvbkFkdmljZUInKTtcclxuICBsZXQgcGFydHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmaWVsZHNldCcpXHJcbiAgbGV0IGN1cnJlbnRQYXJ0ID0gcGFydHNbaV1cclxuICBsZXQgcG9zaXRpb24gPSBjdXJyZW50UGFydC5vZmZzZXRUb3BcclxuICBpZiAoYXJyYXlXaXRoSXRlcnNbaV0gPT09IDApIHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbygwLCBwb3NpdGlvbilcclxuICAgIGFycmF5V2l0aEl0ZXJzW2ldID0gMVxyXG4gICAgbGV0IGd1aWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWZvb3QgLnVzZXItZ3VpZGUnKVxyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWZvb3RfdGl0bGUnKVxyXG4gICAgbGV0IGFyciA9IFtcclxuICAgICAgJ0dkeSB3cGlzemVzeiBpbWnEmSwgcHJ6eWRvbWVrIGkgemF3b8WCYW5pZSwgcG8gemF0d2llcmR6ZW5pdSB6bWlhbiBwb2phd2kgc2nEmSBuYXN0xJlwbmEgY3rEmcWbxIcgZm9ybXVsYXJ6YS4nLFxyXG4gICAgICAnUG8gd3lib3J6ZSBrbGFzeSwgcG9qYXdpIHNpZSBva25vIHd5Ym9ydSBhdGFrdSBzcG/Fm3LDs2QgdWRlcnplxYQgY2hhcmFrdGVyeXN0eWN6bnljaCBkbGEgdGVqIHBvc3RhY2kuJyxcclxuICAgICAgJ1d5YmllcnogdWRlcnplbmllLCBrbGlrYWrEhWMgdyBzxYJvd28gb3Bpc3VqxIVjZSBqZS4gUHJ6eSBrYcW8ZHltIGVwaXRlY2llIHdpZG5pZWplIGNoYXJha3RlcnlzdHlrYSBjaW9zdSB3IElrb25hY2ggxbt5d2lvxYLDs3cgaSBJa29uYWNoIFVkZXJ6ZcWELicsXHJcbiAgICAgICdXeW15xZtsIG5hendlIGRsYSB1ZGVyemVuaWEgeiBwb3ByemVkbmllZ28ga3Jva3UuIEdkeSBqxIUgemF0d2llcmR6aXN6LCBwb2phd2kgc2llIGtvbGVqbmEgY3plxZvEhyBrYXJ0eSBwb3N0YWNpLicsXHJcbiAgICAgICdQbyB3eWJvcnplIGplZG5laiBvcGNqaSB6IGthxbxkZWogbGlzdHksIHBvamF3aSBzaWUga29sZWpuYSBjemXFm8SHIGthcnR5IHBvc3RhY2kuJyxcclxuICAgICAgJ0tsaWtuaWogdHlsZSBvcGNqaSwgaWxlIGNoY2Vzei4gS2HFvGR5IHplc3RhdyAoY3p5bGkgbW9jIGkgcGlldG5vKSB6YWJpZXJhIGNpIHBld27EhSBpbG/Fm8SHIHB1bmt0w7N3IE3EhWRyb8WbY2kuJyxcclxuICAgICAgJ1JvemRhaiBwb3pvc3RhxYJlIHB1bmt0eSBtxIVkcm/Fm2NpIG5hIHdzcMOzxYJjenlubmlraSBwb3N0YWNpOiDFu3ljaWUsIE3EhWRyb8WbxIcsIFJ1Y2ggaSBEemlhxYJhbmllLidcclxuICAgIF1cclxuICAgIGd1aWRlLmlubmVyVGV4dCA9IGFycltpXVxyXG4gICAgbGV0IGFyckIgPSBbXHJcbiAgICAgICd0b8W8c2Ftb8WbxIc6JyxcclxuICAgICAgJ2tsYXNhOicsXHJcbiAgICAgICdhdGFrOicsXHJcbiAgICAgICduYXp3YSBhdGFrdTonLFxyXG4gICAgICAnb2Jyb25hOicsXHJcbiAgICAgICd6ZG9sbm/Fm8SHIGkgc8WCYWJvxZvEhycsXHJcbiAgICAgICdhdHJ5YnV0eTonXHJcbiAgICBdXHJcbiAgICB0aXRsZS5pbm5lclRleHQgPSBhcnJCW2ldXHJcbiAgICBpc1NvbWV0aGluZ05ld1RvU2F5KCk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGlzU29tZXRoaW5nTmV3VG9TYXkoKXtcclxuICBsZXQgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpO1xyXG4gIFxyXG4gIGlmIChjb250cm9sbGVyPT09MSl7XHJcbiAgICBsZXQgaGVhZEJlbHQgPSBhc2lkZS5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtaGVhZCcpO1xyXG4gICAgbGV0IHBpZWNlID0gaGVhZEJlbHQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgYXNpZGUuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknXHJcbiAgICBsZXQgYXcgPSBhc2lkZS5vZmZzZXRXaWR0aFxyXG4gICAgbGV0IGFoID0gYXNpZGUub2Zmc2V0SGVpZ2h0XHJcbiAgICBsZXQgd3NwID0gYWggKyAoKGF3IC0gYWgpIC8gMilcclxuICAgIGxldCB4ID0gKHdzcCAqIC0xKSArIHBpZWNlXHJcbiAgICBsZXQgeSA9IHggKyAncHgnXHJcbiAgICBsZXQgeiA9ICgoYXcgLSBhaCkgLyAyKSArICdweCdcclxuICAgIGFzaWRlLnN0eWxlLmxlZnQgPSB5XHJcbiAgICBhc2lkZS5zdHlsZS5ib3R0b20gPSB6XHJcbiAgICBhc2lkZS5jbGFzc0xpc3QuYWRkKCdvbkFkdmljZScpO1xyXG4gIH1cclxuICBlbHNlIGlmIChjb250cm9sbGVyPT09MCl7XHJcbiAgICBhc2lkZS5jbGFzc0xpc3QuYWRkKCdvbkFkdmljZUInKTtcclxuICB9XHJcbn1cclxudmFyIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0ID0ge1xyXG4gIGxlZnQ6IDIwLFxyXG4gIHNwZW50T25BdHRhY2s6IDAsXHJcbiAgaXRlcmF0b3IoY29udCwgeCkge1xyXG4gICAgbGV0IGl0ZXJEZXZpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtYm9keV9ob3ctbXVjaCcpXHJcbiAgICBsZXQgb3B0ID0gY29udC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0JylbeF1cclxuICAgIGxldCBwb2ludHMgPSBvcHQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylcclxuICAgIGxldCBhbW91bnQgPSAocG9pbnRzLmxlbmd0aCAtIDEpXHJcbiAgICBsZXQgYmlsYW5zID0gYW1vdW50IC0gdGhpcy5zcGVudE9uQXR0YWNrXHJcbiAgICB0aGlzLmxlZnQgPSB0aGlzLmxlZnQgLSBiaWxhbnNcclxuICAgIHRoaXMuc3BlbnRPbkF0dGFjayA9IGFtb3VudFxyXG4gICAgaXRlckRldmljZS5pbm5lclRleHQgPSAnUG96b3N0YcWCbycgKyAnICcgKyB0aGlzLmxlZnQgKyAneCdcclxuICB9LFxyXG4gIGRlbGV0YXRvcigpIHtcclxuICAgIGxldCBpdGVyRGV2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWJvZHlfaG93LW11Y2gnKVxyXG4gICAgdGhpcy5sZWZ0ID0gdGhpcy5sZWZ0ICsgdGhpcy5zcGVudE9uQXR0YWNrXHJcbiAgICB0aGlzLnNwZW50T25BdHRhY2sgPSAwXHJcbiAgICBpdGVyRGV2aWNlLmlubmVyVGV4dCA9ICdQb3pvc3RhxYJvJyArICcgJyArIHRoaXMubGVmdCArICd4J1xyXG4gIH0sXHJcbiAgaXRlcmF0b3JCKGludGVnZXIpIHtcclxuICAgIGxldCBpdGVyRGV2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWJvZHlfaG93LW11Y2gnKVxyXG4gICAgdGhpcy5sZWZ0ID0gdGhpcy5sZWZ0ICsgaW50ZWdlclxyXG4gICAgaXRlckRldmljZS5pbm5lclRleHQgPSAnUG96b3N0YcWCbycgKyAnICcgKyB0aGlzLmxlZnQgKyAneCdcclxuICB9LFxyXG4gIGRlbGV0YXRvckIoaW50ZWdlcikge1xyXG4gICAgbGV0IGl0ZXJEZXZpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtYm9keV9ob3ctbXVjaCcpXHJcbiAgICB0aGlzLmxlZnQgPSB0aGlzLmxlZnQgLSBpbnRlZ2VyXHJcbiAgICBpdGVyRGV2aWNlLmlubmVyVGV4dCA9ICdQb3pvc3RhxYJvJyArICcgJyArIHRoaXMubGVmdCArICd4J1xyXG4gIH0sXHJcbiAgZXF1YWxpemF0b3IoKSB7XHJcbiAgICBsZXQgaXRlckRldmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1ib2R5X2hvdy1tdWNoJylcclxuICAgIGl0ZXJEZXZpY2UuaW5uZXJUZXh0ID0gJ1Bvem9zdGHFgm8nICsgJyAnICsgdGhpcy5sZWZ0ICsgJ3gnXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGl0ZXJhdG9yT2ZQb2ludHNMZWZ0XHJcbiIsIid1c2Ugc3RyaWN0J1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdGlhbGl6ZSlcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcbiAgbGV0IG9wdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX3NlbGVjdC1saXN0IG9wdGlvbidcclxuICApXHJcbiAgbGV0IGFtb3VudCA9IG9wdHMubGVuZ3RoXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xyXG4gICAgbGV0IGl0ZW0gPSBvcHRzW2ldXHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBzZXRJTUcoaSlcclxuICAgICAgZW5hYmxlU3RyaWtlTmFtZVBhcnQoKVxyXG4gICAgICBzZXRTdHJpa2VOYW1lVG9EZXMoaSlcclxuICAgICAgc2V0UGFydE9mQXR0YWNrRGVzY3JpcHRpb24oaSlcclxuICAgICAgc2V0Rm9yY2VEZXMoaSlcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbmxldCBvbmx5T25jZSA9IDBcclxuXHJcbmZ1bmN0aW9uIGVuYWJsZVN0cmlrZU5hbWVQYXJ0KCkge1xyXG4gIG9ubHlPbmNlKytcclxuICBpZiAob25seU9uY2UgPT09IDEpIHtcclxuICAgIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0cmlrZU5hbWUnKVxyXG4gICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzdHJpa2VOYW1lJylcclxuICB9XHJcbn1cclxuXHJcbmltcG9ydCB7Z3VpZGVSZWFjdHN9IGZyb20gJy4vYXNpZGUuanMnO1xyXG5mdW5jdGlvbiBzZXRQYXJ0T2ZBdHRhY2tEZXNjcmlwdGlvbihpKSB7XHJcbiAgbGV0IGRlc1BhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwIHNwYW4uLS1kZXNfZXBpdGV0JylcclxuICBkZXNQYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpXHJcbiAgbGV0IGFycmF5ID0gW1xyXG4gICAgJ2JydXRhbG5lJyxcclxuICAgICduaWVwcnpld2lkeXdhbG5lJyxcclxuICAgICd3ecSHd2ljem9uZScsXHJcbiAgICAnbmllemF3b2RuZScsXHJcbiAgICAncHJlY3l6eWpuZScsXHJcbiAgICAnem1hc293YW5lJyxcclxuICAgICdwb2RzdMSZcG5lJyxcclxuICAgICd3eXJhY2hvd2FuZScsXHJcbiAgICAnemRyYWR6aWVja2llJyxcclxuICAgICdzemFsZcWEY3plJyxcclxuICAgICdvcHJhY293YW5lIHcgbGFib3JhdG9yaXVtIGFsY2hlbWljem55bScsXHJcbiAgICAnbmllcG93c3RyenltYW5lJyxcclxuICAgICd3xYJhZGN6ZScsXHJcbiAgICAnbXJvY3puZScsXHJcbiAgICAndGFqZW1uZScsXHJcbiAgICAnd8WbY2lla8WCZScsXHJcbiAgICAnd3NwaWVyYW5lIG1vY8SFIG90Y2jFgmFuaScsXHJcbiAgICAncHJ6ZXN5Y29uZSB6xYLEhSBtb2PEhSdcclxuICBdXHJcbiAgZGVzUGFydC5pbm5lclRleHQgPSAnLCAnICsgYXJyYXlbaV1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0SU1HKGkpIHtcclxuICBsZXQgYmVsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdCdcclxuICApW2ldXHJcbiAgbGV0IGltYWcgPSBiZWx0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpWzBdXHJcbiAgbGV0IGF0dHJ5YiA9IGltYWcuZ2V0QXR0cmlidXRlKCdzcmMnKVxyXG4gIGxldCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tcGxhdGVfaW1nX2ljb24nKVxyXG4gIGljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBhdHRyeWIpXHJcbiAgbGV0IGFsbElNR3MgPSBiZWx0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpLmxlbmd0aFxyXG4gIGxldCBzdGFuZGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLXN0YW5kYXJ0X2ltZ19iY2tnJylcclxuICB3aGlsZSAoc3RhbmRhcnQucXVlcnlTZWxlY3RvcignSU1HJykgIT09IG51bGwpIHtcclxuICAgIGxldCBpbWFnZVRvRGVsID0gc3RhbmRhcnQucXVlcnlTZWxlY3RvcignSU1HJylcclxuICAgIHN0YW5kYXJ0LnJlbW92ZUNoaWxkKGltYWdlVG9EZWwpXHJcbiAgfVxyXG4gIGZvciAobGV0IGogPSAwOyBqIDwgYWxsSU1HczsgaisrKSB7XHJcbiAgICBpZiAoaiA+IDApIHtcclxuICAgICAgbGV0IHRoZUlNRyA9IGJlbHQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylbal1cclxuICAgICAgbGV0IHNvdXJjZUlNRyA9IHRoZUlNRy5nZXRBdHRyaWJ1dGUoJ3NyYycpXHJcbiAgICAgIGxldCBuZXdJTUcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICBuZXdJTUcuc2V0QXR0cmlidXRlKCdzcmMnLCBzb3VyY2VJTUcpXHJcbiAgICAgIHN0YW5kYXJ0LmFwcGVuZENoaWxkKG5ld0lNRylcclxuICAgIH1cclxuICB9XHJcbn1cclxubGV0IHNldE5leHRQYXJ0T2ZGb3JtdWxhRm9yVGhlRmlyc3RUaW1lPTA7XHJcbmZ1bmN0aW9uIHNldFN0cmlrZU5hbWVUb0RlcyhpKSB7XHJcbiAgbGV0IGlucCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJuYXp3YXVkZXJ6ZW5pYVwiXScpXHJcbiAgaW5wLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHN0ck5hbWUgPSBpbnAudmFsdWU7XHJcbiAgICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19uYXp3YS1jaW9zdScpO1xyXG4gICAgaXRlbS5pbm5lclRleHQgPSBzdHJOYW1lICsgJyB0byBsZWdlbmRhcm5lJztcclxuICAgIHNob3dBbGxEZXMoKTtcclxuICB9KVxyXG4gIGlucC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgaXRtID0gaW5wLnZhbHVlXHJcbiAgICBpZiAoaXRtLnRyaW0oKSAhPT0gJycmJnNldE5leHRQYXJ0T2ZGb3JtdWxhRm9yVGhlRmlyc3RUaW1lPT09MCkge1xyXG4gICAgICBsZXQgc3RyTmFtZSA9IGlucC52YWx1ZVxyXG4gICAgICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19uYXp3YS1jaW9zdScpXHJcbiAgICAgIGl0ZW0uaW5uZXJUZXh0ID0gc3RyTmFtZSArICcgdG8gbGVnZW5kYXJuZSdcclxuICAgICAgc2hvd0FsbERlcygpO1xyXG4gICAgICBzZXROZXh0UGFydE9mRm9ybXVsYSgpO1xyXG4gICAgICBzZXROZXh0UGFydE9mRm9ybXVsYUZvclRoZUZpcnN0VGltZT0xO1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEZvcmNlRGVzKGkpIHtcclxuICBsZXQgYmVsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdCdcclxuICApW2ldO1xyXG4gIGxldCBJTUdzID0gYmVsdC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVxyXG4gIGxldCBpdGVyID0gSU1Hcy5sZW5ndGhcclxuICBsZXQgc3RybmcgPSBbXVxyXG4gIGZvciAobGV0IGogPSAwOyBqIDwgaXRlcjsgaisrKSB7XHJcbiAgICBsZXQgSU1HID0gSU1Hc1tqXVxyXG4gICAgbGV0IGF0dHJ5YiA9IElNRy5nZXRBdHRyaWJ1dGUoJ3NyYycpXHJcbiAgICBpZiAoaiAhPT0gMCkge1xyXG4gICAgICBpZiAoYXR0cnliID09PSAnaWNvbnMvYnJvbi1iYXJiYS5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnZG9kYXRrb3fEhSBtb2PEhSB1ZGVyemVuaW93xIUnKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL2Jyb24tY3phci5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnZG9kYXRrb3fEhSBtb2PEhSBjemFybm9rc2nEmXNrxIUnKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL2Jyb24tc3Ryei5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnZG9kYXRrb3d5bSBrdW5zenRlbSBzdHJ6ZWxlY2tpbScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvYnJvbi1zemFsLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCdkb2RhdGtvd3ltIHN6YWxlxYRzdHdlbScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvYnJvbi16ZHJhLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCduaWVzcG9kemlhbnltIHpkcmFkbGl3eW0gY2lvc2VtJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy96eXctb2dpZW4uc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ8W8eXdpb8WCZW0gb2duaWEnKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL3p5dy1yb3prbGFkLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCfFvHl3aW/FgmVtIHJvemvFgmFkdScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvenl3LXdvZC5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnxbx5d2lvxYJlbSB3b2R5JylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy96eXctem1pYW5hLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCfFvHl3aW/FgmVtIHptaWFueScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvenl3LXp5d2lhLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCfFvHl3aW/FgmVtIMW8eXdpaScpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnd8WCYXNuxIUgbcSFZHJvxZtjacSFIMW8eXdpb8WCw7N3IGkgdGFsZW50w7N3JylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBsZXQgc3RyaW5nVG9TZXQgPSBzdHJuZy5qb2luKCcsICcpO1xyXG4gIGxldCB6eXdEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfenl3aW9sJyk7XHJcbiAgbGV0IGltaURlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19pbWllJyk7XHJcbiAgbGV0IHByekRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19wcnp5ZG9tZWsnKTtcclxuICBsZXQgemRhRGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3pkYW5pZScpO1xyXG4gIHp5d0Rlcy5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKTtcclxuICBpbWlEZXMuY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJyk7XHJcbiAgcHJ6RGVzLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpO1xyXG4gIHpkYURlcy5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKTtcclxuICB6eXdEZXMuaW5uZXJUZXh0ID0gc3RyaW5nVG9TZXQgKyAnLic7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldE5hbWVUb0RlcygpIHtcclxuICBsZXQgaW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImltaWVcIl0nKVxyXG4gIGxldCBuYW0gPSBpbnAudmFsdWVcclxuICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19pbWllJylcclxuICBpdGVtLmlubmVyVGV4dCA9IG5hbSArICcgJztcclxuICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldE5pY2tuYW1lVG9EZXMoKSB7XHJcbiAgbGV0IGlucEIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJ6eWRvbWVrXCJdJylcclxuICBsZXQgc3VybmFtID0gaW5wQi52YWx1ZVxyXG4gIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3Byenlkb21laycpXHJcbiAgaXRlbS5pbm5lclRleHQgPSBzdXJuYW07XHJcbiAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTZW50ZW5jZVRvRGVzKCkge1xyXG4gIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3pkYW5pZScpXHJcbiAgaXRlbS5pbm5lclRleHQgPSAnIHd6bWFjbmlhIHN3w7NqIGF0YWsgJ1xyXG4gIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJylcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0FsbERlcygpIHtcclxuICBsZXQgYWxsRGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzJylcclxuICBhbGxEZXMuY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJylcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0TmV4dFBhcnRPZkZvcm11bGEoKSB7XHJcbiAgbGV0IHRleHRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm5hendhdWRlcnplbmlhXCJdJyk7XHJcbiAgbGV0IGFyZWFWYWx1ZSA9ICh0ZXh0QXJlYS52YWx1ZSkudHJpbSgpO1xyXG4gIGlmIChhcmVhVmFsdWUgIT09ICcnKSB7XHJcbiAgICBlbmFibGVOZXh0UGFydE9mRm9ybSgpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZW5hYmxlTmV4dFBhcnRPZkZvcm0oKSB7XHJcbiAgbGV0IG5leHRQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzZXQtYycpO1xyXG4gIG5leHRQYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2l0SXNIaWRkZW4nKTtcclxuICBsZXQgYWxsT3JuYW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLmNvcnB1c19zZWN0aW9uX2Zvcm1fb3JuYW1lbnQtbWFya2VyJyk7XHJcbiAgbGV0IHRoaXNPcm5hbWVudCA9IGFsbE9ybmFtZW50c1sxXTtcclxuICB0aGlzT3JuYW1lbnQuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pY29ucy9wb2xlLnN2ZycpO1xyXG4gIHRoaXNPcm5hbWVudC5jbGFzc0xpc3QuYWRkKCdpdElzUGFzc2VkVGhyb3VnaHQnKTtcclxuICBsZXQgbmV4dE9ybmFtZW50ID0gYWxsT3JuYW1lbnRzWzJdO1xyXG4gIG5leHRPcm5hbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbiAgdGhpc09ybmFtZW50LnN0eWxlLm1hcmdpbkJvdHRvbT1cIi0xcmVtXCI7XHJcbiAgdGhpc09ybmFtZW50LnN0eWxlLnpJbmRleD1cIjFcIjtcclxuICBuZXh0UGFydC5zdHlsZS56SW5kZXg9XCIyXCI7XHJcbiAgZ3VpZGVSZWFjdHMoNCk7XHJcbn0iLCJpbXBvcnQgeyBzZXROYW1lVG9EZXMgfSBmcm9tIFwiLi9hdGFraS1zZXQtdHh0LmpzXCI7XHJcbmltcG9ydCB7IHNldE5pY2tuYW1lVG9EZXMgfSBmcm9tIFwiLi9hdGFraS1zZXQtdHh0LmpzXCI7XHJcbmltcG9ydCB7IHNldFNlbnRlbmNlVG9EZXMgfSBmcm9tIFwiLi9hdGFraS1zZXQtdHh0LmpzXCI7XHJcbmltcG9ydCB7IGd1aWRlUmVhY3RzIH0gZnJvbSBcIi4vYXNpZGUuanNcIjtcclxuKFwidXNlIHN0cmljdFwiKTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgdXNlckZsb3dWaWFGaXJzdEZpZWxkc2V0KCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gdXNlckZsb3dWaWFGaXJzdEZpZWxkc2V0KCkge1xyXG4gIGxldCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJpbWllXCJdJyk7XHJcbiAgbGV0IHVzZXJOaWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByenlkb21la1wiXScpO1xyXG4gIGxldCB1c2VyTW90dG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiemF3b2xhbmllXCJdJyk7XHJcbiAgdXNlck5hbWVBY2NlcHQodXNlck5hbWUsIHVzZXJOaWNrKTtcclxuICB1c2VyTmlja0FjY2VwdCh1c2VyTmljaywgdXNlck1vdHRvKTtcclxuICB1c2VyTW90dG9BY2NlcHQodXNlck1vdHRvLCB1c2VyTmFtZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZXJOYW1lQWNjZXB0KGl0ZW0sIG5leHRJdGVtKSB7XHJcbiAgbGV0IHBhcnRPZkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzXCIpO1xyXG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuICAgIGxldCBhbGxGaWVsZHNBcmVTZXQgPSBjaGVja0lmRmllbGRzQXJlU2V0KCk7XHJcbiAgICBsZXQgdGVybSA9IHBhcnRPZkZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXRJc0hpZGRlblwiKTtcclxuICAgIGlmIChhbGxGaWVsZHNBcmVTZXQgPT09IHRydWUgJiYgdGVybSA9PT0gdHJ1ZSkge1xyXG4gICAgICBlbmFibGVOZXh0UGFydE9mRm9ybXVsYSgpO1xyXG4gICAgfVxyXG4gICAgc2V0VGhpc0RhdGFUb0Rlc2NyaXB0aW9uKCk7XHJcbiAgfSk7XHJcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGxldCBhbGxGaWVsZHNBcmVTZXQgPSBjaGVja0lmRmllbGRzQXJlU2V0KCk7XHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgaWYgKGFsbEZpZWxkc0FyZVNldCAhPT0gdHJ1ZSkge1xyXG4gICAgICAgIG5leHRJdGVtLmZvY3VzKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaXRlbS5ibHVyKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiB1c2VyTmlja0FjY2VwdChpdGVtLCBuZXh0SXRlbSkge1xyXG4gIGxldCBwYXJ0T2ZGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc1wiKTtcclxuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgYWxsRmllbGRzQXJlU2V0ID0gY2hlY2tJZkZpZWxkc0FyZVNldCgpO1xyXG4gICAgbGV0IHRlcm0gPSBwYXJ0T2ZGb3JtLmNsYXNzTGlzdC5jb250YWlucyhcIml0SXNIaWRkZW5cIik7XHJcbiAgICBpZiAoYWxsRmllbGRzQXJlU2V0ID09PSB0cnVlICYmIHRlcm0gPT09IHRydWUpIHtcclxuICAgICAgZW5hYmxlTmV4dFBhcnRPZkZvcm11bGEoKTtcclxuICAgIH1cclxuICAgIHNldFRoaXNEYXRhVG9EZXNjcmlwdGlvbigpO1xyXG4gIH0pO1xyXG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBsZXQgYWxsRmllbGRzQXJlU2V0ID0gY2hlY2tJZkZpZWxkc0FyZVNldCgpO1xyXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgIGlmIChhbGxGaWVsZHNBcmVTZXQgIT09IHRydWUpIHtcclxuICAgICAgICBuZXh0SXRlbS5mb2N1cygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGl0ZW0uYmx1cigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuZnVuY3Rpb24gdXNlck1vdHRvQWNjZXB0KGl0ZW0sIG5leHRJdGVtKSB7XHJcbiAgbGV0IHBhcnRPZkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzXCIpO1xyXG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuICAgIGxldCBhbGxGaWVsZHNBcmVTZXQgPSBjaGVja0lmRmllbGRzQXJlU2V0KCk7XHJcbiAgICBsZXQgdGVybSA9IHBhcnRPZkZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXRJc0hpZGRlblwiKTtcclxuICAgIGlmIChhbGxGaWVsZHNBcmVTZXQgPT09IHRydWUgJiYgdGVybSA9PT0gdHJ1ZSkge1xyXG4gICAgICBlbmFibGVOZXh0UGFydE9mRm9ybXVsYSgpO1xyXG4gICAgfVxyXG4gICAgc2V0VGhpc0RhdGFUb0Rlc2NyaXB0aW9uKCk7XHJcbiAgfSk7XHJcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICBpdGVtLmJsdXIoKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tJZkZpZWxkc0FyZVNldCgpIHtcclxuICBsZXQgdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiaW1pZVwiXScpO1xyXG4gIGxldCB1c2VyTmljayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcnp5ZG9tZWtcIl0nKTtcclxuICBsZXQgdXNlck1vdHRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInphd29sYW5pZVwiXScpO1xyXG4gIGxldCB2YWx1ZUEgPSB1c2VyTmFtZS52YWx1ZTtcclxuICBsZXQgdmFsdWVCID0gdXNlck5pY2sudmFsdWU7XHJcbiAgbGV0IHZhbHVlQyA9IHVzZXJNb3R0by52YWx1ZTtcclxuICBpZiAodmFsdWVBLnRyaW0oKSAhPT0gXCJcIikge1xyXG4gICAgaWYgKHZhbHVlQi50cmltKCkgIT09IFwiXCIpIHtcclxuICAgICAgaWYgKHZhbHVlQy50cmltKCkgIT09IFwiXCIpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZW5hYmxlTmV4dFBhcnRPZkZvcm11bGEoKSB7XHJcbiAgbGV0IHRoaXNPcm5hbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcImltZy5jb3JwdXNfc2VjdGlvbl9mb3JtX29ybmFtZW50LW1hcmtlclwiXHJcbiAgKTtcclxuICBsZXQgYWxsT3JuYW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwiaW1nLmNvcnB1c19zZWN0aW9uX2Zvcm1fb3JuYW1lbnQtbWFya2VyXCJcclxuICApO1xyXG4gIHRoaXNPcm5hbWVudC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2ljb25zL3BvbGUuc3ZnXCIpO1xyXG4gIHRoaXNPcm5hbWVudC5jbGFzc0xpc3QuYWRkKFwiaXRJc1Bhc3NlZFRocm91Z2h0XCIpO1xyXG4gIGxldCBuZXh0T3JuYW1lbnQgPSBhbGxPcm5hbWVudHNbMV07XHJcbiAgbmV4dE9ybmFtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJpdElzSGlkZGVuXCIpO1xyXG4gIGxldCBwYXJ0T2ZGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc1wiKTtcclxuICBwYXJ0T2ZGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJpdElzSGlkZGVuXCIpO1xyXG4gIGd1aWRlUmVhY3RzKDEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRUaGlzRGF0YVRvRGVzY3JpcHRpb24oKSB7XHJcbiAgc2V0TmFtZVRvRGVzKCk7XHJcbiAgc2V0Tmlja25hbWVUb0RlcygpO1xyXG4gIHNldFNlbnRlbmNlVG9EZXMoKTtcclxufVxyXG4iLCJpbXBvcnQgaXRlcmF0b3JPZlBvaW50c0xlZnQgZnJvbSAnLi9hc2lkZS5qcyc7XHJcbmltcG9ydCB7Z3VpZGVSZWFjdHN9IGZyb20gJy4vYXNpZGUuanMnO1xyXG4ndXNlIHN0cmljdCc7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjaG9vc2VZb3VyQXZhdGFyKVxyXG5mdW5jdGlvbiBjaG9vc2VZb3VyQXZhdGFyICgpIHtcclxuICBsZXQgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyJylcclxuICBsZXQgYXZhdGFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9yYWRpby1sYWItY29udGFpbmVyJylcclxuICBsZXQgYW1vdW50ID0gYXZhdGFycy5sZW5ndGhcclxuICBmb3IgKGxldCBpID0gMDtpIDwgYW1vdW50O2krKykge1xyXG4gICAgbGV0IGl0ZW0gPSBhdmF0YXJzW2ldXHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBjaG9vc2VUaGlzQXZhdGFyKGl0ZW0sIGF2YXRhcnMsIGFtb3VudClcclxuICAgICAgc2V0T25lUGFydE9mQXR0YWNrRGVzY3JpcHRpb24oaSlcclxuICAgICAgc3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRzKGNvbnRhaW5lcnMpXHJcbiAgICAgIGVuYWJsZUF0dGFja3MoaSlcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGNob29zZVRoaXNBdmF0YXIgKGl0ZW0sIGF2YXRhcnMsIGFtb3VudCkge1xyXG4gIGl0ZW0ucXVlcnlTZWxlY3RvcignaW5wdXQnKS5jaGVja2VkID0gdHJ1ZTtcclxuICBmb3IgKGxldCBpPTA7IGk8YW1vdW50OyBpKyspe1xyXG4gICAgICBsZXQgYXYgPSBhdmF0YXJzW2ldO1xyXG4gICAgICBhdi5jbGFzc0xpc3QucmVtb3ZlKCdpc0NsaWNrZWQnKTtcclxuICB9XHJcbiAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpc0NsaWNrZWQnKTtcclxuICBpdGVyYXRvck9mUG9pbnRzTGVmdC5kZWxldGF0b3IoKTtcclxuICBndWlkZVJlYWN0cygyKTtcclxufVxyXG5mdW5jdGlvbiBzZXRPbmVQYXJ0T2ZBdHRhY2tEZXNjcmlwdGlvbiAoaSkge1xyXG4gIGxldCBkZXNQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncCBzcGFuLi0tZGVzX2tsYXNhJylcclxuICBsZXQgYXJyYXkgPSBbXHJcbiAgICAnIHVkZXJ6ZW5pZSBicm9uacSFIGJydXRhbG7EhS4nLFxyXG4gICAgJyB1ZGVyemVuaWUgYnJvbmnEhSBzdHJ6ZWxlY2vEhS4nLFxyXG4gICAgJyB1ZGVyemVuaWUgYnJvbmnEhSB6ZHJhZHppZWNrxIUuJyxcclxuICAgICcgdWRlcnplbmllIGJyb25pxIUgc3phbGXFhGN6xIUuJyxcclxuICAgICcgdWRlcnplbmllIGJyb25pxIUgc3phcmxhdGHFhHNrxIUuJyxcclxuICAgICcgdWRlcnplbmllIGJyb25pxIUgbHViIGN6eW1rb2x3aWVrLCBjbyB3cGFkbmllIGthcsWCb3dpIHcgxYJhcHNrYS4nXHJcbiAgXVxyXG4gIGRlc1BhcnQuaW5uZXJUZXh0ID0gYXJyYXlbaV1cclxuICBsZXQgbmV4dERlc1BhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwIHNwYW4uLS1kZXNfZXBpdGV0Jyk7XHJcbiAgbmV4dERlc1BhcnQuY2xhc3NMaXN0LmFkZCgnaXRzSGlkZGVuJyk7XHJcbiAgbGV0IGFub3RoZXJOZXh0RGVzUGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc196eXdpb2wnKTtcclxuICBhbm90aGVyTmV4dERlc1BhcnQuY2xhc3NMaXN0LmFkZCgnaXRzSGlkZGVuJyk7XHJcbiAgbGV0IG90aGVyQW5vdGhlck5leHREZXNQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX2ltaWUnKTtcclxuICBvdGhlckFub3RoZXJOZXh0RGVzUGFydC5jbGFzc0xpc3QuYWRkKCdpdHNIaWRkZW4nKTtcclxuICBsZXQgcHJ6RGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3Byenlkb21laycpO1xyXG4gIGxldCB6ZGFEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfemRhbmllJyk7XHJcbiAgcHJ6RGVzLmNsYXNzTGlzdC5hZGQoJ2l0c0hpZGRlbicpO1xyXG4gIHpkYURlcy5jbGFzc0xpc3QuYWRkKCdpdHNIaWRkZW4nKTtcclxufVxyXG5mdW5jdGlvbiBzeW5jaHJvbml6ZUJhY2tncm91bmRzT2ZPdGhlck9wdHMgKGNvbnRhaW5lcnMpIHtcclxuICBsZXQgYW1vdW50ID0gY29udGFpbmVycy5sZW5ndGhcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XHJcbiAgICBsZXQgY29udCA9IGNvbnRhaW5lcnNbaV1cclxuICAgIGxldCBvcHRpb25zID0gY29udC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKVxyXG4gICAgbGV0IGl0ZXIgPSBvcHRpb25zLmxlbmd0aFxyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVyOyB4KyspIHtcclxuICAgICAgbGV0IGJlbHQgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnKVt4XVxyXG4gICAgICBiZWx0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdpbmhlcml0J1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBlbmFibGVBdHRhY2tzIChpKSB7XHJcbiAgbGV0IGVuYWJsZWRBdHRhY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXInKVxyXG4gIGZvciAobGV0IHggPSAwOyB4IDwgNjsgeCsrKSB7XHJcbiAgICBsZXQgZGlzYWJsZWRJdGVtID0gZW5hYmxlZEF0dGFja3NbeF1cclxuICAgIGRpc2FibGVkSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdlbmFibGVkJylcclxuICAgIGxldCBvcHRzID0gZGlzYWJsZWRJdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpXHJcbiAgICBsZXQgYW1vdW50ID0gb3B0cy5sZW5ndGhcclxuICAgIGZvciAobGV0IGogPSAwO2ogPCBhbW91bnQ7aisrKSB7XHJcbiAgICAgIGlmIChvcHRzW2pdLnNlbGVjdGVkID09PSB0cnVlKSB7XHJcbiAgICAgICAgb3B0c1tqXS5zZWxlY3RlZCA9IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgbGV0IGVuYWJsZWRBdHRhY2sgPSBlbmFibGVkQXR0YWNrc1tpXVxyXG4gIGVuYWJsZWRBdHRhY2suY2xhc3NMaXN0LmFkZCgnZW5hYmxlZCcpXHJcbn1cclxuIiwiaW1wb3J0IGl0ZXJhdG9yT2ZQb2ludHNMZWZ0IGZyb20gJy4vYXNpZGUuanMnXHJcbmltcG9ydCB7IGd1aWRlUmVhY3RzIH0gZnJvbSAnLi9hc2lkZS5qcydcclxuJ3VzZSBzdHJpY3QnXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0aWFsaXplQXR0YWNrc1BhcnQpXHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplQXR0YWNrc1BhcnQgKCkge1xyXG4gIGxldCBjb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXInKVxyXG4gIGxldCBhbW91bnQgPSBjb250YWluZXJzLmxlbmd0aFxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50OyBpKyspIHtcclxuICAgIGxldCBjb250ID0gY29udGFpbmVyc1tpXVxyXG4gICAgbGV0IG9wdGlvbnMgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpXHJcbiAgICBsZXQgaXRlciA9IG9wdGlvbnMubGVuZ3RoXHJcbiAgICBmb3IgKGxldCB4ID0gMDt4IDwgaXRlcjt4KyspIHtcclxuICAgICAgbGV0IG9wdCA9IG9wdGlvbnNbeF1cclxuICAgICAgb3B0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0Jywgb25NT3V0KVxyXG4gICAgICBvcHQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIG9uTUVudGVyKVxyXG4gICAgICBmdW5jdGlvbiBvbk1FbnRlciAoKSB7XHJcbiAgICAgICAgaWYgKG9wdC5zZWxlY3RlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIHN5bmNocm9uaXplVGhpc0Jja2dyV2l0aEltYWdlQmVsdEhvdmVyQmNrZ3Iob3B0LCBjb250LCB4LCB0cnVlKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBmdW5jdGlvbiBvbk1PdXQgKCkge1xyXG4gICAgICAgIGlmIChvcHQuc2VsZWN0ZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICBzeW5jaHJvbml6ZVRoaXNCY2tncldpdGhJbWFnZUJlbHRIb3ZlckJja2dyKG9wdCwgY29udCwgeCwgZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgc2VsZWN0TGlzdCA9IGNvbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JylcclxuICAgIHNlbGVjdExpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBmb3IgKGxldCBxID0gMDsgcSA8IGl0ZXI7cSsrKSB7XHJcbiAgICAgICAgbGV0IG9wdCA9IG9wdGlvbnNbcV1cclxuICAgICAgICBpZiAob3B0LnZhbHVlID09PSBzZWxlY3RMaXN0LnZhbHVlKSB7XHJcbiAgICAgICAgICBpdGVyYXRvck9mUG9pbnRzTGVmdC5pdGVyYXRvcihjb250LCBxKVxyXG4gICAgICAgICAgZ3VpZGVSZWFjdHMoMylcclxuICAgICAgICAgIHN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0bnMoY29udCwgaXRlcilcclxuICAgICAgICAgIHN5bmNocm9uaXplVGhpc0Jja2dyV2l0aEltYWdlQmVsdEhvdmVyQmNrZ3Iob3B0LCBjb250LCBxLCB0cnVlKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gc3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRucyAoY29udCwgaXRlcikge1xyXG4gIGZvciAobGV0IHggPSAwOyB4IDwgaXRlcjsgeCsrKSB7XHJcbiAgICBsZXQgYmVsdCA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdCcpW3hdXHJcbiAgICBiZWx0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdpbmhlcml0J1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3luY2hyb25pemVUaGlzQmNrZ3JXaXRoSW1hZ2VCZWx0SG92ZXJCY2tnciAob3B0LCBjb250LCB4LCBpc0VudGVyKSB7XHJcbiAgbGV0IGJlbHQgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnKVt4XVxyXG4gIGlmIChpc0VudGVyID09PSB0cnVlKSB7XHJcbiAgICBsZXQgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShvcHQpXHJcbiAgICBsZXQgYmNnQ29sID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1jb2xvcicpXHJcbiAgICBiZWx0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJjZ0NvbFxyXG4gIH0gZWxzZSBpZiAoaXNFbnRlciA9PT0gZmFsc2UpIHtcclxuICAgIGJlbHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2luaGVyaXQnXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBpdGVyYXRvck9mUG9pbnRzTGVmdCBmcm9tICcuL2FzaWRlLmpzJztcclxuJ3VzZSBzdHJpY3QnO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdCk7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgbGV0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHMtMl9maWVsZHNldC1kX2NvbnRhaW5lcl9hdHJ5YiAuLS1iZWx0X2ljb24tY29udGFpbmVyJyk7XHJcbiAgICBsZXQgYmVsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHMtMl9maWVsZHNldC1kX2NvbnRhaW5lcl9hdHJ5YiAuLS1iZWx0X2JvZHktY29udGFpbmVyX2JvZHknKTtcclxuICAgIGxldCBpdGVyID0gYnRucy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXI7IGkrKykge1xyXG4gICAgICAgIGlmIChpID4gNCkge1xyXG4gICAgICAgICAgICBsZXQgYXR0cnliID0gYnRuc1tpXTtcclxuICAgICAgICAgICAgbGV0IGJlbHQgPSBiZWx0c1tpXTtcclxuICAgICAgICAgICAgYXR0cnliLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZXJhdG9yT2ZQb2ludHNMZWZ0LmxlZnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkUG9pbnQoYmVsdClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb2ludChiZWx0KSB7XHJcbiAgICBsZXQgSU1HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnSU1HJyk7XHJcbiAgICBJTUcuc2V0QXR0cmlidXRlKCdzcmMnLCAnaWNvbnMvaWtvbmEtcG90ZWcuc3ZnJyk7XHJcbiAgICBiZWx0LmFwcGVuZENoaWxkKElNRyk7XHJcbiAgICAvL2Ftb3VudE9mUG9pbnRzLS07XHJcbiAgICBpdGVyYXRvck9mUG9pbnRzTGVmdC5sZWZ0LS07XHJcbiAgICBpdGVyYXRvck9mUG9pbnRzTGVmdC5lcXVhbGl6YXRvcigpO1xyXG4gICAgSU1HLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRlbGV0ZVRoaXNJTUcoSU1HKVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlVGhpc0lNRyh4KSB7XHJcbiAgICB4LnJlbW92ZSgpO1xyXG4gICAgLy9hbW91bnRPZlBvaW50cysrO1xyXG4gICAgaXRlcmF0b3JPZlBvaW50c0xlZnQubGVmdCsrO1xyXG4gICAgaXRlcmF0b3JPZlBvaW50c0xlZnQuZXF1YWxpemF0b3IoKTtcclxufSIsImltcG9ydCB7Z3VpZGVSZWFjdHN9IGZyb20gJy4vYXNpZGUuanMnO1xyXG5cInVzZSBzdHJpY3RcIjtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdGlhbGl6ZVRoaXNTZWN0aW9uKTtcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVUaGlzU2VjdGlvbigpIHtcclxuICAgIGxldCBsaXN0QSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNldC1jICN6YXNsb25hXCJcclxuICAgICk7XHJcbiAgICBsZXQgbGlzdEIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzZXQtYyAjcGFuY2VyelwiXHJcbiAgICApO1xyXG4gICAgbGV0IGltYWdlc0EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgIFwiLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzZXQtY19pbWdzX2ltZy5hXCJcclxuICAgICk7XHJcbiAgICBsZXQgaW1hZ2VzQiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNldC1jX2ltZ3NfaW1nLmJcIlxyXG4gICAgKTtcclxuICAgIGxldCBvcHRzQSA9IGxpc3RBLnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb25cIik7XHJcbiAgICBsZXQgb3B0c0IgPSBsaXN0Qi5xdWVyeVNlbGVjdG9yQWxsKFwib3B0aW9uXCIpO1xyXG4gICAgZHluYW1pemVUaGlzTGlzdChsaXN0QSwgb3B0c0EsIGltYWdlc0EsIGxpc3RCKTtcclxuICAgIGR5bmFtaXplVGhpc0xpc3QobGlzdEIsIG9wdHNCLCBpbWFnZXNCLCBsaXN0QSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGR5bmFtaXplVGhpc0xpc3QobGlzdCwgb3B0cywgaW1hZ2VzLCBvdGhlckxpc3QpIHtcclxuICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gbGlzdC52YWx1ZTtcclxuICAgICAgICBsZXQgaXRlciA9IG9wdHMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaXRlciAtIDE7IGorKykge1xyXG4gICAgICAgICAgICBpbWFnZXNbal0uY2xhc3NMaXN0LmFkZChcIml0SXNVbnNlbGVjdGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXI7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgb3B0ID0gb3B0c1tpXTtcclxuICAgICAgICAgICAgbGV0IG9wdFZhbHVlID0gb3B0LnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IG9wdFZhbHVlICYmIGkgIT09IDMpIHtcclxuICAgICAgICAgICAgICAgIGltYWdlc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiaXRJc1Vuc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZW5hYmxlTmV4dEZvcm1QYXJ0KGxpc3QsIG90aGVyTGlzdCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZW5hYmxlTmV4dEZvcm1QYXJ0KGxpc3QsIG90aGVyTGlzdCkge1xyXG4gICAgbGV0IGEgPSBsaXN0LnZhbHVlO1xyXG4gICAgbGV0IGIgPSBvdGhlckxpc3QudmFsdWU7XHJcbiAgICBpZiAoYSAhPT0gXCJcIiAmJiBiICE9PSBcIlwiKSB7XHJcbiAgICAgICAgbGV0IG5leHRQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzLTInKTtcclxuICAgICAgICBuZXh0UGFydC5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbiAgICAgICAgbGV0IGFsbE9ybmFtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZy5jb3JwdXNfc2VjdGlvbl9mb3JtX29ybmFtZW50LW1hcmtlcicpO1xyXG4gICAgICAgIGxldCB0aGlzT3JuYW1lbnQgPSBhbGxPcm5hbWVudHNbMl07XHJcbiAgICAgICAgdGhpc09ybmFtZW50LnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaWNvbnMvcG9sZS5zdmcnKTtcclxuICAgICAgICB0aGlzT3JuYW1lbnQuY2xhc3NMaXN0LmFkZCgnaXRJc1Bhc3NlZFRocm91Z2h0Jyk7XHJcbiAgICAgICAgbGV0IG5leHRPcm5hbWVudCA9IGFsbE9ybmFtZW50c1szXTtcclxuICAgICAgICBuZXh0T3JuYW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0hpZGRlbicpO1xyXG4gICAgICAgIGd1aWRlUmVhY3RzKDUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IGl0ZXJhdG9yT2ZQb2ludHNMZWZ0IGZyb20gJy4vYXNpZGUuanMnO1xyXG5pbXBvcnQge2d1aWRlUmVhY3RzfSBmcm9tICcuL2FzaWRlLmpzJztcclxuJ3VzZSBzdHJpY3QnO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdGlhbGl6ZVRoaXNTZWxlY3QpXHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplVGhpc1NlbGVjdCgpIHtcclxuICAgIGxldCBvcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzLTJfZmllbGRzZXQtZF9jb250YWluZXJfbW9jZScpO1xyXG4gICAgbGV0IGl0ZXIgPSBvcHRpb25zLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcjsgaSsrKSB7XHJcbiAgICAgICAgbGV0IG9wdCA9IG9wdGlvbnNbaV07XHJcbiAgICAgICAgb3B0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpdElzQ2xpY2tlZChvcHQsIG9wdGlvbnMsIGl0ZXIsIGkpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gaXRJc0NsaWNrZWQob3B0LCBvcHRzLCBpdGVyLCBpKSB7XHJcbiAgICBsZXQgY2hlY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cIm1vYy1waWV0bm9cIl0nKTtcclxuICAgIGxldCBjb3N0T2ZUaGlzID0gWzEsMiwyLDEsMywxXTtcclxuICAgIGlmIChjaGVja3NbaV0uY2hlY2tlZD09PXRydWUpe1xyXG4gICAgICAgIGNoZWNrc1tpXS5jaGVja2VkPWZhbHNlO1xyXG4gICAgICAgIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0Lml0ZXJhdG9yQihjb3N0T2ZUaGlzW2ldKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGNoZWNrc1tpXS5jaGVja2VkPXRydWU7XHJcbiAgICAgICAgaXRlcmF0b3JPZlBvaW50c0xlZnQuZGVsZXRhdG9yQihjb3N0T2ZUaGlzW2ldKTtcclxuICAgICAgICBndWlkZVJlYWN0cyg2KTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgaXRlcjsgaisrKSB7XHJcbiAgICAgICAgaWYgKGNoZWNrc1tqXS5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIG9wdHNbal0uY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hlY2tzW2pdLmNoZWNrZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIG9wdHNbal0uY2xhc3NMaXN0LmFkZCgnaXRJc0hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdGlhbGl6ZUd1aWRlIiwiaGlkZVVzZXJHdWlkZSIsInNldFRpbWVvdXQiLCJhc2lkZSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJvcm5tIiwicm90YXRlQW5kSGlkZUFzaWRlIiwiYnRuIiwiY29udHJvbGxlciIsImhlYWRCZWx0IiwicGllY2UiLCJvZmZzZXRIZWlnaHQiLCJzdHlsZSIsInRyYW5zZm9ybSIsImF3Iiwib2Zmc2V0V2lkdGgiLCJhaCIsIndzcCIsIngiLCJ5IiwieiIsImxlZnQiLCJib3R0b20iLCJhcnJheVdpdGhJdGVycyIsImd1aWRlUmVhY3RzIiwiaSIsInJlbW92ZSIsInBhcnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImN1cnJlbnRQYXJ0IiwicG9zaXRpb24iLCJvZmZzZXRUb3AiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImd1aWRlIiwidGl0bGUiLCJhcnIiLCJpbm5lclRleHQiLCJhcnJCIiwiaXNTb21ldGhpbmdOZXdUb1NheSIsIml0ZXJhdG9yT2ZQb2ludHNMZWZ0Iiwic3BlbnRPbkF0dGFjayIsIml0ZXJhdG9yIiwiY29udCIsIml0ZXJEZXZpY2UiLCJvcHQiLCJwb2ludHMiLCJhbW91bnQiLCJsZW5ndGgiLCJiaWxhbnMiLCJkZWxldGF0b3IiLCJpdGVyYXRvckIiLCJpbnRlZ2VyIiwiZGVsZXRhdG9yQiIsImVxdWFsaXphdG9yIiwiaW5pdGlhbGl6ZSIsIm9wdHMiLCJpdGVtIiwic2V0SU1HIiwiZW5hYmxlU3RyaWtlTmFtZVBhcnQiLCJzZXRTdHJpa2VOYW1lVG9EZXMiLCJzZXRQYXJ0T2ZBdHRhY2tEZXNjcmlwdGlvbiIsInNldEZvcmNlRGVzIiwib25seU9uY2UiLCJkZXNQYXJ0IiwiYXJyYXkiLCJiZWx0IiwiaW1hZyIsImF0dHJ5YiIsImdldEF0dHJpYnV0ZSIsImljb24iLCJzZXRBdHRyaWJ1dGUiLCJhbGxJTUdzIiwic3RhbmRhcnQiLCJpbWFnZVRvRGVsIiwicmVtb3ZlQ2hpbGQiLCJqIiwidGhlSU1HIiwic291cmNlSU1HIiwibmV3SU1HIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwic2V0TmV4dFBhcnRPZkZvcm11bGFGb3JUaGVGaXJzdFRpbWUiLCJpbnAiLCJzdHJOYW1lIiwidmFsdWUiLCJzaG93QWxsRGVzIiwiaXRtIiwidHJpbSIsInNldE5leHRQYXJ0T2ZGb3JtdWxhIiwiSU1HcyIsIml0ZXIiLCJzdHJuZyIsIklNRyIsInB1c2giLCJzdHJpbmdUb1NldCIsImpvaW4iLCJ6eXdEZXMiLCJpbWlEZXMiLCJwcnpEZXMiLCJ6ZGFEZXMiLCJzZXROYW1lVG9EZXMiLCJuYW0iLCJzZXROaWNrbmFtZVRvRGVzIiwiaW5wQiIsInN1cm5hbSIsInNldFNlbnRlbmNlVG9EZXMiLCJhbGxEZXMiLCJ0ZXh0QXJlYSIsImFyZWFWYWx1ZSIsImVuYWJsZU5leHRQYXJ0T2ZGb3JtIiwibmV4dFBhcnQiLCJhbGxPcm5hbWVudHMiLCJ0aGlzT3JuYW1lbnQiLCJuZXh0T3JuYW1lbnQiLCJtYXJnaW5Cb3R0b20iLCJ6SW5kZXgiLCJ1c2VyRmxvd1ZpYUZpcnN0RmllbGRzZXQiLCJ1c2VyTmFtZSIsInVzZXJOaWNrIiwidXNlck1vdHRvIiwidXNlck5hbWVBY2NlcHQiLCJ1c2VyTmlja0FjY2VwdCIsInVzZXJNb3R0b0FjY2VwdCIsIm5leHRJdGVtIiwicGFydE9mRm9ybSIsImFsbEZpZWxkc0FyZVNldCIsImNoZWNrSWZGaWVsZHNBcmVTZXQiLCJ0ZXJtIiwiY29udGFpbnMiLCJlbmFibGVOZXh0UGFydE9mRm9ybXVsYSIsInNldFRoaXNEYXRhVG9EZXNjcmlwdGlvbiIsImV2ZW50Iiwia2V5Q29kZSIsImZvY3VzIiwiYmx1ciIsInZhbHVlQSIsInZhbHVlQiIsInZhbHVlQyIsImNob29zZVlvdXJBdmF0YXIiLCJjb250YWluZXJzIiwiYXZhdGFycyIsImNob29zZVRoaXNBdmF0YXIiLCJzZXRPbmVQYXJ0T2ZBdHRhY2tEZXNjcmlwdGlvbiIsInN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0cyIsImVuYWJsZUF0dGFja3MiLCJjaGVja2VkIiwiYXYiLCJuZXh0RGVzUGFydCIsImFub3RoZXJOZXh0RGVzUGFydCIsIm90aGVyQW5vdGhlck5leHREZXNQYXJ0Iiwib3B0aW9ucyIsImJhY2tncm91bmRDb2xvciIsImVuYWJsZWRBdHRhY2tzIiwiZGlzYWJsZWRJdGVtIiwic2VsZWN0ZWQiLCJlbmFibGVkQXR0YWNrIiwiaW5pdGlhbGl6ZUF0dGFja3NQYXJ0Iiwib25NT3V0Iiwib25NRW50ZXIiLCJzeW5jaHJvbml6ZVRoaXNCY2tncldpdGhJbWFnZUJlbHRIb3ZlckJja2dyIiwic2VsZWN0TGlzdCIsInEiLCJzeW5jaHJvbml6ZUJhY2tncm91bmRzT2ZPdGhlck9wdG5zIiwiaXNFbnRlciIsImdldENvbXB1dGVkU3R5bGUiLCJiY2dDb2wiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiaW5pdCIsImJ0bnMiLCJiZWx0cyIsImFkZFBvaW50IiwiZGVsZXRlVGhpc0lNRyIsImluaXRpYWxpemVUaGlzU2VjdGlvbiIsImxpc3RBIiwibGlzdEIiLCJpbWFnZXNBIiwiaW1hZ2VzQiIsIm9wdHNBIiwib3B0c0IiLCJkeW5hbWl6ZVRoaXNMaXN0IiwibGlzdCIsImltYWdlcyIsIm90aGVyTGlzdCIsIm9wdFZhbHVlIiwiZW5hYmxlTmV4dEZvcm1QYXJ0IiwiYSIsImIiLCJpbml0aWFsaXplVGhpc1NlbGVjdCIsIml0SXNDbGlja2VkIiwiY2hlY2tzIiwiY29zdE9mVGhpcyJdLCJtYXBwaW5ncyI6Ijs7O0lBQUFBLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4Q0MsZUFBOUM7O0lBRUEsU0FBU0EsZUFBVCxHQUE0QjtJQUMxQkM7SUFDQUMsYUFBVyxZQUFVO0lBQ25CLFFBQUlDLFFBQVFMLFNBQVNNLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBWjtJQUNBRCxVQUFNRSxTQUFOLENBQWdCQyxHQUFoQixDQUFvQixRQUFwQjtJQUNELEdBSEQsRUFHRyxD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
