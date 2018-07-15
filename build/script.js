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
      guideReacts(4);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyIuLi9zb3VyY2UvZHluYW1pY3MvYXNpZGUuanMiLCIuLi9zb3VyY2UvZHluYW1pY3MvYXRha2ktc2V0LXR4dC5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9wb2RzdGF3eS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9rbGFzYS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9hdGFraS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9hdHRyeWJzLmpzIiwiLi4vc291cmNlL2R5bmFtaWNzL29icm9ueS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9tb2NlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0aWFsaXplR3VpZGUpXHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplR3VpZGUoKSB7XHJcbiAgaGlkZVVzZXJHdWlkZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlVXNlckd1aWRlKCkge1xyXG4gIGxldCBvcm5tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWhlYWQnKVxyXG4gIG9ybm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVBbmRIaWRlQXNpZGUpXHJcbiAgbGV0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLWd1aWRlX2hpZGUnKVxyXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZUFuZEhpZGVBc2lkZSlcclxufVxyXG5sZXQgY29udHJvbGxlciA9IDBcclxuXHJcbmZ1bmN0aW9uIHJvdGF0ZUFuZEhpZGVBc2lkZSgpIHtcclxuICBsZXQgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpXHJcbiAgaWYgKGNvbnRyb2xsZXIgPT09IDApIHtcclxuICAgIGFzaWRlLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJ1xyXG4gICAgbGV0IGF3ID0gYXNpZGUub2Zmc2V0V2lkdGhcclxuICAgIGxldCBhaCA9IGFzaWRlLm9mZnNldEhlaWdodFxyXG4gICAgbGV0IHdzcCA9IGFoICsgKChhdyAtIGFoKSAvIDIpXHJcbiAgICBsZXQgeCA9ICh3c3AgKiAtMSkgKyAyMFxyXG4gICAgbGV0IHkgPSB4ICsgJ3B4J1xyXG4gICAgbGV0IHogPSAoKGF3IC0gYWgpIC8gMikgKyAncHgnXHJcbiAgICBhc2lkZS5zdHlsZS5sZWZ0ID0geVxyXG4gICAgYXNpZGUuc3R5bGUudG9wID0gelxyXG4gICAgY29udHJvbGxlciA9IDFcclxuICB9IGVsc2UgaWYgKGNvbnRyb2xsZXIgPT09IDEpIHtcclxuICAgIGFzaWRlLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknXHJcbiAgICBhc2lkZS5zdHlsZS5sZWZ0ID0gMFxyXG4gICAgYXNpZGUuc3R5bGUudG9wID0gMFxyXG4gICAgY29udHJvbGxlciA9IDBcclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGd1aWRlUmVhY3RzKGkpIHtcclxuICBsZXQgcGFydHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmaWVsZHNldCcpO1xyXG4gIGxldCBjdXJyZW50UGFydCA9IHBhcnRzW2ldO1xyXG4gIGxldCBwb3NpdGlvbiA9IGN1cnJlbnRQYXJ0Lm9mZnNldFRvcDtcclxuICBpZiAoY29udHJvbGxlciA9PT0gMSkge1xyXG4gICAgcm90YXRlQW5kSGlkZUFzaWRlKCk7XHJcbiAgfVxyXG4gIHdpbmRvdy5zY3JvbGxUbygwLCBwb3NpdGlvbik7XHJcbiAgbGV0IGd1aWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWZvb3QgLnVzZXItZ3VpZGUnKTtcclxuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtZm9vdF90aXRsZScpO1xyXG4gIGxldCBhcnIgPSBbXHJcbiAgICAnR2R5IHdwaXN6ZXN6IGltacSZLCBwcnp5ZG9tZWsgaSB6YXdvxYJhbmllLCBwbyB6YXR3aWVyZHplbml1IHptaWFuIHBvamF3aSBzacSZIG5hc3TEmXBuYSBjesSZxZvEhyBmb3JtdWxhcnphLicsXHJcbiAgICAnUG8gd3lib3J6ZSBrbGFzeSwgcG9qYXdpIHNpZSBva25vIHd5Ym9ydSBhdGFrdSBzcG/Fm3LDs2QgdWRlcnplxYQgY2hhcmFrdGVyeXN0eWN6bnljaCBkbGEgdGVqIHBvc3RhY2kuJyxcclxuICAgICdXeWJpZXJ6IHVkZXJ6ZW5pZSwga2xpa2FqxIVjIHcgc8WCb3dvIG9waXN1asSFY2UgamUuIFByenkga2HFvGR5bSBlcGl0ZWNpZSB3aWRuaWVqZSBjaGFyYWt0ZXJ5c3R5a2EgY2lvc3UgdyBJa29uYWNoIMW7eXdpb8WCw7N3IGkgSWtvbmFjaCBVZGVyemXFhC4nLFxyXG4gICAgJ1d5bXnFm2wgbmF6d2UgZGxhIHVkZXJ6ZW5pYSB6IHBvcHJ6ZWRuaWVnbyBrcm9rdS4gR2R5IGrEhSB6YXR3aWVyZHppc3osIHBvamF3aSBzaWUga29sZWpuYSBjemXFm8SHIGthcnR5IHBvc3RhY2kuJyxcclxuICAgICdQbyB3eWJvcnplIGplZG5laiBvcGNqaSB6IGthxbxkZWogbGlzdHksIHBvamF3aSBzaWUga29sZWpuYSBjemXFm8SHIGthcnR5IHBvc3RhY2kuJyxcclxuICAgICdLbGlrbmlqIHR5bGUgb3BjamksIGlsZSBjaGNlc3ouIEthxbxkeSB6ZXN0YXcgKGN6eWxpIG1vYyBpIHBpZXRubykgemFiaWVyYSBjaSBwZXduxIUgaWxvxZvEhyBwdW5rdMOzdyBNxIVkcm/Fm2NpLicsXHJcbiAgICAnUm96ZGFqIHBvem9zdGHFgmUgcHVua3R5IG3EhWRyb8WbY2kgbmEgd3Nww7PFgmN6eW5uaWtpIHBvc3RhY2k6IMW7eWNpZSwgTcSFZHJvxZvEhywgUnVjaCBpIER6aWHFgmFuaWUuJ1xyXG4gIF07XHJcbiAgZ3VpZGUuaW5uZXJUZXh0ID0gYXJyW2ldO1xyXG4gIGxldCBhcnJCID0gW1xyXG4gICAgJ3RvxbxzYW1vxZvEhzonLFxyXG4gICAgJ2tsYXNhOicsXHJcbiAgICAnYXRhazonLFxyXG4gICAgJ25hendhIGF0YWt1OicsXHJcbiAgICAnb2Jyb25hOicsXHJcbiAgICAnemRvbG5vxZvEhyBpIHPFgmFib8WbxIcnLFxyXG4gICAgJ2F0cnlidXR5OidcclxuICBdO1xyXG4gIHRpdGxlLmlubmVyVGV4dCA9IGFyckJbaV07XHJcbn1cclxuXHJcbnZhciBpdGVyYXRvck9mUG9pbnRzTGVmdCA9IHtcclxuICBsZWZ0OiAyMCxcclxuICBzcGVudE9uQXR0YWNrOiAwLFxyXG4gIGl0ZXJhdG9yKGNvbnQsIHgpIHtcclxuICAgIGxldCBpdGVyRGV2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWJvZHlfaG93LW11Y2gnKTtcclxuICAgIGxldCBvcHQgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnKVt4XTtcclxuICAgIGxldCBwb2ludHMgPSBvcHQucXVlcnlTZWxlY3RvckFsbCgnaW1nJyk7XHJcbiAgICBsZXQgYW1vdW50ID0gKHBvaW50cy5sZW5ndGggLSAxKTtcclxuICAgIGxldCBiaWxhbnMgPSBhbW91bnQgLSB0aGlzLnNwZW50T25BdHRhY2s7XHJcbiAgICB0aGlzLmxlZnQgPSB0aGlzLmxlZnQgLSBiaWxhbnM7XHJcbiAgICB0aGlzLnNwZW50T25BdHRhY2sgPSBhbW91bnQ7XHJcbiAgICBpdGVyRGV2aWNlLmlubmVyVGV4dCA9ICdQb3pvc3RhxYJvJyArICcgJyArIHRoaXMubGVmdCArICd4JztcclxuICB9LFxyXG4gIGRlbGV0YXRvcigpIHtcclxuICAgIGxldCBpdGVyRGV2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWJvZHlfaG93LW11Y2gnKTtcclxuICAgIHRoaXMubGVmdCA9IHRoaXMubGVmdCArIHRoaXMuc3BlbnRPbkF0dGFjaztcclxuICAgIHRoaXMuc3BlbnRPbkF0dGFjayA9IDA7XHJcbiAgICBpdGVyRGV2aWNlLmlubmVyVGV4dCA9ICdQb3pvc3RhxYJvJyArICcgJyArIHRoaXMubGVmdCArICd4JztcclxuICB9LFxyXG4gIGl0ZXJhdG9yQihpbnRlZ2VyKSB7XHJcbiAgICBsZXQgaXRlckRldmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1ib2R5X2hvdy1tdWNoJyk7XHJcbiAgICB0aGlzLmxlZnQgPSB0aGlzLmxlZnQgKyBpbnRlZ2VyO1xyXG4gICAgaXRlckRldmljZS5pbm5lclRleHQgPSAnUG96b3N0YcWCbycgKyAnICcgKyB0aGlzLmxlZnQgKyAneCc7XHJcbiAgfSxcclxuICBkZWxldGF0b3JCKGludGVnZXIpIHtcclxuICAgIGxldCBpdGVyRGV2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWJvZHlfaG93LW11Y2gnKTtcclxuICAgIHRoaXMubGVmdCA9IHRoaXMubGVmdCAtIGludGVnZXI7XHJcbiAgICBpdGVyRGV2aWNlLmlubmVyVGV4dCA9ICdQb3pvc3RhxYJvJyArICcgJyArIHRoaXMubGVmdCArICd4JztcclxuICB9LFxyXG4gIGVxdWFsaXphdG9yKCkge1xyXG4gICAgbGV0IGl0ZXJEZXZpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtYm9keV9ob3ctbXVjaCcpO1xyXG4gICAgaXRlckRldmljZS5pbm5lclRleHQgPSAnUG96b3N0YcWCbycgKyAnICcgKyB0aGlzLmxlZnQgKyAneCc7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGl0ZXJhdG9yT2ZQb2ludHNMZWZ0OyIsIid1c2Ugc3RyaWN0J1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdGlhbGl6ZSlcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcbiAgbGV0IG9wdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX3NlbGVjdC1saXN0IG9wdGlvbidcclxuICApXHJcbiAgbGV0IGFtb3VudCA9IG9wdHMubGVuZ3RoXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xyXG4gICAgbGV0IGl0ZW0gPSBvcHRzW2ldXHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBzZXRJTUcoaSlcclxuICAgICAgZW5hYmxlU3RyaWtlTmFtZVBhcnQoKVxyXG4gICAgICBzZXRTdHJpa2VOYW1lVG9EZXMoaSlcclxuICAgICAgc2V0UGFydE9mQXR0YWNrRGVzY3JpcHRpb24oaSlcclxuICAgICAgc2V0Rm9yY2VEZXMoaSlcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbmxldCBvbmx5T25jZSA9IDBcclxuXHJcbmZ1bmN0aW9uIGVuYWJsZVN0cmlrZU5hbWVQYXJ0KCkge1xyXG4gIG9ubHlPbmNlKytcclxuICBpZiAob25seU9uY2UgPT09IDEpIHtcclxuICAgIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0cmlrZU5hbWUnKVxyXG4gICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzdHJpa2VOYW1lJylcclxuICB9XHJcbn1cclxuXHJcbmltcG9ydCB7Z3VpZGVSZWFjdHN9IGZyb20gJy4vYXNpZGUuanMnO1xyXG5mdW5jdGlvbiBzZXRQYXJ0T2ZBdHRhY2tEZXNjcmlwdGlvbihpKSB7XHJcbiAgbGV0IGRlc1BhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwIHNwYW4uLS1kZXNfZXBpdGV0JylcclxuICBkZXNQYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpXHJcbiAgbGV0IGFycmF5ID0gW1xyXG4gICAgJ2JydXRhbG5lJyxcclxuICAgICduaWVwcnpld2lkeXdhbG5lJyxcclxuICAgICd3ecSHd2ljem9uZScsXHJcbiAgICAnbmllemF3b2RuZScsXHJcbiAgICAncHJlY3l6eWpuZScsXHJcbiAgICAnem1hc293YW5lJyxcclxuICAgICdwb2RzdMSZcG5lJyxcclxuICAgICd3eXJhY2hvd2FuZScsXHJcbiAgICAnemRyYWR6aWVja2llJyxcclxuICAgICdzemFsZcWEY3plJyxcclxuICAgICdvcHJhY293YW5lIHcgbGFib3JhdG9yaXVtIGFsY2hlbWljem55bScsXHJcbiAgICAnbmllcG93c3RyenltYW5lJyxcclxuICAgICd3xYJhZGN6ZScsXHJcbiAgICAnbXJvY3puZScsXHJcbiAgICAndGFqZW1uZScsXHJcbiAgICAnd8WbY2lla8WCZScsXHJcbiAgICAnd3NwaWVyYW5lIG1vY8SFIG90Y2jFgmFuaScsXHJcbiAgICAncHJ6ZXN5Y29uZSB6xYLEhSBtb2PEhSdcclxuICBdXHJcbiAgZGVzUGFydC5pbm5lclRleHQgPSAnLCAnICsgYXJyYXlbaV1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0SU1HKGkpIHtcclxuICBsZXQgYmVsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdCdcclxuICApW2ldXHJcbiAgbGV0IGltYWcgPSBiZWx0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpWzBdXHJcbiAgbGV0IGF0dHJ5YiA9IGltYWcuZ2V0QXR0cmlidXRlKCdzcmMnKVxyXG4gIGxldCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tcGxhdGVfaW1nX2ljb24nKVxyXG4gIGljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBhdHRyeWIpXHJcbiAgbGV0IGFsbElNR3MgPSBiZWx0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpLmxlbmd0aFxyXG4gIGxldCBzdGFuZGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLXN0YW5kYXJ0X2ltZ19iY2tnJylcclxuICB3aGlsZSAoc3RhbmRhcnQucXVlcnlTZWxlY3RvcignSU1HJykgIT09IG51bGwpIHtcclxuICAgIGxldCBpbWFnZVRvRGVsID0gc3RhbmRhcnQucXVlcnlTZWxlY3RvcignSU1HJylcclxuICAgIHN0YW5kYXJ0LnJlbW92ZUNoaWxkKGltYWdlVG9EZWwpXHJcbiAgfVxyXG4gIGZvciAobGV0IGogPSAwOyBqIDwgYWxsSU1HczsgaisrKSB7XHJcbiAgICBpZiAoaiA+IDApIHtcclxuICAgICAgbGV0IHRoZUlNRyA9IGJlbHQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylbal1cclxuICAgICAgbGV0IHNvdXJjZUlNRyA9IHRoZUlNRy5nZXRBdHRyaWJ1dGUoJ3NyYycpXHJcbiAgICAgIGxldCBuZXdJTUcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICBuZXdJTUcuc2V0QXR0cmlidXRlKCdzcmMnLCBzb3VyY2VJTUcpXHJcbiAgICAgIHN0YW5kYXJ0LmFwcGVuZENoaWxkKG5ld0lNRylcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFN0cmlrZU5hbWVUb0RlcyhpKSB7XHJcbiAgbGV0IGlucCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJuYXp3YXVkZXJ6ZW5pYVwiXScpXHJcbiAgaW5wLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHN0ck5hbWUgPSBpbnAudmFsdWU7XHJcbiAgICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19uYXp3YS1jaW9zdScpO1xyXG4gICAgaXRlbS5pbm5lclRleHQgPSBzdHJOYW1lICsgJyB0byBsZWdlbmRhcm5lJztcclxuICAgIHNob3dBbGxEZXMoKTtcclxuICAgIHNldE5leHRQYXJ0T2ZGb3JtdWxhKCk7XHJcbiAgfSlcclxuICBpbnAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGl0bSA9IGlucC52YWx1ZVxyXG4gICAgaWYgKGl0bS50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgIGxldCBzdHJOYW1lID0gaW5wLnZhbHVlXHJcbiAgICAgIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX25hendhLWNpb3N1JylcclxuICAgICAgaXRlbS5pbm5lclRleHQgPSBzdHJOYW1lICsgJyB0byBsZWdlbmRhcm5lJ1xyXG4gICAgICBzaG93QWxsRGVzKCk7XHJcbiAgICAgIHNldE5leHRQYXJ0T2ZGb3JtdWxhKCk7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Rm9yY2VEZXMoaSkge1xyXG4gIGxldCBiZWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0J1xyXG4gIClbaV07XHJcbiAgbGV0IElNR3MgPSBiZWx0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpXHJcbiAgbGV0IGl0ZXIgPSBJTUdzLmxlbmd0aFxyXG4gIGxldCBzdHJuZyA9IFtdXHJcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBpdGVyOyBqKyspIHtcclxuICAgIGxldCBJTUcgPSBJTUdzW2pdXHJcbiAgICBsZXQgYXR0cnliID0gSU1HLmdldEF0dHJpYnV0ZSgnc3JjJylcclxuICAgIGlmIChqICE9PSAwKSB7XHJcbiAgICAgIGlmIChhdHRyeWIgPT09ICdpY29ucy9icm9uLWJhcmJhLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCdkb2RhdGtvd8SFIG1vY8SFIHVkZXJ6ZW5pb3fEhScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvYnJvbi1jemFyLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCdkb2RhdGtvd8SFIG1vY8SFIGN6YXJub2tzacSZc2vEhScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvYnJvbi1zdHJ6LnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCdkb2RhdGtvd3ltIGt1bnN6dGVtIHN0cnplbGVja2ltJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy9icm9uLXN6YWwuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ2RvZGF0a293eW0gc3phbGXFhHN0d2VtJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy9icm9uLXpkcmEuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ25pZXNwb2R6aWFueW0gemRyYWRsaXd5bSBjaW9zZW0nKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL3p5dy1vZ2llbi5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnxbx5d2lvxYJlbSBvZ25pYScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvenl3LXJvemtsYWQuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ8W8eXdpb8WCZW0gcm96a8WCYWR1JylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy96eXctd29kLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCfFvHl3aW/FgmVtIHdvZHknKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL3p5dy16bWlhbmEuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ8W8eXdpb8WCZW0gem1pYW55JylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy96eXctenl3aWEuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ8W8eXdpb8WCZW0gxbx5d2lpJylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCd3xYJhc27EhSBtxIVkcm/Fm2NpxIUgxbx5d2lvxYLDs3cgaSB0YWxlbnTDs3cnKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCBzdHJpbmdUb1NldCA9IHN0cm5nLmpvaW4oJywgJyk7XHJcbiAgbGV0IHp5d0RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc196eXdpb2wnKTtcclxuICBsZXQgaW1pRGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX2ltaWUnKTtcclxuICBsZXQgcHJ6RGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3Byenlkb21laycpO1xyXG4gIGxldCB6ZGFEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfemRhbmllJyk7XHJcbiAgenl3RGVzLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpO1xyXG4gIGltaURlcy5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKTtcclxuICBwcnpEZXMuY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJyk7XHJcbiAgemRhRGVzLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpO1xyXG4gIHp5d0Rlcy5pbm5lclRleHQgPSBzdHJpbmdUb1NldCArICcuJztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0TmFtZVRvRGVzKCkge1xyXG4gIGxldCBpbnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiaW1pZVwiXScpXHJcbiAgbGV0IG5hbSA9IGlucC52YWx1ZVxyXG4gIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX2ltaWUnKVxyXG4gIGl0ZW0uaW5uZXJUZXh0ID0gbmFtICsgJyAnO1xyXG4gIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJylcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0Tmlja25hbWVUb0RlcygpIHtcclxuICBsZXQgaW5wQiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcnp5ZG9tZWtcIl0nKVxyXG4gIGxldCBzdXJuYW0gPSBpbnBCLnZhbHVlXHJcbiAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfcHJ6eWRvbWVrJylcclxuICBpdGVtLmlubmVyVGV4dCA9IHN1cm5hbTtcclxuICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFNlbnRlbmNlVG9EZXMoKSB7XHJcbiAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfemRhbmllJylcclxuICBpdGVtLmlubmVyVGV4dCA9ICcgd3ptYWNuaWEgc3fDs2ogYXRhayAnXHJcbiAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93QWxsRGVzKCkge1xyXG4gIGxldCBhbGxEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXMnKVxyXG4gIGFsbERlcy5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXROZXh0UGFydE9mRm9ybXVsYSgpIHtcclxuICBsZXQgdGV4dEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibmF6d2F1ZGVyemVuaWFcIl0nKTtcclxuICBsZXQgYXJlYVZhbHVlID0gKHRleHRBcmVhLnZhbHVlKS50cmltKCk7XHJcbiAgaWYgKGFyZWFWYWx1ZSAhPT0gJycpIHtcclxuICAgIGVuYWJsZU5leHRQYXJ0T2ZGb3JtKCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbmFibGVOZXh0UGFydE9mRm9ybSgpIHtcclxuICBsZXQgbmV4dFBhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNldC1jJyk7XHJcbiAgbmV4dFBhcnQuY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0hpZGRlbicpO1xyXG4gIGxldCBhbGxPcm5hbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcuY29ycHVzX3NlY3Rpb25fZm9ybV9vcm5hbWVudC1tYXJrZXInKTtcclxuICBsZXQgdGhpc09ybmFtZW50ID0gYWxsT3JuYW1lbnRzWzFdO1xyXG4gIHRoaXNPcm5hbWVudC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ljb25zL3BvbGUuc3ZnJyk7XHJcbiAgdGhpc09ybmFtZW50LmNsYXNzTGlzdC5hZGQoJ2l0SXNQYXNzZWRUaHJvdWdodCcpO1xyXG4gIGxldCBuZXh0T3JuYW1lbnQgPSBhbGxPcm5hbWVudHNbMl07XHJcbiAgbmV4dE9ybmFtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2l0SXNIaWRkZW4nKTtcclxuICB0aGlzT3JuYW1lbnQuc3R5bGUubWFyZ2luQm90dG9tPVwiLTFyZW1cIjtcclxuICB0aGlzT3JuYW1lbnQuc3R5bGUuekluZGV4PVwiMVwiO1xyXG4gIG5leHRQYXJ0LnN0eWxlLnpJbmRleD1cIjJcIjtcclxuICBndWlkZVJlYWN0cyg0KTtcclxufSIsImltcG9ydCB7c2V0TmFtZVRvRGVzfSBmcm9tICcuL2F0YWtpLXNldC10eHQuanMnO1xyXG5pbXBvcnQge3NldE5pY2tuYW1lVG9EZXN9IGZyb20gJy4vYXRha2ktc2V0LXR4dC5qcyc7XHJcbmltcG9ydCB7c2V0U2VudGVuY2VUb0Rlc30gZnJvbSAnLi9hdGFraS1zZXQtdHh0LmpzJztcclxuaW1wb3J0IHtndWlkZVJlYWN0c30gZnJvbSAnLi9hc2lkZS5qcyc7XHJcbid1c2Ugc3RyaWN0JztcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICB1c2VyRmxvd1ZpYUZpcnN0RmllbGRzZXQoKVxyXG59KVxyXG5mdW5jdGlvbiB1c2VyRmxvd1ZpYUZpcnN0RmllbGRzZXQgKCkge1xyXG4gIGxldCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJpbWllXCJdJyk7XHJcbiAgbGV0IHVzZXJOaWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByenlkb21la1wiXScpO1xyXG4gIGxldCB1c2VyTW90dG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYVtuYW1lPVwiemF3b2xhbmllXCJdJyk7XHJcbiAgdXNlck5hbWVBY2NlcHQodXNlck5hbWUsIHVzZXJOaWNrKVxyXG4gIHVzZXJOaWNrQWNjZXB0KHVzZXJOaWNrLCB1c2VyTW90dG8pXHJcbiAgdXNlck1vdHRvQWNjZXB0KHVzZXJNb3R0bywgdXNlck5hbWUpXHJcbn1cclxuZnVuY3Rpb24gdXNlck5hbWVBY2NlcHQgKGl0ZW0sIG5leHRJdGVtKSB7XHJcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgbGV0IGFsbEZpZWxkc0FyZVNldCA9IGNoZWNrSWZGaWVsZHNBcmVTZXQoKTtcclxuICAgIGlmIChhbGxGaWVsZHNBcmVTZXQgPT09IHRydWUpIHtcclxuICAgICAgZW5hYmxlTmV4dFBhcnRPZkZvcm11bGEoKTtcclxuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgbmV4dEl0ZW0uZm9jdXMoKVxyXG4gICAgfVxyXG4gICAgc2V0VGhpc0RhdGFUb0Rlc2NyaXB0aW9uKCk7XHJcbiAgfSlcclxufVxyXG5mdW5jdGlvbiB1c2VyTmlja0FjY2VwdCAoaXRlbSwgbmV4dEl0ZW0pIHtcclxuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBsZXQgYWxsRmllbGRzQXJlU2V0ID0gY2hlY2tJZkZpZWxkc0FyZVNldCgpO1xyXG4gICAgaWYgKGFsbEZpZWxkc0FyZVNldCA9PT0gdHJ1ZSkge1xyXG4gICAgICBlbmFibGVOZXh0UGFydE9mRm9ybXVsYSgpO1xyXG4gICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICBuZXh0SXRlbS5mb2N1cygpXHJcbiAgICB9XHJcbiAgICBzZXRUaGlzRGF0YVRvRGVzY3JpcHRpb24oKTtcclxuICB9KVxyXG59XHJcbmZ1bmN0aW9uIHVzZXJNb3R0b0FjY2VwdCAoaXRlbSwgbmV4dEl0ZW0pIHtcclxuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBsZXQgYWxsRmllbGRzQXJlU2V0ID0gY2hlY2tJZkZpZWxkc0FyZVNldCgpO1xyXG4gICAgaWYgKGFsbEZpZWxkc0FyZVNldCA9PT0gdHJ1ZSkge1xyXG4gICAgICBlbmFibGVOZXh0UGFydE9mRm9ybXVsYSgpO1xyXG4gICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICBuZXh0SXRlbS5mb2N1cygpXHJcbiAgICB9XHJcbiAgICBzZXRUaGlzRGF0YVRvRGVzY3JpcHRpb24oKTtcclxuICB9KVxyXG59XHJcbmZ1bmN0aW9uIGNoZWNrSWZGaWVsZHNBcmVTZXQoKSB7XHJcbiAgICBsZXQgdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiaW1pZVwiXScpO1xyXG4gICAgbGV0IHVzZXJOaWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByenlkb21la1wiXScpO1xyXG4gICAgbGV0IHVzZXJNb3R0byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhW25hbWU9XCJ6YXdvbGFuaWVcIl0nKTtcclxuICAgIGxldCB2YWx1ZUEgPSB1c2VyTmFtZS52YWx1ZTtcclxuICAgIGxldCB2YWx1ZUIgPSB1c2VyTmljay52YWx1ZTtcclxuICAgIGxldCB2YWx1ZUMgPSB1c2VyTW90dG8udmFsdWU7XHJcbiAgICBpZiAodmFsdWVBLnRyaW0oKSE9PVwiXCImJnZhbHVlQS50cmltKCkudG9Mb3dlckNhc2UoKSE9PVwiaGVyb3NcIil7XHJcbiAgICAgICAgaWYodmFsdWVCLnRyaW0oKSE9PVwiXCImJnZhbHVlQi50cmltKCkudG9Mb3dlckNhc2UoKSE9PVwid29qZW5ueSBwaWVzXCIpe1xyXG4gICAgICAgICAgaWYodmFsdWVDLnRyaW0oKSE9PVwiXCImJnZhbHVlQy50cmltKCkudG9Mb3dlckNhc2UoKSE9PVwiemF3c3plIHdpZXJueVwiKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9ICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZW5hYmxlTmV4dFBhcnRPZkZvcm11bGEoKXtcclxuICAgIGxldCB0aGlzT3JuYW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcuY29ycHVzX3NlY3Rpb25fZm9ybV9vcm5hbWVudC1tYXJrZXInKTtcclxuICAgIGxldCBhbGxPcm5hbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcuY29ycHVzX3NlY3Rpb25fZm9ybV9vcm5hbWVudC1tYXJrZXInKTtcclxuICAgIHRoaXNPcm5hbWVudC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ljb25zL3BvbGUuc3ZnJyk7XHJcbiAgICB0aGlzT3JuYW1lbnQuY2xhc3NMaXN0LmFkZCgnaXRJc1Bhc3NlZFRocm91Z2h0Jyk7XHJcbiAgICBsZXQgbmV4dE9ybmFtZW50ID0gYWxsT3JuYW1lbnRzWzFdO1xyXG4gICAgbmV4dE9ybmFtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2l0SXNIaWRkZW4nKTtcclxuICAgIGxldCBwYXJ0T2ZGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzJyk7XHJcbiAgICBwYXJ0T2ZGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2l0SXNIaWRkZW4nKTtcclxuICAgIGd1aWRlUmVhY3RzICgxKTtcclxufVxyXG5mdW5jdGlvbiBzZXRUaGlzRGF0YVRvRGVzY3JpcHRpb24oKXtcclxuICBzZXROYW1lVG9EZXMoKTtcclxuICBzZXROaWNrbmFtZVRvRGVzKCk7XHJcbiAgc2V0U2VudGVuY2VUb0RlcygpO1xyXG59IiwiaW1wb3J0IGl0ZXJhdG9yT2ZQb2ludHNMZWZ0IGZyb20gJy4vYXNpZGUuanMnO1xyXG5pbXBvcnQge2d1aWRlUmVhY3RzfSBmcm9tICcuL2FzaWRlLmpzJztcclxuJ3VzZSBzdHJpY3QnO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY2hvb3NlWW91ckF2YXRhcilcclxuZnVuY3Rpb24gY2hvb3NlWW91ckF2YXRhciAoKSB7XHJcbiAgbGV0IGNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcicpXHJcbiAgbGV0IGF2YXRhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfcmFkaW8tbGFiLWNvbnRhaW5lcicpXHJcbiAgbGV0IGFtb3VudCA9IGF2YXRhcnMubGVuZ3RoXHJcbiAgZm9yIChsZXQgaSA9IDA7aSA8IGFtb3VudDtpKyspIHtcclxuICAgIGxldCBpdGVtID0gYXZhdGFyc1tpXVxyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgY2hvb3NlVGhpc0F2YXRhcihpdGVtLCBhdmF0YXJzLCBhbW91bnQpXHJcbiAgICAgIHNldE9uZVBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uKGkpXHJcbiAgICAgIHN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0cyhjb250YWluZXJzKVxyXG4gICAgICBlbmFibGVBdHRhY2tzKGkpXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBjaG9vc2VUaGlzQXZhdGFyIChpdGVtLCBhdmF0YXJzLCBhbW91bnQpIHtcclxuICBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuY2hlY2tlZCA9IHRydWU7XHJcbiAgZm9yIChsZXQgaT0wOyBpPGFtb3VudDsgaSsrKXtcclxuICAgICAgbGV0IGF2ID0gYXZhdGFyc1tpXTtcclxuICAgICAgYXYuY2xhc3NMaXN0LnJlbW92ZSgnaXNDbGlja2VkJyk7XHJcbiAgfVxyXG4gIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXNDbGlja2VkJyk7XHJcbiAgaXRlcmF0b3JPZlBvaW50c0xlZnQuZGVsZXRhdG9yKCk7XHJcbiAgZ3VpZGVSZWFjdHMoMik7XHJcbn1cclxuZnVuY3Rpb24gc2V0T25lUGFydE9mQXR0YWNrRGVzY3JpcHRpb24gKGkpIHtcclxuICBsZXQgZGVzUGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Agc3Bhbi4tLWRlc19rbGFzYScpXHJcbiAgbGV0IGFycmF5ID0gW1xyXG4gICAgJyB1ZGVyemVuaWUgYnJvbmnEhSBicnV0YWxuxIUuJyxcclxuICAgICcgdWRlcnplbmllIGJyb25pxIUgc3RyemVsZWNrxIUuJyxcclxuICAgICcgdWRlcnplbmllIGJyb25pxIUgemRyYWR6aWVja8SFLicsXHJcbiAgICAnIHVkZXJ6ZW5pZSBicm9uacSFIHN6YWxlxYRjesSFLicsXHJcbiAgICAnIHVkZXJ6ZW5pZSBicm9uacSFIHN6YXJsYXRhxYRza8SFLicsXHJcbiAgICAnIHVkZXJ6ZW5pZSBicm9uacSFIGx1YiBjenlta29sd2llaywgY28gd3BhZG5pZSBrYXLFgm93aSB3IMWCYXBza2EuJ1xyXG4gIF1cclxuICBkZXNQYXJ0LmlubmVyVGV4dCA9IGFycmF5W2ldXHJcbiAgbGV0IG5leHREZXNQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncCBzcGFuLi0tZGVzX2VwaXRldCcpO1xyXG4gIG5leHREZXNQYXJ0LmNsYXNzTGlzdC5hZGQoJ2l0c0hpZGRlbicpO1xyXG4gIGxldCBhbm90aGVyTmV4dERlc1BhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfenl3aW9sJyk7XHJcbiAgYW5vdGhlck5leHREZXNQYXJ0LmNsYXNzTGlzdC5hZGQoJ2l0c0hpZGRlbicpO1xyXG4gIGxldCBvdGhlckFub3RoZXJOZXh0RGVzUGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19pbWllJyk7XHJcbiAgb3RoZXJBbm90aGVyTmV4dERlc1BhcnQuY2xhc3NMaXN0LmFkZCgnaXRzSGlkZGVuJyk7XHJcbiAgbGV0IHByekRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19wcnp5ZG9tZWsnKTtcclxuICBsZXQgemRhRGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3pkYW5pZScpO1xyXG4gIHByekRlcy5jbGFzc0xpc3QuYWRkKCdpdHNIaWRkZW4nKTtcclxuICB6ZGFEZXMuY2xhc3NMaXN0LmFkZCgnaXRzSGlkZGVuJyk7XHJcbn1cclxuZnVuY3Rpb24gc3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRzIChjb250YWluZXJzKSB7XHJcbiAgbGV0IGFtb3VudCA9IGNvbnRhaW5lcnMubGVuZ3RoXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xyXG4gICAgbGV0IGNvbnQgPSBjb250YWluZXJzW2ldXHJcbiAgICBsZXQgb3B0aW9ucyA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJylcclxuICAgIGxldCBpdGVyID0gb3B0aW9ucy5sZW5ndGhcclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlcjsgeCsrKSB7XHJcbiAgICAgIGxldCBiZWx0ID0gY29udC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0JylbeF1cclxuICAgICAgYmVsdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5oZXJpdCdcclxuICAgIH1cclxuICB9XHJcbn1cclxuZnVuY3Rpb24gZW5hYmxlQXR0YWNrcyAoaSkge1xyXG4gIGxldCBlbmFibGVkQXR0YWNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyJylcclxuICBmb3IgKGxldCB4ID0gMDsgeCA8IDY7IHgrKykge1xyXG4gICAgbGV0IGRpc2FibGVkSXRlbSA9IGVuYWJsZWRBdHRhY2tzW3hdXHJcbiAgICBkaXNhYmxlZEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnZW5hYmxlZCcpXHJcbiAgICBsZXQgb3B0cyA9IGRpc2FibGVkSXRlbS5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKVxyXG4gICAgbGV0IGFtb3VudCA9IG9wdHMubGVuZ3RoXHJcbiAgICBmb3IgKGxldCBqID0gMDtqIDwgYW1vdW50O2orKykge1xyXG4gICAgICBpZiAob3B0c1tqXS5zZWxlY3RlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIG9wdHNbal0uc2VsZWN0ZWQgPSBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCBlbmFibGVkQXR0YWNrID0gZW5hYmxlZEF0dGFja3NbaV1cclxuICBlbmFibGVkQXR0YWNrLmNsYXNzTGlzdC5hZGQoJ2VuYWJsZWQnKVxyXG59XHJcbiIsImltcG9ydCBpdGVyYXRvck9mUG9pbnRzTGVmdCBmcm9tICcuL2FzaWRlLmpzJztcclxuaW1wb3J0IHtndWlkZVJlYWN0c30gZnJvbSAnLi9hc2lkZS5qcyc7XHJcbid1c2Ugc3RyaWN0JztcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRpYWxpemVBdHRhY2tzUGFydCk7XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplQXR0YWNrc1BhcnQoKSB7XHJcbiAgICBsZXQgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyJyk7XHJcbiAgICBsZXQgYW1vdW50ID0gY29udGFpbmVycy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGNvbnQgPSBjb250YWluZXJzW2ldO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gY29udC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKTtcclxuICAgICAgICBsZXQgaXRlciA9IG9wdGlvbnMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlcjsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBvcHQgPSBvcHRpb25zW3hdO1xyXG4gICAgICAgICAgICBvcHQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBvbk1PdXQpO1xyXG4gICAgICAgICAgICBvcHQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIG9uTUVudGVyKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uTUVudGVyKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdC5zZWxlY3RlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBzeW5jaHJvbml6ZVRoaXNCY2tncldpdGhJbWFnZUJlbHRIb3ZlckJja2dyKG9wdCwgY29udCwgeCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBvbk1PdXQoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0LnNlbGVjdGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN5bmNocm9uaXplVGhpc0Jja2dyV2l0aEltYWdlQmVsdEhvdmVyQmNrZ3Iob3B0LCBjb250LCB4LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIG9wdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0Lml0ZXJhdG9yKGNvbnQsIHgpO1xyXG4gICAgICAgICAgICAgICAgZ3VpZGVSZWFjdHMoMyk7XHJcbiAgICAgICAgICAgICAgICBzeW5jaHJvbml6ZUJhY2tncm91bmRzT2ZPdGhlck9wdG5zKGNvbnQsIGl0ZXIpO1xyXG4gICAgICAgICAgICAgICAgc3luY2hyb25pemVUaGlzQmNrZ3JXaXRoSW1hZ2VCZWx0SG92ZXJCY2tncihvcHQsIGNvbnQsIHgsIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzeW5jaHJvbml6ZUJhY2tncm91bmRzT2ZPdGhlck9wdG5zKGNvbnQsIGl0ZXIpIHtcclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlcjsgeCsrKSB7XHJcbiAgICAgICAgbGV0IGJlbHQgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnKVt4XTtcclxuICAgICAgICBiZWx0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiaW5oZXJpdFwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzeW5jaHJvbml6ZVRoaXNCY2tncldpdGhJbWFnZUJlbHRIb3ZlckJja2dyKG9wdCwgY29udCwgeCwgaXNFbnRlcikge1xyXG4gICAgbGV0IGJlbHQgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnKVt4XTtcclxuICAgIGlmIChpc0VudGVyID09PSB0cnVlKSB7XHJcbiAgICAgICAgbGV0IHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUob3B0KTtcclxuICAgICAgICBsZXQgYmNnQ29sID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1jb2xvcicpO1xyXG4gICAgICAgIGJlbHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmNnQ29sO1xyXG4gICAgfSBlbHNlIGlmIChpc0VudGVyID09PSBmYWxzZSkge1xyXG4gICAgICAgIGJlbHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJpbmhlcml0XCI7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgaXRlcmF0b3JPZlBvaW50c0xlZnQgZnJvbSAnLi9hc2lkZS5qcyc7XHJcbid1c2Ugc3RyaWN0JztcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXQpO1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGxldCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzLTJfZmllbGRzZXQtZF9jb250YWluZXJfYXRyeWIgLi0tYmVsdF9pY29uLWNvbnRhaW5lcicpO1xyXG4gICAgbGV0IGJlbHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzLTJfZmllbGRzZXQtZF9jb250YWluZXJfYXRyeWIgLi0tYmVsdF9ib2R5LWNvbnRhaW5lcl9ib2R5Jyk7XHJcbiAgICBsZXQgaXRlciA9IGJ0bnMubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVyOyBpKyspIHtcclxuICAgICAgICBpZiAoaSA+IDQpIHtcclxuICAgICAgICAgICAgbGV0IGF0dHJ5YiA9IGJ0bnNbaV07XHJcbiAgICAgICAgICAgIGxldCBiZWx0ID0gYmVsdHNbaV07XHJcbiAgICAgICAgICAgIGF0dHJ5Yi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVyYXRvck9mUG9pbnRzTGVmdC5sZWZ0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFBvaW50KGJlbHQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUG9pbnQoYmVsdCkge1xyXG4gICAgbGV0IElNRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0lNRycpO1xyXG4gICAgSU1HLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2ljb25zL2lrb25hLXBvdGVnLnN2ZycpO1xyXG4gICAgYmVsdC5hcHBlbmRDaGlsZChJTUcpO1xyXG4gICAgLy9hbW91bnRPZlBvaW50cy0tO1xyXG4gICAgaXRlcmF0b3JPZlBvaW50c0xlZnQubGVmdC0tO1xyXG4gICAgaXRlcmF0b3JPZlBvaW50c0xlZnQuZXF1YWxpemF0b3IoKTtcclxuICAgIElNRy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkZWxldGVUaGlzSU1HKElNRylcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVRoaXNJTUcoeCkge1xyXG4gICAgeC5yZW1vdmUoKTtcclxuICAgIC8vYW1vdW50T2ZQb2ludHMrKztcclxuICAgIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0LmxlZnQrKztcclxuICAgIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0LmVxdWFsaXphdG9yKCk7XHJcbn0iLCJpbXBvcnQge2d1aWRlUmVhY3RzfSBmcm9tICcuL2FzaWRlLmpzJztcclxuXCJ1c2Ugc3RyaWN0XCI7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGluaXRpYWxpemVUaGlzU2VjdGlvbik7XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplVGhpc1NlY3Rpb24oKSB7XHJcbiAgICBsZXQgbGlzdEEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzZXQtYyAjemFzbG9uYVwiXHJcbiAgICApO1xyXG4gICAgbGV0IGxpc3RCID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc2V0LWMgI3BhbmNlcnpcIlxyXG4gICAgKTtcclxuICAgIGxldCBpbWFnZXNBID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICBcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc2V0LWNfaW1nc19pbWcuYVwiXHJcbiAgICApO1xyXG4gICAgbGV0IGltYWdlc0IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgIFwiLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzZXQtY19pbWdzX2ltZy5iXCJcclxuICAgICk7XHJcbiAgICBsZXQgb3B0c0EgPSBsaXN0QS5xdWVyeVNlbGVjdG9yQWxsKFwib3B0aW9uXCIpO1xyXG4gICAgbGV0IG9wdHNCID0gbGlzdEIucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvblwiKTtcclxuICAgIGR5bmFtaXplVGhpc0xpc3QobGlzdEEsIG9wdHNBLCBpbWFnZXNBLCBsaXN0Qik7XHJcbiAgICBkeW5hbWl6ZVRoaXNMaXN0KGxpc3RCLCBvcHRzQiwgaW1hZ2VzQiwgbGlzdEEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkeW5hbWl6ZVRoaXNMaXN0KGxpc3QsIG9wdHMsIGltYWdlcywgb3RoZXJMaXN0KSB7XHJcbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IGxpc3QudmFsdWU7XHJcbiAgICAgICAgbGV0IGl0ZXIgPSBvcHRzLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGl0ZXIgLSAxOyBqKyspIHtcclxuICAgICAgICAgICAgaW1hZ2VzW2pdLmNsYXNzTGlzdC5hZGQoXCJpdElzVW5zZWxlY3RlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVyOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG9wdCA9IG9wdHNbaV07XHJcbiAgICAgICAgICAgIGxldCBvcHRWYWx1ZSA9IG9wdC52YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBvcHRWYWx1ZSAmJiBpICE9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZXNbaV0uY2xhc3NMaXN0LnJlbW92ZShcIml0SXNVbnNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVuYWJsZU5leHRGb3JtUGFydChsaXN0LCBvdGhlckxpc3QpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuYWJsZU5leHRGb3JtUGFydChsaXN0LCBvdGhlckxpc3QpIHtcclxuICAgIGxldCBhID0gbGlzdC52YWx1ZTtcclxuICAgIGxldCBiID0gb3RoZXJMaXN0LnZhbHVlO1xyXG4gICAgaWYgKGEgIT09IFwiXCIgJiYgYiAhPT0gXCJcIikge1xyXG4gICAgICAgIGxldCBuZXh0UGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkcy0yJyk7XHJcbiAgICAgICAgbmV4dFBhcnQuY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0hpZGRlbicpO1xyXG4gICAgICAgIGxldCBhbGxPcm5hbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcuY29ycHVzX3NlY3Rpb25fZm9ybV9vcm5hbWVudC1tYXJrZXInKTtcclxuICAgICAgICBsZXQgdGhpc09ybmFtZW50ID0gYWxsT3JuYW1lbnRzWzJdO1xyXG4gICAgICAgIHRoaXNPcm5hbWVudC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ljb25zL3BvbGUuc3ZnJyk7XHJcbiAgICAgICAgdGhpc09ybmFtZW50LmNsYXNzTGlzdC5hZGQoJ2l0SXNQYXNzZWRUaHJvdWdodCcpO1xyXG4gICAgICAgIGxldCBuZXh0T3JuYW1lbnQgPSBhbGxPcm5hbWVudHNbM107XHJcbiAgICAgICAgbmV4dE9ybmFtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2l0SXNIaWRkZW4nKTtcclxuICAgICAgICBndWlkZVJlYWN0cyg1KTtcclxuICAgIH1cclxufSIsImltcG9ydCBpdGVyYXRvck9mUG9pbnRzTGVmdCBmcm9tICcuL2FzaWRlLmpzJztcclxuaW1wb3J0IHtndWlkZVJlYWN0c30gZnJvbSAnLi9hc2lkZS5qcyc7XHJcbid1c2Ugc3RyaWN0JztcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRpYWxpemVUaGlzU2VsZWN0KVxyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZVRoaXNTZWxlY3QoKSB7XHJcbiAgICBsZXQgb3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkcy0yX2ZpZWxkc2V0LWRfY29udGFpbmVyX21vY2UnKTtcclxuICAgIGxldCBpdGVyID0gb3B0aW9ucy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXI7IGkrKykge1xyXG4gICAgICAgIGxldCBvcHQgPSBvcHRpb25zW2ldO1xyXG4gICAgICAgIG9wdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaXRJc0NsaWNrZWQob3B0LCBvcHRpb25zLCBpdGVyLCBpKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGl0SXNDbGlja2VkKG9wdCwgb3B0cywgaXRlciwgaSkge1xyXG4gICAgbGV0IGNoZWNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJtb2MtcGlldG5vXCJdJyk7XHJcbiAgICBsZXQgY29zdE9mVGhpcyA9IFsxLDIsMiwxLDMsMV07XHJcbiAgICBpZiAoY2hlY2tzW2ldLmNoZWNrZWQ9PT10cnVlKXtcclxuICAgICAgICBjaGVja3NbaV0uY2hlY2tlZD1mYWxzZTtcclxuICAgICAgICBpdGVyYXRvck9mUG9pbnRzTGVmdC5pdGVyYXRvckIoY29zdE9mVGhpc1tpXSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBjaGVja3NbaV0uY2hlY2tlZD10cnVlO1xyXG4gICAgICAgIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0LmRlbGV0YXRvckIoY29zdE9mVGhpc1tpXSk7XHJcbiAgICAgICAgZ3VpZGVSZWFjdHMoNik7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGl0ZXI7IGorKykge1xyXG4gICAgICAgIGlmIChjaGVja3Nbal0uY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBvcHRzW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ2l0SXNIaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoZWNrc1tqXS5jaGVja2VkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBvcHRzW2pdLmNsYXNzTGlzdC5hZGQoJ2l0SXNIaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImluaXRpYWxpemVHdWlkZSIsImhpZGVVc2VyR3VpZGUiLCJvcm5tIiwicXVlcnlTZWxlY3RvciIsInJvdGF0ZUFuZEhpZGVBc2lkZSIsImJ0biIsImNvbnRyb2xsZXIiLCJhc2lkZSIsInN0eWxlIiwidHJhbnNmb3JtIiwiYXciLCJvZmZzZXRXaWR0aCIsImFoIiwib2Zmc2V0SGVpZ2h0Iiwid3NwIiwieCIsInkiLCJ6IiwibGVmdCIsInRvcCIsImd1aWRlUmVhY3RzIiwiaSIsInBhcnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImN1cnJlbnRQYXJ0IiwicG9zaXRpb24iLCJvZmZzZXRUb3AiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImd1aWRlIiwidGl0bGUiLCJhcnIiLCJpbm5lclRleHQiLCJhcnJCIiwiaXRlcmF0b3JPZlBvaW50c0xlZnQiLCJzcGVudE9uQXR0YWNrIiwiaXRlcmF0b3IiLCJjb250IiwiaXRlckRldmljZSIsIm9wdCIsInBvaW50cyIsImFtb3VudCIsImxlbmd0aCIsImJpbGFucyIsImRlbGV0YXRvciIsIml0ZXJhdG9yQiIsImludGVnZXIiLCJkZWxldGF0b3JCIiwiZXF1YWxpemF0b3IiLCJpbml0aWFsaXplIiwib3B0cyIsIml0ZW0iLCJzZXRJTUciLCJlbmFibGVTdHJpa2VOYW1lUGFydCIsInNldFN0cmlrZU5hbWVUb0RlcyIsInNldFBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uIiwic2V0Rm9yY2VEZXMiLCJvbmx5T25jZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImRlc1BhcnQiLCJhcnJheSIsImJlbHQiLCJpbWFnIiwiYXR0cnliIiwiZ2V0QXR0cmlidXRlIiwiaWNvbiIsInNldEF0dHJpYnV0ZSIsImFsbElNR3MiLCJzdGFuZGFydCIsImltYWdlVG9EZWwiLCJyZW1vdmVDaGlsZCIsImoiLCJ0aGVJTUciLCJzb3VyY2VJTUciLCJuZXdJTUciLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJpbnAiLCJzdHJOYW1lIiwidmFsdWUiLCJzaG93QWxsRGVzIiwic2V0TmV4dFBhcnRPZkZvcm11bGEiLCJpdG0iLCJ0cmltIiwiSU1HcyIsIml0ZXIiLCJzdHJuZyIsIklNRyIsInB1c2giLCJzdHJpbmdUb1NldCIsImpvaW4iLCJ6eXdEZXMiLCJpbWlEZXMiLCJwcnpEZXMiLCJ6ZGFEZXMiLCJzZXROYW1lVG9EZXMiLCJuYW0iLCJzZXROaWNrbmFtZVRvRGVzIiwiaW5wQiIsInN1cm5hbSIsInNldFNlbnRlbmNlVG9EZXMiLCJhbGxEZXMiLCJ0ZXh0QXJlYSIsImFyZWFWYWx1ZSIsImVuYWJsZU5leHRQYXJ0T2ZGb3JtIiwibmV4dFBhcnQiLCJhbGxPcm5hbWVudHMiLCJ0aGlzT3JuYW1lbnQiLCJhZGQiLCJuZXh0T3JuYW1lbnQiLCJtYXJnaW5Cb3R0b20iLCJ6SW5kZXgiLCJ1c2VyRmxvd1ZpYUZpcnN0RmllbGRzZXQiLCJ1c2VyTmFtZSIsInVzZXJOaWNrIiwidXNlck1vdHRvIiwidXNlck5hbWVBY2NlcHQiLCJ1c2VyTmlja0FjY2VwdCIsInVzZXJNb3R0b0FjY2VwdCIsIm5leHRJdGVtIiwiZXZlbnQiLCJhbGxGaWVsZHNBcmVTZXQiLCJjaGVja0lmRmllbGRzQXJlU2V0IiwiZW5hYmxlTmV4dFBhcnRPZkZvcm11bGEiLCJrZXlDb2RlIiwiZm9jdXMiLCJzZXRUaGlzRGF0YVRvRGVzY3JpcHRpb24iLCJ2YWx1ZUEiLCJ2YWx1ZUIiLCJ2YWx1ZUMiLCJ0b0xvd2VyQ2FzZSIsInBhcnRPZkZvcm0iLCJjaG9vc2VZb3VyQXZhdGFyIiwiY29udGFpbmVycyIsImF2YXRhcnMiLCJjaG9vc2VUaGlzQXZhdGFyIiwic2V0T25lUGFydE9mQXR0YWNrRGVzY3JpcHRpb24iLCJzeW5jaHJvbml6ZUJhY2tncm91bmRzT2ZPdGhlck9wdHMiLCJlbmFibGVBdHRhY2tzIiwiY2hlY2tlZCIsImF2IiwibmV4dERlc1BhcnQiLCJhbm90aGVyTmV4dERlc1BhcnQiLCJvdGhlckFub3RoZXJOZXh0RGVzUGFydCIsIm9wdGlvbnMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJlbmFibGVkQXR0YWNrcyIsImRpc2FibGVkSXRlbSIsInNlbGVjdGVkIiwiZW5hYmxlZEF0dGFjayIsImluaXRpYWxpemVBdHRhY2tzUGFydCIsIm9uTU91dCIsIm9uTUVudGVyIiwic3luY2hyb25pemVUaGlzQmNrZ3JXaXRoSW1hZ2VCZWx0SG92ZXJCY2tnciIsInN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0bnMiLCJpc0VudGVyIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImJjZ0NvbCIsImdldFByb3BlcnR5VmFsdWUiLCJpbml0IiwiYnRucyIsImJlbHRzIiwiYWRkUG9pbnQiLCJkZWxldGVUaGlzSU1HIiwiaW5pdGlhbGl6ZVRoaXNTZWN0aW9uIiwibGlzdEEiLCJsaXN0QiIsImltYWdlc0EiLCJpbWFnZXNCIiwib3B0c0EiLCJvcHRzQiIsImR5bmFtaXplVGhpc0xpc3QiLCJsaXN0IiwiaW1hZ2VzIiwib3RoZXJMaXN0Iiwib3B0VmFsdWUiLCJlbmFibGVOZXh0Rm9ybVBhcnQiLCJhIiwiYiIsImluaXRpYWxpemVUaGlzU2VsZWN0IiwiaXRJc0NsaWNrZWQiLCJjaGVja3MiLCJjb3N0T2ZUaGlzIl0sIm1hcHBpbmdzIjoiOzs7SUFBQUEsU0FBU0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDQyxlQUE5Qzs7SUFFQSxTQUFTQSxlQUFULEdBQTJCO0lBQ3pCQztJQUNEOztJQUVELFNBQVNBLGFBQVQsR0FBeUI7SUFDdkIsTUFBSUMsT0FBT0osU0FBU0ssYUFBVCxDQUF1QixhQUF2QixDQUFYO0lBQ0FELE9BQUtILGdCQUFMLENBQXNCLE9BQXRCLEVBQStCSyxrQkFBL0I7SUFDQSxNQUFJQyxNQUFNUCxTQUFTSyxhQUFULENBQXVCLGtCQUF2QixDQUFWO0lBQ0FFLE1BQUlOLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCSyxrQkFBOUI7SUFDRDtJQUNELElBQUlFLGFBQWEsQ0FBakI7O0lBRUEsU0FBU0Ysa0JBQVQsR0FBOEI7SUFDNUIsTUFBSUcsUUFBUVQsU0FBU0ssYUFBVCxDQUF1QixPQUF2QixDQUFaO0lBQ0EsTUFBSUcsZUFBZSxDQUFuQixFQUFzQjtJQUNwQkMsVUFBTUMsS0FBTixDQUFZQyxTQUFaLEdBQXdCLGVBQXhCO0lBQ0EsUUFBSUMsS0FBS0gsTUFBTUksV0FBZjtJQUNBLFFBQUlDLEtBQUtMLE1BQU1NLFlBQWY7SUFDQSxRQUFJQyxNQUFNRixLQUFNLENBQUNGLEtBQUtFLEVBQU4sSUFBWSxDQUE1QjtJQUNBLFFBQUlHLElBQUtELE1BQU0sQ0FBQyxDQUFSLEdBQWEsRUFBckI7SUFDQSxR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
