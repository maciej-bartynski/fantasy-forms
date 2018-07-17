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
        this.animateOptsSpending(opt, amount);
      },
      deletator: function deletator() {
        var iterDevice = document.querySelector('.aside-body_how-much');
        this.left = this.left + this.spentOnAttack;
        this.spentOnAttack = 0;
        iterDevice.innerText = 'Pozostało' + ' ' + this.left + 'x';
      },
      animateOptsSpending: function animateOptsSpending(opt, amount) {
        var coin = document.createElement('IMG');
        coin.setAttribute('src', './icons/ikona-poteg.svg');
        coin.classList.add('itIsCoin');
        var axS = window.scrollY;
        var axX = opt.offsetTop;
        var axZ = axX - axS;
        var axY = opt.offsetLeft;
        coin.style.top = axZ + 'px';
        coin.style.left = axY + 'px';
        document.querySelector('body').appendChild(coin);
        setTimeout(function () {
          coin.style.left = '0';
          coin.style.top = '90%';
          coin.style.width = '55px';
          coin.style.height = '55px';
        }, 0);
        setTimeout(function () {
          document.querySelector('body').removeChild(coin);
          document.querySelector('aside').classList.add('onAdvice');
        }, 550);
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
      var nextPart = document.querySelector('.corpus_section_form_field-C');
      nextPart.classList.remove('itIsHidden');
      var allOrnaments = document.querySelectorAll('img.corpus_section_form_ornament-marker');
      var thisOrnament = allOrnaments[1];
      thisOrnament.setAttribute('src', './icons/pole.2.svg');
      thisOrnament.classList.add('itIsPassedThrought');
      var nextOrnament = allOrnaments[2];
      nextOrnament.classList.remove('itIsHidden');
      thisOrnament.style.boxSize = "border-box";
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
      thisOrnament.setAttribute("src", "./icons/pole.2.svg");
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
            if (i > -1) {
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
        iteratorOfPointsLeft.left--;
        iteratorOfPointsLeft.equalizator();
        IMG.addEventListener('click', function () {
            deleteThisIMG(IMG);
        });
    }

    function deleteThisIMG(x) {
        x.remove();
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
            thisOrnament.setAttribute('src', './icons/pole.2.svg');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyIuLi9zb3VyY2UvZHluYW1pY3MvYXNpZGUuanMiLCIuLi9zb3VyY2UvZHluYW1pY3MvYXRha2ktc2V0LXR4dC5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9wb2RzdGF3eS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9rbGFzYS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9hdGFraS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9hdHRyeWJzLmpzIiwiLi4vc291cmNlL2R5bmFtaWNzL29icm9ueS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9tb2NlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0aWFsaXplR3VpZGUpXHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplR3VpZGUgKCkge1xyXG4gIGhpZGVVc2VyR3VpZGUoKTtcclxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpO1xyXG4gICAgYXNpZGUuY2xhc3NMaXN0LmFkZCgnb25Mb2FkJyk7XHJcbiAgfSwgMClcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZVVzZXJHdWlkZSAoKSB7XHJcbiAgbGV0IG9ybm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtaGVhZCcpXHJcbiAgb3JubS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZUFuZEhpZGVBc2lkZSlcclxuICBsZXQgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItZ3VpZGVfaGlkZScpXHJcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlQW5kSGlkZUFzaWRlKVxyXG59XHJcbmxldCBjb250cm9sbGVyID0gMFxyXG5mdW5jdGlvbiByb3RhdGVBbmRIaWRlQXNpZGUgKCkge1xyXG4gIGxldCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJylcclxuICBpZiAoY29udHJvbGxlciA9PT0gMCkge1xyXG4gICAgbGV0IGhlYWRCZWx0ID0gYXNpZGUucXVlcnlTZWxlY3RvcignLmFzaWRlLWhlYWQnKTtcclxuICAgIGxldCBwaWVjZSA9IGhlYWRCZWx0Lm9mZnNldEhlaWdodDtcclxuICAgIGFzaWRlLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJ1xyXG4gICAgbGV0IGF3ID0gYXNpZGUub2Zmc2V0V2lkdGhcclxuICAgIGxldCBhaCA9IGFzaWRlLm9mZnNldEhlaWdodFxyXG4gICAgbGV0IHdzcCA9IGFoICsgKChhdyAtIGFoKSAvIDIpXHJcbiAgICBsZXQgeCA9ICh3c3AgKiAtMSkgKyBwaWVjZVxyXG4gICAgbGV0IHkgPSB4ICsgJ3B4J1xyXG4gICAgbGV0IHogPSAoKGF3IC0gYWgpIC8gMikgKyAncHgnXHJcbiAgICBhc2lkZS5zdHlsZS5sZWZ0ID0geVxyXG4gICAgYXNpZGUuc3R5bGUuYm90dG9tID0gelxyXG4gICAgY29udHJvbGxlciA9IDFcclxuICB9IGVsc2UgaWYgKGNvbnRyb2xsZXIgPT09IDEpIHtcclxuICAgIGFzaWRlLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknXHJcbiAgICBhc2lkZS5zdHlsZS5sZWZ0ID0gMFxyXG4gICAgYXNpZGUuc3R5bGUuYm90dG9tID0gMFxyXG4gICAgY29udHJvbGxlciA9IDBcclxuICB9XHJcbn1cclxubGV0IGFycmF5V2l0aEl0ZXJzID0gWzAsIDAsIDAsIDAsIDAsIDAsIDBdXHJcbmV4cG9ydCBmdW5jdGlvbiBndWlkZVJlYWN0cyAoaSkge1xyXG4gIGxldCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJyk7XHJcbiAgYXNpZGUuY2xhc3NMaXN0LnJlbW92ZSgnb25BZHZpY2UnKTtcclxuICBhc2lkZS5jbGFzc0xpc3QucmVtb3ZlKCdvbkFkdmljZUInKTtcclxuICBsZXQgcGFydHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmaWVsZHNldCcpXHJcbiAgbGV0IGN1cnJlbnRQYXJ0ID0gcGFydHNbaV1cclxuICBsZXQgcG9zaXRpb24gPSBjdXJyZW50UGFydC5vZmZzZXRUb3BcclxuICBpZiAoYXJyYXlXaXRoSXRlcnNbaV0gPT09IDApIHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbygwLCBwb3NpdGlvbilcclxuICAgIGFycmF5V2l0aEl0ZXJzW2ldID0gMVxyXG4gICAgbGV0IGd1aWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWZvb3QgLnVzZXItZ3VpZGUnKVxyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWZvb3RfdGl0bGUnKVxyXG4gICAgbGV0IGFyciA9IFtcclxuICAgICAgJ0dkeSB3cGlzemVzeiBpbWnEmSwgcHJ6eWRvbWVrIGkgemF3b8WCYW5pZSwgcG8gemF0d2llcmR6ZW5pdSB6bWlhbiBwb2phd2kgc2nEmSBuYXN0xJlwbmEgY3rEmcWbxIcgZm9ybXVsYXJ6YS4nLFxyXG4gICAgICAnUG8gd3lib3J6ZSBrbGFzeSwgcG9qYXdpIHNpZSBva25vIHd5Ym9ydSBhdGFrdSBzcG/Fm3LDs2QgdWRlcnplxYQgY2hhcmFrdGVyeXN0eWN6bnljaCBkbGEgdGVqIHBvc3RhY2kuJyxcclxuICAgICAgJ1d5YmllcnogdWRlcnplbmllLCBrbGlrYWrEhWMgdyBzxYJvd28gb3Bpc3VqxIVjZSBqZS4gUHJ6eSBrYcW8ZHltIGVwaXRlY2llIHdpZG5pZWplIGNoYXJha3RlcnlzdHlrYSBjaW9zdSB3IElrb25hY2ggxbt5d2lvxYLDs3cgaSBJa29uYWNoIFVkZXJ6ZcWELicsXHJcbiAgICAgICdXeW15xZtsIG5hendlIGRsYSB1ZGVyemVuaWEgeiBwb3ByemVkbmllZ28ga3Jva3UuIEdkeSBqxIUgemF0d2llcmR6aXN6LCBwb2phd2kgc2llIGtvbGVqbmEgY3plxZvEhyBrYXJ0eSBwb3N0YWNpLicsXHJcbiAgICAgICdQbyB3eWJvcnplIGplZG5laiBvcGNqaSB6IGthxbxkZWogbGlzdHksIHBvamF3aSBzaWUga29sZWpuYSBjemXFm8SHIGthcnR5IHBvc3RhY2kuJyxcclxuICAgICAgJ0tsaWtuaWogdHlsZSBvcGNqaSwgaWxlIGNoY2Vzei4gS2HFvGR5IHplc3RhdyAoY3p5bGkgbW9jIGkgcGlldG5vKSB6YWJpZXJhIGNpIHBld27EhSBpbG/Fm8SHIHB1bmt0w7N3IE3EhWRyb8WbY2kuJyxcclxuICAgICAgJ1JvemRhaiBwb3pvc3RhxYJlIHB1bmt0eSBtxIVkcm/Fm2NpIG5hIHdzcMOzxYJjenlubmlraSBwb3N0YWNpOiDFu3ljaWUsIE3EhWRyb8WbxIcsIFJ1Y2ggaSBEemlhxYJhbmllLidcclxuICAgIF1cclxuICAgIGd1aWRlLmlubmVyVGV4dCA9IGFycltpXVxyXG4gICAgbGV0IGFyckIgPSBbXHJcbiAgICAgICd0b8W8c2Ftb8WbxIc6JyxcclxuICAgICAgJ2tsYXNhOicsXHJcbiAgICAgICdhdGFrOicsXHJcbiAgICAgICduYXp3YSBhdGFrdTonLFxyXG4gICAgICAnb2Jyb25hOicsXHJcbiAgICAgICd6ZG9sbm/Fm8SHIGkgc8WCYWJvxZvEhycsXHJcbiAgICAgICdhdHJ5YnV0eTonXHJcbiAgICBdXHJcbiAgICB0aXRsZS5pbm5lclRleHQgPSBhcnJCW2ldXHJcbiAgICBpc1NvbWV0aGluZ05ld1RvU2F5KCk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGlzU29tZXRoaW5nTmV3VG9TYXkoKXtcclxuICBsZXQgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpO1xyXG4gIFxyXG4gIGlmIChjb250cm9sbGVyPT09MSl7XHJcbiAgICBsZXQgaGVhZEJlbHQgPSBhc2lkZS5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtaGVhZCcpO1xyXG4gICAgbGV0IHBpZWNlID0gaGVhZEJlbHQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgYXNpZGUuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknXHJcbiAgICBsZXQgYXcgPSBhc2lkZS5vZmZzZXRXaWR0aFxyXG4gICAgbGV0IGFoID0gYXNpZGUub2Zmc2V0SGVpZ2h0XHJcbiAgICBsZXQgd3NwID0gYWggKyAoKGF3IC0gYWgpIC8gMilcclxuICAgIGxldCB4ID0gKHdzcCAqIC0xKSArIHBpZWNlXHJcbiAgICBsZXQgeSA9IHggKyAncHgnXHJcbiAgICBsZXQgeiA9ICgoYXcgLSBhaCkgLyAyKSArICdweCdcclxuICAgIGFzaWRlLnN0eWxlLmxlZnQgPSB5XHJcbiAgICBhc2lkZS5zdHlsZS5ib3R0b20gPSB6XHJcbiAgICBhc2lkZS5jbGFzc0xpc3QuYWRkKCdvbkFkdmljZScpO1xyXG4gIH1cclxuICBlbHNlIGlmIChjb250cm9sbGVyPT09MCl7XHJcbiAgICBhc2lkZS5jbGFzc0xpc3QuYWRkKCdvbkFkdmljZUInKTtcclxuICB9XHJcbn1cclxudmFyIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0ID0ge1xyXG4gIGxlZnQ6IDIwLFxyXG4gIHNwZW50T25BdHRhY2s6IDAsXHJcbiAgaXRlcmF0b3IoY29udCwgeCkge1xyXG4gICAgbGV0IGl0ZXJEZXZpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtYm9keV9ob3ctbXVjaCcpXHJcbiAgICBsZXQgb3B0ID0gY29udC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0JylbeF1cclxuICAgIGxldCBwb2ludHMgPSBvcHQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylcclxuICAgIGxldCBhbW91bnQgPSAocG9pbnRzLmxlbmd0aCAtIDEpXHJcbiAgICBsZXQgYmlsYW5zID0gYW1vdW50IC0gdGhpcy5zcGVudE9uQXR0YWNrXHJcbiAgICB0aGlzLmxlZnQgPSB0aGlzLmxlZnQgLSBiaWxhbnNcclxuICAgIHRoaXMuc3BlbnRPbkF0dGFjayA9IGFtb3VudFxyXG4gICAgaXRlckRldmljZS5pbm5lclRleHQgPSAnUG96b3N0YcWCbycgKyAnICcgKyB0aGlzLmxlZnQgKyAneCdcclxuICAgIHRoaXMuYW5pbWF0ZU9wdHNTcGVuZGluZyhvcHQsIGFtb3VudCk7XHJcbiAgfSxcclxuICBkZWxldGF0b3IoKSB7XHJcbiAgICBsZXQgaXRlckRldmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1ib2R5X2hvdy1tdWNoJylcclxuICAgIHRoaXMubGVmdCA9IHRoaXMubGVmdCArIHRoaXMuc3BlbnRPbkF0dGFja1xyXG4gICAgdGhpcy5zcGVudE9uQXR0YWNrID0gMFxyXG4gICAgaXRlckRldmljZS5pbm5lclRleHQgPSAnUG96b3N0YcWCbycgKyAnICcgKyB0aGlzLmxlZnQgKyAneCdcclxuICB9LFxyXG4gIGFuaW1hdGVPcHRzU3BlbmRpbmcob3B0LCBhbW91bnQpe1xyXG4gICAgbGV0IGNvaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJTUcnKTtcclxuICAgIGNvaW4uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pY29ucy9pa29uYS1wb3RlZy5zdmcnKTtcclxuICAgIGNvaW4uY2xhc3NMaXN0LmFkZCgnaXRJc0NvaW4nKTtcclxuICAgIGxldCBheFMgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgIGxldCBheFggPSBvcHQub2Zmc2V0VG9wO1xyXG4gICAgbGV0IGF4WiA9IGF4WCAtIGF4UztcclxuICAgIGxldCBheFkgPSBvcHQub2Zmc2V0TGVmdDtcclxuICAgIGNvaW4uc3R5bGUudG9wID0gYXhaKydweCc7XHJcbiAgICBjb2luLnN0eWxlLmxlZnQgPSBheFkrJ3B4JztcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChjb2luKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgY29pbi5zdHlsZS5sZWZ0ID0nMCc7XHJcbiAgICAgIGNvaW4uc3R5bGUudG9wID0nOTAlJztcclxuICAgICAgY29pbi5zdHlsZS53aWR0aCA9JzU1cHgnO1xyXG4gICAgICBjb2luLnN0eWxlLmhlaWdodCA9JzU1cHgnO1xyXG4gICAgfSwwKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnJlbW92ZUNoaWxkKGNvaW4pO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpLmNsYXNzTGlzdC5hZGQoJ29uQWR2aWNlJyk7XHJcbiAgICB9LDU1MCk7XHJcbiAgfSxcclxuICBpdGVyYXRvckIoaW50ZWdlcikge1xyXG4gICAgbGV0IGl0ZXJEZXZpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtYm9keV9ob3ctbXVjaCcpXHJcbiAgICB0aGlzLmxlZnQgPSB0aGlzLmxlZnQgKyBpbnRlZ2VyXHJcbiAgICBpdGVyRGV2aWNlLmlubmVyVGV4dCA9ICdQb3pvc3RhxYJvJyArICcgJyArIHRoaXMubGVmdCArICd4J1xyXG4gIH0sXHJcbiAgZGVsZXRhdG9yQihpbnRlZ2VyKSB7XHJcbiAgICBsZXQgaXRlckRldmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1ib2R5X2hvdy1tdWNoJylcclxuICAgIHRoaXMubGVmdCA9IHRoaXMubGVmdCAtIGludGVnZXJcclxuICAgIGl0ZXJEZXZpY2UuaW5uZXJUZXh0ID0gJ1Bvem9zdGHFgm8nICsgJyAnICsgdGhpcy5sZWZ0ICsgJ3gnXHJcbiAgfSxcclxuICBlcXVhbGl6YXRvcigpIHtcclxuICAgIGxldCBpdGVyRGV2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWJvZHlfaG93LW11Y2gnKVxyXG4gICAgaXRlckRldmljZS5pbm5lclRleHQgPSAnUG96b3N0YcWCbycgKyAnICcgKyB0aGlzLmxlZnQgKyAneCdcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgaXRlcmF0b3JPZlBvaW50c0xlZnRcclxuIiwiJ3VzZSBzdHJpY3QnXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0aWFsaXplKVxyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuICBsZXQgb3B0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfc2VsZWN0LWxpc3Qgb3B0aW9uJ1xyXG4gIClcclxuICBsZXQgYW1vdW50ID0gb3B0cy5sZW5ndGhcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XHJcbiAgICBsZXQgaXRlbSA9IG9wdHNbaV1cclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNldElNRyhpKVxyXG4gICAgICBlbmFibGVTdHJpa2VOYW1lUGFydCgpXHJcbiAgICAgIHNldFN0cmlrZU5hbWVUb0RlcyhpKVxyXG4gICAgICBzZXRQYXJ0T2ZBdHRhY2tEZXNjcmlwdGlvbihpKVxyXG4gICAgICBzZXRGb3JjZURlcyhpKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxubGV0IG9ubHlPbmNlID0gMFxyXG5cclxuZnVuY3Rpb24gZW5hYmxlU3RyaWtlTmFtZVBhcnQoKSB7XHJcbiAgb25seU9uY2UrK1xyXG4gIGlmIChvbmx5T25jZSA9PT0gMSkge1xyXG4gICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RyaWtlTmFtZScpXHJcbiAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3N0cmlrZU5hbWUnKVxyXG4gIH1cclxufVxyXG5cclxuaW1wb3J0IHtndWlkZVJlYWN0c30gZnJvbSAnLi9hc2lkZS5qcyc7XHJcbmZ1bmN0aW9uIHNldFBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uKGkpIHtcclxuICBsZXQgZGVzUGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Agc3Bhbi4tLWRlc19lcGl0ZXQnKVxyXG4gIGRlc1BhcnQuY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJylcclxuICBsZXQgYXJyYXkgPSBbXHJcbiAgICAnYnJ1dGFsbmUnLFxyXG4gICAgJ25pZXByemV3aWR5d2FsbmUnLFxyXG4gICAgJ3d5xId3aWN6b25lJyxcclxuICAgICduaWV6YXdvZG5lJyxcclxuICAgICdwcmVjeXp5am5lJyxcclxuICAgICd6bWFzb3dhbmUnLFxyXG4gICAgJ3BvZHN0xJlwbmUnLFxyXG4gICAgJ3d5cmFjaG93YW5lJyxcclxuICAgICd6ZHJhZHppZWNraWUnLFxyXG4gICAgJ3N6YWxlxYRjemUnLFxyXG4gICAgJ29wcmFjb3dhbmUgdyBsYWJvcmF0b3JpdW0gYWxjaGVtaWN6bnltJyxcclxuICAgICduaWVwb3dzdHJ6eW1hbmUnLFxyXG4gICAgJ3fFgmFkY3plJyxcclxuICAgICdtcm9jem5lJyxcclxuICAgICd0YWplbW5lJyxcclxuICAgICd3xZtjaWVrxYJlJyxcclxuICAgICd3c3BpZXJhbmUgbW9jxIUgb3RjaMWCYW5pJyxcclxuICAgICdwcnplc3ljb25lIHrFgsSFIG1vY8SFJ1xyXG4gIF1cclxuICBkZXNQYXJ0LmlubmVyVGV4dCA9ICcsICcgKyBhcnJheVtpXVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRJTUcoaSkge1xyXG4gIGxldCBiZWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0J1xyXG4gIClbaV1cclxuICBsZXQgaW1hZyA9IGJlbHQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylbMF1cclxuICBsZXQgYXR0cnliID0gaW1hZy5nZXRBdHRyaWJ1dGUoJ3NyYycpXHJcbiAgbGV0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1wbGF0ZV9pbWdfaWNvbicpXHJcbiAgaWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIGF0dHJ5YilcclxuICBsZXQgYWxsSU1HcyA9IGJlbHQucXVlcnlTZWxlY3RvckFsbCgnaW1nJykubGVuZ3RoXHJcbiAgbGV0IHN0YW5kYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tc3RhbmRhcnRfaW1nX2Jja2cnKVxyXG4gIHdoaWxlIChzdGFuZGFydC5xdWVyeVNlbGVjdG9yKCdJTUcnKSAhPT0gbnVsbCkge1xyXG4gICAgbGV0IGltYWdlVG9EZWwgPSBzdGFuZGFydC5xdWVyeVNlbGVjdG9yKCdJTUcnKVxyXG4gICAgc3RhbmRhcnQucmVtb3ZlQ2hpbGQoaW1hZ2VUb0RlbClcclxuICB9XHJcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBhbGxJTUdzOyBqKyspIHtcclxuICAgIGlmIChqID4gMCkge1xyXG4gICAgICBsZXQgdGhlSU1HID0gYmVsdC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVtqXVxyXG4gICAgICBsZXQgc291cmNlSU1HID0gdGhlSU1HLmdldEF0dHJpYnV0ZSgnc3JjJylcclxuICAgICAgbGV0IG5ld0lNRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgIG5ld0lNRy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNvdXJjZUlNRylcclxuICAgICAgc3RhbmRhcnQuYXBwZW5kQ2hpbGQobmV3SU1HKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5sZXQgc2V0TmV4dFBhcnRPZkZvcm11bGFGb3JUaGVGaXJzdFRpbWU9MDtcclxuZnVuY3Rpb24gc2V0U3RyaWtlTmFtZVRvRGVzKGkpIHtcclxuICBsZXQgaW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm5hendhdWRlcnplbmlhXCJdJylcclxuICBpbnAuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgc3RyTmFtZSA9IGlucC52YWx1ZTtcclxuICAgIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX25hendhLWNpb3N1Jyk7XHJcbiAgICBpdGVtLmlubmVyVGV4dCA9IHN0ck5hbWUgKyAnIHRvIGxlZ2VuZGFybmUnO1xyXG4gICAgc2hvd0FsbERlcygpO1xyXG4gIH0pXHJcbiAgaW5wLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBpdG0gPSBpbnAudmFsdWVcclxuICAgIGlmIChpdG0udHJpbSgpICE9PSAnJyYmc2V0TmV4dFBhcnRPZkZvcm11bGFGb3JUaGVGaXJzdFRpbWU9PT0wKSB7XHJcbiAgICAgIGxldCBzdHJOYW1lID0gaW5wLnZhbHVlXHJcbiAgICAgIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX25hendhLWNpb3N1JylcclxuICAgICAgaXRlbS5pbm5lclRleHQgPSBzdHJOYW1lICsgJyB0byBsZWdlbmRhcm5lJ1xyXG4gICAgICBzaG93QWxsRGVzKCk7XHJcbiAgICAgIHNldE5leHRQYXJ0T2ZGb3JtdWxhKCk7XHJcbiAgICAgIHNldE5leHRQYXJ0T2ZGb3JtdWxhRm9yVGhlRmlyc3RUaW1lPTE7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Rm9yY2VEZXMoaSkge1xyXG4gIGxldCBiZWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0J1xyXG4gIClbaV07XHJcbiAgbGV0IElNR3MgPSBiZWx0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpXHJcbiAgbGV0IGl0ZXIgPSBJTUdzLmxlbmd0aFxyXG4gIGxldCBzdHJuZyA9IFtdXHJcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBpdGVyOyBqKyspIHtcclxuICAgIGxldCBJTUcgPSBJTUdzW2pdXHJcbiAgICBsZXQgYXR0cnliID0gSU1HLmdldEF0dHJpYnV0ZSgnc3JjJylcclxuICAgIGlmIChqICE9PSAwKSB7XHJcbiAgICAgIGlmIChhdHRyeWIgPT09ICdpY29ucy9icm9uLWJhcmJhLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCdkb2RhdGtvd8SFIG1vY8SFIHVkZXJ6ZW5pb3fEhScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvYnJvbi1jemFyLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCdkb2RhdGtvd8SFIG1vY8SFIGN6YXJub2tzacSZc2vEhScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvYnJvbi1zdHJ6LnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCdkb2RhdGtvd3ltIGt1bnN6dGVtIHN0cnplbGVja2ltJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy9icm9uLXN6YWwuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ2RvZGF0a293eW0gc3phbGXFhHN0d2VtJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy9icm9uLXpkcmEuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ25pZXNwb2R6aWFueW0gemRyYWRsaXd5bSBjaW9zZW0nKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL3p5dy1vZ2llbi5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnxbx5d2lvxYJlbSBvZ25pYScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvenl3LXJvemtsYWQuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ8W8eXdpb8WCZW0gcm96a8WCYWR1JylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy96eXctd29kLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCfFvHl3aW/FgmVtIHdvZHknKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL3p5dy16bWlhbmEuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ8W8eXdpb8WCZW0gem1pYW55JylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy96eXctenl3aWEuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ8W8eXdpb8WCZW0gxbx5d2lpJylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCd3xYJhc27EhSBtxIVkcm/Fm2NpxIUgxbx5d2lvxYLDs3cgaSB0YWxlbnTDs3cnKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCBzdHJpbmdUb1NldCA9IHN0cm5nLmpvaW4oJywgJyk7XHJcbiAgbGV0IHp5d0RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc196eXdpb2wnKTtcclxuICBsZXQgaW1pRGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX2ltaWUnKTtcclxuICBsZXQgcHJ6RGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3Byenlkb21laycpO1xyXG4gIGxldCB6ZGFEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfemRhbmllJyk7XHJcbiAgenl3RGVzLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpO1xyXG4gIGltaURlcy5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKTtcclxuICBwcnpEZXMuY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJyk7XHJcbiAgemRhRGVzLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpO1xyXG4gIHp5d0Rlcy5pbm5lclRleHQgPSBzdHJpbmdUb1NldCArICcuJztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0TmFtZVRvRGVzKCkge1xyXG4gIGxldCBpbnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiaW1pZVwiXScpXHJcbiAgbGV0IG5hbSA9IGlucC52YWx1ZVxyXG4gIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX2ltaWUnKVxyXG4gIGl0ZW0uaW5uZXJUZXh0ID0gbmFtICsgJyAnO1xyXG4gIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJylcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0Tmlja25hbWVUb0RlcygpIHtcclxuICBsZXQgaW5wQiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcnp5ZG9tZWtcIl0nKVxyXG4gIGxldCBzdXJuYW0gPSBpbnBCLnZhbHVlXHJcbiAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfcHJ6eWRvbWVrJylcclxuICBpdGVtLmlubmVyVGV4dCA9IHN1cm5hbTtcclxuICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFNlbnRlbmNlVG9EZXMoKSB7XHJcbiAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfemRhbmllJylcclxuICBpdGVtLmlubmVyVGV4dCA9ICcgd3ptYWNuaWEgc3fDs2ogYXRhayAnXHJcbiAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93QWxsRGVzKCkge1xyXG4gIGxldCBhbGxEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXMnKVxyXG4gIGFsbERlcy5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXROZXh0UGFydE9mRm9ybXVsYSgpIHtcclxuICBsZXQgdGV4dEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibmF6d2F1ZGVyemVuaWFcIl0nKTtcclxuICBsZXQgYXJlYVZhbHVlID0gKHRleHRBcmVhLnZhbHVlKS50cmltKCk7XHJcbiAgaWYgKGFyZWFWYWx1ZSAhPT0gJycpIHtcclxuICAgIGVuYWJsZU5leHRQYXJ0T2ZGb3JtKCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbmFibGVOZXh0UGFydE9mRm9ybSgpIHtcclxuICBsZXQgbmV4dFBhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZC1DJyk7XHJcbiAgbmV4dFBhcnQuY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0hpZGRlbicpO1xyXG4gIGxldCBhbGxPcm5hbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcuY29ycHVzX3NlY3Rpb25fZm9ybV9vcm5hbWVudC1tYXJrZXInKTtcclxuICBsZXQgdGhpc09ybmFtZW50ID0gYWxsT3JuYW1lbnRzWzFdO1xyXG4gIHRoaXNPcm5hbWVudC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ljb25zL3BvbGUuMi5zdmcnKTtcclxuICB0aGlzT3JuYW1lbnQuY2xhc3NMaXN0LmFkZCgnaXRJc1Bhc3NlZFRocm91Z2h0Jyk7XHJcbiAgbGV0IG5leHRPcm5hbWVudCA9IGFsbE9ybmFtZW50c1syXTtcclxuICBuZXh0T3JuYW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0hpZGRlbicpO1xyXG4gIHRoaXNPcm5hbWVudC5zdHlsZS5ib3hTaXplPVwiYm9yZGVyLWJveFwiO1xyXG4gIHRoaXNPcm5hbWVudC5zdHlsZS56SW5kZXg9XCIxXCI7XHJcbiAgbmV4dFBhcnQuc3R5bGUuekluZGV4PVwiMlwiO1xyXG4gIGd1aWRlUmVhY3RzKDQpO1xyXG59IiwiaW1wb3J0IHsgc2V0TmFtZVRvRGVzIH0gZnJvbSBcIi4vYXRha2ktc2V0LXR4dC5qc1wiO1xyXG5pbXBvcnQgeyBzZXROaWNrbmFtZVRvRGVzIH0gZnJvbSBcIi4vYXRha2ktc2V0LXR4dC5qc1wiO1xyXG5pbXBvcnQgeyBzZXRTZW50ZW5jZVRvRGVzIH0gZnJvbSBcIi4vYXRha2ktc2V0LXR4dC5qc1wiO1xyXG5pbXBvcnQgeyBndWlkZVJlYWN0cyB9IGZyb20gXCIuL2FzaWRlLmpzXCI7XHJcbihcInVzZSBzdHJpY3RcIik7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xyXG4gIHVzZXJGbG93VmlhRmlyc3RGaWVsZHNldCgpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHVzZXJGbG93VmlhRmlyc3RGaWVsZHNldCgpIHtcclxuICBsZXQgdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiaW1pZVwiXScpO1xyXG4gIGxldCB1c2VyTmljayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcnp5ZG9tZWtcIl0nKTtcclxuICBsZXQgdXNlck1vdHRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInphd29sYW5pZVwiXScpO1xyXG4gIHVzZXJOYW1lQWNjZXB0KHVzZXJOYW1lLCB1c2VyTmljayk7XHJcbiAgdXNlck5pY2tBY2NlcHQodXNlck5pY2ssIHVzZXJNb3R0byk7XHJcbiAgdXNlck1vdHRvQWNjZXB0KHVzZXJNb3R0bywgdXNlck5hbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VyTmFtZUFjY2VwdChpdGVtLCBuZXh0SXRlbSkge1xyXG4gIGxldCBwYXJ0T2ZGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc1wiKTtcclxuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgYWxsRmllbGRzQXJlU2V0ID0gY2hlY2tJZkZpZWxkc0FyZVNldCgpO1xyXG4gICAgbGV0IHRlcm0gPSBwYXJ0T2ZGb3JtLmNsYXNzTGlzdC5jb250YWlucyhcIml0SXNIaWRkZW5cIik7XHJcbiAgICBpZiAoYWxsRmllbGRzQXJlU2V0ID09PSB0cnVlICYmIHRlcm0gPT09IHRydWUpIHtcclxuICAgICAgZW5hYmxlTmV4dFBhcnRPZkZvcm11bGEoKTtcclxuICAgIH1cclxuICAgIHNldFRoaXNEYXRhVG9EZXNjcmlwdGlvbigpO1xyXG4gIH0pO1xyXG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBsZXQgYWxsRmllbGRzQXJlU2V0ID0gY2hlY2tJZkZpZWxkc0FyZVNldCgpO1xyXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgIGlmIChhbGxGaWVsZHNBcmVTZXQgIT09IHRydWUpIHtcclxuICAgICAgICBuZXh0SXRlbS5mb2N1cygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGl0ZW0uYmx1cigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuZnVuY3Rpb24gdXNlck5pY2tBY2NlcHQoaXRlbSwgbmV4dEl0ZW0pIHtcclxuICBsZXQgcGFydE9mRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNcIik7XHJcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IGFsbEZpZWxkc0FyZVNldCA9IGNoZWNrSWZGaWVsZHNBcmVTZXQoKTtcclxuICAgIGxldCB0ZXJtID0gcGFydE9mRm9ybS5jbGFzc0xpc3QuY29udGFpbnMoXCJpdElzSGlkZGVuXCIpO1xyXG4gICAgaWYgKGFsbEZpZWxkc0FyZVNldCA9PT0gdHJ1ZSAmJiB0ZXJtID09PSB0cnVlKSB7XHJcbiAgICAgIGVuYWJsZU5leHRQYXJ0T2ZGb3JtdWxhKCk7XHJcbiAgICB9XHJcbiAgICBzZXRUaGlzRGF0YVRvRGVzY3JpcHRpb24oKTtcclxuICB9KTtcclxuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgbGV0IGFsbEZpZWxkc0FyZVNldCA9IGNoZWNrSWZGaWVsZHNBcmVTZXQoKTtcclxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICBpZiAoYWxsRmllbGRzQXJlU2V0ICE9PSB0cnVlKSB7XHJcbiAgICAgICAgbmV4dEl0ZW0uZm9jdXMoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpdGVtLmJsdXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHVzZXJNb3R0b0FjY2VwdChpdGVtLCBuZXh0SXRlbSkge1xyXG4gIGxldCBwYXJ0T2ZGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc1wiKTtcclxuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgYWxsRmllbGRzQXJlU2V0ID0gY2hlY2tJZkZpZWxkc0FyZVNldCgpO1xyXG4gICAgbGV0IHRlcm0gPSBwYXJ0T2ZGb3JtLmNsYXNzTGlzdC5jb250YWlucyhcIml0SXNIaWRkZW5cIik7XHJcbiAgICBpZiAoYWxsRmllbGRzQXJlU2V0ID09PSB0cnVlICYmIHRlcm0gPT09IHRydWUpIHtcclxuICAgICAgZW5hYmxlTmV4dFBhcnRPZkZvcm11bGEoKTtcclxuICAgIH1cclxuICAgIHNldFRoaXNEYXRhVG9EZXNjcmlwdGlvbigpO1xyXG4gIH0pO1xyXG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgaXRlbS5ibHVyKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrSWZGaWVsZHNBcmVTZXQoKSB7XHJcbiAgbGV0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImltaWVcIl0nKTtcclxuICBsZXQgdXNlck5pY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJ6eWRvbWVrXCJdJyk7XHJcbiAgbGV0IHVzZXJNb3R0byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJ6YXdvbGFuaWVcIl0nKTtcclxuICBsZXQgdmFsdWVBID0gdXNlck5hbWUudmFsdWU7XHJcbiAgbGV0IHZhbHVlQiA9IHVzZXJOaWNrLnZhbHVlO1xyXG4gIGxldCB2YWx1ZUMgPSB1c2VyTW90dG8udmFsdWU7XHJcbiAgaWYgKHZhbHVlQS50cmltKCkgIT09IFwiXCIpIHtcclxuICAgIGlmICh2YWx1ZUIudHJpbSgpICE9PSBcIlwiKSB7XHJcbiAgICAgIGlmICh2YWx1ZUMudHJpbSgpICE9PSBcIlwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuYWJsZU5leHRQYXJ0T2ZGb3JtdWxhKCkge1xyXG4gIGxldCB0aGlzT3JuYW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCJpbWcuY29ycHVzX3NlY3Rpb25fZm9ybV9vcm5hbWVudC1tYXJrZXJcIlxyXG4gICk7XHJcbiAgbGV0IGFsbE9ybmFtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICBcImltZy5jb3JwdXNfc2VjdGlvbl9mb3JtX29ybmFtZW50LW1hcmtlclwiXHJcbiAgKTtcclxuICB0aGlzT3JuYW1lbnQuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9pY29ucy9wb2xlLjIuc3ZnXCIpO1xyXG4gIHRoaXNPcm5hbWVudC5jbGFzc0xpc3QuYWRkKFwiaXRJc1Bhc3NlZFRocm91Z2h0XCIpO1xyXG4gIGxldCBuZXh0T3JuYW1lbnQgPSBhbGxPcm5hbWVudHNbMV07XHJcbiAgbmV4dE9ybmFtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJpdElzSGlkZGVuXCIpO1xyXG4gIGxldCBwYXJ0T2ZGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc1wiKTtcclxuICBwYXJ0T2ZGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJpdElzSGlkZGVuXCIpO1xyXG4gIGd1aWRlUmVhY3RzKDEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRUaGlzRGF0YVRvRGVzY3JpcHRpb24oKSB7XHJcbiAgc2V0TmFtZVRvRGVzKCk7XHJcbiAgc2V0Tmlja25hbWVUb0RlcygpO1xyXG4gIHNldFNlbnRlbmNlVG9EZXMoKTtcclxufVxyXG4iLCJpbXBvcnQgaXRlcmF0b3JPZlBvaW50c0xlZnQgZnJvbSAnLi9hc2lkZS5qcyc7XHJcbmltcG9ydCB7Z3VpZGVSZWFjdHN9IGZyb20gJy4vYXNpZGUuanMnO1xyXG4ndXNlIHN0cmljdCc7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjaG9vc2VZb3VyQXZhdGFyKVxyXG5mdW5jdGlvbiBjaG9vc2VZb3VyQXZhdGFyICgpIHtcclxuICBsZXQgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyJylcclxuICBsZXQgYXZhdGFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9yYWRpby1sYWItY29udGFpbmVyJylcclxuICBsZXQgYW1vdW50ID0gYXZhdGFycy5sZW5ndGhcclxuICBmb3IgKGxldCBpID0gMDtpIDwgYW1vdW50O2krKykge1xyXG4gICAgbGV0IGl0ZW0gPSBhdmF0YXJzW2ldXHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBjaG9vc2VUaGlzQXZhdGFyKGl0ZW0sIGF2YXRhcnMsIGFtb3VudClcclxuICAgICAgc2V0T25lUGFydE9mQXR0YWNrRGVzY3JpcHRpb24oaSlcclxuICAgICAgc3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRzKGNvbnRhaW5lcnMpXHJcbiAgICAgIGVuYWJsZUF0dGFja3MoaSlcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGNob29zZVRoaXNBdmF0YXIgKGl0ZW0sIGF2YXRhcnMsIGFtb3VudCkge1xyXG4gIGl0ZW0ucXVlcnlTZWxlY3RvcignaW5wdXQnKS5jaGVja2VkID0gdHJ1ZTtcclxuICBmb3IgKGxldCBpPTA7IGk8YW1vdW50OyBpKyspe1xyXG4gICAgICBsZXQgYXYgPSBhdmF0YXJzW2ldO1xyXG4gICAgICBhdi5jbGFzc0xpc3QucmVtb3ZlKCdpc0NsaWNrZWQnKTtcclxuICB9XHJcbiAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpc0NsaWNrZWQnKTtcclxuICBpdGVyYXRvck9mUG9pbnRzTGVmdC5kZWxldGF0b3IoKTtcclxuICBndWlkZVJlYWN0cygyKTtcclxufVxyXG5mdW5jdGlvbiBzZXRPbmVQYXJ0T2ZBdHRhY2tEZXNjcmlwdGlvbiAoaSkge1xyXG4gIGxldCBkZXNQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncCBzcGFuLi0tZGVzX2tsYXNhJylcclxuICBsZXQgYXJyYXkgPSBbXHJcbiAgICAnIHVkZXJ6ZW5pZSBicm9uacSFIGJydXRhbG7EhS4nLFxyXG4gICAgJyB1ZGVyemVuaWUgYnJvbmnEhSBzdHJ6ZWxlY2vEhS4nLFxyXG4gICAgJyB1ZGVyemVuaWUgYnJvbmnEhSB6ZHJhZHppZWNrxIUuJyxcclxuICAgICcgdWRlcnplbmllIGJyb25pxIUgc3phbGXFhGN6xIUuJyxcclxuICAgICcgdWRlcnplbmllIGJyb25pxIUgc3phcmxhdGHFhHNrxIUuJyxcclxuICAgICcgdWRlcnplbmllIGJyb25pxIUgbHViIGN6eW1rb2x3aWVrLCBjbyB3cGFkbmllIGthcsWCb3dpIHcgxYJhcHNrYS4nXHJcbiAgXVxyXG4gIGRlc1BhcnQuaW5uZXJUZXh0ID0gYXJyYXlbaV1cclxuICBsZXQgbmV4dERlc1BhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwIHNwYW4uLS1kZXNfZXBpdGV0Jyk7XHJcbiAgbmV4dERlc1BhcnQuY2xhc3NMaXN0LmFkZCgnaXRzSGlkZGVuJyk7XHJcbiAgbGV0IGFub3RoZXJOZXh0RGVzUGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc196eXdpb2wnKTtcclxuICBhbm90aGVyTmV4dERlc1BhcnQuY2xhc3NMaXN0LmFkZCgnaXRzSGlkZGVuJyk7XHJcbiAgbGV0IG90aGVyQW5vdGhlck5leHREZXNQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX2ltaWUnKTtcclxuICBvdGhlckFub3RoZXJOZXh0RGVzUGFydC5jbGFzc0xpc3QuYWRkKCdpdHNIaWRkZW4nKTtcclxuICBsZXQgcHJ6RGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3Byenlkb21laycpO1xyXG4gIGxldCB6ZGFEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfemRhbmllJyk7XHJcbiAgcHJ6RGVzLmNsYXNzTGlzdC5hZGQoJ2l0c0hpZGRlbicpO1xyXG4gIHpkYURlcy5jbGFzc0xpc3QuYWRkKCdpdHNIaWRkZW4nKTtcclxufVxyXG5mdW5jdGlvbiBzeW5jaHJvbml6ZUJhY2tncm91bmRzT2ZPdGhlck9wdHMgKGNvbnRhaW5lcnMpIHtcclxuICBsZXQgYW1vdW50ID0gY29udGFpbmVycy5sZW5ndGhcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XHJcbiAgICBsZXQgY29udCA9IGNvbnRhaW5lcnNbaV1cclxuICAgIGxldCBvcHRpb25zID0gY29udC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKVxyXG4gICAgbGV0IGl0ZXIgPSBvcHRpb25zLmxlbmd0aFxyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVyOyB4KyspIHtcclxuICAgICAgbGV0IGJlbHQgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnKVt4XVxyXG4gICAgICBiZWx0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdpbmhlcml0J1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBlbmFibGVBdHRhY2tzIChpKSB7XHJcbiAgbGV0IGVuYWJsZWRBdHRhY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXInKVxyXG4gIGZvciAobGV0IHggPSAwOyB4IDwgNjsgeCsrKSB7XHJcbiAgICBsZXQgZGlzYWJsZWRJdGVtID0gZW5hYmxlZEF0dGFja3NbeF1cclxuICAgIGRpc2FibGVkSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdlbmFibGVkJylcclxuICAgIGxldCBvcHRzID0gZGlzYWJsZWRJdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpXHJcbiAgICBsZXQgYW1vdW50ID0gb3B0cy5sZW5ndGhcclxuICAgIGZvciAobGV0IGogPSAwO2ogPCBhbW91bnQ7aisrKSB7XHJcbiAgICAgIGlmIChvcHRzW2pdLnNlbGVjdGVkID09PSB0cnVlKSB7XHJcbiAgICAgICAgb3B0c1tqXS5zZWxlY3RlZCA9IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgbGV0IGVuYWJsZWRBdHRhY2sgPSBlbmFibGVkQXR0YWNrc1tpXVxyXG4gIGVuYWJsZWRBdHRhY2suY2xhc3NMaXN0LmFkZCgnZW5hYmxlZCcpXHJcbn1cclxuIiwiaW1wb3J0IGl0ZXJhdG9yT2ZQb2ludHNMZWZ0IGZyb20gJy4vYXNpZGUuanMnXHJcbmltcG9ydCB7IGd1aWRlUmVhY3RzIH0gZnJvbSAnLi9hc2lkZS5qcydcclxuJ3VzZSBzdHJpY3QnXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0aWFsaXplQXR0YWNrc1BhcnQpXHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplQXR0YWNrc1BhcnQgKCkge1xyXG4gIGxldCBjb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXInKVxyXG4gIGxldCBhbW91bnQgPSBjb250YWluZXJzLmxlbmd0aFxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50OyBpKyspIHtcclxuICAgIGxldCBjb250ID0gY29udGFpbmVyc1tpXVxyXG4gICAgbGV0IG9wdGlvbnMgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpXHJcbiAgICBsZXQgaXRlciA9IG9wdGlvbnMubGVuZ3RoXHJcbiAgICBmb3IgKGxldCB4ID0gMDt4IDwgaXRlcjt4KyspIHtcclxuICAgICAgbGV0IG9wdCA9IG9wdGlvbnNbeF1cclxuICAgICAgb3B0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0Jywgb25NT3V0KVxyXG4gICAgICBvcHQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIG9uTUVudGVyKVxyXG4gICAgICBmdW5jdGlvbiBvbk1FbnRlciAoKSB7XHJcbiAgICAgICAgaWYgKG9wdC5zZWxlY3RlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIHN5bmNocm9uaXplVGhpc0Jja2dyV2l0aEltYWdlQmVsdEhvdmVyQmNrZ3Iob3B0LCBjb250LCB4LCB0cnVlKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBmdW5jdGlvbiBvbk1PdXQgKCkge1xyXG4gICAgICAgIGlmIChvcHQuc2VsZWN0ZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICBzeW5jaHJvbml6ZVRoaXNCY2tncldpdGhJbWFnZUJlbHRIb3ZlckJja2dyKG9wdCwgY29udCwgeCwgZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgc2VsZWN0TGlzdCA9IGNvbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JylcclxuICAgIHNlbGVjdExpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBmb3IgKGxldCBxID0gMDsgcSA8IGl0ZXI7cSsrKSB7XHJcbiAgICAgICAgbGV0IG9wdCA9IG9wdGlvbnNbcV1cclxuICAgICAgICBpZiAob3B0LnZhbHVlID09PSBzZWxlY3RMaXN0LnZhbHVlKSB7XHJcbiAgICAgICAgICBpdGVyYXRvck9mUG9pbnRzTGVmdC5pdGVyYXRvcihjb250LCBxKVxyXG4gICAgICAgICAgZ3VpZGVSZWFjdHMoMylcclxuICAgICAgICAgIHN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0bnMoY29udCwgaXRlcilcclxuICAgICAgICAgIHN5bmNocm9uaXplVGhpc0Jja2dyV2l0aEltYWdlQmVsdEhvdmVyQmNrZ3Iob3B0LCBjb250LCBxLCB0cnVlKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gc3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRucyAoY29udCwgaXRlcikge1xyXG4gIGZvciAobGV0IHggPSAwOyB4IDwgaXRlcjsgeCsrKSB7XHJcbiAgICBsZXQgYmVsdCA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdCcpW3hdXHJcbiAgICBiZWx0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdpbmhlcml0J1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3luY2hyb25pemVUaGlzQmNrZ3JXaXRoSW1hZ2VCZWx0SG92ZXJCY2tnciAob3B0LCBjb250LCB4LCBpc0VudGVyKSB7XHJcbiAgbGV0IGJlbHQgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnKVt4XVxyXG4gIGlmIChpc0VudGVyID09PSB0cnVlKSB7XHJcbiAgICBsZXQgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShvcHQpXHJcbiAgICBsZXQgYmNnQ29sID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1jb2xvcicpXHJcbiAgICBiZWx0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJjZ0NvbFxyXG4gIH0gZWxzZSBpZiAoaXNFbnRlciA9PT0gZmFsc2UpIHtcclxuICAgIGJlbHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2luaGVyaXQnXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBpdGVyYXRvck9mUG9pbnRzTGVmdCBmcm9tICcuL2FzaWRlLmpzJztcclxuJ3VzZSBzdHJpY3QnO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdCk7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgbGV0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHMtMl9maWVsZHNldC1kX2NvbnRhaW5lcl9hdHJ5YiAuLS1iZWx0X2ljb24tY29udGFpbmVyJyk7XHJcbiAgICBsZXQgYmVsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHMtMl9maWVsZHNldC1kX2NvbnRhaW5lcl9hdHJ5YiAuLS1iZWx0X2JvZHktY29udGFpbmVyX2JvZHknKTtcclxuICAgIGxldCBpdGVyID0gYnRucy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXI7IGkrKykge1xyXG4gICAgICAgIGlmIChpID4gLTEpIHtcclxuICAgICAgICAgICAgbGV0IGF0dHJ5YiA9IGJ0bnNbaV07XHJcbiAgICAgICAgICAgIGxldCBiZWx0ID0gYmVsdHNbaV07XHJcbiAgICAgICAgICAgIGF0dHJ5Yi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVyYXRvck9mUG9pbnRzTGVmdC5sZWZ0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFBvaW50KGJlbHQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUG9pbnQoYmVsdCkge1xyXG4gICAgbGV0IElNRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0lNRycpO1xyXG4gICAgSU1HLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2ljb25zL2lrb25hLXBvdGVnLnN2ZycpO1xyXG4gICAgYmVsdC5hcHBlbmRDaGlsZChJTUcpO1xyXG4gICAgaXRlcmF0b3JPZlBvaW50c0xlZnQubGVmdC0tO1xyXG4gICAgaXRlcmF0b3JPZlBvaW50c0xlZnQuZXF1YWxpemF0b3IoKTtcclxuICAgIElNRy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkZWxldGVUaGlzSU1HKElNRylcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVRoaXNJTUcoeCkge1xyXG4gICAgeC5yZW1vdmUoKTtcclxuICAgIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0LmxlZnQrKztcclxuICAgIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0LmVxdWFsaXphdG9yKCk7XHJcbn0iLCJpbXBvcnQge2d1aWRlUmVhY3RzfSBmcm9tICcuL2FzaWRlLmpzJztcclxuXCJ1c2Ugc3RyaWN0XCI7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGluaXRpYWxpemVUaGlzU2VjdGlvbik7XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplVGhpc1NlY3Rpb24oKSB7XHJcbiAgICBsZXQgbGlzdEEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzZXQtYyAjemFzbG9uYVwiXHJcbiAgICApO1xyXG4gICAgbGV0IGxpc3RCID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc2V0LWMgI3BhbmNlcnpcIlxyXG4gICAgKTtcclxuICAgIGxldCBpbWFnZXNBID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICBcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc2V0LWNfaW1nc19pbWcuYVwiXHJcbiAgICApO1xyXG4gICAgbGV0IGltYWdlc0IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgIFwiLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzZXQtY19pbWdzX2ltZy5iXCJcclxuICAgICk7XHJcbiAgICBsZXQgb3B0c0EgPSBsaXN0QS5xdWVyeVNlbGVjdG9yQWxsKFwib3B0aW9uXCIpO1xyXG4gICAgbGV0IG9wdHNCID0gbGlzdEIucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvblwiKTtcclxuICAgIGR5bmFtaXplVGhpc0xpc3QobGlzdEEsIG9wdHNBLCBpbWFnZXNBLCBsaXN0Qik7XHJcbiAgICBkeW5hbWl6ZVRoaXNMaXN0KGxpc3RCLCBvcHRzQiwgaW1hZ2VzQiwgbGlzdEEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkeW5hbWl6ZVRoaXNMaXN0KGxpc3QsIG9wdHMsIGltYWdlcywgb3RoZXJMaXN0KSB7XHJcbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IGxpc3QudmFsdWU7XHJcbiAgICAgICAgbGV0IGl0ZXIgPSBvcHRzLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGl0ZXIgLSAxOyBqKyspIHtcclxuICAgICAgICAgICAgaW1hZ2VzW2pdLmNsYXNzTGlzdC5hZGQoXCJpdElzVW5zZWxlY3RlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVyOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG9wdCA9IG9wdHNbaV07XHJcbiAgICAgICAgICAgIGxldCBvcHRWYWx1ZSA9IG9wdC52YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBvcHRWYWx1ZSAmJiBpICE9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZXNbaV0uY2xhc3NMaXN0LnJlbW92ZShcIml0SXNVbnNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVuYWJsZU5leHRGb3JtUGFydChsaXN0LCBvdGhlckxpc3QpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuYWJsZU5leHRGb3JtUGFydChsaXN0LCBvdGhlckxpc3QpIHtcclxuICAgIGxldCBhID0gbGlzdC52YWx1ZTtcclxuICAgIGxldCBiID0gb3RoZXJMaXN0LnZhbHVlO1xyXG4gICAgaWYgKGEgIT09IFwiXCIgJiYgYiAhPT0gXCJcIikge1xyXG4gICAgICAgIGxldCBuZXh0UGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkcy0yJyk7XHJcbiAgICAgICAgbmV4dFBhcnQuY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0hpZGRlbicpO1xyXG4gICAgICAgIGxldCBhbGxPcm5hbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcuY29ycHVzX3NlY3Rpb25fZm9ybV9vcm5hbWVudC1tYXJrZXInKTtcclxuICAgICAgICBsZXQgdGhpc09ybmFtZW50ID0gYWxsT3JuYW1lbnRzWzJdO1xyXG4gICAgICAgIHRoaXNPcm5hbWVudC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ljb25zL3BvbGUuMi5zdmcnKTtcclxuICAgICAgICB0aGlzT3JuYW1lbnQuY2xhc3NMaXN0LmFkZCgnaXRJc1Bhc3NlZFRocm91Z2h0Jyk7XHJcbiAgICAgICAgbGV0IG5leHRPcm5hbWVudCA9IGFsbE9ybmFtZW50c1szXTtcclxuICAgICAgICBuZXh0T3JuYW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0hpZGRlbicpO1xyXG4gICAgICAgIGd1aWRlUmVhY3RzKDUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IGl0ZXJhdG9yT2ZQb2ludHNMZWZ0IGZyb20gJy4vYXNpZGUuanMnO1xyXG5pbXBvcnQge2d1aWRlUmVhY3RzfSBmcm9tICcuL2FzaWRlLmpzJztcclxuJ3VzZSBzdHJpY3QnO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdGlhbGl6ZVRoaXNTZWxlY3QpXHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplVGhpc1NlbGVjdCgpIHtcclxuICAgIGxldCBvcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzLTJfZmllbGRzZXQtZF9jb250YWluZXJfbW9jZScpO1xyXG4gICAgbGV0IGl0ZXIgPSBvcHRpb25zLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcjsgaSsrKSB7XHJcbiAgICAgICAgbGV0IG9wdCA9IG9wdGlvbnNbaV07XHJcbiAgICAgICAgb3B0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpdElzQ2xpY2tlZChvcHQsIG9wdGlvbnMsIGl0ZXIsIGkpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gaXRJc0NsaWNrZWQob3B0LCBvcHRzLCBpdGVyLCBpKSB7XHJcbiAgICBsZXQgY2hlY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cIm1vYy1waWV0bm9cIl0nKTtcclxuICAgIGxldCBjb3N0T2ZUaGlzID0gWzEsMiwyLDEsMywxXTtcclxuICAgIGlmIChjaGVja3NbaV0uY2hlY2tlZD09PXRydWUpe1xyXG4gICAgICAgIGNoZWNrc1tpXS5jaGVja2VkPWZhbHNlO1xyXG4gICAgICAgIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0Lml0ZXJhdG9yQihjb3N0T2ZUaGlzW2ldKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGNoZWNrc1tpXS5jaGVja2VkPXRydWU7XHJcbiAgICAgICAgaXRlcmF0b3JPZlBvaW50c0xlZnQuZGVsZXRhdG9yQihjb3N0T2ZUaGlzW2ldKTtcclxuICAgICAgICBndWlkZVJlYWN0cyg2KTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgaXRlcjsgaisrKSB7XHJcbiAgICAgICAgaWYgKGNoZWNrc1tqXS5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIG9wdHNbal0uY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hlY2tzW2pdLmNoZWNrZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIG9wdHNbal0uY2xhc3NMaXN0LmFkZCgnaXRJc0hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdGlhbGl6ZUd1aWRlIiwiaGlkZVVzZXJHdWlkZSIsInNldFRpbWVvdXQiLCJhc2lkZSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJvcm5tIiwicm90YXRlQW5kSGlkZUFzaWRlIiwiYnRuIiwiY29udHJvbGxlciIsImhlYWRCZWx0IiwicGllY2UiLCJvZmZzZXRIZWlnaHQiLCJzdHlsZSIsInRyYW5zZm9ybSIsImF3Iiwib2Zmc2V0V2lkdGgiLCJhaCIsIndzcCIsIngiLCJ5IiwieiIsImxlZnQiLCJib3R0b20iLCJhcnJheVdpdGhJdGVycyIsImd1aWRlUmVhY3RzIiwiaSIsInJlbW92ZSIsInBhcnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImN1cnJlbnRQYXJ0IiwicG9zaXRpb24iLCJvZmZzZXRUb3AiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImd1aWRlIiwidGl0bGUiLCJhcnIiLCJpbm5lclRleHQiLCJhcnJCIiwiaXNTb21ldGhpbmdOZXdUb1NheSIsIml0ZXJhdG9yT2ZQb2ludHNMZWZ0Iiwic3BlbnRPbkF0dGFjayIsIml0ZXJhdG9yIiwiY29udCIsIml0ZXJEZXZpY2UiLCJvcHQiLCJwb2ludHMiLCJhbW91bnQiLCJsZW5ndGgiLCJiaWxhbnMiLCJhbmltYXRlT3B0c1NwZW5kaW5nIiwiZGVsZXRhdG9yIiwiY29pbiIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJheFMiLCJzY3JvbGxZIiwiYXhYIiwiYXhaIiwiYXhZIiwib2Zmc2V0TGVmdCIsInRvcCIsImFwcGVuZENoaWxkIiwid2lkdGgiLCJoZWlnaHQiLCJyZW1vdmVDaGlsZCIsIml0ZXJhdG9yQiIsImludGVnZXIiLCJkZWxldGF0b3JCIiwiZXF1YWxpemF0b3IiLCJpbml0aWFsaXplIiwib3B0cyIsIml0ZW0iLCJzZXRJTUciLCJlbmFibGVTdHJpa2VOYW1lUGFydCIsInNldFN0cmlrZU5hbWVUb0RlcyIsInNldFBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uIiwic2V0Rm9yY2VEZXMiLCJvbmx5T25jZSIsImRlc1BhcnQiLCJhcnJheSIsImJlbHQiLCJpbWFnIiwiYXR0cnliIiwiZ2V0QXR0cmlidXRlIiwiaWNvbiIsImFsbElNR3MiLCJzdGFuZGFydCIsImltYWdlVG9EZWwiLCJqIiwidGhlSU1HIiwic291cmNlSU1HIiwibmV3SU1HIiwic2V0TmV4dFBhcnRPZkZvcm11bGFGb3JUaGVGaXJzdFRpbWUiLCJpbnAiLCJzdHJOYW1lIiwidmFsdWUiLCJzaG93QWxsRGVzIiwiaXRtIiwidHJpbSIsInNldE5leHRQYXJ0T2ZGb3JtdWxhIiwiSU1HcyIsIml0ZXIiLCJzdHJuZyIsIklNRyIsInB1c2giLCJzdHJpbmdUb1NldCIsImpvaW4iLCJ6eXdEZXMiLCJpbWlEZXMiLCJwcnpEZXMiLCJ6ZGFEZXMiLCJzZXROYW1lVG9EZXMiLCJuYW0iLCJzZXROaWNrbmFtZVRvRGVzIiwiaW5wQiIsInN1cm5hbSIsInNldFNlbnRlbmNlVG9EZXMiLCJhbGxEZXMiLCJ0ZXh0QXJlYSIsImFyZWFWYWx1ZSIsImVuYWJsZU5leHRQYXJ0T2ZGb3JtIiwibmV4dFBhcnQiLCJhbGxPcm5hbWVudHMiLCJ0aGlzT3JuYW1lbnQiLCJuZXh0T3JuYW1lbnQiLCJib3hTaXplIiwiekluZGV4IiwidXNlckZsb3dWaWFGaXJzdEZpZWxkc2V0IiwidXNlck5hbWUiLCJ1c2VyTmljayIsInVzZXJNb3R0byIsInVzZXJOYW1lQWNjZXB0IiwidXNlck5pY2tBY2NlcHQiLCJ1c2VyTW90dG9BY2NlcHQiLCJuZXh0SXRlbSIsInBhcnRPZkZvcm0iLCJhbGxGaWVsZHNBcmVTZXQiLCJjaGVja0lmRmllbGRzQXJlU2V0IiwidGVybSIsImNvbnRhaW5zIiwiZW5hYmxlTmV4dFBhcnRPZkZvcm11bGEiLCJzZXRUaGlzRGF0YVRvRGVzY3JpcHRpb24iLCJldmVudCIsImtleUNvZGUiLCJmb2N1cyIsImJsdXIiLCJ2YWx1ZUEiLCJ2YWx1ZUIiLCJ2YWx1ZUMiLCJjaG9vc2VZb3VyQXZhdGFyIiwiY29udGFpbmVycyIsImF2YXRhcnMiLCJjaG9vc2VUaGlzQXZhdGFyIiwic2V0T25lUGFydE9mQXR0YWNrRGVzY3JpcHRpb24iLCJzeW5jaHJvbml6ZUJhY2tncm91bmRzT2ZPdGhlck9wdHMiLCJlbmFibGVBdHRhY2tzIiwiY2hlY2tlZCIsImF2IiwibmV4dERlc1BhcnQiLCJhbm90aGVyTmV4dERlc1BhcnQiLCJvdGhlckFub3RoZXJOZXh0RGVzUGFydCIsIm9wdGlvbnMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJlbmFibGVkQXR0YWNrcyIsImRpc2FibGVkSXRlbSIsInNlbGVjdGVkIiwiZW5hYmxlZEF0dGFjayIsImluaXRpYWxpemVBdHRhY2tzUGFydCIsIm9uTU91dCIsIm9uTUVudGVyIiwic3luY2hyb25pemVUaGlzQmNrZ3JXaXRoSW1hZ2VCZWx0SG92ZXJCY2tnciIsInNlbGVjdExpc3QiLCJxIiwic3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRucyIsImlzRW50ZXIiLCJnZXRDb21wdXRlZFN0eWxlIiwiYmNnQ29sIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImluaXQiLCJidG5zIiwiYmVsdHMiLCJhZGRQb2ludCIsImRlbGV0ZVRoaXNJTUciLCJpbml0aWFsaXplVGhpc1NlY3Rpb24iLCJsaXN0QSIsImxpc3RCIiwiaW1hZ2VzQSIsImltYWdlc0IiLCJvcHRzQSIsIm9wdHNCIiwiZHluYW1pemVUaGlzTGlzdCIsImxpc3QiLCJpbWFnZXMiLCJvdGhlckxpc3QiLCJvcHRWYWx1ZSIsImVuYWJsZU5leHRGb3JtUGFydCIsImEiLCJiIiwiaW5pdGlhbGl6ZVRoaXNTZWxlY3QiLCJpdElzQ2xpY2tlZCIsImNoZWNrcyIsImNvc3RPZlRoaXMiXSwibWFwcGluZ3MiOiI7OztJQUFBQSxTQUFTQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOENDLGVBQTlDOztJQUVBLFNBQVNBLGVBQVQsR0FBNEI7SUFDMUJDO0lBQ0FDLGFBQVcsWUFBVTtJQUNuQixRQUFJQyxRQUFRTCxTQUFTTSxhQUFULENBQXVCLE9BQXZCLENBQVo7SUFDQUQsVUFBTUUsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsUUFBcEI7SUFDRCxHQUhELEVBR0csQ0FISDtJQUlEOztJQUVE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
