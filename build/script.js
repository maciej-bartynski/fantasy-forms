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
    function guideReacts(i) {
      var parts = document.querySelectorAll('fieldset');
      var currentPart = parts[i];
      var position = currentPart.offsetTop;
      if (controller === 1) {
        rotateAndHideAside();
      }
      window.scrollTo(0, position);
      var guide = document.querySelector('.aside-foot .user-guide');
      var title = document.querySelector('.aside-foot_title');
      var arr = ['Gdy wpiszesz imię, przydomek i zawołanie, po zatwierdzeniu zmian pojawi się następna część formularza.', 'Po wyborze klasy, pojawi sie okno wyboru ataku spośród uderzeń charakterystycznych dla tej postaci.', 'Wybierz uderzenie, klikając w słowo opisujące je. Przy każdym epitecie widnieje charakterystyka ciosu w Ikonach Żywiołów i Ikonach Uderzeń.', 'Wymyśl nazwe dla uderzenia z poprzedniego kroku. Gdy ją zatwierdzisz, pojawi sie kolejna cześć karty postaci.', 'Po wyborze jednej opcji z każdej listy, pojawi sie kolejna cześć karty postaci.', 'Kliknij tyle opcji, ile chcesz. Każdy zestaw (czyli moc i pietno) zabiera ci pewną ilość punktów Mądrości.', 'Rozdaj pozostałe punkty mądrości na współczynniki postaci: Życie, Mądrość, Ruch i Działanie.'];
      guide.innerText = arr[i];
      var arrB = ['tożsamość:', 'klasa:', 'atak:', 'nazwa ataku:', 'obrona:', 'zdolność i słabość', 'atrybuty:'];
      title.innerText = arrB[i];
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
                }            opt.addEventListener('click', function () {
                    iteratorOfPointsLeft.iterator(cont, x);
                    guideReacts(3);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyIuLi9zb3VyY2UvZHluYW1pY3MvYXNpZGUuanMiLCIuLi9zb3VyY2UvZHluYW1pY3MvYXRha2ktc2V0LXR4dC5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9wb2RzdGF3eS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9rbGFzYS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9hdGFraS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9hdHRyeWJzLmpzIiwiLi4vc291cmNlL2R5bmFtaWNzL29icm9ueS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9tb2NlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0aWFsaXplR3VpZGUpXHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplR3VpZGUoKSB7XHJcbiAgaGlkZVVzZXJHdWlkZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlVXNlckd1aWRlKCkge1xyXG4gIGxldCBvcm5tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWhlYWQnKVxyXG4gIG9ybm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVBbmRIaWRlQXNpZGUpXHJcbiAgbGV0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLWd1aWRlX2hpZGUnKVxyXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZUFuZEhpZGVBc2lkZSlcclxufVxyXG5sZXQgY29udHJvbGxlciA9IDBcclxuXHJcbmZ1bmN0aW9uIHJvdGF0ZUFuZEhpZGVBc2lkZSgpIHtcclxuICBsZXQgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpXHJcbiAgaWYgKGNvbnRyb2xsZXIgPT09IDApIHtcclxuICAgIGFzaWRlLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJ1xyXG4gICAgbGV0IGF3ID0gYXNpZGUub2Zmc2V0V2lkdGhcclxuICAgIGxldCBhaCA9IGFzaWRlLm9mZnNldEhlaWdodFxyXG4gICAgbGV0IHdzcCA9IGFoICsgKChhdyAtIGFoKSAvIDIpXHJcbiAgICBsZXQgeCA9ICh3c3AgKiAtMSkgKyAyMFxyXG4gICAgbGV0IHkgPSB4ICsgJ3B4J1xyXG4gICAgbGV0IHogPSAoKGF3IC0gYWgpIC8gMikgKyAncHgnXHJcbiAgICBhc2lkZS5zdHlsZS5sZWZ0ID0geVxyXG4gICAgYXNpZGUuc3R5bGUudG9wID0gelxyXG4gICAgY29udHJvbGxlciA9IDFcclxuICB9IGVsc2UgaWYgKGNvbnRyb2xsZXIgPT09IDEpIHtcclxuICAgIGFzaWRlLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknXHJcbiAgICBhc2lkZS5zdHlsZS5sZWZ0ID0gMFxyXG4gICAgYXNpZGUuc3R5bGUudG9wID0gMFxyXG4gICAgY29udHJvbGxlciA9IDBcclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGd1aWRlUmVhY3RzKGkpIHtcclxuICBsZXQgcGFydHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmaWVsZHNldCcpO1xyXG4gIGxldCBjdXJyZW50UGFydCA9IHBhcnRzW2ldO1xyXG4gIGxldCBwb3NpdGlvbiA9IGN1cnJlbnRQYXJ0Lm9mZnNldFRvcDtcclxuICBpZiAoY29udHJvbGxlciA9PT0gMSkge1xyXG4gICAgcm90YXRlQW5kSGlkZUFzaWRlKCk7XHJcbiAgfVxyXG4gIHdpbmRvdy5zY3JvbGxUbygwLCBwb3NpdGlvbik7XHJcbiAgbGV0IGd1aWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWZvb3QgLnVzZXItZ3VpZGUnKTtcclxuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtZm9vdF90aXRsZScpO1xyXG4gIGxldCBhcnIgPSBbXHJcbiAgICAnR2R5IHdwaXN6ZXN6IGltacSZLCBwcnp5ZG9tZWsgaSB6YXdvxYJhbmllLCBwbyB6YXR3aWVyZHplbml1IHptaWFuIHBvamF3aSBzacSZIG5hc3TEmXBuYSBjesSZxZvEhyBmb3JtdWxhcnphLicsXHJcbiAgICAnUG8gd3lib3J6ZSBrbGFzeSwgcG9qYXdpIHNpZSBva25vIHd5Ym9ydSBhdGFrdSBzcG/Fm3LDs2QgdWRlcnplxYQgY2hhcmFrdGVyeXN0eWN6bnljaCBkbGEgdGVqIHBvc3RhY2kuJyxcclxuICAgICdXeWJpZXJ6IHVkZXJ6ZW5pZSwga2xpa2FqxIVjIHcgc8WCb3dvIG9waXN1asSFY2UgamUuIFByenkga2HFvGR5bSBlcGl0ZWNpZSB3aWRuaWVqZSBjaGFyYWt0ZXJ5c3R5a2EgY2lvc3UgdyBJa29uYWNoIMW7eXdpb8WCw7N3IGkgSWtvbmFjaCBVZGVyemXFhC4nLFxyXG4gICAgJ1d5bXnFm2wgbmF6d2UgZGxhIHVkZXJ6ZW5pYSB6IHBvcHJ6ZWRuaWVnbyBrcm9rdS4gR2R5IGrEhSB6YXR3aWVyZHppc3osIHBvamF3aSBzaWUga29sZWpuYSBjemXFm8SHIGthcnR5IHBvc3RhY2kuJyxcclxuICAgICdQbyB3eWJvcnplIGplZG5laiBvcGNqaSB6IGthxbxkZWogbGlzdHksIHBvamF3aSBzaWUga29sZWpuYSBjemXFm8SHIGthcnR5IHBvc3RhY2kuJyxcclxuICAgICdLbGlrbmlqIHR5bGUgb3BjamksIGlsZSBjaGNlc3ouIEthxbxkeSB6ZXN0YXcgKGN6eWxpIG1vYyBpIHBpZXRubykgemFiaWVyYSBjaSBwZXduxIUgaWxvxZvEhyBwdW5rdMOzdyBNxIVkcm/Fm2NpLicsXHJcbiAgICAnUm96ZGFqIHBvem9zdGHFgmUgcHVua3R5IG3EhWRyb8WbY2kgbmEgd3Nww7PFgmN6eW5uaWtpIHBvc3RhY2k6IMW7eWNpZSwgTcSFZHJvxZvEhywgUnVjaCBpIER6aWHFgmFuaWUuJ1xyXG4gIF07XHJcbiAgZ3VpZGUuaW5uZXJUZXh0ID0gYXJyW2ldO1xyXG4gIGxldCBhcnJCID0gW1xyXG4gICAgJ3RvxbxzYW1vxZvEhzonLFxyXG4gICAgJ2tsYXNhOicsXHJcbiAgICAnYXRhazonLFxyXG4gICAgJ25hendhIGF0YWt1OicsXHJcbiAgICAnb2Jyb25hOicsXHJcbiAgICAnemRvbG5vxZvEhyBpIHPFgmFib8WbxIcnLFxyXG4gICAgJ2F0cnlidXR5OidcclxuICBdO1xyXG4gIHRpdGxlLmlubmVyVGV4dCA9IGFyckJbaV07XHJcbn1cclxuXHJcbnZhciBpdGVyYXRvck9mUG9pbnRzTGVmdCA9IHtcclxuICBsZWZ0OiAyMCxcclxuICBzcGVudE9uQXR0YWNrOiAwLFxyXG4gIGl0ZXJhdG9yKGNvbnQsIHgpIHtcclxuICAgIGxldCBpdGVyRGV2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWJvZHlfaG93LW11Y2gnKTtcclxuICAgIGxldCBvcHQgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnKVt4XTtcclxuICAgIGxldCBwb2ludHMgPSBvcHQucXVlcnlTZWxlY3RvckFsbCgnaW1nJyk7XHJcbiAgICBsZXQgYW1vdW50ID0gKHBvaW50cy5sZW5ndGggLSAxKTtcclxuICAgIGxldCBiaWxhbnMgPSBhbW91bnQgLSB0aGlzLnNwZW50T25BdHRhY2s7XHJcbiAgICB0aGlzLmxlZnQgPSB0aGlzLmxlZnQgLSBiaWxhbnM7XHJcbiAgICB0aGlzLnNwZW50T25BdHRhY2sgPSBhbW91bnQ7XHJcbiAgICBpdGVyRGV2aWNlLmlubmVyVGV4dCA9ICdQb3pvc3RhxYJvJyArICcgJyArIHRoaXMubGVmdCArICd4JztcclxuICB9LFxyXG4gIGRlbGV0YXRvcigpIHtcclxuICAgIGxldCBpdGVyRGV2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWJvZHlfaG93LW11Y2gnKTtcclxuICAgIHRoaXMubGVmdCA9IHRoaXMubGVmdCArIHRoaXMuc3BlbnRPbkF0dGFjaztcclxuICAgIHRoaXMuc3BlbnRPbkF0dGFjayA9IDA7XHJcbiAgICBpdGVyRGV2aWNlLmlubmVyVGV4dCA9ICdQb3pvc3RhxYJvJyArICcgJyArIHRoaXMubGVmdCArICd4JztcclxuICB9LFxyXG4gIGl0ZXJhdG9yQihpbnRlZ2VyKSB7XHJcbiAgICBsZXQgaXRlckRldmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1ib2R5X2hvdy1tdWNoJyk7XHJcbiAgICB0aGlzLmxlZnQgPSB0aGlzLmxlZnQgKyBpbnRlZ2VyO1xyXG4gICAgaXRlckRldmljZS5pbm5lclRleHQgPSAnUG96b3N0YcWCbycgKyAnICcgKyB0aGlzLmxlZnQgKyAneCc7XHJcbiAgfSxcclxuICBkZWxldGF0b3JCKGludGVnZXIpIHtcclxuICAgIGxldCBpdGVyRGV2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWJvZHlfaG93LW11Y2gnKTtcclxuICAgIHRoaXMubGVmdCA9IHRoaXMubGVmdCAtIGludGVnZXI7XHJcbiAgICBpdGVyRGV2aWNlLmlubmVyVGV4dCA9ICdQb3pvc3RhxYJvJyArICcgJyArIHRoaXMubGVmdCArICd4JztcclxuICB9LFxyXG4gIGVxdWFsaXphdG9yKCkge1xyXG4gICAgbGV0IGl0ZXJEZXZpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtYm9keV9ob3ctbXVjaCcpO1xyXG4gICAgaXRlckRldmljZS5pbm5lclRleHQgPSAnUG96b3N0YcWCbycgKyAnICcgKyB0aGlzLmxlZnQgKyAneCc7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGl0ZXJhdG9yT2ZQb2ludHNMZWZ0OyIsIid1c2Ugc3RyaWN0J1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdGlhbGl6ZSlcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcbiAgbGV0IG9wdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX3NlbGVjdC1saXN0IG9wdGlvbidcclxuICApXHJcbiAgbGV0IGFtb3VudCA9IG9wdHMubGVuZ3RoXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xyXG4gICAgbGV0IGl0ZW0gPSBvcHRzW2ldXHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBzZXRJTUcoaSlcclxuICAgICAgZW5hYmxlU3RyaWtlTmFtZVBhcnQoKVxyXG4gICAgICBzZXRTdHJpa2VOYW1lVG9EZXMoaSlcclxuICAgICAgc2V0UGFydE9mQXR0YWNrRGVzY3JpcHRpb24oaSlcclxuICAgICAgc2V0Rm9yY2VEZXMoaSlcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbmxldCBvbmx5T25jZSA9IDBcclxuXHJcbmZ1bmN0aW9uIGVuYWJsZVN0cmlrZU5hbWVQYXJ0KCkge1xyXG4gIG9ubHlPbmNlKytcclxuICBpZiAob25seU9uY2UgPT09IDEpIHtcclxuICAgIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0cmlrZU5hbWUnKVxyXG4gICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzdHJpa2VOYW1lJylcclxuICB9XHJcbn1cclxuXHJcbmltcG9ydCB7Z3VpZGVSZWFjdHN9IGZyb20gJy4vYXNpZGUuanMnO1xyXG5mdW5jdGlvbiBzZXRQYXJ0T2ZBdHRhY2tEZXNjcmlwdGlvbihpKSB7XHJcbiAgbGV0IGRlc1BhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwIHNwYW4uLS1kZXNfZXBpdGV0JylcclxuICBkZXNQYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpXHJcbiAgbGV0IGFycmF5ID0gW1xyXG4gICAgJ2JydXRhbG5lJyxcclxuICAgICduaWVwcnpld2lkeXdhbG5lJyxcclxuICAgICd3ecSHd2ljem9uZScsXHJcbiAgICAnbmllemF3b2RuZScsXHJcbiAgICAncHJlY3l6eWpuZScsXHJcbiAgICAnem1hc293YW5lJyxcclxuICAgICdwb2RzdMSZcG5lJyxcclxuICAgICd3eXJhY2hvd2FuZScsXHJcbiAgICAnemRyYWR6aWVja2llJyxcclxuICAgICdzemFsZcWEY3plJyxcclxuICAgICdvcHJhY293YW5lIHcgbGFib3JhdG9yaXVtIGFsY2hlbWljem55bScsXHJcbiAgICAnbmllcG93c3RyenltYW5lJyxcclxuICAgICd3xYJhZGN6ZScsXHJcbiAgICAnbXJvY3puZScsXHJcbiAgICAndGFqZW1uZScsXHJcbiAgICAnd8WbY2lla8WCZScsXHJcbiAgICAnd3NwaWVyYW5lIG1vY8SFIG90Y2jFgmFuaScsXHJcbiAgICAncHJ6ZXN5Y29uZSB6xYLEhSBtb2PEhSdcclxuICBdXHJcbiAgZGVzUGFydC5pbm5lclRleHQgPSAnLCAnICsgYXJyYXlbaV1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0SU1HKGkpIHtcclxuICBsZXQgYmVsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdCdcclxuICApW2ldXHJcbiAgbGV0IGltYWcgPSBiZWx0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpWzBdXHJcbiAgbGV0IGF0dHJ5YiA9IGltYWcuZ2V0QXR0cmlidXRlKCdzcmMnKVxyXG4gIGxldCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tcGxhdGVfaW1nX2ljb24nKVxyXG4gIGljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBhdHRyeWIpXHJcbiAgbGV0IGFsbElNR3MgPSBiZWx0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpLmxlbmd0aFxyXG4gIGxldCBzdGFuZGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLXN0YW5kYXJ0X2ltZ19iY2tnJylcclxuICB3aGlsZSAoc3RhbmRhcnQucXVlcnlTZWxlY3RvcignSU1HJykgIT09IG51bGwpIHtcclxuICAgIGxldCBpbWFnZVRvRGVsID0gc3RhbmRhcnQucXVlcnlTZWxlY3RvcignSU1HJylcclxuICAgIHN0YW5kYXJ0LnJlbW92ZUNoaWxkKGltYWdlVG9EZWwpXHJcbiAgfVxyXG4gIGZvciAobGV0IGogPSAwOyBqIDwgYWxsSU1HczsgaisrKSB7XHJcbiAgICBpZiAoaiA+IDApIHtcclxuICAgICAgbGV0IHRoZUlNRyA9IGJlbHQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylbal1cclxuICAgICAgbGV0IHNvdXJjZUlNRyA9IHRoZUlNRy5nZXRBdHRyaWJ1dGUoJ3NyYycpXHJcbiAgICAgIGxldCBuZXdJTUcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICBuZXdJTUcuc2V0QXR0cmlidXRlKCdzcmMnLCBzb3VyY2VJTUcpXHJcbiAgICAgIHN0YW5kYXJ0LmFwcGVuZENoaWxkKG5ld0lNRylcclxuICAgIH1cclxuICB9XHJcbn1cclxubGV0IHNldE5leHRQYXJ0T2ZGb3JtdWxhRm9yVGhlRmlyc3RUaW1lPTA7XHJcbmZ1bmN0aW9uIHNldFN0cmlrZU5hbWVUb0RlcyhpKSB7XHJcbiAgbGV0IGlucCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJuYXp3YXVkZXJ6ZW5pYVwiXScpXHJcbiAgaW5wLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHN0ck5hbWUgPSBpbnAudmFsdWU7XHJcbiAgICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19uYXp3YS1jaW9zdScpO1xyXG4gICAgaXRlbS5pbm5lclRleHQgPSBzdHJOYW1lICsgJyB0byBsZWdlbmRhcm5lJztcclxuICAgIHNob3dBbGxEZXMoKTtcclxuICB9KVxyXG4gIGlucC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgaXRtID0gaW5wLnZhbHVlXHJcbiAgICBpZiAoaXRtLnRyaW0oKSAhPT0gJycmJnNldE5leHRQYXJ0T2ZGb3JtdWxhRm9yVGhlRmlyc3RUaW1lPT09MCkge1xyXG4gICAgICBsZXQgc3RyTmFtZSA9IGlucC52YWx1ZVxyXG4gICAgICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19uYXp3YS1jaW9zdScpXHJcbiAgICAgIGl0ZW0uaW5uZXJUZXh0ID0gc3RyTmFtZSArICcgdG8gbGVnZW5kYXJuZSdcclxuICAgICAgc2hvd0FsbERlcygpO1xyXG4gICAgICBzZXROZXh0UGFydE9mRm9ybXVsYSgpO1xyXG4gICAgICBzZXROZXh0UGFydE9mRm9ybXVsYUZvclRoZUZpcnN0VGltZT0xO1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEZvcmNlRGVzKGkpIHtcclxuICBsZXQgYmVsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdCdcclxuICApW2ldO1xyXG4gIGxldCBJTUdzID0gYmVsdC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVxyXG4gIGxldCBpdGVyID0gSU1Hcy5sZW5ndGhcclxuICBsZXQgc3RybmcgPSBbXVxyXG4gIGZvciAobGV0IGogPSAwOyBqIDwgaXRlcjsgaisrKSB7XHJcbiAgICBsZXQgSU1HID0gSU1Hc1tqXVxyXG4gICAgbGV0IGF0dHJ5YiA9IElNRy5nZXRBdHRyaWJ1dGUoJ3NyYycpXHJcbiAgICBpZiAoaiAhPT0gMCkge1xyXG4gICAgICBpZiAoYXR0cnliID09PSAnaWNvbnMvYnJvbi1iYXJiYS5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnZG9kYXRrb3fEhSBtb2PEhSB1ZGVyemVuaW93xIUnKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL2Jyb24tY3phci5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnZG9kYXRrb3fEhSBtb2PEhSBjemFybm9rc2nEmXNrxIUnKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL2Jyb24tc3Ryei5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnZG9kYXRrb3d5bSBrdW5zenRlbSBzdHJ6ZWxlY2tpbScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvYnJvbi1zemFsLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCdkb2RhdGtvd3ltIHN6YWxlxYRzdHdlbScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvYnJvbi16ZHJhLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCduaWVzcG9kemlhbnltIHpkcmFkbGl3eW0gY2lvc2VtJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy96eXctb2dpZW4uc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ8W8eXdpb8WCZW0gb2duaWEnKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL3p5dy1yb3prbGFkLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCfFvHl3aW/FgmVtIHJvemvFgmFkdScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvenl3LXdvZC5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnxbx5d2lvxYJlbSB3b2R5JylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy96eXctem1pYW5hLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCfFvHl3aW/FgmVtIHptaWFueScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvenl3LXp5d2lhLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCfFvHl3aW/FgmVtIMW8eXdpaScpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnd8WCYXNuxIUgbcSFZHJvxZtjacSFIMW8eXdpb8WCw7N3IGkgdGFsZW50w7N3JylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBsZXQgc3RyaW5nVG9TZXQgPSBzdHJuZy5qb2luKCcsICcpO1xyXG4gIGxldCB6eXdEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfenl3aW9sJyk7XHJcbiAgbGV0IGltaURlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19pbWllJyk7XHJcbiAgbGV0IHByekRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19wcnp5ZG9tZWsnKTtcclxuICBsZXQgemRhRGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3pkYW5pZScpO1xyXG4gIHp5d0Rlcy5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKTtcclxuICBpbWlEZXMuY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJyk7XHJcbiAgcHJ6RGVzLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpO1xyXG4gIHpkYURlcy5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKTtcclxuICB6eXdEZXMuaW5uZXJUZXh0ID0gc3RyaW5nVG9TZXQgKyAnLic7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldE5hbWVUb0RlcygpIHtcclxuICBsZXQgaW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImltaWVcIl0nKVxyXG4gIGxldCBuYW0gPSBpbnAudmFsdWVcclxuICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19pbWllJylcclxuICBpdGVtLmlubmVyVGV4dCA9IG5hbSArICcgJztcclxuICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldE5pY2tuYW1lVG9EZXMoKSB7XHJcbiAgbGV0IGlucEIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJ6eWRvbWVrXCJdJylcclxuICBsZXQgc3VybmFtID0gaW5wQi52YWx1ZVxyXG4gIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3Byenlkb21laycpXHJcbiAgaXRlbS5pbm5lclRleHQgPSBzdXJuYW07XHJcbiAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTZW50ZW5jZVRvRGVzKCkge1xyXG4gIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3pkYW5pZScpXHJcbiAgaXRlbS5pbm5lclRleHQgPSAnIHd6bWFjbmlhIHN3w7NqIGF0YWsgJ1xyXG4gIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJylcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0FsbERlcygpIHtcclxuICBsZXQgYWxsRGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzJylcclxuICBhbGxEZXMuY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJylcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0TmV4dFBhcnRPZkZvcm11bGEoKSB7XHJcbiAgbGV0IHRleHRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm5hendhdWRlcnplbmlhXCJdJyk7XHJcbiAgbGV0IGFyZWFWYWx1ZSA9ICh0ZXh0QXJlYS52YWx1ZSkudHJpbSgpO1xyXG4gIGlmIChhcmVhVmFsdWUgIT09ICcnKSB7XHJcbiAgICBlbmFibGVOZXh0UGFydE9mRm9ybSgpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZW5hYmxlTmV4dFBhcnRPZkZvcm0oKSB7XHJcbiAgbGV0IG5leHRQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzZXQtYycpO1xyXG4gIG5leHRQYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2l0SXNIaWRkZW4nKTtcclxuICBsZXQgYWxsT3JuYW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLmNvcnB1c19zZWN0aW9uX2Zvcm1fb3JuYW1lbnQtbWFya2VyJyk7XHJcbiAgbGV0IHRoaXNPcm5hbWVudCA9IGFsbE9ybmFtZW50c1sxXTtcclxuICB0aGlzT3JuYW1lbnQuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pY29ucy9wb2xlLnN2ZycpO1xyXG4gIHRoaXNPcm5hbWVudC5jbGFzc0xpc3QuYWRkKCdpdElzUGFzc2VkVGhyb3VnaHQnKTtcclxuICBsZXQgbmV4dE9ybmFtZW50ID0gYWxsT3JuYW1lbnRzWzJdO1xyXG4gIG5leHRPcm5hbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbiAgdGhpc09ybmFtZW50LnN0eWxlLm1hcmdpbkJvdHRvbT1cIi0xcmVtXCI7XHJcbiAgdGhpc09ybmFtZW50LnN0eWxlLnpJbmRleD1cIjFcIjtcclxuICBuZXh0UGFydC5zdHlsZS56SW5kZXg9XCIyXCI7XHJcbiAgZ3VpZGVSZWFjdHMoNCk7XHJcbn0iLCJpbXBvcnQgeyBzZXROYW1lVG9EZXMgfSBmcm9tIFwiLi9hdGFraS1zZXQtdHh0LmpzXCI7XHJcbmltcG9ydCB7IHNldE5pY2tuYW1lVG9EZXMgfSBmcm9tIFwiLi9hdGFraS1zZXQtdHh0LmpzXCI7XHJcbmltcG9ydCB7IHNldFNlbnRlbmNlVG9EZXMgfSBmcm9tIFwiLi9hdGFraS1zZXQtdHh0LmpzXCI7XHJcbmltcG9ydCB7IGd1aWRlUmVhY3RzIH0gZnJvbSBcIi4vYXNpZGUuanNcIjtcclxuKFwidXNlIHN0cmljdFwiKTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgdXNlckZsb3dWaWFGaXJzdEZpZWxkc2V0KCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gdXNlckZsb3dWaWFGaXJzdEZpZWxkc2V0KCkge1xyXG4gIGxldCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJpbWllXCJdJyk7XHJcbiAgbGV0IHVzZXJOaWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByenlkb21la1wiXScpO1xyXG4gIGxldCB1c2VyTW90dG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiemF3b2xhbmllXCJdJyk7XHJcbiAgdXNlck5hbWVBY2NlcHQodXNlck5hbWUsIHVzZXJOaWNrKTtcclxuICB1c2VyTmlja0FjY2VwdCh1c2VyTmljaywgdXNlck1vdHRvKTtcclxuICB1c2VyTW90dG9BY2NlcHQodXNlck1vdHRvLCB1c2VyTmFtZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZXJOYW1lQWNjZXB0KGl0ZW0sIG5leHRJdGVtKSB7XHJcbiAgbGV0IHBhcnRPZkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzXCIpO1xyXG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuICAgIGxldCBhbGxGaWVsZHNBcmVTZXQgPSBjaGVja0lmRmllbGRzQXJlU2V0KCk7XHJcbiAgICBsZXQgdGVybSA9IHBhcnRPZkZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXRJc0hpZGRlblwiKTtcclxuICAgIGlmIChhbGxGaWVsZHNBcmVTZXQgPT09IHRydWUgJiYgdGVybSA9PT0gdHJ1ZSkge1xyXG4gICAgICBlbmFibGVOZXh0UGFydE9mRm9ybXVsYSgpO1xyXG4gICAgfVxyXG4gICAgc2V0VGhpc0RhdGFUb0Rlc2NyaXB0aW9uKCk7XHJcbiAgfSk7XHJcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGxldCBhbGxGaWVsZHNBcmVTZXQgPSBjaGVja0lmRmllbGRzQXJlU2V0KCk7XHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgaWYgKGFsbEZpZWxkc0FyZVNldCAhPT0gdHJ1ZSkge1xyXG4gICAgICAgIG5leHRJdGVtLmZvY3VzKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaXRlbS5ibHVyKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiB1c2VyTmlja0FjY2VwdChpdGVtLCBuZXh0SXRlbSkge1xyXG4gIGxldCBwYXJ0T2ZGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc1wiKTtcclxuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgYWxsRmllbGRzQXJlU2V0ID0gY2hlY2tJZkZpZWxkc0FyZVNldCgpO1xyXG4gICAgbGV0IHRlcm0gPSBwYXJ0T2ZGb3JtLmNsYXNzTGlzdC5jb250YWlucyhcIml0SXNIaWRkZW5cIik7XHJcbiAgICBpZiAoYWxsRmllbGRzQXJlU2V0ID09PSB0cnVlICYmIHRlcm0gPT09IHRydWUpIHtcclxuICAgICAgZW5hYmxlTmV4dFBhcnRPZkZvcm11bGEoKTtcclxuICAgIH1cclxuICAgIHNldFRoaXNEYXRhVG9EZXNjcmlwdGlvbigpO1xyXG4gIH0pO1xyXG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBsZXQgYWxsRmllbGRzQXJlU2V0ID0gY2hlY2tJZkZpZWxkc0FyZVNldCgpO1xyXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgIGlmIChhbGxGaWVsZHNBcmVTZXQgIT09IHRydWUpIHtcclxuICAgICAgICBuZXh0SXRlbS5mb2N1cygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGl0ZW0uYmx1cigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuZnVuY3Rpb24gdXNlck1vdHRvQWNjZXB0KGl0ZW0sIG5leHRJdGVtKSB7XHJcbiAgbGV0IHBhcnRPZkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzXCIpO1xyXG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuICAgIGxldCBhbGxGaWVsZHNBcmVTZXQgPSBjaGVja0lmRmllbGRzQXJlU2V0KCk7XHJcbiAgICBsZXQgdGVybSA9IHBhcnRPZkZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXRJc0hpZGRlblwiKTtcclxuICAgIGlmIChhbGxGaWVsZHNBcmVTZXQgPT09IHRydWUgJiYgdGVybSA9PT0gdHJ1ZSkge1xyXG4gICAgICBlbmFibGVOZXh0UGFydE9mRm9ybXVsYSgpO1xyXG4gICAgfVxyXG4gICAgc2V0VGhpc0RhdGFUb0Rlc2NyaXB0aW9uKCk7XHJcbiAgfSk7XHJcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICBpdGVtLmJsdXIoKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tJZkZpZWxkc0FyZVNldCgpIHtcclxuICBsZXQgdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiaW1pZVwiXScpO1xyXG4gIGxldCB1c2VyTmljayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcnp5ZG9tZWtcIl0nKTtcclxuICBsZXQgdXNlck1vdHRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInphd29sYW5pZVwiXScpO1xyXG4gIGxldCB2YWx1ZUEgPSB1c2VyTmFtZS52YWx1ZTtcclxuICBsZXQgdmFsdWVCID0gdXNlck5pY2sudmFsdWU7XHJcbiAgbGV0IHZhbHVlQyA9IHVzZXJNb3R0by52YWx1ZTtcclxuICBpZiAodmFsdWVBLnRyaW0oKSAhPT0gXCJcIikge1xyXG4gICAgaWYgKHZhbHVlQi50cmltKCkgIT09IFwiXCIpIHtcclxuICAgICAgaWYgKHZhbHVlQy50cmltKCkgIT09IFwiXCIpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZW5hYmxlTmV4dFBhcnRPZkZvcm11bGEoKSB7XHJcbiAgbGV0IHRoaXNPcm5hbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcImltZy5jb3JwdXNfc2VjdGlvbl9mb3JtX29ybmFtZW50LW1hcmtlclwiXHJcbiAgKTtcclxuICBsZXQgYWxsT3JuYW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwiaW1nLmNvcnB1c19zZWN0aW9uX2Zvcm1fb3JuYW1lbnQtbWFya2VyXCJcclxuICApO1xyXG4gIHRoaXNPcm5hbWVudC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2ljb25zL3BvbGUuc3ZnXCIpO1xyXG4gIHRoaXNPcm5hbWVudC5jbGFzc0xpc3QuYWRkKFwiaXRJc1Bhc3NlZFRocm91Z2h0XCIpO1xyXG4gIGxldCBuZXh0T3JuYW1lbnQgPSBhbGxPcm5hbWVudHNbMV07XHJcbiAgbmV4dE9ybmFtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJpdElzSGlkZGVuXCIpO1xyXG4gIGxldCBwYXJ0T2ZGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc1wiKTtcclxuICBwYXJ0T2ZGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJpdElzSGlkZGVuXCIpO1xyXG4gIGd1aWRlUmVhY3RzKDEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRUaGlzRGF0YVRvRGVzY3JpcHRpb24oKSB7XHJcbiAgc2V0TmFtZVRvRGVzKCk7XHJcbiAgc2V0Tmlja25hbWVUb0RlcygpO1xyXG4gIHNldFNlbnRlbmNlVG9EZXMoKTtcclxufVxyXG4iLCJpbXBvcnQgaXRlcmF0b3JPZlBvaW50c0xlZnQgZnJvbSAnLi9hc2lkZS5qcyc7XHJcbmltcG9ydCB7Z3VpZGVSZWFjdHN9IGZyb20gJy4vYXNpZGUuanMnO1xyXG4ndXNlIHN0cmljdCc7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjaG9vc2VZb3VyQXZhdGFyKVxyXG5mdW5jdGlvbiBjaG9vc2VZb3VyQXZhdGFyICgpIHtcclxuICBsZXQgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyJylcclxuICBsZXQgYXZhdGFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9yYWRpby1sYWItY29udGFpbmVyJylcclxuICBsZXQgYW1vdW50ID0gYXZhdGFycy5sZW5ndGhcclxuICBmb3IgKGxldCBpID0gMDtpIDwgYW1vdW50O2krKykge1xyXG4gICAgbGV0IGl0ZW0gPSBhdmF0YXJzW2ldXHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBjaG9vc2VUaGlzQXZhdGFyKGl0ZW0sIGF2YXRhcnMsIGFtb3VudClcclxuICAgICAgc2V0T25lUGFydE9mQXR0YWNrRGVzY3JpcHRpb24oaSlcclxuICAgICAgc3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRzKGNvbnRhaW5lcnMpXHJcbiAgICAgIGVuYWJsZUF0dGFja3MoaSlcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGNob29zZVRoaXNBdmF0YXIgKGl0ZW0sIGF2YXRhcnMsIGFtb3VudCkge1xyXG4gIGl0ZW0ucXVlcnlTZWxlY3RvcignaW5wdXQnKS5jaGVja2VkID0gdHJ1ZTtcclxuICBmb3IgKGxldCBpPTA7IGk8YW1vdW50OyBpKyspe1xyXG4gICAgICBsZXQgYXYgPSBhdmF0YXJzW2ldO1xyXG4gICAgICBhdi5jbGFzc0xpc3QucmVtb3ZlKCdpc0NsaWNrZWQnKTtcclxuICB9XHJcbiAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpc0NsaWNrZWQnKTtcclxuICBpdGVyYXRvck9mUG9pbnRzTGVmdC5kZWxldGF0b3IoKTtcclxuICBndWlkZVJlYWN0cygyKTtcclxufVxyXG5mdW5jdGlvbiBzZXRPbmVQYXJ0T2ZBdHRhY2tEZXNjcmlwdGlvbiAoaSkge1xyXG4gIGxldCBkZXNQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncCBzcGFuLi0tZGVzX2tsYXNhJylcclxuICBsZXQgYXJyYXkgPSBbXHJcbiAgICAnIHVkZXJ6ZW5pZSBicm9uacSFIGJydXRhbG7EhS4nLFxyXG4gICAgJyB1ZGVyemVuaWUgYnJvbmnEhSBzdHJ6ZWxlY2vEhS4nLFxyXG4gICAgJyB1ZGVyemVuaWUgYnJvbmnEhSB6ZHJhZHppZWNrxIUuJyxcclxuICAgICcgdWRlcnplbmllIGJyb25pxIUgc3phbGXFhGN6xIUuJyxcclxuICAgICcgdWRlcnplbmllIGJyb25pxIUgc3phcmxhdGHFhHNrxIUuJyxcclxuICAgICcgdWRlcnplbmllIGJyb25pxIUgbHViIGN6eW1rb2x3aWVrLCBjbyB3cGFkbmllIGthcsWCb3dpIHcgxYJhcHNrYS4nXHJcbiAgXVxyXG4gIGRlc1BhcnQuaW5uZXJUZXh0ID0gYXJyYXlbaV1cclxuICBsZXQgbmV4dERlc1BhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwIHNwYW4uLS1kZXNfZXBpdGV0Jyk7XHJcbiAgbmV4dERlc1BhcnQuY2xhc3NMaXN0LmFkZCgnaXRzSGlkZGVuJyk7XHJcbiAgbGV0IGFub3RoZXJOZXh0RGVzUGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc196eXdpb2wnKTtcclxuICBhbm90aGVyTmV4dERlc1BhcnQuY2xhc3NMaXN0LmFkZCgnaXRzSGlkZGVuJyk7XHJcbiAgbGV0IG90aGVyQW5vdGhlck5leHREZXNQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX2ltaWUnKTtcclxuICBvdGhlckFub3RoZXJOZXh0RGVzUGFydC5jbGFzc0xpc3QuYWRkKCdpdHNIaWRkZW4nKTtcclxuICBsZXQgcHJ6RGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3Byenlkb21laycpO1xyXG4gIGxldCB6ZGFEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfemRhbmllJyk7XHJcbiAgcHJ6RGVzLmNsYXNzTGlzdC5hZGQoJ2l0c0hpZGRlbicpO1xyXG4gIHpkYURlcy5jbGFzc0xpc3QuYWRkKCdpdHNIaWRkZW4nKTtcclxufVxyXG5mdW5jdGlvbiBzeW5jaHJvbml6ZUJhY2tncm91bmRzT2ZPdGhlck9wdHMgKGNvbnRhaW5lcnMpIHtcclxuICBsZXQgYW1vdW50ID0gY29udGFpbmVycy5sZW5ndGhcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XHJcbiAgICBsZXQgY29udCA9IGNvbnRhaW5lcnNbaV1cclxuICAgIGxldCBvcHRpb25zID0gY29udC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKVxyXG4gICAgbGV0IGl0ZXIgPSBvcHRpb25zLmxlbmd0aFxyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVyOyB4KyspIHtcclxuICAgICAgbGV0IGJlbHQgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnKVt4XVxyXG4gICAgICBiZWx0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdpbmhlcml0J1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBlbmFibGVBdHRhY2tzIChpKSB7XHJcbiAgbGV0IGVuYWJsZWRBdHRhY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXInKVxyXG4gIGZvciAobGV0IHggPSAwOyB4IDwgNjsgeCsrKSB7XHJcbiAgICBsZXQgZGlzYWJsZWRJdGVtID0gZW5hYmxlZEF0dGFja3NbeF1cclxuICAgIGRpc2FibGVkSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdlbmFibGVkJylcclxuICAgIGxldCBvcHRzID0gZGlzYWJsZWRJdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpXHJcbiAgICBsZXQgYW1vdW50ID0gb3B0cy5sZW5ndGhcclxuICAgIGZvciAobGV0IGogPSAwO2ogPCBhbW91bnQ7aisrKSB7XHJcbiAgICAgIGlmIChvcHRzW2pdLnNlbGVjdGVkID09PSB0cnVlKSB7XHJcbiAgICAgICAgb3B0c1tqXS5zZWxlY3RlZCA9IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgbGV0IGVuYWJsZWRBdHRhY2sgPSBlbmFibGVkQXR0YWNrc1tpXVxyXG4gIGVuYWJsZWRBdHRhY2suY2xhc3NMaXN0LmFkZCgnZW5hYmxlZCcpXHJcbn1cclxuIiwiaW1wb3J0IGl0ZXJhdG9yT2ZQb2ludHNMZWZ0IGZyb20gJy4vYXNpZGUuanMnO1xyXG5pbXBvcnQge2d1aWRlUmVhY3RzfSBmcm9tICcuL2FzaWRlLmpzJztcclxuJ3VzZSBzdHJpY3QnO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdGlhbGl6ZUF0dGFja3NQYXJ0KTtcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVBdHRhY2tzUGFydCgpIHtcclxuICAgIGxldCBjb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXInKTtcclxuICAgIGxldCBhbW91bnQgPSBjb250YWluZXJzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50OyBpKyspIHtcclxuICAgICAgICBsZXQgY29udCA9IGNvbnRhaW5lcnNbaV07XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpO1xyXG4gICAgICAgIGxldCBpdGVyID0gb3B0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVyOyB4KyspIHtcclxuICAgICAgICAgICAgbGV0IG9wdCA9IG9wdGlvbnNbeF07XHJcbiAgICAgICAgICAgIG9wdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIG9uTU91dCk7XHJcbiAgICAgICAgICAgIG9wdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgb25NRW50ZXIpO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gb25NRW50ZXIoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0LnNlbGVjdGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN5bmNocm9uaXplVGhpc0Jja2dyV2l0aEltYWdlQmVsdEhvdmVyQmNrZ3Iob3B0LCBjb250LCB4LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uTU91dCgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvcHQuc2VsZWN0ZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3luY2hyb25pemVUaGlzQmNrZ3JXaXRoSW1hZ2VCZWx0SG92ZXJCY2tncihvcHQsIGNvbnQsIHgsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgb3B0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaXRlcmF0b3JPZlBvaW50c0xlZnQuaXRlcmF0b3IoY29udCwgeCk7XHJcbiAgICAgICAgICAgICAgICBndWlkZVJlYWN0cygzKTtcclxuICAgICAgICAgICAgICAgIHN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0bnMoY29udCwgaXRlcik7XHJcbiAgICAgICAgICAgICAgICBzeW5jaHJvbml6ZVRoaXNCY2tncldpdGhJbWFnZUJlbHRIb3ZlckJja2dyKG9wdCwgY29udCwgeCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0bnMoY29udCwgaXRlcikge1xyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVyOyB4KyspIHtcclxuICAgICAgICBsZXQgYmVsdCA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdCcpW3hdO1xyXG4gICAgICAgIGJlbHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJpbmhlcml0XCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN5bmNocm9uaXplVGhpc0Jja2dyV2l0aEltYWdlQmVsdEhvdmVyQmNrZ3Iob3B0LCBjb250LCB4LCBpc0VudGVyKSB7XHJcbiAgICBsZXQgYmVsdCA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdCcpW3hdO1xyXG4gICAgaWYgKGlzRW50ZXIgPT09IHRydWUpIHtcclxuICAgICAgICBsZXQgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShvcHQpO1xyXG4gICAgICAgIGxldCBiY2dDb2wgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XHJcbiAgICAgICAgYmVsdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBiY2dDb2w7XHJcbiAgICB9IGVsc2UgaWYgKGlzRW50ZXIgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgYmVsdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImluaGVyaXRcIjtcclxuICAgIH1cclxufSIsImltcG9ydCBpdGVyYXRvck9mUG9pbnRzTGVmdCBmcm9tICcuL2FzaWRlLmpzJztcclxuJ3VzZSBzdHJpY3QnO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdCk7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgbGV0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHMtMl9maWVsZHNldC1kX2NvbnRhaW5lcl9hdHJ5YiAuLS1iZWx0X2ljb24tY29udGFpbmVyJyk7XHJcbiAgICBsZXQgYmVsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHMtMl9maWVsZHNldC1kX2NvbnRhaW5lcl9hdHJ5YiAuLS1iZWx0X2JvZHktY29udGFpbmVyX2JvZHknKTtcclxuICAgIGxldCBpdGVyID0gYnRucy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXI7IGkrKykge1xyXG4gICAgICAgIGlmIChpID4gNCkge1xyXG4gICAgICAgICAgICBsZXQgYXR0cnliID0gYnRuc1tpXTtcclxuICAgICAgICAgICAgbGV0IGJlbHQgPSBiZWx0c1tpXTtcclxuICAgICAgICAgICAgYXR0cnliLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZXJhdG9yT2ZQb2ludHNMZWZ0LmxlZnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkUG9pbnQoYmVsdClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb2ludChiZWx0KSB7XHJcbiAgICBsZXQgSU1HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnSU1HJyk7XHJcbiAgICBJTUcuc2V0QXR0cmlidXRlKCdzcmMnLCAnaWNvbnMvaWtvbmEtcG90ZWcuc3ZnJyk7XHJcbiAgICBiZWx0LmFwcGVuZENoaWxkKElNRyk7XHJcbiAgICAvL2Ftb3VudE9mUG9pbnRzLS07XHJcbiAgICBpdGVyYXRvck9mUG9pbnRzTGVmdC5sZWZ0LS07XHJcbiAgICBpdGVyYXRvck9mUG9pbnRzTGVmdC5lcXVhbGl6YXRvcigpO1xyXG4gICAgSU1HLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRlbGV0ZVRoaXNJTUcoSU1HKVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlVGhpc0lNRyh4KSB7XHJcbiAgICB4LnJlbW92ZSgpO1xyXG4gICAgLy9hbW91bnRPZlBvaW50cysrO1xyXG4gICAgaXRlcmF0b3JPZlBvaW50c0xlZnQubGVmdCsrO1xyXG4gICAgaXRlcmF0b3JPZlBvaW50c0xlZnQuZXF1YWxpemF0b3IoKTtcclxufSIsImltcG9ydCB7Z3VpZGVSZWFjdHN9IGZyb20gJy4vYXNpZGUuanMnO1xyXG5cInVzZSBzdHJpY3RcIjtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdGlhbGl6ZVRoaXNTZWN0aW9uKTtcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVUaGlzU2VjdGlvbigpIHtcclxuICAgIGxldCBsaXN0QSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNldC1jICN6YXNsb25hXCJcclxuICAgICk7XHJcbiAgICBsZXQgbGlzdEIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzZXQtYyAjcGFuY2VyelwiXHJcbiAgICApO1xyXG4gICAgbGV0IGltYWdlc0EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgIFwiLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzZXQtY19pbWdzX2ltZy5hXCJcclxuICAgICk7XHJcbiAgICBsZXQgaW1hZ2VzQiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNldC1jX2ltZ3NfaW1nLmJcIlxyXG4gICAgKTtcclxuICAgIGxldCBvcHRzQSA9IGxpc3RBLnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb25cIik7XHJcbiAgICBsZXQgb3B0c0IgPSBsaXN0Qi5xdWVyeVNlbGVjdG9yQWxsKFwib3B0aW9uXCIpO1xyXG4gICAgZHluYW1pemVUaGlzTGlzdChsaXN0QSwgb3B0c0EsIGltYWdlc0EsIGxpc3RCKTtcclxuICAgIGR5bmFtaXplVGhpc0xpc3QobGlzdEIsIG9wdHNCLCBpbWFnZXNCLCBsaXN0QSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGR5bmFtaXplVGhpc0xpc3QobGlzdCwgb3B0cywgaW1hZ2VzLCBvdGhlckxpc3QpIHtcclxuICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gbGlzdC52YWx1ZTtcclxuICAgICAgICBsZXQgaXRlciA9IG9wdHMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaXRlciAtIDE7IGorKykge1xyXG4gICAgICAgICAgICBpbWFnZXNbal0uY2xhc3NMaXN0LmFkZChcIml0SXNVbnNlbGVjdGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXI7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgb3B0ID0gb3B0c1tpXTtcclxuICAgICAgICAgICAgbGV0IG9wdFZhbHVlID0gb3B0LnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IG9wdFZhbHVlICYmIGkgIT09IDMpIHtcclxuICAgICAgICAgICAgICAgIGltYWdlc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiaXRJc1Vuc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZW5hYmxlTmV4dEZvcm1QYXJ0KGxpc3QsIG90aGVyTGlzdCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZW5hYmxlTmV4dEZvcm1QYXJ0KGxpc3QsIG90aGVyTGlzdCkge1xyXG4gICAgbGV0IGEgPSBsaXN0LnZhbHVlO1xyXG4gICAgbGV0IGIgPSBvdGhlckxpc3QudmFsdWU7XHJcbiAgICBpZiAoYSAhPT0gXCJcIiAmJiBiICE9PSBcIlwiKSB7XHJcbiAgICAgICAgbGV0IG5leHRQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzLTInKTtcclxuICAgICAgICBuZXh0UGFydC5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbiAgICAgICAgbGV0IGFsbE9ybmFtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZy5jb3JwdXNfc2VjdGlvbl9mb3JtX29ybmFtZW50LW1hcmtlcicpO1xyXG4gICAgICAgIGxldCB0aGlzT3JuYW1lbnQgPSBhbGxPcm5hbWVudHNbMl07XHJcbiAgICAgICAgdGhpc09ybmFtZW50LnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaWNvbnMvcG9sZS5zdmcnKTtcclxuICAgICAgICB0aGlzT3JuYW1lbnQuY2xhc3NMaXN0LmFkZCgnaXRJc1Bhc3NlZFRocm91Z2h0Jyk7XHJcbiAgICAgICAgbGV0IG5leHRPcm5hbWVudCA9IGFsbE9ybmFtZW50c1szXTtcclxuICAgICAgICBuZXh0T3JuYW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0hpZGRlbicpO1xyXG4gICAgICAgIGd1aWRlUmVhY3RzKDUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IGl0ZXJhdG9yT2ZQb2ludHNMZWZ0IGZyb20gJy4vYXNpZGUuanMnO1xyXG5pbXBvcnQge2d1aWRlUmVhY3RzfSBmcm9tICcuL2FzaWRlLmpzJztcclxuJ3VzZSBzdHJpY3QnO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdGlhbGl6ZVRoaXNTZWxlY3QpXHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplVGhpc1NlbGVjdCgpIHtcclxuICAgIGxldCBvcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzLTJfZmllbGRzZXQtZF9jb250YWluZXJfbW9jZScpO1xyXG4gICAgbGV0IGl0ZXIgPSBvcHRpb25zLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcjsgaSsrKSB7XHJcbiAgICAgICAgbGV0IG9wdCA9IG9wdGlvbnNbaV07XHJcbiAgICAgICAgb3B0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpdElzQ2xpY2tlZChvcHQsIG9wdGlvbnMsIGl0ZXIsIGkpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gaXRJc0NsaWNrZWQob3B0LCBvcHRzLCBpdGVyLCBpKSB7XHJcbiAgICBsZXQgY2hlY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cIm1vYy1waWV0bm9cIl0nKTtcclxuICAgIGxldCBjb3N0T2ZUaGlzID0gWzEsMiwyLDEsMywxXTtcclxuICAgIGlmIChjaGVja3NbaV0uY2hlY2tlZD09PXRydWUpe1xyXG4gICAgICAgIGNoZWNrc1tpXS5jaGVja2VkPWZhbHNlO1xyXG4gICAgICAgIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0Lml0ZXJhdG9yQihjb3N0T2ZUaGlzW2ldKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGNoZWNrc1tpXS5jaGVja2VkPXRydWU7XHJcbiAgICAgICAgaXRlcmF0b3JPZlBvaW50c0xlZnQuZGVsZXRhdG9yQihjb3N0T2ZUaGlzW2ldKTtcclxuICAgICAgICBndWlkZVJlYWN0cyg2KTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgaXRlcjsgaisrKSB7XHJcbiAgICAgICAgaWYgKGNoZWNrc1tqXS5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIG9wdHNbal0uY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hlY2tzW2pdLmNoZWNrZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIG9wdHNbal0uY2xhc3NMaXN0LmFkZCgnaXRJc0hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdGlhbGl6ZUd1aWRlIiwiaGlkZVVzZXJHdWlkZSIsIm9ybm0iLCJxdWVyeVNlbGVjdG9yIiwicm90YXRlQW5kSGlkZUFzaWRlIiwiYnRuIiwiY29udHJvbGxlciIsImFzaWRlIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJhdyIsIm9mZnNldFdpZHRoIiwiYWgiLCJvZmZzZXRIZWlnaHQiLCJ3c3AiLCJ4IiwieSIsInoiLCJsZWZ0IiwidG9wIiwiZ3VpZGVSZWFjdHMiLCJpIiwicGFydHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3VycmVudFBhcnQiLCJwb3NpdGlvbiIsIm9mZnNldFRvcCIsIndpbmRvdyIsInNjcm9sbFRvIiwiZ3VpZGUiLCJ0aXRsZSIsImFyciIsImlubmVyVGV4dCIsImFyckIiLCJpdGVyYXRvck9mUG9pbnRzTGVmdCIsInNwZW50T25BdHRhY2siLCJpdGVyYXRvciIsImNvbnQiLCJpdGVyRGV2aWNlIiwib3B0IiwicG9pbnRzIiwiYW1vdW50IiwibGVuZ3RoIiwiYmlsYW5zIiwiZGVsZXRhdG9yIiwiaXRlcmF0b3JCIiwiaW50ZWdlciIsImRlbGV0YXRvckIiLCJlcXVhbGl6YXRvciIsImluaXRpYWxpemUiLCJvcHRzIiwiaXRlbSIsInNldElNRyIsImVuYWJsZVN0cmlrZU5hbWVQYXJ0Iiwic2V0U3RyaWtlTmFtZVRvRGVzIiwic2V0UGFydE9mQXR0YWNrRGVzY3JpcHRpb24iLCJzZXRGb3JjZURlcyIsIm9ubHlPbmNlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZGVzUGFydCIsImFycmF5IiwiYmVsdCIsImltYWciLCJhdHRyeWIiLCJnZXRBdHRyaWJ1dGUiLCJpY29uIiwic2V0QXR0cmlidXRlIiwiYWxsSU1HcyIsInN0YW5kYXJ0IiwiaW1hZ2VUb0RlbCIsInJlbW92ZUNoaWxkIiwiaiIsInRoZUlNRyIsInNvdXJjZUlNRyIsIm5ld0lNRyIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInNldE5leHRQYXJ0T2ZGb3JtdWxhRm9yVGhlRmlyc3RUaW1lIiwiaW5wIiwic3RyTmFtZSIsInZhbHVlIiwic2hvd0FsbERlcyIsIml0bSIsInRyaW0iLCJzZXROZXh0UGFydE9mRm9ybXVsYSIsIklNR3MiLCJpdGVyIiwic3RybmciLCJJTUciLCJwdXNoIiwic3RyaW5nVG9TZXQiLCJqb2luIiwienl3RGVzIiwiaW1pRGVzIiwicHJ6RGVzIiwiemRhRGVzIiwic2V0TmFtZVRvRGVzIiwibmFtIiwic2V0Tmlja25hbWVUb0RlcyIsImlucEIiLCJzdXJuYW0iLCJzZXRTZW50ZW5jZVRvRGVzIiwiYWxsRGVzIiwidGV4dEFyZWEiLCJhcmVhVmFsdWUiLCJlbmFibGVOZXh0UGFydE9mRm9ybSIsIm5leHRQYXJ0IiwiYWxsT3JuYW1lbnRzIiwidGhpc09ybmFtZW50IiwiYWRkIiwibmV4dE9ybmFtZW50IiwibWFyZ2luQm90dG9tIiwiekluZGV4IiwidXNlckZsb3dWaWFGaXJzdEZpZWxkc2V0IiwidXNlck5hbWUiLCJ1c2VyTmljayIsInVzZXJNb3R0byIsInVzZXJOYW1lQWNjZXB0IiwidXNlck5pY2tBY2NlcHQiLCJ1c2VyTW90dG9BY2NlcHQiLCJuZXh0SXRlbSIsInBhcnRPZkZvcm0iLCJhbGxGaWVsZHNBcmVTZXQiLCJjaGVja0lmRmllbGRzQXJlU2V0IiwidGVybSIsImNvbnRhaW5zIiwiZW5hYmxlTmV4dFBhcnRPZkZvcm11bGEiLCJzZXRUaGlzRGF0YVRvRGVzY3JpcHRpb24iLCJldmVudCIsImtleUNvZGUiLCJmb2N1cyIsImJsdXIiLCJ2YWx1ZUEiLCJ2YWx1ZUIiLCJ2YWx1ZUMiLCJjaG9vc2VZb3VyQXZhdGFyIiwiY29udGFpbmVycyIsImF2YXRhcnMiLCJjaG9vc2VUaGlzQXZhdGFyIiwic2V0T25lUGFydE9mQXR0YWNrRGVzY3JpcHRpb24iLCJzeW5jaHJvbml6ZUJhY2tncm91bmRzT2ZPdGhlck9wdHMiLCJlbmFibGVBdHRhY2tzIiwiY2hlY2tlZCIsImF2IiwibmV4dERlc1BhcnQiLCJhbm90aGVyTmV4dERlc1BhcnQiLCJvdGhlckFub3RoZXJOZXh0RGVzUGFydCIsIm9wdGlvbnMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJlbmFibGVkQXR0YWNrcyIsImRpc2FibGVkSXRlbSIsInNlbGVjdGVkIiwiZW5hYmxlZEF0dGFjayIsImluaXRpYWxpemVBdHRhY2tzUGFydCIsIm9uTU91dCIsIm9uTUVudGVyIiwic3luY2hyb25pemVUaGlzQmNrZ3JXaXRoSW1hZ2VCZWx0SG92ZXJCY2tnciIsInN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0bnMiLCJpc0VudGVyIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImJjZ0NvbCIsImdldFByb3BlcnR5VmFsdWUiLCJpbml0IiwiYnRucyIsImJlbHRzIiwiYWRkUG9pbnQiLCJkZWxldGVUaGlzSU1HIiwiaW5pdGlhbGl6ZVRoaXNTZWN0aW9uIiwibGlzdEEiLCJsaXN0QiIsImltYWdlc0EiLCJpbWFnZXNCIiwib3B0c0EiLCJvcHRzQiIsImR5bmFtaXplVGhpc0xpc3QiLCJsaXN0IiwiaW1hZ2VzIiwib3RoZXJMaXN0Iiwib3B0VmFsdWUiLCJlbmFibGVOZXh0Rm9ybVBhcnQiLCJhIiwiYiIsImluaXRpYWxpemVUaGlzU2VsZWN0IiwiaXRJc0NsaWNrZWQiLCJjaGVja3MiLCJjb3N0T2ZUaGlzIl0sIm1hcHBpbmdzIjoiOzs7SUFBQUEsU0FBU0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDQyxlQUE5Qzs7SUFFQSxTQUFTQSxlQUFULEdBQTJCO0lBQ3pCQztJQUNEOztJQUVELFNBQVNBLGFBQVQsR0FBeUI7SUFDdkIsTUFBSUMsT0FBT0osU0FBU0ssYUFBVCxDQUF1QixhQUF2QixDQUFYO0lBQ0FELE9BQUtILGdCQUFMLENBQXNCLE9BQXRCLEVBQStCSyxrQkFBL0I7SUFDQSxNQUFJQyxNQUFNUCxTQUFTSyxhQUFULENBQXVCLGtCQUF2QixDQUFWO0lBQ0FFLE1BQUlOLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCSyxrQkFBOUI7SUFDRDtJQUNELElBQUlFLGFBQWEsQ0FBakI7O0lBRUEsU0FBU0Ysa0JBQVQsR0FBOEI7SUFDNUIsTUFBSUcsUUFBUVQsU0FBU0ssYUFBVCxDQUF1QixPQUF2QixDQUFaO0lBQ0EsTUFBSUcsZUFBZSxDQUFuQixFQUFzQjtJQUNwQkMsVUFBTUMsS0FBTixDQUFZQyxTQUFaLEdBQXdCLGVBQXhCO0lBQ0EsUUFBSUMsS0FBS0gsTUFBTUksV0FBZjtJQUNB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
