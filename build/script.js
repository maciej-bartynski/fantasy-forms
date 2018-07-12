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
        item.addEventListener('keypress', function (event) {
            if (event.keyCode === 13) {
                nextItem.focus();
            }
        });
    }
    function userNickAccept(item, nextItem) {
        item.addEventListener('keypress', function (event) {
            if (event.keyCode === 13) {
                nextItem.focus();
            }
        });
    }
    function userMottoAccept(item, nextItem) {
        item.addEventListener('keypress', function (event) {
            if (event.keyCode === 13) {
                nextItem.focus();
            }
        });
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

    document.addEventListener("DOMContentLoaded", initialize);
    function initialize() {
      var opts = document.querySelectorAll(".corpus_section_form_fields_fieldset-b_container_select-container_select-list option");
      var amount = opts.length;

      var _loop = function _loop(i) {
        var item = opts[i];
        item.addEventListener("click", function () {
          setIMG(i);
          setStrikeNameToDes(i);
        });
      };

      for (var i = 0; i < amount; i++) {
        _loop(i);
      }
    }
    function setPartOfAttackDescription(i) {
      var desPart = document.querySelector("p span.--des_epitet");
      var array = ["brutalne", "nieprzewidywalne", "wyćwiczone", "niezawodne", "precyzyjne", "zmasowane", "podstępne", "wyrachowane", "zdradzieckie", "szaleńcze", "opracowane w laboratorium alchemicznym", "niepowstrzymane", "władcze", "mroczne", "tajemne", "wściekłe", "wspierane mocą otchłani", "przesycone złą mocą"];
      desPart.innerText = array[i];
    }
    function setIMG(i) {
      var belt = document.querySelectorAll(".corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt")[i];
      var imag = belt.querySelectorAll("img")[0];
      var attryb = imag.getAttribute("src");
      var icon = document.querySelector(".--plate_img_icon");
      icon.setAttribute("src", attryb);
      var allIMGs = belt.querySelectorAll("img").length;
      var standart = document.querySelector(".--standart_img_bckg");
      while (standart.querySelector("IMG") !== null) {
        var imageToDel = standart.querySelector("IMG");
        standart.removeChild(imageToDel);
      }
      for (var j = 0; j < allIMGs; j++) {
        if (j > 0) {
          var theIMG = belt.querySelectorAll("img")[j];
          var sourceIMG = theIMG.getAttribute("src");
          var newIMG = document.createElement("img");
          newIMG.setAttribute("src", sourceIMG);
          standart.appendChild(newIMG);
        }
      }
    }
    function setNameToDes() {
      var inp = document.querySelector('input[name="imie"]');
      var nam = inp.value;
      var inpB = document.querySelector('input[name="przydomek"]');
      var surnam = inpB.value;
      var item = document.querySelector(".--des_imie");
      item.innerText = nam + " " + surnam;
    }
    function setStrikeNameToDes(i) {
      var inp = document.querySelector('input[name="nazwauderzenia"]');
      inp.addEventListener("change", function () {
        var strName = inp.value;
        var item = document.querySelector(".--des_nazwa-ciosu");
        item.innerText = strName;
        setPartOfAttackDescription(i);
        setNameToDes();
        setForceDes(i);
        showAllDes();
      });
    }
    function setForceDes(i) {
      var belt = document.querySelectorAll(".corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt")[i];
      var IMGs = belt.querySelectorAll("img");
      var iter = IMGs.length;
      var strng = [];
      for (var j = 0; j < iter; j++) {
        var IMG = IMGs[j];
        var attryb = IMG.getAttribute("src");
        if (j !== 0) {
          if (attryb === "icons/bron-barba.svg") {
            strng.push("dodatkową mocą uderzeniową");
          } else if (attryb === "icons/bron-czar.svg") {
            strng.push("dodatkową mocą czarnoksięską");
          } else if (attryb === "icons/bron-strz.svg") {
            strng.push("dodatkowym kunsztem strzeleckim");
          } else if (attryb === "icons/bron-szal.svg") {
            strng.push("dodatkowym szaleństwem");
          } else if (attryb === "icons/bron-zdra.svg") {
            strng.push("niespodzianym zdradliwym ciosem");
          } else if (attryb === "icons/zyw-ogien.svg") {
            strng.push("żywiołem ognia");
          } else if (attryb === "icons/zyw-rozklad.svg") {
            strng.push("żywiołem rozkładu");
          } else if (attryb === "icons/zyw-wod.svg") {
            strng.push("żywiołem wody");
          } else if (attryb === "icons/zyw-zmiana.svg") {
            strng.push("żywiołem zmiany");
          } else if (attryb === "icons/zyw-zywia.svg") {
            strng.push("żywiołem żywii");
          } else {
            strng.push("własną mądrością żywiołów i talentów");
          }
        }
      }
      var stringToSet = strng.join(", ");
      var spnDes = document.querySelector(".--des_zywiol");
      spnDes.innerText = stringToSet + ".";
    }
    function showAllDes() {
      var allDes = document.querySelector(".--des");
      allDes.classList.remove("itsHidden");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyIuLi9zb3VyY2UvZHluYW1pY3MvcG9kc3Rhd3kuanMiLCIuLi9zb3VyY2UvZHluYW1pY3Mva2xhc2EuanMiLCIuLi9zb3VyY2UvZHluYW1pY3MvYXRha2kuanMiLCIuLi9zb3VyY2UvZHluYW1pY3MvYXRha2ktc2V0LXR4dC5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9hdHRyeWJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpe1xyXG4gICAgdXNlckZsb3dWaWFGaXJzdEZpZWxkc2V0KCk7XHJcbn0pXHJcbmZ1bmN0aW9uIHVzZXJGbG93VmlhRmlyc3RGaWVsZHNldCgpe1xyXG4gICAgbGV0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImltaWVcIl0nKTtcclxuICAgIGxldCB1c2VyTmljayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcnp5ZG9tZWtcIl0nKTtcclxuICAgIGxldCB1c2VyTW90dG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYVtuYW1lPVwiemF3b2xhbmllXCJdJyk7XHJcbiAgICB1c2VyTmFtZUFjY2VwdCh1c2VyTmFtZSwgdXNlck5pY2spO1xyXG4gICAgdXNlck5pY2tBY2NlcHQodXNlck5pY2ssIHVzZXJNb3R0byk7XHJcbiAgICB1c2VyTW90dG9BY2NlcHQodXNlck1vdHRvLCB1c2VyTmFtZSk7XHJcbn1cclxuZnVuY3Rpb24gdXNlck5hbWVBY2NlcHQoaXRlbSwgbmV4dEl0ZW0pe1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGlmKGV2ZW50LmtleUNvZGU9PT0xMyl7XHJcbiAgICAgICAgICAgIG5leHRJdGVtLmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gdXNlck5pY2tBY2NlcHQoaXRlbSwgbmV4dEl0ZW0pe1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGlmKGV2ZW50LmtleUNvZGU9PT0xMyl7XHJcbiAgICAgICAgICAgIG5leHRJdGVtLmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gdXNlck1vdHRvQWNjZXB0KGl0ZW0sIG5leHRJdGVtKXtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBpZihldmVudC5rZXlDb2RlPT09MTMpe1xyXG4gICAgICAgICAgICBuZXh0SXRlbS5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59IiwiXHJcbid1c2Ugc3RyaWN0JztcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGNob29zZVlvdXJBdmF0YXIpO1xyXG5mdW5jdGlvbiBjaG9vc2VZb3VyQXZhdGFyKCl7XHJcbiAgICBsZXQgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyJyk7XHJcbiAgICBsZXQgYXZhdGFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9yYWRpby1sYWItY29udGFpbmVyJyk7XHJcbiAgICBsZXQgYW1vdW50ID0gYXZhdGFycy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpPTA7aTxhbW91bnQ7aSsrKXtcclxuICAgICAgICBsZXQgaXRlbSA9IGF2YXRhcnNbaV07XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY2hvb3NlVGhpc0F2YXRhcihpdGVtKTtcclxuICAgICAgICAgICAgc2V0T25lUGFydE9mQXR0YWNrRGVzY3JpcHRpb24oaSk7XHJcbiAgICAgICAgICAgIHN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0cyhjb250YWluZXJzKTtcclxuICAgICAgICAgICAgZW5hYmxlQXR0YWNrcyhpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjaG9vc2VUaGlzQXZhdGFyKGl0ZW0pIHtcclxuICAgIGl0ZW0ucXVlcnlTZWxlY3RvcignaW5wdXQnKS5jaGVja2VkPXRydWU7XHJcbn1cclxuZnVuY3Rpb24gc2V0T25lUGFydE9mQXR0YWNrRGVzY3JpcHRpb24oaSl7XHJcbiAgICBsZXQgZGVzUGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Agc3Bhbi4tLWRlc19rbGFzYScpO1xyXG4gICAgbGV0IGFycmF5ID0gW1xyXG4gICAgICAgICdicnV0YWxuxIUuJyxcclxuICAgICAgICAnc3RyemVsZWNrxIUuJyxcclxuICAgICAgICAnemRyYWR6aWVja8SFLicsXHJcbiAgICAgICAgJ3N6YWxlxYRjesSFLicsXHJcbiAgICAgICAgJ3N6YXJsYXRhxYRza8SFLicsXHJcbiAgICAgICAgJ2x1YiBjenlta29sd2llaywgY28gd3BhZG5pZSBrYXLFgm93aSB3IMWCYXBza2EuJ1xyXG4gICAgXVxyXG4gICAgZGVzUGFydC5pbm5lclRleHQ9YXJyYXlbaV07XHJcbn1cclxuZnVuY3Rpb24gc3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRzKGNvbnRhaW5lcnMpe1xyXG4gICAgbGV0IGFtb3VudCA9IGNvbnRhaW5lcnMubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xyXG4gICAgICAgIGxldCBjb250ID0gY29udGFpbmVyc1tpXTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyk7XHJcbiAgICAgICAgbGV0IGl0ZXIgPSBvcHRpb25zLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGl0ZXI7IHgrKykge1xyXG4gICAgICAgICAgICBsZXQgYmVsdCA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdCcpW3hdO1xyXG4gICAgICAgICAgICBiZWx0LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cImluaGVyaXRcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZW5hYmxlQXR0YWNrcyhpKSB7XHJcbiAgICBsZXQgZW5hYmxlZEF0dGFja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcicpO1xyXG4gICAgZm9yIChsZXQgeD0wOyB4PDY7IHgrKyl7XHJcbiAgICAgICAgbGV0IGRpc2FibGVkSXRlbSA9IGVuYWJsZWRBdHRhY2tzW3hdO1xyXG4gICAgICAgIGRpc2FibGVkSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdlbmFibGVkJyk7XHJcbiAgICAgICAgbGV0IG9wdHMgPSBkaXNhYmxlZEl0ZW0ucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyk7XHJcbiAgICAgICAgbGV0IGFtb3VudCA9IG9wdHMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGo9MDtqPGFtb3VudDtqKyspe1xyXG4gICAgICAgICAgICBpZiAob3B0c1tqXS5zZWxlY3RlZD09PXRydWUpe1xyXG4gICAgICAgICAgICAgICAgb3B0c1tqXS5zZWxlY3RlZD1mYWxzZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgZW5hYmxlZEF0dGFjayA9IGVuYWJsZWRBdHRhY2tzW2ldO1xyXG4gICAgZW5hYmxlZEF0dGFjay5jbGFzc0xpc3QuYWRkKCdlbmFibGVkJyk7XHJcbn0iLCIndXNlIHN0cmljdCc7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0aWFsaXplQXR0YWNrc1BhcnQpO1xyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZUF0dGFja3NQYXJ0KCkge1xyXG4gICAgbGV0IGNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcicpO1xyXG4gICAgbGV0IGFtb3VudCA9IGNvbnRhaW5lcnMubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xyXG4gICAgICAgIGxldCBjb250ID0gY29udGFpbmVyc1tpXTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyk7XHJcbiAgICAgICAgbGV0IGl0ZXIgPSBvcHRpb25zLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGl0ZXI7IHgrKykge1xyXG4gICAgICAgICAgICBsZXQgb3B0ID0gb3B0aW9uc1t4XTtcclxuICAgICAgICAgICAgb3B0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0Jywgb25NT3V0KTtcclxuICAgICAgICAgICAgb3B0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBvbk1FbnRlcik7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBvbk1FbnRlcigpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvcHQuc2VsZWN0ZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3luY2hyb25pemVUaGlzQmNrZ3JXaXRoSW1hZ2VCZWx0SG92ZXJCY2tncihvcHQsIGNvbnQsIHgsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gb25NT3V0KCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdC5zZWxlY3RlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBzeW5jaHJvbml6ZVRoaXNCY2tncldpdGhJbWFnZUJlbHRIb3ZlckJja2dyKG9wdCwgY29udCwgeCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBvcHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzeW5jaHJvbml6ZUJhY2tncm91bmRzT2ZPdGhlck9wdG5zKGNvbnQsIGl0ZXIpO1xyXG4gICAgICAgICAgICAgICAgc3luY2hyb25pemVUaGlzQmNrZ3JXaXRoSW1hZ2VCZWx0SG92ZXJCY2tncihvcHQsIGNvbnQsIHgsIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzeW5jaHJvbml6ZUJhY2tncm91bmRzT2ZPdGhlck9wdG5zKGNvbnQsIGl0ZXIpIHtcclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlcjsgeCsrKSB7XHJcbiAgICAgICAgbGV0IGJlbHQgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnKVt4XTtcclxuICAgICAgICBiZWx0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiaW5oZXJpdFwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzeW5jaHJvbml6ZVRoaXNCY2tncldpdGhJbWFnZUJlbHRIb3ZlckJja2dyKG9wdCwgY29udCwgeCwgaXNFbnRlcikge1xyXG4gICAgbGV0IGJlbHQgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnKVt4XTtcclxuICAgIGlmIChpc0VudGVyID09PSB0cnVlKSB7XHJcbiAgICAgICAgbGV0IHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUob3B0KTtcclxuICAgICAgICBsZXQgYmNnQ29sID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1jb2xvcicpO1xyXG4gICAgICAgIGJlbHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmNnQ29sO1xyXG4gICAgfSBlbHNlIGlmIChpc0VudGVyID09PSBmYWxzZSkge1xyXG4gICAgICAgIGJlbHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJpbmhlcml0XCI7XHJcbiAgICB9XHJcbn0iLCJcInVzZSBzdHJpY3RcIjtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdGlhbGl6ZSk7XHJcbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcbiAgbGV0IG9wdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9zZWxlY3QtbGlzdCBvcHRpb25cIlxyXG4gICk7XHJcbiAgbGV0IGFtb3VudCA9IG9wdHMubGVuZ3RoO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50OyBpKyspIHtcclxuICAgIGxldCBpdGVtID0gb3B0c1tpXTtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBzZXRJTUcoaSk7XHJcbiAgICAgIHNldFN0cmlrZU5hbWVUb0RlcyhpKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBzZXRQYXJ0T2ZBdHRhY2tEZXNjcmlwdGlvbihpKSB7XHJcbiAgbGV0IGRlc1BhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwicCBzcGFuLi0tZGVzX2VwaXRldFwiKTtcclxuICBsZXQgYXJyYXkgPSBbXHJcbiAgICBcImJydXRhbG5lXCIsXHJcbiAgICBcIm5pZXByemV3aWR5d2FsbmVcIixcclxuICAgIFwid3nEh3dpY3pvbmVcIixcclxuICAgIFwibmllemF3b2RuZVwiLFxyXG4gICAgXCJwcmVjeXp5am5lXCIsXHJcbiAgICBcInptYXNvd2FuZVwiLFxyXG4gICAgXCJwb2RzdMSZcG5lXCIsXHJcbiAgICBcInd5cmFjaG93YW5lXCIsXHJcbiAgICBcInpkcmFkemllY2tpZVwiLFxyXG4gICAgXCJzemFsZcWEY3plXCIsXHJcbiAgICBcIm9wcmFjb3dhbmUgdyBsYWJvcmF0b3JpdW0gYWxjaGVtaWN6bnltXCIsXHJcbiAgICBcIm5pZXBvd3N0cnp5bWFuZVwiLFxyXG4gICAgXCJ3xYJhZGN6ZVwiLFxyXG4gICAgXCJtcm9jem5lXCIsXHJcbiAgICBcInRhamVtbmVcIixcclxuICAgIFwid8WbY2lla8WCZVwiLFxyXG4gICAgXCJ3c3BpZXJhbmUgbW9jxIUgb3RjaMWCYW5pXCIsXHJcbiAgICBcInByemVzeWNvbmUgesWCxIUgbW9jxIVcIlxyXG4gIF07XHJcbiAgZGVzUGFydC5pbm5lclRleHQgPSBhcnJheVtpXTtcclxufVxyXG5mdW5jdGlvbiBzZXRJTUcoaSkge1xyXG4gIGxldCBiZWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwiLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdFwiXHJcbiAgKVtpXTtcclxuICBsZXQgaW1hZyA9IGJlbHQucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKVswXTtcclxuICBsZXQgYXR0cnliID0gaW1hZy5nZXRBdHRyaWJ1dGUoXCJzcmNcIik7XHJcbiAgbGV0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLi0tcGxhdGVfaW1nX2ljb25cIik7XHJcbiAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYXR0cnliKTtcclxuICBsZXQgYWxsSU1HcyA9IGJlbHQucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKS5sZW5ndGg7XHJcbiAgbGV0IHN0YW5kYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi4tLXN0YW5kYXJ0X2ltZ19iY2tnXCIpO1xyXG4gIHdoaWxlIChzdGFuZGFydC5xdWVyeVNlbGVjdG9yKFwiSU1HXCIpICE9PSBudWxsKSB7XHJcbiAgICBsZXQgaW1hZ2VUb0RlbCA9IHN0YW5kYXJ0LnF1ZXJ5U2VsZWN0b3IoXCJJTUdcIik7XHJcbiAgICBzdGFuZGFydC5yZW1vdmVDaGlsZChpbWFnZVRvRGVsKTtcclxuICB9XHJcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBhbGxJTUdzOyBqKyspIHtcclxuICAgIGlmIChqID4gMCkge1xyXG4gICAgICBsZXQgdGhlSU1HID0gYmVsdC5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nXCIpW2pdO1xyXG4gICAgICBsZXQgc291cmNlSU1HID0gdGhlSU1HLmdldEF0dHJpYnV0ZShcInNyY1wiKTtcclxuICAgICAgbGV0IG5ld0lNRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgIG5ld0lNRy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgc291cmNlSU1HKTtcclxuICAgICAgc3RhbmRhcnQuYXBwZW5kQ2hpbGQobmV3SU1HKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuZnVuY3Rpb24gc2V0TmFtZVRvRGVzKCkge1xyXG4gIGxldCBpbnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiaW1pZVwiXScpO1xyXG4gIGxldCBuYW0gPSBpbnAudmFsdWU7XHJcbiAgbGV0IGlucEIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJ6eWRvbWVrXCJdJyk7XHJcbiAgbGV0IHN1cm5hbSA9IGlucEIudmFsdWU7XHJcbiAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLi0tZGVzX2ltaWVcIik7XHJcbiAgaXRlbS5pbm5lclRleHQgPSBuYW0gKyBcIiBcIiArIHN1cm5hbTtcclxufVxyXG5mdW5jdGlvbiBzZXRTdHJpa2VOYW1lVG9EZXMoaSkge1xyXG4gIGxldCBpbnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibmF6d2F1ZGVyemVuaWFcIl0nKTtcclxuICBpbnAuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuICAgIGxldCBzdHJOYW1lID0gaW5wLnZhbHVlO1xyXG4gICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLi0tZGVzX25hendhLWNpb3N1XCIpO1xyXG4gICAgaXRlbS5pbm5lclRleHQgPSBzdHJOYW1lO1xyXG4gICAgc2V0UGFydE9mQXR0YWNrRGVzY3JpcHRpb24oaSk7XHJcbiAgICBzZXROYW1lVG9EZXMoKTtcclxuICAgIHNldEZvcmNlRGVzKGkpO1xyXG4gICAgc2hvd0FsbERlcygpO1xyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHNldEZvcmNlRGVzKGkpIHtcclxuICBsZXQgYmVsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICBcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHRcIlxyXG4gIClbaV07XHJcbiAgbGV0IElNR3MgPSBiZWx0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWdcIik7XHJcbiAgbGV0IGl0ZXIgPSBJTUdzLmxlbmd0aDtcclxuICBsZXQgc3RybmcgPSBbXTtcclxuICBmb3IgKGxldCBqID0gMDsgaiA8IGl0ZXI7IGorKykge1xyXG4gICAgbGV0IElNRyA9IElNR3Nbal07XHJcbiAgICBsZXQgYXR0cnliID0gSU1HLmdldEF0dHJpYnV0ZShcInNyY1wiKTtcclxuICAgIGlmIChqICE9PSAwKSB7XHJcbiAgICAgIGlmIChhdHRyeWIgPT09IFwiaWNvbnMvYnJvbi1iYXJiYS5zdmdcIikge1xyXG4gICAgICAgIHN0cm5nLnB1c2goXCJkb2RhdGtvd8SFIG1vY8SFIHVkZXJ6ZW5pb3fEhVwiKTtcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09IFwiaWNvbnMvYnJvbi1jemFyLnN2Z1wiKSB7XHJcbiAgICAgICAgc3RybmcucHVzaChcImRvZGF0a293xIUgbW9jxIUgY3phcm5va3NpxJlza8SFXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gXCJpY29ucy9icm9uLXN0cnouc3ZnXCIpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKFwiZG9kYXRrb3d5bSBrdW5zenRlbSBzdHJ6ZWxlY2tpbVwiKTtcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09IFwiaWNvbnMvYnJvbi1zemFsLnN2Z1wiKSB7XHJcbiAgICAgICAgc3RybmcucHVzaChcImRvZGF0a293eW0gc3phbGXFhHN0d2VtXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gXCJpY29ucy9icm9uLXpkcmEuc3ZnXCIpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKFwibmllc3BvZHppYW55bSB6ZHJhZGxpd3ltIGNpb3NlbVwiKTtcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09IFwiaWNvbnMvenl3LW9naWVuLnN2Z1wiKSB7XHJcbiAgICAgICAgc3RybmcucHVzaChcIsW8eXdpb8WCZW0gb2duaWFcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSBcImljb25zL3p5dy1yb3prbGFkLnN2Z1wiKSB7XHJcbiAgICAgICAgc3RybmcucHVzaChcIsW8eXdpb8WCZW0gcm96a8WCYWR1XCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gXCJpY29ucy96eXctd29kLnN2Z1wiKSB7XHJcbiAgICAgICAgc3RybmcucHVzaChcIsW8eXdpb8WCZW0gd29keVwiKTtcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09IFwiaWNvbnMvenl3LXptaWFuYS5zdmdcIikge1xyXG4gICAgICAgIHN0cm5nLnB1c2goXCLFvHl3aW/FgmVtIHptaWFueVwiKTtcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09IFwiaWNvbnMvenl3LXp5d2lhLnN2Z1wiKSB7XHJcbiAgICAgICAgc3RybmcucHVzaChcIsW8eXdpb8WCZW0gxbx5d2lpXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0cm5nLnB1c2goXCJ3xYJhc27EhSBtxIVkcm/Fm2NpxIUgxbx5d2lvxYLDs3cgaSB0YWxlbnTDs3dcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgbGV0IHN0cmluZ1RvU2V0ID0gc3Rybmcuam9pbihcIiwgXCIpO1xyXG4gIGxldCBzcG5EZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLi0tZGVzX3p5d2lvbFwiKTtcclxuICBzcG5EZXMuaW5uZXJUZXh0ID0gc3RyaW5nVG9TZXQgKyBcIi5cIjtcclxufVxyXG5mdW5jdGlvbiBzaG93QWxsRGVzKCkge1xyXG4gIGxldCBhbGxEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLi0tZGVzXCIpO1xyXG4gIGFsbERlcy5jbGFzc0xpc3QucmVtb3ZlKFwiaXRzSGlkZGVuXCIpO1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXQpO1xyXG5sZXQgYW1vdW50T2ZQb2ludHMgPSAyMDtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBsZXQgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkcy0yX2ZpZWxkc2V0LWRfY29udGFpbmVyX2F0cnliIC4tLWJlbHRfaWNvbi1jb250YWluZXInKTtcclxuICAgIGxldCBiZWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkcy0yX2ZpZWxkc2V0LWRfY29udGFpbmVyX2F0cnliIC4tLWJlbHRfYm9keS1jb250YWluZXJfYm9keScpO1xyXG4gICAgbGV0IGl0ZXIgPSBidG5zLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcjsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGkgPiA0KSB7XHJcbiAgICAgICAgICAgIGxldCBhdHRyeWIgPSBidG5zW2ldO1xyXG4gICAgICAgICAgICBsZXQgYmVsdCA9IGJlbHRzW2ldO1xyXG4gICAgICAgICAgICBhdHRyeWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYW1vdW50T2ZQb2ludHMgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkUG9pbnQoYmVsdClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb2ludChiZWx0KSB7XHJcbiAgICBsZXQgSU1HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnSU1HJyk7XHJcbiAgICBJTUcuc2V0QXR0cmlidXRlKCdzcmMnLCAnaWNvbnMvaWtvbmEtcG90ZWcuc3ZnJyk7XHJcbiAgICBiZWx0LmFwcGVuZENoaWxkKElNRyk7XHJcbiAgICBhbW91bnRPZlBvaW50cy0tO1xyXG4gICAgSU1HLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRlbGV0ZVRoaXNJTUcoSU1HKVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlVGhpc0lNRyh4KSB7XHJcbiAgICB4LnJlbW92ZSgpO1xyXG4gICAgYW1vdW50T2ZQb2ludHMrKztcclxufSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1c2VyRmxvd1ZpYUZpcnN0RmllbGRzZXQiLCJ1c2VyTmFtZSIsInF1ZXJ5U2VsZWN0b3IiLCJ1c2VyTmljayIsInVzZXJNb3R0byIsInVzZXJOYW1lQWNjZXB0IiwidXNlck5pY2tBY2NlcHQiLCJ1c2VyTW90dG9BY2NlcHQiLCJpdGVtIiwibmV4dEl0ZW0iLCJldmVudCIsImtleUNvZGUiLCJmb2N1cyIsImNob29zZVlvdXJBdmF0YXIiLCJjb250YWluZXJzIiwicXVlcnlTZWxlY3RvckFsbCIsImF2YXRhcnMiLCJhbW91bnQiLCJsZW5ndGgiLCJpIiwiY2hvb3NlVGhpc0F2YXRhciIsInNldE9uZVBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uIiwic3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRzIiwiZW5hYmxlQXR0YWNrcyIsImNoZWNrZWQiLCJkZXNQYXJ0IiwiYXJyYXkiLCJpbm5lclRleHQiLCJjb250Iiwib3B0aW9ucyIsIml0ZXIiLCJ4IiwiYmVsdCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZW5hYmxlZEF0dGFja3MiLCJkaXNhYmxlZEl0ZW0iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJvcHRzIiwiaiIsInNlbGVjdGVkIiwiZW5hYmxlZEF0dGFjayIsImFkZCIsImluaXRpYWxpemVBdHRhY2tzUGFydCIsIm9wdCIsIm9uTU91dCIsIm9uTUVudGVyIiwic3luY2hyb25pemVUaGlzQmNrZ3JXaXRoSW1hZ2VCZWx0SG92ZXJCY2tnciIsInN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0bnMiLCJpc0VudGVyIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImJjZ0NvbCIsImdldFByb3BlcnR5VmFsdWUiLCJpbml0aWFsaXplIiwic2V0SU1HIiwic2V0U3RyaWtlTmFtZVRvRGVzIiwic2V0UGFydE9mQXR0YWNrRGVzY3JpcHRpb24iLCJpbWFnIiwiYXR0cnliIiwiZ2V0QXR0cmlidXRlIiwiaWNvbiIsInNldEF0dHJpYnV0ZSIsImFsbElNR3MiLCJzdGFuZGFydCIsImltYWdlVG9EZWwiLCJyZW1vdmVDaGlsZCIsInRoZUlNRyIsInNvdXJjZUlNRyIsIm5ld0lNRyIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInNldE5hbWVUb0RlcyIsImlucCIsIm5hbSIsInZhbHVlIiwiaW5wQiIsInN1cm5hbSIsInN0ck5hbWUiLCJzZXRGb3JjZURlcyIsInNob3dBbGxEZXMiLCJJTUdzIiwic3RybmciLCJJTUciLCJwdXNoIiwic3RyaW5nVG9TZXQiLCJqb2luIiwic3BuRGVzIiwiYWxsRGVzIiwiaW5pdCIsImFtb3VudE9mUG9pbnRzIiwiYnRucyIsImJlbHRzIiwiYWRkUG9pbnQiLCJkZWxldGVUaGlzSU1HIl0sIm1hcHBpbmdzIjoiOzs7SUFDQUEsU0FBU0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVc7SUFDckRDO0lBQ0gsQ0FGRDtJQUdBLFNBQVNBLHdCQUFULEdBQW1DO0lBQy9CLFFBQUlDLFdBQVdILFNBQVNJLGFBQVQsQ0FBdUIsb0JBQXZCLENBQWY7SUFDQSxRQUFJQyxXQUFXTCxTQUFTSSxhQUFULENBQXVCLHlCQUF2QixDQUFmO0lBQ0EsUUFBSUUsWUFBWU4sU0FBU0ksYUFBVCxDQUF1Qiw0QkFBdkIsQ0FBaEI7SUFDQUcsbUJBQWVKLFFBQWYsRUFBeUJFLFFBQXpCO0lBQ0FHLG1CQUFlSCxRQUFmLEVBQXlCQyxTQUF6QjtJQUNBRyxvQkFBZ0JILFNBQWhCLEVBQTJCSCxRQUEzQjtJQUNIO0lBQ0QsU0FBU0ksY0FBVCxDQUF3QkcsSUFBeEIsRUFBOEJD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
