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
        //window.scrollTo(0, position)
        window.zenscroll.toY(position);
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
          //enableNextPartOfFormula();
          showBtnOfAcceptation();
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
    function showBtnOfAcceptation() {
      var btn = document.querySelector('.corpus_section_form_field-A_btn-belt_btn-positioner');
      btn.classList.remove('itIsHidden');
      btn.addEventListener('click', function () {
        enableNextPartOfFormula();
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyIuLi9zb3VyY2UvZHluYW1pY3MvYXNpZGUuanMiLCIuLi9zb3VyY2UvZHluYW1pY3MvYXRha2ktc2V0LXR4dC5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9wb2RzdGF3eS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9rbGFzYS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9hdGFraS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9hdHRyeWJzLmpzIiwiLi4vc291cmNlL2R5bmFtaWNzL29icm9ueS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9tb2NlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0aWFsaXplR3VpZGUpXHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplR3VpZGUgKCkge1xyXG4gIGhpZGVVc2VyR3VpZGUoKTtcclxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpO1xyXG4gICAgYXNpZGUuY2xhc3NMaXN0LmFkZCgnb25Mb2FkJyk7XHJcbiAgfSwgMClcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZVVzZXJHdWlkZSAoKSB7XHJcbiAgbGV0IG9ybm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtaGVhZCcpXHJcbiAgb3JubS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZUFuZEhpZGVBc2lkZSlcclxuICBsZXQgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItZ3VpZGVfaGlkZScpXHJcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlQW5kSGlkZUFzaWRlKVxyXG59XHJcbmxldCBjb250cm9sbGVyID0gMFxyXG5mdW5jdGlvbiByb3RhdGVBbmRIaWRlQXNpZGUgKCkge1xyXG4gIGxldCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJylcclxuICBpZiAoY29udHJvbGxlciA9PT0gMCkge1xyXG4gICAgbGV0IGhlYWRCZWx0ID0gYXNpZGUucXVlcnlTZWxlY3RvcignLmFzaWRlLWhlYWQnKTtcclxuICAgIGxldCBwaWVjZSA9IGhlYWRCZWx0Lm9mZnNldEhlaWdodDtcclxuICAgIGFzaWRlLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJ1xyXG4gICAgbGV0IGF3ID0gYXNpZGUub2Zmc2V0V2lkdGhcclxuICAgIGxldCBhaCA9IGFzaWRlLm9mZnNldEhlaWdodFxyXG4gICAgbGV0IHdzcCA9IGFoICsgKChhdyAtIGFoKSAvIDIpXHJcbiAgICBsZXQgeCA9ICh3c3AgKiAtMSkgKyBwaWVjZVxyXG4gICAgbGV0IHkgPSB4ICsgJ3B4J1xyXG4gICAgbGV0IHogPSAoKGF3IC0gYWgpIC8gMikgKyAncHgnXHJcbiAgICBhc2lkZS5zdHlsZS5sZWZ0ID0geVxyXG4gICAgYXNpZGUuc3R5bGUuYm90dG9tID0gelxyXG4gICAgY29udHJvbGxlciA9IDFcclxuICB9IGVsc2UgaWYgKGNvbnRyb2xsZXIgPT09IDEpIHtcclxuICAgIGFzaWRlLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknXHJcbiAgICBhc2lkZS5zdHlsZS5sZWZ0ID0gMFxyXG4gICAgYXNpZGUuc3R5bGUuYm90dG9tID0gMFxyXG4gICAgY29udHJvbGxlciA9IDBcclxuICB9XHJcbn1cclxubGV0IGFycmF5V2l0aEl0ZXJzID0gWzAsIDAsIDAsIDAsIDAsIDAsIDBdXHJcbmV4cG9ydCBmdW5jdGlvbiBndWlkZVJlYWN0cyAoaSkge1xyXG4gIGxldCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJyk7XHJcbiAgYXNpZGUuY2xhc3NMaXN0LnJlbW92ZSgnb25BZHZpY2UnKTtcclxuICBhc2lkZS5jbGFzc0xpc3QucmVtb3ZlKCdvbkFkdmljZUInKTtcclxuICBsZXQgcGFydHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmaWVsZHNldCcpXHJcbiAgbGV0IGN1cnJlbnRQYXJ0ID0gcGFydHNbaV1cclxuICBsZXQgcG9zaXRpb24gPSBjdXJyZW50UGFydC5vZmZzZXRUb3BcclxuICBpZiAoYXJyYXlXaXRoSXRlcnNbaV0gPT09IDApIHtcclxuICAgIC8vd2luZG93LnNjcm9sbFRvKDAsIHBvc2l0aW9uKVxyXG4gICAgd2luZG93LnplbnNjcm9sbC50b1kocG9zaXRpb24pO1xyXG4gICAgYXJyYXlXaXRoSXRlcnNbaV0gPSAxXHJcbiAgICBsZXQgZ3VpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtZm9vdCAudXNlci1ndWlkZScpXHJcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtZm9vdF90aXRsZScpXHJcbiAgICBsZXQgYXJyID0gW1xyXG4gICAgICAnR2R5IHdwaXN6ZXN6IGltacSZLCBwcnp5ZG9tZWsgaSB6YXdvxYJhbmllLCBwbyB6YXR3aWVyZHplbml1IHptaWFuIHBvamF3aSBzacSZIG5hc3TEmXBuYSBjesSZxZvEhyBmb3JtdWxhcnphLicsXHJcbiAgICAgICdQbyB3eWJvcnplIGtsYXN5LCBwb2phd2kgc2llIG9rbm8gd3lib3J1IGF0YWt1IHNwb8WbcsOzZCB1ZGVyemXFhCBjaGFyYWt0ZXJ5c3R5Y3pueWNoIGRsYSB0ZWogcG9zdGFjaS4nLFxyXG4gICAgICAnV3liaWVyeiB1ZGVyemVuaWUsIGtsaWthasSFYyB3IHPFgm93byBvcGlzdWrEhWNlIGplLiBQcnp5IGthxbxkeW0gZXBpdGVjaWUgd2lkbmllamUgY2hhcmFrdGVyeXN0eWthIGNpb3N1IHcgSWtvbmFjaCDFu3l3aW/FgsOzdyBpIElrb25hY2ggVWRlcnplxYQuJyxcclxuICAgICAgJ1d5bXnFm2wgbmF6d2UgZGxhIHVkZXJ6ZW5pYSB6IHBvcHJ6ZWRuaWVnbyBrcm9rdS4gR2R5IGrEhSB6YXR3aWVyZHppc3osIHBvamF3aSBzaWUga29sZWpuYSBjemXFm8SHIGthcnR5IHBvc3RhY2kuJyxcclxuICAgICAgJ1BvIHd5Ym9yemUgamVkbmVqIG9wY2ppIHoga2HFvGRlaiBsaXN0eSwgcG9qYXdpIHNpZSBrb2xlam5hIGN6ZcWbxIcga2FydHkgcG9zdGFjaS4nLFxyXG4gICAgICAnS2xpa25paiB0eWxlIG9wY2ppLCBpbGUgY2hjZXN6LiBLYcW8ZHkgemVzdGF3IChjenlsaSBtb2MgaSBwaWV0bm8pIHphYmllcmEgY2kgcGV3bsSFIGlsb8WbxIcgcHVua3TDs3cgTcSFZHJvxZtjaS4nLFxyXG4gICAgICAnUm96ZGFqIHBvem9zdGHFgmUgcHVua3R5IG3EhWRyb8WbY2kgbmEgd3Nww7PFgmN6eW5uaWtpIHBvc3RhY2k6IMW7eWNpZSwgTcSFZHJvxZvEhywgUnVjaCBpIER6aWHFgmFuaWUuJ1xyXG4gICAgXVxyXG4gICAgZ3VpZGUuaW5uZXJUZXh0ID0gYXJyW2ldXHJcbiAgICBsZXQgYXJyQiA9IFtcclxuICAgICAgJ3RvxbxzYW1vxZvEhzonLFxyXG4gICAgICAna2xhc2E6JyxcclxuICAgICAgJ2F0YWs6JyxcclxuICAgICAgJ25hendhIGF0YWt1OicsXHJcbiAgICAgICdvYnJvbmE6JyxcclxuICAgICAgJ3pkb2xub8WbxIcgaSBzxYJhYm/Fm8SHJyxcclxuICAgICAgJ2F0cnlidXR5OidcclxuICAgIF1cclxuICAgIHRpdGxlLmlubmVyVGV4dCA9IGFyckJbaV1cclxuICAgIGlzU29tZXRoaW5nTmV3VG9TYXkoKTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gaXNTb21ldGhpbmdOZXdUb1NheSgpe1xyXG4gIGxldCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJyk7XHJcbiAgXHJcbiAgaWYgKGNvbnRyb2xsZXI9PT0xKXtcclxuICAgIGxldCBoZWFkQmVsdCA9IGFzaWRlLnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1oZWFkJyk7XHJcbiAgICBsZXQgcGllY2UgPSBoZWFkQmVsdC5vZmZzZXRIZWlnaHQ7XHJcbiAgICBhc2lkZS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSdcclxuICAgIGxldCBhdyA9IGFzaWRlLm9mZnNldFdpZHRoXHJcbiAgICBsZXQgYWggPSBhc2lkZS5vZmZzZXRIZWlnaHRcclxuICAgIGxldCB3c3AgPSBhaCArICgoYXcgLSBhaCkgLyAyKVxyXG4gICAgbGV0IHggPSAod3NwICogLTEpICsgcGllY2VcclxuICAgIGxldCB5ID0geCArICdweCdcclxuICAgIGxldCB6ID0gKChhdyAtIGFoKSAvIDIpICsgJ3B4J1xyXG4gICAgYXNpZGUuc3R5bGUubGVmdCA9IHlcclxuICAgIGFzaWRlLnN0eWxlLmJvdHRvbSA9IHpcclxuICAgIGFzaWRlLmNsYXNzTGlzdC5hZGQoJ29uQWR2aWNlJyk7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKGNvbnRyb2xsZXI9PT0wKXtcclxuICAgIGFzaWRlLmNsYXNzTGlzdC5hZGQoJ29uQWR2aWNlQicpO1xyXG4gIH1cclxufVxyXG52YXIgaXRlcmF0b3JPZlBvaW50c0xlZnQgPSB7XHJcbiAgbGVmdDogMjAsXHJcbiAgc3BlbnRPbkF0dGFjazogMCxcclxuICBpdGVyYXRvcihjb250LCB4KSB7XHJcbiAgICBsZXQgaXRlckRldmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1ib2R5X2hvdy1tdWNoJylcclxuICAgIGxldCBvcHQgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnKVt4XVxyXG4gICAgbGV0IHBvaW50cyA9IG9wdC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVxyXG4gICAgbGV0IGFtb3VudCA9IChwb2ludHMubGVuZ3RoIC0gMSlcclxuICAgIGxldCBiaWxhbnMgPSBhbW91bnQgLSB0aGlzLnNwZW50T25BdHRhY2tcclxuICAgIHRoaXMubGVmdCA9IHRoaXMubGVmdCAtIGJpbGFuc1xyXG4gICAgdGhpcy5zcGVudE9uQXR0YWNrID0gYW1vdW50XHJcbiAgICBpdGVyRGV2aWNlLmlubmVyVGV4dCA9ICdQb3pvc3RhxYJvJyArICcgJyArIHRoaXMubGVmdCArICd4J1xyXG4gICAgdGhpcy5hbmltYXRlT3B0c1NwZW5kaW5nKG9wdCwgYW1vdW50KTtcclxuICB9LFxyXG4gIGRlbGV0YXRvcigpIHtcclxuICAgIGxldCBpdGVyRGV2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWJvZHlfaG93LW11Y2gnKVxyXG4gICAgdGhpcy5sZWZ0ID0gdGhpcy5sZWZ0ICsgdGhpcy5zcGVudE9uQXR0YWNrXHJcbiAgICB0aGlzLnNwZW50T25BdHRhY2sgPSAwXHJcbiAgICBpdGVyRGV2aWNlLmlubmVyVGV4dCA9ICdQb3pvc3RhxYJvJyArICcgJyArIHRoaXMubGVmdCArICd4J1xyXG4gIH0sXHJcbiAgYW5pbWF0ZU9wdHNTcGVuZGluZyhvcHQsIGFtb3VudCl7XHJcbiAgICBsZXQgY29pbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0lNRycpO1xyXG4gICAgY29pbi5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ljb25zL2lrb25hLXBvdGVnLnN2ZycpO1xyXG4gICAgY29pbi5jbGFzc0xpc3QuYWRkKCdpdElzQ29pbicpO1xyXG4gICAgbGV0IGF4UyA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gICAgbGV0IGF4WCA9IG9wdC5vZmZzZXRUb3A7XHJcbiAgICBsZXQgYXhaID0gYXhYIC0gYXhTO1xyXG4gICAgbGV0IGF4WSA9IG9wdC5vZmZzZXRMZWZ0O1xyXG4gICAgY29pbi5zdHlsZS50b3AgPSBheForJ3B4JztcclxuICAgIGNvaW4uc3R5bGUubGVmdCA9IGF4WSsncHgnO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKGNvaW4pO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICBjb2luLnN0eWxlLmxlZnQgPScwJztcclxuICAgICAgY29pbi5zdHlsZS50b3AgPSc5MCUnO1xyXG4gICAgICBjb2luLnN0eWxlLndpZHRoID0nNTVweCc7XHJcbiAgICAgIGNvaW4uc3R5bGUuaGVpZ2h0ID0nNTVweCc7XHJcbiAgICB9LDApO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykucmVtb3ZlQ2hpbGQoY29pbik7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJykuY2xhc3NMaXN0LmFkZCgnb25BZHZpY2UnKTtcclxuICAgIH0sNTUwKTtcclxuICB9LFxyXG4gIGl0ZXJhdG9yQihpbnRlZ2VyKSB7XHJcbiAgICBsZXQgaXRlckRldmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1ib2R5X2hvdy1tdWNoJylcclxuICAgIHRoaXMubGVmdCA9IHRoaXMubGVmdCArIGludGVnZXJcclxuICAgIGl0ZXJEZXZpY2UuaW5uZXJUZXh0ID0gJ1Bvem9zdGHFgm8nICsgJyAnICsgdGhpcy5sZWZ0ICsgJ3gnXHJcbiAgfSxcclxuICBkZWxldGF0b3JCKGludGVnZXIpIHtcclxuICAgIGxldCBpdGVyRGV2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWJvZHlfaG93LW11Y2gnKVxyXG4gICAgdGhpcy5sZWZ0ID0gdGhpcy5sZWZ0IC0gaW50ZWdlclxyXG4gICAgaXRlckRldmljZS5pbm5lclRleHQgPSAnUG96b3N0YcWCbycgKyAnICcgKyB0aGlzLmxlZnQgKyAneCdcclxuICB9LFxyXG4gIGVxdWFsaXphdG9yKCkge1xyXG4gICAgbGV0IGl0ZXJEZXZpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtYm9keV9ob3ctbXVjaCcpXHJcbiAgICBpdGVyRGV2aWNlLmlubmVyVGV4dCA9ICdQb3pvc3RhxYJvJyArICcgJyArIHRoaXMubGVmdCArICd4J1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBpdGVyYXRvck9mUG9pbnRzTGVmdFxyXG4iLCIndXNlIHN0cmljdCdcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRpYWxpemUpXHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG4gIGxldCBvcHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9zZWxlY3QtbGlzdCBvcHRpb24nXHJcbiAgKVxyXG4gIGxldCBhbW91bnQgPSBvcHRzLmxlbmd0aFxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50OyBpKyspIHtcclxuICAgIGxldCBpdGVtID0gb3B0c1tpXVxyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgc2V0SU1HKGkpXHJcbiAgICAgIGVuYWJsZVN0cmlrZU5hbWVQYXJ0KClcclxuICAgICAgc2V0U3RyaWtlTmFtZVRvRGVzKGkpXHJcbiAgICAgIHNldFBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uKGkpXHJcbiAgICAgIHNldEZvcmNlRGVzKGkpXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5sZXQgb25seU9uY2UgPSAwXHJcblxyXG5mdW5jdGlvbiBlbmFibGVTdHJpa2VOYW1lUGFydCgpIHtcclxuICBvbmx5T25jZSsrXHJcbiAgaWYgKG9ubHlPbmNlID09PSAxKSB7XHJcbiAgICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdHJpa2VOYW1lJylcclxuICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnc3RyaWtlTmFtZScpXHJcbiAgfVxyXG59XHJcblxyXG5pbXBvcnQge2d1aWRlUmVhY3RzfSBmcm9tICcuL2FzaWRlLmpzJztcclxuZnVuY3Rpb24gc2V0UGFydE9mQXR0YWNrRGVzY3JpcHRpb24oaSkge1xyXG4gIGxldCBkZXNQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncCBzcGFuLi0tZGVzX2VwaXRldCcpXHJcbiAgZGVzUGFydC5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKVxyXG4gIGxldCBhcnJheSA9IFtcclxuICAgICdicnV0YWxuZScsXHJcbiAgICAnbmllcHJ6ZXdpZHl3YWxuZScsXHJcbiAgICAnd3nEh3dpY3pvbmUnLFxyXG4gICAgJ25pZXphd29kbmUnLFxyXG4gICAgJ3ByZWN5enlqbmUnLFxyXG4gICAgJ3ptYXNvd2FuZScsXHJcbiAgICAncG9kc3TEmXBuZScsXHJcbiAgICAnd3lyYWNob3dhbmUnLFxyXG4gICAgJ3pkcmFkemllY2tpZScsXHJcbiAgICAnc3phbGXFhGN6ZScsXHJcbiAgICAnb3ByYWNvd2FuZSB3IGxhYm9yYXRvcml1bSBhbGNoZW1pY3pueW0nLFxyXG4gICAgJ25pZXBvd3N0cnp5bWFuZScsXHJcbiAgICAnd8WCYWRjemUnLFxyXG4gICAgJ21yb2N6bmUnLFxyXG4gICAgJ3RhamVtbmUnLFxyXG4gICAgJ3fFm2NpZWvFgmUnLFxyXG4gICAgJ3dzcGllcmFuZSBtb2PEhSBvdGNoxYJhbmknLFxyXG4gICAgJ3ByemVzeWNvbmUgesWCxIUgbW9jxIUnXHJcbiAgXVxyXG4gIGRlc1BhcnQuaW5uZXJUZXh0ID0gJywgJyArIGFycmF5W2ldXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldElNRyhpKSB7XHJcbiAgbGV0IGJlbHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnXHJcbiAgKVtpXVxyXG4gIGxldCBpbWFnID0gYmVsdC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVswXVxyXG4gIGxldCBhdHRyeWIgPSBpbWFnLmdldEF0dHJpYnV0ZSgnc3JjJylcclxuICBsZXQgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLXBsYXRlX2ltZ19pY29uJylcclxuICBpY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgYXR0cnliKVxyXG4gIGxldCBhbGxJTUdzID0gYmVsdC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKS5sZW5ndGhcclxuICBsZXQgc3RhbmRhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1zdGFuZGFydF9pbWdfYmNrZycpXHJcbiAgd2hpbGUgKHN0YW5kYXJ0LnF1ZXJ5U2VsZWN0b3IoJ0lNRycpICE9PSBudWxsKSB7XHJcbiAgICBsZXQgaW1hZ2VUb0RlbCA9IHN0YW5kYXJ0LnF1ZXJ5U2VsZWN0b3IoJ0lNRycpXHJcbiAgICBzdGFuZGFydC5yZW1vdmVDaGlsZChpbWFnZVRvRGVsKVxyXG4gIH1cclxuICBmb3IgKGxldCBqID0gMDsgaiA8IGFsbElNR3M7IGorKykge1xyXG4gICAgaWYgKGogPiAwKSB7XHJcbiAgICAgIGxldCB0aGVJTUcgPSBiZWx0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpW2pdXHJcbiAgICAgIGxldCBzb3VyY2VJTUcgPSB0aGVJTUcuZ2V0QXR0cmlidXRlKCdzcmMnKVxyXG4gICAgICBsZXQgbmV3SU1HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgbmV3SU1HLnNldEF0dHJpYnV0ZSgnc3JjJywgc291cmNlSU1HKVxyXG4gICAgICBzdGFuZGFydC5hcHBlbmRDaGlsZChuZXdJTUcpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmxldCBzZXROZXh0UGFydE9mRm9ybXVsYUZvclRoZUZpcnN0VGltZT0wO1xyXG5mdW5jdGlvbiBzZXRTdHJpa2VOYW1lVG9EZXMoaSkge1xyXG4gIGxldCBpbnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibmF6d2F1ZGVyemVuaWFcIl0nKVxyXG4gIGlucC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBzdHJOYW1lID0gaW5wLnZhbHVlO1xyXG4gICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfbmF6d2EtY2lvc3UnKTtcclxuICAgIGl0ZW0uaW5uZXJUZXh0ID0gc3RyTmFtZSArICcgdG8gbGVnZW5kYXJuZSc7XHJcbiAgICBzaG93QWxsRGVzKCk7XHJcbiAgfSlcclxuICBpbnAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGl0bSA9IGlucC52YWx1ZVxyXG4gICAgaWYgKGl0bS50cmltKCkgIT09ICcnJiZzZXROZXh0UGFydE9mRm9ybXVsYUZvclRoZUZpcnN0VGltZT09PTApIHtcclxuICAgICAgbGV0IHN0ck5hbWUgPSBpbnAudmFsdWVcclxuICAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfbmF6d2EtY2lvc3UnKVxyXG4gICAgICBpdGVtLmlubmVyVGV4dCA9IHN0ck5hbWUgKyAnIHRvIGxlZ2VuZGFybmUnXHJcbiAgICAgIHNob3dBbGxEZXMoKTtcclxuICAgICAgc2V0TmV4dFBhcnRPZkZvcm11bGEoKTtcclxuICAgICAgc2V0TmV4dFBhcnRPZkZvcm11bGFGb3JUaGVGaXJzdFRpbWU9MTtcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRGb3JjZURlcyhpKSB7XHJcbiAgbGV0IGJlbHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnXHJcbiAgKVtpXTtcclxuICBsZXQgSU1HcyA9IGJlbHQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylcclxuICBsZXQgaXRlciA9IElNR3MubGVuZ3RoXHJcbiAgbGV0IHN0cm5nID0gW11cclxuICBmb3IgKGxldCBqID0gMDsgaiA8IGl0ZXI7IGorKykge1xyXG4gICAgbGV0IElNRyA9IElNR3Nbal1cclxuICAgIGxldCBhdHRyeWIgPSBJTUcuZ2V0QXR0cmlidXRlKCdzcmMnKVxyXG4gICAgaWYgKGogIT09IDApIHtcclxuICAgICAgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL2Jyb24tYmFyYmEuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ2RvZGF0a293xIUgbW9jxIUgdWRlcnplbmlvd8SFJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy9icm9uLWN6YXIuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ2RvZGF0a293xIUgbW9jxIUgY3phcm5va3NpxJlza8SFJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy9icm9uLXN0cnouc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ2RvZGF0a293eW0ga3Vuc3p0ZW0gc3RyemVsZWNraW0nKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL2Jyb24tc3phbC5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnZG9kYXRrb3d5bSBzemFsZcWEc3R3ZW0nKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL2Jyb24temRyYS5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnbmllc3BvZHppYW55bSB6ZHJhZGxpd3ltIGNpb3NlbScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvenl3LW9naWVuLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCfFvHl3aW/FgmVtIG9nbmlhJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy96eXctcm96a2xhZC5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnxbx5d2lvxYJlbSByb3prxYJhZHUnKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL3p5dy13b2Quc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ8W8eXdpb8WCZW0gd29keScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvenl3LXptaWFuYS5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnxbx5d2lvxYJlbSB6bWlhbnknKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL3p5dy16eXdpYS5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnxbx5d2lvxYJlbSDFvHl3aWknKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ3fFgmFzbsSFIG3EhWRyb8WbY2nEhSDFvHl3aW/FgsOzdyBpIHRhbGVudMOzdycpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgbGV0IHN0cmluZ1RvU2V0ID0gc3Rybmcuam9pbignLCAnKTtcclxuICBsZXQgenl3RGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3p5d2lvbCcpO1xyXG4gIGxldCBpbWlEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfaW1pZScpO1xyXG4gIGxldCBwcnpEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfcHJ6eWRvbWVrJyk7XHJcbiAgbGV0IHpkYURlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc196ZGFuaWUnKTtcclxuICB6eXdEZXMuY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJyk7XHJcbiAgaW1pRGVzLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpO1xyXG4gIHByekRlcy5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKTtcclxuICB6ZGFEZXMuY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJyk7XHJcbiAgenl3RGVzLmlubmVyVGV4dCA9IHN0cmluZ1RvU2V0ICsgJy4nO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXROYW1lVG9EZXMoKSB7XHJcbiAgbGV0IGlucCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJpbWllXCJdJylcclxuICBsZXQgbmFtID0gaW5wLnZhbHVlXHJcbiAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfaW1pZScpXHJcbiAgaXRlbS5pbm5lclRleHQgPSBuYW0gKyAnICc7XHJcbiAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXROaWNrbmFtZVRvRGVzKCkge1xyXG4gIGxldCBpbnBCID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByenlkb21la1wiXScpXHJcbiAgbGV0IHN1cm5hbSA9IGlucEIudmFsdWVcclxuICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19wcnp5ZG9tZWsnKVxyXG4gIGl0ZW0uaW5uZXJUZXh0ID0gc3VybmFtO1xyXG4gIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJylcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U2VudGVuY2VUb0RlcygpIHtcclxuICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc196ZGFuaWUnKVxyXG4gIGl0ZW0uaW5uZXJUZXh0ID0gJyB3em1hY25pYSBzd8OzaiBhdGFrICdcclxuICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dBbGxEZXMoKSB7XHJcbiAgbGV0IGFsbERlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlcycpXHJcbiAgYWxsRGVzLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldE5leHRQYXJ0T2ZGb3JtdWxhKCkge1xyXG4gIGxldCB0ZXh0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJuYXp3YXVkZXJ6ZW5pYVwiXScpO1xyXG4gIGxldCBhcmVhVmFsdWUgPSAodGV4dEFyZWEudmFsdWUpLnRyaW0oKTtcclxuICBpZiAoYXJlYVZhbHVlICE9PSAnJykge1xyXG4gICAgZW5hYmxlTmV4dFBhcnRPZkZvcm0oKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuYWJsZU5leHRQYXJ0T2ZGb3JtKCkge1xyXG4gIGxldCBuZXh0UGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkLUMnKTtcclxuICBuZXh0UGFydC5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbiAgbGV0IGFsbE9ybmFtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZy5jb3JwdXNfc2VjdGlvbl9mb3JtX29ybmFtZW50LW1hcmtlcicpO1xyXG4gIGxldCB0aGlzT3JuYW1lbnQgPSBhbGxPcm5hbWVudHNbMV07XHJcbiAgdGhpc09ybmFtZW50LnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaWNvbnMvcG9sZS4yLnN2ZycpO1xyXG4gIHRoaXNPcm5hbWVudC5jbGFzc0xpc3QuYWRkKCdpdElzUGFzc2VkVGhyb3VnaHQnKTtcclxuICBsZXQgbmV4dE9ybmFtZW50ID0gYWxsT3JuYW1lbnRzWzJdO1xyXG4gIG5leHRPcm5hbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbiAgdGhpc09ybmFtZW50LnN0eWxlLmJveFNpemU9XCJib3JkZXItYm94XCI7XHJcbiAgdGhpc09ybmFtZW50LnN0eWxlLnpJbmRleD1cIjFcIjtcclxuICBuZXh0UGFydC5zdHlsZS56SW5kZXg9XCIyXCI7XHJcbiAgZ3VpZGVSZWFjdHMoNCk7XHJcbn0iLCJpbXBvcnQgeyBzZXROYW1lVG9EZXMgfSBmcm9tIFwiLi9hdGFraS1zZXQtdHh0LmpzXCI7XHJcbmltcG9ydCB7IHNldE5pY2tuYW1lVG9EZXMgfSBmcm9tIFwiLi9hdGFraS1zZXQtdHh0LmpzXCI7XHJcbmltcG9ydCB7IHNldFNlbnRlbmNlVG9EZXMgfSBmcm9tIFwiLi9hdGFraS1zZXQtdHh0LmpzXCI7XHJcbmltcG9ydCB7IGd1aWRlUmVhY3RzIH0gZnJvbSBcIi4vYXNpZGUuanNcIjtcclxuKFwidXNlIHN0cmljdFwiKTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgdXNlckZsb3dWaWFGaXJzdEZpZWxkc2V0KCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gdXNlckZsb3dWaWFGaXJzdEZpZWxkc2V0KCkge1xyXG4gIGxldCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJpbWllXCJdJyk7XHJcbiAgbGV0IHVzZXJOaWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByenlkb21la1wiXScpO1xyXG4gIGxldCB1c2VyTW90dG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiemF3b2xhbmllXCJdJyk7XHJcbiAgdXNlck5hbWVBY2NlcHQodXNlck5hbWUsIHVzZXJOaWNrKTtcclxuICB1c2VyTmlja0FjY2VwdCh1c2VyTmljaywgdXNlck1vdHRvKTtcclxuICB1c2VyTW90dG9BY2NlcHQodXNlck1vdHRvLCB1c2VyTmFtZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZXJOYW1lQWNjZXB0KGl0ZW0sIG5leHRJdGVtKSB7XHJcbiAgbGV0IHBhcnRPZkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzXCIpO1xyXG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuICAgIGxldCBhbGxGaWVsZHNBcmVTZXQgPSBjaGVja0lmRmllbGRzQXJlU2V0KCk7XHJcbiAgICBsZXQgdGVybSA9IHBhcnRPZkZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXRJc0hpZGRlblwiKTtcclxuICAgIGlmIChhbGxGaWVsZHNBcmVTZXQgPT09IHRydWUgJiYgdGVybSA9PT0gdHJ1ZSkge1xyXG4gICAgICBlbmFibGVOZXh0UGFydE9mRm9ybXVsYSgpO1xyXG4gICAgfVxyXG4gICAgc2V0VGhpc0RhdGFUb0Rlc2NyaXB0aW9uKCk7XHJcbiAgfSk7XHJcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGxldCBhbGxGaWVsZHNBcmVTZXQgPSBjaGVja0lmRmllbGRzQXJlU2V0KCk7XHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgaWYgKGFsbEZpZWxkc0FyZVNldCAhPT0gdHJ1ZSkge1xyXG4gICAgICAgIG5leHRJdGVtLmZvY3VzKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaXRlbS5ibHVyKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiB1c2VyTmlja0FjY2VwdChpdGVtLCBuZXh0SXRlbSkge1xyXG4gIGxldCBwYXJ0T2ZGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc1wiKTtcclxuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgYWxsRmllbGRzQXJlU2V0ID0gY2hlY2tJZkZpZWxkc0FyZVNldCgpO1xyXG4gICAgbGV0IHRlcm0gPSBwYXJ0T2ZGb3JtLmNsYXNzTGlzdC5jb250YWlucyhcIml0SXNIaWRkZW5cIik7XHJcbiAgICBpZiAoYWxsRmllbGRzQXJlU2V0ID09PSB0cnVlICYmIHRlcm0gPT09IHRydWUpIHtcclxuICAgICAgZW5hYmxlTmV4dFBhcnRPZkZvcm11bGEoKTtcclxuICAgIH1cclxuICAgIHNldFRoaXNEYXRhVG9EZXNjcmlwdGlvbigpO1xyXG4gIH0pO1xyXG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBsZXQgYWxsRmllbGRzQXJlU2V0ID0gY2hlY2tJZkZpZWxkc0FyZVNldCgpO1xyXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgIGlmIChhbGxGaWVsZHNBcmVTZXQgIT09IHRydWUpIHtcclxuICAgICAgICBuZXh0SXRlbS5mb2N1cygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGl0ZW0uYmx1cigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuZnVuY3Rpb24gdXNlck1vdHRvQWNjZXB0KGl0ZW0sIG5leHRJdGVtKSB7XHJcbiAgbGV0IHBhcnRPZkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzXCIpO1xyXG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuICAgIGxldCBhbGxGaWVsZHNBcmVTZXQgPSBjaGVja0lmRmllbGRzQXJlU2V0KCk7XHJcbiAgICBsZXQgdGVybSA9IHBhcnRPZkZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXRJc0hpZGRlblwiKTtcclxuICAgIGlmIChhbGxGaWVsZHNBcmVTZXQgPT09IHRydWUgJiYgdGVybSA9PT0gdHJ1ZSkge1xyXG4gICAgICAvL2VuYWJsZU5leHRQYXJ0T2ZGb3JtdWxhKCk7XHJcbiAgICAgIHNob3dCdG5PZkFjY2VwdGF0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBzZXRUaGlzRGF0YVRvRGVzY3JpcHRpb24oKTtcclxuICB9KTtcclxuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgIGl0ZW0uYmx1cigpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0lmRmllbGRzQXJlU2V0KCkge1xyXG4gIGxldCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJpbWllXCJdJyk7XHJcbiAgbGV0IHVzZXJOaWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByenlkb21la1wiXScpO1xyXG4gIGxldCB1c2VyTW90dG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiemF3b2xhbmllXCJdJyk7XHJcbiAgbGV0IHZhbHVlQSA9IHVzZXJOYW1lLnZhbHVlO1xyXG4gIGxldCB2YWx1ZUIgPSB1c2VyTmljay52YWx1ZTtcclxuICBsZXQgdmFsdWVDID0gdXNlck1vdHRvLnZhbHVlO1xyXG4gIGlmICh2YWx1ZUEudHJpbSgpICE9PSBcIlwiKSB7XHJcbiAgICBpZiAodmFsdWVCLnRyaW0oKSAhPT0gXCJcIikge1xyXG4gICAgICBpZiAodmFsdWVDLnRyaW0oKSAhPT0gXCJcIikge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIHNob3dCdG5PZkFjY2VwdGF0aW9uKCkge1xyXG4gIGxldCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZC1BX2J0bi1iZWx0X2J0bi1wb3NpdGlvbmVyJyk7XHJcbiAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2l0SXNIaWRkZW4nKTtcclxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgZW5hYmxlTmV4dFBhcnRPZkZvcm11bGEoKTtcclxuICB9KVxyXG59XHJcbmZ1bmN0aW9uIGVuYWJsZU5leHRQYXJ0T2ZGb3JtdWxhKCkge1xyXG4gIGxldCB0aGlzT3JuYW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCJpbWcuY29ycHVzX3NlY3Rpb25fZm9ybV9vcm5hbWVudC1tYXJrZXJcIlxyXG4gICk7XHJcbiAgbGV0IGFsbE9ybmFtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICBcImltZy5jb3JwdXNfc2VjdGlvbl9mb3JtX29ybmFtZW50LW1hcmtlclwiXHJcbiAgKTtcclxuICB0aGlzT3JuYW1lbnQuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9pY29ucy9wb2xlLjIuc3ZnXCIpO1xyXG4gIHRoaXNPcm5hbWVudC5jbGFzc0xpc3QuYWRkKFwiaXRJc1Bhc3NlZFRocm91Z2h0XCIpO1xyXG4gIGxldCBuZXh0T3JuYW1lbnQgPSBhbGxPcm5hbWVudHNbMV07XHJcbiAgbmV4dE9ybmFtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJpdElzSGlkZGVuXCIpO1xyXG4gIGxldCBwYXJ0T2ZGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc1wiKTtcclxuICBwYXJ0T2ZGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJpdElzSGlkZGVuXCIpO1xyXG4gIGd1aWRlUmVhY3RzKDEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRUaGlzRGF0YVRvRGVzY3JpcHRpb24oKSB7XHJcbiAgc2V0TmFtZVRvRGVzKCk7XHJcbiAgc2V0Tmlja25hbWVUb0RlcygpO1xyXG4gIHNldFNlbnRlbmNlVG9EZXMoKTtcclxufVxyXG4iLCJpbXBvcnQgaXRlcmF0b3JPZlBvaW50c0xlZnQgZnJvbSAnLi9hc2lkZS5qcyc7XHJcbmltcG9ydCB7Z3VpZGVSZWFjdHN9IGZyb20gJy4vYXNpZGUuanMnO1xyXG4ndXNlIHN0cmljdCc7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjaG9vc2VZb3VyQXZhdGFyKVxyXG5mdW5jdGlvbiBjaG9vc2VZb3VyQXZhdGFyICgpIHtcclxuICBsZXQgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyJylcclxuICBsZXQgYXZhdGFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9yYWRpby1sYWItY29udGFpbmVyJylcclxuICBsZXQgYW1vdW50ID0gYXZhdGFycy5sZW5ndGhcclxuICBmb3IgKGxldCBpID0gMDtpIDwgYW1vdW50O2krKykge1xyXG4gICAgbGV0IGl0ZW0gPSBhdmF0YXJzW2ldXHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBjaG9vc2VUaGlzQXZhdGFyKGl0ZW0sIGF2YXRhcnMsIGFtb3VudClcclxuICAgICAgc2V0T25lUGFydE9mQXR0YWNrRGVzY3JpcHRpb24oaSlcclxuICAgICAgc3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRzKGNvbnRhaW5lcnMpXHJcbiAgICAgIGVuYWJsZUF0dGFja3MoaSlcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGNob29zZVRoaXNBdmF0YXIgKGl0ZW0sIGF2YXRhcnMsIGFtb3VudCkge1xyXG4gIGl0ZW0ucXVlcnlTZWxlY3RvcignaW5wdXQnKS5jaGVja2VkID0gdHJ1ZTtcclxuICBmb3IgKGxldCBpPTA7IGk8YW1vdW50OyBpKyspe1xyXG4gICAgICBsZXQgYXYgPSBhdmF0YXJzW2ldO1xyXG4gICAgICBhdi5jbGFzc0xpc3QucmVtb3ZlKCdpc0NsaWNrZWQnKTtcclxuICB9XHJcbiAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpc0NsaWNrZWQnKTtcclxuICBpdGVyYXRvck9mUG9pbnRzTGVmdC5kZWxldGF0b3IoKTtcclxuICBndWlkZVJlYWN0cygyKTtcclxufVxyXG5mdW5jdGlvbiBzZXRPbmVQYXJ0T2ZBdHRhY2tEZXNjcmlwdGlvbiAoaSkge1xyXG4gIGxldCBkZXNQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncCBzcGFuLi0tZGVzX2tsYXNhJylcclxuICBsZXQgYXJyYXkgPSBbXHJcbiAgICAnIHVkZXJ6ZW5pZSBicm9uacSFIGJydXRhbG7EhS4nLFxyXG4gICAgJyB1ZGVyemVuaWUgYnJvbmnEhSBzdHJ6ZWxlY2vEhS4nLFxyXG4gICAgJyB1ZGVyemVuaWUgYnJvbmnEhSB6ZHJhZHppZWNrxIUuJyxcclxuICAgICcgdWRlcnplbmllIGJyb25pxIUgc3phbGXFhGN6xIUuJyxcclxuICAgICcgdWRlcnplbmllIGJyb25pxIUgc3phcmxhdGHFhHNrxIUuJyxcclxuICAgICcgdWRlcnplbmllIGJyb25pxIUgbHViIGN6eW1rb2x3aWVrLCBjbyB3cGFkbmllIGthcsWCb3dpIHcgxYJhcHNrYS4nXHJcbiAgXVxyXG4gIGRlc1BhcnQuaW5uZXJUZXh0ID0gYXJyYXlbaV1cclxuICBsZXQgbmV4dERlc1BhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwIHNwYW4uLS1kZXNfZXBpdGV0Jyk7XHJcbiAgbmV4dERlc1BhcnQuY2xhc3NMaXN0LmFkZCgnaXRzSGlkZGVuJyk7XHJcbiAgbGV0IGFub3RoZXJOZXh0RGVzUGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc196eXdpb2wnKTtcclxuICBhbm90aGVyTmV4dERlc1BhcnQuY2xhc3NMaXN0LmFkZCgnaXRzSGlkZGVuJyk7XHJcbiAgbGV0IG90aGVyQW5vdGhlck5leHREZXNQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX2ltaWUnKTtcclxuICBvdGhlckFub3RoZXJOZXh0RGVzUGFydC5jbGFzc0xpc3QuYWRkKCdpdHNIaWRkZW4nKTtcclxuICBsZXQgcHJ6RGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3Byenlkb21laycpO1xyXG4gIGxldCB6ZGFEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfemRhbmllJyk7XHJcbiAgcHJ6RGVzLmNsYXNzTGlzdC5hZGQoJ2l0c0hpZGRlbicpO1xyXG4gIHpkYURlcy5jbGFzc0xpc3QuYWRkKCdpdHNIaWRkZW4nKTtcclxufVxyXG5mdW5jdGlvbiBzeW5jaHJvbml6ZUJhY2tncm91bmRzT2ZPdGhlck9wdHMgKGNvbnRhaW5lcnMpIHtcclxuICBsZXQgYW1vdW50ID0gY29udGFpbmVycy5sZW5ndGhcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XHJcbiAgICBsZXQgY29udCA9IGNvbnRhaW5lcnNbaV1cclxuICAgIGxldCBvcHRpb25zID0gY29udC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKVxyXG4gICAgbGV0IGl0ZXIgPSBvcHRpb25zLmxlbmd0aFxyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVyOyB4KyspIHtcclxuICAgICAgbGV0IGJlbHQgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnKVt4XVxyXG4gICAgICBiZWx0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdpbmhlcml0J1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBlbmFibGVBdHRhY2tzIChpKSB7XHJcbiAgbGV0IGVuYWJsZWRBdHRhY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXInKVxyXG4gIGZvciAobGV0IHggPSAwOyB4IDwgNjsgeCsrKSB7XHJcbiAgICBsZXQgZGlzYWJsZWRJdGVtID0gZW5hYmxlZEF0dGFja3NbeF1cclxuICAgIGRpc2FibGVkSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdlbmFibGVkJylcclxuICAgIGxldCBvcHRzID0gZGlzYWJsZWRJdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpXHJcbiAgICBsZXQgYW1vdW50ID0gb3B0cy5sZW5ndGhcclxuICAgIGZvciAobGV0IGogPSAwO2ogPCBhbW91bnQ7aisrKSB7XHJcbiAgICAgIGlmIChvcHRzW2pdLnNlbGVjdGVkID09PSB0cnVlKSB7XHJcbiAgICAgICAgb3B0c1tqXS5zZWxlY3RlZCA9IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgbGV0IGVuYWJsZWRBdHRhY2sgPSBlbmFibGVkQXR0YWNrc1tpXVxyXG4gIGVuYWJsZWRBdHRhY2suY2xhc3NMaXN0LmFkZCgnZW5hYmxlZCcpXHJcbn1cclxuIiwiaW1wb3J0IGl0ZXJhdG9yT2ZQb2ludHNMZWZ0IGZyb20gJy4vYXNpZGUuanMnXHJcbmltcG9ydCB7IGd1aWRlUmVhY3RzIH0gZnJvbSAnLi9hc2lkZS5qcydcclxuJ3VzZSBzdHJpY3QnXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0aWFsaXplQXR0YWNrc1BhcnQpXHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplQXR0YWNrc1BhcnQgKCkge1xyXG4gIGxldCBjb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXInKVxyXG4gIGxldCBhbW91bnQgPSBjb250YWluZXJzLmxlbmd0aFxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50OyBpKyspIHtcclxuICAgIGxldCBjb250ID0gY29udGFpbmVyc1tpXVxyXG4gICAgbGV0IG9wdGlvbnMgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpXHJcbiAgICBsZXQgaXRlciA9IG9wdGlvbnMubGVuZ3RoXHJcbiAgICBmb3IgKGxldCB4ID0gMDt4IDwgaXRlcjt4KyspIHtcclxuICAgICAgbGV0IG9wdCA9IG9wdGlvbnNbeF1cclxuICAgICAgb3B0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0Jywgb25NT3V0KVxyXG4gICAgICBvcHQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIG9uTUVudGVyKVxyXG4gICAgICBmdW5jdGlvbiBvbk1FbnRlciAoKSB7XHJcbiAgICAgICAgaWYgKG9wdC5zZWxlY3RlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIHN5bmNocm9uaXplVGhpc0Jja2dyV2l0aEltYWdlQmVsdEhvdmVyQmNrZ3Iob3B0LCBjb250LCB4LCB0cnVlKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBmdW5jdGlvbiBvbk1PdXQgKCkge1xyXG4gICAgICAgIGlmIChvcHQuc2VsZWN0ZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICBzeW5jaHJvbml6ZVRoaXNCY2tncldpdGhJbWFnZUJlbHRIb3ZlckJja2dyKG9wdCwgY29udCwgeCwgZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgc2VsZWN0TGlzdCA9IGNvbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JylcclxuICAgIHNlbGVjdExpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBmb3IgKGxldCBxID0gMDsgcSA8IGl0ZXI7cSsrKSB7XHJcbiAgICAgICAgbGV0IG9wdCA9IG9wdGlvbnNbcV1cclxuICAgICAgICBpZiAob3B0LnZhbHVlID09PSBzZWxlY3RMaXN0LnZhbHVlKSB7XHJcbiAgICAgICAgICBpdGVyYXRvck9mUG9pbnRzTGVmdC5pdGVyYXRvcihjb250LCBxKVxyXG4gICAgICAgICAgZ3VpZGVSZWFjdHMoMylcclxuICAgICAgICAgIHN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0bnMoY29udCwgaXRlcilcclxuICAgICAgICAgIHN5bmNocm9uaXplVGhpc0Jja2dyV2l0aEltYWdlQmVsdEhvdmVyQmNrZ3Iob3B0LCBjb250LCBxLCB0cnVlKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gc3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRucyAoY29udCwgaXRlcikge1xyXG4gIGZvciAobGV0IHggPSAwOyB4IDwgaXRlcjsgeCsrKSB7XHJcbiAgICBsZXQgYmVsdCA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdCcpW3hdXHJcbiAgICBiZWx0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdpbmhlcml0J1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3luY2hyb25pemVUaGlzQmNrZ3JXaXRoSW1hZ2VCZWx0SG92ZXJCY2tnciAob3B0LCBjb250LCB4LCBpc0VudGVyKSB7XHJcbiAgbGV0IGJlbHQgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnKVt4XVxyXG4gIGlmIChpc0VudGVyID09PSB0cnVlKSB7XHJcbiAgICBsZXQgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShvcHQpXHJcbiAgICBsZXQgYmNnQ29sID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1jb2xvcicpXHJcbiAgICBiZWx0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJjZ0NvbFxyXG4gIH0gZWxzZSBpZiAoaXNFbnRlciA9PT0gZmFsc2UpIHtcclxuICAgIGJlbHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2luaGVyaXQnXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBpdGVyYXRvck9mUG9pbnRzTGVmdCBmcm9tICcuL2FzaWRlLmpzJztcclxuJ3VzZSBzdHJpY3QnO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdCk7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgbGV0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHMtMl9maWVsZHNldC1kX2NvbnRhaW5lcl9hdHJ5YiAuLS1iZWx0X2ljb24tY29udGFpbmVyJyk7XHJcbiAgICBsZXQgYmVsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHMtMl9maWVsZHNldC1kX2NvbnRhaW5lcl9hdHJ5YiAuLS1iZWx0X2JvZHktY29udGFpbmVyX2JvZHknKTtcclxuICAgIGxldCBpdGVyID0gYnRucy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXI7IGkrKykge1xyXG4gICAgICAgIGlmIChpID4gLTEpIHtcclxuICAgICAgICAgICAgbGV0IGF0dHJ5YiA9IGJ0bnNbaV07XHJcbiAgICAgICAgICAgIGxldCBiZWx0ID0gYmVsdHNbaV07XHJcbiAgICAgICAgICAgIGF0dHJ5Yi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVyYXRvck9mUG9pbnRzTGVmdC5sZWZ0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFBvaW50KGJlbHQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUG9pbnQoYmVsdCkge1xyXG4gICAgbGV0IElNRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0lNRycpO1xyXG4gICAgSU1HLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2ljb25zL2lrb25hLXBvdGVnLnN2ZycpO1xyXG4gICAgYmVsdC5hcHBlbmRDaGlsZChJTUcpO1xyXG4gICAgaXRlcmF0b3JPZlBvaW50c0xlZnQubGVmdC0tO1xyXG4gICAgaXRlcmF0b3JPZlBvaW50c0xlZnQuZXF1YWxpemF0b3IoKTtcclxuICAgIElNRy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkZWxldGVUaGlzSU1HKElNRylcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVRoaXNJTUcoeCkge1xyXG4gICAgeC5yZW1vdmUoKTtcclxuICAgIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0LmxlZnQrKztcclxuICAgIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0LmVxdWFsaXphdG9yKCk7XHJcbn0iLCJpbXBvcnQge2d1aWRlUmVhY3RzfSBmcm9tICcuL2FzaWRlLmpzJztcclxuXCJ1c2Ugc3RyaWN0XCI7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGluaXRpYWxpemVUaGlzU2VjdGlvbik7XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplVGhpc1NlY3Rpb24oKSB7XHJcbiAgICBsZXQgbGlzdEEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzZXQtYyAjemFzbG9uYVwiXHJcbiAgICApO1xyXG4gICAgbGV0IGxpc3RCID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc2V0LWMgI3BhbmNlcnpcIlxyXG4gICAgKTtcclxuICAgIGxldCBpbWFnZXNBID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICBcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc2V0LWNfaW1nc19pbWcuYVwiXHJcbiAgICApO1xyXG4gICAgbGV0IGltYWdlc0IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgIFwiLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzZXQtY19pbWdzX2ltZy5iXCJcclxuICAgICk7XHJcbiAgICBsZXQgb3B0c0EgPSBsaXN0QS5xdWVyeVNlbGVjdG9yQWxsKFwib3B0aW9uXCIpO1xyXG4gICAgbGV0IG9wdHNCID0gbGlzdEIucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvblwiKTtcclxuICAgIGR5bmFtaXplVGhpc0xpc3QobGlzdEEsIG9wdHNBLCBpbWFnZXNBLCBsaXN0Qik7XHJcbiAgICBkeW5hbWl6ZVRoaXNMaXN0KGxpc3RCLCBvcHRzQiwgaW1hZ2VzQiwgbGlzdEEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkeW5hbWl6ZVRoaXNMaXN0KGxpc3QsIG9wdHMsIGltYWdlcywgb3RoZXJMaXN0KSB7XHJcbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IGxpc3QudmFsdWU7XHJcbiAgICAgICAgbGV0IGl0ZXIgPSBvcHRzLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGl0ZXIgLSAxOyBqKyspIHtcclxuICAgICAgICAgICAgaW1hZ2VzW2pdLmNsYXNzTGlzdC5hZGQoXCJpdElzVW5zZWxlY3RlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVyOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG9wdCA9IG9wdHNbaV07XHJcbiAgICAgICAgICAgIGxldCBvcHRWYWx1ZSA9IG9wdC52YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBvcHRWYWx1ZSAmJiBpICE9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZXNbaV0uY2xhc3NMaXN0LnJlbW92ZShcIml0SXNVbnNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVuYWJsZU5leHRGb3JtUGFydChsaXN0LCBvdGhlckxpc3QpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuYWJsZU5leHRGb3JtUGFydChsaXN0LCBvdGhlckxpc3QpIHtcclxuICAgIGxldCBhID0gbGlzdC52YWx1ZTtcclxuICAgIGxldCBiID0gb3RoZXJMaXN0LnZhbHVlO1xyXG4gICAgaWYgKGEgIT09IFwiXCIgJiYgYiAhPT0gXCJcIikge1xyXG4gICAgICAgIGxldCBuZXh0UGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkcy0yJyk7XHJcbiAgICAgICAgbmV4dFBhcnQuY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0hpZGRlbicpO1xyXG4gICAgICAgIGxldCBhbGxPcm5hbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcuY29ycHVzX3NlY3Rpb25fZm9ybV9vcm5hbWVudC1tYXJrZXInKTtcclxuICAgICAgICBsZXQgdGhpc09ybmFtZW50ID0gYWxsT3JuYW1lbnRzWzJdO1xyXG4gICAgICAgIHRoaXNPcm5hbWVudC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ljb25zL3BvbGUuMi5zdmcnKTtcclxuICAgICAgICB0aGlzT3JuYW1lbnQuY2xhc3NMaXN0LmFkZCgnaXRJc1Bhc3NlZFRocm91Z2h0Jyk7XHJcbiAgICAgICAgbGV0IG5leHRPcm5hbWVudCA9IGFsbE9ybmFtZW50c1szXTtcclxuICAgICAgICBuZXh0T3JuYW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0hpZGRlbicpO1xyXG4gICAgICAgIGd1aWRlUmVhY3RzKDUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IGl0ZXJhdG9yT2ZQb2ludHNMZWZ0IGZyb20gJy4vYXNpZGUuanMnO1xyXG5pbXBvcnQge2d1aWRlUmVhY3RzfSBmcm9tICcuL2FzaWRlLmpzJztcclxuJ3VzZSBzdHJpY3QnO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdGlhbGl6ZVRoaXNTZWxlY3QpXHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplVGhpc1NlbGVjdCgpIHtcclxuICAgIGxldCBvcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzLTJfZmllbGRzZXQtZF9jb250YWluZXJfbW9jZScpO1xyXG4gICAgbGV0IGl0ZXIgPSBvcHRpb25zLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcjsgaSsrKSB7XHJcbiAgICAgICAgbGV0IG9wdCA9IG9wdGlvbnNbaV07XHJcbiAgICAgICAgb3B0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpdElzQ2xpY2tlZChvcHQsIG9wdGlvbnMsIGl0ZXIsIGkpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gaXRJc0NsaWNrZWQob3B0LCBvcHRzLCBpdGVyLCBpKSB7XHJcbiAgICBsZXQgY2hlY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cIm1vYy1waWV0bm9cIl0nKTtcclxuICAgIGxldCBjb3N0T2ZUaGlzID0gWzEsMiwyLDEsMywxXTtcclxuICAgIGlmIChjaGVja3NbaV0uY2hlY2tlZD09PXRydWUpe1xyXG4gICAgICAgIGNoZWNrc1tpXS5jaGVja2VkPWZhbHNlO1xyXG4gICAgICAgIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0Lml0ZXJhdG9yQihjb3N0T2ZUaGlzW2ldKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGNoZWNrc1tpXS5jaGVja2VkPXRydWU7XHJcbiAgICAgICAgaXRlcmF0b3JPZlBvaW50c0xlZnQuZGVsZXRhdG9yQihjb3N0T2ZUaGlzW2ldKTtcclxuICAgICAgICBndWlkZVJlYWN0cyg2KTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgaXRlcjsgaisrKSB7XHJcbiAgICAgICAgaWYgKGNoZWNrc1tqXS5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIG9wdHNbal0uY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hlY2tzW2pdLmNoZWNrZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIG9wdHNbal0uY2xhc3NMaXN0LmFkZCgnaXRJc0hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdGlhbGl6ZUd1aWRlIiwiaGlkZVVzZXJHdWlkZSIsInNldFRpbWVvdXQiLCJhc2lkZSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJvcm5tIiwicm90YXRlQW5kSGlkZUFzaWRlIiwiYnRuIiwiY29udHJvbGxlciIsImhlYWRCZWx0IiwicGllY2UiLCJvZmZzZXRIZWlnaHQiLCJzdHlsZSIsInRyYW5zZm9ybSIsImF3Iiwib2Zmc2V0V2lkdGgiLCJhaCIsIndzcCIsIngiLCJ5IiwieiIsImxlZnQiLCJib3R0b20iLCJhcnJheVdpdGhJdGVycyIsImd1aWRlUmVhY3RzIiwiaSIsInJlbW92ZSIsInBhcnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImN1cnJlbnRQYXJ0IiwicG9zaXRpb24iLCJvZmZzZXRUb3AiLCJ3aW5kb3ciLCJ6ZW5zY3JvbGwiLCJ0b1kiLCJndWlkZSIsInRpdGxlIiwiYXJyIiwiaW5uZXJUZXh0IiwiYXJyQiIsImlzU29tZXRoaW5nTmV3VG9TYXkiLCJpdGVyYXRvck9mUG9pbnRzTGVmdCIsInNwZW50T25BdHRhY2siLCJpdGVyYXRvciIsImNvbnQiLCJpdGVyRGV2aWNlIiwib3B0IiwicG9pbnRzIiwiYW1vdW50IiwibGVuZ3RoIiwiYmlsYW5zIiwiYW5pbWF0ZU9wdHNTcGVuZGluZyIsImRlbGV0YXRvciIsImNvaW4iLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXhTIiwic2Nyb2xsWSIsImF4WCIsImF4WiIsImF4WSIsIm9mZnNldExlZnQiLCJ0b3AiLCJhcHBlbmRDaGlsZCIsIndpZHRoIiwiaGVpZ2h0IiwicmVtb3ZlQ2hpbGQiLCJpdGVyYXRvckIiLCJpbnRlZ2VyIiwiZGVsZXRhdG9yQiIsImVxdWFsaXphdG9yIiwiaW5pdGlhbGl6ZSIsIm9wdHMiLCJpdGVtIiwic2V0SU1HIiwiZW5hYmxlU3RyaWtlTmFtZVBhcnQiLCJzZXRTdHJpa2VOYW1lVG9EZXMiLCJzZXRQYXJ0T2ZBdHRhY2tEZXNjcmlwdGlvbiIsInNldEZvcmNlRGVzIiwib25seU9uY2UiLCJkZXNQYXJ0IiwiYXJyYXkiLCJiZWx0IiwiaW1hZyIsImF0dHJ5YiIsImdldEF0dHJpYnV0ZSIsImljb24iLCJhbGxJTUdzIiwic3RhbmRhcnQiLCJpbWFnZVRvRGVsIiwiaiIsInRoZUlNRyIsInNvdXJjZUlNRyIsIm5ld0lNRyIsInNldE5leHRQYXJ0T2ZGb3JtdWxhRm9yVGhlRmlyc3RUaW1lIiwiaW5wIiwic3RyTmFtZSIsInZhbHVlIiwic2hvd0FsbERlcyIsIml0bSIsInRyaW0iLCJzZXROZXh0UGFydE9mRm9ybXVsYSIsIklNR3MiLCJpdGVyIiwic3RybmciLCJJTUciLCJwdXNoIiwic3RyaW5nVG9TZXQiLCJqb2luIiwienl3RGVzIiwiaW1pRGVzIiwicHJ6RGVzIiwiemRhRGVzIiwic2V0TmFtZVRvRGVzIiwibmFtIiwic2V0Tmlja25hbWVUb0RlcyIsImlucEIiLCJzdXJuYW0iLCJzZXRTZW50ZW5jZVRvRGVzIiwiYWxsRGVzIiwidGV4dEFyZWEiLCJhcmVhVmFsdWUiLCJlbmFibGVOZXh0UGFydE9mRm9ybSIsIm5leHRQYXJ0IiwiYWxsT3JuYW1lbnRzIiwidGhpc09ybmFtZW50IiwibmV4dE9ybmFtZW50IiwiYm94U2l6ZSIsInpJbmRleCIsInVzZXJGbG93VmlhRmlyc3RGaWVsZHNldCIsInVzZXJOYW1lIiwidXNlck5pY2siLCJ1c2VyTW90dG8iLCJ1c2VyTmFtZUFjY2VwdCIsInVzZXJOaWNrQWNjZXB0IiwidXNlck1vdHRvQWNjZXB0IiwibmV4dEl0ZW0iLCJwYXJ0T2ZGb3JtIiwiYWxsRmllbGRzQXJlU2V0IiwiY2hlY2tJZkZpZWxkc0FyZVNldCIsInRlcm0iLCJjb250YWlucyIsImVuYWJsZU5leHRQYXJ0T2ZGb3JtdWxhIiwic2V0VGhpc0RhdGFUb0Rlc2NyaXB0aW9uIiwiZXZlbnQiLCJrZXlDb2RlIiwiZm9jdXMiLCJibHVyIiwic2hvd0J0bk9mQWNjZXB0YXRpb24iLCJ2YWx1ZUEiLCJ2YWx1ZUIiLCJ2YWx1ZUMiLCJjaG9vc2VZb3VyQXZhdGFyIiwiY29udGFpbmVycyIsImF2YXRhcnMiLCJjaG9vc2VUaGlzQXZhdGFyIiwic2V0T25lUGFydE9mQXR0YWNrRGVzY3JpcHRpb24iLCJzeW5jaHJvbml6ZUJhY2tncm91bmRzT2ZPdGhlck9wdHMiLCJlbmFibGVBdHRhY2tzIiwiY2hlY2tlZCIsImF2IiwibmV4dERlc1BhcnQiLCJhbm90aGVyTmV4dERlc1BhcnQiLCJvdGhlckFub3RoZXJOZXh0RGVzUGFydCIsIm9wdGlvbnMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJlbmFibGVkQXR0YWNrcyIsImRpc2FibGVkSXRlbSIsInNlbGVjdGVkIiwiZW5hYmxlZEF0dGFjayIsImluaXRpYWxpemVBdHRhY2tzUGFydCIsIm9uTU91dCIsIm9uTUVudGVyIiwic3luY2hyb25pemVUaGlzQmNrZ3JXaXRoSW1hZ2VCZWx0SG92ZXJCY2tnciIsInNlbGVjdExpc3QiLCJxIiwic3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRucyIsImlzRW50ZXIiLCJnZXRDb21wdXRlZFN0eWxlIiwiYmNnQ29sIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImluaXQiLCJidG5zIiwiYmVsdHMiLCJhZGRQb2ludCIsImRlbGV0ZVRoaXNJTUciLCJpbml0aWFsaXplVGhpc1NlY3Rpb24iLCJsaXN0QSIsImxpc3RCIiwiaW1hZ2VzQSIsImltYWdlc0IiLCJvcHRzQSIsIm9wdHNCIiwiZHluYW1pemVUaGlzTGlzdCIsImxpc3QiLCJpbWFnZXMiLCJvdGhlckxpc3QiLCJvcHRWYWx1ZSIsImVuYWJsZU5leHRGb3JtUGFydCIsImEiLCJiIiwiaW5pdGlhbGl6ZVRoaXNTZWxlY3QiLCJpdElzQ2xpY2tlZCIsImNoZWNrcyIsImNvc3RPZlRoaXMiXSwibWFwcGluZ3MiOiI7OztJQUFBQSxTQUFTQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOENDLGVBQTlDOztJQUVBLFNBQVNBLGVBQVQsR0FBNEI7SUFDMUJDO0lBQ0FDLGFBQVcsWUFBVTtJQUNuQixRQUFJQyxRQUFRTCxTQUFTTSxhQUFULENBQXVCLE9BQXZCLENBQVo7SUFDQUQsVUFBTUUsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsUUFBcEI7SUFDRCxHQUhELEVBR0csQ0FISDtJQUlEOztJQUVELFNBQVNMLGFBQVQsR0FBMEI7SUFDeEIsTUFBSU0sT0FBT1QsU0FBU00sYUFBVCxDQUF1QixhQUF2QixDQUFYO0lBQ0FHLE9BQUtSLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCUyxrQkFBL0I7SUFDQSxNQUFJQyxNQUFNWCxTQUFTTSxhQUFULENBQXVCLGtCQUF2QixDQUFWO0lBQ0FLLE1BQUlWLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCUyxrQkFBOUI7SUFDRDtJQUNELElBQUlFLGFBQWEsQ0FBakI7SUFDQSxTQUFTRixrQkFBVCxHQUErQjtJQUM3QixNQUFJTCxRQUFRTCxTQUFTTSxhQUFULENBQXVCLE9BQXZCLENBQVo7SUFDQSxNQUFJTSxlQUFlLENBQW5CLEVBQXNCO0lBQ3BCLFFBQUlDLFdBQVdSLE1BQU1DLGFBQU4sQ0FBb0IsYUFBcEIsQ0FBZjtJQUNBLFFBQUlRLFFBQVFELFNBQVNFLFlBQXJCO0lBQ0FWLFVBQU1XLEtBQU4sQ0FBWUMsU0FBWixHQUF3QixlQUF4QjtJQUNBLFFBQUlDLEtBQUtiLE1BQU1jLFdBQWY7SUFDQSxRQUFJQyxLQUFLZixNQUFNVSxZQUFmO0lBQ0EsUUFBSU0sTUFBTUQsS0FBTSxDQUFDRixLQUFLRSxFQUFOLElBQVksQ0FBNUI7SUFDQSxRQUFJRSxJQUFLRCxNQUFNLENBQUMsQ0FBUixHQUFhUCxLQUFyQjtJQUNBLFFBQUlTLElBQUlELElBQUksSUFBWjtJQUNBLFFBQUlFLElBQUssQ0FBQ04sS0FBS0UsRUFBTixJQUFZLENBQWIsR0FBa0IsSUFBMUI7SUFDQWYsVUFBTVcsS0FBTixDQUFZUyxJQUFaLEdBQW1CRixDQUFuQjtJQUNBbEIsVUFBTVcsS0FBTixDQUFZVSxNQUFaLEdBQXFCRixDQUFyQjtJQUNBWixpQkFBYSxDQUFiO0lBQ0QsR0FiRCxNQWFPLElBQUlBLGVBQWUsQ0FBbkIsRUFBc0I7SUFDM0JQLFVBQU1XLEtBQU4sQ0FBWUMsU0FBWixHQUF3QixjQUF4QjtJQUNBWixVQUFNVyxLQUFOLENBQVlTLElBQVosR0FBbUIsQ0FBbkI7SUFDQXBCLFVBQU1XLEtBQU4sQ0FBWVUsTUFBWixHQUFxQixDQUFyQjtJQUNBZCxpQkFBYSxDQUFiO0lBQ0Q7SUFDRjtJQUNELElBQUllLGlCQUFpQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBQXJCO0FBQ0EsSUFBTyxTQUFTQyxXQUFULENBQXNCQyxDQUF0QixFQUF5QjtJQUM5QixNQUFJeEIsUUFBUUwsU0FBU00sYUFBVCxDQUF1QixPQUF2QixDQUFaO0lBQ0FELFFBQU1FLFNBQU4sQ0FBZ0J1QixNQUFoQixDQUF1QixVQUF2QjtJQUNBekIsUUFBTUUsU0FBTixDQUFnQnVCLE1BQWhCLENBQXVCLFdBQXZCO0lBQ0EsTUFBSUMsUUFBUS9CLFNBQVNnQyxnQkFBVCxDQUEwQixVQUExQixDQUFaO0lBQ0EsTUFBSUMsY0FBY0YsTUFBTUYsQ0FBTixDQUFsQjtJQUNBLE1BQUlLLFdBQVdELFlBQVlFLFNBQTNCO0lBQ0EsTUFBSVIsZUFBZUUsQ0FBZixNQUFzQixDQUExQixFQUE2QjtJQUMzQjtJQUNBTyxXQUFPQyxTQUFQLENBQWlCQyxHQUFqQixDQUFxQkosUUFBckI7SUFDQVAsbUJBQWVFLENBQWYsSUFBb0IsQ0FBcEI7SUFDQSxRQUFJVSxRQUFRdkMsU0FBU00sYUFBVCxDQUF1Qix5QkFBdkIsQ0FBWjtJQUNBLFFBQUlrQyxRQUFReEMsU0FBU00sYUFBVCxDQUF1QixtQkFBdkIsQ0FBWjtJQUNBLFFBQUltQyxNQUFNLENBQ1Isd0dBRFEsRUFFUixxR0FGUSxFQUdSLDZJQUhRLEVBSVIsK0dBSlEsRUFLUixpRkFMUSxFQU1SLDRHQU5RLEVBT1IsOEZBUFEsQ0FBVjtJQVNBRixVQUFNRyxTQUFOLEdBQWtCRCxJQUFJWixDQUFKLENBQWxCO0lBQ0EsUUFBSWMsT0FBTyxDQUNULFlBRFMsRUFFVCxRQUZTLEVBR1QsT0FIUyxFQUlULGNBSlMsRUFLVCxTQUxTLEVBTVQsb0JBTlMsRUFPVCxXQVBTLENBQVg7SUFTQUgsVUFBTUUsU0FBTixHQUFrQkMsS0FBS2QsQ0FBTCxDQUFsQjtJQUNBZTtJQUNEO0lBQ0Y7SUFDRCxTQUFTQSxtQkFBVCxHQUE4QjtJQUM1QixNQUFJdkMsUUFBUUwsU0FBU00sYUFBVCxDQUF1QixPQUF2QixDQUFaOztJQUVBLE1BQUlNLGVBQWEsQ0FBakIsRUFBbUI7SUFDakIsUUFBSUMsV0FBV1IsTUFBTUMsYUFBTixDQUFvQixhQUFwQixDQUFmO0lBQ0EsUUFBSVEsUUFBUUQsU0FBU0UsWUFBckI7SUFDQVYsVUFBTVcsS0FBTixDQUFZQyxTQUFaLEdBQXdCLGVBQXhCO0lBQ0EsUUFBSUMsS0FBS2IsTUFBTWMsV0FBZjtJQUNBLFFBQUlDLEtBQUtmLE1BQU1VLFlBQWY7SUFDQSxRQUFJTSxNQUFNRCxLQUFNLENBQUNGLEtBQUtFLEVBQU4sSUFBWSxDQUE1QjtJQUNBLFFBQUlFLElBQUtELE1BQU0sQ0FBQyxDQUFSLEdBQWFQLEtBQXJCO0lBQ0EsUUFBSVMsSUFBSUQsSUFBSSxJQUFaO0lBQ0EsUUFBSUUsSUFBSyxDQUFDTixLQUFLRSxFQUFOLElBQVksQ0FBYixHQUFrQixJQUExQjtJQUNBZixVQUFNVyxLQUFOLENBQVlTLElBQVosR0FBbUJGLENBQW5CO0lBQ0FsQixVQUFNVyxLQUFOLENBQVlVLE1BQVosR0FBcUJGLENBQXJCO0lBQ0FuQixVQUFNRSxTQUFOLENBQWdCQyxHQUFoQixDQUFvQixVQUFwQjtJQUNELEdBYkQsTUFjSyxJQUFJSSxlQUFhLENBQWpCLEVBQW1CO0lBQ3RCUCxVQUFNRSxTQUFOLENBQWdCQyxHQUFoQixDQUFvQixXQUFwQjtJQUNEO0lBQ0Y7SUFDRCxJQUFJcUMsdUJBQXVCO0lBQ3pCcEIsUUFBTSxFQURtQjtJQUV6QnFCLGlCQUFlLENBRlU7SUFHekJDLFVBSHlCLG9CQUdoQkMsSUFIZ0IsRUFHVjFCLENBSFUsRUFHUDtJQUNoQixRQUFJMkIsYUFBYWpELFNBQVNNLGFBQVQsQ0FBdUIsc0JBQXZCLENBQWpCO0lBQ0EsUUFBSTRDLE1BQU1GLEtBQUtoQixnQkFBTCxDQUFzQiwwRkFBdEIsRUFBa0hWLENBQWxILENBQVY7SUFDQSxRQUFJNkIsU0FBU0QsSUFBSWxCLGdCQUFKLENBQXFCLEtBQXJCLENBQWI7SUFDQSxRQUFJb0IsU0FBVUQsT0FBT0UsTUFBUCxHQUFnQixDQUE5QjtJQUNBLFFBQUlDLFNBQVNGLFNBQVMsS0FBS04sYUFBM0I7SUFDQSxTQUFLckIsSUFBTCxHQUFZLEtBQUtBLElBQUwsR0FBWTZCLE1BQXhCO0lBQ0EsU0FBS1IsYUFBTCxHQUFxQk0sTUFBckI7SUFDQUgsZUFBV1AsU0FBWCxHQUF1QixjQUFjLEdBQWQsR0FBb0IsS0FBS2pCLElBQXpCLEdBQWdDLEdBQXZEO0lBQ0EsU0FBSzhCLG1CQUFMLENBQXlCTCxHQUF6QixFQUE4QkUsTUFBOUI7SUFDRCxHQWJ3QjtJQWN6QkksV0FkeUIsdUJBY2I7SUFDVixRQUFJUCxhQUFhakQsU0FBU00sYUFBVCxDQUF1QixzQkFBdkIsQ0FBakI7SUFDQSxTQUFLbUIsSUFBTCxHQUFZLEtBQUtBLElBQUwsR0FBWSxLQUFLcUIsYUFBN0I7SUFDQSxTQUFLQSxhQUFMLEdBQXFCLENBQXJCO0lBQ0FHLGVBQVdQLFNBQVgsR0FBdUIsY0FBYyxHQUFkLEdBQW9CLEtBQUtqQixJQUF6QixHQUFnQyxHQUF2RDtJQUNELEdBbkJ3QjtJQW9CekI4QixxQkFwQnlCLCtCQW9CTEwsR0FwQkssRUFvQkFFLE1BcEJBLEVBb0JPO0lBQzlCLFFBQUlLLE9BQU96RCxTQUFTMEQsYUFBVCxDQUF1QixLQUF2QixDQUFYO0lBQ0FELFNBQUtFLFlBQUwsQ0FBa0IsS0FBbEIsRUFBeUIseUJBQXpCO0lBQ0FGLFNBQUtsRCxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsVUFBbkI7SUFDQSxRQUFJb0QsTUFBTXhCLE9BQU95QixPQUFqQjtJQUNBLFFBQUlDLE1BQU1aLElBQUlmLFNBQWQ7SUFDQSxRQUFJNEIsTUFBTUQsTUFBTUYsR0FBaEI7SUFDQSxRQUFJSSxNQUFNZCxJQUFJZSxVQUFkO0lBQ0FSLFNBQUt6QyxLQUFMLENBQVdrRCxHQUFYLEdBQWlCSCxNQUFJLElBQXJCO0lBQ0FOLFNBQUt6QyxLQUFMLENBQVdTLElBQVgsR0FBa0J1QyxNQUFJLElBQXRCO0lBQ0FoRSxhQUFTTSxhQUFULENBQXVCLE1BQXZCLEVBQStCNkQsV0FBL0IsQ0FBMkNWLElBQTNDO0lBQ0FyRCxlQUFXLFlBQVU7SUFDbkJxRCxXQUFLekMsS0FBTCxDQUFXUyxJQUFYLEdBQWlCLEdBQWpCO0lBQ0FnQyxXQUFLekMsS0FBTCxDQUFXa0QsR0FBWCxHQUFnQixLQUFoQjtJQUNBVCxXQUFLekMsS0FBTCxDQUFXb0QsS0FBWCxHQUFrQixNQUFsQjtJQUNBWCxXQUFLekMsS0FBTCxDQUFXcUQsTUFBWCxHQUFtQixNQUFuQjtJQUNELEtBTEQsRUFLRSxDQUxGO0lBTUFqRSxlQUFXLFlBQVU7SUFDbkJKLGVBQVNNLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0JnRSxXQUEvQixDQUEyQ2IsSUFBM0M7SUFDQXpELGVBQVNNLGFBQVQsQ0FBdUIsT0FBdkIsRUFBZ0NDLFNBQWhDLENBQTBDQyxHQUExQyxDQUE4QyxVQUE5QztJQUNELEtBSEQsRUFHRSxHQUhGO0lBSUQsR0F6Q3dCO0lBMEN6QitELFdBMUN5QixxQkEwQ2ZDLE9BMUNlLEVBMENOO0lBQ2pCLFFBQUl2QixhQUFhakQsU0FBU00sYUFBVCxDQUF1QixzQkFBdkIsQ0FBakI7SUFDQSxTQUFLbUIsSUFBTCxHQUFZLEtBQUtBLElBQUwsR0FBWStDLE9BQXhCO0lBQ0F2QixlQUFXUCxTQUFYLEdBQXVCLGNBQWMsR0FBZCxHQUFvQixLQUFLakIsSUFBekIsR0FBZ0MsR0FBdkQ7SUFDRCxHQTlDd0I7SUErQ3pCZ0QsWUEvQ3lCLHNCQStDZEQsT0EvQ2MsRUErQ0w7SUFDbEIsUUFBSXZCLGFBQWFqRCxTQUFTTSxhQUFULENBQXVCLHNCQUF2QixDQUFqQjtJQUNBLFNBQUttQixJQUFMLEdBQVksS0FBS0EsSUFBTCxHQUFZK0MsT0FBeEI7SUFDQXZCLGVBQVdQLFNBQVgsR0FBdUIsY0FBYyxHQUFkLEdBQW9CLEtBQUtqQixJQUF6QixHQUFnQyxHQUF2RDtJQUNELEdBbkR3QjtJQW9EekJpRCxhQXBEeUIseUJBb0RYO0lBQ1osUUFBSXpCLGFBQWFqRCxTQUFTTSxhQUFULENBQXVCLHNCQUF2QixDQUFqQjtJQUNBMkMsZUFBV1AsU0FBWCxHQUF1QixjQUFjLEdBQWQsR0FBb0IsS0FBS2pCLElBQXpCLEdBQWdDLEdBQXZEO0lBQ0Q7SUF2RHdCLENBQTNCOztJQ2hHQXpCLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QzBFLFVBQTlDOztJQUVBLFNBQVNBLFVBQVQsR0FBc0I7SUFDcEIsTUFBSUMsT0FBTzVFLFNBQVNnQyxnQkFBVCxDQUNULHNGQURTLENBQVg7SUFHQSxNQUFJb0IsU0FBU3dCLEtBQUt2QixNQUFsQjs7SUFKb0IsNkJBS1h4QixDQUxXO0lBTWxCLFFBQUlnRCxPQUFPRCxLQUFLL0MsQ0FBTCxDQUFYO0lBQ0FnRCxTQUFLNUUsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBWTtJQUN6QzZFLGFBQU9qRCxDQUFQO0lBQ0FrRDtJQUNBQyx5QkFBbUJuRCxDQUFuQjtJQUNBb0QsaUNBQTJCcEQsQ0FBM0I7SUFDQXFELGtCQUFZckQsQ0FBWjtJQUNELEtBTkQ7SUFQa0I7O0lBS3BCLE9BQUssSUFBSUEsSUFBSSxDQUFiLEVBQWdCQSxJQUFJdUIsTUFBcEIsRUFBNEJ2QixHQUE1QixFQUFpQztJQUFBLFVBQXhCQSxDQUF3QjtJQVNoQztJQUNGO0lBQ0QsSUFBSXNELFdBQVcsQ0FBZjs7SUFFQSxTQUFTSixvQkFBVCxHQUFnQztJQUM5Qkk7SUFDQSxNQUFJQSxhQUFhLENBQWpCLEVBQW9CO0lBQ2xCLFFBQUlOLE9BQU83RSxTQUFTTSxhQUFULENBQXVCLGFBQXZCLENBQVg7SUFDQXVFLFNBQUt0RSxTQUFMLENBQWV1QixNQUFmLENBQXNCLFlBQXRCO0lBQ0Q7SUFDRjtJQUdELFNBQVNtRCwwQkFBVCxDQUFvQ3BELENBQXBDLEVBQXVDO0lBQ3JDLE1BQUl1RCxVQUFVcEYsU0FBU00sYUFBVCxDQUF1QixxQkFBdkIsQ0FBZDtJQUNBOEUsVUFBUTdFLFNBQVIsQ0FBa0J1QixNQUFsQixDQUF5QixXQUF6QjtJQUNBLE1BQUl1RCxRQUFRLENBQ1YsVUFEVSxFQUVWLGtCQUZVLEVBR1YsWUFIVSxFQUlWLFlBSlUsRUFLVixZQUxVLEVBTVYsV0FOVSxFQU9WLFdBUFUsRUFRVixhQVJVLEVBU1YsY0FUVSxFQVVWLFdBVlUsRUFXVix3Q0FYVSxFQVlWLGlCQVpVLEVBYVYsU0FiVSxFQWNWLFNBZFUsRUFlVixTQWZVLEVBZ0JWLFVBaEJVLEVBaUJWLHlCQWpCVSxFQWtCVixxQkFsQlUsQ0FBWjtJQW9CQUQsVUFBUTFDLFNBQVIsR0FBb0IsT0FBTzJDLE1BQU14RCxDQUFOLENBQTNCO0lBQ0Q7O0lBRUQsU0FBU2lELE1BQVQsQ0FBZ0JqRCxDQUFoQixFQUFtQjtJQUNqQixNQUFJeUQsT0FBT3RGLFNBQVNnQyxnQkFBVCxDQUNULDBGQURTLEVBRVRILENBRlMsQ0FBWDtJQUdBLE1BQUkwRCxPQUFPRCxLQUFLdEQsZ0JBQUwsQ0FBc0IsS0FBdEIsRUFBNkIsQ0FBN0IsQ0FBWDtJQUNBLE1BQUl3RCxTQUFTRCxLQUFLRSxZQUFMLENBQWtCLEtBQWxCLENBQWI7SUFDQSxNQUFJQyxPQUFPMUYsU0FBU00sYUFBVCxDQUF1QixtQkFBdkIsQ0FBWDtJQUNBb0YsT0FBSy9CLFlBQUwsQ0FBa0IsS0FBbEIsRUFBeUI2QixNQUF6QjtJQUNBLE1BQUlHLFVBQVVMLEtBQUt0RCxnQkFBTCxDQUFzQixLQUF0QixFQUE2QnFCLE1BQTNDO0lBQ0EsTUFBSXVDLFdBQVc1RixTQUFTTSxhQUFULENBQXVCLHNCQUF2QixDQUFmO0lBQ0EsU0FBT3NGLFNBQVN0RixhQUFULENBQXVCLEtBQXZCLE1BQWtDLElBQXpDLEVBQStDO0lBQzdDLFFBQUl1RixhQUFhRCxTQUFTdEYsYUFBVCxDQUF1QixLQUF2QixDQUFqQjtJQUNBc0YsYUFBU3RCLFdBQVQsQ0FBcUJ1QixVQUFyQjtJQUNEO0lBQ0QsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlILE9BQXBCLEVBQTZCRyxHQUE3QixFQUFrQztJQUNoQyxRQUFJQSxJQUFJLENBQVIsRUFBVztJQUNULFVBQUlDLFNBQVNULEtBQUt0RCxnQkFBTCxDQUFzQixLQUF0QixFQUE2QjhELENBQTdCLENBQWI7SUFDQSxVQUFJRSxZQUFZRCxPQUFPTixZQUFQLENBQW9CLEtBQXBCLENBQWhCO0lBQ0EsVUFBSVEsU0FBU2pHLFNBQVMwRCxhQUFULENBQXVCLEtBQXZCLENBQWI7SUFDQXVDLGFBQU90QyxZQUFQLENBQW9CLEtBQXBCLEVBQTJCcUMsU0FBM0I7SUFDQUosZUFBU3pCLFdBQVQsQ0FBcUI4QixNQUFyQjtJQUNEO0lBQ0Y7SUFDRjtJQUNELElBQUlDLHNDQUFvQyxDQUF4QztJQUNBLFNBQVNsQixrQkFBVCxDQUE0Qm5ELENBQTVCLEVBQStCO0lBQzdCLE1BQUlzRSxNQUFNbkcsU0FBU00sYUFBVCxDQUF1Qiw4QkFBdkIsQ0FBVjtJQUNBNkYsTUFBSWxHLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFlBQVk7SUFDeEMsUUFBSW1HLFVBQVVELElBQUlFLEtBQWxCO0lBQ0EsUUFBSXhCLE9BQU83RSxTQUFTTSxhQUFULENBQXVCLG9CQUF2QixDQUFYO0lBQ0F1RSxTQUFLbkMsU0FBTCxHQUFpQjBELFVBQVUsZ0JBQTNCO0lBQ0FFO0lBQ0QsR0FMRDtJQU1BSCxNQUFJbEcsZ0JBQUosQ0FBcUIsUUFBckIsRUFBK0IsWUFBWTtJQUN6QyxRQUFJc0csTUFBTUosSUFBSUUsS0FBZDtJQUNBLFFBQUlFLElBQUlDLElBQUosT0FBZSxFQUFmLElBQW1CTix3Q0FBc0MsQ0FBN0QsRUFBZ0U7SUFDOUQsVUFBSUUsVUFBVUQsSUFBSUUsS0FBbEI7SUFDQSxVQUFJeEIsT0FBTzdFLFNBQVNNLGFBQVQsQ0FBdUIsb0JBQXZCLENBQVg7SUFDQXVFLFdBQUtuQyxTQUFMLEdBQWlCMEQsVUFBVSxnQkFBM0I7SUFDQUU7SUFDQUc7SUFDQVAsNENBQW9DLENBQXBDO0lBQ0Q7SUFDRixHQVZEO0lBV0Q7O0lBRUQsU0FBU2hCLFdBQVQsQ0FBcUJyRCxDQUFyQixFQUF3QjtJQUN0QixNQUFJeUQsT0FBT3RGLFNBQVNnQyxnQkFBVCxDQUNULDBGQURTLEVBRVRILENBRlMsQ0FBWDtJQUdBLE1BQUk2RSxPQUFPcEIsS0FBS3RELGdCQUFMLENBQXNCLEtBQXRCLENBQVg7SUFDQSxNQUFJMkUsT0FBT0QsS0FBS3JELE1BQWhCO0lBQ0EsTUFBSXVELFFBQVEsRUFBWjtJQUNBLE9BQUssSUFBSWQsSUFBSSxDQUFiLEVBQWdCQSxJQUFJYSxJQUFwQixFQUEwQmIsR0FBMUIsRUFBK0I7SUFDN0IsUUFBSWUsTUFBTUgsS0FBS1osQ0FBTCxDQUFWO0lBQ0EsUUFBSU4sU0FBU3FCLElBQUlwQixZQUFKLENBQWlCLEtBQWpCLENBQWI7SUFDQSxRQUFJSyxNQUFNLENBQVYsRUFBYTtJQUNYLFVBQUlOLFdBQVcsc0JBQWYsRUFBdUM7SUFDckNvQixjQUFNRSxJQUFOLENBQVcsNEJBQVg7SUFDRCxPQUZELE1BRU8sSUFBSXRCLFdBQVcscUJBQWYsRUFBc0M7SUFDM0NvQixjQUFNRSxJQUFOLENBQVcsOEJBQVg7SUFDRCxPQUZNLE1BRUEsSUFBSXRCLFdBQVcscUJBQWYsRUFBc0M7SUFDM0NvQixjQUFNRSxJQUFOLENBQVcsaUNBQVg7SUFDRCxPQUZNLE1BRUEsSUFBSXRCLFdBQVcscUJBQWYsRUFBc0M7SUFDM0NvQixjQUFNRSxJQUFOLENBQVcsd0JBQVg7SUFDRCxPQUZNLE1BRUEsSUFBSXRCLFdBQVcscUJBQWYsRUFBc0M7SUFDM0NvQixjQUFNRSxJQUFOLENBQVcsaUNBQVg7SUFDRCxPQUZNLE1BRUEsSUFBSXRCLFdBQVcscUJBQWYsRUFBc0M7SUFDM0NvQixjQUFNRSxJQUFOLENBQVcsZ0JBQVg7SUFDRCxPQUZNLE1BRUEsSUFBSXRCLFdBQVcsdUJBQWYsRUFBd0M7SUFDN0NvQixjQUFNRSxJQUFOLENBQVcsbUJBQVg7SUFDRCxPQUZNLE1BRUEsSUFBSXRCLFdBQVcsbUJBQWYsRUFBb0M7SUFDekNvQixjQUFNRSxJQUFOLENBQVcsZUFBWDtJQUNELE9BRk0sTUFFQSxJQUFJdEIsV0FBVyxzQkFBZixFQUF1QztJQUM1Q29CLGNBQU1FLElBQU4sQ0FBVyxpQkFBWDtJQUNELE9BRk0sTUFFQSxJQUFJdEIsV0FBVyxxQkFBZixFQUFzQztJQUMzQ29CLGNBQU1FLElBQU4sQ0FBVyxnQkFBWDtJQUNELE9BRk0sTUFFQTtJQUNMRixjQUFNRSxJQUFOLENBQVcsc0NBQVg7SUFDRDtJQUNGO0lBQ0Y7SUFDRCxNQUFJQyxjQUFjSCxNQUFNSSxJQUFOLENBQVcsSUFBWCxDQUFsQjtJQUNBLE1BQUlDLFNBQVNqSCxTQUFTTSxhQUFULENBQXVCLGVBQXZCLENBQWI7SUFDQSxNQUFJNEcsU0FBU2xILFNBQVNNLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBYjtJQUNBLE1BQUk2RyxTQUFTbkgsU0FBU00sYUFBVCxDQUF1QixrQkFBdkIsQ0FBYjtJQUNBLE1BQUk4RyxTQUFTcEgsU0FBU00sYUFBVCxDQUF1QixlQUF2QixDQUFiO0lBQ0EyRyxTQUFPMUcsU0FBUCxDQUFpQnVCLE1BQWpCLENBQXdCLFdBQXhCO0lBQ0FvRixTQUFPM0csU0FBUCxDQUFpQnVCLE1BQWpCLENBQXdCLFdBQXhCO0lBQ0FxRixTQUFPNUcsU0FBUCxDQUFpQnVCLE1BQWpCLENBQXdCLFdBQXhCO0lBQ0FzRixTQUFPN0csU0FBUCxDQUFpQnVCLE1BQWpCLENBQXdCLFdBQXhCO0lBQ0FtRixTQUFPdkUsU0FBUCxHQUFtQnFFLGNBQWMsR0FBakM7SUFDRDtBQUNELElBQU8sU0FBU00sWUFBVCxHQUF3QjtJQUM3QixNQUFJbEIsTUFBTW5HLFNBQVNNLGFBQVQsQ0FBdUIsb0JBQXZCLENBQVY7SUFDQSxNQUFJZ0gsTUFBTW5CLElBQUlFLEtBQWQ7SUFDQSxNQUFJeEIsT0FBTzdFLFNBQVNNLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBWDtJQUNBdUUsT0FBS25DLFNBQUwsR0FBaUI0RSxNQUFNLEdBQXZCO0lBQ0F6QyxPQUFLdEUsU0FBTCxDQUFldUIsTUFBZixDQUFzQixXQUF0QjtJQUNEO0FBQ0QsSUFBTyxTQUFTeUYsZ0JBQVQsR0FBNEI7SUFDakMsTUFBSUMsT0FBT3hILFNBQVNNLGFBQVQsQ0FBdUIseUJBQXZCLENBQVg7SUFDQSxNQUFJbUgsU0FBU0QsS0FBS25CLEtBQWxCO0lBQ0EsTUFBSXhCLE9BQU83RSxTQUFTTSxhQUFULENBQXVCLGtCQUF2QixDQUFYO0lBQ0F1RSxPQUFLbkMsU0FBTCxHQUFpQitFLE1BQWpCO0lBQ0E1QyxPQUFLdEUsU0FBTCxDQUFldUIsTUFBZixDQUFzQixXQUF0QjtJQUNEO0FBQ0QsSUFBTyxTQUFTNEYsZ0JBQVQsR0FBNEI7SUFDakMsTUFBSTdDLE9BQU83RSxTQUFTTSxhQUFULENBQXVCLGVBQXZCLENBQVg7SUFDQXVFLE9BQUtuQyxTQUFMLEdBQWlCLHNCQUFqQjtJQUNBbUMsT0FBS3RFLFNBQUwsQ0FBZXVCLE1BQWYsQ0FBc0IsV0FBdEI7SUFDRDs7SUFFRCxTQUFTd0UsVUFBVCxHQUFzQjtJQUNwQixNQUFJcUIsU0FBUzNILFNBQVNNLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtJQUNBcUgsU0FBT3BILFNBQVAsQ0FBaUJ1QixNQUFqQixDQUF3QixXQUF4QjtJQUNEOztJQUVELFNBQVMyRSxvQkFBVCxHQUFnQztJQUM5QixNQUFJbUIsV0FBVzVILFNBQVNNLGFBQVQsQ0FBdUIsOEJBQXZCLENBQWY7SUFDQSxNQUFJdUgsWUFBYUQsU0FBU3ZCLEtBQVYsQ0FBaUJHLElBQWpCLEVBQWhCO0lBQ0EsTUFBSXFCLGNBQWMsRUFBbEIsRUFBc0I7SUFDcEJDO0lBQ0Q7SUFDRjs7SUFFRCxTQUFTQSxvQkFBVCxHQUFnQztJQUM5QixNQUFJQyxXQUFXL0gsU0FBU00sYUFBVCxDQUF1Qiw4QkFBdkIsQ0FBZjtJQUNBeUgsV0FBU3hILFNBQVQsQ0FBbUJ1QixNQUFuQixDQUEwQixZQUExQjtJQUNBLE1BQUlrRyxlQUFlaEksU0FBU2dDLGdCQUFULENBQTBCLHlDQUExQixDQUFuQjtJQUNBLE1BQUlpRyxlQUFlRCxhQUFhLENBQWIsQ0FBbkI7SUFDQUMsZUFBYXRFLFlBQWIsQ0FBMEIsS0FBMUIsRUFBaUMsb0JBQWpDO0lBQ0FzRSxlQUFhMUgsU0FBYixDQUF1QkMsR0FBdkIsQ0FBMkIsb0JBQTNCO0lBQ0EsTUFBSTBILGVBQWVGLGFBQWEsQ0FBYixDQUFuQjtJQUNBRSxlQUFhM0gsU0FBYixDQUF1QnVCLE1BQXZCLENBQThCLFlBQTlCO0lBQ0FtRyxlQUFhakgsS0FBYixDQUFtQm1ILE9BQW5CLEdBQTJCLFlBQTNCO0lBQ0FGLGVBQWFqSCxLQUFiLENBQW1Cb0gsTUFBbkIsR0FBMEIsR0FBMUI7SUFDQUwsV0FBUy9HLEtBQVQsQ0FBZW9ILE1BQWYsR0FBc0IsR0FBdEI7SUFDQXhHLGNBQVksQ0FBWjtJQUNEOztJQzlMRDVCLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFXO0lBQ3ZEb0k7SUFDRCxDQUZEOztJQUlBLFNBQVNBLHdCQUFULEdBQW9DO0lBQ2xDLE1BQUlDLFdBQVd0SSxTQUFTTSxhQUFULENBQXVCLG9CQUF2QixDQUFmO0lBQ0EsTUFBSWlJLFdBQVd2SSxTQUFTTSxhQUFULENBQXVCLHlCQUF2QixDQUFmO0lBQ0EsTUFBSWtJLFlBQVl4SSxTQUFTTSxhQUFULENBQXVCLHlCQUF2QixDQUFoQjtJQUNBbUksaUJBQWVILFFBQWYsRUFBeUJDLFFBQXpCO0lBQ0FHLGlCQUFlSCxRQUFmLEVBQXlCQyxTQUF6QjtJQUNBRyxrQkFBZ0JILFNBQWhCLEVBQTJCRixRQUEzQjtJQUNEOztJQUVELFNBQVNHLGNBQVQsQ0FBd0I1RCxJQUF4QixFQUE4QitELFFBQTlCLEVBQXdDO0lBQ3RDLE1BQUlDLGFBQWE3SSxTQUFTTSxhQUFULENBQXVCLDZCQUF2QixDQUFqQjtJQUNBdUUsT0FBSzVFLGdCQUFMLENBQXNCLFFBQXRCLEVBQWdDLFlBQVc7SUFDekMsUUFBSTZJLGtCQUFrQkMscUJBQXRCO0lBQ0EsUUFBSUMsT0FBT0gsV0FBV3RJLFNBQVgsQ0FBcUIwSSxRQUFyQixDQUE4QixZQUE5QixDQUFYO0lBQ0EsUUFBSUgsb0JBQW9CLElBQXBCLElBQTRCRSxTQUFTLElBQXpDLEVBQStDO0lBQzdDRTtJQUNEO0lBQ0RDO0lBQ0QsR0FQRDtJQVFBdEUsT0FBSzVFLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFVBQVNtSixLQUFULEVBQWdCO0lBQzdDLFFBQUlOLGtCQUFrQkMscUJBQXRCO0lBQ0EsUUFBSUssTUFBTUMsT0FBTixLQUFrQixFQUF0QixFQUEwQjtJQUN4QixVQUFJUCxvQkFBb0IsSUFBeEIsRUFBOEI7SUFDNUJGLGlCQUFTVSxLQUFUO0lBQ0QsT0FGRCxNQUVPO0lBQ0x6RSxhQUFLMEUsSUFBTDtJQUNEO0lBQ0Y7SUFDRixHQVREO0lBVUQ7SUFDRCxTQUFTYixjQUFULENBQXdCN0QsSUFBeEIsRUFBOEIrRCxRQUE5QixFQUF3QztJQUN0QyxNQUFJQyxhQUFhN0ksU0FBU00sYUFBVCxDQUF1Qiw2QkFBdkIsQ0FBakI7SUFDQXVFLE9BQUs1RSxnQkFBTCxDQUFzQixRQUF0QixFQUFnQyxZQUFXO0lBQ3pDLFFBQUk2SSxrQkFBa0JDLHFCQUF0QjtJQUNBLFFBQUlDLE9BQU9ILFdBQVd0SSxTQUFYLENBQXFCMEksUUFBckIsQ0FBOEIsWUFBOUIsQ0FBWDtJQUNBLFFBQUlILG9CQUFvQixJQUFwQixJQUE0QkUsU0FBUyxJQUF6QyxFQUErQztJQUM3Q0U7SUFDRDtJQUNEQztJQUNELEdBUEQ7SUFRQXRFLE9BQUs1RSxnQkFBTCxDQUFzQixPQUF0QixFQUErQixVQUFTbUosS0FBVCxFQUFnQjtJQUM3QyxRQUFJTixrQkFBa0JDLHFCQUF0QjtJQUNBLFFBQUlLLE1BQU1DLE9BQU4sS0FBa0IsRUFBdEIsRUFBMEI7SUFDeEIsVUFBSVAsb0JBQW9CLElBQXhCLEVBQThCO0lBQzVCRixpQkFBU1UsS0FBVDtJQUNELE9BRkQsTUFFTztJQUNMekUsYUFBSzBFLElBQUw7SUFDRDtJQUNGO0lBQ0YsR0FURDtJQVVEO0lBQ0QsU0FBU1osZUFBVCxDQUF5QjlELElBQXpCLEVBQStCK0QsUUFBL0IsRUFBeUM7SUFDdkMsTUFBSUMsYUFBYTdJLFNBQVNNLGFBQVQsQ0FBdUIsNkJBQXZCLENBQWpCO0lBQ0F1RSxPQUFLNUUsZ0JBQUwsQ0FBc0IsUUFBdEIsRUFBZ0MsWUFBVztJQUN6QyxRQUFJNkksa0JBQWtCQyxxQkFBdEI7SUFDQSxRQUFJQyxPQUFPSCxXQUFXdEksU0FBWCxDQUFxQjBJLFFBQXJCLENBQThCLFlBQTlCLENBQVg7SUFDQSxRQUFJSCxvQkFBb0IsSUFBcEIsSUFBNEJFLFNBQVMsSUFBekMsRUFBK0M7SUFDN0M7SUFDQVE7SUFDRDtJQUNETDtJQUNELEdBUkQ7SUFTQXRFLE9BQUs1RSxnQkFBTCxDQUFzQixPQUF0QixFQUErQixVQUFTbUosS0FBVCxFQUFnQjtJQUM3QyxRQUFJQSxNQUFNQyxPQUFOLEtBQWtCLEVBQXRCLEVBQTBCO0lBQ3hCeEUsV0FBSzBFLElBQUw7SUFDRDtJQUNGLEdBSkQ7SUFLRDs7SUFFRCxTQUFTUixtQkFBVCxHQUErQjtJQUM3QixNQUFJVCxXQUFXdEksU0FBU00sYUFBVCxDQUF1QixvQkFBdkIsQ0FBZjtJQUNBLE1BQUlpSSxXQUFXdkksU0FBU00sYUFBVCxDQUF1Qix5QkFBdkIsQ0FBZjtJQUNBLE1BQUlrSSxZQUFZeEksU0FBU00sYUFBVCxDQUF1Qix5QkFBdkIsQ0FBaEI7SUFDQSxNQUFJbUosU0FBU25CLFNBQVNqQyxLQUF0QjtJQUNBLE1BQUlxRCxTQUFTbkIsU0FBU2xDLEtBQXRCO0lBQ0EsTUFBSXNELFNBQVNuQixVQUFVbkMsS0FBdkI7SUFDQSxNQUFJb0QsT0FBT2pELElBQVAsT0FBa0IsRUFBdEIsRUFBMEI7SUFDeEIsUUFBSWtELE9BQU9sRCxJQUFQLE9BQWtCLEVBQXRCLEVBQTBCO0lBQ3hCLFVBQUltRCxPQUFPbkQsSUFBUCxPQUFrQixFQUF0QixFQUEwQjtJQUN4QixlQUFPLElBQVA7SUFDRDtJQUNGO0lBQ0Y7SUFDRjtJQUNELFNBQVNnRCxvQkFBVCxHQUFnQztJQUM5QixNQUFJN0ksTUFBTVgsU0FBU00sYUFBVCxDQUF1QixzREFBdkIsQ0FBVjtJQUNBSyxNQUFJSixTQUFKLENBQWN1QixNQUFkLENBQXFCLFlBQXJCO0lBQ0FuQixNQUFJVixnQkFBSixDQUFxQixPQUFyQixFQUE4QixZQUFVO0lBQ3RDaUo7SUFDRCxHQUZEO0lBR0Q7SUFDRCxTQUFTQSx1QkFBVCxHQUFtQztJQUNqQyxNQUFJakIsZUFBZWpJLFNBQVNNLGFBQVQsQ0FDakIseUNBRGlCLENBQW5CO0lBR0EsTUFBSTBILGVBQWVoSSxTQUFTZ0MsZ0JBQVQsQ0FDakIseUNBRGlCLENBQW5CO0lBR0FpRyxlQUFhdEUsWUFBYixDQUEwQixLQUExQixFQUFpQyxvQkFBakM7SUFDQXNFLGVBQWExSCxTQUFiLENBQXVCQyxHQUF2QixDQUEyQixvQkFBM0I7SUFDQSxNQUFJMEgsZUFBZUYsYUFBYSxDQUFiLENBQW5CO0lBQ0FFLGVBQWEzSCxTQUFiLENBQXVCdUIsTUFBdkIsQ0FBOEIsWUFBOUI7SUFDQSxNQUFJK0csYUFBYTdJLFNBQVNNLGFBQVQsQ0FBdUIsNkJBQXZCLENBQWpCO0lBQ0F1SSxhQUFXdEksU0FBWCxDQUFxQnVCLE1BQXJCLENBQTRCLFlBQTVCO0lBQ0FGLGNBQVksQ0FBWjtJQUNEOztJQUVELFNBQVN1SCx3QkFBVCxHQUFvQztJQUNsQzlCO0lBQ0FFO0lBQ0FHO0lBQ0Q7O0lDckhEMUgsU0FBU0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDMkosZ0JBQTlDO0lBQ0EsU0FBU0EsZ0JBQVQsR0FBNkI7SUFDM0IsTUFBSUMsYUFBYTdKLFNBQVNnQyxnQkFBVCxDQUEwQixtRUFBMUIsQ0FBakI7SUFDQSxNQUFJOEgsVUFBVTlKLFNBQVNnQyxnQkFBVCxDQUEwQixzRUFBMUIsQ0FBZDtJQUNBLE1BQUlvQixTQUFTMEcsUUFBUXpHLE1BQXJCOztJQUgyQiw2QkFJbEJ4QixDQUprQjtJQUt6QixRQUFJZ0QsT0FBT2lGLFFBQVFqSSxDQUFSLENBQVg7SUFDQWdELFNBQUs1RSxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFZO0lBQ3pDOEosdUJBQWlCbEYsSUFBakIsRUFBdUJpRixPQUF2QixFQUFnQzFHLE1BQWhDO0lBQ0E0RyxvQ0FBOEJuSSxDQUE5QjtJQUNBb0ksd0NBQWtDSixVQUFsQztJQUNBSyxvQkFBY3JJLENBQWQ7SUFDRCxLQUxEO0lBTnlCOztJQUkzQixPQUFLLElBQUlBLElBQUksQ0FBYixFQUFlQSxJQUFJdUIsTUFBbkIsRUFBMEJ2QixHQUExQixFQUErQjtJQUFBLFVBQXRCQSxDQUFzQjtJQVE5QjtJQUNGO0lBQ0QsU0FBU2tJLGdCQUFULENBQTJCbEYsSUFBM0IsRUFBaUNpRixPQUFqQyxFQUEwQzFHLE1BQTFDLEVBQWtEO0lBQ2hEeUIsT0FBS3ZFLGFBQUwsQ0FBbUIsT0FBbkIsRUFBNEI2SixPQUE1QixHQUFzQyxJQUF0QztJQUNBLE9BQUssSUFBSXRJLElBQUUsQ0FBWCxFQUFjQSxJQUFFdUIsTUFBaEIsRUFBd0J2QixHQUF4QixFQUE0QjtJQUN4QixRQUFJdUksS0FBS04sUUFBUWpJLENBQVIsQ0FBVDtJQUNBdUksT0FBRzdKLFNBQUgsQ0FBYXVCLE1BQWIsQ0FBb0IsV0FBcEI7SUFDSDtJQUNEK0MsT0FBS3RFLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixXQUFuQjtJQUNBcUMsdUJBQXFCVyxTQUFyQjtJQUNBNUIsY0FBWSxDQUFaO0lBQ0Q7SUFDRCxTQUFTb0ksNkJBQVQsQ0FBd0NuSSxDQUF4QyxFQUEyQztJQUN6QyxNQUFJdUQsVUFBVXBGLFNBQVNNLGFBQVQsQ0FBdUIsb0JBQXZCLENBQWQ7SUFDQSxNQUFJK0UsUUFBUSxDQUNWLDZCQURVLEVBRVYsK0JBRlUsRUFHVixnQ0FIVSxFQUlWLDhCQUpVLEVBS1YsaUNBTFUsRUFNVixpRUFOVSxDQUFaO0lBUUFELFVBQVExQyxTQUFSLEdBQW9CMkMsTUFBTXhELENBQU4sQ0FBcEI7SUFDQSxNQUFJd0ksY0FBY3JLLFNBQVNNLGFBQVQsQ0FBdUIscUJBQXZCLENBQWxCO0lBQ0ErSixjQUFZOUosU0FBWixDQUFzQkMsR0FBdEIsQ0FBMEIsV0FBMUI7SUFDQSxNQUFJOEoscUJBQXFCdEssU0FBU00sYUFBVCxDQUF1QixlQUF2QixDQUF6QjtJQUNBZ0sscUJBQW1CL0osU0FBbkIsQ0FBNkJDLEdBQTdCLENBQWlDLFdBQWpDO0lBQ0EsTUFBSStKLDBCQUEwQnZLLFNBQVNNLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBOUI7SUFDQWlLLDBCQUF3QmhLLFNBQXhCLENBQWtDQyxHQUFsQyxDQUFzQyxXQUF0QztJQUNBLE1BQUkyRyxTQUFTbkgsU0FBU00sYUFBVCxDQUF1QixrQkFBdkIsQ0FBYjtJQUNBLE1BQUk4RyxTQUFTcEgsU0FBU00sYUFBVCxDQUF1QixlQUF2QixDQUFiO0lBQ0E2RyxTQUFPNUcsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsV0FBckI7SUFDQTRHLFNBQU83RyxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixXQUFyQjtJQUNEO0lBQ0QsU0FBU3lKLGlDQUFULENBQTRDSixVQUE1QyxFQUF3RDtJQUN0RCxNQUFJekcsU0FBU3lHLFdBQVd4RyxNQUF4QjtJQUNBLE9BQUssSUFBSXhCLElBQUksQ0FBYixFQUFnQkEsSUFBSXVCLE1BQXBCLEVBQTRCdkIsR0FBNUIsRUFBaUM7SUFDL0IsUUFBSW1CLE9BQU82RyxXQUFXaEksQ0FBWCxDQUFYO0lBQ0EsUUFBSTJJLFVBQVV4SCxLQUFLaEIsZ0JBQUwsQ0FBc0IsUUFBdEIsQ0FBZDtJQUNBLFFBQUkyRSxPQUFPNkQsUUFBUW5ILE1BQW5CO0lBQ0EsU0FBSyxJQUFJL0IsSUFBSSxDQUFiLEVBQWdCQSxJQUFJcUYsSUFBcEIsRUFBMEJyRixHQUExQixFQUErQjtJQUM3QixVQUFJZ0UsT0FBT3RDLEtBQUtoQixnQkFBTCxDQUFzQiwwRkFBdEIsRUFBa0hWLENBQWxILENBQVg7SUFDQWdFLFdBQUt0RSxLQUFMLENBQVd5SixlQUFYLEdBQTZCLFNBQTdCO0lBQ0Q7SUFDRjtJQUNGO0lBQ0QsU0FBU1AsYUFBVCxDQUF3QnJJLENBQXhCLEVBQTJCO0lBQ3pCLE1BQUk2SSxpQkFBaUIxSyxTQUFTZ0MsZ0JBQVQsQ0FBMEIsbUVBQTFCLENBQXJCO0lBQ0EsT0FBSyxJQUFJVixJQUFJLENBQWIsRUFBZ0JBLElBQUksQ0FBcEIsRUFBdUJBLEdBQXZCLEVBQTRCO0lBQzFCLFFBQUlxSixlQUFlRCxlQUFlcEosQ0FBZixDQUFuQjtJQUNBcUosaUJBQWFwSyxTQUFiLENBQXVCdUIsTUFBdkIsQ0FBOEIsU0FBOUI7SUFDQSxRQUFJOEMsT0FBTytGLGFBQWEzSSxnQkFBYixDQUE4QixRQUE5QixDQUFYO0lBQ0EsUUFBSW9CLFNBQVN3QixLQUFLdkIsTUFBbEI7SUFDQSxTQUFLLElBQUl5QyxJQUFJLENBQWIsRUFBZUEsSUFBSTFDLE1BQW5CLEVBQTBCMEMsR0FBMUIsRUFBK0I7SUFDN0IsVUFBSWxCLEtBQUtrQixDQUFMLEVBQVE4RSxRQUFSLEtBQXFCLElBQXpCLEVBQStCO0lBQzdCaEcsYUFBS2tCLENBQUwsRUFBUThFLFFBQVIsR0FBbUIsS0FBbkI7SUFDRDtJQUNGO0lBQ0Y7SUFDRCxNQUFJQyxnQkFBZ0JILGVBQWU3SSxDQUFmLENBQXBCO0lBQ0FnSixnQkFBY3RLLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLFNBQTVCO0lBQ0Q7O0lDMUVEUixTQUFTQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEM2SyxxQkFBOUM7O0lBRUEsU0FBU0EscUJBQVQsR0FBa0M7SUFDaEMsTUFBSWpCLGFBQWE3SixTQUFTZ0MsZ0JBQVQsQ0FBMEIsbUVBQTFCLENBQWpCO0lBQ0EsTUFBSW9CLFNBQVN5RyxXQUFXeEcsTUFBeEI7O0lBRmdDLDZCQUd2QnhCLENBSHVCO0lBSTlCLFFBQUltQixPQUFPNkcsV0FBV2hJLENBQVgsQ0FBWDtJQUNBLFFBQUkySSxVQUFVeEgsS0FBS2hCLGdCQUFMLENBQXNCLFFBQXRCLENBQWQ7SUFDQSxRQUFJMkUsT0FBTzZELFFBQVFuSCxNQUFuQjs7SUFOOEIsaUNBT3JCL0IsQ0FQcUI7SUFRNUIsVUFBSTRCLE1BQU1zSCxRQUFRbEosQ0FBUixDQUFWO0lBQ0E0QixVQUFJakQsZ0JBQUosQ0FBcUIsVUFBckIsRUFBaUM4SyxNQUFqQztJQUNBN0gsVUFBSWpELGdCQUFKLENBQXFCLFlBQXJCLEVBQW1DK0ssUUFBbkM7SUFDQSxlQUFTQSxRQUFULEdBQXFCO0lBQ25CLFlBQUk5SCxJQUFJMEgsUUFBSixLQUFpQixLQUFyQixFQUE0QjtJQUMxQkssc0RBQTRDL0gsR0FBNUMsRUFBaURGLElBQWpELEVBQXVEMUIsQ0FBdkQsRUFBMEQsSUFBMUQ7SUFDRDtJQUNGO0lBQ0QsZUFBU3lKLE1BQVQsR0FBbUI7SUFDakIsWUFBSTdILElBQUkwSCxRQUFKLEtBQWlCLEtBQXJCLEVBQTRCO0lBQzFCSyxzREFBNEMvSCxHQUE1QyxFQUFpREYsSUFBakQsRUFBdUQxQixDQUF2RCxFQUEwRCxLQUExRDtJQUNEO0lBQ0Y7SUFwQjJCOztJQU85QixTQUFLLElBQUlBLElBQUksQ0FBYixFQUFlQSxJQUFJcUYsSUFBbkIsRUFBd0JyRixHQUF4QixFQUE2QjtJQUFBLGFBQXBCQSxDQUFvQjtJQWM1QjtJQUNELFFBQUk0SixhQUFhbEksS0FBSzFDLGFBQUwsQ0FBbUIsUUFBbkIsQ0FBakI7SUFDQTRLLGVBQVdqTCxnQkFBWCxDQUE0QixRQUE1QixFQUFzQyxZQUFZO0lBQ2hELFdBQUssSUFBSWtMLElBQUksQ0FBYixFQUFnQkEsSUFBSXhFLElBQXBCLEVBQXlCd0UsR0FBekIsRUFBOEI7SUFDNUIsWUFBSWpJLE9BQU1zSCxRQUFRVyxDQUFSLENBQVY7SUFDQSxZQUFJakksS0FBSW1ELEtBQUosS0FBYzZFLFdBQVc3RSxLQUE3QixFQUFvQztJQUNsQ3hELCtCQUFxQkUsUUFBckIsQ0FBOEJDLElBQTlCLEVBQW9DbUksQ0FBcEM7SUFDQXZKLHNCQUFZLENBQVo7SUFDQXdKLDZDQUFtQ3BJLElBQW5DLEVBQXlDMkQsSUFBekM7SUFDQXNFLHNEQUE0Qy9ILElBQTVDLEVBQWlERixJQUFqRCxFQUF1RG1JLENBQXZELEVBQTBELElBQTFEO0lBQ0Q7SUFDRjtJQUNGLEtBVkQ7SUF2QjhCOztJQUdoQyxPQUFLLElBQUl0SixJQUFJLENBQWIsRUFBZ0JBLElBQUl1QixNQUFwQixFQUE0QnZCLEdBQTVCLEVBQWlDO0lBQUEsVUFBeEJBLENBQXdCO0lBK0JoQztJQUNGO0lBQ0QsU0FBU3VKLGtDQUFULENBQTZDcEksSUFBN0MsRUFBbUQyRCxJQUFuRCxFQUF5RDtJQUN2RCxPQUFLLElBQUlyRixJQUFJLENBQWIsRUFBZ0JBLElBQUlxRixJQUFwQixFQUEwQnJGLEdBQTFCLEVBQStCO0lBQzdCLFFBQUlnRSxPQUFPdEMsS0FBS2hCLGdCQUFMLENBQXNCLDBGQUF0QixFQUFrSFYsQ0FBbEgsQ0FBWDtJQUNBZ0UsU0FBS3RFLEtBQUwsQ0FBV3lKLGVBQVgsR0FBNkIsU0FBN0I7SUFDRDtJQUNGOztJQUVELFNBQVNRLDJDQUFULENBQXNEL0gsR0FBdEQsRUFBMkRGLElBQTNELEVBQWlFMUIsQ0FBakUsRUFBb0UrSixPQUFwRSxFQUE2RTtJQUMzRSxNQUFJL0YsT0FBT3RDLEtBQUtoQixnQkFBTCxDQUFzQiwwRkFBdEIsRUFBa0hWLENBQWxILENBQVg7SUFDQSxNQUFJK0osWUFBWSxJQUFoQixFQUFzQjtJQUNwQixRQUFJckssUUFBUW9CLE9BQU9rSixnQkFBUCxDQUF3QnBJLEdBQXhCLENBQVo7SUFDQSxRQUFJcUksU0FBU3ZLLE1BQU13SyxnQkFBTixDQUF1QixrQkFBdkIsQ0FBYjtJQUNBbEcsU0FBS3RFLEtBQUwsQ0FBV3lKLGVBQVgsR0FBNkJjLE1BQTdCO0lBQ0QsR0FKRCxNQUlPLElBQUlGLFlBQVksS0FBaEIsRUFBdUI7SUFDNUIvRixTQUFLdEUsS0FBTCxDQUFXeUosZUFBWCxHQUE2QixTQUE3QjtJQUNEO0lBQ0Y7O0lDdkREekssU0FBU0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDd0wsSUFBOUM7O0lBRUEsU0FBU0EsSUFBVCxHQUFnQjtJQUNaLFFBQUlDLE9BQU8xTCxTQUFTZ0MsZ0JBQVQsQ0FBMEIsaUZBQTFCLENBQVg7SUFDQSxRQUFJMkosUUFBUTNMLFNBQVNnQyxnQkFBVCxDQUEwQixzRkFBMUIsQ0FBWjtJQUNBLFFBQUkyRSxPQUFPK0UsS0FBS3JJLE1BQWhCO0lBQ0EsU0FBSyxJQUFJeEIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJOEUsSUFBcEIsRUFBMEI5RSxHQUExQixFQUErQjtJQUMzQixZQUFJQSxJQUFJLENBQUMsQ0FBVCxFQUFZO0lBQUE7SUFDUixvQkFBSTJELFNBQVNrRyxLQUFLN0osQ0FBTCxDQUFiO0lBQ0Esb0JBQUl5RCxPQUFPcUcsTUFBTTlKLENBQU4sQ0FBWDtJQUNBMkQsdUJBQU92RixnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxZQUFZO0lBQ3pDLHdCQUFJNEMscUJBQXFCcEIsSUFBckIsR0FBNEIsQ0FBaEMsRUFBbUM7SUFDL0JtSyxpQ0FBU3RHLElBQVQ7SUFDSDtJQUNKLGlCQUpEO0lBSFE7SUFRWDtJQUNKO0lBQ0o7O0lBRUQsU0FBU3NHLFFBQVQsQ0FBa0J0RyxJQUFsQixFQUF3QjtJQUNwQixRQUFJdUIsTUFBTTdHLFNBQVMwRCxhQUFULENBQXVCLEtBQXZCLENBQVY7SUFDQW1ELFFBQUlsRCxZQUFKLENBQWlCLEtBQWpCLEVBQXdCLHVCQUF4QjtJQUNBMkIsU0FBS25CLFdBQUwsQ0FBaUIwQyxHQUFqQjtJQUNBaEUseUJBQXFCcEIsSUFBckI7SUFDQW9CLHlCQUFxQjZCLFdBQXJCO0lBQ0FtQyxRQUFJNUcsZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsWUFBWTtJQUN0QzRMLHNCQUFjaEYsR0FBZDtJQUNILEtBRkQ7SUFHSDs7SUFFRCxTQUFTZ0YsYUFBVCxDQUF1QnZLLENBQXZCLEVBQTBCO0lBQ3RCQSxNQUFFUSxNQUFGO0lBQ0FlLHlCQUFxQnBCLElBQXJCO0lBQ0FvQix5QkFBcUI2QixXQUFyQjtJQUNIOztJQ2xDRDFFLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QzZMLHFCQUE5Qzs7SUFFQSxTQUFTQSxxQkFBVCxHQUFpQztJQUM3QixRQUFJQyxRQUFRL0wsU0FBU00sYUFBVCxDQUNSLDBDQURRLENBQVo7SUFHQSxRQUFJMEwsUUFBUWhNLFNBQVNNLGFBQVQsQ0FDUiwwQ0FEUSxDQUFaO0lBR0EsUUFBSTJMLFVBQVVqTSxTQUFTZ0MsZ0JBQVQsQ0FDViw0Q0FEVSxDQUFkO0lBR0EsUUFBSWtLLFVBQVVsTSxTQUFTZ0MsZ0JBQVQsQ0FDViw0Q0FEVSxDQUFkO0lBR0EsUUFBSW1LLFFBQVFKLE1BQU0vSixnQkFBTixDQUF1QixRQUF2QixDQUFaO0lBQ0EsUUFBSW9LLFFBQVFKLE1BQU1oSyxnQkFBTixDQUF1QixRQUF2QixDQUFaO0lBQ0FxSyxxQkFBaUJOLEtBQWpCLEVBQXdCSSxLQUF4QixFQUErQkYsT0FBL0IsRUFBd0NELEtBQXhDO0lBQ0FLLHFCQUFpQkwsS0FBakIsRUFBd0JJLEtBQXhCLEVBQStCRixPQUEvQixFQUF3Q0gsS0FBeEM7SUFDSDs7SUFFRCxTQUFTTSxnQkFBVCxDQUEwQkMsSUFBMUIsRUFBZ0MxSCxJQUFoQyxFQUFzQzJILE1BQXRDLEVBQThDQyxTQUE5QyxFQUF5RDtJQUNyREYsU0FBS3JNLGdCQUFMLENBQXNCLFFBQXRCLEVBQWdDLFlBQVk7SUFDeEMsWUFBSW9HLFFBQVFpRyxLQUFLakcsS0FBakI7SUFDQSxZQUFJTSxPQUFPL0IsS0FBS3ZCLE1BQWhCO0lBQ0EsYUFBSyxJQUFJeUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJYSxPQUFPLENBQTNCLEVBQThCYixHQUE5QixFQUFtQztJQUMvQnlHLG1CQUFPekcsQ0FBUCxFQUFVdkYsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsZ0JBQXhCO0lBQ0g7SUFDRCxhQUFLLElBQUlxQixJQUFJLENBQWIsRUFBZ0JBLElBQUk4RSxJQUFwQixFQUEwQjlFLEdBQTFCLEVBQStCO0lBQzNCLGdCQUFJcUIsTUFBTTBCLEtBQUsvQyxDQUFMLENBQVY7SUFDQSxnQkFBSTRLLFdBQVd2SixJQUFJbUQsS0FBbkI7SUFDQSxnQkFBSUEsVUFBVW9HLFFBQVYsSUFBc0I1SyxNQUFNLENBQWhDLEVBQW1DO0lBQy9CMEssdUJBQU8xSyxDQUFQLEVBQVV0QixTQUFWLENBQW9CdUIsTUFBcEIsQ0FBMkIsZ0JBQTNCO0lBQ0g7SUFDSjtJQUNENEssMkJBQW1CSixJQUFuQixFQUF5QkUsU0FBekI7SUFDSCxLQWREO0lBZUg7O0lBRUQsU0FBU0Usa0JBQVQsQ0FBNEJKLElBQTVCLEVBQWtDRSxTQUFsQyxFQUE2QztJQUN6QyxRQUFJRyxJQUFJTCxLQUFLakcsS0FBYjtJQUNBLFFBQUl1RyxJQUFJSixVQUFVbkcsS0FBbEI7SUFDQSxRQUFJc0csTUFBTSxFQUFOLElBQVlDLE1BQU0sRUFBdEIsRUFBMEI7SUFDdEIsWUFBSTdFLFdBQVcvSCxTQUFTTSxhQUFULENBQXVCLCtCQUF2QixDQUFmO0lBQ0F5SCxpQkFBU3hILFNBQVQsQ0FBbUJ1QixNQUFuQixDQUEwQixZQUExQjtJQUNBLFlBQUlrRyxlQUFlaEksU0FBU2dDLGdCQUFULENBQTBCLHlDQUExQixDQUFuQjtJQUNBLFlBQUlpRyxlQUFlRCxhQUFhLENBQWIsQ0FBbkI7SUFDQUMscUJBQWF0RSxZQUFiLENBQTBCLEtBQTFCLEVBQWlDLG9CQUFqQztJQUNBc0UscUJBQWExSCxTQUFiLENBQXVCQyxHQUF2QixDQUEyQixvQkFBM0I7SUFDQSxZQUFJMEgsZUFBZUYsYUFBYSxDQUFiLENBQW5CO0lBQ0FFLHFCQUFhM0gsU0FBYixDQUF1QnVCLE1BQXZCLENBQThCLFlBQTlCO0lBQ0FGLG9CQUFZLENBQVo7SUFDSDtJQUNKOztJQ3BERDVCLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QzRNLG9CQUE5Qzs7SUFFQSxTQUFTQSxvQkFBVCxHQUFnQztJQUM1QixRQUFJckMsVUFBVXhLLFNBQVNnQyxnQkFBVCxDQUEwQix5REFBMUIsQ0FBZDtJQUNBLFFBQUkyRSxPQUFPNkQsUUFBUW5ILE1BQW5COztJQUY0QiwrQkFHbkJ4QixDQUhtQjtJQUl4QixZQUFJcUIsTUFBTXNILFFBQVEzSSxDQUFSLENBQVY7SUFDQXFCLFlBQUlqRCxnQkFBSixDQUFxQixPQUFyQixFQUE4QixZQUFZO0lBQ3RDNk0sd0JBQVk1SixHQUFaLEVBQWlCc0gsT0FBakIsRUFBMEI3RCxJQUExQixFQUFnQzlFLENBQWhDO0lBQ0gsU0FGRDtJQUx3Qjs7SUFHNUIsU0FBSyxJQUFJQSxJQUFJLENBQWIsRUFBZ0JBLElBQUk4RSxJQUFwQixFQUEwQjlFLEdBQTFCLEVBQStCO0lBQUEsY0FBdEJBLENBQXNCO0lBSzlCO0lBQ0o7SUFDRCxTQUFTaUwsV0FBVCxDQUFxQjVKLEdBQXJCLEVBQTBCMEIsSUFBMUIsRUFBZ0MrQixJQUFoQyxFQUFzQzlFLENBQXRDLEVBQXlDO0lBQ3JDLFFBQUlrTCxTQUFTL00sU0FBU2dDLGdCQUFULENBQTBCLDBCQUExQixDQUFiO0lBQ0EsUUFBSWdMLGFBQWEsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsQ0FBakI7SUFDQSxRQUFJRCxPQUFPbEwsQ0FBUCxFQUFVc0ksT0FBVixLQUFvQixJQUF4QixFQUE2QjtJQUN6QjRDLGVBQU9sTCxDQUFQLEVBQVVzSSxPQUFWLEdBQWtCLEtBQWxCO0lBQ0F0SCw2QkFBcUIwQixTQUFyQixDQUErQnlJLFdBQVduTCxDQUFYLENBQS9CO0lBQ0gsS0FIRCxNQUdLO0lBQ0RrTCxlQUFPbEwsQ0FBUCxFQUFVc0ksT0FBVixHQUFrQixJQUFsQjtJQUNBdEgsNkJBQXFCNEIsVUFBckIsQ0FBZ0N1SSxXQUFXbkwsQ0FBWCxDQUFoQztJQUNBRCxvQkFBWSxDQUFaO0lBQ0g7SUFDRCxTQUFLLElBQUlrRSxJQUFJLENBQWIsRUFBZ0JBLElBQUlhLElBQXBCLEVBQTBCYixHQUExQixFQUErQjtJQUMzQixZQUFJaUgsT0FBT2pILENBQVAsRUFBVXFFLE9BQVYsS0FBc0IsSUFBMUIsRUFBZ0M7SUFDNUJ2RixpQkFBS2tCLENBQUwsRUFBUXZGLFNBQVIsQ0FBa0J1QixNQUFsQixDQUF5QixZQUF6QjtJQUNIO0lBQ0QsWUFBSWlMLE9BQU9qSCxDQUFQLEVBQVVxRSxPQUFWLEtBQXNCLEtBQTFCLEVBQWlDO0lBQzdCdkYsaUJBQUtrQixDQUFMLEVBQVF2RixTQUFSLENBQWtCQyxHQUFsQixDQUFzQixZQUF0QjtJQUNIO0lBQ0o7SUFDSjs7OzsifQ==
