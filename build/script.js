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

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyIuLi9zb3VyY2UvZHluYW1pY3Mva2xhc2EuanMiLCIuLi9zb3VyY2UvZHluYW1pY3MvYXRha2kuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbid1c2Ugc3RyaWN0JztcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGNob29zZVlvdXJBdmF0YXIpO1xyXG5mdW5jdGlvbiBjaG9vc2VZb3VyQXZhdGFyKCl7XHJcbiAgICBsZXQgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyJyk7XHJcbiAgICBsZXQgYXZhdGFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9yYWRpby1sYWItY29udGFpbmVyJyk7XHJcbiAgICBsZXQgYW1vdW50ID0gYXZhdGFycy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpPTA7aTxhbW91bnQ7aSsrKXtcclxuICAgICAgICBsZXQgaXRlbSA9IGF2YXRhcnNbaV07XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY2hvb3NlVGhpc0F2YXRhcihpdGVtKTtcclxuICAgICAgICAgICAgc2V0T25lUGFydE9mQXR0YWNrRGVzY3JpcHRpb24oaSk7XHJcbiAgICAgICAgICAgIHN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0cyhjb250YWluZXJzKTtcclxuICAgICAgICAgICAgZW5hYmxlQXR0YWNrcyhpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjaG9vc2VUaGlzQXZhdGFyKGl0ZW0pIHtcclxuICAgIGl0ZW0ucXVlcnlTZWxlY3RvcignaW5wdXQnKS5jaGVja2VkPXRydWU7XHJcbn1cclxuZnVuY3Rpb24gc2V0T25lUGFydE9mQXR0YWNrRGVzY3JpcHRpb24oaSl7XHJcbiAgICBsZXQgZGVzUGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Agc3Bhbi4tLWRlc19rbGFzYScpO1xyXG4gICAgbGV0IGFycmF5ID0gW1xyXG4gICAgICAgICdicnV0YWxuxIUuJyxcclxuICAgICAgICAnc3RyemVsZWNrxIUuJyxcclxuICAgICAgICAnemRyYWR6aWVja8SFLicsXHJcbiAgICAgICAgJ3N6YWxlxYRjesSFLicsXHJcbiAgICAgICAgJ3N6YXJsYXRhxYRza8SFLicsXHJcbiAgICAgICAgJ2x1YiBjenlta29sd2llaywgY28gd3BhZG5pZSBrYXLFgm93aSB3IMWCYXBza2EuJ1xyXG4gICAgXVxyXG4gICAgZGVzUGFydC5pbm5lclRleHQ9YXJyYXlbaV07XHJcbn1cclxuZnVuY3Rpb24gc3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRzKGNvbnRhaW5lcnMpe1xyXG4gICAgbGV0IGFtb3VudCA9IGNvbnRhaW5lcnMubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xyXG4gICAgICAgIGxldCBjb250ID0gY29udGFpbmVyc1tpXTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyk7XHJcbiAgICAgICAgbGV0IGl0ZXIgPSBvcHRpb25zLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGl0ZXI7IHgrKykge1xyXG4gICAgICAgICAgICBsZXQgYmVsdCA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdCcpW3hdO1xyXG4gICAgICAgICAgICBiZWx0LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cImluaGVyaXRcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZW5hYmxlQXR0YWNrcyhpKSB7XHJcbiAgICBsZXQgZW5hYmxlZEF0dGFja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcicpO1xyXG4gICAgZm9yIChsZXQgeD0wOyB4PDY7IHgrKyl7XHJcbiAgICAgICAgbGV0IGRpc2FibGVkSXRlbSA9IGVuYWJsZWRBdHRhY2tzW3hdO1xyXG4gICAgICAgIGRpc2FibGVkSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdlbmFibGVkJyk7XHJcbiAgICAgICAgbGV0IG9wdHMgPSBkaXNhYmxlZEl0ZW0ucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyk7XHJcbiAgICAgICAgbGV0IGFtb3VudCA9IG9wdHMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGo9MDtqPGFtb3VudDtqKyspe1xyXG4gICAgICAgICAgICBpZiAob3B0c1tqXS5zZWxlY3RlZD09PXRydWUpe1xyXG4gICAgICAgICAgICAgICAgb3B0c1tqXS5zZWxlY3RlZD1mYWxzZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgZW5hYmxlZEF0dGFjayA9IGVuYWJsZWRBdHRhY2tzW2ldO1xyXG4gICAgZW5hYmxlZEF0dGFjay5jbGFzc0xpc3QuYWRkKCdlbmFibGVkJyk7XHJcbn0iLCIndXNlIHN0cmljdCc7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0aWFsaXplQXR0YWNrc1BhcnQpO1xyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZUF0dGFja3NQYXJ0KCkge1xyXG4gICAgbGV0IGNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcicpO1xyXG4gICAgbGV0IGFtb3VudCA9IGNvbnRhaW5lcnMubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xyXG4gICAgICAgIGxldCBjb250ID0gY29udGFpbmVyc1tpXTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyk7XHJcbiAgICAgICAgbGV0IGl0ZXIgPSBvcHRpb25zLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGl0ZXI7IHgrKykge1xyXG4gICAgICAgICAgICBsZXQgb3B0ID0gb3B0aW9uc1t4XTtcclxuICAgICAgICAgICAgb3B0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0Jywgb25NT3V0KTtcclxuICAgICAgICAgICAgb3B0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBvbk1FbnRlcik7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBvbk1FbnRlcigpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvcHQuc2VsZWN0ZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3luY2hyb25pemVUaGlzQmNrZ3JXaXRoSW1hZ2VCZWx0SG92ZXJCY2tncihvcHQsIGNvbnQsIHgsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gb25NT3V0KCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdC5zZWxlY3RlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBzeW5jaHJvbml6ZVRoaXNCY2tncldpdGhJbWFnZUJlbHRIb3ZlckJja2dyKG9wdCwgY29udCwgeCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBvcHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzeW5jaHJvbml6ZUJhY2tncm91bmRzT2ZPdGhlck9wdG5zKGNvbnQsIGl0ZXIpO1xyXG4gICAgICAgICAgICAgICAgc3luY2hyb25pemVUaGlzQmNrZ3JXaXRoSW1hZ2VCZWx0SG92ZXJCY2tncihvcHQsIGNvbnQsIHgsIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0bnMoY29udCwgaXRlcil7XHJcbiAgICBcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGl0ZXI7IHgrKykge1xyXG4gICAgICAgICAgICBsZXQgYmVsdCA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdCcpW3hdO1xyXG4gICAgICAgICAgICBiZWx0LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cImluaGVyaXRcIjtcclxuICAgICAgICB9XHJcbiAgICBcclxufVxyXG5mdW5jdGlvbiBzeW5jaHJvbml6ZVRoaXNCY2tncldpdGhJbWFnZUJlbHRIb3ZlckJja2dyKG9wdCwgY29udCwgeCwgaXNFbnRlcikge1xyXG4gICAgbGV0IGJlbHQgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnKVt4XTtcclxuICAgIGlmIChpc0VudGVyID09PSB0cnVlKSB7XHJcbiAgICAgICAgbGV0IHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUob3B0KTtcclxuICAgICAgICBsZXQgYmNnQ29sID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1jb2xvcicpO1xyXG4gICAgICAgIGJlbHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmNnQ29sO1xyXG4gICAgfSBlbHNlIGlmIChpc0VudGVyID09PSBmYWxzZSkge1xyXG4gICAgICAgIGJlbHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJpbmhlcml0XCI7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hvb3NlWW91ckF2YXRhciIsImNvbnRhaW5lcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYXZhdGFycyIsImFtb3VudCIsImxlbmd0aCIsImkiLCJpdGVtIiwiY2hvb3NlVGhpc0F2YXRhciIsInNldE9uZVBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uIiwic3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRzIiwiZW5hYmxlQXR0YWNrcyIsInF1ZXJ5U2VsZWN0b3IiLCJjaGVja2VkIiwiZGVzUGFydCIsImFycmF5IiwiaW5uZXJUZXh0IiwiY29udCIsIm9wdGlvbnMiLCJpdGVyIiwieCIsImJlbHQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImVuYWJsZWRBdHRhY2tzIiwiZGlzYWJsZWRJdGVtIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwib3B0cyIsImoiLCJzZWxlY3RlZCIsImVuYWJsZWRBdHRhY2siLCJhZGQiLCJpbml0aWFsaXplQXR0YWNrc1BhcnQiLCJvcHQiLCJvbk1PdXQiLCJvbk1FbnRlciIsInN5bmNocm9uaXplVGhpc0Jja2dyV2l0aEltYWdlQmVsdEhvdmVyQmNrZ3IiLCJzeW5jaHJvbml6ZUJhY2tncm91bmRzT2ZPdGhlck9wdG5zIiwiaXNFbnRlciIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJiY2dDb2wiLCJnZXRQcm9wZXJ0eVZhbHVlIl0sIm1hcHBpbmdzIjoi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
