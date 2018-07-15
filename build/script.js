(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', initializeGuide);

    function initializeGuide() {
      hideUserGuide();
      //changeGuide();
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
    /*function changeGuide () {
      let parts = document.querySelectorAll('fieldset');
      for (let i = 0;i <= 6;i++) {
        parts[i].addEventListener('mouseenter', function () {
          guideReacts(i);
        })
      }
    }*/
    function guideReacts(i) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyIuLi9zb3VyY2UvZHluYW1pY3MvYXNpZGUuanMiLCIuLi9zb3VyY2UvZHluYW1pY3MvYXRha2ktc2V0LXR4dC5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9wb2RzdGF3eS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9rbGFzYS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9hdGFraS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9hdHRyeWJzLmpzIiwiLi4vc291cmNlL2R5bmFtaWNzL29icm9ueS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9tb2NlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0aWFsaXplR3VpZGUpXHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplR3VpZGUgKCkge1xyXG4gIGhpZGVVc2VyR3VpZGUoKTtcclxuICAvL2NoYW5nZUd1aWRlKCk7XHJcbn1cclxuZnVuY3Rpb24gaGlkZVVzZXJHdWlkZSAoKSB7XHJcbiAgbGV0IG9ybm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtaGVhZCcpXHJcbiAgb3JubS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZUFuZEhpZGVBc2lkZSlcclxuICBsZXQgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItZ3VpZGVfaGlkZScpXHJcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlQW5kSGlkZUFzaWRlKVxyXG59XHJcbmxldCBjb250cm9sbGVyID0gMFxyXG5mdW5jdGlvbiByb3RhdGVBbmRIaWRlQXNpZGUgKCkge1xyXG4gIGxldCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJylcclxuICBpZiAoY29udHJvbGxlciA9PT0gMCkge1xyXG4gICAgYXNpZGUuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknXHJcbiAgICBsZXQgYXcgPSBhc2lkZS5vZmZzZXRXaWR0aFxyXG4gICAgbGV0IGFoID0gYXNpZGUub2Zmc2V0SGVpZ2h0XHJcbiAgICBsZXQgd3NwID0gYWggKyAoKGF3IC0gYWgpIC8gMilcclxuICAgIGxldCB4ID0gKHdzcCAqIC0xKSArIDIwXHJcbiAgICBsZXQgeSA9IHggKyAncHgnXHJcbiAgICBsZXQgeiA9ICgoYXcgLSBhaCkgLyAyKSArICdweCdcclxuICAgIGFzaWRlLnN0eWxlLmxlZnQgPSB5XHJcbiAgICBhc2lkZS5zdHlsZS50b3AgPSB6XHJcbiAgICBjb250cm9sbGVyID0gMVxyXG4gIH1lbHNlIGlmIChjb250cm9sbGVyID09PSAxKSB7XHJcbiAgICBhc2lkZS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJ1xyXG4gICAgYXNpZGUuc3R5bGUubGVmdCA9IDBcclxuICAgIGFzaWRlLnN0eWxlLnRvcCA9IDBcclxuICAgIGNvbnRyb2xsZXIgPSAwXHJcbiAgfVxyXG59XHJcbi8qZnVuY3Rpb24gY2hhbmdlR3VpZGUgKCkge1xyXG4gIGxldCBwYXJ0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ZpZWxkc2V0Jyk7XHJcbiAgZm9yIChsZXQgaSA9IDA7aSA8PSA2O2krKykge1xyXG4gICAgcGFydHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgZ3VpZGVSZWFjdHMoaSk7XHJcbiAgICB9KVxyXG4gIH1cclxufSovXHJcbmV4cG9ydCBmdW5jdGlvbiBndWlkZVJlYWN0cyAoaSkge1xyXG4gIGxldCBndWlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1mb290IC51c2VyLWd1aWRlJyk7XHJcbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWZvb3RfdGl0bGUnKTtcclxuICBsZXQgYXJyID0gW1xyXG4gICAgJ0dkeSB3cGlzemVzeiBpbWnEmSwgcHJ6eWRvbWVrIGkgemF3b8WCYW5pZSwgcG8gemF0d2llcmR6ZW5pdSB6bWlhbiBwb2phd2kgc2nEmSBuYXN0xJlwbmEgY3rEmcWbxIcgZm9ybXVsYXJ6YS4nLFxyXG4gICAgJ1BvIHd5Ym9yemUga2xhc3ksIHBvamF3aSBzaWUgb2tubyB3eWJvcnUgYXRha3Ugc3BvxZtyw7NkIHVkZXJ6ZcWEIGNoYXJha3RlcnlzdHljem55Y2ggZGxhIHRlaiBwb3N0YWNpLicsXHJcbiAgICAnV3liaWVyeiB1ZGVyemVuaWUsIGtsaWthasSFYyB3IHPFgm93byBvcGlzdWrEhWNlIGplLiBQcnp5IGthxbxkeW0gZXBpdGVjaWUgd2lkbmllamUgY2hhcmFrdGVyeXN0eWthIGNpb3N1IHcgSWtvbmFjaCDFu3l3aW/FgsOzdyBpIElrb25hY2ggVWRlcnplxYQuJyxcclxuICAgICdXeW15xZtsIG5hendlIGRsYSB1ZGVyemVuaWEgeiBwb3ByemVkbmllZ28ga3Jva3UuIEdkeSBqxIUgemF0d2llcmR6aXN6LCBwb2phd2kgc2llIGtvbGVqbmEgY3plxZvEhyBrYXJ0eSBwb3N0YWNpLicsXHJcbiAgICAnUG8gd3lib3J6ZSBqZWRuZWogb3BjamkgeiBrYcW8ZGVqIGxpc3R5LCBwb2phd2kgc2llIGtvbGVqbmEgY3plxZvEhyBrYXJ0eSBwb3N0YWNpLicsXHJcbiAgICAnS2xpa25paiB0eWxlIG9wY2ppLCBpbGUgY2hjZXN6LiBLYcW8ZHkgemVzdGF3IChjenlsaSBtb2MgaSBwaWV0bm8pIHphYmllcmEgY2kgcGV3bsSFIGlsb8WbxIcgcHVua3TDs3cgTcSFZHJvxZtjaS4nLFxyXG4gICAgJ1JvemRhaiBwb3pvc3RhxYJlIHB1bmt0eSBtxIVkcm/Fm2NpIG5hIHdzcMOzxYJjenlubmlraSBwb3N0YWNpOiDFu3ljaWUsIE3EhWRyb8WbxIcsIFJ1Y2ggaSBEemlhxYJhbmllLidcclxuICBdO1xyXG4gIGd1aWRlLmlubmVyVGV4dCA9IGFycltpXTtcclxuICBsZXQgYXJyQiA9IFtcclxuICAgICd0b8W8c2Ftb8WbxIc6JyxcclxuICAgICdrbGFzYTonLFxyXG4gICAgJ2F0YWs6JyxcclxuICAgICduYXp3YSBhdGFrdTonLFxyXG4gICAgJ29icm9uYTonLFxyXG4gICAgJ3pkb2xub8WbxIcgaSBzxYJhYm/Fm8SHJyxcclxuICAgICdhdHJ5YnV0eTonXHJcbiAgXTtcclxuICB0aXRsZS5pbm5lclRleHQgPSBhcnJCW2ldO1xyXG59XHJcblxyXG52YXIgaXRlcmF0b3JPZlBvaW50c0xlZnQgPSB7XHJcbiAgbGVmdDogMjAsXHJcbiAgc3BlbnRPbkF0dGFjazogMCxcclxuICBpdGVyYXRvcihjb250LCB4KSB7XHJcbiAgICBsZXQgaXRlckRldmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1ib2R5X2hvdy1tdWNoJyk7XHJcbiAgICBsZXQgb3B0ID0gY29udC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0JylbeF07XHJcbiAgICBsZXQgcG9pbnRzID0gb3B0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpO1xyXG4gICAgbGV0IGFtb3VudCA9IChwb2ludHMubGVuZ3RoIC0gMSk7XHJcbiAgICBsZXQgYmlsYW5zID0gYW1vdW50LXRoaXMuc3BlbnRPbkF0dGFjaztcclxuICAgIHRoaXMubGVmdCA9IHRoaXMubGVmdC1iaWxhbnM7XHJcbiAgICB0aGlzLnNwZW50T25BdHRhY2sgPSBhbW91bnQ7XHJcbiAgICBpdGVyRGV2aWNlLmlubmVyVGV4dCA9ICdQb3pvc3RhxYJvJyArICcgJyArIHRoaXMubGVmdCArICd4JztcclxuICB9LFxyXG4gIGRlbGV0YXRvcigpe1xyXG4gICAgbGV0IGl0ZXJEZXZpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtYm9keV9ob3ctbXVjaCcpO1xyXG4gICAgdGhpcy5sZWZ0ID0gdGhpcy5sZWZ0ICsgdGhpcy5zcGVudE9uQXR0YWNrO1xyXG4gICAgdGhpcy5zcGVudE9uQXR0YWNrPTA7XHJcbiAgICBpdGVyRGV2aWNlLmlubmVyVGV4dCA9ICdQb3pvc3RhxYJvJyArICcgJyArIHRoaXMubGVmdCArICd4JztcclxuICB9LFxyXG4gIGl0ZXJhdG9yQihpbnRlZ2VyKSB7XHJcbiAgICBsZXQgaXRlckRldmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1ib2R5X2hvdy1tdWNoJyk7XHJcbiAgICB0aGlzLmxlZnQgPSB0aGlzLmxlZnQraW50ZWdlcjtcclxuICAgIGl0ZXJEZXZpY2UuaW5uZXJUZXh0ID0gJ1Bvem9zdGHFgm8nICsgJyAnICsgdGhpcy5sZWZ0ICsgJ3gnO1xyXG4gIH0sXHJcbiAgZGVsZXRhdG9yQihpbnRlZ2VyKXtcclxuICAgIGxldCBpdGVyRGV2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWJvZHlfaG93LW11Y2gnKTtcclxuICAgIHRoaXMubGVmdCA9IHRoaXMubGVmdC1pbnRlZ2VyO1xyXG4gICAgaXRlckRldmljZS5pbm5lclRleHQgPSAnUG96b3N0YcWCbycgKyAnICcgKyB0aGlzLmxlZnQgKyAneCc7XHJcbiAgfSxcclxuICBlcXVhbGl6YXRvcigpe1xyXG4gICAgbGV0IGl0ZXJEZXZpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtYm9keV9ob3ctbXVjaCcpO1xyXG4gICAgaXRlckRldmljZS5pbm5lclRleHQgPSAnUG96b3N0YcWCbycgKyAnICcgKyB0aGlzLmxlZnQgKyAneCc7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGl0ZXJhdG9yT2ZQb2ludHNMZWZ0O1xyXG4iLCIndXNlIHN0cmljdCdcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRpYWxpemUpXHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG4gIGxldCBvcHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9zZWxlY3QtbGlzdCBvcHRpb24nXHJcbiAgKVxyXG4gIGxldCBhbW91bnQgPSBvcHRzLmxlbmd0aFxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50OyBpKyspIHtcclxuICAgIGxldCBpdGVtID0gb3B0c1tpXVxyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgc2V0SU1HKGkpXHJcbiAgICAgIGVuYWJsZVN0cmlrZU5hbWVQYXJ0KClcclxuICAgICAgc2V0U3RyaWtlTmFtZVRvRGVzKGkpXHJcbiAgICAgIHNldFBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uKGkpXHJcbiAgICAgIHNldEZvcmNlRGVzKGkpXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5sZXQgb25seU9uY2UgPSAwXHJcblxyXG5mdW5jdGlvbiBlbmFibGVTdHJpa2VOYW1lUGFydCgpIHtcclxuICBvbmx5T25jZSsrXHJcbiAgaWYgKG9ubHlPbmNlID09PSAxKSB7XHJcbiAgICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdHJpa2VOYW1lJylcclxuICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnc3RyaWtlTmFtZScpXHJcbiAgfVxyXG59XHJcblxyXG5pbXBvcnQge2d1aWRlUmVhY3RzfSBmcm9tICcuL2FzaWRlLmpzJztcclxuZnVuY3Rpb24gc2V0UGFydE9mQXR0YWNrRGVzY3JpcHRpb24oaSkge1xyXG4gIGxldCBkZXNQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncCBzcGFuLi0tZGVzX2VwaXRldCcpXHJcbiAgZGVzUGFydC5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKVxyXG4gIGxldCBhcnJheSA9IFtcclxuICAgICdicnV0YWxuZScsXHJcbiAgICAnbmllcHJ6ZXdpZHl3YWxuZScsXHJcbiAgICAnd3nEh3dpY3pvbmUnLFxyXG4gICAgJ25pZXphd29kbmUnLFxyXG4gICAgJ3ByZWN5enlqbmUnLFxyXG4gICAgJ3ptYXNvd2FuZScsXHJcbiAgICAncG9kc3TEmXBuZScsXHJcbiAgICAnd3lyYWNob3dhbmUnLFxyXG4gICAgJ3pkcmFkemllY2tpZScsXHJcbiAgICAnc3phbGXFhGN6ZScsXHJcbiAgICAnb3ByYWNvd2FuZSB3IGxhYm9yYXRvcml1bSBhbGNoZW1pY3pueW0nLFxyXG4gICAgJ25pZXBvd3N0cnp5bWFuZScsXHJcbiAgICAnd8WCYWRjemUnLFxyXG4gICAgJ21yb2N6bmUnLFxyXG4gICAgJ3RhamVtbmUnLFxyXG4gICAgJ3fFm2NpZWvFgmUnLFxyXG4gICAgJ3dzcGllcmFuZSBtb2PEhSBvdGNoxYJhbmknLFxyXG4gICAgJ3ByemVzeWNvbmUgesWCxIUgbW9jxIUnXHJcbiAgXVxyXG4gIGRlc1BhcnQuaW5uZXJUZXh0ID0gJywgJyArIGFycmF5W2ldXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldElNRyhpKSB7XHJcbiAgbGV0IGJlbHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnXHJcbiAgKVtpXVxyXG4gIGxldCBpbWFnID0gYmVsdC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVswXVxyXG4gIGxldCBhdHRyeWIgPSBpbWFnLmdldEF0dHJpYnV0ZSgnc3JjJylcclxuICBsZXQgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLXBsYXRlX2ltZ19pY29uJylcclxuICBpY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgYXR0cnliKVxyXG4gIGxldCBhbGxJTUdzID0gYmVsdC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKS5sZW5ndGhcclxuICBsZXQgc3RhbmRhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1zdGFuZGFydF9pbWdfYmNrZycpXHJcbiAgd2hpbGUgKHN0YW5kYXJ0LnF1ZXJ5U2VsZWN0b3IoJ0lNRycpICE9PSBudWxsKSB7XHJcbiAgICBsZXQgaW1hZ2VUb0RlbCA9IHN0YW5kYXJ0LnF1ZXJ5U2VsZWN0b3IoJ0lNRycpXHJcbiAgICBzdGFuZGFydC5yZW1vdmVDaGlsZChpbWFnZVRvRGVsKVxyXG4gIH1cclxuICBmb3IgKGxldCBqID0gMDsgaiA8IGFsbElNR3M7IGorKykge1xyXG4gICAgaWYgKGogPiAwKSB7XHJcbiAgICAgIGxldCB0aGVJTUcgPSBiZWx0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpW2pdXHJcbiAgICAgIGxldCBzb3VyY2VJTUcgPSB0aGVJTUcuZ2V0QXR0cmlidXRlKCdzcmMnKVxyXG4gICAgICBsZXQgbmV3SU1HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgbmV3SU1HLnNldEF0dHJpYnV0ZSgnc3JjJywgc291cmNlSU1HKVxyXG4gICAgICBzdGFuZGFydC5hcHBlbmRDaGlsZChuZXdJTUcpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRTdHJpa2VOYW1lVG9EZXMoaSkge1xyXG4gIGxldCBpbnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibmF6d2F1ZGVyemVuaWFcIl0nKVxyXG4gIGlucC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBzdHJOYW1lID0gaW5wLnZhbHVlO1xyXG4gICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfbmF6d2EtY2lvc3UnKTtcclxuICAgIGl0ZW0uaW5uZXJUZXh0ID0gc3RyTmFtZSArICcgdG8gbGVnZW5kYXJuZSc7XHJcbiAgICBzaG93QWxsRGVzKCk7XHJcbiAgICBzZXROZXh0UGFydE9mRm9ybXVsYSgpO1xyXG4gIH0pXHJcbiAgaW5wLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBpdG0gPSBpbnAudmFsdWVcclxuICAgIGlmIChpdG0udHJpbSgpICE9PSAnJykge1xyXG4gICAgICBsZXQgc3RyTmFtZSA9IGlucC52YWx1ZVxyXG4gICAgICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19uYXp3YS1jaW9zdScpXHJcbiAgICAgIGl0ZW0uaW5uZXJUZXh0ID0gc3RyTmFtZSArICcgdG8gbGVnZW5kYXJuZSdcclxuICAgICAgc2hvd0FsbERlcygpO1xyXG4gICAgICBzZXROZXh0UGFydE9mRm9ybXVsYSgpO1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEZvcmNlRGVzKGkpIHtcclxuICBsZXQgYmVsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdCdcclxuICApW2ldO1xyXG4gIGxldCBJTUdzID0gYmVsdC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVxyXG4gIGxldCBpdGVyID0gSU1Hcy5sZW5ndGhcclxuICBsZXQgc3RybmcgPSBbXVxyXG4gIGZvciAobGV0IGogPSAwOyBqIDwgaXRlcjsgaisrKSB7XHJcbiAgICBsZXQgSU1HID0gSU1Hc1tqXVxyXG4gICAgbGV0IGF0dHJ5YiA9IElNRy5nZXRBdHRyaWJ1dGUoJ3NyYycpXHJcbiAgICBpZiAoaiAhPT0gMCkge1xyXG4gICAgICBpZiAoYXR0cnliID09PSAnaWNvbnMvYnJvbi1iYXJiYS5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnZG9kYXRrb3fEhSBtb2PEhSB1ZGVyemVuaW93xIUnKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL2Jyb24tY3phci5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnZG9kYXRrb3fEhSBtb2PEhSBjemFybm9rc2nEmXNrxIUnKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL2Jyb24tc3Ryei5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnZG9kYXRrb3d5bSBrdW5zenRlbSBzdHJ6ZWxlY2tpbScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvYnJvbi1zemFsLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCdkb2RhdGtvd3ltIHN6YWxlxYRzdHdlbScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvYnJvbi16ZHJhLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCduaWVzcG9kemlhbnltIHpkcmFkbGl3eW0gY2lvc2VtJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy96eXctb2dpZW4uc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ8W8eXdpb8WCZW0gb2duaWEnKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL3p5dy1yb3prbGFkLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCfFvHl3aW/FgmVtIHJvemvFgmFkdScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvenl3LXdvZC5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnxbx5d2lvxYJlbSB3b2R5JylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy96eXctem1pYW5hLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCfFvHl3aW/FgmVtIHptaWFueScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvenl3LXp5d2lhLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCfFvHl3aW/FgmVtIMW8eXdpaScpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnd8WCYXNuxIUgbcSFZHJvxZtjacSFIMW8eXdpb8WCw7N3IGkgdGFsZW50w7N3JylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBsZXQgc3RyaW5nVG9TZXQgPSBzdHJuZy5qb2luKCcsICcpO1xyXG4gIGxldCB6eXdEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfenl3aW9sJyk7XHJcbiAgbGV0IGltaURlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19pbWllJyk7XHJcbiAgbGV0IHByekRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19wcnp5ZG9tZWsnKTtcclxuICBsZXQgemRhRGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3pkYW5pZScpO1xyXG4gIHp5d0Rlcy5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKTtcclxuICBpbWlEZXMuY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJyk7XHJcbiAgcHJ6RGVzLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpO1xyXG4gIHpkYURlcy5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKTtcclxuICB6eXdEZXMuaW5uZXJUZXh0ID0gc3RyaW5nVG9TZXQgKyAnLic7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldE5hbWVUb0RlcygpIHtcclxuICBsZXQgaW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImltaWVcIl0nKVxyXG4gIGxldCBuYW0gPSBpbnAudmFsdWVcclxuICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19pbWllJylcclxuICBpdGVtLmlubmVyVGV4dCA9IG5hbSArICcgJztcclxuICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldE5pY2tuYW1lVG9EZXMoKSB7XHJcbiAgbGV0IGlucEIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJ6eWRvbWVrXCJdJylcclxuICBsZXQgc3VybmFtID0gaW5wQi52YWx1ZVxyXG4gIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3Byenlkb21laycpXHJcbiAgaXRlbS5pbm5lclRleHQgPSBzdXJuYW07XHJcbiAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTZW50ZW5jZVRvRGVzKCkge1xyXG4gIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3pkYW5pZScpXHJcbiAgaXRlbS5pbm5lclRleHQgPSAnIHd6bWFjbmlhIHN3w7NqIGF0YWsgJ1xyXG4gIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJylcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0FsbERlcygpIHtcclxuICBsZXQgYWxsRGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzJylcclxuICBhbGxEZXMuY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJylcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0TmV4dFBhcnRPZkZvcm11bGEoKSB7XHJcbiAgbGV0IHRleHRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm5hendhdWRlcnplbmlhXCJdJyk7XHJcbiAgbGV0IGFyZWFWYWx1ZSA9ICh0ZXh0QXJlYS52YWx1ZSkudHJpbSgpO1xyXG4gIGlmIChhcmVhVmFsdWUgIT09ICcnKSB7XHJcbiAgICBlbmFibGVOZXh0UGFydE9mRm9ybSgpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZW5hYmxlTmV4dFBhcnRPZkZvcm0oKSB7XHJcbiAgbGV0IG5leHRQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzZXQtYycpO1xyXG4gIG5leHRQYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2l0SXNIaWRkZW4nKTtcclxuICBsZXQgYWxsT3JuYW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLmNvcnB1c19zZWN0aW9uX2Zvcm1fb3JuYW1lbnQtbWFya2VyJyk7XHJcbiAgbGV0IHRoaXNPcm5hbWVudCA9IGFsbE9ybmFtZW50c1sxXTtcclxuICB0aGlzT3JuYW1lbnQuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pY29ucy9wb2xlLnN2ZycpO1xyXG4gIHRoaXNPcm5hbWVudC5jbGFzc0xpc3QuYWRkKCdpdElzUGFzc2VkVGhyb3VnaHQnKTtcclxuICBsZXQgbmV4dE9ybmFtZW50ID0gYWxsT3JuYW1lbnRzWzJdO1xyXG4gIG5leHRPcm5hbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbiAgdGhpc09ybmFtZW50LnN0eWxlLm1hcmdpbkJvdHRvbT1cIi0xcmVtXCI7XHJcbiAgdGhpc09ybmFtZW50LnN0eWxlLnpJbmRleD1cIjFcIjtcclxuICBuZXh0UGFydC5zdHlsZS56SW5kZXg9XCIyXCI7XHJcbiAgZ3VpZGVSZWFjdHMoNCk7XHJcbn0iLCJpbXBvcnQge3NldE5hbWVUb0Rlc30gZnJvbSAnLi9hdGFraS1zZXQtdHh0LmpzJztcclxuaW1wb3J0IHtzZXROaWNrbmFtZVRvRGVzfSBmcm9tICcuL2F0YWtpLXNldC10eHQuanMnO1xyXG5pbXBvcnQge3NldFNlbnRlbmNlVG9EZXN9IGZyb20gJy4vYXRha2ktc2V0LXR4dC5qcyc7XHJcbmltcG9ydCB7Z3VpZGVSZWFjdHN9IGZyb20gJy4vYXNpZGUuanMnO1xyXG4ndXNlIHN0cmljdCc7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgdXNlckZsb3dWaWFGaXJzdEZpZWxkc2V0KClcclxufSlcclxuZnVuY3Rpb24gdXNlckZsb3dWaWFGaXJzdEZpZWxkc2V0ICgpIHtcclxuICBsZXQgdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiaW1pZVwiXScpO1xyXG4gIGxldCB1c2VyTmljayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcnp5ZG9tZWtcIl0nKTtcclxuICBsZXQgdXNlck1vdHRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWFbbmFtZT1cInphd29sYW5pZVwiXScpO1xyXG4gIHVzZXJOYW1lQWNjZXB0KHVzZXJOYW1lLCB1c2VyTmljaylcclxuICB1c2VyTmlja0FjY2VwdCh1c2VyTmljaywgdXNlck1vdHRvKVxyXG4gIHVzZXJNb3R0b0FjY2VwdCh1c2VyTW90dG8sIHVzZXJOYW1lKVxyXG59XHJcbmZ1bmN0aW9uIHVzZXJOYW1lQWNjZXB0IChpdGVtLCBuZXh0SXRlbSkge1xyXG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGxldCBhbGxGaWVsZHNBcmVTZXQgPSBjaGVja0lmRmllbGRzQXJlU2V0KCk7XHJcbiAgICBpZiAoYWxsRmllbGRzQXJlU2V0ID09PSB0cnVlKSB7XHJcbiAgICAgIGVuYWJsZU5leHRQYXJ0T2ZGb3JtdWxhKCk7XHJcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgIG5leHRJdGVtLmZvY3VzKClcclxuICAgIH1cclxuICAgIHNldFRoaXNEYXRhVG9EZXNjcmlwdGlvbigpO1xyXG4gIH0pXHJcbn1cclxuZnVuY3Rpb24gdXNlck5pY2tBY2NlcHQgKGl0ZW0sIG5leHRJdGVtKSB7XHJcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgbGV0IGFsbEZpZWxkc0FyZVNldCA9IGNoZWNrSWZGaWVsZHNBcmVTZXQoKTtcclxuICAgIGlmIChhbGxGaWVsZHNBcmVTZXQgPT09IHRydWUpIHtcclxuICAgICAgZW5hYmxlTmV4dFBhcnRPZkZvcm11bGEoKTtcclxuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgbmV4dEl0ZW0uZm9jdXMoKVxyXG4gICAgfVxyXG4gICAgc2V0VGhpc0RhdGFUb0Rlc2NyaXB0aW9uKCk7XHJcbiAgfSlcclxufVxyXG5mdW5jdGlvbiB1c2VyTW90dG9BY2NlcHQgKGl0ZW0sIG5leHRJdGVtKSB7XHJcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgbGV0IGFsbEZpZWxkc0FyZVNldCA9IGNoZWNrSWZGaWVsZHNBcmVTZXQoKTtcclxuICAgIGlmIChhbGxGaWVsZHNBcmVTZXQgPT09IHRydWUpIHtcclxuICAgICAgZW5hYmxlTmV4dFBhcnRPZkZvcm11bGEoKTtcclxuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgbmV4dEl0ZW0uZm9jdXMoKVxyXG4gICAgfVxyXG4gICAgc2V0VGhpc0RhdGFUb0Rlc2NyaXB0aW9uKCk7XHJcbiAgfSlcclxufVxyXG5mdW5jdGlvbiBjaGVja0lmRmllbGRzQXJlU2V0KCkge1xyXG4gICAgbGV0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImltaWVcIl0nKTtcclxuICAgIGxldCB1c2VyTmljayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcnp5ZG9tZWtcIl0nKTtcclxuICAgIGxldCB1c2VyTW90dG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYVtuYW1lPVwiemF3b2xhbmllXCJdJyk7XHJcbiAgICBsZXQgdmFsdWVBID0gdXNlck5hbWUudmFsdWU7XHJcbiAgICBsZXQgdmFsdWVCID0gdXNlck5pY2sudmFsdWU7XHJcbiAgICBsZXQgdmFsdWVDID0gdXNlck1vdHRvLnZhbHVlO1xyXG4gICAgaWYgKHZhbHVlQS50cmltKCkhPT1cIlwiJiZ2YWx1ZUEudHJpbSgpLnRvTG93ZXJDYXNlKCkhPT1cImhlcm9zXCIpe1xyXG4gICAgICAgIGlmKHZhbHVlQi50cmltKCkhPT1cIlwiJiZ2YWx1ZUIudHJpbSgpLnRvTG93ZXJDYXNlKCkhPT1cIndvamVubnkgcGllc1wiKXtcclxuICAgICAgICAgIGlmKHZhbHVlQy50cmltKCkhPT1cIlwiJiZ2YWx1ZUMudHJpbSgpLnRvTG93ZXJDYXNlKCkhPT1cInphd3N6ZSB3aWVybnlcIil7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfSAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGVuYWJsZU5leHRQYXJ0T2ZGb3JtdWxhKCl7XHJcbiAgICBsZXQgdGhpc09ybmFtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nLmNvcnB1c19zZWN0aW9uX2Zvcm1fb3JuYW1lbnQtbWFya2VyJyk7XHJcbiAgICBsZXQgYWxsT3JuYW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLmNvcnB1c19zZWN0aW9uX2Zvcm1fb3JuYW1lbnQtbWFya2VyJyk7XHJcbiAgICB0aGlzT3JuYW1lbnQuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pY29ucy9wb2xlLnN2ZycpO1xyXG4gICAgdGhpc09ybmFtZW50LmNsYXNzTGlzdC5hZGQoJ2l0SXNQYXNzZWRUaHJvdWdodCcpO1xyXG4gICAgbGV0IG5leHRPcm5hbWVudCA9IGFsbE9ybmFtZW50c1sxXTtcclxuICAgIG5leHRPcm5hbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbiAgICBsZXQgcGFydE9mRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkcycpO1xyXG4gICAgcGFydE9mRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbiAgICBndWlkZVJlYWN0cyAoMSk7XHJcbn1cclxuZnVuY3Rpb24gc2V0VGhpc0RhdGFUb0Rlc2NyaXB0aW9uKCl7XHJcbiAgc2V0TmFtZVRvRGVzKCk7XHJcbiAgc2V0Tmlja25hbWVUb0RlcygpO1xyXG4gIHNldFNlbnRlbmNlVG9EZXMoKTtcclxufSIsImltcG9ydCBpdGVyYXRvck9mUG9pbnRzTGVmdCBmcm9tICcuL2FzaWRlLmpzJztcclxuaW1wb3J0IHtndWlkZVJlYWN0c30gZnJvbSAnLi9hc2lkZS5qcyc7XHJcbid1c2Ugc3RyaWN0JztcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGNob29zZVlvdXJBdmF0YXIpXHJcbmZ1bmN0aW9uIGNob29zZVlvdXJBdmF0YXIgKCkge1xyXG4gIGxldCBjb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXInKVxyXG4gIGxldCBhdmF0YXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3JhZGlvLWxhYi1jb250YWluZXInKVxyXG4gIGxldCBhbW91bnQgPSBhdmF0YXJzLmxlbmd0aFxyXG4gIGZvciAobGV0IGkgPSAwO2kgPCBhbW91bnQ7aSsrKSB7XHJcbiAgICBsZXQgaXRlbSA9IGF2YXRhcnNbaV1cclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNob29zZVRoaXNBdmF0YXIoaXRlbSwgYXZhdGFycywgYW1vdW50KVxyXG4gICAgICBzZXRPbmVQYXJ0T2ZBdHRhY2tEZXNjcmlwdGlvbihpKVxyXG4gICAgICBzeW5jaHJvbml6ZUJhY2tncm91bmRzT2ZPdGhlck9wdHMoY29udGFpbmVycylcclxuICAgICAgZW5hYmxlQXR0YWNrcyhpKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gY2hvb3NlVGhpc0F2YXRhciAoaXRlbSwgYXZhdGFycywgYW1vdW50KSB7XHJcbiAgaXRlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmNoZWNrZWQgPSB0cnVlO1xyXG4gIGZvciAobGV0IGk9MDsgaTxhbW91bnQ7IGkrKyl7XHJcbiAgICAgIGxldCBhdiA9IGF2YXRhcnNbaV07XHJcbiAgICAgIGF2LmNsYXNzTGlzdC5yZW1vdmUoJ2lzQ2xpY2tlZCcpO1xyXG4gIH1cclxuICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2lzQ2xpY2tlZCcpO1xyXG4gIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0LmRlbGV0YXRvcigpO1xyXG4gIGd1aWRlUmVhY3RzKDIpO1xyXG59XHJcbmZ1bmN0aW9uIHNldE9uZVBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uIChpKSB7XHJcbiAgbGV0IGRlc1BhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwIHNwYW4uLS1kZXNfa2xhc2EnKVxyXG4gIGxldCBhcnJheSA9IFtcclxuICAgICcgdWRlcnplbmllIGJyb25pxIUgYnJ1dGFsbsSFLicsXHJcbiAgICAnIHVkZXJ6ZW5pZSBicm9uacSFIHN0cnplbGVja8SFLicsXHJcbiAgICAnIHVkZXJ6ZW5pZSBicm9uacSFIHpkcmFkemllY2vEhS4nLFxyXG4gICAgJyB1ZGVyemVuaWUgYnJvbmnEhSBzemFsZcWEY3rEhS4nLFxyXG4gICAgJyB1ZGVyemVuaWUgYnJvbmnEhSBzemFybGF0YcWEc2vEhS4nLFxyXG4gICAgJyB1ZGVyemVuaWUgYnJvbmnEhSBsdWIgY3p5bWtvbHdpZWssIGNvIHdwYWRuaWUga2FyxYJvd2kgdyDFgmFwc2thLidcclxuICBdXHJcbiAgZGVzUGFydC5pbm5lclRleHQgPSBhcnJheVtpXVxyXG4gIGxldCBuZXh0RGVzUGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Agc3Bhbi4tLWRlc19lcGl0ZXQnKTtcclxuICBuZXh0RGVzUGFydC5jbGFzc0xpc3QuYWRkKCdpdHNIaWRkZW4nKTtcclxuICBsZXQgYW5vdGhlck5leHREZXNQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3p5d2lvbCcpO1xyXG4gIGFub3RoZXJOZXh0RGVzUGFydC5jbGFzc0xpc3QuYWRkKCdpdHNIaWRkZW4nKTtcclxuICBsZXQgb3RoZXJBbm90aGVyTmV4dERlc1BhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfaW1pZScpO1xyXG4gIG90aGVyQW5vdGhlck5leHREZXNQYXJ0LmNsYXNzTGlzdC5hZGQoJ2l0c0hpZGRlbicpO1xyXG4gIGxldCBwcnpEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfcHJ6eWRvbWVrJyk7XHJcbiAgbGV0IHpkYURlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc196ZGFuaWUnKTtcclxuICBwcnpEZXMuY2xhc3NMaXN0LmFkZCgnaXRzSGlkZGVuJyk7XHJcbiAgemRhRGVzLmNsYXNzTGlzdC5hZGQoJ2l0c0hpZGRlbicpO1xyXG59XHJcbmZ1bmN0aW9uIHN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0cyAoY29udGFpbmVycykge1xyXG4gIGxldCBhbW91bnQgPSBjb250YWluZXJzLmxlbmd0aFxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50OyBpKyspIHtcclxuICAgIGxldCBjb250ID0gY29udGFpbmVyc1tpXVxyXG4gICAgbGV0IG9wdGlvbnMgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpXHJcbiAgICBsZXQgaXRlciA9IG9wdGlvbnMubGVuZ3RoXHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGl0ZXI7IHgrKykge1xyXG4gICAgICBsZXQgYmVsdCA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdCcpW3hdXHJcbiAgICAgIGJlbHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2luaGVyaXQnXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGVuYWJsZUF0dGFja3MgKGkpIHtcclxuICBsZXQgZW5hYmxlZEF0dGFja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcicpXHJcbiAgZm9yIChsZXQgeCA9IDA7IHggPCA2OyB4KyspIHtcclxuICAgIGxldCBkaXNhYmxlZEl0ZW0gPSBlbmFibGVkQXR0YWNrc1t4XVxyXG4gICAgZGlzYWJsZWRJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2VuYWJsZWQnKVxyXG4gICAgbGV0IG9wdHMgPSBkaXNhYmxlZEl0ZW0ucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJylcclxuICAgIGxldCBhbW91bnQgPSBvcHRzLmxlbmd0aFxyXG4gICAgZm9yIChsZXQgaiA9IDA7aiA8IGFtb3VudDtqKyspIHtcclxuICAgICAgaWYgKG9wdHNbal0uc2VsZWN0ZWQgPT09IHRydWUpIHtcclxuICAgICAgICBvcHRzW2pdLnNlbGVjdGVkID0gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBsZXQgZW5hYmxlZEF0dGFjayA9IGVuYWJsZWRBdHRhY2tzW2ldXHJcbiAgZW5hYmxlZEF0dGFjay5jbGFzc0xpc3QuYWRkKCdlbmFibGVkJylcclxufVxyXG4iLCJpbXBvcnQgaXRlcmF0b3JPZlBvaW50c0xlZnQgZnJvbSAnLi9hc2lkZS5qcyc7XHJcbmltcG9ydCB7Z3VpZGVSZWFjdHN9IGZyb20gJy4vYXNpZGUuanMnO1xyXG4ndXNlIHN0cmljdCc7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0aWFsaXplQXR0YWNrc1BhcnQpO1xyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZUF0dGFja3NQYXJ0KCkge1xyXG4gICAgbGV0IGNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcicpO1xyXG4gICAgbGV0IGFtb3VudCA9IGNvbnRhaW5lcnMubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xyXG4gICAgICAgIGxldCBjb250ID0gY29udGFpbmVyc1tpXTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyk7XHJcbiAgICAgICAgbGV0IGl0ZXIgPSBvcHRpb25zLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGl0ZXI7IHgrKykge1xyXG4gICAgICAgICAgICBsZXQgb3B0ID0gb3B0aW9uc1t4XTtcclxuICAgICAgICAgICAgb3B0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0Jywgb25NT3V0KTtcclxuICAgICAgICAgICAgb3B0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBvbk1FbnRlcik7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBvbk1FbnRlcigpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvcHQuc2VsZWN0ZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3luY2hyb25pemVUaGlzQmNrZ3JXaXRoSW1hZ2VCZWx0SG92ZXJCY2tncihvcHQsIGNvbnQsIHgsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gb25NT3V0KCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdC5zZWxlY3RlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBzeW5jaHJvbml6ZVRoaXNCY2tncldpdGhJbWFnZUJlbHRIb3ZlckJja2dyKG9wdCwgY29udCwgeCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBvcHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVyYXRvck9mUG9pbnRzTGVmdC5pdGVyYXRvcihjb250LCB4KTtcclxuICAgICAgICAgICAgICAgIGd1aWRlUmVhY3RzKDMpO1xyXG4gICAgICAgICAgICAgICAgc3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRucyhjb250LCBpdGVyKTtcclxuICAgICAgICAgICAgICAgIHN5bmNocm9uaXplVGhpc0Jja2dyV2l0aEltYWdlQmVsdEhvdmVyQmNrZ3Iob3B0LCBjb250LCB4LCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRucyhjb250LCBpdGVyKSB7XHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGl0ZXI7IHgrKykge1xyXG4gICAgICAgIGxldCBiZWx0ID0gY29udC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0JylbeF07XHJcbiAgICAgICAgYmVsdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImluaGVyaXRcIjtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3luY2hyb25pemVUaGlzQmNrZ3JXaXRoSW1hZ2VCZWx0SG92ZXJCY2tncihvcHQsIGNvbnQsIHgsIGlzRW50ZXIpIHtcclxuICAgIGxldCBiZWx0ID0gY29udC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0JylbeF07XHJcbiAgICBpZiAoaXNFbnRlciA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGxldCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG9wdCk7XHJcbiAgICAgICAgbGV0IGJjZ0NvbCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tncm91bmQtY29sb3InKTtcclxuICAgICAgICBiZWx0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJjZ0NvbDtcclxuICAgIH0gZWxzZSBpZiAoaXNFbnRlciA9PT0gZmFsc2UpIHtcclxuICAgICAgICBiZWx0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiaW5oZXJpdFwiO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IGl0ZXJhdG9yT2ZQb2ludHNMZWZ0IGZyb20gJy4vYXNpZGUuanMnO1xyXG4ndXNlIHN0cmljdCc7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0KTtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBsZXQgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkcy0yX2ZpZWxkc2V0LWRfY29udGFpbmVyX2F0cnliIC4tLWJlbHRfaWNvbi1jb250YWluZXInKTtcclxuICAgIGxldCBiZWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkcy0yX2ZpZWxkc2V0LWRfY29udGFpbmVyX2F0cnliIC4tLWJlbHRfYm9keS1jb250YWluZXJfYm9keScpO1xyXG4gICAgbGV0IGl0ZXIgPSBidG5zLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcjsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGkgPiA0KSB7XHJcbiAgICAgICAgICAgIGxldCBhdHRyeWIgPSBidG5zW2ldO1xyXG4gICAgICAgICAgICBsZXQgYmVsdCA9IGJlbHRzW2ldO1xyXG4gICAgICAgICAgICBhdHRyeWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3JPZlBvaW50c0xlZnQubGVmdCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRQb2ludChiZWx0KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvaW50KGJlbHQpIHtcclxuICAgIGxldCBJTUcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJTUcnKTtcclxuICAgIElNRy5zZXRBdHRyaWJ1dGUoJ3NyYycsICdpY29ucy9pa29uYS1wb3RlZy5zdmcnKTtcclxuICAgIGJlbHQuYXBwZW5kQ2hpbGQoSU1HKTtcclxuICAgIC8vYW1vdW50T2ZQb2ludHMtLTtcclxuICAgIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0LmxlZnQtLTtcclxuICAgIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0LmVxdWFsaXphdG9yKCk7XHJcbiAgICBJTUcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZGVsZXRlVGhpc0lNRyhJTUcpXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVUaGlzSU1HKHgpIHtcclxuICAgIHgucmVtb3ZlKCk7XHJcbiAgICAvL2Ftb3VudE9mUG9pbnRzKys7XHJcbiAgICBpdGVyYXRvck9mUG9pbnRzTGVmdC5sZWZ0Kys7XHJcbiAgICBpdGVyYXRvck9mUG9pbnRzTGVmdC5lcXVhbGl6YXRvcigpO1xyXG59IiwiaW1wb3J0IHtndWlkZVJlYWN0c30gZnJvbSAnLi9hc2lkZS5qcyc7XHJcblwidXNlIHN0cmljdFwiO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0aWFsaXplVGhpc1NlY3Rpb24pO1xyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZVRoaXNTZWN0aW9uKCkge1xyXG4gICAgbGV0IGxpc3RBID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc2V0LWMgI3phc2xvbmFcIlxyXG4gICAgKTtcclxuICAgIGxldCBsaXN0QiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNldC1jICNwYW5jZXJ6XCJcclxuICAgICk7XHJcbiAgICBsZXQgaW1hZ2VzQSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNldC1jX2ltZ3NfaW1nLmFcIlxyXG4gICAgKTtcclxuICAgIGxldCBpbWFnZXNCID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICBcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc2V0LWNfaW1nc19pbWcuYlwiXHJcbiAgICApO1xyXG4gICAgbGV0IG9wdHNBID0gbGlzdEEucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvblwiKTtcclxuICAgIGxldCBvcHRzQiA9IGxpc3RCLnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb25cIik7XHJcbiAgICBkeW5hbWl6ZVRoaXNMaXN0KGxpc3RBLCBvcHRzQSwgaW1hZ2VzQSwgbGlzdEIpO1xyXG4gICAgZHluYW1pemVUaGlzTGlzdChsaXN0Qiwgb3B0c0IsIGltYWdlc0IsIGxpc3RBKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHluYW1pemVUaGlzTGlzdChsaXN0LCBvcHRzLCBpbWFnZXMsIG90aGVyTGlzdCkge1xyXG4gICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBsaXN0LnZhbHVlO1xyXG4gICAgICAgIGxldCBpdGVyID0gb3B0cy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpdGVyIC0gMTsgaisrKSB7XHJcbiAgICAgICAgICAgIGltYWdlc1tqXS5jbGFzc0xpc3QuYWRkKFwiaXRJc1Vuc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBvcHQgPSBvcHRzW2ldO1xyXG4gICAgICAgICAgICBsZXQgb3B0VmFsdWUgPSBvcHQudmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gb3B0VmFsdWUgJiYgaSAhPT0gMykge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJpdElzVW5zZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbmFibGVOZXh0Rm9ybVBhcnQobGlzdCwgb3RoZXJMaXN0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlbmFibGVOZXh0Rm9ybVBhcnQobGlzdCwgb3RoZXJMaXN0KSB7XHJcbiAgICBsZXQgYSA9IGxpc3QudmFsdWU7XHJcbiAgICBsZXQgYiA9IG90aGVyTGlzdC52YWx1ZTtcclxuICAgIGlmIChhICE9PSBcIlwiICYmIGIgIT09IFwiXCIpIHtcclxuICAgICAgICBsZXQgbmV4dFBhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHMtMicpO1xyXG4gICAgICAgIG5leHRQYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2l0SXNIaWRkZW4nKTtcclxuICAgICAgICBsZXQgYWxsT3JuYW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLmNvcnB1c19zZWN0aW9uX2Zvcm1fb3JuYW1lbnQtbWFya2VyJyk7XHJcbiAgICAgICAgbGV0IHRoaXNPcm5hbWVudCA9IGFsbE9ybmFtZW50c1syXTtcclxuICAgICAgICB0aGlzT3JuYW1lbnQuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pY29ucy9wb2xlLnN2ZycpO1xyXG4gICAgICAgIHRoaXNPcm5hbWVudC5jbGFzc0xpc3QuYWRkKCdpdElzUGFzc2VkVGhyb3VnaHQnKTtcclxuICAgICAgICBsZXQgbmV4dE9ybmFtZW50ID0gYWxsT3JuYW1lbnRzWzNdO1xyXG4gICAgICAgIG5leHRPcm5hbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbiAgICAgICAgZ3VpZGVSZWFjdHMoNSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgaXRlcmF0b3JPZlBvaW50c0xlZnQgZnJvbSAnLi9hc2lkZS5qcyc7XHJcbmltcG9ydCB7Z3VpZGVSZWFjdHN9IGZyb20gJy4vYXNpZGUuanMnO1xyXG4ndXNlIHN0cmljdCc7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0aWFsaXplVGhpc1NlbGVjdClcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVUaGlzU2VsZWN0KCkge1xyXG4gICAgbGV0IG9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHMtMl9maWVsZHNldC1kX2NvbnRhaW5lcl9tb2NlJyk7XHJcbiAgICBsZXQgaXRlciA9IG9wdGlvbnMubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVyOyBpKyspIHtcclxuICAgICAgICBsZXQgb3B0ID0gb3B0aW9uc1tpXTtcclxuICAgICAgICBvcHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGl0SXNDbGlja2VkKG9wdCwgb3B0aW9ucywgaXRlciwgaSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBpdElzQ2xpY2tlZChvcHQsIG9wdHMsIGl0ZXIsIGkpIHtcclxuICAgIGxldCBjaGVja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwibW9jLXBpZXRub1wiXScpO1xyXG4gICAgbGV0IGNvc3RPZlRoaXMgPSBbMSwyLDIsMSwzLDFdO1xyXG4gICAgaWYgKGNoZWNrc1tpXS5jaGVja2VkPT09dHJ1ZSl7XHJcbiAgICAgICAgY2hlY2tzW2ldLmNoZWNrZWQ9ZmFsc2U7XHJcbiAgICAgICAgaXRlcmF0b3JPZlBvaW50c0xlZnQuaXRlcmF0b3JCKGNvc3RPZlRoaXNbaV0pO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgY2hlY2tzW2ldLmNoZWNrZWQ9dHJ1ZTtcclxuICAgICAgICBpdGVyYXRvck9mUG9pbnRzTGVmdC5kZWxldGF0b3JCKGNvc3RPZlRoaXNbaV0pO1xyXG4gICAgICAgIGd1aWRlUmVhY3RzKDYpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBpdGVyOyBqKyspIHtcclxuICAgICAgICBpZiAoY2hlY2tzW2pdLmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgb3B0c1tqXS5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGVja3Nbal0uY2hlY2tlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgb3B0c1tqXS5jbGFzc0xpc3QuYWRkKCdpdElzSGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0aWFsaXplR3VpZGUiLCJoaWRlVXNlckd1aWRlIiwib3JubSIsInF1ZXJ5U2VsZWN0b3IiLCJyb3RhdGVBbmRIaWRlQXNpZGUiLCJidG4iLCJjb250cm9sbGVyIiwiYXNpZGUiLCJzdHlsZSIsInRyYW5zZm9ybSIsImF3Iiwib2Zmc2V0V2lkdGgiLCJhaCIsIm9mZnNldEhlaWdodCIsIndzcCIsIngiLCJ5IiwieiIsImxlZnQiLCJ0b3AiLCJndWlkZVJlYWN0cyIsImkiLCJndWlkZSIsInRpdGxlIiwiYXJyIiwiaW5uZXJUZXh0IiwiYXJyQiIsIml0ZXJhdG9yT2ZQb2ludHNMZWZ0Iiwic3BlbnRPbkF0dGFjayIsIml0ZXJhdG9yIiwiY29udCIsIml0ZXJEZXZpY2UiLCJvcHQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicG9pbnRzIiwiYW1vdW50IiwibGVuZ3RoIiwiYmlsYW5zIiwiZGVsZXRhdG9yIiwiaXRlcmF0b3JCIiwiaW50ZWdlciIsImRlbGV0YXRvckIiLCJlcXVhbGl6YXRvciIsImluaXRpYWxpemUiLCJvcHRzIiwiaXRlbSIsInNldElNRyIsImVuYWJsZVN0cmlrZU5hbWVQYXJ0Iiwic2V0U3RyaWtlTmFtZVRvRGVzIiwic2V0UGFydE9mQXR0YWNrRGVzY3JpcHRpb24iLCJzZXRGb3JjZURlcyIsIm9ubHlPbmNlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZGVzUGFydCIsImFycmF5IiwiYmVsdCIsImltYWciLCJhdHRyeWIiLCJnZXRBdHRyaWJ1dGUiLCJpY29uIiwic2V0QXR0cmlidXRlIiwiYWxsSU1HcyIsInN0YW5kYXJ0IiwiaW1hZ2VUb0RlbCIsInJlbW92ZUNoaWxkIiwiaiIsInRoZUlNRyIsInNvdXJjZUlNRyIsIm5ld0lNRyIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImlucCIsInN0ck5hbWUiLCJ2YWx1ZSIsInNob3dBbGxEZXMiLCJzZXROZXh0UGFydE9mRm9ybXVsYSIsIml0bSIsInRyaW0iLCJJTUdzIiwiaXRlciIsInN0cm5nIiwiSU1HIiwicHVzaCIsInN0cmluZ1RvU2V0Iiwiam9pbiIsInp5d0RlcyIsImltaURlcyIsInByekRlcyIsInpkYURlcyIsInNldE5hbWVUb0RlcyIsIm5hbSIsInNldE5pY2tuYW1lVG9EZXMiLCJpbnBCIiwic3VybmFtIiwic2V0U2VudGVuY2VUb0RlcyIsImFsbERlcyIsInRleHRBcmVhIiwiYXJlYVZhbHVlIiwiZW5hYmxlTmV4dFBhcnRPZkZvcm0iLCJuZXh0UGFydCIsImFsbE9ybmFtZW50cyIsInRoaXNPcm5hbWVudCIsImFkZCIsIm5leHRPcm5hbWVudCIsIm1hcmdpbkJvdHRvbSIsInpJbmRleCIsInVzZXJGbG93VmlhRmlyc3RGaWVsZHNldCIsInVzZXJOYW1lIiwidXNlck5pY2siLCJ1c2VyTW90dG8iLCJ1c2VyTmFtZUFjY2VwdCIsInVzZXJOaWNrQWNjZXB0IiwidXNlck1vdHRvQWNjZXB0IiwibmV4dEl0ZW0iLCJldmVudCIsImFsbEZpZWxkc0FyZVNldCIsImNoZWNrSWZGaWVsZHNBcmVTZXQiLCJlbmFibGVOZXh0UGFydE9mRm9ybXVsYSIsImtleUNvZGUiLCJmb2N1cyIsInNldFRoaXNEYXRhVG9EZXNjcmlwdGlvbiIsInZhbHVlQSIsInZhbHVlQiIsInZhbHVlQyIsInRvTG93ZXJDYXNlIiwicGFydE9mRm9ybSIsImNob29zZVlvdXJBdmF0YXIiLCJjb250YWluZXJzIiwiYXZhdGFycyIsImNob29zZVRoaXNBdmF0YXIiLCJzZXRPbmVQYXJ0T2ZBdHRhY2tEZXNjcmlwdGlvbiIsInN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0cyIsImVuYWJsZUF0dGFja3MiLCJjaGVja2VkIiwiYXYiLCJuZXh0RGVzUGFydCIsImFub3RoZXJOZXh0RGVzUGFydCIsIm90aGVyQW5vdGhlck5leHREZXNQYXJ0Iiwib3B0aW9ucyIsImJhY2tncm91bmRDb2xvciIsImVuYWJsZWRBdHRhY2tzIiwiZGlzYWJsZWRJdGVtIiwic2VsZWN0ZWQiLCJlbmFibGVkQXR0YWNrIiwiaW5pdGlhbGl6ZUF0dGFja3NQYXJ0Iiwib25NT3V0Iiwib25NRW50ZXIiLCJzeW5jaHJvbml6ZVRoaXNCY2tncldpdGhJbWFnZUJlbHRIb3ZlckJja2dyIiwic3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRucyIsImlzRW50ZXIiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiYmNnQ29sIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImluaXQiLCJidG5zIiwiYmVsdHMiLCJhZGRQb2ludCIsImRlbGV0ZVRoaXNJTUciLCJpbml0aWFsaXplVGhpc1NlY3Rpb24iLCJsaXN0QSIsImxpc3RCIiwiaW1hZ2VzQSIsImltYWdlc0IiLCJvcHRzQSIsIm9wdHNCIiwiZHluYW1pemVUaGlzTGlzdCIsImxpc3QiLCJpbWFnZXMiLCJvdGhlckxpc3QiLCJvcHRWYWx1ZSIsImVuYWJsZU5leHRGb3JtUGFydCIsImEiLCJiIiwiaW5pdGlhbGl6ZVRoaXNTZWxlY3QiLCJpdElzQ2xpY2tlZCIsImNoZWNrcyIsImNvc3RPZlRoaXMiXSwibWFwcGluZ3MiOiI7OztJQUFBQSxTQUFTQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOENDLGVBQTlDOztJQUVBLFNBQVNBLGVBQVQsR0FBNEI7SUFDMUJDO0lBQ0E7SUFDRDtJQUNELFNBQVNBLGFBQVQsR0FBMEI7SUFDeEIsTUFBSUMsT0FBT0osU0FBU0ssYUFBVCxDQUF1QixhQUF2QixDQUFYO0lBQ0FELE9BQUtILGdCQUFMLENBQXNCLE9BQXRCLEVBQStCSyxrQkFBL0I7SUFDQSxNQUFJQyxNQUFNUCxTQUFTSyxhQUFULENBQXVCLGtCQUF2QixDQUFWO0lBQ0FFLE1BQUlOLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCSyxrQkFBOUI7SUFDRDtJQUNELElBQUlFLGFBQWEsQ0FBakI7SUFDQSxTQUFTRixrQkFBVCxHQUErQjtJQUM3QixNQUFJRyxRQUFRVCxTQUFTSyxhQUFULENBQXVCLE9BQXZCLENBQVo7SUFDQSxNQUFJRyxlQUFlLENBQW5CLEVBQXNCO0lBQ3BCQyxVQUFNQyxLQUFOLENBQVlDLFNBQVosR0FBd0IsZUFBeEI7SUFDQSxRQUFJQyxLQUFLSCxNQUFNSSxXQUFmO0lBQ0EsUUFBSUMsS0FBS0wsTUFBTU0sWUFBZjtJQUNBLFFBQUlDLE1BQU1GLEtBQU0sQ0FBQ0YsS0FBS0UsRUFBTixJQUFZLENBQTVCO0lBQ0EsUUFBSUcsSUFBS0QsTUFBTSxDQUFDLENBQVIsR0FBYSxFQUFyQjtJQUNBLFFBQUlFLElBQUlELElBQUksSUFBWjtJQUNBLFFBQUlFLElBQUssQ0FBQ1AsS0FB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
