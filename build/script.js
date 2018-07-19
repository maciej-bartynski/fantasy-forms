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

    function guideReacts(i) {
      var aside = document.querySelector('aside');
      aside.classList.remove('onAdvice');
      aside.classList.remove('onAdviceB');
      setTimeout(function () {
        shakeToFocusUsersAttention(aside);
      }, 0);
      var guide = document.querySelector('.aside-foot .user-guide');
      var title = document.querySelector('.aside-foot_title');
      var arr = ['Gdy wpiszesz imię, przydomek i zawołanie, po zatwierdzeniu zmian pojawi się następna część formularza.', 'Po wyborze klasy, pojawi sie okno wyboru ataku spośród uderzeń charakterystycznych dla tej postaci.', 'Wybierz uderzenie, klikając w słowo opisujące je. Przy każdym epitecie widnieje charakterystyka ciosu w Ikonach Żywiołów i Ikonach Uderzeń.', 'Wymyśl nazwe dla uderzenia z poprzedniego kroku. Gdy ją zatwierdzisz, pojawi sie kolejna cześć karty postaci.', 'Po wyborze jednej opcji z każdej listy, pojawi sie kolejna cześć karty postaci.', 'Kliknij tyle opcji, ile chcesz. Każdy zestaw (czyli moc i pietno) zabiera ci pewną ilość punktów Mądrości.', 'Rozdaj pozostałe punkty mądrości na współczynniki postaci: Życie, Mądrość, Ruch i Działanie.'];
      guide.innerText = arr[i];
      var arrB = ['tożsamość:', 'klasa:', 'atak:', 'nazwa ataku:', 'obrona:', 'zdolność i słabość', 'atrybuty:'];
      title.innerText = arrB[i];
    }
    function shakeToFocusUsersAttention(aside) {
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

    var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var zenscroll = createCommonjsModule(function (module) {
    /**
     * Zenscroll 4.0.2
     * https://github.com/zengabor/zenscroll/
     *
     * Copyright 2015–2018 Gabor Lenard
     *
     * This is free and unencumbered software released into the public domain.
     * 
     * Anyone is free to copy, modify, publish, use, compile, sell, or
     * distribute this software, either in source code form or as a compiled
     * binary, for any purpose, commercial or non-commercial, and by any
     * means.
     * 
     * In jurisdictions that recognize copyright laws, the author or authors
     * of this software dedicate any and all copyright interest in the
     * software to the public domain. We make this dedication for the benefit
     * of the public at large and to the detriment of our heirs and
     * successors. We intend this dedication to be an overt act of
     * relinquishment in perpetuity of all present and future rights to this
     * software under copyright law.
     * 
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
     * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
     * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
     * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
     * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
     * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
     * OTHER DEALINGS IN THE SOFTWARE.
     * 
     * For more information, please refer to <http://unlicense.org>
     * 
     */

    /*jshint devel:true, asi:true */

    /*global define, module */


    (function (root, factory) {
    	if (module.exports) {
    		module.exports = factory();
    	} else {
    		(function install() {
    			// To make sure Zenscroll can be referenced from the header, before `body` is available
    			if (document && document.body) {
    				root.zenscroll = factory();
    			} else {
    				// retry 9ms later
    				setTimeout(install, 9);
    			}
    		})();
    	}
    }(commonjsGlobal, function () {


    	// Detect if the browser already supports native smooth scrolling (e.g., Firefox 36+ and Chrome 49+) and it is enabled:
    	var isNativeSmoothScrollEnabledOn = function (elem) {
    		return elem && "getComputedStyle" in window &&
    			window.getComputedStyle(elem)["scroll-behavior"] === "smooth"
    	};


    	// Exit if it’s not a browser environment:
    	if (typeof window === "undefined" || !("document" in window)) {
    		return {}
    	}


    	var makeScroller = function (container, defaultDuration, edgeOffset) {

    		// Use defaults if not provided
    		defaultDuration = defaultDuration || 999; //ms
    		if (!edgeOffset && edgeOffset !== 0) {
    			// When scrolling, this amount of distance is kept from the edges of the container:
    			edgeOffset = 9; //px
    		}

    		// Handling the life-cycle of the scroller
    		var scrollTimeoutId;
    		var setScrollTimeoutId = function (newValue) {
    			scrollTimeoutId = newValue;
    		};

    		/**
    		 * Stop the current smooth scroll operation immediately
    		 */
    		var stopScroll = function () {
    			clearTimeout(scrollTimeoutId);
    			setScrollTimeoutId(0);
    		};

    		var getTopWithEdgeOffset = function (elem) {
    			return Math.max(0, container.getTopOf(elem) - edgeOffset)
    		};

    		/**
    		 * Scrolls to a specific vertical position in the document.
    		 *
    		 * @param {targetY} The vertical position within the document.
    		 * @param {duration} Optionally the duration of the scroll operation.
    		 *        If not provided the default duration is used.
    		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
    		 */
    		var scrollToY = function (targetY, duration, onDone) {
    			stopScroll();
    			if (duration === 0 || (duration && duration < 0) || isNativeSmoothScrollEnabledOn(container.body)) {
    				container.toY(targetY);
    				if (onDone) {
    					onDone();
    				}
    			} else {
    				var startY = container.getY();
    				var distance = Math.max(0, targetY) - startY;
    				var startTime = new Date().getTime();
    				duration = duration || Math.min(Math.abs(distance), defaultDuration);
    				(function loopScroll() {
    					setScrollTimeoutId(setTimeout(function () {
    						// Calculate percentage:
    						var p = Math.min(1, (new Date().getTime() - startTime) / duration);
    						// Calculate the absolute vertical position:
    						var y = Math.max(0, Math.floor(startY + distance*(p < 0.5 ? 2*p*p : p*(4 - p*2)-1)));
    						container.toY(y);
    						if (p < 1 && (container.getHeight() + y) < container.body.scrollHeight) {
    							loopScroll();
    						} else {
    							setTimeout(stopScroll, 99); // with cooldown time
    							if (onDone) {
    								onDone();
    							}
    						}
    					}, 9));
    				})();
    			}
    		};

    		/**
    		 * Scrolls to the top of a specific element.
    		 *
    		 * @param {elem} The element to scroll to.
    		 * @param {duration} Optionally the duration of the scroll operation.
    		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
    		 */
    		var scrollToElem = function (elem, duration, onDone) {
    			scrollToY(getTopWithEdgeOffset(elem), duration, onDone);
    		};

    		/**
    		 * Scrolls an element into view if necessary.
    		 *
    		 * @param {elem} The element.
    		 * @param {duration} Optionally the duration of the scroll operation.
    		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
    		 */
    		var scrollIntoView = function (elem, duration, onDone) {
    			var elemHeight = elem.getBoundingClientRect().height;
    			var elemBottom = container.getTopOf(elem) + elemHeight;
    			var containerHeight = container.getHeight();
    			var y = container.getY();
    			var containerBottom = y + containerHeight;
    			if (getTopWithEdgeOffset(elem) < y || (elemHeight + edgeOffset) > containerHeight) {
    				// Element is clipped at top or is higher than screen.
    				scrollToElem(elem, duration, onDone);
    			} else if ((elemBottom + edgeOffset) > containerBottom) {
    				// Element is clipped at the bottom.
    				scrollToY(elemBottom - containerHeight + edgeOffset, duration, onDone);
    			} else if (onDone) {
    				onDone();
    			}
    		};

    		/**
    		 * Scrolls to the center of an element.
    		 *
    		 * @param {elem} The element.
    		 * @param {duration} Optionally the duration of the scroll operation.
    		 * @param {offset} Optionally the offset of the top of the element from the center of the screen.
    		 *        A value of 0 is ignored.
    		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
    		 */
    		var scrollToCenterOf = function (elem, duration, offset, onDone) {
    			scrollToY(Math.max(0, container.getTopOf(elem) - container.getHeight()/2 + (offset || elem.getBoundingClientRect().height/2)), duration, onDone);
    		};

    		/**
    		 * Changes default settings for this scroller.
    		 *
    		 * @param {newDefaultDuration} Optionally a new value for default duration, used for each scroll method by default.
    		 *        Ignored if null or undefined.
    		 * @param {newEdgeOffset} Optionally a new value for the edge offset, used by each scroll method by default. Ignored if null or undefined.
    		 * @returns An object with the current values.
    		 */
    		var setup = function (newDefaultDuration, newEdgeOffset) {
    			if (newDefaultDuration === 0 || newDefaultDuration) {
    				defaultDuration = newDefaultDuration;
    			}
    			if (newEdgeOffset === 0 || newEdgeOffset) {
    				edgeOffset = newEdgeOffset;
    			}
    			return {
    				defaultDuration: defaultDuration,
    				edgeOffset: edgeOffset
    			}
    		};

    		return {
    			setup: setup,
    			to: scrollToElem,
    			toY: scrollToY,
    			intoView: scrollIntoView,
    			center: scrollToCenterOf,
    			stop: stopScroll,
    			moving: function () { return !!scrollTimeoutId },
    			getY: container.getY,
    			getTopOf: container.getTopOf
    		}

    	};


    	var docElem = document.documentElement;
    	var getDocY = function () { return window.scrollY || docElem.scrollTop };

    	// Create a scroller for the document:
    	var zenscroll = makeScroller({
    		body: document.scrollingElement || document.body,
    		toY: function (y) { window.scrollTo(0, y); },
    		getY: getDocY,
    		getHeight: function () { return window.innerHeight || docElem.clientHeight },
    		getTopOf: function (elem) { return elem.getBoundingClientRect().top + getDocY() - docElem.offsetTop }
    	});


    	/**
    	 * Creates a scroller from the provided container element (e.g., a DIV)
    	 *
    	 * @param {scrollContainer} The vertical position within the document.
    	 * @param {defaultDuration} Optionally a value for default duration, used for each scroll method by default.
    	 *        Ignored if 0 or null or undefined.
    	 * @param {edgeOffset} Optionally a value for the edge offset, used by each scroll method by default. 
    	 *        Ignored if null or undefined.
    	 * @returns A scroller object, similar to `zenscroll` but controlling the provided element.
    	 */
    	zenscroll.createScroller = function (scrollContainer, defaultDuration, edgeOffset) {
    		return makeScroller({
    			body: scrollContainer,
    			toY: function (y) { scrollContainer.scrollTop = y; },
    			getY: function () { return scrollContainer.scrollTop },
    			getHeight: function () { return Math.min(scrollContainer.clientHeight, window.innerHeight || docElem.clientHeight) },
    			getTopOf: function (elem) { return elem.offsetTop }
    		}, defaultDuration, edgeOffset)
    	};


    	// Automatic link-smoothing on achors
    	// Exclude IE8- or when native is enabled or Zenscroll auto- is disabled
    	if ("addEventListener" in window && !window.noZensmooth && !isNativeSmoothScrollEnabledOn(document.body)) {

    		var isHistorySupported = "history" in window && "pushState" in history;
    		var isScrollRestorationSupported = isHistorySupported && "scrollRestoration" in history;

    		// On first load & refresh make sure the browser restores the position first
    		if (isScrollRestorationSupported) {
    			history.scrollRestoration = "auto";
    		}

    		window.addEventListener("load", function () {

    			if (isScrollRestorationSupported) {
    				// Set it to manual
    				setTimeout(function () { history.scrollRestoration = "manual"; }, 9);
    				window.addEventListener("popstate", function (event) {
    					if (event.state && "zenscrollY" in event.state) {
    						zenscroll.toY(event.state.zenscrollY);
    					}
    				}, false);
    			}

    			// Add edge offset on first load if necessary
    			// This may not work on IE (or older computer?) as it requires more timeout, around 100 ms
    			if (window.location.hash) {
    				setTimeout(function () {
    					// Adjustment is only needed if there is an edge offset:
    					var edgeOffset = zenscroll.setup().edgeOffset;
    					if (edgeOffset) {
    						var targetElem = document.getElementById(window.location.href.split("#")[1]);
    						if (targetElem) {
    							var targetY = Math.max(0, zenscroll.getTopOf(targetElem) - edgeOffset);
    							var diff = zenscroll.getY() - targetY;
    							// Only do the adjustment if the browser is very close to the element:
    							if (0 <= diff && diff < 9 ) {
    								window.scrollTo(0, targetY);
    							}
    						}
    					}
    				}, 9);
    			}

    		}, false);

    		// Handling clicks on anchors
    		var RE_noZensmooth = new RegExp("(^|\\s)noZensmooth(\\s|$)");
    		window.addEventListener("click", function (event) {
    			var anchor = event.target;
    			while (anchor && anchor.tagName !== "A") {
    				anchor = anchor.parentNode;
    			}
    			// Let the browser handle the click if it wasn't with the primary button, or with some modifier keys:
    			if (!anchor || event.which !== 1 || event.shiftKey || event.metaKey || event.ctrlKey || event.altKey) {
    				return
    			}
    			// Save the current scrolling position so it can be used for scroll restoration:
    			if (isScrollRestorationSupported) {
    				var historyState = history.state && typeof history.state === "object" ? history.state : {};
    				historyState.zenscrollY = zenscroll.getY();
    				try {
    					history.replaceState(historyState, "");
    				} catch (e) {
    					// Avoid the Chrome Security exception on file protocol, e.g., file://index.html
    				}
    			}
    			// Find the referenced ID:
    			var href = anchor.getAttribute("href") || "";
    			if (href.indexOf("#") === 0 && !RE_noZensmooth.test(anchor.className)) {
    				var targetY = 0;
    				var targetElem = document.getElementById(href.substring(1));
    				if (href !== "#") {
    					if (!targetElem) {
    						// Let the browser handle the click if the target ID is not found.
    						return
    					}
    					targetY = zenscroll.getTopOf(targetElem);
    				}
    				event.preventDefault();
    				// By default trigger the browser's `hashchange` event...
    				var onDone = function () { window.location = href; };
    				// ...unless there is an edge offset specified
    				var edgeOffset = zenscroll.setup().edgeOffset;
    				if (edgeOffset) {
    					targetY = Math.max(0, targetY - edgeOffset);
    					if (isHistorySupported) {
    						onDone = function () { history.pushState({}, "", href); };
    					}
    				}
    				zenscroll.toY(targetY, null, onDone);
    			}
    		}, false);

    	}


    	return zenscroll


    }));
    });

    document.addEventListener('DOMContentLoaded', initializeBtnsOfAcceptance);
    function initializeBtnsOfAcceptance() {
      var acceptationBtn = document.querySelectorAll('.corpus_section_form_field-A_btn-belt_btn-positioner_btn');
      var amount = acceptationBtn.length;

      var _loop = function _loop(i) {
        acceptationBtn[i].addEventListener('click', function () {
          if (acceptationBtn[i].classList.contains('beforeItIsClicked') === true) {
            acceptationBtn[i].classList.remove('beforeItIsClicked');
            acceptationBtn[i].classList.add('itIsClicked');
            signThisAsClicked(acceptationBtn[i]);
            initializeNextSection(i);
          } else {
            initAgainGuideTextForThisSection(i);
          }
        });
      };

      for (var i = 0; i < amount; i++) {
        _loop(i);
      }
    }
    function signThisAsClicked(btn) {
      btn.innerText = '';
    }
    function initAgainGuideTextForThisSection(i) {
      guideReacts(i);
    }
    function initializeNextSection(iterator) {
      var allOrnaments = document.querySelectorAll('img.corpus_section_form_ornament-marker');
      var thisOrnament = allOrnaments[iterator];
      var nextOrnament = allOrnaments[iterator + 1];
      thisOrnament.setAttribute('src', './icons/pole.2.svg');
      thisOrnament.classList.add('itIsPassedThrought');
      nextOrnament.classList.remove('itIsHidden');
      // window.scrollTo(0, nextOrnament.offsetTop)
      zenscroll.toY(thisOrnament.offsetTop);
      enableNextSection(iterator);
    }
    function enableNextSection(iterator) {
      iterator += 1;
      var allSections = [undefined, document.querySelector('.corpus_section_form_fields'), document.querySelector('.corpus_section_form_field-C'), document.querySelector('.corpus_section_form_fields-2')];
      allSections[iterator].classList.remove('itIsHidden');
      guideReacts(iterator);
    }
    function showBtnOfAcceptance(btn, container) {
      container.classList.remove('itIsHidden');
      btn.classList.add('beforeItIsClicked');
    }

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

    document.addEventListener('DOMContentLoaded', function () {
      initUserFlowViaSection_selectNodesToThisProcess();
    });

    function initUserFlowViaSection_selectNodesToThisProcess() {
      var nodes = [document.querySelector('input[name="imie"]'), document.querySelector('input[name="przydomek"]'), document.querySelector('input[name="zawolanie"]')];
      nodes.forEach(function (node, idx) {
        return node.addEventListener('keyup', function (event) {
          var sectionCompleted = initUserFlowToNextSection_checkIfThisSectionIsCompleted(nodes);
          if (event.keyCode === 13 && sectionCompleted !== true) {
            initUserFlowViaSection_goToNextNode(node, idx, nodes);
          } else if (event.keyCode === 13 && sectionCompleted === true) {
            node.blur();
            initUserFlowToNextSection_showBtnOfAcceptance();
          }
        });
      });
      nodes.forEach(function (node, idx) {
        return node.addEventListener('change', function (event) {
          var sectionCompleted = initUserFlowToNextSection_checkIfThisSectionIsCompleted(nodes);
          if (sectionCompleted === true) {
            initUserFlowToNextSection_showBtnOfAcceptance();
          }
        });
      });
    }

    function initUserFlowViaSection_goToNextNode(node, idx, nodes) {
      node.blur();
      if (idx < 2) {
        nodes[idx + 1].focus();
      } else if (idx === 2) {
        nodes[0].focus();
      }
    }

    function initUserFlowToNextSection_checkIfThisSectionIsCompleted(nodes) {
      var arr = [false, false, false];
      nodes.forEach(function (node, idx) {
        if (node.value.trim() === '') {
          arr[idx] = false;
        } else {
          arr[idx] = true;
        }
      });
      if (arr.indexOf(false) === -1) {
        return true;
      } else {
        return false;
      }
    }

    function initUserFlowToNextSection_showBtnOfAcceptance() {
      var btnContainerForThisSection = document.querySelector('.corpus_section_form_field-A_btn-belt_btn-positioner.firstSectionBtn');
      var btnOfThisSection = btnContainerForThisSection.querySelector('.corpus_section_form_field-A_btn-belt_btn-positioner_btn');
      showBtnOfAcceptance(btnOfThisSection, btnContainerForThisSection);
      setCurrentDataToAvatarDescription();
    }

    function setCurrentDataToAvatarDescription() {
      setNameToDes();
      setNicknameToDes();
      setSentenceToDes();
    }

    document.addEventListener('DOMContentLoaded', function () {
      initUserFlowViaSection_selectNodesToThisProcess$1();
    });
    function initUserFlowViaSection_selectNodesToThisProcess$1() {
      var nodes = [document.querySelectorAll('input[name="klasa"]'), document.querySelectorAll('select[name="uderzenie"]'), document.querySelector('input[name="nazwauderzenia"]')];
      nodes[2].addEventListener('change', function () {

        var btnContainerForThisSection = document.querySelector('.corpus_section_form_field-A_btn-belt_btn-positioner.secondSectionBtn');
        var btnOfThisSection = btnContainerForThisSection.querySelector('.corpus_section_form_field-A_btn-belt_btn-positioner_btn');
        showBtnOfAcceptance(btnOfThisSection, btnContainerForThisSection);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyIuLi9zb3VyY2UvZHluYW1pY3MvYXNpZGUuanMiLCIuLi9ub2RlX21vZHVsZXMvemVuc2Nyb2xsL3plbnNjcm9sbC5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9mb3JtX2luaXRpYWxpemVOZXh0U2VjdGlvbi5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9hdGFraS1zZXQtdHh0LmpzIiwiLi4vc291cmNlL2R5bmFtaWNzL2Zvcm1fc2VjdGlvbi1vbmUuanMiLCIuLi9zb3VyY2UvZHluYW1pY3MvZm9ybV9zZWN0aW9uLXR3by5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9rbGFzYS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9hdGFraS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9hdHRyeWJzLmpzIiwiLi4vc291cmNlL2R5bmFtaWNzL29icm9ueS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9tb2NlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0aWFsaXplR3VpZGUpXHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplR3VpZGUoKSB7XHJcbiAgaGlkZVVzZXJHdWlkZSgpO1xyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXNpZGUnKTtcclxuICAgIGFzaWRlLmNsYXNzTGlzdC5hZGQoJ29uTG9hZCcpO1xyXG4gIH0sIDApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVVc2VyR3VpZGUoKSB7XHJcbiAgbGV0IG9ybm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtaGVhZCcpXHJcbiAgb3JubS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZUFuZEhpZGVBc2lkZSlcclxuICBsZXQgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItZ3VpZGVfaGlkZScpXHJcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlQW5kSGlkZUFzaWRlKVxyXG59XHJcbmxldCBjb250cm9sbGVyID0gMFxyXG5cclxuZnVuY3Rpb24gcm90YXRlQW5kSGlkZUFzaWRlKCkge1xyXG4gIGxldCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJylcclxuICBpZiAoY29udHJvbGxlciA9PT0gMCkge1xyXG4gICAgbGV0IGhlYWRCZWx0ID0gYXNpZGUucXVlcnlTZWxlY3RvcignLmFzaWRlLWhlYWQnKTtcclxuICAgIGxldCBwaWVjZSA9IGhlYWRCZWx0Lm9mZnNldEhlaWdodDtcclxuICAgIGFzaWRlLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJ1xyXG4gICAgbGV0IGF3ID0gYXNpZGUub2Zmc2V0V2lkdGhcclxuICAgIGxldCBhaCA9IGFzaWRlLm9mZnNldEhlaWdodFxyXG4gICAgbGV0IHdzcCA9IGFoICsgKChhdyAtIGFoKSAvIDIpXHJcbiAgICBsZXQgeCA9ICh3c3AgKiAtMSkgKyBwaWVjZVxyXG4gICAgbGV0IHkgPSB4ICsgJ3B4J1xyXG4gICAgbGV0IHogPSAoKGF3IC0gYWgpIC8gMikgKyAncHgnXHJcbiAgICBhc2lkZS5zdHlsZS5sZWZ0ID0geVxyXG4gICAgYXNpZGUuc3R5bGUuYm90dG9tID0gelxyXG4gICAgY29udHJvbGxlciA9IDFcclxuICB9IGVsc2UgaWYgKGNvbnRyb2xsZXIgPT09IDEpIHtcclxuICAgIGFzaWRlLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknXHJcbiAgICBhc2lkZS5zdHlsZS5sZWZ0ID0gMFxyXG4gICAgYXNpZGUuc3R5bGUuYm90dG9tID0gMFxyXG4gICAgY29udHJvbGxlciA9IDBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBndWlkZVJlYWN0cyhpKSB7XHJcbiAgbGV0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXNpZGUnKTtcclxuICBhc2lkZS5jbGFzc0xpc3QucmVtb3ZlKCdvbkFkdmljZScpO1xyXG4gIGFzaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ29uQWR2aWNlQicpO1xyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtzaGFrZVRvRm9jdXNVc2Vyc0F0dGVudGlvbihhc2lkZSl9LDApO1xyXG4gIGxldCBndWlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1mb290IC51c2VyLWd1aWRlJyk7XHJcbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWZvb3RfdGl0bGUnKTtcclxuICBsZXQgYXJyID0gW1xyXG4gICAgJ0dkeSB3cGlzemVzeiBpbWnEmSwgcHJ6eWRvbWVrIGkgemF3b8WCYW5pZSwgcG8gemF0d2llcmR6ZW5pdSB6bWlhbiBwb2phd2kgc2nEmSBuYXN0xJlwbmEgY3rEmcWbxIcgZm9ybXVsYXJ6YS4nLFxyXG4gICAgJ1BvIHd5Ym9yemUga2xhc3ksIHBvamF3aSBzaWUgb2tubyB3eWJvcnUgYXRha3Ugc3BvxZtyw7NkIHVkZXJ6ZcWEIGNoYXJha3RlcnlzdHljem55Y2ggZGxhIHRlaiBwb3N0YWNpLicsXHJcbiAgICAnV3liaWVyeiB1ZGVyemVuaWUsIGtsaWthasSFYyB3IHPFgm93byBvcGlzdWrEhWNlIGplLiBQcnp5IGthxbxkeW0gZXBpdGVjaWUgd2lkbmllamUgY2hhcmFrdGVyeXN0eWthIGNpb3N1IHcgSWtvbmFjaCDFu3l3aW/FgsOzdyBpIElrb25hY2ggVWRlcnplxYQuJyxcclxuICAgICdXeW15xZtsIG5hendlIGRsYSB1ZGVyemVuaWEgeiBwb3ByemVkbmllZ28ga3Jva3UuIEdkeSBqxIUgemF0d2llcmR6aXN6LCBwb2phd2kgc2llIGtvbGVqbmEgY3plxZvEhyBrYXJ0eSBwb3N0YWNpLicsXHJcbiAgICAnUG8gd3lib3J6ZSBqZWRuZWogb3BjamkgeiBrYcW8ZGVqIGxpc3R5LCBwb2phd2kgc2llIGtvbGVqbmEgY3plxZvEhyBrYXJ0eSBwb3N0YWNpLicsXHJcbiAgICAnS2xpa25paiB0eWxlIG9wY2ppLCBpbGUgY2hjZXN6LiBLYcW8ZHkgemVzdGF3IChjenlsaSBtb2MgaSBwaWV0bm8pIHphYmllcmEgY2kgcGV3bsSFIGlsb8WbxIcgcHVua3TDs3cgTcSFZHJvxZtjaS4nLFxyXG4gICAgJ1JvemRhaiBwb3pvc3RhxYJlIHB1bmt0eSBtxIVkcm/Fm2NpIG5hIHdzcMOzxYJjenlubmlraSBwb3N0YWNpOiDFu3ljaWUsIE3EhWRyb8WbxIcsIFJ1Y2ggaSBEemlhxYJhbmllLidcclxuICBdXHJcbiAgZ3VpZGUuaW5uZXJUZXh0ID0gYXJyW2ldXHJcbiAgbGV0IGFyckIgPSBbXHJcbiAgICAndG/FvHNhbW/Fm8SHOicsXHJcbiAgICAna2xhc2E6JyxcclxuICAgICdhdGFrOicsXHJcbiAgICAnbmF6d2EgYXRha3U6JyxcclxuICAgICdvYnJvbmE6JyxcclxuICAgICd6ZG9sbm/Fm8SHIGkgc8WCYWJvxZvEhycsXHJcbiAgICAnYXRyeWJ1dHk6J1xyXG4gIF1cclxuICB0aXRsZS5pbm5lclRleHQgPSBhcnJCW2ldXHJcbn1cclxuZnVuY3Rpb24gc2hha2VUb0ZvY3VzVXNlcnNBdHRlbnRpb24oYXNpZGUpIHtcclxuICBpZiAoY29udHJvbGxlciA9PT0gMSkge1xyXG4gICAgbGV0IGhlYWRCZWx0ID0gYXNpZGUucXVlcnlTZWxlY3RvcignLmFzaWRlLWhlYWQnKTtcclxuICAgIGxldCBwaWVjZSA9IGhlYWRCZWx0Lm9mZnNldEhlaWdodDtcclxuICAgIGFzaWRlLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcclxuICAgIGxldCBhdyA9IGFzaWRlLm9mZnNldFdpZHRoO1xyXG4gICAgbGV0IGFoID0gYXNpZGUub2Zmc2V0SGVpZ2h0O1xyXG4gICAgbGV0IHdzcCA9IGFoICsgKChhdyAtIGFoKSAvIDIpO1xyXG4gICAgbGV0IHggPSAod3NwICogLTEpICsgcGllY2U7XHJcbiAgICBsZXQgeSA9IHggKyAncHgnO1xyXG4gICAgbGV0IHogPSAoKGF3IC0gYWgpIC8gMikgKyAncHgnO1xyXG4gICAgYXNpZGUuc3R5bGUubGVmdCA9IHk7XHJcbiAgICBhc2lkZS5zdHlsZS5ib3R0b20gPSB6O1xyXG4gICAgYXNpZGUuY2xhc3NMaXN0LmFkZCgnb25BZHZpY2UnKTtcclxuICB9IGVsc2UgaWYgKGNvbnRyb2xsZXIgPT09IDApIHtcclxuICAgIGFzaWRlLmNsYXNzTGlzdC5hZGQoJ29uQWR2aWNlQicpO1xyXG4gIH1cclxufVxyXG5cclxudmFyIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0ID0ge1xyXG4gIGxlZnQ6IDIwLFxyXG4gIHNwZW50T25BdHRhY2s6IDAsXHJcbiAgaXRlcmF0b3IoY29udCwgeCkge1xyXG4gICAgbGV0IGl0ZXJEZXZpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtYm9keV9ob3ctbXVjaCcpXHJcbiAgICBsZXQgb3B0ID0gY29udC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0JylbeF1cclxuICAgIGxldCBwb2ludHMgPSBvcHQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylcclxuICAgIGxldCBhbW91bnQgPSAocG9pbnRzLmxlbmd0aCAtIDEpXHJcbiAgICBsZXQgYmlsYW5zID0gYW1vdW50IC0gdGhpcy5zcGVudE9uQXR0YWNrXHJcbiAgICB0aGlzLmxlZnQgPSB0aGlzLmxlZnQgLSBiaWxhbnNcclxuICAgIHRoaXMuc3BlbnRPbkF0dGFjayA9IGFtb3VudFxyXG4gICAgaXRlckRldmljZS5pbm5lclRleHQgPSAnUG96b3N0YcWCbycgKyAnICcgKyB0aGlzLmxlZnQgKyAneCdcclxuICAgIHRoaXMuYW5pbWF0ZU9wdHNTcGVuZGluZyhvcHQsIGFtb3VudCk7XHJcbiAgfSxcclxuICBkZWxldGF0b3IoKSB7XHJcbiAgICBsZXQgaXRlckRldmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1ib2R5X2hvdy1tdWNoJylcclxuICAgIHRoaXMubGVmdCA9IHRoaXMubGVmdCArIHRoaXMuc3BlbnRPbkF0dGFja1xyXG4gICAgdGhpcy5zcGVudE9uQXR0YWNrID0gMFxyXG4gICAgaXRlckRldmljZS5pbm5lclRleHQgPSAnUG96b3N0YcWCbycgKyAnICcgKyB0aGlzLmxlZnQgKyAneCdcclxuICB9LFxyXG4gIGFuaW1hdGVPcHRzU3BlbmRpbmcob3B0LCBhbW91bnQpIHtcclxuICAgIGxldCBjb2luID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnSU1HJyk7XHJcbiAgICBjb2luLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaWNvbnMvaWtvbmEtcG90ZWcuc3ZnJyk7XHJcbiAgICBjb2luLmNsYXNzTGlzdC5hZGQoJ2l0SXNDb2luJyk7XHJcbiAgICBsZXQgYXhTID0gd2luZG93LnNjcm9sbFk7XHJcbiAgICBsZXQgYXhYID0gb3B0Lm9mZnNldFRvcDtcclxuICAgIGxldCBheFogPSBheFggLSBheFM7XHJcbiAgICBsZXQgYXhZID0gb3B0Lm9mZnNldExlZnQ7XHJcbiAgICBjb2luLnN0eWxlLnRvcCA9IGF4WiArICdweCc7XHJcbiAgICBjb2luLnN0eWxlLmxlZnQgPSBheFkgKyAncHgnO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKGNvaW4pO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvaW4uc3R5bGUubGVmdCA9ICcwJztcclxuICAgICAgY29pbi5zdHlsZS50b3AgPSAnOTAlJztcclxuICAgICAgY29pbi5zdHlsZS53aWR0aCA9ICc1NXB4JztcclxuICAgICAgY29pbi5zdHlsZS5oZWlnaHQgPSAnNTVweCc7XHJcbiAgICB9LCAwKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykucmVtb3ZlQ2hpbGQoY29pbik7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJykuY2xhc3NMaXN0LmFkZCgnb25BZHZpY2UnKTtcclxuICAgIH0sIDU1MCk7XHJcbiAgfSxcclxuICBpdGVyYXRvckIoaW50ZWdlcikge1xyXG4gICAgbGV0IGl0ZXJEZXZpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtYm9keV9ob3ctbXVjaCcpXHJcbiAgICB0aGlzLmxlZnQgPSB0aGlzLmxlZnQgKyBpbnRlZ2VyXHJcbiAgICBpdGVyRGV2aWNlLmlubmVyVGV4dCA9ICdQb3pvc3RhxYJvJyArICcgJyArIHRoaXMubGVmdCArICd4J1xyXG4gIH0sXHJcbiAgZGVsZXRhdG9yQihpbnRlZ2VyKSB7XHJcbiAgICBsZXQgaXRlckRldmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1ib2R5X2hvdy1tdWNoJylcclxuICAgIHRoaXMubGVmdCA9IHRoaXMubGVmdCAtIGludGVnZXJcclxuICAgIGl0ZXJEZXZpY2UuaW5uZXJUZXh0ID0gJ1Bvem9zdGHFgm8nICsgJyAnICsgdGhpcy5sZWZ0ICsgJ3gnXHJcbiAgfSxcclxuICBlcXVhbGl6YXRvcigpIHtcclxuICAgIGxldCBpdGVyRGV2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWJvZHlfaG93LW11Y2gnKVxyXG4gICAgaXRlckRldmljZS5pbm5lclRleHQgPSAnUG96b3N0YcWCbycgKyAnICcgKyB0aGlzLmxlZnQgKyAneCdcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgaXRlcmF0b3JPZlBvaW50c0xlZnQiLCIvKipcbiAqIFplbnNjcm9sbCA0LjAuMlxuICogaHR0cHM6Ly9naXRodWIuY29tL3plbmdhYm9yL3plbnNjcm9sbC9cbiAqXG4gKiBDb3B5cmlnaHQgMjAxNeKAkzIwMTggR2Fib3IgTGVuYXJkXG4gKlxuICogVGhpcyBpcyBmcmVlIGFuZCB1bmVuY3VtYmVyZWQgc29mdHdhcmUgcmVsZWFzZWQgaW50byB0aGUgcHVibGljIGRvbWFpbi5cbiAqIFxuICogQW55b25lIGlzIGZyZWUgdG8gY29weSwgbW9kaWZ5LCBwdWJsaXNoLCB1c2UsIGNvbXBpbGUsIHNlbGwsIG9yXG4gKiBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUsIGVpdGhlciBpbiBzb3VyY2UgY29kZSBmb3JtIG9yIGFzIGEgY29tcGlsZWRcbiAqIGJpbmFyeSwgZm9yIGFueSBwdXJwb3NlLCBjb21tZXJjaWFsIG9yIG5vbi1jb21tZXJjaWFsLCBhbmQgYnkgYW55XG4gKiBtZWFucy5cbiAqIFxuICogSW4ganVyaXNkaWN0aW9ucyB0aGF0IHJlY29nbml6ZSBjb3B5cmlnaHQgbGF3cywgdGhlIGF1dGhvciBvciBhdXRob3JzXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGRlZGljYXRlIGFueSBhbmQgYWxsIGNvcHlyaWdodCBpbnRlcmVzdCBpbiB0aGVcbiAqIHNvZnR3YXJlIHRvIHRoZSBwdWJsaWMgZG9tYWluLiBXZSBtYWtlIHRoaXMgZGVkaWNhdGlvbiBmb3IgdGhlIGJlbmVmaXRcbiAqIG9mIHRoZSBwdWJsaWMgYXQgbGFyZ2UgYW5kIHRvIHRoZSBkZXRyaW1lbnQgb2Ygb3VyIGhlaXJzIGFuZFxuICogc3VjY2Vzc29ycy4gV2UgaW50ZW5kIHRoaXMgZGVkaWNhdGlvbiB0byBiZSBhbiBvdmVydCBhY3Qgb2ZcbiAqIHJlbGlucXVpc2htZW50IGluIHBlcnBldHVpdHkgb2YgYWxsIHByZXNlbnQgYW5kIGZ1dHVyZSByaWdodHMgdG8gdGhpc1xuICogc29mdHdhcmUgdW5kZXIgY29weXJpZ2h0IGxhdy5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICogTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULlxuICogSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1JcbiAqIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLFxuICogQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SXG4gKiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqIEZvciBtb3JlIGluZm9ybWF0aW9uLCBwbGVhc2UgcmVmZXIgdG8gPGh0dHA6Ly91bmxpY2Vuc2Uub3JnPlxuICogXG4gKi9cblxuLypqc2hpbnQgZGV2ZWw6dHJ1ZSwgYXNpOnRydWUgKi9cblxuLypnbG9iYWwgZGVmaW5lLCBtb2R1bGUgKi9cblxuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KCkpXG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpXG5cdH0gZWxzZSB7XG5cdFx0KGZ1bmN0aW9uIGluc3RhbGwoKSB7XG5cdFx0XHQvLyBUbyBtYWtlIHN1cmUgWmVuc2Nyb2xsIGNhbiBiZSByZWZlcmVuY2VkIGZyb20gdGhlIGhlYWRlciwgYmVmb3JlIGBib2R5YCBpcyBhdmFpbGFibGVcblx0XHRcdGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5ib2R5KSB7XG5cdFx0XHRcdHJvb3QuemVuc2Nyb2xsID0gZmFjdG9yeSgpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyByZXRyeSA5bXMgbGF0ZXJcblx0XHRcdFx0c2V0VGltZW91dChpbnN0YWxsLCA5KVxuXHRcdFx0fVxuXHRcdH0pKClcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG5cdFwidXNlIHN0cmljdFwiXG5cblxuXHQvLyBEZXRlY3QgaWYgdGhlIGJyb3dzZXIgYWxyZWFkeSBzdXBwb3J0cyBuYXRpdmUgc21vb3RoIHNjcm9sbGluZyAoZS5nLiwgRmlyZWZveCAzNisgYW5kIENocm9tZSA0OSspIGFuZCBpdCBpcyBlbmFibGVkOlxuXHR2YXIgaXNOYXRpdmVTbW9vdGhTY3JvbGxFbmFibGVkT24gPSBmdW5jdGlvbiAoZWxlbSkge1xuXHRcdHJldHVybiBlbGVtICYmIFwiZ2V0Q29tcHV0ZWRTdHlsZVwiIGluIHdpbmRvdyAmJlxuXHRcdFx0d2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbSlbXCJzY3JvbGwtYmVoYXZpb3JcIl0gPT09IFwic21vb3RoXCJcblx0fVxuXG5cblx0Ly8gRXhpdCBpZiBpdOKAmXMgbm90IGEgYnJvd3NlciBlbnZpcm9ubWVudDpcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgfHwgIShcImRvY3VtZW50XCIgaW4gd2luZG93KSkge1xuXHRcdHJldHVybiB7fVxuXHR9XG5cblxuXHR2YXIgbWFrZVNjcm9sbGVyID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgZGVmYXVsdER1cmF0aW9uLCBlZGdlT2Zmc2V0KSB7XG5cblx0XHQvLyBVc2UgZGVmYXVsdHMgaWYgbm90IHByb3ZpZGVkXG5cdFx0ZGVmYXVsdER1cmF0aW9uID0gZGVmYXVsdER1cmF0aW9uIHx8IDk5OSAvL21zXG5cdFx0aWYgKCFlZGdlT2Zmc2V0ICYmIGVkZ2VPZmZzZXQgIT09IDApIHtcblx0XHRcdC8vIFdoZW4gc2Nyb2xsaW5nLCB0aGlzIGFtb3VudCBvZiBkaXN0YW5jZSBpcyBrZXB0IGZyb20gdGhlIGVkZ2VzIG9mIHRoZSBjb250YWluZXI6XG5cdFx0XHRlZGdlT2Zmc2V0ID0gOSAvL3B4XG5cdFx0fVxuXG5cdFx0Ly8gSGFuZGxpbmcgdGhlIGxpZmUtY3ljbGUgb2YgdGhlIHNjcm9sbGVyXG5cdFx0dmFyIHNjcm9sbFRpbWVvdXRJZFxuXHRcdHZhciBzZXRTY3JvbGxUaW1lb3V0SWQgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcblx0XHRcdHNjcm9sbFRpbWVvdXRJZCA9IG5ld1ZhbHVlXG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU3RvcCB0aGUgY3VycmVudCBzbW9vdGggc2Nyb2xsIG9wZXJhdGlvbiBpbW1lZGlhdGVseVxuXHRcdCAqL1xuXHRcdHZhciBzdG9wU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHNjcm9sbFRpbWVvdXRJZClcblx0XHRcdHNldFNjcm9sbFRpbWVvdXRJZCgwKVxuXHRcdH1cblxuXHRcdHZhciBnZXRUb3BXaXRoRWRnZU9mZnNldCA9IGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0XHRyZXR1cm4gTWF0aC5tYXgoMCwgY29udGFpbmVyLmdldFRvcE9mKGVsZW0pIC0gZWRnZU9mZnNldClcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTY3JvbGxzIHRvIGEgc3BlY2lmaWMgdmVydGljYWwgcG9zaXRpb24gaW4gdGhlIGRvY3VtZW50LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHt0YXJnZXRZfSBUaGUgdmVydGljYWwgcG9zaXRpb24gd2l0aGluIHRoZSBkb2N1bWVudC5cblx0XHQgKiBAcGFyYW0ge2R1cmF0aW9ufSBPcHRpb25hbGx5IHRoZSBkdXJhdGlvbiBvZiB0aGUgc2Nyb2xsIG9wZXJhdGlvbi5cblx0XHQgKiAgICAgICAgSWYgbm90IHByb3ZpZGVkIHRoZSBkZWZhdWx0IGR1cmF0aW9uIGlzIHVzZWQuXG5cdFx0ICogQHBhcmFtIHtvbkRvbmV9IEFuIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgb25jZSB0aGUgc2Nyb2xsIGZpbmlzaGVkLlxuXHRcdCAqL1xuXHRcdHZhciBzY3JvbGxUb1kgPSBmdW5jdGlvbiAodGFyZ2V0WSwgZHVyYXRpb24sIG9uRG9uZSkge1xuXHRcdFx0c3RvcFNjcm9sbCgpXG5cdFx0XHRpZiAoZHVyYXRpb24gPT09IDAgfHwgKGR1cmF0aW9uICYmIGR1cmF0aW9uIDwgMCkgfHwgaXNOYXRpdmVTbW9vdGhTY3JvbGxFbmFibGVkT24oY29udGFpbmVyLmJvZHkpKSB7XG5cdFx0XHRcdGNvbnRhaW5lci50b1kodGFyZ2V0WSlcblx0XHRcdFx0aWYgKG9uRG9uZSkge1xuXHRcdFx0XHRcdG9uRG9uZSgpXG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBzdGFydFkgPSBjb250YWluZXIuZ2V0WSgpXG5cdFx0XHRcdHZhciBkaXN0YW5jZSA9IE1hdGgubWF4KDAsIHRhcmdldFkpIC0gc3RhcnRZXG5cdFx0XHRcdHZhciBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuXHRcdFx0XHRkdXJhdGlvbiA9IGR1cmF0aW9uIHx8IE1hdGgubWluKE1hdGguYWJzKGRpc3RhbmNlKSwgZGVmYXVsdER1cmF0aW9uKTtcblx0XHRcdFx0KGZ1bmN0aW9uIGxvb3BTY3JvbGwoKSB7XG5cdFx0XHRcdFx0c2V0U2Nyb2xsVGltZW91dElkKHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0Ly8gQ2FsY3VsYXRlIHBlcmNlbnRhZ2U6XG5cdFx0XHRcdFx0XHR2YXIgcCA9IE1hdGgubWluKDEsIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0VGltZSkgLyBkdXJhdGlvbilcblx0XHRcdFx0XHRcdC8vIENhbGN1bGF0ZSB0aGUgYWJzb2x1dGUgdmVydGljYWwgcG9zaXRpb246XG5cdFx0XHRcdFx0XHR2YXIgeSA9IE1hdGgubWF4KDAsIE1hdGguZmxvb3Ioc3RhcnRZICsgZGlzdGFuY2UqKHAgPCAwLjUgPyAyKnAqcCA6IHAqKDQgLSBwKjIpLTEpKSlcblx0XHRcdFx0XHRcdGNvbnRhaW5lci50b1koeSlcblx0XHRcdFx0XHRcdGlmIChwIDwgMSAmJiAoY29udGFpbmVyLmdldEhlaWdodCgpICsgeSkgPCBjb250YWluZXIuYm9keS5zY3JvbGxIZWlnaHQpIHtcblx0XHRcdFx0XHRcdFx0bG9vcFNjcm9sbCgpXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KHN0b3BTY3JvbGwsIDk5KSAvLyB3aXRoIGNvb2xkb3duIHRpbWVcblx0XHRcdFx0XHRcdFx0aWYgKG9uRG9uZSkge1xuXHRcdFx0XHRcdFx0XHRcdG9uRG9uZSgpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LCA5KSlcblx0XHRcdFx0fSkoKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNjcm9sbHMgdG8gdGhlIHRvcCBvZiBhIHNwZWNpZmljIGVsZW1lbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2VsZW19IFRoZSBlbGVtZW50IHRvIHNjcm9sbCB0by5cblx0XHQgKiBAcGFyYW0ge2R1cmF0aW9ufSBPcHRpb25hbGx5IHRoZSBkdXJhdGlvbiBvZiB0aGUgc2Nyb2xsIG9wZXJhdGlvbi5cblx0XHQgKiBAcGFyYW0ge29uRG9uZX0gQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBvbmNlIHRoZSBzY3JvbGwgZmluaXNoZWQuXG5cdFx0ICovXG5cdFx0dmFyIHNjcm9sbFRvRWxlbSA9IGZ1bmN0aW9uIChlbGVtLCBkdXJhdGlvbiwgb25Eb25lKSB7XG5cdFx0XHRzY3JvbGxUb1koZ2V0VG9wV2l0aEVkZ2VPZmZzZXQoZWxlbSksIGR1cmF0aW9uLCBvbkRvbmUpXG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU2Nyb2xscyBhbiBlbGVtZW50IGludG8gdmlldyBpZiBuZWNlc3NhcnkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2VsZW19IFRoZSBlbGVtZW50LlxuXHRcdCAqIEBwYXJhbSB7ZHVyYXRpb259IE9wdGlvbmFsbHkgdGhlIGR1cmF0aW9uIG9mIHRoZSBzY3JvbGwgb3BlcmF0aW9uLlxuXHRcdCAqIEBwYXJhbSB7b25Eb25lfSBBbiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBpbnZva2VkIG9uY2UgdGhlIHNjcm9sbCBmaW5pc2hlZC5cblx0XHQgKi9cblx0XHR2YXIgc2Nyb2xsSW50b1ZpZXcgPSBmdW5jdGlvbiAoZWxlbSwgZHVyYXRpb24sIG9uRG9uZSkge1xuXHRcdFx0dmFyIGVsZW1IZWlnaHQgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuXHRcdFx0dmFyIGVsZW1Cb3R0b20gPSBjb250YWluZXIuZ2V0VG9wT2YoZWxlbSkgKyBlbGVtSGVpZ2h0XG5cdFx0XHR2YXIgY29udGFpbmVySGVpZ2h0ID0gY29udGFpbmVyLmdldEhlaWdodCgpXG5cdFx0XHR2YXIgeSA9IGNvbnRhaW5lci5nZXRZKClcblx0XHRcdHZhciBjb250YWluZXJCb3R0b20gPSB5ICsgY29udGFpbmVySGVpZ2h0XG5cdFx0XHRpZiAoZ2V0VG9wV2l0aEVkZ2VPZmZzZXQoZWxlbSkgPCB5IHx8IChlbGVtSGVpZ2h0ICsgZWRnZU9mZnNldCkgPiBjb250YWluZXJIZWlnaHQpIHtcblx0XHRcdFx0Ly8gRWxlbWVudCBpcyBjbGlwcGVkIGF0IHRvcCBvciBpcyBoaWdoZXIgdGhhbiBzY3JlZW4uXG5cdFx0XHRcdHNjcm9sbFRvRWxlbShlbGVtLCBkdXJhdGlvbiwgb25Eb25lKVxuXHRcdFx0fSBlbHNlIGlmICgoZWxlbUJvdHRvbSArIGVkZ2VPZmZzZXQpID4gY29udGFpbmVyQm90dG9tKSB7XG5cdFx0XHRcdC8vIEVsZW1lbnQgaXMgY2xpcHBlZCBhdCB0aGUgYm90dG9tLlxuXHRcdFx0XHRzY3JvbGxUb1koZWxlbUJvdHRvbSAtIGNvbnRhaW5lckhlaWdodCArIGVkZ2VPZmZzZXQsIGR1cmF0aW9uLCBvbkRvbmUpXG5cdFx0XHR9IGVsc2UgaWYgKG9uRG9uZSkge1xuXHRcdFx0XHRvbkRvbmUoKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNjcm9sbHMgdG8gdGhlIGNlbnRlciBvZiBhbiBlbGVtZW50LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtlbGVtfSBUaGUgZWxlbWVudC5cblx0XHQgKiBAcGFyYW0ge2R1cmF0aW9ufSBPcHRpb25hbGx5IHRoZSBkdXJhdGlvbiBvZiB0aGUgc2Nyb2xsIG9wZXJhdGlvbi5cblx0XHQgKiBAcGFyYW0ge29mZnNldH0gT3B0aW9uYWxseSB0aGUgb2Zmc2V0IG9mIHRoZSB0b3Agb2YgdGhlIGVsZW1lbnQgZnJvbSB0aGUgY2VudGVyIG9mIHRoZSBzY3JlZW4uXG5cdFx0ICogICAgICAgIEEgdmFsdWUgb2YgMCBpcyBpZ25vcmVkLlxuXHRcdCAqIEBwYXJhbSB7b25Eb25lfSBBbiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBpbnZva2VkIG9uY2UgdGhlIHNjcm9sbCBmaW5pc2hlZC5cblx0XHQgKi9cblx0XHR2YXIgc2Nyb2xsVG9DZW50ZXJPZiA9IGZ1bmN0aW9uIChlbGVtLCBkdXJhdGlvbiwgb2Zmc2V0LCBvbkRvbmUpIHtcblx0XHRcdHNjcm9sbFRvWShNYXRoLm1heCgwLCBjb250YWluZXIuZ2V0VG9wT2YoZWxlbSkgLSBjb250YWluZXIuZ2V0SGVpZ2h0KCkvMiArIChvZmZzZXQgfHwgZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQvMikpLCBkdXJhdGlvbiwgb25Eb25lKVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIENoYW5nZXMgZGVmYXVsdCBzZXR0aW5ncyBmb3IgdGhpcyBzY3JvbGxlci5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bmV3RGVmYXVsdER1cmF0aW9ufSBPcHRpb25hbGx5IGEgbmV3IHZhbHVlIGZvciBkZWZhdWx0IGR1cmF0aW9uLCB1c2VkIGZvciBlYWNoIHNjcm9sbCBtZXRob2QgYnkgZGVmYXVsdC5cblx0XHQgKiAgICAgICAgSWdub3JlZCBpZiBudWxsIG9yIHVuZGVmaW5lZC5cblx0XHQgKiBAcGFyYW0ge25ld0VkZ2VPZmZzZXR9IE9wdGlvbmFsbHkgYSBuZXcgdmFsdWUgZm9yIHRoZSBlZGdlIG9mZnNldCwgdXNlZCBieSBlYWNoIHNjcm9sbCBtZXRob2QgYnkgZGVmYXVsdC4gSWdub3JlZCBpZiBudWxsIG9yIHVuZGVmaW5lZC5cblx0XHQgKiBAcmV0dXJucyBBbiBvYmplY3Qgd2l0aCB0aGUgY3VycmVudCB2YWx1ZXMuXG5cdFx0ICovXG5cdFx0dmFyIHNldHVwID0gZnVuY3Rpb24gKG5ld0RlZmF1bHREdXJhdGlvbiwgbmV3RWRnZU9mZnNldCkge1xuXHRcdFx0aWYgKG5ld0RlZmF1bHREdXJhdGlvbiA9PT0gMCB8fCBuZXdEZWZhdWx0RHVyYXRpb24pIHtcblx0XHRcdFx0ZGVmYXVsdER1cmF0aW9uID0gbmV3RGVmYXVsdER1cmF0aW9uXG5cdFx0XHR9XG5cdFx0XHRpZiAobmV3RWRnZU9mZnNldCA9PT0gMCB8fCBuZXdFZGdlT2Zmc2V0KSB7XG5cdFx0XHRcdGVkZ2VPZmZzZXQgPSBuZXdFZGdlT2Zmc2V0XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkZWZhdWx0RHVyYXRpb246IGRlZmF1bHREdXJhdGlvbixcblx0XHRcdFx0ZWRnZU9mZnNldDogZWRnZU9mZnNldFxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRzZXR1cDogc2V0dXAsXG5cdFx0XHR0bzogc2Nyb2xsVG9FbGVtLFxuXHRcdFx0dG9ZOiBzY3JvbGxUb1ksXG5cdFx0XHRpbnRvVmlldzogc2Nyb2xsSW50b1ZpZXcsXG5cdFx0XHRjZW50ZXI6IHNjcm9sbFRvQ2VudGVyT2YsXG5cdFx0XHRzdG9wOiBzdG9wU2Nyb2xsLFxuXHRcdFx0bW92aW5nOiBmdW5jdGlvbiAoKSB7IHJldHVybiAhIXNjcm9sbFRpbWVvdXRJZCB9LFxuXHRcdFx0Z2V0WTogY29udGFpbmVyLmdldFksXG5cdFx0XHRnZXRUb3BPZjogY29udGFpbmVyLmdldFRvcE9mXG5cdFx0fVxuXG5cdH1cblxuXG5cdHZhciBkb2NFbGVtID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XG5cdHZhciBnZXREb2NZID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gd2luZG93LnNjcm9sbFkgfHwgZG9jRWxlbS5zY3JvbGxUb3AgfVxuXG5cdC8vIENyZWF0ZSBhIHNjcm9sbGVyIGZvciB0aGUgZG9jdW1lbnQ6XG5cdHZhciB6ZW5zY3JvbGwgPSBtYWtlU2Nyb2xsZXIoe1xuXHRcdGJvZHk6IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgZG9jdW1lbnQuYm9keSxcblx0XHR0b1k6IGZ1bmN0aW9uICh5KSB7IHdpbmRvdy5zY3JvbGxUbygwLCB5KSB9LFxuXHRcdGdldFk6IGdldERvY1ksXG5cdFx0Z2V0SGVpZ2h0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jRWxlbS5jbGllbnRIZWlnaHQgfSxcblx0XHRnZXRUb3BPZjogZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgZ2V0RG9jWSgpIC0gZG9jRWxlbS5vZmZzZXRUb3AgfVxuXHR9KVxuXG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBzY3JvbGxlciBmcm9tIHRoZSBwcm92aWRlZCBjb250YWluZXIgZWxlbWVudCAoZS5nLiwgYSBESVYpXG5cdCAqXG5cdCAqIEBwYXJhbSB7c2Nyb2xsQ29udGFpbmVyfSBUaGUgdmVydGljYWwgcG9zaXRpb24gd2l0aGluIHRoZSBkb2N1bWVudC5cblx0ICogQHBhcmFtIHtkZWZhdWx0RHVyYXRpb259IE9wdGlvbmFsbHkgYSB2YWx1ZSBmb3IgZGVmYXVsdCBkdXJhdGlvbiwgdXNlZCBmb3IgZWFjaCBzY3JvbGwgbWV0aG9kIGJ5IGRlZmF1bHQuXG5cdCAqICAgICAgICBJZ25vcmVkIGlmIDAgb3IgbnVsbCBvciB1bmRlZmluZWQuXG5cdCAqIEBwYXJhbSB7ZWRnZU9mZnNldH0gT3B0aW9uYWxseSBhIHZhbHVlIGZvciB0aGUgZWRnZSBvZmZzZXQsIHVzZWQgYnkgZWFjaCBzY3JvbGwgbWV0aG9kIGJ5IGRlZmF1bHQuIFxuXHQgKiAgICAgICAgSWdub3JlZCBpZiBudWxsIG9yIHVuZGVmaW5lZC5cblx0ICogQHJldHVybnMgQSBzY3JvbGxlciBvYmplY3QsIHNpbWlsYXIgdG8gYHplbnNjcm9sbGAgYnV0IGNvbnRyb2xsaW5nIHRoZSBwcm92aWRlZCBlbGVtZW50LlxuXHQgKi9cblx0emVuc2Nyb2xsLmNyZWF0ZVNjcm9sbGVyID0gZnVuY3Rpb24gKHNjcm9sbENvbnRhaW5lciwgZGVmYXVsdER1cmF0aW9uLCBlZGdlT2Zmc2V0KSB7XG5cdFx0cmV0dXJuIG1ha2VTY3JvbGxlcih7XG5cdFx0XHRib2R5OiBzY3JvbGxDb250YWluZXIsXG5cdFx0XHR0b1k6IGZ1bmN0aW9uICh5KSB7IHNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3AgPSB5IH0sXG5cdFx0XHRnZXRZOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wIH0sXG5cdFx0XHRnZXRIZWlnaHQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1hdGgubWluKHNjcm9sbENvbnRhaW5lci5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2NFbGVtLmNsaWVudEhlaWdodCkgfSxcblx0XHRcdGdldFRvcE9mOiBmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gZWxlbS5vZmZzZXRUb3AgfVxuXHRcdH0sIGRlZmF1bHREdXJhdGlvbiwgZWRnZU9mZnNldClcblx0fVxuXG5cblx0Ly8gQXV0b21hdGljIGxpbmstc21vb3RoaW5nIG9uIGFjaG9yc1xuXHQvLyBFeGNsdWRlIElFOC0gb3Igd2hlbiBuYXRpdmUgaXMgZW5hYmxlZCBvciBaZW5zY3JvbGwgYXV0by0gaXMgZGlzYWJsZWRcblx0aWYgKFwiYWRkRXZlbnRMaXN0ZW5lclwiIGluIHdpbmRvdyAmJiAhd2luZG93Lm5vWmVuc21vb3RoICYmICFpc05hdGl2ZVNtb290aFNjcm9sbEVuYWJsZWRPbihkb2N1bWVudC5ib2R5KSkge1xuXG5cdFx0dmFyIGlzSGlzdG9yeVN1cHBvcnRlZCA9IFwiaGlzdG9yeVwiIGluIHdpbmRvdyAmJiBcInB1c2hTdGF0ZVwiIGluIGhpc3Rvcnlcblx0XHR2YXIgaXNTY3JvbGxSZXN0b3JhdGlvblN1cHBvcnRlZCA9IGlzSGlzdG9yeVN1cHBvcnRlZCAmJiBcInNjcm9sbFJlc3RvcmF0aW9uXCIgaW4gaGlzdG9yeVxuXG5cdFx0Ly8gT24gZmlyc3QgbG9hZCAmIHJlZnJlc2ggbWFrZSBzdXJlIHRoZSBicm93c2VyIHJlc3RvcmVzIHRoZSBwb3NpdGlvbiBmaXJzdFxuXHRcdGlmIChpc1Njcm9sbFJlc3RvcmF0aW9uU3VwcG9ydGVkKSB7XG5cdFx0XHRoaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gXCJhdXRvXCJcblx0XHR9XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRpZiAoaXNTY3JvbGxSZXN0b3JhdGlvblN1cHBvcnRlZCkge1xuXHRcdFx0XHQvLyBTZXQgaXQgdG8gbWFudWFsXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBoaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gXCJtYW51YWxcIiB9LCA5KVxuXHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0XHRcdGlmIChldmVudC5zdGF0ZSAmJiBcInplbnNjcm9sbFlcIiBpbiBldmVudC5zdGF0ZSkge1xuXHRcdFx0XHRcdFx0emVuc2Nyb2xsLnRvWShldmVudC5zdGF0ZS56ZW5zY3JvbGxZKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgZmFsc2UpXG5cdFx0XHR9XG5cblx0XHRcdC8vIEFkZCBlZGdlIG9mZnNldCBvbiBmaXJzdCBsb2FkIGlmIG5lY2Vzc2FyeVxuXHRcdFx0Ly8gVGhpcyBtYXkgbm90IHdvcmsgb24gSUUgKG9yIG9sZGVyIGNvbXB1dGVyPykgYXMgaXQgcmVxdWlyZXMgbW9yZSB0aW1lb3V0LCBhcm91bmQgMTAwIG1zXG5cdFx0XHRpZiAod2luZG93LmxvY2F0aW9uLmhhc2gpIHtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0Ly8gQWRqdXN0bWVudCBpcyBvbmx5IG5lZWRlZCBpZiB0aGVyZSBpcyBhbiBlZGdlIG9mZnNldDpcblx0XHRcdFx0XHR2YXIgZWRnZU9mZnNldCA9IHplbnNjcm9sbC5zZXR1cCgpLmVkZ2VPZmZzZXRcblx0XHRcdFx0XHRpZiAoZWRnZU9mZnNldCkge1xuXHRcdFx0XHRcdFx0dmFyIHRhcmdldEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIiNcIilbMV0pXG5cdFx0XHRcdFx0XHRpZiAodGFyZ2V0RWxlbSkge1xuXHRcdFx0XHRcdFx0XHR2YXIgdGFyZ2V0WSA9IE1hdGgubWF4KDAsIHplbnNjcm9sbC5nZXRUb3BPZih0YXJnZXRFbGVtKSAtIGVkZ2VPZmZzZXQpXG5cdFx0XHRcdFx0XHRcdHZhciBkaWZmID0gemVuc2Nyb2xsLmdldFkoKSAtIHRhcmdldFlcblx0XHRcdFx0XHRcdFx0Ly8gT25seSBkbyB0aGUgYWRqdXN0bWVudCBpZiB0aGUgYnJvd3NlciBpcyB2ZXJ5IGNsb3NlIHRvIHRoZSBlbGVtZW50OlxuXHRcdFx0XHRcdFx0XHRpZiAoMCA8PSBkaWZmICYmIGRpZmYgPCA5ICkge1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCB0YXJnZXRZKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCA5KVxuXHRcdFx0fVxuXG5cdFx0fSwgZmFsc2UpXG5cblx0XHQvLyBIYW5kbGluZyBjbGlja3Mgb24gYW5jaG9yc1xuXHRcdHZhciBSRV9ub1plbnNtb290aCA9IG5ldyBSZWdFeHAoXCIoXnxcXFxccylub1plbnNtb290aChcXFxcc3wkKVwiKVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHR2YXIgYW5jaG9yID0gZXZlbnQudGFyZ2V0XG5cdFx0XHR3aGlsZSAoYW5jaG9yICYmIGFuY2hvci50YWdOYW1lICE9PSBcIkFcIikge1xuXHRcdFx0XHRhbmNob3IgPSBhbmNob3IucGFyZW50Tm9kZVxuXHRcdFx0fVxuXHRcdFx0Ly8gTGV0IHRoZSBicm93c2VyIGhhbmRsZSB0aGUgY2xpY2sgaWYgaXQgd2Fzbid0IHdpdGggdGhlIHByaW1hcnkgYnV0dG9uLCBvciB3aXRoIHNvbWUgbW9kaWZpZXIga2V5czpcblx0XHRcdGlmICghYW5jaG9yIHx8IGV2ZW50LndoaWNoICE9PSAxIHx8IGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5hbHRLZXkpIHtcblx0XHRcdFx0cmV0dXJuXG5cdFx0XHR9XG5cdFx0XHQvLyBTYXZlIHRoZSBjdXJyZW50IHNjcm9sbGluZyBwb3NpdGlvbiBzbyBpdCBjYW4gYmUgdXNlZCBmb3Igc2Nyb2xsIHJlc3RvcmF0aW9uOlxuXHRcdFx0aWYgKGlzU2Nyb2xsUmVzdG9yYXRpb25TdXBwb3J0ZWQpIHtcblx0XHRcdFx0dmFyIGhpc3RvcnlTdGF0ZSA9IGhpc3Rvcnkuc3RhdGUgJiYgdHlwZW9mIGhpc3Rvcnkuc3RhdGUgPT09IFwib2JqZWN0XCIgPyBoaXN0b3J5LnN0YXRlIDoge31cblx0XHRcdFx0aGlzdG9yeVN0YXRlLnplbnNjcm9sbFkgPSB6ZW5zY3JvbGwuZ2V0WSgpXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aGlzdG9yeS5yZXBsYWNlU3RhdGUoaGlzdG9yeVN0YXRlLCBcIlwiKVxuXHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0Ly8gQXZvaWQgdGhlIENocm9tZSBTZWN1cml0eSBleGNlcHRpb24gb24gZmlsZSBwcm90b2NvbCwgZS5nLiwgZmlsZTovL2luZGV4Lmh0bWxcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gRmluZCB0aGUgcmVmZXJlbmNlZCBJRDpcblx0XHRcdHZhciBocmVmID0gYW5jaG9yLmdldEF0dHJpYnV0ZShcImhyZWZcIikgfHwgXCJcIlxuXHRcdFx0aWYgKGhyZWYuaW5kZXhPZihcIiNcIikgPT09IDAgJiYgIVJFX25vWmVuc21vb3RoLnRlc3QoYW5jaG9yLmNsYXNzTmFtZSkpIHtcblx0XHRcdFx0dmFyIHRhcmdldFkgPSAwXG5cdFx0XHRcdHZhciB0YXJnZXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaHJlZi5zdWJzdHJpbmcoMSkpXG5cdFx0XHRcdGlmIChocmVmICE9PSBcIiNcIikge1xuXHRcdFx0XHRcdGlmICghdGFyZ2V0RWxlbSkge1xuXHRcdFx0XHRcdFx0Ly8gTGV0IHRoZSBicm93c2VyIGhhbmRsZSB0aGUgY2xpY2sgaWYgdGhlIHRhcmdldCBJRCBpcyBub3QgZm91bmQuXG5cdFx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGFyZ2V0WSA9IHplbnNjcm9sbC5nZXRUb3BPZih0YXJnZXRFbGVtKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0Ly8gQnkgZGVmYXVsdCB0cmlnZ2VyIHRoZSBicm93c2VyJ3MgYGhhc2hjaGFuZ2VgIGV2ZW50Li4uXG5cdFx0XHRcdHZhciBvbkRvbmUgPSBmdW5jdGlvbiAoKSB7IHdpbmRvdy5sb2NhdGlvbiA9IGhyZWYgfVxuXHRcdFx0XHQvLyAuLi51bmxlc3MgdGhlcmUgaXMgYW4gZWRnZSBvZmZzZXQgc3BlY2lmaWVkXG5cdFx0XHRcdHZhciBlZGdlT2Zmc2V0ID0gemVuc2Nyb2xsLnNldHVwKCkuZWRnZU9mZnNldFxuXHRcdFx0XHRpZiAoZWRnZU9mZnNldCkge1xuXHRcdFx0XHRcdHRhcmdldFkgPSBNYXRoLm1heCgwLCB0YXJnZXRZIC0gZWRnZU9mZnNldClcblx0XHRcdFx0XHRpZiAoaXNIaXN0b3J5U3VwcG9ydGVkKSB7XG5cdFx0XHRcdFx0XHRvbkRvbmUgPSBmdW5jdGlvbiAoKSB7IGhpc3RvcnkucHVzaFN0YXRlKHt9LCBcIlwiLCBocmVmKSB9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHplbnNjcm9sbC50b1kodGFyZ2V0WSwgbnVsbCwgb25Eb25lKVxuXHRcdFx0fVxuXHRcdH0sIGZhbHNlKVxuXG5cdH1cblxuXG5cdHJldHVybiB6ZW5zY3JvbGxcblxuXG59KSk7XG4iLCJpbXBvcnQgeyBndWlkZVJlYWN0cyB9IGZyb20gJy4vYXNpZGUuanMnXHJcbmltcG9ydCB6ZW5zY3JvbGwgZnJvbSAnLi8uLi8uLi9ub2RlX21vZHVsZXMvemVuc2Nyb2xsL3plbnNjcm9sbC5qcydcclxuJ3VzZSBzdHJpY3QnXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0aWFsaXplQnRuc09mQWNjZXB0YW5jZSlcclxuZnVuY3Rpb24gaW5pdGlhbGl6ZUJ0bnNPZkFjY2VwdGFuY2UgKCkge1xyXG4gIGxldCBhY2NlcHRhdGlvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkLUFfYnRuLWJlbHRfYnRuLXBvc2l0aW9uZXJfYnRuJylcclxuICBsZXQgYW1vdW50ID0gYWNjZXB0YXRpb25CdG4ubGVuZ3RoXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xyXG4gICAgYWNjZXB0YXRpb25CdG5baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmIChhY2NlcHRhdGlvbkJ0bltpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2JlZm9yZUl0SXNDbGlja2VkJykgPT09IHRydWUpIHtcclxuICAgICAgICBhY2NlcHRhdGlvbkJ0bltpXS5jbGFzc0xpc3QucmVtb3ZlKCdiZWZvcmVJdElzQ2xpY2tlZCcpXHJcbiAgICAgICAgYWNjZXB0YXRpb25CdG5baV0uY2xhc3NMaXN0LmFkZCgnaXRJc0NsaWNrZWQnKVxyXG4gICAgICAgIHNpZ25UaGlzQXNDbGlja2VkKGFjY2VwdGF0aW9uQnRuW2ldKVxyXG4gICAgICAgIGluaXRpYWxpemVOZXh0U2VjdGlvbihpKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGluaXRBZ2Fpbkd1aWRlVGV4dEZvclRoaXNTZWN0aW9uKGkpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIHNpZ25UaGlzQXNDbGlja2VkIChidG4pIHtcclxuICBidG4uaW5uZXJUZXh0ID0gJydcclxufVxyXG5mdW5jdGlvbiBpbml0QWdhaW5HdWlkZVRleHRGb3JUaGlzU2VjdGlvbiAoaSkge1xyXG4gIGd1aWRlUmVhY3RzKGkpXHJcbn1cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZU5leHRTZWN0aW9uIChpdGVyYXRvcikge1xyXG4gIGxldCBhbGxPcm5hbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcuY29ycHVzX3NlY3Rpb25fZm9ybV9vcm5hbWVudC1tYXJrZXInKVxyXG4gIGxldCB0aGlzT3JuYW1lbnQgPSBhbGxPcm5hbWVudHNbaXRlcmF0b3JdXHJcbiAgbGV0IG5leHRPcm5hbWVudCA9IGFsbE9ybmFtZW50c1tpdGVyYXRvciArIDFdXHJcbiAgdGhpc09ybmFtZW50LnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaWNvbnMvcG9sZS4yLnN2ZycpXHJcbiAgdGhpc09ybmFtZW50LmNsYXNzTGlzdC5hZGQoJ2l0SXNQYXNzZWRUaHJvdWdodCcpXHJcbiAgbmV4dE9ybmFtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2l0SXNIaWRkZW4nKVxyXG4gIC8vIHdpbmRvdy5zY3JvbGxUbygwLCBuZXh0T3JuYW1lbnQub2Zmc2V0VG9wKVxyXG4gIHplbnNjcm9sbC50b1kodGhpc09ybmFtZW50Lm9mZnNldFRvcClcclxuICBlbmFibGVOZXh0U2VjdGlvbihpdGVyYXRvcilcclxufVxyXG5mdW5jdGlvbiBlbmFibGVOZXh0U2VjdGlvbiAoaXRlcmF0b3IpIHtcclxuICBpdGVyYXRvciArPSAxXHJcbiAgbGV0IGFsbFNlY3Rpb25zID0gW1xyXG4gICAgdW5kZWZpbmVkLFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzJyksXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZC1DJyksXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHMtMicpXHJcbiAgXVxyXG4gIGFsbFNlY3Rpb25zW2l0ZXJhdG9yXS5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJylcclxuICBndWlkZVJlYWN0cyhpdGVyYXRvcilcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0J0bk9mQWNjZXB0YW5jZSAoYnRuLCBjb250YWluZXIpIHtcclxuICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0hpZGRlbicpXHJcbiAgYnRuLmNsYXNzTGlzdC5hZGQoJ2JlZm9yZUl0SXNDbGlja2VkJylcclxufVxyXG4iLCIndXNlIHN0cmljdCdcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRpYWxpemUpXHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG4gIGxldCBvcHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9zZWxlY3QtbGlzdCBvcHRpb24nXHJcbiAgKVxyXG4gIGxldCBhbW91bnQgPSBvcHRzLmxlbmd0aFxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50OyBpKyspIHtcclxuICAgIGxldCBpdGVtID0gb3B0c1tpXVxyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgc2V0SU1HKGkpXHJcbiAgICAgIGVuYWJsZVN0cmlrZU5hbWVQYXJ0KClcclxuICAgICAgc2V0U3RyaWtlTmFtZVRvRGVzKGkpXHJcbiAgICAgIHNldFBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uKGkpXHJcbiAgICAgIHNldEZvcmNlRGVzKGkpXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5sZXQgb25seU9uY2UgPSAwXHJcblxyXG5mdW5jdGlvbiBlbmFibGVTdHJpa2VOYW1lUGFydCgpIHtcclxuICBvbmx5T25jZSsrXHJcbiAgaWYgKG9ubHlPbmNlID09PSAxKSB7XHJcbiAgICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdHJpa2VOYW1lJylcclxuICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnc3RyaWtlTmFtZScpXHJcbiAgfVxyXG59XHJcblxyXG5pbXBvcnQge2d1aWRlUmVhY3RzfSBmcm9tICcuL2FzaWRlLmpzJztcclxuZnVuY3Rpb24gc2V0UGFydE9mQXR0YWNrRGVzY3JpcHRpb24oaSkge1xyXG4gIGxldCBkZXNQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncCBzcGFuLi0tZGVzX2VwaXRldCcpXHJcbiAgZGVzUGFydC5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKVxyXG4gIGxldCBhcnJheSA9IFtcclxuICAgICdicnV0YWxuZScsXHJcbiAgICAnbmllcHJ6ZXdpZHl3YWxuZScsXHJcbiAgICAnd3nEh3dpY3pvbmUnLFxyXG4gICAgJ25pZXphd29kbmUnLFxyXG4gICAgJ3ByZWN5enlqbmUnLFxyXG4gICAgJ3ptYXNvd2FuZScsXHJcbiAgICAncG9kc3TEmXBuZScsXHJcbiAgICAnd3lyYWNob3dhbmUnLFxyXG4gICAgJ3pkcmFkemllY2tpZScsXHJcbiAgICAnc3phbGXFhGN6ZScsXHJcbiAgICAnb3ByYWNvd2FuZSB3IGxhYm9yYXRvcml1bSBhbGNoZW1pY3pueW0nLFxyXG4gICAgJ25pZXBvd3N0cnp5bWFuZScsXHJcbiAgICAnd8WCYWRjemUnLFxyXG4gICAgJ21yb2N6bmUnLFxyXG4gICAgJ3RhamVtbmUnLFxyXG4gICAgJ3fFm2NpZWvFgmUnLFxyXG4gICAgJ3dzcGllcmFuZSBtb2PEhSBvdGNoxYJhbmknLFxyXG4gICAgJ3ByemVzeWNvbmUgesWCxIUgbW9jxIUnXHJcbiAgXVxyXG4gIGRlc1BhcnQuaW5uZXJUZXh0ID0gJywgJyArIGFycmF5W2ldXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldElNRyhpKSB7XHJcbiAgbGV0IGJlbHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnXHJcbiAgKVtpXVxyXG4gIGxldCBpbWFnID0gYmVsdC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVswXVxyXG4gIGxldCBhdHRyeWIgPSBpbWFnLmdldEF0dHJpYnV0ZSgnc3JjJylcclxuICBsZXQgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLXBsYXRlX2ltZ19pY29uJylcclxuICBpY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgYXR0cnliKVxyXG4gIGxldCBhbGxJTUdzID0gYmVsdC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKS5sZW5ndGhcclxuICBsZXQgc3RhbmRhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1zdGFuZGFydF9pbWdfYmNrZycpXHJcbiAgd2hpbGUgKHN0YW5kYXJ0LnF1ZXJ5U2VsZWN0b3IoJ0lNRycpICE9PSBudWxsKSB7XHJcbiAgICBsZXQgaW1hZ2VUb0RlbCA9IHN0YW5kYXJ0LnF1ZXJ5U2VsZWN0b3IoJ0lNRycpXHJcbiAgICBzdGFuZGFydC5yZW1vdmVDaGlsZChpbWFnZVRvRGVsKVxyXG4gIH1cclxuICBmb3IgKGxldCBqID0gMDsgaiA8IGFsbElNR3M7IGorKykge1xyXG4gICAgaWYgKGogPiAwKSB7XHJcbiAgICAgIGxldCB0aGVJTUcgPSBiZWx0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpW2pdXHJcbiAgICAgIGxldCBzb3VyY2VJTUcgPSB0aGVJTUcuZ2V0QXR0cmlidXRlKCdzcmMnKVxyXG4gICAgICBsZXQgbmV3SU1HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgbmV3SU1HLnNldEF0dHJpYnV0ZSgnc3JjJywgc291cmNlSU1HKVxyXG4gICAgICBzdGFuZGFydC5hcHBlbmRDaGlsZChuZXdJTUcpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmxldCBzZXROZXh0UGFydE9mRm9ybXVsYUZvclRoZUZpcnN0VGltZT0wO1xyXG5mdW5jdGlvbiBzZXRTdHJpa2VOYW1lVG9EZXMoaSkge1xyXG4gIGxldCBpbnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibmF6d2F1ZGVyemVuaWFcIl0nKVxyXG4gIGlucC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBzdHJOYW1lID0gaW5wLnZhbHVlO1xyXG4gICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfbmF6d2EtY2lvc3UnKTtcclxuICAgIGl0ZW0uaW5uZXJUZXh0ID0gc3RyTmFtZSArICcgdG8gbGVnZW5kYXJuZSc7XHJcbiAgICBzaG93QWxsRGVzKCk7XHJcbiAgfSlcclxuICBpbnAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGl0bSA9IGlucC52YWx1ZVxyXG4gICAgaWYgKGl0bS50cmltKCkgIT09ICcnJiZzZXROZXh0UGFydE9mRm9ybXVsYUZvclRoZUZpcnN0VGltZT09PTApIHtcclxuICAgICAgbGV0IHN0ck5hbWUgPSBpbnAudmFsdWVcclxuICAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfbmF6d2EtY2lvc3UnKVxyXG4gICAgICBpdGVtLmlubmVyVGV4dCA9IHN0ck5hbWUgKyAnIHRvIGxlZ2VuZGFybmUnXHJcbiAgICAgIHNob3dBbGxEZXMoKTtcclxuICAgICAgc2V0TmV4dFBhcnRPZkZvcm11bGEoKTtcclxuICAgICAgc2V0TmV4dFBhcnRPZkZvcm11bGFGb3JUaGVGaXJzdFRpbWU9MTtcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRGb3JjZURlcyhpKSB7XHJcbiAgbGV0IGJlbHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnXHJcbiAgKVtpXTtcclxuICBsZXQgSU1HcyA9IGJlbHQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylcclxuICBsZXQgaXRlciA9IElNR3MubGVuZ3RoXHJcbiAgbGV0IHN0cm5nID0gW11cclxuICBmb3IgKGxldCBqID0gMDsgaiA8IGl0ZXI7IGorKykge1xyXG4gICAgbGV0IElNRyA9IElNR3Nbal1cclxuICAgIGxldCBhdHRyeWIgPSBJTUcuZ2V0QXR0cmlidXRlKCdzcmMnKVxyXG4gICAgaWYgKGogIT09IDApIHtcclxuICAgICAgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL2Jyb24tYmFyYmEuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ2RvZGF0a293xIUgbW9jxIUgdWRlcnplbmlvd8SFJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy9icm9uLWN6YXIuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ2RvZGF0a293xIUgbW9jxIUgY3phcm5va3NpxJlza8SFJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy9icm9uLXN0cnouc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ2RvZGF0a293eW0ga3Vuc3p0ZW0gc3RyemVsZWNraW0nKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL2Jyb24tc3phbC5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnZG9kYXRrb3d5bSBzemFsZcWEc3R3ZW0nKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL2Jyb24temRyYS5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnbmllc3BvZHppYW55bSB6ZHJhZGxpd3ltIGNpb3NlbScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvenl3LW9naWVuLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCfFvHl3aW/FgmVtIG9nbmlhJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy96eXctcm96a2xhZC5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnxbx5d2lvxYJlbSByb3prxYJhZHUnKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL3p5dy13b2Quc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ8W8eXdpb8WCZW0gd29keScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvenl3LXptaWFuYS5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnxbx5d2lvxYJlbSB6bWlhbnknKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL3p5dy16eXdpYS5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnxbx5d2lvxYJlbSDFvHl3aWknKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ3fFgmFzbsSFIG3EhWRyb8WbY2nEhSDFvHl3aW/FgsOzdyBpIHRhbGVudMOzdycpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgbGV0IHN0cmluZ1RvU2V0ID0gc3Rybmcuam9pbignLCAnKTtcclxuICBsZXQgenl3RGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3p5d2lvbCcpO1xyXG4gIGxldCBpbWlEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfaW1pZScpO1xyXG4gIGxldCBwcnpEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfcHJ6eWRvbWVrJyk7XHJcbiAgbGV0IHpkYURlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc196ZGFuaWUnKTtcclxuICB6eXdEZXMuY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJyk7XHJcbiAgaW1pRGVzLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpO1xyXG4gIHByekRlcy5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKTtcclxuICB6ZGFEZXMuY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJyk7XHJcbiAgenl3RGVzLmlubmVyVGV4dCA9IHN0cmluZ1RvU2V0ICsgJy4nO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXROYW1lVG9EZXMoKSB7XHJcbiAgbGV0IGlucCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJpbWllXCJdJylcclxuICBsZXQgbmFtID0gaW5wLnZhbHVlXHJcbiAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfaW1pZScpXHJcbiAgaXRlbS5pbm5lclRleHQgPSBuYW0gKyAnICc7XHJcbiAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXROaWNrbmFtZVRvRGVzKCkge1xyXG4gIGxldCBpbnBCID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByenlkb21la1wiXScpXHJcbiAgbGV0IHN1cm5hbSA9IGlucEIudmFsdWVcclxuICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19wcnp5ZG9tZWsnKVxyXG4gIGl0ZW0uaW5uZXJUZXh0ID0gc3VybmFtO1xyXG4gIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJylcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U2VudGVuY2VUb0RlcygpIHtcclxuICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc196ZGFuaWUnKVxyXG4gIGl0ZW0uaW5uZXJUZXh0ID0gJyB3em1hY25pYSBzd8OzaiBhdGFrICdcclxuICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dBbGxEZXMoKSB7XHJcbiAgbGV0IGFsbERlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlcycpXHJcbiAgYWxsRGVzLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldE5leHRQYXJ0T2ZGb3JtdWxhKCkge1xyXG4gIGxldCB0ZXh0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJuYXp3YXVkZXJ6ZW5pYVwiXScpO1xyXG4gIGxldCBhcmVhVmFsdWUgPSAodGV4dEFyZWEudmFsdWUpLnRyaW0oKTtcclxuICBpZiAoYXJlYVZhbHVlICE9PSAnJykge1xyXG4gICAgZW5hYmxlTmV4dFBhcnRPZkZvcm0oKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuYWJsZU5leHRQYXJ0T2ZGb3JtKCkge1xyXG4gIGxldCBuZXh0UGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkLUMnKTtcclxuICBuZXh0UGFydC5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbiAgbGV0IGFsbE9ybmFtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZy5jb3JwdXNfc2VjdGlvbl9mb3JtX29ybmFtZW50LW1hcmtlcicpO1xyXG4gIGxldCB0aGlzT3JuYW1lbnQgPSBhbGxPcm5hbWVudHNbMV07XHJcbiAgdGhpc09ybmFtZW50LnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaWNvbnMvcG9sZS4yLnN2ZycpO1xyXG4gIHRoaXNPcm5hbWVudC5jbGFzc0xpc3QuYWRkKCdpdElzUGFzc2VkVGhyb3VnaHQnKTtcclxuICBsZXQgbmV4dE9ybmFtZW50ID0gYWxsT3JuYW1lbnRzWzJdO1xyXG4gIG5leHRPcm5hbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbiAgdGhpc09ybmFtZW50LnN0eWxlLmJveFNpemU9XCJib3JkZXItYm94XCI7XHJcbiAgdGhpc09ybmFtZW50LnN0eWxlLnpJbmRleD1cIjFcIjtcclxuICBuZXh0UGFydC5zdHlsZS56SW5kZXg9XCIyXCI7XHJcbiAgZ3VpZGVSZWFjdHMoNCk7XHJcbn0iLCJpbXBvcnQgeyBzaG93QnRuT2ZBY2NlcHRhbmNlIH0gZnJvbSAnLi9mb3JtX2luaXRpYWxpemVOZXh0U2VjdGlvbi5qcydcclxuaW1wb3J0IHsgc2V0TmFtZVRvRGVzIH0gZnJvbSAnLi9hdGFraS1zZXQtdHh0LmpzJ1xyXG5pbXBvcnQgeyBzZXROaWNrbmFtZVRvRGVzIH0gZnJvbSAnLi9hdGFraS1zZXQtdHh0LmpzJ1xyXG5pbXBvcnQgeyBzZXRTZW50ZW5jZVRvRGVzIH0gZnJvbSAnLi9hdGFraS1zZXQtdHh0LmpzJ1xyXG4ndXNlIHN0cmljdCdcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICBpbml0VXNlckZsb3dWaWFTZWN0aW9uX3NlbGVjdE5vZGVzVG9UaGlzUHJvY2VzcygpXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBpbml0VXNlckZsb3dWaWFTZWN0aW9uX3NlbGVjdE5vZGVzVG9UaGlzUHJvY2VzcyAoKSB7XHJcbiAgbGV0IG5vZGVzID0gW1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImltaWVcIl0nKSxcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcnp5ZG9tZWtcIl0nKSxcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJ6YXdvbGFuaWVcIl0nKVxyXG4gIF1cclxuICBub2Rlcy5mb3JFYWNoKChub2RlLCBpZHgpID0+IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGxldCBzZWN0aW9uQ29tcGxldGVkID0gaW5pdFVzZXJGbG93VG9OZXh0U2VjdGlvbl9jaGVja0lmVGhpc1NlY3Rpb25Jc0NvbXBsZXRlZChub2RlcylcclxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyAmJiBzZWN0aW9uQ29tcGxldGVkICE9PSB0cnVlKSB7XHJcbiAgICAgIGluaXRVc2VyRmxvd1ZpYVNlY3Rpb25fZ29Ub05leHROb2RlKG5vZGUsIGlkeCwgbm9kZXMpXHJcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzICYmIHNlY3Rpb25Db21wbGV0ZWQgPT09IHRydWUpIHtcclxuICAgICAgbm9kZS5ibHVyKClcclxuICAgICAgaW5pdFVzZXJGbG93VG9OZXh0U2VjdGlvbl9zaG93QnRuT2ZBY2NlcHRhbmNlKClcclxuICAgIH1cclxuICB9KSlcclxuICBub2Rlcy5mb3JFYWNoKChub2RlLCBpZHgpID0+IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBsZXQgc2VjdGlvbkNvbXBsZXRlZCA9IGluaXRVc2VyRmxvd1RvTmV4dFNlY3Rpb25fY2hlY2tJZlRoaXNTZWN0aW9uSXNDb21wbGV0ZWQobm9kZXMpXHJcbiAgICBpZiAoc2VjdGlvbkNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICBpbml0VXNlckZsb3dUb05leHRTZWN0aW9uX3Nob3dCdG5PZkFjY2VwdGFuY2UoKVxyXG4gICAgfVxyXG4gIH0pKVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0VXNlckZsb3dWaWFTZWN0aW9uX2dvVG9OZXh0Tm9kZSAobm9kZSwgaWR4LCBub2Rlcykge1xyXG4gIG5vZGUuYmx1cigpXHJcbiAgaWYgKGlkeCA8IDIpIHtcclxuICAgIG5vZGVzW2lkeCArIDFdLmZvY3VzKClcclxuICB9IGVsc2UgaWYgKGlkeCA9PT0gMikge1xyXG4gICAgbm9kZXNbMF0uZm9jdXMoKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFVzZXJGbG93VG9OZXh0U2VjdGlvbl9jaGVja0lmVGhpc1NlY3Rpb25Jc0NvbXBsZXRlZCAobm9kZXMpIHtcclxuICBsZXQgYXJyID0gW2ZhbHNlLCBmYWxzZSwgZmFsc2VdXHJcbiAgbm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSwgaWR4KSB7XHJcbiAgICBpZiAobm9kZS52YWx1ZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgIGFycltpZHhdID0gZmFsc2VcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFycltpZHhdID0gdHJ1ZVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgaWYgKGFyci5pbmRleE9mKGZhbHNlKSA9PT0gLTEpIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFVzZXJGbG93VG9OZXh0U2VjdGlvbl9zaG93QnRuT2ZBY2NlcHRhbmNlICgpIHtcclxuICBsZXQgYnRuQ29udGFpbmVyRm9yVGhpc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZC1BX2J0bi1iZWx0X2J0bi1wb3NpdGlvbmVyLmZpcnN0U2VjdGlvbkJ0bicpXHJcbiAgbGV0IGJ0bk9mVGhpc1NlY3Rpb24gPSBidG5Db250YWluZXJGb3JUaGlzU2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZC1BX2J0bi1iZWx0X2J0bi1wb3NpdGlvbmVyX2J0bicpXHJcbiAgc2hvd0J0bk9mQWNjZXB0YW5jZShidG5PZlRoaXNTZWN0aW9uLCBidG5Db250YWluZXJGb3JUaGlzU2VjdGlvbilcclxuICBzZXRDdXJyZW50RGF0YVRvQXZhdGFyRGVzY3JpcHRpb24oKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRDdXJyZW50RGF0YVRvQXZhdGFyRGVzY3JpcHRpb24gKCkge1xyXG4gIHNldE5hbWVUb0RlcygpXHJcbiAgc2V0Tmlja25hbWVUb0RlcygpXHJcbiAgc2V0U2VudGVuY2VUb0RlcygpXHJcbn1cclxuIiwiaW1wb3J0IHtzaG93QnRuT2ZBY2NlcHRhbmNlfSBmcm9tICcuL2Zvcm1faW5pdGlhbGl6ZU5leHRTZWN0aW9uLmpzJztcclxuJ3VzZSBzdHJpY3QnXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgaW5pdFVzZXJGbG93VmlhU2VjdGlvbl9zZWxlY3ROb2Rlc1RvVGhpc1Byb2Nlc3MoKVxyXG59KVxyXG5mdW5jdGlvbiBpbml0VXNlckZsb3dWaWFTZWN0aW9uX3NlbGVjdE5vZGVzVG9UaGlzUHJvY2VzcyAoKSB7XHJcbiAgbGV0IG5vZGVzID0gW1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cImtsYXNhXCJdJyksXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3RbbmFtZT1cInVkZXJ6ZW5pZVwiXScpLFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm5hendhdWRlcnplbmlhXCJdJylcclxuICBdXHJcbiAgbm9kZXNbMl0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKXtcclxuICAgIFxyXG4gICAgICAgIGxldCBidG5Db250YWluZXJGb3JUaGlzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkLUFfYnRuLWJlbHRfYnRuLXBvc2l0aW9uZXIuc2Vjb25kU2VjdGlvbkJ0bicpXHJcbiAgICAgICAgbGV0IGJ0bk9mVGhpc1NlY3Rpb24gPSBidG5Db250YWluZXJGb3JUaGlzU2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZC1BX2J0bi1iZWx0X2J0bi1wb3NpdGlvbmVyX2J0bicpXHJcbiAgICAgICAgc2hvd0J0bk9mQWNjZXB0YW5jZShidG5PZlRoaXNTZWN0aW9uLCBidG5Db250YWluZXJGb3JUaGlzU2VjdGlvbilcclxuICAgICAgICBcclxuICB9KVxyXG59XHJcbiIsImltcG9ydCBpdGVyYXRvck9mUG9pbnRzTGVmdCBmcm9tICcuL2FzaWRlLmpzJztcclxuaW1wb3J0IHtndWlkZVJlYWN0c30gZnJvbSAnLi9hc2lkZS5qcyc7XHJcbid1c2Ugc3RyaWN0JztcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGNob29zZVlvdXJBdmF0YXIpXHJcbmZ1bmN0aW9uIGNob29zZVlvdXJBdmF0YXIgKCkge1xyXG4gIGxldCBjb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXInKVxyXG4gIGxldCBhdmF0YXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3JhZGlvLWxhYi1jb250YWluZXInKVxyXG4gIGxldCBhbW91bnQgPSBhdmF0YXJzLmxlbmd0aFxyXG4gIGZvciAobGV0IGkgPSAwO2kgPCBhbW91bnQ7aSsrKSB7XHJcbiAgICBsZXQgaXRlbSA9IGF2YXRhcnNbaV1cclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNob29zZVRoaXNBdmF0YXIoaXRlbSwgYXZhdGFycywgYW1vdW50KVxyXG4gICAgICBzZXRPbmVQYXJ0T2ZBdHRhY2tEZXNjcmlwdGlvbihpKVxyXG4gICAgICBzeW5jaHJvbml6ZUJhY2tncm91bmRzT2ZPdGhlck9wdHMoY29udGFpbmVycylcclxuICAgICAgZW5hYmxlQXR0YWNrcyhpKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gY2hvb3NlVGhpc0F2YXRhciAoaXRlbSwgYXZhdGFycywgYW1vdW50KSB7XHJcbiAgaXRlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmNoZWNrZWQgPSB0cnVlO1xyXG4gIGZvciAobGV0IGk9MDsgaTxhbW91bnQ7IGkrKyl7XHJcbiAgICAgIGxldCBhdiA9IGF2YXRhcnNbaV07XHJcbiAgICAgIGF2LmNsYXNzTGlzdC5yZW1vdmUoJ2lzQ2xpY2tlZCcpO1xyXG4gIH1cclxuICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2lzQ2xpY2tlZCcpO1xyXG4gIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0LmRlbGV0YXRvcigpO1xyXG4gIGd1aWRlUmVhY3RzKDIpO1xyXG59XHJcbmZ1bmN0aW9uIHNldE9uZVBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uIChpKSB7XHJcbiAgbGV0IGRlc1BhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwIHNwYW4uLS1kZXNfa2xhc2EnKVxyXG4gIGxldCBhcnJheSA9IFtcclxuICAgICcgdWRlcnplbmllIGJyb25pxIUgYnJ1dGFsbsSFLicsXHJcbiAgICAnIHVkZXJ6ZW5pZSBicm9uacSFIHN0cnplbGVja8SFLicsXHJcbiAgICAnIHVkZXJ6ZW5pZSBicm9uacSFIHpkcmFkemllY2vEhS4nLFxyXG4gICAgJyB1ZGVyemVuaWUgYnJvbmnEhSBzemFsZcWEY3rEhS4nLFxyXG4gICAgJyB1ZGVyemVuaWUgYnJvbmnEhSBzemFybGF0YcWEc2vEhS4nLFxyXG4gICAgJyB1ZGVyemVuaWUgYnJvbmnEhSBsdWIgY3p5bWtvbHdpZWssIGNvIHdwYWRuaWUga2FyxYJvd2kgdyDFgmFwc2thLidcclxuICBdXHJcbiAgZGVzUGFydC5pbm5lclRleHQgPSBhcnJheVtpXVxyXG4gIGxldCBuZXh0RGVzUGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Agc3Bhbi4tLWRlc19lcGl0ZXQnKTtcclxuICBuZXh0RGVzUGFydC5jbGFzc0xpc3QuYWRkKCdpdHNIaWRkZW4nKTtcclxuICBsZXQgYW5vdGhlck5leHREZXNQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3p5d2lvbCcpO1xyXG4gIGFub3RoZXJOZXh0RGVzUGFydC5jbGFzc0xpc3QuYWRkKCdpdHNIaWRkZW4nKTtcclxuICBsZXQgb3RoZXJBbm90aGVyTmV4dERlc1BhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfaW1pZScpO1xyXG4gIG90aGVyQW5vdGhlck5leHREZXNQYXJ0LmNsYXNzTGlzdC5hZGQoJ2l0c0hpZGRlbicpO1xyXG4gIGxldCBwcnpEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfcHJ6eWRvbWVrJyk7XHJcbiAgbGV0IHpkYURlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc196ZGFuaWUnKTtcclxuICBwcnpEZXMuY2xhc3NMaXN0LmFkZCgnaXRzSGlkZGVuJyk7XHJcbiAgemRhRGVzLmNsYXNzTGlzdC5hZGQoJ2l0c0hpZGRlbicpO1xyXG59XHJcbmZ1bmN0aW9uIHN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0cyAoY29udGFpbmVycykge1xyXG4gIGxldCBhbW91bnQgPSBjb250YWluZXJzLmxlbmd0aFxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50OyBpKyspIHtcclxuICAgIGxldCBjb250ID0gY29udGFpbmVyc1tpXVxyXG4gICAgbGV0IG9wdGlvbnMgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpXHJcbiAgICBsZXQgaXRlciA9IG9wdGlvbnMubGVuZ3RoXHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGl0ZXI7IHgrKykge1xyXG4gICAgICBsZXQgYmVsdCA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdCcpW3hdXHJcbiAgICAgIGJlbHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2luaGVyaXQnXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGVuYWJsZUF0dGFja3MgKGkpIHtcclxuICBsZXQgZW5hYmxlZEF0dGFja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcicpXHJcbiAgZm9yIChsZXQgeCA9IDA7IHggPCA2OyB4KyspIHtcclxuICAgIGxldCBkaXNhYmxlZEl0ZW0gPSBlbmFibGVkQXR0YWNrc1t4XVxyXG4gICAgZGlzYWJsZWRJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2VuYWJsZWQnKVxyXG4gICAgbGV0IG9wdHMgPSBkaXNhYmxlZEl0ZW0ucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJylcclxuICAgIGxldCBhbW91bnQgPSBvcHRzLmxlbmd0aFxyXG4gICAgZm9yIChsZXQgaiA9IDA7aiA8IGFtb3VudDtqKyspIHtcclxuICAgICAgaWYgKG9wdHNbal0uc2VsZWN0ZWQgPT09IHRydWUpIHtcclxuICAgICAgICBvcHRzW2pdLnNlbGVjdGVkID0gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBsZXQgZW5hYmxlZEF0dGFjayA9IGVuYWJsZWRBdHRhY2tzW2ldXHJcbiAgZW5hYmxlZEF0dGFjay5jbGFzc0xpc3QuYWRkKCdlbmFibGVkJylcclxufVxyXG4iLCJpbXBvcnQgaXRlcmF0b3JPZlBvaW50c0xlZnQgZnJvbSAnLi9hc2lkZS5qcydcclxuaW1wb3J0IHsgZ3VpZGVSZWFjdHMgfSBmcm9tICcuL2FzaWRlLmpzJ1xyXG4ndXNlIHN0cmljdCdcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRpYWxpemVBdHRhY2tzUGFydClcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVBdHRhY2tzUGFydCAoKSB7XHJcbiAgbGV0IGNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcicpXHJcbiAgbGV0IGFtb3VudCA9IGNvbnRhaW5lcnMubGVuZ3RoXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xyXG4gICAgbGV0IGNvbnQgPSBjb250YWluZXJzW2ldXHJcbiAgICBsZXQgb3B0aW9ucyA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJylcclxuICAgIGxldCBpdGVyID0gb3B0aW9ucy5sZW5ndGhcclxuICAgIGZvciAobGV0IHggPSAwO3ggPCBpdGVyO3grKykge1xyXG4gICAgICBsZXQgb3B0ID0gb3B0aW9uc1t4XVxyXG4gICAgICBvcHQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBvbk1PdXQpXHJcbiAgICAgIG9wdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgb25NRW50ZXIpXHJcbiAgICAgIGZ1bmN0aW9uIG9uTUVudGVyICgpIHtcclxuICAgICAgICBpZiAob3B0LnNlbGVjdGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgc3luY2hyb25pemVUaGlzQmNrZ3JXaXRoSW1hZ2VCZWx0SG92ZXJCY2tncihvcHQsIGNvbnQsIHgsIHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGZ1bmN0aW9uIG9uTU91dCAoKSB7XHJcbiAgICAgICAgaWYgKG9wdC5zZWxlY3RlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIHN5bmNocm9uaXplVGhpc0Jja2dyV2l0aEltYWdlQmVsdEhvdmVyQmNrZ3Iob3B0LCBjb250LCB4LCBmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBzZWxlY3RMaXN0ID0gY29udC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKVxyXG4gICAgc2VsZWN0TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGZvciAobGV0IHEgPSAwOyBxIDwgaXRlcjtxKyspIHtcclxuICAgICAgICBsZXQgb3B0ID0gb3B0aW9uc1txXVxyXG4gICAgICAgIGlmIChvcHQudmFsdWUgPT09IHNlbGVjdExpc3QudmFsdWUpIHtcclxuICAgICAgICAgIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0Lml0ZXJhdG9yKGNvbnQsIHEpXHJcbiAgICAgICAgICBndWlkZVJlYWN0cygzKVxyXG4gICAgICAgICAgc3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRucyhjb250LCBpdGVyKVxyXG4gICAgICAgICAgc3luY2hyb25pemVUaGlzQmNrZ3JXaXRoSW1hZ2VCZWx0SG92ZXJCY2tncihvcHQsIGNvbnQsIHEsIHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBzeW5jaHJvbml6ZUJhY2tncm91bmRzT2ZPdGhlck9wdG5zIChjb250LCBpdGVyKSB7XHJcbiAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVyOyB4KyspIHtcclxuICAgIGxldCBiZWx0ID0gY29udC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0JylbeF1cclxuICAgIGJlbHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2luaGVyaXQnXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzeW5jaHJvbml6ZVRoaXNCY2tncldpdGhJbWFnZUJlbHRIb3ZlckJja2dyIChvcHQsIGNvbnQsIHgsIGlzRW50ZXIpIHtcclxuICBsZXQgYmVsdCA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdCcpW3hdXHJcbiAgaWYgKGlzRW50ZXIgPT09IHRydWUpIHtcclxuICAgIGxldCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG9wdClcclxuICAgIGxldCBiY2dDb2wgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJylcclxuICAgIGJlbHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmNnQ29sXHJcbiAgfSBlbHNlIGlmIChpc0VudGVyID09PSBmYWxzZSkge1xyXG4gICAgYmVsdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5oZXJpdCdcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IGl0ZXJhdG9yT2ZQb2ludHNMZWZ0IGZyb20gJy4vYXNpZGUuanMnO1xyXG4ndXNlIHN0cmljdCc7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0KTtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBsZXQgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkcy0yX2ZpZWxkc2V0LWRfY29udGFpbmVyX2F0cnliIC4tLWJlbHRfaWNvbi1jb250YWluZXInKTtcclxuICAgIGxldCBiZWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkcy0yX2ZpZWxkc2V0LWRfY29udGFpbmVyX2F0cnliIC4tLWJlbHRfYm9keS1jb250YWluZXJfYm9keScpO1xyXG4gICAgbGV0IGl0ZXIgPSBidG5zLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcjsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGkgPiAtMSkge1xyXG4gICAgICAgICAgICBsZXQgYXR0cnliID0gYnRuc1tpXTtcclxuICAgICAgICAgICAgbGV0IGJlbHQgPSBiZWx0c1tpXTtcclxuICAgICAgICAgICAgYXR0cnliLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZXJhdG9yT2ZQb2ludHNMZWZ0LmxlZnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkUG9pbnQoYmVsdClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb2ludChiZWx0KSB7XHJcbiAgICBsZXQgSU1HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnSU1HJyk7XHJcbiAgICBJTUcuc2V0QXR0cmlidXRlKCdzcmMnLCAnaWNvbnMvaWtvbmEtcG90ZWcuc3ZnJyk7XHJcbiAgICBiZWx0LmFwcGVuZENoaWxkKElNRyk7XHJcbiAgICBpdGVyYXRvck9mUG9pbnRzTGVmdC5sZWZ0LS07XHJcbiAgICBpdGVyYXRvck9mUG9pbnRzTGVmdC5lcXVhbGl6YXRvcigpO1xyXG4gICAgSU1HLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRlbGV0ZVRoaXNJTUcoSU1HKVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlVGhpc0lNRyh4KSB7XHJcbiAgICB4LnJlbW92ZSgpO1xyXG4gICAgaXRlcmF0b3JPZlBvaW50c0xlZnQubGVmdCsrO1xyXG4gICAgaXRlcmF0b3JPZlBvaW50c0xlZnQuZXF1YWxpemF0b3IoKTtcclxufSIsImltcG9ydCB7Z3VpZGVSZWFjdHN9IGZyb20gJy4vYXNpZGUuanMnO1xyXG5cInVzZSBzdHJpY3RcIjtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdGlhbGl6ZVRoaXNTZWN0aW9uKTtcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVUaGlzU2VjdGlvbigpIHtcclxuICAgIGxldCBsaXN0QSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNldC1jICN6YXNsb25hXCJcclxuICAgICk7XHJcbiAgICBsZXQgbGlzdEIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzZXQtYyAjcGFuY2VyelwiXHJcbiAgICApO1xyXG4gICAgbGV0IGltYWdlc0EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgIFwiLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzZXQtY19pbWdzX2ltZy5hXCJcclxuICAgICk7XHJcbiAgICBsZXQgaW1hZ2VzQiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNldC1jX2ltZ3NfaW1nLmJcIlxyXG4gICAgKTtcclxuICAgIGxldCBvcHRzQSA9IGxpc3RBLnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb25cIik7XHJcbiAgICBsZXQgb3B0c0IgPSBsaXN0Qi5xdWVyeVNlbGVjdG9yQWxsKFwib3B0aW9uXCIpO1xyXG4gICAgZHluYW1pemVUaGlzTGlzdChsaXN0QSwgb3B0c0EsIGltYWdlc0EsIGxpc3RCKTtcclxuICAgIGR5bmFtaXplVGhpc0xpc3QobGlzdEIsIG9wdHNCLCBpbWFnZXNCLCBsaXN0QSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGR5bmFtaXplVGhpc0xpc3QobGlzdCwgb3B0cywgaW1hZ2VzLCBvdGhlckxpc3QpIHtcclxuICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gbGlzdC52YWx1ZTtcclxuICAgICAgICBsZXQgaXRlciA9IG9wdHMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaXRlciAtIDE7IGorKykge1xyXG4gICAgICAgICAgICBpbWFnZXNbal0uY2xhc3NMaXN0LmFkZChcIml0SXNVbnNlbGVjdGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXI7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgb3B0ID0gb3B0c1tpXTtcclxuICAgICAgICAgICAgbGV0IG9wdFZhbHVlID0gb3B0LnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IG9wdFZhbHVlICYmIGkgIT09IDMpIHtcclxuICAgICAgICAgICAgICAgIGltYWdlc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiaXRJc1Vuc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZW5hYmxlTmV4dEZvcm1QYXJ0KGxpc3QsIG90aGVyTGlzdCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZW5hYmxlTmV4dEZvcm1QYXJ0KGxpc3QsIG90aGVyTGlzdCkge1xyXG4gICAgbGV0IGEgPSBsaXN0LnZhbHVlO1xyXG4gICAgbGV0IGIgPSBvdGhlckxpc3QudmFsdWU7XHJcbiAgICBpZiAoYSAhPT0gXCJcIiAmJiBiICE9PSBcIlwiKSB7XHJcbiAgICAgICAgbGV0IG5leHRQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzLTInKTtcclxuICAgICAgICBuZXh0UGFydC5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbiAgICAgICAgbGV0IGFsbE9ybmFtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZy5jb3JwdXNfc2VjdGlvbl9mb3JtX29ybmFtZW50LW1hcmtlcicpO1xyXG4gICAgICAgIGxldCB0aGlzT3JuYW1lbnQgPSBhbGxPcm5hbWVudHNbMl07XHJcbiAgICAgICAgdGhpc09ybmFtZW50LnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaWNvbnMvcG9sZS4yLnN2ZycpO1xyXG4gICAgICAgIHRoaXNPcm5hbWVudC5jbGFzc0xpc3QuYWRkKCdpdElzUGFzc2VkVGhyb3VnaHQnKTtcclxuICAgICAgICBsZXQgbmV4dE9ybmFtZW50ID0gYWxsT3JuYW1lbnRzWzNdO1xyXG4gICAgICAgIG5leHRPcm5hbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbiAgICAgICAgZ3VpZGVSZWFjdHMoNSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgaXRlcmF0b3JPZlBvaW50c0xlZnQgZnJvbSAnLi9hc2lkZS5qcyc7XHJcbmltcG9ydCB7Z3VpZGVSZWFjdHN9IGZyb20gJy4vYXNpZGUuanMnO1xyXG4ndXNlIHN0cmljdCc7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0aWFsaXplVGhpc1NlbGVjdClcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVUaGlzU2VsZWN0KCkge1xyXG4gICAgbGV0IG9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHMtMl9maWVsZHNldC1kX2NvbnRhaW5lcl9tb2NlJyk7XHJcbiAgICBsZXQgaXRlciA9IG9wdGlvbnMubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVyOyBpKyspIHtcclxuICAgICAgICBsZXQgb3B0ID0gb3B0aW9uc1tpXTtcclxuICAgICAgICBvcHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGl0SXNDbGlja2VkKG9wdCwgb3B0aW9ucywgaXRlciwgaSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBpdElzQ2xpY2tlZChvcHQsIG9wdHMsIGl0ZXIsIGkpIHtcclxuICAgIGxldCBjaGVja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwibW9jLXBpZXRub1wiXScpO1xyXG4gICAgbGV0IGNvc3RPZlRoaXMgPSBbMSwyLDIsMSwzLDFdO1xyXG4gICAgaWYgKGNoZWNrc1tpXS5jaGVja2VkPT09dHJ1ZSl7XHJcbiAgICAgICAgY2hlY2tzW2ldLmNoZWNrZWQ9ZmFsc2U7XHJcbiAgICAgICAgaXRlcmF0b3JPZlBvaW50c0xlZnQuaXRlcmF0b3JCKGNvc3RPZlRoaXNbaV0pO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgY2hlY2tzW2ldLmNoZWNrZWQ9dHJ1ZTtcclxuICAgICAgICBpdGVyYXRvck9mUG9pbnRzTGVmdC5kZWxldGF0b3JCKGNvc3RPZlRoaXNbaV0pO1xyXG4gICAgICAgIGd1aWRlUmVhY3RzKDYpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBpdGVyOyBqKyspIHtcclxuICAgICAgICBpZiAoY2hlY2tzW2pdLmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgb3B0c1tqXS5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGVja3Nbal0uY2hlY2tlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgb3B0c1tqXS5jbGFzc0xpc3QuYWRkKCdpdElzSGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0aWFsaXplR3VpZGUiLCJoaWRlVXNlckd1aWRlIiwic2V0VGltZW91dCIsImFzaWRlIiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsIm9ybm0iLCJyb3RhdGVBbmRIaWRlQXNpZGUiLCJidG4iLCJjb250cm9sbGVyIiwiaGVhZEJlbHQiLCJwaWVjZSIsIm9mZnNldEhlaWdodCIsInN0eWxlIiwidHJhbnNmb3JtIiwiYXciLCJvZmZzZXRXaWR0aCIsImFoIiwid3NwIiwieCIsInkiLCJ6IiwibGVmdCIsImJvdHRvbSIsImd1aWRlUmVhY3RzIiwiaSIsInJlbW92ZSIsInNoYWtlVG9Gb2N1c1VzZXJzQXR0ZW50aW9uIiwiZ3VpZGUiLCJ0aXRsZSIsImFyciIsImlubmVyVGV4dCIsImFyckIiLCJpdGVyYXRvck9mUG9pbnRzTGVmdCIsInNwZW50T25BdHRhY2siLCJpdGVyYXRvciIsImNvbnQiLCJpdGVyRGV2aWNlIiwib3B0IiwicXVlcnlTZWxlY3RvckFsbCIsInBvaW50cyIsImFtb3VudCIsImxlbmd0aCIsImJpbGFucyIsImFuaW1hdGVPcHRzU3BlbmRpbmciLCJkZWxldGF0b3IiLCJjb2luIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImF4UyIsIndpbmRvdyIsInNjcm9sbFkiLCJheFgiLCJvZmZzZXRUb3AiLCJheFoiLCJheFkiLCJvZmZzZXRMZWZ0IiwidG9wIiwiYXBwZW5kQ2hpbGQiLCJ3aWR0aCIsImhlaWdodCIsInJlbW92ZUNoaWxkIiwiaXRlcmF0b3JCIiwiaW50ZWdlciIsImRlbGV0YXRvckIiLCJlcXVhbGl6YXRvciIsInRoaXMiLCJpbml0aWFsaXplQnRuc09mQWNjZXB0YW5jZSIsImFjY2VwdGF0aW9uQnRuIiwiY29udGFpbnMiLCJzaWduVGhpc0FzQ2xpY2tlZCIsImluaXRpYWxpemVOZXh0U2VjdGlvbiIsImluaXRBZ2Fpbkd1aWRlVGV4dEZvclRoaXNTZWN0aW9uIiwiYWxsT3JuYW1lbnRzIiwidGhpc09ybmFtZW50IiwibmV4dE9ybmFtZW50IiwiemVuc2Nyb2xsIiwidG9ZIiwiZW5hYmxlTmV4dFNlY3Rpb24iLCJhbGxTZWN0aW9ucyIsInVuZGVmaW5lZCIsInNob3dCdG5PZkFjY2VwdGFuY2UiLCJjb250YWluZXIiLCJpbml0aWFsaXplIiwib3B0cyIsIml0ZW0iLCJzZXRJTUciLCJlbmFibGVTdHJpa2VOYW1lUGFydCIsInNldFN0cmlrZU5hbWVUb0RlcyIsInNldFBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uIiwic2V0Rm9yY2VEZXMiLCJvbmx5T25jZSIsImRlc1BhcnQiLCJhcnJheSIsImJlbHQiLCJpbWFnIiwiYXR0cnliIiwiZ2V0QXR0cmlidXRlIiwiaWNvbiIsImFsbElNR3MiLCJzdGFuZGFydCIsImltYWdlVG9EZWwiLCJqIiwidGhlSU1HIiwic291cmNlSU1HIiwibmV3SU1HIiwic2V0TmV4dFBhcnRPZkZvcm11bGFGb3JUaGVGaXJzdFRpbWUiLCJpbnAiLCJzdHJOYW1lIiwidmFsdWUiLCJzaG93QWxsRGVzIiwiaXRtIiwidHJpbSIsInNldE5leHRQYXJ0T2ZGb3JtdWxhIiwiSU1HcyIsIml0ZXIiLCJzdHJuZyIsIklNRyIsInB1c2giLCJzdHJpbmdUb1NldCIsImpvaW4iLCJ6eXdEZXMiLCJpbWlEZXMiLCJwcnpEZXMiLCJ6ZGFEZXMiLCJzZXROYW1lVG9EZXMiLCJuYW0iLCJzZXROaWNrbmFtZVRvRGVzIiwiaW5wQiIsInN1cm5hbSIsInNldFNlbnRlbmNlVG9EZXMiLCJhbGxEZXMiLCJ0ZXh0QXJlYSIsImFyZWFWYWx1ZSIsImVuYWJsZU5leHRQYXJ0T2ZGb3JtIiwibmV4dFBhcnQiLCJib3hTaXplIiwiekluZGV4IiwiaW5pdFVzZXJGbG93VmlhU2VjdGlvbl9zZWxlY3ROb2Rlc1RvVGhpc1Byb2Nlc3MiLCJub2RlcyIsImZvckVhY2giLCJub2RlIiwiaWR4IiwiZXZlbnQiLCJzZWN0aW9uQ29tcGxldGVkIiwiaW5pdFVzZXJGbG93VG9OZXh0U2VjdGlvbl9jaGVja0lmVGhpc1NlY3Rpb25Jc0NvbXBsZXRlZCIsImtleUNvZGUiLCJpbml0VXNlckZsb3dWaWFTZWN0aW9uX2dvVG9OZXh0Tm9kZSIsImJsdXIiLCJpbml0VXNlckZsb3dUb05leHRTZWN0aW9uX3Nob3dCdG5PZkFjY2VwdGFuY2UiLCJmb2N1cyIsImluZGV4T2YiLCJidG5Db250YWluZXJGb3JUaGlzU2VjdGlvbiIsImJ0bk9mVGhpc1NlY3Rpb24iLCJzZXRDdXJyZW50RGF0YVRvQXZhdGFyRGVzY3JpcHRpb24iLCJjaG9vc2VZb3VyQXZhdGFyIiwiY29udGFpbmVycyIsImF2YXRhcnMiLCJjaG9vc2VUaGlzQXZhdGFyIiwic2V0T25lUGFydE9mQXR0YWNrRGVzY3JpcHRpb24iLCJzeW5jaHJvbml6ZUJhY2tncm91bmRzT2ZPdGhlck9wdHMiLCJlbmFibGVBdHRhY2tzIiwiY2hlY2tlZCIsImF2IiwibmV4dERlc1BhcnQiLCJhbm90aGVyTmV4dERlc1BhcnQiLCJvdGhlckFub3RoZXJOZXh0RGVzUGFydCIsIm9wdGlvbnMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJlbmFibGVkQXR0YWNrcyIsImRpc2FibGVkSXRlbSIsInNlbGVjdGVkIiwiZW5hYmxlZEF0dGFjayIsImluaXRpYWxpemVBdHRhY2tzUGFydCIsIm9uTU91dCIsIm9uTUVudGVyIiwic3luY2hyb25pemVUaGlzQmNrZ3JXaXRoSW1hZ2VCZWx0SG92ZXJCY2tnciIsInNlbGVjdExpc3QiLCJxIiwic3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRucyIsImlzRW50ZXIiLCJnZXRDb21wdXRlZFN0eWxlIiwiYmNnQ29sIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImluaXQiLCJidG5zIiwiYmVsdHMiLCJhZGRQb2ludCIsImRlbGV0ZVRoaXNJTUciLCJpbml0aWFsaXplVGhpc1NlY3Rpb24iLCJsaXN0QSIsImxpc3RCIiwiaW1hZ2VzQSIsImltYWdlc0IiLCJvcHRzQSIsIm9wdHNCIiwiZHluYW1pemVUaGlzTGlzdCIsImxpc3QiLCJpbWFnZXMiLCJvdGhlckxpc3QiLCJvcHRWYWx1ZSIsImVuYWJsZU5leHRGb3JtUGFydCIsImEiLCJiIiwiaW5pdGlhbGl6ZVRoaXNTZWxlY3QiLCJpdElzQ2xp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
