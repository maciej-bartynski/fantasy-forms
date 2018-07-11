(function () {
    'use strict';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyIuLi9zb3VyY2UvZHluYW1pY3Mva2xhc2EuanMiLCIuLi9zb3VyY2UvZHluYW1pY3MvYXRha2kuanMiLCIuLi9zb3VyY2UvZHluYW1pY3MvYXRha2ktc2V0LXR4dC5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9hdHRyeWJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4ndXNlIHN0cmljdCc7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjaG9vc2VZb3VyQXZhdGFyKTtcclxuZnVuY3Rpb24gY2hvb3NlWW91ckF2YXRhcigpe1xyXG4gICAgbGV0IGNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcicpO1xyXG4gICAgbGV0IGF2YXRhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfcmFkaW8tbGFiLWNvbnRhaW5lcicpO1xyXG4gICAgbGV0IGFtb3VudCA9IGF2YXRhcnMubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaT0wO2k8YW1vdW50O2krKyl7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSBhdmF0YXJzW2ldO1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNob29zZVRoaXNBdmF0YXIoaXRlbSk7XHJcbiAgICAgICAgICAgIHNldE9uZVBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uKGkpO1xyXG4gICAgICAgICAgICBzeW5jaHJvbml6ZUJhY2tncm91bmRzT2ZPdGhlck9wdHMoY29udGFpbmVycyk7XHJcbiAgICAgICAgICAgIGVuYWJsZUF0dGFja3MoaSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gY2hvb3NlVGhpc0F2YXRhcihpdGVtKSB7XHJcbiAgICBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuY2hlY2tlZD10cnVlO1xyXG59XHJcbmZ1bmN0aW9uIHNldE9uZVBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uKGkpe1xyXG4gICAgbGV0IGRlc1BhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwIHNwYW4uLS1kZXNfa2xhc2EnKTtcclxuICAgIGxldCBhcnJheSA9IFtcclxuICAgICAgICAnYnJ1dGFsbsSFLicsXHJcbiAgICAgICAgJ3N0cnplbGVja8SFLicsXHJcbiAgICAgICAgJ3pkcmFkemllY2vEhS4nLFxyXG4gICAgICAgICdzemFsZcWEY3rEhS4nLFxyXG4gICAgICAgICdzemFybGF0YcWEc2vEhS4nLFxyXG4gICAgICAgICdsdWIgY3p5bWtvbHdpZWssIGNvIHdwYWRuaWUga2FyxYJvd2kgdyDFgmFwc2thLidcclxuICAgIF1cclxuICAgIGRlc1BhcnQuaW5uZXJUZXh0PWFycmF5W2ldO1xyXG59XHJcbmZ1bmN0aW9uIHN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0cyhjb250YWluZXJzKXtcclxuICAgIGxldCBhbW91bnQgPSBjb250YWluZXJzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50OyBpKyspIHtcclxuICAgICAgICBsZXQgY29udCA9IGNvbnRhaW5lcnNbaV07XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpO1xyXG4gICAgICAgIGxldCBpdGVyID0gb3B0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVyOyB4KyspIHtcclxuICAgICAgICAgICAgbGV0IGJlbHQgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnKVt4XTtcclxuICAgICAgICAgICAgYmVsdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCJpbmhlcml0XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGVuYWJsZUF0dGFja3MoaSkge1xyXG4gICAgbGV0IGVuYWJsZWRBdHRhY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXInKTtcclxuICAgIGZvciAobGV0IHg9MDsgeDw2OyB4Kyspe1xyXG4gICAgICAgIGxldCBkaXNhYmxlZEl0ZW0gPSBlbmFibGVkQXR0YWNrc1t4XTtcclxuICAgICAgICBkaXNhYmxlZEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnZW5hYmxlZCcpO1xyXG4gICAgICAgIGxldCBvcHRzID0gZGlzYWJsZWRJdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpO1xyXG4gICAgICAgIGxldCBhbW91bnQgPSBvcHRzLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBqPTA7ajxhbW91bnQ7aisrKXtcclxuICAgICAgICAgICAgaWYgKG9wdHNbal0uc2VsZWN0ZWQ9PT10cnVlKXtcclxuICAgICAgICAgICAgICAgIG9wdHNbal0uc2VsZWN0ZWQ9ZmFsc2U7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IGVuYWJsZWRBdHRhY2sgPSBlbmFibGVkQXR0YWNrc1tpXTtcclxuICAgIGVuYWJsZWRBdHRhY2suY2xhc3NMaXN0LmFkZCgnZW5hYmxlZCcpO1xyXG59IiwiJ3VzZSBzdHJpY3QnO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdGlhbGl6ZUF0dGFja3NQYXJ0KTtcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVBdHRhY2tzUGFydCgpIHtcclxuICAgIGxldCBjb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXInKTtcclxuICAgIGxldCBhbW91bnQgPSBjb250YWluZXJzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50OyBpKyspIHtcclxuICAgICAgICBsZXQgY29udCA9IGNvbnRhaW5lcnNbaV07XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpO1xyXG4gICAgICAgIGxldCBpdGVyID0gb3B0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVyOyB4KyspIHtcclxuICAgICAgICAgICAgbGV0IG9wdCA9IG9wdGlvbnNbeF07XHJcbiAgICAgICAgICAgIG9wdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIG9uTU91dCk7XHJcbiAgICAgICAgICAgIG9wdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgb25NRW50ZXIpO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gb25NRW50ZXIoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0LnNlbGVjdGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN5bmNocm9uaXplVGhpc0Jja2dyV2l0aEltYWdlQmVsdEhvdmVyQmNrZ3Iob3B0LCBjb250LCB4LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uTU91dCgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvcHQuc2VsZWN0ZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3luY2hyb25pemVUaGlzQmNrZ3JXaXRoSW1hZ2VCZWx0SG92ZXJCY2tncihvcHQsIGNvbnQsIHgsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgb3B0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRucyhjb250LCBpdGVyKTtcclxuICAgICAgICAgICAgICAgIHN5bmNocm9uaXplVGhpc0Jja2dyV2l0aEltYWdlQmVsdEhvdmVyQmNrZ3Iob3B0LCBjb250LCB4LCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRucyhjb250LCBpdGVyKSB7XHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGl0ZXI7IHgrKykge1xyXG4gICAgICAgIGxldCBiZWx0ID0gY29udC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0JylbeF07XHJcbiAgICAgICAgYmVsdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImluaGVyaXRcIjtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3luY2hyb25pemVUaGlzQmNrZ3JXaXRoSW1hZ2VCZWx0SG92ZXJCY2tncihvcHQsIGNvbnQsIHgsIGlzRW50ZXIpIHtcclxuICAgIGxldCBiZWx0ID0gY29udC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0JylbeF07XHJcbiAgICBpZiAoaXNFbnRlciA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGxldCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG9wdCk7XHJcbiAgICAgICAgbGV0IGJjZ0NvbCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tncm91bmQtY29sb3InKTtcclxuICAgICAgICBiZWx0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJjZ0NvbDtcclxuICAgIH0gZWxzZSBpZiAoaXNFbnRlciA9PT0gZmFsc2UpIHtcclxuICAgICAgICBiZWx0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiaW5oZXJpdFwiO1xyXG4gICAgfVxyXG59IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGluaXRpYWxpemUpO1xyXG5mdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG4gIGxldCBvcHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwiLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfc2VsZWN0LWxpc3Qgb3B0aW9uXCJcclxuICApO1xyXG4gIGxldCBhbW91bnQgPSBvcHRzLmxlbmd0aDtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XHJcbiAgICBsZXQgaXRlbSA9IG9wdHNbaV07XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgc2V0SU1HKGkpO1xyXG4gICAgICBzZXRTdHJpa2VOYW1lVG9EZXMoaSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gc2V0UGFydE9mQXR0YWNrRGVzY3JpcHRpb24oaSkge1xyXG4gIGxldCBkZXNQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInAgc3Bhbi4tLWRlc19lcGl0ZXRcIik7XHJcbiAgbGV0IGFycmF5ID0gW1xyXG4gICAgXCJicnV0YWxuZVwiLFxyXG4gICAgXCJuaWVwcnpld2lkeXdhbG5lXCIsXHJcbiAgICBcInd5xId3aWN6b25lXCIsXHJcbiAgICBcIm5pZXphd29kbmVcIixcclxuICAgIFwicHJlY3l6eWpuZVwiLFxyXG4gICAgXCJ6bWFzb3dhbmVcIixcclxuICAgIFwicG9kc3TEmXBuZVwiLFxyXG4gICAgXCJ3eXJhY2hvd2FuZVwiLFxyXG4gICAgXCJ6ZHJhZHppZWNraWVcIixcclxuICAgIFwic3phbGXFhGN6ZVwiLFxyXG4gICAgXCJvcHJhY293YW5lIHcgbGFib3JhdG9yaXVtIGFsY2hlbWljem55bVwiLFxyXG4gICAgXCJuaWVwb3dzdHJ6eW1hbmVcIixcclxuICAgIFwid8WCYWRjemVcIixcclxuICAgIFwibXJvY3puZVwiLFxyXG4gICAgXCJ0YWplbW5lXCIsXHJcbiAgICBcInfFm2NpZWvFgmVcIixcclxuICAgIFwid3NwaWVyYW5lIG1vY8SFIG90Y2jFgmFuaVwiLFxyXG4gICAgXCJwcnplc3ljb25lIHrFgsSFIG1vY8SFXCJcclxuICBdO1xyXG4gIGRlc1BhcnQuaW5uZXJUZXh0ID0gYXJyYXlbaV07XHJcbn1cclxuZnVuY3Rpb24gc2V0SU1HKGkpIHtcclxuICBsZXQgYmVsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICBcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHRcIlxyXG4gIClbaV07XHJcbiAgbGV0IGltYWcgPSBiZWx0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWdcIilbMF07XHJcbiAgbGV0IGF0dHJ5YiA9IGltYWcuZ2V0QXR0cmlidXRlKFwic3JjXCIpO1xyXG4gIGxldCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi4tLXBsYXRlX2ltZ19pY29uXCIpO1xyXG4gIGljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIGF0dHJ5Yik7XHJcbiAgbGV0IGFsbElNR3MgPSBiZWx0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWdcIikubGVuZ3RoO1xyXG4gIGxldCBzdGFuZGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuLS1zdGFuZGFydF9pbWdfYmNrZ1wiKTtcclxuICB3aGlsZSAoc3RhbmRhcnQucXVlcnlTZWxlY3RvcihcIklNR1wiKSAhPT0gbnVsbCkge1xyXG4gICAgbGV0IGltYWdlVG9EZWwgPSBzdGFuZGFydC5xdWVyeVNlbGVjdG9yKFwiSU1HXCIpO1xyXG4gICAgc3RhbmRhcnQucmVtb3ZlQ2hpbGQoaW1hZ2VUb0RlbCk7XHJcbiAgfVxyXG4gIGZvciAobGV0IGogPSAwOyBqIDwgYWxsSU1HczsgaisrKSB7XHJcbiAgICBpZiAoaiA+IDApIHtcclxuICAgICAgbGV0IHRoZUlNRyA9IGJlbHQucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKVtqXTtcclxuICAgICAgbGV0IHNvdXJjZUlNRyA9IHRoZUlNRy5nZXRBdHRyaWJ1dGUoXCJzcmNcIik7XHJcbiAgICAgIGxldCBuZXdJTUcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICBuZXdJTUcuc2V0QXR0cmlidXRlKFwic3JjXCIsIHNvdXJjZUlNRyk7XHJcbiAgICAgIHN0YW5kYXJ0LmFwcGVuZENoaWxkKG5ld0lNRyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIHNldE5hbWVUb0RlcygpIHtcclxuICBsZXQgaW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImltaWVcIl0nKTtcclxuICBsZXQgbmFtID0gaW5wLnZhbHVlO1xyXG4gIGxldCBpbnBCID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByenlkb21la1wiXScpO1xyXG4gIGxldCBzdXJuYW0gPSBpbnBCLnZhbHVlO1xyXG4gIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi4tLWRlc19pbWllXCIpO1xyXG4gIGl0ZW0uaW5uZXJUZXh0ID0gbmFtICsgXCIgXCIgKyBzdXJuYW07XHJcbn1cclxuZnVuY3Rpb24gc2V0U3RyaWtlTmFtZVRvRGVzKGkpIHtcclxuICBsZXQgaW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm5hendhdWRlcnplbmlhXCJdJyk7XHJcbiAgaW5wLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgc3RyTmFtZSA9IGlucC52YWx1ZTtcclxuICAgIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi4tLWRlc19uYXp3YS1jaW9zdVwiKTtcclxuICAgIGl0ZW0uaW5uZXJUZXh0ID0gc3RyTmFtZTtcclxuICAgIHNldFBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uKGkpO1xyXG4gICAgc2V0TmFtZVRvRGVzKCk7XHJcbiAgICBzZXRGb3JjZURlcyhpKTtcclxuICAgIHNob3dBbGxEZXMoKTtcclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiBzZXRGb3JjZURlcyhpKSB7XHJcbiAgbGV0IGJlbHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0XCJcclxuICApW2ldO1xyXG4gIGxldCBJTUdzID0gYmVsdC5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nXCIpO1xyXG4gIGxldCBpdGVyID0gSU1Hcy5sZW5ndGg7XHJcbiAgbGV0IHN0cm5nID0gW107XHJcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBpdGVyOyBqKyspIHtcclxuICAgIGxldCBJTUcgPSBJTUdzW2pdO1xyXG4gICAgbGV0IGF0dHJ5YiA9IElNRy5nZXRBdHRyaWJ1dGUoXCJzcmNcIik7XHJcbiAgICBpZiAoaiAhPT0gMCkge1xyXG4gICAgICBpZiAoYXR0cnliID09PSBcImljb25zL2Jyb24tYmFyYmEuc3ZnXCIpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKFwiZG9kYXRrb3fEhSBtb2PEhSB1ZGVyemVuaW93xIVcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSBcImljb25zL2Jyb24tY3phci5zdmdcIikge1xyXG4gICAgICAgIHN0cm5nLnB1c2goXCJkb2RhdGtvd8SFIG1vY8SFIGN6YXJub2tzacSZc2vEhVwiKTtcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09IFwiaWNvbnMvYnJvbi1zdHJ6LnN2Z1wiKSB7XHJcbiAgICAgICAgc3RybmcucHVzaChcImRvZGF0a293eW0ga3Vuc3p0ZW0gc3RyemVsZWNraW1cIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSBcImljb25zL2Jyb24tc3phbC5zdmdcIikge1xyXG4gICAgICAgIHN0cm5nLnB1c2goXCJkb2RhdGtvd3ltIHN6YWxlxYRzdHdlbVwiKTtcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09IFwiaWNvbnMvYnJvbi16ZHJhLnN2Z1wiKSB7XHJcbiAgICAgICAgc3RybmcucHVzaChcIm5pZXNwb2R6aWFueW0gemRyYWRsaXd5bSBjaW9zZW1cIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSBcImljb25zL3p5dy1vZ2llbi5zdmdcIikge1xyXG4gICAgICAgIHN0cm5nLnB1c2goXCLFvHl3aW/FgmVtIG9nbmlhXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gXCJpY29ucy96eXctcm96a2xhZC5zdmdcIikge1xyXG4gICAgICAgIHN0cm5nLnB1c2goXCLFvHl3aW/FgmVtIHJvemvFgmFkdVwiKTtcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09IFwiaWNvbnMvenl3LXdvZC5zdmdcIikge1xyXG4gICAgICAgIHN0cm5nLnB1c2goXCLFvHl3aW/FgmVtIHdvZHlcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSBcImljb25zL3p5dy16bWlhbmEuc3ZnXCIpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKFwixbx5d2lvxYJlbSB6bWlhbnlcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSBcImljb25zL3p5dy16eXdpYS5zdmdcIikge1xyXG4gICAgICAgIHN0cm5nLnB1c2goXCLFvHl3aW/FgmVtIMW8eXdpaVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdHJuZy5wdXNoKFwid8WCYXNuxIUgbcSFZHJvxZtjacSFIMW8eXdpb8WCw7N3IGkgdGFsZW50w7N3XCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCBzdHJpbmdUb1NldCA9IHN0cm5nLmpvaW4oXCIsIFwiKTtcclxuICBsZXQgc3BuRGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi4tLWRlc196eXdpb2xcIik7XHJcbiAgc3BuRGVzLmlubmVyVGV4dCA9IHN0cmluZ1RvU2V0ICsgXCIuXCI7XHJcbn1cclxuZnVuY3Rpb24gc2hvd0FsbERlcygpIHtcclxuICBsZXQgYWxsRGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi4tLWRlc1wiKTtcclxuICBhbGxEZXMuY2xhc3NMaXN0LnJlbW92ZShcIml0c0hpZGRlblwiKTtcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0KTtcclxubGV0IGFtb3VudE9mUG9pbnRzID0gMjA7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgbGV0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHMtMl9maWVsZHNldC1kX2NvbnRhaW5lcl9hdHJ5YiAuLS1iZWx0X2ljb24tY29udGFpbmVyJyk7XHJcbiAgICBsZXQgYmVsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHMtMl9maWVsZHNldC1kX2NvbnRhaW5lcl9hdHJ5YiAuLS1iZWx0X2JvZHktY29udGFpbmVyX2JvZHknKTtcclxuICAgIGxldCBpdGVyID0gYnRucy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXI7IGkrKykge1xyXG4gICAgICAgIGlmIChpID4gNCkge1xyXG4gICAgICAgICAgICBsZXQgYXR0cnliID0gYnRuc1tpXTtcclxuICAgICAgICAgICAgbGV0IGJlbHQgPSBiZWx0c1tpXTtcclxuICAgICAgICAgICAgYXR0cnliLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFtb3VudE9mUG9pbnRzID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFBvaW50KGJlbHQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUG9pbnQoYmVsdCkge1xyXG4gICAgbGV0IElNRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0lNRycpO1xyXG4gICAgSU1HLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2ljb25zL2lrb25hLXBvdGVnLnN2ZycpO1xyXG4gICAgYmVsdC5hcHBlbmRDaGlsZChJTUcpO1xyXG4gICAgYW1vdW50T2ZQb2ludHMtLTtcclxuICAgIElNRy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkZWxldGVUaGlzSU1HKElNRylcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVRoaXNJTUcoeCkge1xyXG4gICAgeC5yZW1vdmUoKTtcclxuICAgIGFtb3VudE9mUG9pbnRzKys7XHJcbn0iXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hvb3NlWW91ckF2YXRhciIsImNvbnRhaW5lcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYXZhdGFycyIsImFtb3VudCIsImxlbmd0aCIsImkiLCJpdGVtIiwiY2hvb3NlVGhpc0F2YXRhciIsInNldE9uZVBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uIiwic3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRzIiwiZW5hYmxlQXR0YWNrcyIsInF1ZXJ5U2VsZWN0b3IiLCJjaGVja2VkIiwiZGVzUGFydCIsImFycmF5IiwiaW5uZXJUZXh0IiwiY29udCIsIm9wdGlvbnMiLCJpdGVyIiwieCIsImJlbHQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImVuYWJsZWRBdHRhY2tzIiwiZGlzYWJsZWRJdGVtIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwib3B0cyIsImoiLCJzZWxlY3RlZCIsImVuYWJsZWRBdHRhY2siLCJhZGQiLCJpbml0aWFsaXplQXR0YWNrc1BhcnQiLCJvcHQiLCJvbk1PdXQiLCJvbk1FbnRlciIsInN5bmNocm9uaXplVGhpc0Jja2dyV2l0aEltYWdlQmVsdEhvdmVyQmNrZ3IiLCJzeW5jaHJvbml6ZUJhY2tncm91bmRzT2ZPdGhlck9wdG5zIiwiaXNFbnRlciIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJiY2dDb2wiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiaW5pdGlhbGl6ZSIsInNldElNRyIsInNldFN0cmlrZU5hbWVUb0RlcyIsInNldFBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uIiwiaW1hZyIsImF0dHJ5YiIsImdldEF0dHJpYnV0ZSIsImljb24iLCJzZXRBdHRyaWJ1dGUiLCJhbGxJTUdzIiwic3RhbmRhcnQiLCJpbWFnZVRvRGVsIiwicmVtb3ZlQ2hpbGQiLCJ0aGVJTUciLCJzb3VyY2VJTUciLCJuZXdJTUciLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJzZXROYW1lVG9EZXMiLCJpbnAiLCJuYW0iLCJ2YWx1ZSIsImlucEIiLCJzdXJuYW0iLCJzdHJOYW1lIiwic2V0Rm9yY2VEZXMiLCJzaG93QWxsRGVzIiwiSU1HcyIsInN0cm5nIiwiSU1HIiwicHVzaCIsInN0cmluZ1RvU2V0Iiwiam9pbiIsInNwbkRlcyIsImFsbERlcyIsImluaXQiLCJhbW91bnRPZlBvaW50cyIsImJ0bnMiLCJiZWx0cyIsImFkZFBvaW50IiwiZGVsZXRlVGhpc0lNRyJdLCJtYXBwaW5ncyI6Ijs7O0lBRUFBLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4Q0MsZ0JBQTlDO0lBQ0EsU0FBU0EsZ0JBQVQsR0FBMkI7SUFDdkIsUUFBSUMsYUFBYUgsU0FBU0ksZ0JBQVQsQ0FBMEIsbUVBQTFCLENBQWpCO0lBQ0EsUUFBSUMsVUFBVUwsU0FBU0ksZ0JBQVQsQ0FBMEIsc0VBQTFCLENBQWQ7SUFDQSxRQUFJRSxTQUFTRCxRQUFRRSxNQUFyQjs7SUFIdUIsK0JBSWRDLENBSmM7SUFLbkIsWUFBSUMsT0FBT0osUUFBUUcsQ0FBUixDQUFYO0lBQ0FDLGFBQUtSLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQVk7SUFDdkNTLDZCQUFpQkQsSUFBakI7SUFDQUUsMENBQThCSCxDQUE5QjtJQUNBSSw4Q0FBa0NULFVBQWxDO0lBQ0FVLDBCQUFjTCxDQUFkO0lBQ0gsU0FMRDtJQU5tQjs7SUFJdkIsU0FBSyxJQUFJQSxJQUFFLENBQVgsRUFBYUEsSUFBRUYsTUFBZixFQUFzQkUsR0FBdEIsRUFBMEI7SUFBQSxjQUFqQkEsQ0FBaUI7SUFRekI7SUFDSjtJQUNELFNBQVNFLGdCQUFULENBQTBCRCxJQUExQixFQUFnQztJQUM1QkEsU0FBS0ssYUFBTCxDQUFtQixPQUFuQixFQUE0QkMsT0FBNUIsR0FBb0MsSUFBcEM7SUFDSDtJQUNELFNBQVNKLDZCQUFULENBQXVDSCxDQUF2QyxFQUF5QztJQUNyQyxRQUFJUSxVQUFVaEIsU0FBU2MsYUFBVCxDQUF1QixvQkFBdkIsQ0FBZDtJQUNBLFFBQUlHLFFBQVEsQ0FDUixXQURRLEVBRVIsYUFGUSxFQUdSLGNBSFEsRUFJUixZQUpRLEVBS1IsZUFMUSxFQU1SLCtDQU5RLENBQVo7SUFRQUQsWUFBUUUsU0FBUixHQUFrQkQsTUFB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
