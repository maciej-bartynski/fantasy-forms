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

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyIuLi9zb3VyY2UvZHluYW1pY3Mva2xhc2EuanMiLCIuLi9zb3VyY2UvZHluYW1pY3MvYXRha2kuanMiLCIuLi9zb3VyY2UvZHluYW1pY3MvYXRha2ktc2V0LXR4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJ3VzZSBzdHJpY3QnO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY2hvb3NlWW91ckF2YXRhcik7XHJcbmZ1bmN0aW9uIGNob29zZVlvdXJBdmF0YXIoKXtcclxuICAgIGxldCBjb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXInKTtcclxuICAgIGxldCBhdmF0YXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3JhZGlvLWxhYi1jb250YWluZXInKTtcclxuICAgIGxldCBhbW91bnQgPSBhdmF0YXJzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGk9MDtpPGFtb3VudDtpKyspe1xyXG4gICAgICAgIGxldCBpdGVtID0gYXZhdGFyc1tpXTtcclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjaG9vc2VUaGlzQXZhdGFyKGl0ZW0pO1xyXG4gICAgICAgICAgICBzZXRPbmVQYXJ0T2ZBdHRhY2tEZXNjcmlwdGlvbihpKTtcclxuICAgICAgICAgICAgc3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRzKGNvbnRhaW5lcnMpO1xyXG4gICAgICAgICAgICBlbmFibGVBdHRhY2tzKGkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGNob29zZVRoaXNBdmF0YXIoaXRlbSkge1xyXG4gICAgaXRlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmNoZWNrZWQ9dHJ1ZTtcclxufVxyXG5mdW5jdGlvbiBzZXRPbmVQYXJ0T2ZBdHRhY2tEZXNjcmlwdGlvbihpKXtcclxuICAgIGxldCBkZXNQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncCBzcGFuLi0tZGVzX2tsYXNhJyk7XHJcbiAgICBsZXQgYXJyYXkgPSBbXHJcbiAgICAgICAgJ2JydXRhbG7EhS4nLFxyXG4gICAgICAgICdzdHJ6ZWxlY2vEhS4nLFxyXG4gICAgICAgICd6ZHJhZHppZWNrxIUuJyxcclxuICAgICAgICAnc3phbGXFhGN6xIUuJyxcclxuICAgICAgICAnc3phcmxhdGHFhHNrxIUuJyxcclxuICAgICAgICAnbHViIGN6eW1rb2x3aWVrLCBjbyB3cGFkbmllIGthcsWCb3dpIHcgxYJhcHNrYS4nXHJcbiAgICBdXHJcbiAgICBkZXNQYXJ0LmlubmVyVGV4dD1hcnJheVtpXTtcclxufVxyXG5mdW5jdGlvbiBzeW5jaHJvbml6ZUJhY2tncm91bmRzT2ZPdGhlck9wdHMoY29udGFpbmVycyl7XHJcbiAgICBsZXQgYW1vdW50ID0gY29udGFpbmVycy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGNvbnQgPSBjb250YWluZXJzW2ldO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gY29udC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKTtcclxuICAgICAgICBsZXQgaXRlciA9IG9wdGlvbnMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlcjsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBiZWx0ID0gY29udC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0JylbeF07XHJcbiAgICAgICAgICAgIGJlbHQuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiaW5oZXJpdFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBlbmFibGVBdHRhY2tzKGkpIHtcclxuICAgIGxldCBlbmFibGVkQXR0YWNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyJyk7XHJcbiAgICBmb3IgKGxldCB4PTA7IHg8NjsgeCsrKXtcclxuICAgICAgICBsZXQgZGlzYWJsZWRJdGVtID0gZW5hYmxlZEF0dGFja3NbeF07XHJcbiAgICAgICAgZGlzYWJsZWRJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2VuYWJsZWQnKTtcclxuICAgICAgICBsZXQgb3B0cyA9IGRpc2FibGVkSXRlbS5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKTtcclxuICAgICAgICBsZXQgYW1vdW50ID0gb3B0cy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgaj0wO2o8YW1vdW50O2orKyl7XHJcbiAgICAgICAgICAgIGlmIChvcHRzW2pdLnNlbGVjdGVkPT09dHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICBvcHRzW2pdLnNlbGVjdGVkPWZhbHNlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBlbmFibGVkQXR0YWNrID0gZW5hYmxlZEF0dGFja3NbaV07XHJcbiAgICBlbmFibGVkQXR0YWNrLmNsYXNzTGlzdC5hZGQoJ2VuYWJsZWQnKTtcclxufSIsIid1c2Ugc3RyaWN0JztcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRpYWxpemVBdHRhY2tzUGFydCk7XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplQXR0YWNrc1BhcnQoKSB7XHJcbiAgICBsZXQgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyJyk7XHJcbiAgICBsZXQgYW1vdW50ID0gY29udGFpbmVycy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGNvbnQgPSBjb250YWluZXJzW2ldO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gY29udC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKTtcclxuICAgICAgICBsZXQgaXRlciA9IG9wdGlvbnMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlcjsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBvcHQgPSBvcHRpb25zW3hdO1xyXG4gICAgICAgICAgICBvcHQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBvbk1PdXQpO1xyXG4gICAgICAgICAgICBvcHQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIG9uTUVudGVyKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uTUVudGVyKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdC5zZWxlY3RlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBzeW5jaHJvbml6ZVRoaXNCY2tncldpdGhJbWFnZUJlbHRIb3ZlckJja2dyKG9wdCwgY29udCwgeCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBvbk1PdXQoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0LnNlbGVjdGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN5bmNocm9uaXplVGhpc0Jja2dyV2l0aEltYWdlQmVsdEhvdmVyQmNrZ3Iob3B0LCBjb250LCB4LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIG9wdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0bnMoY29udCwgaXRlcik7XHJcbiAgICAgICAgICAgICAgICBzeW5jaHJvbml6ZVRoaXNCY2tncldpdGhJbWFnZUJlbHRIb3ZlckJja2dyKG9wdCwgY29udCwgeCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0bnMoY29udCwgaXRlcikge1xyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVyOyB4KyspIHtcclxuICAgICAgICBsZXQgYmVsdCA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdCcpW3hdO1xyXG4gICAgICAgIGJlbHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJpbmhlcml0XCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN5bmNocm9uaXplVGhpc0Jja2dyV2l0aEltYWdlQmVsdEhvdmVyQmNrZ3Iob3B0LCBjb250LCB4LCBpc0VudGVyKSB7XHJcbiAgICBsZXQgYmVsdCA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdCcpW3hdO1xyXG4gICAgaWYgKGlzRW50ZXIgPT09IHRydWUpIHtcclxuICAgICAgICBsZXQgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShvcHQpO1xyXG4gICAgICAgIGxldCBiY2dDb2wgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XHJcbiAgICAgICAgYmVsdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBiY2dDb2w7XHJcbiAgICB9IGVsc2UgaWYgKGlzRW50ZXIgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgYmVsdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImluaGVyaXRcIjtcclxuICAgIH1cclxufSIsIlwidXNlIHN0cmljdFwiO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0aWFsaXplKTtcclxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuICBsZXQgb3B0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICBcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX3NlbGVjdC1saXN0IG9wdGlvblwiXHJcbiAgKTtcclxuICBsZXQgYW1vdW50ID0gb3B0cy5sZW5ndGg7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xyXG4gICAgbGV0IGl0ZW0gPSBvcHRzW2ldO1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHNldElNRyhpKTtcclxuICAgICAgc2V0U3RyaWtlTmFtZVRvRGVzKGkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIHNldFBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uKGkpIHtcclxuICBsZXQgZGVzUGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJwIHNwYW4uLS1kZXNfZXBpdGV0XCIpO1xyXG4gIGxldCBhcnJheSA9IFtcclxuICAgIFwiYnJ1dGFsbmVcIixcclxuICAgIFwibmllcHJ6ZXdpZHl3YWxuZVwiLFxyXG4gICAgXCJ3ecSHd2ljem9uZVwiLFxyXG4gICAgXCJuaWV6YXdvZG5lXCIsXHJcbiAgICBcInByZWN5enlqbmVcIixcclxuICAgIFwiem1hc293YW5lXCIsXHJcbiAgICBcInBvZHN0xJlwbmVcIixcclxuICAgIFwid3lyYWNob3dhbmVcIixcclxuICAgIFwiemRyYWR6aWVja2llXCIsXHJcbiAgICBcInN6YWxlxYRjemVcIixcclxuICAgIFwib3ByYWNvd2FuZSB3IGxhYm9yYXRvcml1bSBhbGNoZW1pY3pueW1cIixcclxuICAgIFwibmllcG93c3RyenltYW5lXCIsXHJcbiAgICBcInfFgmFkY3plXCIsXHJcbiAgICBcIm1yb2N6bmVcIixcclxuICAgIFwidGFqZW1uZVwiLFxyXG4gICAgXCJ3xZtjaWVrxYJlXCIsXHJcbiAgICBcIndzcGllcmFuZSBtb2PEhSBvdGNoxYJhbmlcIixcclxuICAgIFwicHJ6ZXN5Y29uZSB6xYLEhSBtb2PEhVwiXHJcbiAgXTtcclxuICBkZXNQYXJ0LmlubmVyVGV4dCA9IGFycmF5W2ldO1xyXG59XHJcbmZ1bmN0aW9uIHNldElNRyhpKSB7XHJcbiAgbGV0IGJlbHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0XCJcclxuICApW2ldO1xyXG4gIGxldCBpbWFnID0gYmVsdC5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nXCIpWzBdO1xyXG4gIGxldCBhdHRyeWIgPSBpbWFnLmdldEF0dHJpYnV0ZShcInNyY1wiKTtcclxuICBsZXQgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuLS1wbGF0ZV9pbWdfaWNvblwiKTtcclxuICBpY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBhdHRyeWIpO1xyXG4gIGxldCBhbGxJTUdzID0gYmVsdC5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nXCIpLmxlbmd0aDtcclxuICBsZXQgc3RhbmRhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLi0tc3RhbmRhcnRfaW1nX2Jja2dcIik7XHJcbiAgd2hpbGUgKHN0YW5kYXJ0LnF1ZXJ5U2VsZWN0b3IoXCJJTUdcIikgIT09IG51bGwpIHtcclxuICAgIGxldCBpbWFnZVRvRGVsID0gc3RhbmRhcnQucXVlcnlTZWxlY3RvcihcIklNR1wiKTtcclxuICAgIHN0YW5kYXJ0LnJlbW92ZUNoaWxkKGltYWdlVG9EZWwpO1xyXG4gIH1cclxuICBmb3IgKGxldCBqID0gMDsgaiA8IGFsbElNR3M7IGorKykge1xyXG4gICAgaWYgKGogPiAwKSB7XHJcbiAgICAgIGxldCB0aGVJTUcgPSBiZWx0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWdcIilbal07XHJcbiAgICAgIGxldCBzb3VyY2VJTUcgPSB0aGVJTUcuZ2V0QXR0cmlidXRlKFwic3JjXCIpO1xyXG4gICAgICBsZXQgbmV3SU1HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgbmV3SU1HLnNldEF0dHJpYnV0ZShcInNyY1wiLCBzb3VyY2VJTUcpO1xyXG4gICAgICBzdGFuZGFydC5hcHBlbmRDaGlsZChuZXdJTUcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBzZXROYW1lVG9EZXMoKSB7XHJcbiAgbGV0IGlucCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJpbWllXCJdJyk7XHJcbiAgbGV0IG5hbSA9IGlucC52YWx1ZTtcclxuICBsZXQgaW5wQiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcnp5ZG9tZWtcIl0nKTtcclxuICBsZXQgc3VybmFtID0gaW5wQi52YWx1ZTtcclxuICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuLS1kZXNfaW1pZVwiKTtcclxuICBpdGVtLmlubmVyVGV4dCA9IG5hbSArIFwiIFwiICsgc3VybmFtO1xyXG59XHJcbmZ1bmN0aW9uIHNldFN0cmlrZU5hbWVUb0RlcyhpKSB7XHJcbiAgbGV0IGlucCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJuYXp3YXVkZXJ6ZW5pYVwiXScpO1xyXG4gIGlucC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IHN0ck5hbWUgPSBpbnAudmFsdWU7XHJcbiAgICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuLS1kZXNfbmF6d2EtY2lvc3VcIik7XHJcbiAgICBpdGVtLmlubmVyVGV4dCA9IHN0ck5hbWU7XHJcbiAgICBzZXRQYXJ0T2ZBdHRhY2tEZXNjcmlwdGlvbihpKTtcclxuICAgIHNldE5hbWVUb0RlcygpO1xyXG4gICAgc2V0Rm9yY2VEZXMoaSk7XHJcbiAgICBzaG93QWxsRGVzKCk7XHJcbiAgfSk7XHJcbn1cclxuZnVuY3Rpb24gc2V0Rm9yY2VEZXMoaSkge1xyXG4gIGxldCBiZWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwiLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdFwiXHJcbiAgKVtpXTtcclxuICBsZXQgSU1HcyA9IGJlbHQucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKTtcclxuICBsZXQgaXRlciA9IElNR3MubGVuZ3RoO1xyXG4gIGxldCBzdHJuZyA9IFtdO1xyXG4gIGZvciAobGV0IGogPSAwOyBqIDwgaXRlcjsgaisrKSB7XHJcbiAgICBsZXQgSU1HID0gSU1Hc1tqXTtcclxuICAgIGxldCBhdHRyeWIgPSBJTUcuZ2V0QXR0cmlidXRlKFwic3JjXCIpO1xyXG4gICAgaWYgKGogIT09IDApIHtcclxuICAgICAgaWYgKGF0dHJ5YiA9PT0gXCJpY29ucy9icm9uLWJhcmJhLnN2Z1wiKSB7XHJcbiAgICAgICAgc3RybmcucHVzaChcImRvZGF0a293xIUgbW9jxIUgdWRlcnplbmlvd8SFXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gXCJpY29ucy9icm9uLWN6YXIuc3ZnXCIpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKFwiZG9kYXRrb3fEhSBtb2PEhSBjemFybm9rc2nEmXNrxIVcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSBcImljb25zL2Jyb24tc3Ryei5zdmdcIikge1xyXG4gICAgICAgIHN0cm5nLnB1c2goXCJkb2RhdGtvd3ltIGt1bnN6dGVtIHN0cnplbGVja2ltXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gXCJpY29ucy9icm9uLXN6YWwuc3ZnXCIpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKFwiZG9kYXRrb3d5bSBzemFsZcWEc3R3ZW1cIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSBcImljb25zL2Jyb24temRyYS5zdmdcIikge1xyXG4gICAgICAgIHN0cm5nLnB1c2goXCJuaWVzcG9kemlhbnltIHpkcmFkbGl3eW0gY2lvc2VtXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gXCJpY29ucy96eXctb2dpZW4uc3ZnXCIpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKFwixbx5d2lvxYJlbSBvZ25pYVwiKTtcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09IFwiaWNvbnMvenl3LXJvemtsYWQuc3ZnXCIpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKFwixbx5d2lvxYJlbSByb3prxYJhZHVcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSBcImljb25zL3p5dy13b2Quc3ZnXCIpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKFwixbx5d2lvxYJlbSB3b2R5XCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gXCJpY29ucy96eXctem1pYW5hLnN2Z1wiKSB7XHJcbiAgICAgICAgc3RybmcucHVzaChcIsW8eXdpb8WCZW0gem1pYW55XCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gXCJpY29ucy96eXctenl3aWEuc3ZnXCIpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKFwixbx5d2lvxYJlbSDFvHl3aWlcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RybmcucHVzaChcInfFgmFzbsSFIG3EhWRyb8WbY2nEhSDFvHl3aW/FgsOzdyBpIHRhbGVudMOzd1wiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBsZXQgc3RyaW5nVG9TZXQgPSBzdHJuZy5qb2luKFwiLCBcIik7XHJcbiAgbGV0IHNwbkRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuLS1kZXNfenl3aW9sXCIpO1xyXG4gIHNwbkRlcy5pbm5lclRleHQgPSBzdHJpbmdUb1NldCArIFwiLlwiO1xyXG59XHJcbmZ1bmN0aW9uIHNob3dBbGxEZXMoKSB7XHJcbiAgbGV0IGFsbERlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuLS1kZXNcIik7XHJcbiAgYWxsRGVzLmNsYXNzTGlzdC5yZW1vdmUoXCJpdHNIaWRkZW5cIik7XHJcbn1cclxuIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNob29zZVlvdXJBdmF0YXIiLCJjb250YWluZXJzIiwicXVlcnlTZWxlY3RvckFsbCIsImF2YXRhcnMiLCJhbW91bnQiLCJsZW5ndGgiLCJpIiwiaXRlbSIsImNob29zZVRoaXNBdmF0YXIiLCJzZXRPbmVQYXJ0T2ZBdHRhY2tEZXNjcmlwdGlvbiIsInN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0cyIsImVuYWJsZUF0dGFja3MiLCJxdWVyeVNlbGVjdG9yIiwiY2hlY2tlZCIsImRlc1BhcnQiLCJhcnJheSIsImlubmVyVGV4dCIsImNvbnQiLCJvcHRpb25zIiwiaXRlciIsIngiLCJiZWx0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJlbmFibGVkQXR0YWNrcyIsImRpc2FibGVkSXRlbSIsImNsYXNzTGlzdCIsInJlbW92ZSIsIm9wdHMiLCJqIiwic2VsZWN0ZWQiLCJlbmFibGVkQXR0YWNrIiwiYWRkIiwiaW5pdGlhbGl6ZUF0dGFja3NQYXJ0Iiwib3B0Iiwib25NT3V0Iiwib25NRW50ZXIiLCJzeW5jaHJvbml6ZVRoaXNCY2tncldpdGhJbWFnZUJlbHRIb3ZlckJja2dyIiwic3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRucyIsImlzRW50ZXIiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiYmNnQ29sIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImluaXRpYWxpemUiLCJzZXRJTUciLCJzZXRTdHJpa2VOYW1lVG9EZXMiLCJzZXRQYXJ0T2ZBdHRhY2tEZXNjcmlwdGlvbiIsImltYWciLCJhdHRyeWIiLCJnZXRBdHRyaWJ1dGUiLCJpY29uIiwic2V0QXR0cmlidXRlIiwiYWxsSU1HcyIsInN0YW5kYXJ0IiwiaW1hZ2VUb0RlbCIsInJlbW92ZUNoaWxkIiwidGhlSU1HIiwic291cmNlSU1HIiwibmV3SU1HIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwic2V0TmFtZVRvRGVzIiwiaW5wIiwibmFtIiwidmFsdWUiLCJpbnBCIiwic3VybmFtIiwic3RyTmFtZSIsInNldEZvcmNlRGVzIiwic2hvd0FsbERlcyIsIklNR3MiLCJzdHJuZyIsIklNRyIsInB1c2giLCJzdHJpbmdUb1NldCIsImpvaW4iLCJzcG5EZXMiLCJhbGxEZXMiXSwibWFwcGluZ3MiOiI7OztJQUVBQSxTQUFTQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOENDLGdCQUE5QztJQUNBLFNBQVNBLGdCQUFULEdBQTJCO0lBQ3ZCLFFBQUlDLGFBQWFILFNBQVNJLGdCQUFULENBQTBCLG1FQUExQixDQUFqQjtJQUNBLFFBQUlDLFVBQVVMLFNBQVNJLGdCQUFULENBQTBCLHNFQUExQixDQUFkO0lBQ0EsUUFBSUUsU0FBU0QsUUFBUUUsTUFBckI7O0lBSHVCLCtCQUlkQyxDQUpjO0lBS25CLFlBQUlDLE9BQU9KLFFBQVFHLENBQVIsQ0FBWDtJQUNBQyxhQUFLUixnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFZO0lBQ3ZDUyw2QkFBaUJELElBQWpCO0lBQ0FFLDBDQUE4QkgsQ0FBOUI7SUFDQUksOENBQWtDVCxVQUFsQztJQUNBVSwwQkFBY0wsQ0FBZDtJQUNILFNBTEQ7SUFObUI7O0lBSXZCLFNBQUssSUFBSUEsSUFBRSxDQUFYLEVBQWFBLElBQUVGLE1BQWYsRUFBc0JFLEdBQXRCLEVBQTBCO0lBQUEsY0FBakJBLENBQWlCO0lBUXpCO0lBQ0o7SUFDRCxTQUFTRSxnQkFBVCxDQUEwQkQsSUFBMUIsRUFBZ0M7SUFDNUJBLFNBQUtLLGFBQUwsQ0FBbUIsT0FBbkIsRUFBNEJDLE9BQTVCLEdBQW9DLElBQXBDO0lBQ0g7SUFDRCxTQUFTSiw2QkFBVCxDQUF1Q0gsQ0FBdkMsRUFBeUM7SUFDckMsUUFBSVEsVUFBVWhCLFNBQVNjLGFBQVQsQ0FBdUIsb0JBQXZCLENBQWQ7SUFDQSxRQUFJRyxRQUFRLENBQ1IsV0FEUSxFQUVSLGFBRlEsRUFHUixjQUhRLEVBSVIsWUFKUSxFQUtSLGVBTFEsRUFNUiwrQ0FOUSxDQUFaO0lBUUFELFlBQVFFLFNBQVIsR0FBa0JELE1BQU1ULENBQU4sQ0FBbEI7SUFDSDtJQUNELFNBQVNJLGlDQUFULENBQTJDVCxVQUEzQyxFQUFzRDtJQUNsRCxRQUFJRyxTQUFTSCxXQUFXSSxNQUF4QjtJQUNBLFNBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRixNQUFwQixFQUE0QkUsR0FBNUIsRUFBaUM7SUFDN0IsWUFBSVcsT0FBT2hCLFdBQVdLLENBQVgsQ0FBWDtJQUNBLFlBQUlZLFVBQVVELEtBQUtmLGdCQUFMLENBQXNCLFFBQXRCLENBQWQ7SUFDQSxZQUFJaUIsT0FBT0QsUUFBUWIsTUFBbkI7SUFDQSxhQUFLLElBQUllLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsSUFBcEIsRUFBMEJDLEdBQTFCLEVBQStCO0lBQzNCLGdCQUFJQyxPQUFPSixLQUFLZixnQkFBTCxDQUFzQiwwRkFBdEIsRUFBa0hrQixDQUFsSCxDQUFYO0lBQ0FDLGlCQUFLQyxLQUFMLENBQVdDLGVBQVgsR0FBMkIsU0FBM0I7SUFDSDtJQUNKO0lBQ0o7SUFDRCxTQUFTWixhQUFULENBQXVCTCxDQUF2QixFQUEwQjtJQUN0QixRQUFJa0IsaUJBQWlCMUIsU0FBU0ksZ0JBQVQsQ0FBMEIsbUVBQTFCLENBQXJCO0lBQ0EsU0FBSyxJQUFJa0IsSUFBRSxDQUFYLEVBQWNBLElBQUUsQ0FBaEIsRUFBbUJBLEdBQW5CLEVBQXVCO0lBQ25CLFlBQUlLLGVBQWVELGVBQWVKLENBQWYsQ0FBbkI7SUFDQUsscUJBQWFDLFNBQWIsQ0FBdUJDLE1BQXZCLENBQThCLFNBQTlCO0lBQ0EsWUFBSUMsT0FBT0gsYUFBYXZCLGdCQUFiLENBQThCLFFBQTlCLENBQVg7SUFDQSxZQUFJRSxTQUFTd0IsS0FBS3ZCLE1BQWxCO0lBQ0EsYUFBSyxJQUFJd0IsSUFBRSxDQUFYLEVBQWFBLElBQUV6QixNQUFmLEVBQXNCeUIsR0FBdEIsRUFBMEI7SUFDdEIsZ0JBQUlELEtBQUtDLENBQUwsRUFBUUMsUUFBUixLQUFtQixJQUF2QixFQUE0QjtJQUN4QkYscUJBQUtDLENBQUwsRUFBUUMsUUFBUixHQUFpQixLQUFqQjtJQUNILGFBQ0o7SUFDSjtJQUNELFFBQUlDLGdCQUFnQlAsZUFBZWxCLENBQWYsQ0FBcEI7SUFDQXlCLGtCQUFjTCxTQUFkLENBQXdCTSxHQUF4QixDQUE0QixTQUE1QjtJQUNIOztJQzFERGxDLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4Q2tDLHFCQUE5Qzs7SUFFQSxTQUFTQSxxQkFBVCxHQUFpQztJQUM3QixRQUFJaEMsYUFBYUgsU0FBU0ksZ0JBQVQsQ0FBMEIsbUVBQTFCLENBQWpCO0lBQ0EsUUFBSUUsU0FBU0gsV0FBV0ksTUFBeEI7O0lBRjZCLCtCQUdwQkMsQ0FIb0I7SUFJekIsWUFBSVcsT0FBT2hCLFdBQVdLLENBQVgsQ0FBWDtJQUNBLFlBQUlZLFVBQVVELEtBQUtmLGdCQUFMLENBQXNCLFFBQXRCLENBQWQ7SUFDQSxZQUFJaUIsT0FBT0QsUUFBUWIsTUFBbkI7O0lBTnlCLHFDQU9oQmUsQ0FQZ0I7SUFRckIsZ0JBQUljLE1BQU1oQixRQUFRRSxDQUFSLENBQVY7SUFDQWMsZ0JBQUluQyxnQkFBSixDQUFxQixVQUFyQixFQUFpQ29DLE1BQWpDO0lBQ0FELGdCQUFJbkMsZ0JBQUosQ0FBcUIsWUFBckIsRUFBbUNxQyxRQUFuQzs7SUFFQSxxQkFBU0EsUUFBVCxHQUFvQjtJQUNoQixvQkFBSUYsSUFBSUosUUFBSixLQUFpQixLQUFyQixFQUE0QjtJQUN4Qk8sZ0VBQTRDSCxHQUE1QyxFQUFpRGpCLElBQWpELEVBQXVERyxDQUF2RCxFQUEwRCxJQUExRDtJQUNIO0lBQ0o7SUFFRCxxQkFBU2UsTUFBVCxHQUFrQjtJQUNkLG9CQUFJRCxJQUFJSixRQUFKLEtBQWlCLEtBQXJCLEVBQTRCO0lBQ3hCTyxnRUFBNENILEdBQTVDLEVBQWlEakIsSUFBakQsRUFBdURHLENBQXZELEVBQTBELEtBQTFEO0lBQ0g7SUFDSixhQUNEYyxnQkFBSW5DLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFlBQVk7SUFDdEN1QyxtREFBbUNyQixJQUFuQyxFQUF5Q0UsSUFBekM7SUFDQWtCLDREQUE0Q0gsR0FBNUMsRUFBaURqQixJQUFqRCxFQUF1REcsQ0FBdkQsRUFBMEQsSUFBMUQ7SUFDSCxhQUhEO0lBdkJxQjs7SUFPekIsYUFBSyxJQUFJQSxJQUFJLENBQWIsRUFBZ0JBLElBQUlELElBQXBCLEVBQTBCQyxHQUExQixFQUErQjtJQUFBLG1CQUF0QkEsQ0FBc0I7SUFxQjlCO0lBNUJ3Qjs7SUFHN0IsU0FBSyxJQUFJZCxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLE1BQXBCLEVBQTRCRSxHQUE1QixFQUFpQztJQUFBLGNBQXhCQSxDQUF3QjtJQTBCaEM7SUFDSjs7SUFFRCxTQUFTZ0Msa0NBQVQsQ0FBNENyQixJQUE1QyxFQUFrREUsSUFBbEQsRUFBd0Q7SUFDcEQsU0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlELElBQXBCLEVBQTBCQyxHQUExQixFQUErQjtJQUMzQixZQUFJQyxPQUFPSixLQUFLZixnQkFBTCxDQUFzQiwwRkFBdEIsRUFBa0hrQixDQUFsSCxDQUFYO0lBQ0FDLGFBQUtDLEtBQUwsQ0FBV0MsZUFBWCxHQUE2QixTQUE3QjtJQUNIO0lBQ0o7O0lBRUQsU0FBU2MsMkNBQVQsQ0FBcURILEdBQXJELEVBQTBEakIsSUFBMUQsRUFBZ0VHLENBQWhFLEVBQW1FbUIsT0FBbkUsRUFBNEU7SUFDeEUsUUFBSWxCLE9BQU9KLEtBQUtmLGdCQUFMLENBQXNCLDBGQUF0QixFQUFrSGtCLENBQWxILENBQVg7SUFDQSxRQUFJbUIsWUFBWSxJQUFoQixFQUFzQjtJQUNsQixZQUFJakIsUUFBUWtCLE9BQU9DLGdCQUFQLENBQXdCUCxHQUF4QixDQUFaO0lBQ0EsWUFBSVEsU0FBU3BCLE1BQU1xQixnQkFBTixDQUF1QixrQkFBdkIsQ0FBYjtJQUNBdEIsYUFBS0MsS0FBTCxDQUFXQyxlQUFYLEdBQTZCbUIsTUFBN0I7SUFDSCxLQUpELE1BSU8sSUFBSUgsWUFBWSxLQUFoQixFQUF1QjtJQUMxQmxCLGFBQUtDLEtBQUwsQ0FBV0MsZUFBWCxHQUE2QixTQUE3QjtJQUNIO0lBQ0o7O0lDbEREekIsU0FBU0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDNkMsVUFBOUM7SUFDQSxTQUFTQSxVQUFULEdBQXNCO0lBQ3BCLE1BQUloQixPQUFPOUIsU0FBU0ksZ0JBQVQsQ0FDVCxzRkFEUyxDQUFYO0lBR0EsTUFBSUUsU0FBU3dCLEtBQUt2QixNQUFsQjs7SUFKb0IsNkJBS1hDLENBTFc7SUFNbEIsUUFBSUMsT0FBT3FCLEtBQUt0QixDQUFMLENBQVg7SUFDQUMsU0FBS1IsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBVztJQUN4QzhDLGFBQU92QyxDQUFQO0lBQ0F3Qyx5QkFBbUJ4QyxDQUFuQjtJQUNELEtBSEQ7SUFQa0I7O0lBS3BCLE9BQUssSUFBSUEsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRixNQUFwQixFQUE0QkUsR0FBNUIsRUFBaUM7SUFBQSxVQUF4QkEsQ0FBd0I7SUFNaEM7SUFDRjtJQUNELFNBQVN5QywwQkFBVCxDQUFvQ3pDLENBQXBDLEVBQXVDO0lBQ3JDLE1BQUlRLFVBQVVoQixTQUFTYyxhQUFULENBQXVCLHFCQUF2QixDQUFkO0lBQ0EsTUFBSUcsUUFBUSxDQUNWLFVBRFUsRUFFVixrQkFGVSxFQUdWLFlBSFUsRUFJVixZQUpVLEVBS1YsWUFMVSxFQU1WLFdBTlUsRUFPVixXQVBVLEVBUVYsYUFSVSxFQVNWLGNBVFUsRUFVVixXQVZVLEVBV1Ysd0NBWFUsRUFZVixpQkFaVSxFQWFWLFNBYlUsRUFjVixTQWRVLEVBZVYsU0FmVSxFQWdCVixVQWhCVSxFQWlCVix5QkFqQlUsRUFrQlYscUJBbEJVLENBQVo7SUFvQkFELFVBQVFFLFNBQVIsR0FBb0JELE1BQU1ULENBQU4sQ0FBcEI7SUFDRDtJQUNELFNBQVN1QyxNQUFULENBQWdCdkMsQ0FBaEIsRUFBbUI7SUFDakIsTUFBSWUsT0FBT3ZCLFNBQVNJLGdCQUFULENBQ1QsMEZBRFMsRUFFVEksQ0FGUyxDQUFYO0lBR0EsTUFBSTBDLE9BQU8zQixLQUFLbkIsZ0JBQUwsQ0FBc0IsS0FBdEIsRUFBNkIsQ0FBN0IsQ0FBWDtJQUNBLE1BQUkrQyxTQUFTRCxLQUFLRSxZQUFMLENBQWtCLEtBQWxCLENBQWI7SUFDQSxNQUFJQyxPQUFPckQsU0FBU2MsYUFBVCxDQUF1QixtQkFBdkIsQ0FBWDtJQUNBdUMsT0FBS0MsWUFBTCxDQUFrQixLQUFsQixFQUF5QkgsTUFBekI7SUFDQSxNQUFJSSxVQUFVaEMsS0FBS25CLGdCQUFMLENBQXNCLEtBQXRCLEVBQTZCRyxNQUEzQztJQUNBLE1BQUlpRCxXQUFXeEQsU0FBU2MsYUFBVCxDQUF1QixzQkFBdkIsQ0FBZjtJQUNBLFNBQU8wQyxTQUFTMUMsYUFBVCxDQUF1QixLQUF2QixNQUFrQyxJQUF6QyxFQUErQztJQUM3QyxRQUFJMkMsYUFBYUQsU0FBUzFDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBakI7SUFDQTBDLGFBQVNFLFdBQVQsQ0FBcUJELFVBQXJCO0lBQ0Q7SUFDRCxPQUFLLElBQUkxQixJQUFJLENBQWIsRUFBZ0JBLElBQUl3QixPQUFwQixFQUE2QnhCLEdBQTdCLEVBQWtDO0lBQ2hDLFFBQUlBLElBQUksQ0FBUixFQUFXO0lBQ1QsVUFBSTRCLFNBQVNwQyxLQUFLbkIsZ0JBQUwsQ0FBc0IsS0FBdEIsRUFBNkIyQixDQUE3QixDQUFiO0lBQ0EsVUFBSTZCLFlBQVlELE9BQU9QLFlBQVAsQ0FBb0IsS0FBcEIsQ0FBaEI7SUFDQSxVQUFJUyxTQUFTN0QsU0FBUzhELGFBQVQsQ0FBdUIsS0FBdkIsQ0FBYjtJQUNBRCxhQUFPUCxZQUFQLENBQW9CLEtBQXBCLEVBQTJCTSxTQUEzQjtJQUNBSixlQUFTTyxXQUFULENBQXFCRixNQUFyQjtJQUNEO0lBQ0Y7SUFDRjtJQUNELFNBQVNHLFlBQVQsR0FBd0I7SUFDdEIsTUFBSUMsTUFBTWpFLFNBQVNjLGFBQVQsQ0FBdUIsb0JBQXZCLENBQVY7SUFDQSxNQUFJb0QsTUFBTUQsSUFBSUUsS0FBZDtJQUNBLE1BQUlDLE9BQU9wRSxTQUFTYyxhQUFULENBQXVCLHlCQUF2QixDQUFYO0lBQ0EsTUFBSXVELFNBQVNELEtBQUtELEtBQWxCO0lBQ0EsTUFBSTFELE9BQU9ULFNBQVNjLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBWDtJQUNBTCxPQUFLUyxTQUFMLEdBQWlCZ0QsTUFBTSxHQUFOLEdBQVlHLE1BQTdCO0lBQ0Q7SUFDRCxTQUFTckIsa0JBQVQsQ0FBNEJ4QyxDQUE1QixFQUErQjtJQUM3QixNQUFJeUQsTUFBTWpFLFNBQVNjLGFBQVQsQ0FBdUIsOEJBQXZCLENBQVY7SUFDQW1ELE1BQUloRSxnQkFBSixDQUFxQixRQUFyQixFQUErQixZQUFXO0lBQ3hDLFFBQUlxRSxVQUFVTCxJQUFJRSxLQUFsQjtJQUNBLFFBQUkxRCxPQUFPVCxTQUFTYyxhQUFULENBQXVCLG9CQUF2QixDQUFYO0lBQ0FMLFNBQUtTLFNBQUwsR0FBaUJvRCxPQUFqQjtJQUNBckIsK0JBQTJCekMsQ0FBM0I7SUFDQXdEO0lBQ0FPLGdCQUFZL0QsQ0FBWjtJQUNBZ0U7SUFDRCxHQVJEO0lBU0Q7SUFDRCxTQUFTRCxXQUFULENBQXFCL0QsQ0FBckIsRUFBd0I7SUFDdEIsTUFBSWUsT0FBT3ZCLFNBQVNJLGdCQUFULENBQ1QsMEZBRFMsRUFFVEksQ0FGUyxDQUFYO0lBR0EsTUFBSWlFLE9BQU9sRCxLQUFLbkIsZ0JBQUwsQ0FBc0IsS0FBdEIsQ0FBWDtJQUNBLE1BQUlpQixPQUFPb0QsS0FBS2xFLE1BQWhCO0lBQ0EsTUFBSW1FLFFBQVEsRUFBWjtJQUNBLE9BQUssSUFBSTNDLElBQUksQ0FBYixFQUFnQkEsSUFBSVYsSUFBcEIsRUFBMEJVLEdBQTFCLEVBQStCO0lBQzdCLFFBQUk0QyxNQUFNRixLQUFLMUMsQ0FBTCxDQUFWO0lBQ0EsUUFBSW9CLFNBQVN3QixJQUFJdkIsWUFBSixDQUFpQixLQUFqQixDQUFiO0lBQ0EsUUFBSXJCLE1BQU0sQ0FBVixFQUFhO0lBQ1gsVUFBSW9CLFdBQVcsc0JBQWYsRUFBdUM7SUFDckN1QixjQUFNRSxJQUFOLENBQVcsNEJBQVg7SUFDRCxPQUZELE1BRU8sSUFBSXpCLFdBQVcscUJBQWYsRUFBc0M7SUFDM0N1QixjQUFNRSxJQUFOLENBQVcsOEJBQVg7SUFDRCxPQUZNLE1BRUEsSUFBSXpCLFdBQVcscUJBQWYsRUFBc0M7SUFDM0N1QixjQUFNRSxJQUFOLENBQVcsaUNBQVg7SUFDRCxPQUZNLE1BRUEsSUFBSXpCLFdBQVcscUJBQWYsRUFBc0M7SUFDM0N1QixjQUFNRSxJQUFOLENBQVcsd0JBQVg7SUFDRCxPQUZNLE1BRUEsSUFBSXpCLFdBQVcscUJBQWYsRUFBc0M7SUFDM0N1QixjQUFNRSxJQUFOLENBQVcsaUNBQVg7SUFDRCxPQUZNLE1BRUEsSUFBSXpCLFdBQVcscUJBQWYsRUFBc0M7SUFDM0N1QixjQUFNRSxJQUFOLENBQVcsZ0JBQVg7SUFDRCxPQUZNLE1BRUEsSUFBSXpCLFdBQVcsdUJBQWYsRUFBd0M7SUFDN0N1QixjQUFNRSxJQUFOLENBQVcsbUJBQVg7SUFDRCxPQUZNLE1BRUEsSUFBSXpCLFdBQVcsbUJBQWYsRUFBb0M7SUFDekN1QixjQUFNRSxJQUFOLENBQVcsZUFBWDtJQUNELE9BRk0sTUFFQSxJQUFJekIsV0FBVyxzQkFBZixFQUF1QztJQUM1Q3VCLGNBQU1FLElBQU4sQ0FBVyxpQkFBWDtJQUNELE9BRk0sTUFFQSxJQUFJekIsV0FBVyxxQkFBZixFQUFzQztJQUMzQ3VCLGNBQU1FLElBQU4sQ0FBVyxnQkFBWDtJQUNELE9BRk0sTUFFQTtJQUNMRixjQUFNRSxJQUFOLENBQVcsc0NBQVg7SUFDRDtJQUNGO0lBQ0Y7SUFDRCxNQUFJQyxjQUFjSCxNQUFNSSxJQUFOLENBQVcsSUFBWCxDQUFsQjtJQUNBLE1BQUlDLFNBQVMvRSxTQUFTYyxhQUFULENBQXVCLGVBQXZCLENBQWI7SUFDQWlFLFNBQU83RCxTQUFQLEdBQW1CMkQsY0FBYyxHQUFqQztJQUNEO0lBQ0QsU0FBU0wsVUFBVCxHQUFzQjtJQUNwQixNQUFJUSxTQUFTaEYsU0FBU2MsYUFBVCxDQUF1QixRQUF2QixDQUFiO0lBQ0FrRSxTQUFPcEQsU0FBUCxDQUFpQkMsTUFBakIsQ0FBd0IsV0FBeEI7SUFDRDs7OzsifQ==
