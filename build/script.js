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

    function initializeNextSection(iterator) {
        var allOrnaments = document.querySelectorAll('img.corpus_section_form_ornament-marker');
        var thisOrnament = allOrnaments[iterator - 1];
        var nextOrnament = allOrnaments[iterator - 1];
        thisOrnament.setAttribute("src", "./icons/pole.2.svg");
        thisOrnament.classList.add("itIsPassedThrought");
        nextOrnament.classList.remove("itIsHidden");
        //window.scrollTo(0, nextOrnament.offsetTop);
        zenscroll.toY(nextOrnament.offsetTop);
        enableNextSection(iterator);
    }
    function enableNextSection(iterator) {
        var allSections = [undefined, document.querySelector('.corpus_section_form_fields'), document.querySelector('.corpus_section_form_field-C'), document.querySelector('.corpus_section_form_fields-2')];
        allSections[iterator].classList.remove('itIsHidden');
        guideReacts(iterator);
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
            if (node.value.trim() === "") {
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
        var acceptationBtn = document.querySelector('.corpus_section_form_field-A_btn-belt_btn-positioner.firstSectionBtn');
        acceptationBtn.classList.remove('itIsHidden');
        acceptationBtn.addEventListener('click', function () {
            setCurrentDataToAvatarDescription();
            initializeNextSection(1);
            //initializeNextGuideText(1);
            //thisIsClicked(acceptationBtn);
        });
    }

    function setCurrentDataToAvatarDescription() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyIuLi9zb3VyY2UvZHluYW1pY3MvYXNpZGUuanMiLCIuLi9ub2RlX21vZHVsZXMvemVuc2Nyb2xsL3plbnNjcm9sbC5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9mb3JtX2luaXRpYWxpemVOZXh0U2VjdGlvbi5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9hdGFraS1zZXQtdHh0LmpzIiwiLi4vc291cmNlL2R5bmFtaWNzL2Zvcm1fc2VjdGlvbi1vbmUuanMiLCIuLi9zb3VyY2UvZHluYW1pY3Mva2xhc2EuanMiLCIuLi9zb3VyY2UvZHluYW1pY3MvYXRha2kuanMiLCIuLi9zb3VyY2UvZHluYW1pY3MvYXR0cnlicy5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9vYnJvbnkuanMiLCIuLi9zb3VyY2UvZHluYW1pY3MvbW9jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdGlhbGl6ZUd1aWRlKVxyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZUd1aWRlKCkge1xyXG4gIGhpZGVVc2VyR3VpZGUoKTtcclxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJyk7XHJcbiAgICBhc2lkZS5jbGFzc0xpc3QuYWRkKCdvbkxvYWQnKTtcclxuICB9LCAwKVxyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlVXNlckd1aWRlKCkge1xyXG4gIGxldCBvcm5tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWhlYWQnKVxyXG4gIG9ybm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVBbmRIaWRlQXNpZGUpXHJcbiAgbGV0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLWd1aWRlX2hpZGUnKVxyXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZUFuZEhpZGVBc2lkZSlcclxufVxyXG5sZXQgY29udHJvbGxlciA9IDBcclxuXHJcbmZ1bmN0aW9uIHJvdGF0ZUFuZEhpZGVBc2lkZSgpIHtcclxuICBsZXQgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpXHJcbiAgaWYgKGNvbnRyb2xsZXIgPT09IDApIHtcclxuICAgIGxldCBoZWFkQmVsdCA9IGFzaWRlLnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1oZWFkJyk7XHJcbiAgICBsZXQgcGllY2UgPSBoZWFkQmVsdC5vZmZzZXRIZWlnaHQ7XHJcbiAgICBhc2lkZS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSdcclxuICAgIGxldCBhdyA9IGFzaWRlLm9mZnNldFdpZHRoXHJcbiAgICBsZXQgYWggPSBhc2lkZS5vZmZzZXRIZWlnaHRcclxuICAgIGxldCB3c3AgPSBhaCArICgoYXcgLSBhaCkgLyAyKVxyXG4gICAgbGV0IHggPSAod3NwICogLTEpICsgcGllY2VcclxuICAgIGxldCB5ID0geCArICdweCdcclxuICAgIGxldCB6ID0gKChhdyAtIGFoKSAvIDIpICsgJ3B4J1xyXG4gICAgYXNpZGUuc3R5bGUubGVmdCA9IHlcclxuICAgIGFzaWRlLnN0eWxlLmJvdHRvbSA9IHpcclxuICAgIGNvbnRyb2xsZXIgPSAxXHJcbiAgfSBlbHNlIGlmIChjb250cm9sbGVyID09PSAxKSB7XHJcbiAgICBhc2lkZS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJ1xyXG4gICAgYXNpZGUuc3R5bGUubGVmdCA9IDBcclxuICAgIGFzaWRlLnN0eWxlLmJvdHRvbSA9IDBcclxuICAgIGNvbnRyb2xsZXIgPSAwXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ3VpZGVSZWFjdHMoaSkge1xyXG4gIGxldCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJyk7XHJcbiAgYXNpZGUuY2xhc3NMaXN0LnJlbW92ZSgnb25BZHZpY2UnKTtcclxuICBhc2lkZS5jbGFzc0xpc3QucmVtb3ZlKCdvbkFkdmljZUInKTtcclxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7c2hha2VUb0ZvY3VzVXNlcnNBdHRlbnRpb24oYXNpZGUpfSwwKTtcclxuICBsZXQgZ3VpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtZm9vdCAudXNlci1ndWlkZScpO1xyXG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1mb290X3RpdGxlJyk7XHJcbiAgbGV0IGFyciA9IFtcclxuICAgICdHZHkgd3Bpc3plc3ogaW1pxJksIHByenlkb21layBpIHphd2/FgmFuaWUsIHBvIHphdHdpZXJkemVuaXUgem1pYW4gcG9qYXdpIHNpxJkgbmFzdMSZcG5hIGN6xJnFm8SHIGZvcm11bGFyemEuJyxcclxuICAgICdQbyB3eWJvcnplIGtsYXN5LCBwb2phd2kgc2llIG9rbm8gd3lib3J1IGF0YWt1IHNwb8WbcsOzZCB1ZGVyemXFhCBjaGFyYWt0ZXJ5c3R5Y3pueWNoIGRsYSB0ZWogcG9zdGFjaS4nLFxyXG4gICAgJ1d5YmllcnogdWRlcnplbmllLCBrbGlrYWrEhWMgdyBzxYJvd28gb3Bpc3VqxIVjZSBqZS4gUHJ6eSBrYcW8ZHltIGVwaXRlY2llIHdpZG5pZWplIGNoYXJha3RlcnlzdHlrYSBjaW9zdSB3IElrb25hY2ggxbt5d2lvxYLDs3cgaSBJa29uYWNoIFVkZXJ6ZcWELicsXHJcbiAgICAnV3ltecWbbCBuYXp3ZSBkbGEgdWRlcnplbmlhIHogcG9wcnplZG5pZWdvIGtyb2t1LiBHZHkgasSFIHphdHdpZXJkemlzeiwgcG9qYXdpIHNpZSBrb2xlam5hIGN6ZcWbxIcga2FydHkgcG9zdGFjaS4nLFxyXG4gICAgJ1BvIHd5Ym9yemUgamVkbmVqIG9wY2ppIHoga2HFvGRlaiBsaXN0eSwgcG9qYXdpIHNpZSBrb2xlam5hIGN6ZcWbxIcga2FydHkgcG9zdGFjaS4nLFxyXG4gICAgJ0tsaWtuaWogdHlsZSBvcGNqaSwgaWxlIGNoY2Vzei4gS2HFvGR5IHplc3RhdyAoY3p5bGkgbW9jIGkgcGlldG5vKSB6YWJpZXJhIGNpIHBld27EhSBpbG/Fm8SHIHB1bmt0w7N3IE3EhWRyb8WbY2kuJyxcclxuICAgICdSb3pkYWogcG96b3N0YcWCZSBwdW5rdHkgbcSFZHJvxZtjaSBuYSB3c3DDs8WCY3p5bm5pa2kgcG9zdGFjaTogxbt5Y2llLCBNxIVkcm/Fm8SHLCBSdWNoIGkgRHppYcWCYW5pZS4nXHJcbiAgXVxyXG4gIGd1aWRlLmlubmVyVGV4dCA9IGFycltpXVxyXG4gIGxldCBhcnJCID0gW1xyXG4gICAgJ3RvxbxzYW1vxZvEhzonLFxyXG4gICAgJ2tsYXNhOicsXHJcbiAgICAnYXRhazonLFxyXG4gICAgJ25hendhIGF0YWt1OicsXHJcbiAgICAnb2Jyb25hOicsXHJcbiAgICAnemRvbG5vxZvEhyBpIHPFgmFib8WbxIcnLFxyXG4gICAgJ2F0cnlidXR5OidcclxuICBdXHJcbiAgdGl0bGUuaW5uZXJUZXh0ID0gYXJyQltpXVxyXG59XHJcbmZ1bmN0aW9uIHNoYWtlVG9Gb2N1c1VzZXJzQXR0ZW50aW9uKGFzaWRlKSB7XHJcbiAgaWYgKGNvbnRyb2xsZXIgPT09IDEpIHtcclxuICAgIGxldCBoZWFkQmVsdCA9IGFzaWRlLnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1oZWFkJyk7XHJcbiAgICBsZXQgcGllY2UgPSBoZWFkQmVsdC5vZmZzZXRIZWlnaHQ7XHJcbiAgICBhc2lkZS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XHJcbiAgICBsZXQgYXcgPSBhc2lkZS5vZmZzZXRXaWR0aDtcclxuICAgIGxldCBhaCA9IGFzaWRlLm9mZnNldEhlaWdodDtcclxuICAgIGxldCB3c3AgPSBhaCArICgoYXcgLSBhaCkgLyAyKTtcclxuICAgIGxldCB4ID0gKHdzcCAqIC0xKSArIHBpZWNlO1xyXG4gICAgbGV0IHkgPSB4ICsgJ3B4JztcclxuICAgIGxldCB6ID0gKChhdyAtIGFoKSAvIDIpICsgJ3B4JztcclxuICAgIGFzaWRlLnN0eWxlLmxlZnQgPSB5O1xyXG4gICAgYXNpZGUuc3R5bGUuYm90dG9tID0gejtcclxuICAgIGFzaWRlLmNsYXNzTGlzdC5hZGQoJ29uQWR2aWNlJyk7XHJcbiAgfSBlbHNlIGlmIChjb250cm9sbGVyID09PSAwKSB7XHJcbiAgICBhc2lkZS5jbGFzc0xpc3QuYWRkKCdvbkFkdmljZUInKTtcclxuICB9XHJcbn1cclxuXHJcbnZhciBpdGVyYXRvck9mUG9pbnRzTGVmdCA9IHtcclxuICBsZWZ0OiAyMCxcclxuICBzcGVudE9uQXR0YWNrOiAwLFxyXG4gIGl0ZXJhdG9yKGNvbnQsIHgpIHtcclxuICAgIGxldCBpdGVyRGV2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWJvZHlfaG93LW11Y2gnKVxyXG4gICAgbGV0IG9wdCA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdCcpW3hdXHJcbiAgICBsZXQgcG9pbnRzID0gb3B0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpXHJcbiAgICBsZXQgYW1vdW50ID0gKHBvaW50cy5sZW5ndGggLSAxKVxyXG4gICAgbGV0IGJpbGFucyA9IGFtb3VudCAtIHRoaXMuc3BlbnRPbkF0dGFja1xyXG4gICAgdGhpcy5sZWZ0ID0gdGhpcy5sZWZ0IC0gYmlsYW5zXHJcbiAgICB0aGlzLnNwZW50T25BdHRhY2sgPSBhbW91bnRcclxuICAgIGl0ZXJEZXZpY2UuaW5uZXJUZXh0ID0gJ1Bvem9zdGHFgm8nICsgJyAnICsgdGhpcy5sZWZ0ICsgJ3gnXHJcbiAgICB0aGlzLmFuaW1hdGVPcHRzU3BlbmRpbmcob3B0LCBhbW91bnQpO1xyXG4gIH0sXHJcbiAgZGVsZXRhdG9yKCkge1xyXG4gICAgbGV0IGl0ZXJEZXZpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtYm9keV9ob3ctbXVjaCcpXHJcbiAgICB0aGlzLmxlZnQgPSB0aGlzLmxlZnQgKyB0aGlzLnNwZW50T25BdHRhY2tcclxuICAgIHRoaXMuc3BlbnRPbkF0dGFjayA9IDBcclxuICAgIGl0ZXJEZXZpY2UuaW5uZXJUZXh0ID0gJ1Bvem9zdGHFgm8nICsgJyAnICsgdGhpcy5sZWZ0ICsgJ3gnXHJcbiAgfSxcclxuICBhbmltYXRlT3B0c1NwZW5kaW5nKG9wdCwgYW1vdW50KSB7XHJcbiAgICBsZXQgY29pbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0lNRycpO1xyXG4gICAgY29pbi5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ljb25zL2lrb25hLXBvdGVnLnN2ZycpO1xyXG4gICAgY29pbi5jbGFzc0xpc3QuYWRkKCdpdElzQ29pbicpO1xyXG4gICAgbGV0IGF4UyA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gICAgbGV0IGF4WCA9IG9wdC5vZmZzZXRUb3A7XHJcbiAgICBsZXQgYXhaID0gYXhYIC0gYXhTO1xyXG4gICAgbGV0IGF4WSA9IG9wdC5vZmZzZXRMZWZ0O1xyXG4gICAgY29pbi5zdHlsZS50b3AgPSBheFogKyAncHgnO1xyXG4gICAgY29pbi5zdHlsZS5sZWZ0ID0gYXhZICsgJ3B4JztcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChjb2luKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb2luLnN0eWxlLmxlZnQgPSAnMCc7XHJcbiAgICAgIGNvaW4uc3R5bGUudG9wID0gJzkwJSc7XHJcbiAgICAgIGNvaW4uc3R5bGUud2lkdGggPSAnNTVweCc7XHJcbiAgICAgIGNvaW4uc3R5bGUuaGVpZ2h0ID0gJzU1cHgnO1xyXG4gICAgfSwgMCk7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnJlbW92ZUNoaWxkKGNvaW4pO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpLmNsYXNzTGlzdC5hZGQoJ29uQWR2aWNlJyk7XHJcbiAgICB9LCA1NTApO1xyXG4gIH0sXHJcbiAgaXRlcmF0b3JCKGludGVnZXIpIHtcclxuICAgIGxldCBpdGVyRGV2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWJvZHlfaG93LW11Y2gnKVxyXG4gICAgdGhpcy5sZWZ0ID0gdGhpcy5sZWZ0ICsgaW50ZWdlclxyXG4gICAgaXRlckRldmljZS5pbm5lclRleHQgPSAnUG96b3N0YcWCbycgKyAnICcgKyB0aGlzLmxlZnQgKyAneCdcclxuICB9LFxyXG4gIGRlbGV0YXRvckIoaW50ZWdlcikge1xyXG4gICAgbGV0IGl0ZXJEZXZpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtYm9keV9ob3ctbXVjaCcpXHJcbiAgICB0aGlzLmxlZnQgPSB0aGlzLmxlZnQgLSBpbnRlZ2VyXHJcbiAgICBpdGVyRGV2aWNlLmlubmVyVGV4dCA9ICdQb3pvc3RhxYJvJyArICcgJyArIHRoaXMubGVmdCArICd4J1xyXG4gIH0sXHJcbiAgZXF1YWxpemF0b3IoKSB7XHJcbiAgICBsZXQgaXRlckRldmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1ib2R5X2hvdy1tdWNoJylcclxuICAgIGl0ZXJEZXZpY2UuaW5uZXJUZXh0ID0gJ1Bvem9zdGHFgm8nICsgJyAnICsgdGhpcy5sZWZ0ICsgJ3gnXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGl0ZXJhdG9yT2ZQb2ludHNMZWZ0IiwiLyoqXG4gKiBaZW5zY3JvbGwgNC4wLjJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS96ZW5nYWJvci96ZW5zY3JvbGwvXG4gKlxuICogQ29weXJpZ2h0IDIwMTXigJMyMDE4IEdhYm9yIExlbmFyZFxuICpcbiAqIFRoaXMgaXMgZnJlZSBhbmQgdW5lbmN1bWJlcmVkIHNvZnR3YXJlIHJlbGVhc2VkIGludG8gdGhlIHB1YmxpYyBkb21haW4uXG4gKiBcbiAqIEFueW9uZSBpcyBmcmVlIHRvIGNvcHksIG1vZGlmeSwgcHVibGlzaCwgdXNlLCBjb21waWxlLCBzZWxsLCBvclxuICogZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlLCBlaXRoZXIgaW4gc291cmNlIGNvZGUgZm9ybSBvciBhcyBhIGNvbXBpbGVkXG4gKiBiaW5hcnksIGZvciBhbnkgcHVycG9zZSwgY29tbWVyY2lhbCBvciBub24tY29tbWVyY2lhbCwgYW5kIGJ5IGFueVxuICogbWVhbnMuXG4gKiBcbiAqIEluIGp1cmlzZGljdGlvbnMgdGhhdCByZWNvZ25pemUgY29weXJpZ2h0IGxhd3MsIHRoZSBhdXRob3Igb3IgYXV0aG9yc1xuICogb2YgdGhpcyBzb2Z0d2FyZSBkZWRpY2F0ZSBhbnkgYW5kIGFsbCBjb3B5cmlnaHQgaW50ZXJlc3QgaW4gdGhlXG4gKiBzb2Z0d2FyZSB0byB0aGUgcHVibGljIGRvbWFpbi4gV2UgbWFrZSB0aGlzIGRlZGljYXRpb24gZm9yIHRoZSBiZW5lZml0XG4gKiBvZiB0aGUgcHVibGljIGF0IGxhcmdlIGFuZCB0byB0aGUgZGV0cmltZW50IG9mIG91ciBoZWlycyBhbmRcbiAqIHN1Y2Nlc3NvcnMuIFdlIGludGVuZCB0aGlzIGRlZGljYXRpb24gdG8gYmUgYW4gb3ZlcnQgYWN0IG9mXG4gKiByZWxpbnF1aXNobWVudCBpbiBwZXJwZXR1aXR5IG9mIGFsbCBwcmVzZW50IGFuZCBmdXR1cmUgcmlnaHRzIHRvIHRoaXNcbiAqIHNvZnR3YXJlIHVuZGVyIGNvcHlyaWdodCBsYXcuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC5cbiAqIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SXG4gKiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSxcbiAqIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUlxuICogT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICogXG4gKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHJlZmVyIHRvIDxodHRwOi8vdW5saWNlbnNlLm9yZz5cbiAqIFxuICovXG5cbi8qanNoaW50IGRldmVsOnRydWUsIGFzaTp0cnVlICovXG5cbi8qZ2xvYmFsIGRlZmluZSwgbW9kdWxlICovXG5cblxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShbXSwgZmFjdG9yeSgpKVxuXHR9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKVxuXHR9IGVsc2Uge1xuXHRcdChmdW5jdGlvbiBpbnN0YWxsKCkge1xuXHRcdFx0Ly8gVG8gbWFrZSBzdXJlIFplbnNjcm9sbCBjYW4gYmUgcmVmZXJlbmNlZCBmcm9tIHRoZSBoZWFkZXIsIGJlZm9yZSBgYm9keWAgaXMgYXZhaWxhYmxlXG5cdFx0XHRpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQuYm9keSkge1xuXHRcdFx0XHRyb290LnplbnNjcm9sbCA9IGZhY3RvcnkoKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gcmV0cnkgOW1zIGxhdGVyXG5cdFx0XHRcdHNldFRpbWVvdXQoaW5zdGFsbCwgOSlcblx0XHRcdH1cblx0XHR9KSgpXG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuXHRcInVzZSBzdHJpY3RcIlxuXG5cblx0Ly8gRGV0ZWN0IGlmIHRoZSBicm93c2VyIGFscmVhZHkgc3VwcG9ydHMgbmF0aXZlIHNtb290aCBzY3JvbGxpbmcgKGUuZy4sIEZpcmVmb3ggMzYrIGFuZCBDaHJvbWUgNDkrKSBhbmQgaXQgaXMgZW5hYmxlZDpcblx0dmFyIGlzTmF0aXZlU21vb3RoU2Nyb2xsRW5hYmxlZE9uID0gZnVuY3Rpb24gKGVsZW0pIHtcblx0XHRyZXR1cm4gZWxlbSAmJiBcImdldENvbXB1dGVkU3R5bGVcIiBpbiB3aW5kb3cgJiZcblx0XHRcdHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW0pW1wic2Nyb2xsLWJlaGF2aW9yXCJdID09PSBcInNtb290aFwiXG5cdH1cblxuXG5cdC8vIEV4aXQgaWYgaXTigJlzIG5vdCBhIGJyb3dzZXIgZW52aXJvbm1lbnQ6XG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiIHx8ICEoXCJkb2N1bWVudFwiIGluIHdpbmRvdykpIHtcblx0XHRyZXR1cm4ge31cblx0fVxuXG5cblx0dmFyIG1ha2VTY3JvbGxlciA9IGZ1bmN0aW9uIChjb250YWluZXIsIGRlZmF1bHREdXJhdGlvbiwgZWRnZU9mZnNldCkge1xuXG5cdFx0Ly8gVXNlIGRlZmF1bHRzIGlmIG5vdCBwcm92aWRlZFxuXHRcdGRlZmF1bHREdXJhdGlvbiA9IGRlZmF1bHREdXJhdGlvbiB8fCA5OTkgLy9tc1xuXHRcdGlmICghZWRnZU9mZnNldCAmJiBlZGdlT2Zmc2V0ICE9PSAwKSB7XG5cdFx0XHQvLyBXaGVuIHNjcm9sbGluZywgdGhpcyBhbW91bnQgb2YgZGlzdGFuY2UgaXMga2VwdCBmcm9tIHRoZSBlZGdlcyBvZiB0aGUgY29udGFpbmVyOlxuXHRcdFx0ZWRnZU9mZnNldCA9IDkgLy9weFxuXHRcdH1cblxuXHRcdC8vIEhhbmRsaW5nIHRoZSBsaWZlLWN5Y2xlIG9mIHRoZSBzY3JvbGxlclxuXHRcdHZhciBzY3JvbGxUaW1lb3V0SWRcblx0XHR2YXIgc2V0U2Nyb2xsVGltZW91dElkID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG5cdFx0XHRzY3JvbGxUaW1lb3V0SWQgPSBuZXdWYWx1ZVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFN0b3AgdGhlIGN1cnJlbnQgc21vb3RoIHNjcm9sbCBvcGVyYXRpb24gaW1tZWRpYXRlbHlcblx0XHQgKi9cblx0XHR2YXIgc3RvcFNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNsZWFyVGltZW91dChzY3JvbGxUaW1lb3V0SWQpXG5cdFx0XHRzZXRTY3JvbGxUaW1lb3V0SWQoMClcblx0XHR9XG5cblx0XHR2YXIgZ2V0VG9wV2l0aEVkZ2VPZmZzZXQgPSBmdW5jdGlvbiAoZWxlbSkge1xuXHRcdFx0cmV0dXJuIE1hdGgubWF4KDAsIGNvbnRhaW5lci5nZXRUb3BPZihlbGVtKSAtIGVkZ2VPZmZzZXQpXG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU2Nyb2xscyB0byBhIHNwZWNpZmljIHZlcnRpY2FsIHBvc2l0aW9uIGluIHRoZSBkb2N1bWVudC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7dGFyZ2V0WX0gVGhlIHZlcnRpY2FsIHBvc2l0aW9uIHdpdGhpbiB0aGUgZG9jdW1lbnQuXG5cdFx0ICogQHBhcmFtIHtkdXJhdGlvbn0gT3B0aW9uYWxseSB0aGUgZHVyYXRpb24gb2YgdGhlIHNjcm9sbCBvcGVyYXRpb24uXG5cdFx0ICogICAgICAgIElmIG5vdCBwcm92aWRlZCB0aGUgZGVmYXVsdCBkdXJhdGlvbiBpcyB1c2VkLlxuXHRcdCAqIEBwYXJhbSB7b25Eb25lfSBBbiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBpbnZva2VkIG9uY2UgdGhlIHNjcm9sbCBmaW5pc2hlZC5cblx0XHQgKi9cblx0XHR2YXIgc2Nyb2xsVG9ZID0gZnVuY3Rpb24gKHRhcmdldFksIGR1cmF0aW9uLCBvbkRvbmUpIHtcblx0XHRcdHN0b3BTY3JvbGwoKVxuXHRcdFx0aWYgKGR1cmF0aW9uID09PSAwIHx8IChkdXJhdGlvbiAmJiBkdXJhdGlvbiA8IDApIHx8IGlzTmF0aXZlU21vb3RoU2Nyb2xsRW5hYmxlZE9uKGNvbnRhaW5lci5ib2R5KSkge1xuXHRcdFx0XHRjb250YWluZXIudG9ZKHRhcmdldFkpXG5cdFx0XHRcdGlmIChvbkRvbmUpIHtcblx0XHRcdFx0XHRvbkRvbmUoKVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgc3RhcnRZID0gY29udGFpbmVyLmdldFkoKVxuXHRcdFx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLm1heCgwLCB0YXJnZXRZKSAtIHN0YXJ0WVxuXHRcdFx0XHR2YXIgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKClcblx0XHRcdFx0ZHVyYXRpb24gPSBkdXJhdGlvbiB8fCBNYXRoLm1pbihNYXRoLmFicyhkaXN0YW5jZSksIGRlZmF1bHREdXJhdGlvbik7XG5cdFx0XHRcdChmdW5jdGlvbiBsb29wU2Nyb2xsKCkge1xuXHRcdFx0XHRcdHNldFNjcm9sbFRpbWVvdXRJZChzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdC8vIENhbGN1bGF0ZSBwZXJjZW50YWdlOlxuXHRcdFx0XHRcdFx0dmFyIHAgPSBNYXRoLm1pbigxLCAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFRpbWUpIC8gZHVyYXRpb24pXG5cdFx0XHRcdFx0XHQvLyBDYWxjdWxhdGUgdGhlIGFic29sdXRlIHZlcnRpY2FsIHBvc2l0aW9uOlxuXHRcdFx0XHRcdFx0dmFyIHkgPSBNYXRoLm1heCgwLCBNYXRoLmZsb29yKHN0YXJ0WSArIGRpc3RhbmNlKihwIDwgMC41ID8gMipwKnAgOiBwKig0IC0gcCoyKS0xKSkpXG5cdFx0XHRcdFx0XHRjb250YWluZXIudG9ZKHkpXG5cdFx0XHRcdFx0XHRpZiAocCA8IDEgJiYgKGNvbnRhaW5lci5nZXRIZWlnaHQoKSArIHkpIDwgY29udGFpbmVyLmJvZHkuc2Nyb2xsSGVpZ2h0KSB7XG5cdFx0XHRcdFx0XHRcdGxvb3BTY3JvbGwoKVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dChzdG9wU2Nyb2xsLCA5OSkgLy8gd2l0aCBjb29sZG93biB0aW1lXG5cdFx0XHRcdFx0XHRcdGlmIChvbkRvbmUpIHtcblx0XHRcdFx0XHRcdFx0XHRvbkRvbmUoKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgOSkpXG5cdFx0XHRcdH0pKClcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTY3JvbGxzIHRvIHRoZSB0b3Agb2YgYSBzcGVjaWZpYyBlbGVtZW50LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtlbGVtfSBUaGUgZWxlbWVudCB0byBzY3JvbGwgdG8uXG5cdFx0ICogQHBhcmFtIHtkdXJhdGlvbn0gT3B0aW9uYWxseSB0aGUgZHVyYXRpb24gb2YgdGhlIHNjcm9sbCBvcGVyYXRpb24uXG5cdFx0ICogQHBhcmFtIHtvbkRvbmV9IEFuIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgb25jZSB0aGUgc2Nyb2xsIGZpbmlzaGVkLlxuXHRcdCAqL1xuXHRcdHZhciBzY3JvbGxUb0VsZW0gPSBmdW5jdGlvbiAoZWxlbSwgZHVyYXRpb24sIG9uRG9uZSkge1xuXHRcdFx0c2Nyb2xsVG9ZKGdldFRvcFdpdGhFZGdlT2Zmc2V0KGVsZW0pLCBkdXJhdGlvbiwgb25Eb25lKVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNjcm9sbHMgYW4gZWxlbWVudCBpbnRvIHZpZXcgaWYgbmVjZXNzYXJ5LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtlbGVtfSBUaGUgZWxlbWVudC5cblx0XHQgKiBAcGFyYW0ge2R1cmF0aW9ufSBPcHRpb25hbGx5IHRoZSBkdXJhdGlvbiBvZiB0aGUgc2Nyb2xsIG9wZXJhdGlvbi5cblx0XHQgKiBAcGFyYW0ge29uRG9uZX0gQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBvbmNlIHRoZSBzY3JvbGwgZmluaXNoZWQuXG5cdFx0ICovXG5cdFx0dmFyIHNjcm9sbEludG9WaWV3ID0gZnVuY3Rpb24gKGVsZW0sIGR1cmF0aW9uLCBvbkRvbmUpIHtcblx0XHRcdHZhciBlbGVtSGVpZ2h0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcblx0XHRcdHZhciBlbGVtQm90dG9tID0gY29udGFpbmVyLmdldFRvcE9mKGVsZW0pICsgZWxlbUhlaWdodFxuXHRcdFx0dmFyIGNvbnRhaW5lckhlaWdodCA9IGNvbnRhaW5lci5nZXRIZWlnaHQoKVxuXHRcdFx0dmFyIHkgPSBjb250YWluZXIuZ2V0WSgpXG5cdFx0XHR2YXIgY29udGFpbmVyQm90dG9tID0geSArIGNvbnRhaW5lckhlaWdodFxuXHRcdFx0aWYgKGdldFRvcFdpdGhFZGdlT2Zmc2V0KGVsZW0pIDwgeSB8fCAoZWxlbUhlaWdodCArIGVkZ2VPZmZzZXQpID4gY29udGFpbmVySGVpZ2h0KSB7XG5cdFx0XHRcdC8vIEVsZW1lbnQgaXMgY2xpcHBlZCBhdCB0b3Agb3IgaXMgaGlnaGVyIHRoYW4gc2NyZWVuLlxuXHRcdFx0XHRzY3JvbGxUb0VsZW0oZWxlbSwgZHVyYXRpb24sIG9uRG9uZSlcblx0XHRcdH0gZWxzZSBpZiAoKGVsZW1Cb3R0b20gKyBlZGdlT2Zmc2V0KSA+IGNvbnRhaW5lckJvdHRvbSkge1xuXHRcdFx0XHQvLyBFbGVtZW50IGlzIGNsaXBwZWQgYXQgdGhlIGJvdHRvbS5cblx0XHRcdFx0c2Nyb2xsVG9ZKGVsZW1Cb3R0b20gLSBjb250YWluZXJIZWlnaHQgKyBlZGdlT2Zmc2V0LCBkdXJhdGlvbiwgb25Eb25lKVxuXHRcdFx0fSBlbHNlIGlmIChvbkRvbmUpIHtcblx0XHRcdFx0b25Eb25lKClcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTY3JvbGxzIHRvIHRoZSBjZW50ZXIgb2YgYW4gZWxlbWVudC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7ZWxlbX0gVGhlIGVsZW1lbnQuXG5cdFx0ICogQHBhcmFtIHtkdXJhdGlvbn0gT3B0aW9uYWxseSB0aGUgZHVyYXRpb24gb2YgdGhlIHNjcm9sbCBvcGVyYXRpb24uXG5cdFx0ICogQHBhcmFtIHtvZmZzZXR9IE9wdGlvbmFsbHkgdGhlIG9mZnNldCBvZiB0aGUgdG9wIG9mIHRoZSBlbGVtZW50IGZyb20gdGhlIGNlbnRlciBvZiB0aGUgc2NyZWVuLlxuXHRcdCAqICAgICAgICBBIHZhbHVlIG9mIDAgaXMgaWdub3JlZC5cblx0XHQgKiBAcGFyYW0ge29uRG9uZX0gQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBvbmNlIHRoZSBzY3JvbGwgZmluaXNoZWQuXG5cdFx0ICovXG5cdFx0dmFyIHNjcm9sbFRvQ2VudGVyT2YgPSBmdW5jdGlvbiAoZWxlbSwgZHVyYXRpb24sIG9mZnNldCwgb25Eb25lKSB7XG5cdFx0XHRzY3JvbGxUb1koTWF0aC5tYXgoMCwgY29udGFpbmVyLmdldFRvcE9mKGVsZW0pIC0gY29udGFpbmVyLmdldEhlaWdodCgpLzIgKyAob2Zmc2V0IHx8IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0LzIpKSwgZHVyYXRpb24sIG9uRG9uZSlcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBDaGFuZ2VzIGRlZmF1bHQgc2V0dGluZ3MgZm9yIHRoaXMgc2Nyb2xsZXIuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge25ld0RlZmF1bHREdXJhdGlvbn0gT3B0aW9uYWxseSBhIG5ldyB2YWx1ZSBmb3IgZGVmYXVsdCBkdXJhdGlvbiwgdXNlZCBmb3IgZWFjaCBzY3JvbGwgbWV0aG9kIGJ5IGRlZmF1bHQuXG5cdFx0ICogICAgICAgIElnbm9yZWQgaWYgbnVsbCBvciB1bmRlZmluZWQuXG5cdFx0ICogQHBhcmFtIHtuZXdFZGdlT2Zmc2V0fSBPcHRpb25hbGx5IGEgbmV3IHZhbHVlIGZvciB0aGUgZWRnZSBvZmZzZXQsIHVzZWQgYnkgZWFjaCBzY3JvbGwgbWV0aG9kIGJ5IGRlZmF1bHQuIElnbm9yZWQgaWYgbnVsbCBvciB1bmRlZmluZWQuXG5cdFx0ICogQHJldHVybnMgQW4gb2JqZWN0IHdpdGggdGhlIGN1cnJlbnQgdmFsdWVzLlxuXHRcdCAqL1xuXHRcdHZhciBzZXR1cCA9IGZ1bmN0aW9uIChuZXdEZWZhdWx0RHVyYXRpb24sIG5ld0VkZ2VPZmZzZXQpIHtcblx0XHRcdGlmIChuZXdEZWZhdWx0RHVyYXRpb24gPT09IDAgfHwgbmV3RGVmYXVsdER1cmF0aW9uKSB7XG5cdFx0XHRcdGRlZmF1bHREdXJhdGlvbiA9IG5ld0RlZmF1bHREdXJhdGlvblxuXHRcdFx0fVxuXHRcdFx0aWYgKG5ld0VkZ2VPZmZzZXQgPT09IDAgfHwgbmV3RWRnZU9mZnNldCkge1xuXHRcdFx0XHRlZGdlT2Zmc2V0ID0gbmV3RWRnZU9mZnNldFxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGVmYXVsdER1cmF0aW9uOiBkZWZhdWx0RHVyYXRpb24sXG5cdFx0XHRcdGVkZ2VPZmZzZXQ6IGVkZ2VPZmZzZXRcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0c2V0dXA6IHNldHVwLFxuXHRcdFx0dG86IHNjcm9sbFRvRWxlbSxcblx0XHRcdHRvWTogc2Nyb2xsVG9ZLFxuXHRcdFx0aW50b1ZpZXc6IHNjcm9sbEludG9WaWV3LFxuXHRcdFx0Y2VudGVyOiBzY3JvbGxUb0NlbnRlck9mLFxuXHRcdFx0c3RvcDogc3RvcFNjcm9sbCxcblx0XHRcdG1vdmluZzogZnVuY3Rpb24gKCkgeyByZXR1cm4gISFzY3JvbGxUaW1lb3V0SWQgfSxcblx0XHRcdGdldFk6IGNvbnRhaW5lci5nZXRZLFxuXHRcdFx0Z2V0VG9wT2Y6IGNvbnRhaW5lci5nZXRUb3BPZlxuXHRcdH1cblxuXHR9XG5cblxuXHR2YXIgZG9jRWxlbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxuXHR2YXIgZ2V0RG9jWSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdy5zY3JvbGxZIHx8IGRvY0VsZW0uc2Nyb2xsVG9wIH1cblxuXHQvLyBDcmVhdGUgYSBzY3JvbGxlciBmb3IgdGhlIGRvY3VtZW50OlxuXHR2YXIgemVuc2Nyb2xsID0gbWFrZVNjcm9sbGVyKHtcblx0XHRib2R5OiBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50IHx8IGRvY3VtZW50LmJvZHksXG5cdFx0dG9ZOiBmdW5jdGlvbiAoeSkgeyB3aW5kb3cuc2Nyb2xsVG8oMCwgeSkgfSxcblx0XHRnZXRZOiBnZXREb2NZLFxuXHRcdGdldEhlaWdodDogZnVuY3Rpb24gKCkgeyByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY0VsZW0uY2xpZW50SGVpZ2h0IH0sXG5cdFx0Z2V0VG9wT2Y6IGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIGdldERvY1koKSAtIGRvY0VsZW0ub2Zmc2V0VG9wIH1cblx0fSlcblxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgc2Nyb2xsZXIgZnJvbSB0aGUgcHJvdmlkZWQgY29udGFpbmVyIGVsZW1lbnQgKGUuZy4sIGEgRElWKVxuXHQgKlxuXHQgKiBAcGFyYW0ge3Njcm9sbENvbnRhaW5lcn0gVGhlIHZlcnRpY2FsIHBvc2l0aW9uIHdpdGhpbiB0aGUgZG9jdW1lbnQuXG5cdCAqIEBwYXJhbSB7ZGVmYXVsdER1cmF0aW9ufSBPcHRpb25hbGx5IGEgdmFsdWUgZm9yIGRlZmF1bHQgZHVyYXRpb24sIHVzZWQgZm9yIGVhY2ggc2Nyb2xsIG1ldGhvZCBieSBkZWZhdWx0LlxuXHQgKiAgICAgICAgSWdub3JlZCBpZiAwIG9yIG51bGwgb3IgdW5kZWZpbmVkLlxuXHQgKiBAcGFyYW0ge2VkZ2VPZmZzZXR9IE9wdGlvbmFsbHkgYSB2YWx1ZSBmb3IgdGhlIGVkZ2Ugb2Zmc2V0LCB1c2VkIGJ5IGVhY2ggc2Nyb2xsIG1ldGhvZCBieSBkZWZhdWx0LiBcblx0ICogICAgICAgIElnbm9yZWQgaWYgbnVsbCBvciB1bmRlZmluZWQuXG5cdCAqIEByZXR1cm5zIEEgc2Nyb2xsZXIgb2JqZWN0LCBzaW1pbGFyIHRvIGB6ZW5zY3JvbGxgIGJ1dCBjb250cm9sbGluZyB0aGUgcHJvdmlkZWQgZWxlbWVudC5cblx0ICovXG5cdHplbnNjcm9sbC5jcmVhdGVTY3JvbGxlciA9IGZ1bmN0aW9uIChzY3JvbGxDb250YWluZXIsIGRlZmF1bHREdXJhdGlvbiwgZWRnZU9mZnNldCkge1xuXHRcdHJldHVybiBtYWtlU2Nyb2xsZXIoe1xuXHRcdFx0Ym9keTogc2Nyb2xsQ29udGFpbmVyLFxuXHRcdFx0dG9ZOiBmdW5jdGlvbiAoeSkgeyBzY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wID0geSB9LFxuXHRcdFx0Z2V0WTogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCB9LFxuXHRcdFx0Z2V0SGVpZ2h0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBNYXRoLm1pbihzY3JvbGxDb250YWluZXIuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jRWxlbS5jbGllbnRIZWlnaHQpIH0sXG5cdFx0XHRnZXRUb3BPZjogZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIGVsZW0ub2Zmc2V0VG9wIH1cblx0XHR9LCBkZWZhdWx0RHVyYXRpb24sIGVkZ2VPZmZzZXQpXG5cdH1cblxuXG5cdC8vIEF1dG9tYXRpYyBsaW5rLXNtb290aGluZyBvbiBhY2hvcnNcblx0Ly8gRXhjbHVkZSBJRTgtIG9yIHdoZW4gbmF0aXZlIGlzIGVuYWJsZWQgb3IgWmVuc2Nyb2xsIGF1dG8tIGlzIGRpc2FibGVkXG5cdGlmIChcImFkZEV2ZW50TGlzdGVuZXJcIiBpbiB3aW5kb3cgJiYgIXdpbmRvdy5ub1plbnNtb290aCAmJiAhaXNOYXRpdmVTbW9vdGhTY3JvbGxFbmFibGVkT24oZG9jdW1lbnQuYm9keSkpIHtcblxuXHRcdHZhciBpc0hpc3RvcnlTdXBwb3J0ZWQgPSBcImhpc3RvcnlcIiBpbiB3aW5kb3cgJiYgXCJwdXNoU3RhdGVcIiBpbiBoaXN0b3J5XG5cdFx0dmFyIGlzU2Nyb2xsUmVzdG9yYXRpb25TdXBwb3J0ZWQgPSBpc0hpc3RvcnlTdXBwb3J0ZWQgJiYgXCJzY3JvbGxSZXN0b3JhdGlvblwiIGluIGhpc3RvcnlcblxuXHRcdC8vIE9uIGZpcnN0IGxvYWQgJiByZWZyZXNoIG1ha2Ugc3VyZSB0aGUgYnJvd3NlciByZXN0b3JlcyB0aGUgcG9zaXRpb24gZmlyc3Rcblx0XHRpZiAoaXNTY3JvbGxSZXN0b3JhdGlvblN1cHBvcnRlZCkge1xuXHRcdFx0aGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9IFwiYXV0b1wiXG5cdFx0fVxuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0aWYgKGlzU2Nyb2xsUmVzdG9yYXRpb25TdXBwb3J0ZWQpIHtcblx0XHRcdFx0Ly8gU2V0IGl0IHRvIG1hbnVhbFxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9IFwibWFudWFsXCIgfSwgOSlcblx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdFx0XHRpZiAoZXZlbnQuc3RhdGUgJiYgXCJ6ZW5zY3JvbGxZXCIgaW4gZXZlbnQuc3RhdGUpIHtcblx0XHRcdFx0XHRcdHplbnNjcm9sbC50b1koZXZlbnQuc3RhdGUuemVuc2Nyb2xsWSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIGZhbHNlKVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgZWRnZSBvZmZzZXQgb24gZmlyc3QgbG9hZCBpZiBuZWNlc3Nhcnlcblx0XHRcdC8vIFRoaXMgbWF5IG5vdCB3b3JrIG9uIElFIChvciBvbGRlciBjb21wdXRlcj8pIGFzIGl0IHJlcXVpcmVzIG1vcmUgdGltZW91dCwgYXJvdW5kIDEwMCBtc1xuXHRcdFx0aWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoKSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdC8vIEFkanVzdG1lbnQgaXMgb25seSBuZWVkZWQgaWYgdGhlcmUgaXMgYW4gZWRnZSBvZmZzZXQ6XG5cdFx0XHRcdFx0dmFyIGVkZ2VPZmZzZXQgPSB6ZW5zY3JvbGwuc2V0dXAoKS5lZGdlT2Zmc2V0XG5cdFx0XHRcdFx0aWYgKGVkZ2VPZmZzZXQpIHtcblx0XHRcdFx0XHRcdHZhciB0YXJnZXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQod2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCIjXCIpWzFdKVxuXHRcdFx0XHRcdFx0aWYgKHRhcmdldEVsZW0pIHtcblx0XHRcdFx0XHRcdFx0dmFyIHRhcmdldFkgPSBNYXRoLm1heCgwLCB6ZW5zY3JvbGwuZ2V0VG9wT2YodGFyZ2V0RWxlbSkgLSBlZGdlT2Zmc2V0KVxuXHRcdFx0XHRcdFx0XHR2YXIgZGlmZiA9IHplbnNjcm9sbC5nZXRZKCkgLSB0YXJnZXRZXG5cdFx0XHRcdFx0XHRcdC8vIE9ubHkgZG8gdGhlIGFkanVzdG1lbnQgaWYgdGhlIGJyb3dzZXIgaXMgdmVyeSBjbG9zZSB0byB0aGUgZWxlbWVudDpcblx0XHRcdFx0XHRcdFx0aWYgKDAgPD0gZGlmZiAmJiBkaWZmIDwgOSApIHtcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgdGFyZ2V0WSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgOSlcblx0XHRcdH1cblxuXHRcdH0sIGZhbHNlKVxuXG5cdFx0Ly8gSGFuZGxpbmcgY2xpY2tzIG9uIGFuY2hvcnNcblx0XHR2YXIgUkVfbm9aZW5zbW9vdGggPSBuZXcgUmVnRXhwKFwiKF58XFxcXHMpbm9aZW5zbW9vdGgoXFxcXHN8JClcIilcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0dmFyIGFuY2hvciA9IGV2ZW50LnRhcmdldFxuXHRcdFx0d2hpbGUgKGFuY2hvciAmJiBhbmNob3IudGFnTmFtZSAhPT0gXCJBXCIpIHtcblx0XHRcdFx0YW5jaG9yID0gYW5jaG9yLnBhcmVudE5vZGVcblx0XHRcdH1cblx0XHRcdC8vIExldCB0aGUgYnJvd3NlciBoYW5kbGUgdGhlIGNsaWNrIGlmIGl0IHdhc24ndCB3aXRoIHRoZSBwcmltYXJ5IGJ1dHRvbiwgb3Igd2l0aCBzb21lIG1vZGlmaWVyIGtleXM6XG5cdFx0XHRpZiAoIWFuY2hvciB8fCBldmVudC53aGljaCAhPT0gMSB8fCBldmVudC5zaGlmdEtleSB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuYWx0S2V5KSB7XG5cdFx0XHRcdHJldHVyblxuXHRcdFx0fVxuXHRcdFx0Ly8gU2F2ZSB0aGUgY3VycmVudCBzY3JvbGxpbmcgcG9zaXRpb24gc28gaXQgY2FuIGJlIHVzZWQgZm9yIHNjcm9sbCByZXN0b3JhdGlvbjpcblx0XHRcdGlmIChpc1Njcm9sbFJlc3RvcmF0aW9uU3VwcG9ydGVkKSB7XG5cdFx0XHRcdHZhciBoaXN0b3J5U3RhdGUgPSBoaXN0b3J5LnN0YXRlICYmIHR5cGVvZiBoaXN0b3J5LnN0YXRlID09PSBcIm9iamVjdFwiID8gaGlzdG9yeS5zdGF0ZSA6IHt9XG5cdFx0XHRcdGhpc3RvcnlTdGF0ZS56ZW5zY3JvbGxZID0gemVuc2Nyb2xsLmdldFkoKVxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGhpc3RvcnkucmVwbGFjZVN0YXRlKGhpc3RvcnlTdGF0ZSwgXCJcIilcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdC8vIEF2b2lkIHRoZSBDaHJvbWUgU2VjdXJpdHkgZXhjZXB0aW9uIG9uIGZpbGUgcHJvdG9jb2wsIGUuZy4sIGZpbGU6Ly9pbmRleC5odG1sXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIEZpbmQgdGhlIHJlZmVyZW5jZWQgSUQ6XG5cdFx0XHR2YXIgaHJlZiA9IGFuY2hvci5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpIHx8IFwiXCJcblx0XHRcdGlmIChocmVmLmluZGV4T2YoXCIjXCIpID09PSAwICYmICFSRV9ub1plbnNtb290aC50ZXN0KGFuY2hvci5jbGFzc05hbWUpKSB7XG5cdFx0XHRcdHZhciB0YXJnZXRZID0gMFxuXHRcdFx0XHR2YXIgdGFyZ2V0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhyZWYuc3Vic3RyaW5nKDEpKVxuXHRcdFx0XHRpZiAoaHJlZiAhPT0gXCIjXCIpIHtcblx0XHRcdFx0XHRpZiAoIXRhcmdldEVsZW0pIHtcblx0XHRcdFx0XHRcdC8vIExldCB0aGUgYnJvd3NlciBoYW5kbGUgdGhlIGNsaWNrIGlmIHRoZSB0YXJnZXQgSUQgaXMgbm90IGZvdW5kLlxuXHRcdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRhcmdldFkgPSB6ZW5zY3JvbGwuZ2V0VG9wT2YodGFyZ2V0RWxlbSlcblx0XHRcdFx0fVxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdC8vIEJ5IGRlZmF1bHQgdHJpZ2dlciB0aGUgYnJvd3NlcidzIGBoYXNoY2hhbmdlYCBldmVudC4uLlxuXHRcdFx0XHR2YXIgb25Eb25lID0gZnVuY3Rpb24gKCkgeyB3aW5kb3cubG9jYXRpb24gPSBocmVmIH1cblx0XHRcdFx0Ly8gLi4udW5sZXNzIHRoZXJlIGlzIGFuIGVkZ2Ugb2Zmc2V0IHNwZWNpZmllZFxuXHRcdFx0XHR2YXIgZWRnZU9mZnNldCA9IHplbnNjcm9sbC5zZXR1cCgpLmVkZ2VPZmZzZXRcblx0XHRcdFx0aWYgKGVkZ2VPZmZzZXQpIHtcblx0XHRcdFx0XHR0YXJnZXRZID0gTWF0aC5tYXgoMCwgdGFyZ2V0WSAtIGVkZ2VPZmZzZXQpXG5cdFx0XHRcdFx0aWYgKGlzSGlzdG9yeVN1cHBvcnRlZCkge1xuXHRcdFx0XHRcdFx0b25Eb25lID0gZnVuY3Rpb24gKCkgeyBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgXCJcIiwgaHJlZikgfVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR6ZW5zY3JvbGwudG9ZKHRhcmdldFksIG51bGwsIG9uRG9uZSlcblx0XHRcdH1cblx0XHR9LCBmYWxzZSlcblxuXHR9XG5cblxuXHRyZXR1cm4gemVuc2Nyb2xsXG5cblxufSkpO1xuIiwiaW1wb3J0IHtndWlkZVJlYWN0c30gZnJvbSAnLi9hc2lkZS5qcyc7XHJcbmltcG9ydCB6ZW5zY3JvbGwgZnJvbSAnLi8uLi8uLi9ub2RlX21vZHVsZXMvemVuc2Nyb2xsL3plbnNjcm9sbC5qcydcclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVOZXh0U2VjdGlvbihpdGVyYXRvcil7XHJcbiAgICBsZXQgYWxsT3JuYW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLmNvcnB1c19zZWN0aW9uX2Zvcm1fb3JuYW1lbnQtbWFya2VyJyk7XHJcbiAgICBsZXQgdGhpc09ybmFtZW50ID0gYWxsT3JuYW1lbnRzW2l0ZXJhdG9yLTFdO1xyXG4gICAgbGV0IG5leHRPcm5hbWVudCA9IGFsbE9ybmFtZW50c1tpdGVyYXRvci0xXTtcclxuICAgIHRoaXNPcm5hbWVudC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2ljb25zL3BvbGUuMi5zdmdcIik7XHJcbiAgICB0aGlzT3JuYW1lbnQuY2xhc3NMaXN0LmFkZChcIml0SXNQYXNzZWRUaHJvdWdodFwiKTtcclxuICAgIG5leHRPcm5hbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaXRJc0hpZGRlblwiKTtcclxuICAgIC8vd2luZG93LnNjcm9sbFRvKDAsIG5leHRPcm5hbWVudC5vZmZzZXRUb3ApO1xyXG4gICAgemVuc2Nyb2xsLnRvWShuZXh0T3JuYW1lbnQub2Zmc2V0VG9wKTtcclxuICAgIGVuYWJsZU5leHRTZWN0aW9uKGl0ZXJhdG9yKTtcclxufVxyXG5mdW5jdGlvbiBlbmFibGVOZXh0U2VjdGlvbihpdGVyYXRvcil7XHJcbiAgICBsZXQgYWxsU2VjdGlvbnMgPSBbXHJcbiAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkcycpLFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkLUMnKSxcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHMtMicpIFxyXG4gICAgXTtcclxuICAgIGFsbFNlY3Rpb25zW2l0ZXJhdG9yXS5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJylcclxuICAgIGd1aWRlUmVhY3RzKGl0ZXJhdG9yKTtcclxufSIsIid1c2Ugc3RyaWN0J1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdGlhbGl6ZSlcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcbiAgbGV0IG9wdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX3NlbGVjdC1saXN0IG9wdGlvbidcclxuICApXHJcbiAgbGV0IGFtb3VudCA9IG9wdHMubGVuZ3RoXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xyXG4gICAgbGV0IGl0ZW0gPSBvcHRzW2ldXHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBzZXRJTUcoaSlcclxuICAgICAgZW5hYmxlU3RyaWtlTmFtZVBhcnQoKVxyXG4gICAgICBzZXRTdHJpa2VOYW1lVG9EZXMoaSlcclxuICAgICAgc2V0UGFydE9mQXR0YWNrRGVzY3JpcHRpb24oaSlcclxuICAgICAgc2V0Rm9yY2VEZXMoaSlcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbmxldCBvbmx5T25jZSA9IDBcclxuXHJcbmZ1bmN0aW9uIGVuYWJsZVN0cmlrZU5hbWVQYXJ0KCkge1xyXG4gIG9ubHlPbmNlKytcclxuICBpZiAob25seU9uY2UgPT09IDEpIHtcclxuICAgIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0cmlrZU5hbWUnKVxyXG4gICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzdHJpa2VOYW1lJylcclxuICB9XHJcbn1cclxuXHJcbmltcG9ydCB7Z3VpZGVSZWFjdHN9IGZyb20gJy4vYXNpZGUuanMnO1xyXG5mdW5jdGlvbiBzZXRQYXJ0T2ZBdHRhY2tEZXNjcmlwdGlvbihpKSB7XHJcbiAgbGV0IGRlc1BhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwIHNwYW4uLS1kZXNfZXBpdGV0JylcclxuICBkZXNQYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpXHJcbiAgbGV0IGFycmF5ID0gW1xyXG4gICAgJ2JydXRhbG5lJyxcclxuICAgICduaWVwcnpld2lkeXdhbG5lJyxcclxuICAgICd3ecSHd2ljem9uZScsXHJcbiAgICAnbmllemF3b2RuZScsXHJcbiAgICAncHJlY3l6eWpuZScsXHJcbiAgICAnem1hc293YW5lJyxcclxuICAgICdwb2RzdMSZcG5lJyxcclxuICAgICd3eXJhY2hvd2FuZScsXHJcbiAgICAnemRyYWR6aWVja2llJyxcclxuICAgICdzemFsZcWEY3plJyxcclxuICAgICdvcHJhY293YW5lIHcgbGFib3JhdG9yaXVtIGFsY2hlbWljem55bScsXHJcbiAgICAnbmllcG93c3RyenltYW5lJyxcclxuICAgICd3xYJhZGN6ZScsXHJcbiAgICAnbXJvY3puZScsXHJcbiAgICAndGFqZW1uZScsXHJcbiAgICAnd8WbY2lla8WCZScsXHJcbiAgICAnd3NwaWVyYW5lIG1vY8SFIG90Y2jFgmFuaScsXHJcbiAgICAncHJ6ZXN5Y29uZSB6xYLEhSBtb2PEhSdcclxuICBdXHJcbiAgZGVzUGFydC5pbm5lclRleHQgPSAnLCAnICsgYXJyYXlbaV1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0SU1HKGkpIHtcclxuICBsZXQgYmVsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdCdcclxuICApW2ldXHJcbiAgbGV0IGltYWcgPSBiZWx0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpWzBdXHJcbiAgbGV0IGF0dHJ5YiA9IGltYWcuZ2V0QXR0cmlidXRlKCdzcmMnKVxyXG4gIGxldCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tcGxhdGVfaW1nX2ljb24nKVxyXG4gIGljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBhdHRyeWIpXHJcbiAgbGV0IGFsbElNR3MgPSBiZWx0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpLmxlbmd0aFxyXG4gIGxldCBzdGFuZGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLXN0YW5kYXJ0X2ltZ19iY2tnJylcclxuICB3aGlsZSAoc3RhbmRhcnQucXVlcnlTZWxlY3RvcignSU1HJykgIT09IG51bGwpIHtcclxuICAgIGxldCBpbWFnZVRvRGVsID0gc3RhbmRhcnQucXVlcnlTZWxlY3RvcignSU1HJylcclxuICAgIHN0YW5kYXJ0LnJlbW92ZUNoaWxkKGltYWdlVG9EZWwpXHJcbiAgfVxyXG4gIGZvciAobGV0IGogPSAwOyBqIDwgYWxsSU1HczsgaisrKSB7XHJcbiAgICBpZiAoaiA+IDApIHtcclxuICAgICAgbGV0IHRoZUlNRyA9IGJlbHQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylbal1cclxuICAgICAgbGV0IHNvdXJjZUlNRyA9IHRoZUlNRy5nZXRBdHRyaWJ1dGUoJ3NyYycpXHJcbiAgICAgIGxldCBuZXdJTUcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICBuZXdJTUcuc2V0QXR0cmlidXRlKCdzcmMnLCBzb3VyY2VJTUcpXHJcbiAgICAgIHN0YW5kYXJ0LmFwcGVuZENoaWxkKG5ld0lNRylcclxuICAgIH1cclxuICB9XHJcbn1cclxubGV0IHNldE5leHRQYXJ0T2ZGb3JtdWxhRm9yVGhlRmlyc3RUaW1lPTA7XHJcbmZ1bmN0aW9uIHNldFN0cmlrZU5hbWVUb0RlcyhpKSB7XHJcbiAgbGV0IGlucCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJuYXp3YXVkZXJ6ZW5pYVwiXScpXHJcbiAgaW5wLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHN0ck5hbWUgPSBpbnAudmFsdWU7XHJcbiAgICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19uYXp3YS1jaW9zdScpO1xyXG4gICAgaXRlbS5pbm5lclRleHQgPSBzdHJOYW1lICsgJyB0byBsZWdlbmRhcm5lJztcclxuICAgIHNob3dBbGxEZXMoKTtcclxuICB9KVxyXG4gIGlucC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgaXRtID0gaW5wLnZhbHVlXHJcbiAgICBpZiAoaXRtLnRyaW0oKSAhPT0gJycmJnNldE5leHRQYXJ0T2ZGb3JtdWxhRm9yVGhlRmlyc3RUaW1lPT09MCkge1xyXG4gICAgICBsZXQgc3RyTmFtZSA9IGlucC52YWx1ZVxyXG4gICAgICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19uYXp3YS1jaW9zdScpXHJcbiAgICAgIGl0ZW0uaW5uZXJUZXh0ID0gc3RyTmFtZSArICcgdG8gbGVnZW5kYXJuZSdcclxuICAgICAgc2hvd0FsbERlcygpO1xyXG4gICAgICBzZXROZXh0UGFydE9mRm9ybXVsYSgpO1xyXG4gICAgICBzZXROZXh0UGFydE9mRm9ybXVsYUZvclRoZUZpcnN0VGltZT0xO1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEZvcmNlRGVzKGkpIHtcclxuICBsZXQgYmVsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdCdcclxuICApW2ldO1xyXG4gIGxldCBJTUdzID0gYmVsdC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVxyXG4gIGxldCBpdGVyID0gSU1Hcy5sZW5ndGhcclxuICBsZXQgc3RybmcgPSBbXVxyXG4gIGZvciAobGV0IGogPSAwOyBqIDwgaXRlcjsgaisrKSB7XHJcbiAgICBsZXQgSU1HID0gSU1Hc1tqXVxyXG4gICAgbGV0IGF0dHJ5YiA9IElNRy5nZXRBdHRyaWJ1dGUoJ3NyYycpXHJcbiAgICBpZiAoaiAhPT0gMCkge1xyXG4gICAgICBpZiAoYXR0cnliID09PSAnaWNvbnMvYnJvbi1iYXJiYS5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnZG9kYXRrb3fEhSBtb2PEhSB1ZGVyemVuaW93xIUnKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL2Jyb24tY3phci5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnZG9kYXRrb3fEhSBtb2PEhSBjemFybm9rc2nEmXNrxIUnKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL2Jyb24tc3Ryei5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnZG9kYXRrb3d5bSBrdW5zenRlbSBzdHJ6ZWxlY2tpbScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvYnJvbi1zemFsLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCdkb2RhdGtvd3ltIHN6YWxlxYRzdHdlbScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvYnJvbi16ZHJhLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCduaWVzcG9kemlhbnltIHpkcmFkbGl3eW0gY2lvc2VtJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy96eXctb2dpZW4uc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ8W8eXdpb8WCZW0gb2duaWEnKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL3p5dy1yb3prbGFkLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCfFvHl3aW/FgmVtIHJvemvFgmFkdScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvenl3LXdvZC5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnxbx5d2lvxYJlbSB3b2R5JylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy96eXctem1pYW5hLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCfFvHl3aW/FgmVtIHptaWFueScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvenl3LXp5d2lhLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCfFvHl3aW/FgmVtIMW8eXdpaScpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnd8WCYXNuxIUgbcSFZHJvxZtjacSFIMW8eXdpb8WCw7N3IGkgdGFsZW50w7N3JylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBsZXQgc3RyaW5nVG9TZXQgPSBzdHJuZy5qb2luKCcsICcpO1xyXG4gIGxldCB6eXdEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfenl3aW9sJyk7XHJcbiAgbGV0IGltaURlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19pbWllJyk7XHJcbiAgbGV0IHByekRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19wcnp5ZG9tZWsnKTtcclxuICBsZXQgemRhRGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3pkYW5pZScpO1xyXG4gIHp5d0Rlcy5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKTtcclxuICBpbWlEZXMuY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJyk7XHJcbiAgcHJ6RGVzLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpO1xyXG4gIHpkYURlcy5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKTtcclxuICB6eXdEZXMuaW5uZXJUZXh0ID0gc3RyaW5nVG9TZXQgKyAnLic7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldE5hbWVUb0RlcygpIHtcclxuICBsZXQgaW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImltaWVcIl0nKVxyXG4gIGxldCBuYW0gPSBpbnAudmFsdWVcclxuICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19pbWllJylcclxuICBpdGVtLmlubmVyVGV4dCA9IG5hbSArICcgJztcclxuICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldE5pY2tuYW1lVG9EZXMoKSB7XHJcbiAgbGV0IGlucEIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJ6eWRvbWVrXCJdJylcclxuICBsZXQgc3VybmFtID0gaW5wQi52YWx1ZVxyXG4gIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3Byenlkb21laycpXHJcbiAgaXRlbS5pbm5lclRleHQgPSBzdXJuYW07XHJcbiAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTZW50ZW5jZVRvRGVzKCkge1xyXG4gIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3pkYW5pZScpXHJcbiAgaXRlbS5pbm5lclRleHQgPSAnIHd6bWFjbmlhIHN3w7NqIGF0YWsgJ1xyXG4gIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJylcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0FsbERlcygpIHtcclxuICBsZXQgYWxsRGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzJylcclxuICBhbGxEZXMuY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJylcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0TmV4dFBhcnRPZkZvcm11bGEoKSB7XHJcbiAgbGV0IHRleHRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm5hendhdWRlcnplbmlhXCJdJyk7XHJcbiAgbGV0IGFyZWFWYWx1ZSA9ICh0ZXh0QXJlYS52YWx1ZSkudHJpbSgpO1xyXG4gIGlmIChhcmVhVmFsdWUgIT09ICcnKSB7XHJcbiAgICBlbmFibGVOZXh0UGFydE9mRm9ybSgpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZW5hYmxlTmV4dFBhcnRPZkZvcm0oKSB7XHJcbiAgbGV0IG5leHRQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGQtQycpO1xyXG4gIG5leHRQYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2l0SXNIaWRkZW4nKTtcclxuICBsZXQgYWxsT3JuYW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLmNvcnB1c19zZWN0aW9uX2Zvcm1fb3JuYW1lbnQtbWFya2VyJyk7XHJcbiAgbGV0IHRoaXNPcm5hbWVudCA9IGFsbE9ybmFtZW50c1sxXTtcclxuICB0aGlzT3JuYW1lbnQuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pY29ucy9wb2xlLjIuc3ZnJyk7XHJcbiAgdGhpc09ybmFtZW50LmNsYXNzTGlzdC5hZGQoJ2l0SXNQYXNzZWRUaHJvdWdodCcpO1xyXG4gIGxldCBuZXh0T3JuYW1lbnQgPSBhbGxPcm5hbWVudHNbMl07XHJcbiAgbmV4dE9ybmFtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2l0SXNIaWRkZW4nKTtcclxuICB0aGlzT3JuYW1lbnQuc3R5bGUuYm94U2l6ZT1cImJvcmRlci1ib3hcIjtcclxuICB0aGlzT3JuYW1lbnQuc3R5bGUuekluZGV4PVwiMVwiO1xyXG4gIG5leHRQYXJ0LnN0eWxlLnpJbmRleD1cIjJcIjtcclxuICBndWlkZVJlYWN0cyg0KTtcclxufSIsImltcG9ydCB7XHJcbiAgICBpbml0aWFsaXplTmV4dFNlY3Rpb25cclxufSBmcm9tICcuL2Zvcm1faW5pdGlhbGl6ZU5leHRTZWN0aW9uLmpzJztcclxuaW1wb3J0IHtcclxuICAgIHNldE5hbWVUb0Rlc1xyXG59IGZyb20gXCIuL2F0YWtpLXNldC10eHQuanNcIjtcclxuaW1wb3J0IHtcclxuICAgIHNldE5pY2tuYW1lVG9EZXNcclxufSBmcm9tIFwiLi9hdGFraS1zZXQtdHh0LmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgICBzZXRTZW50ZW5jZVRvRGVzXHJcbn0gZnJvbSBcIi4vYXRha2ktc2V0LXR4dC5qc1wiO1xyXG4ndXNlIHN0cmljdCc7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpbml0VXNlckZsb3dWaWFTZWN0aW9uX3NlbGVjdE5vZGVzVG9UaGlzUHJvY2VzcygpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGluaXRVc2VyRmxvd1ZpYVNlY3Rpb25fc2VsZWN0Tm9kZXNUb1RoaXNQcm9jZXNzKCkge1xyXG4gICAgbGV0IG5vZGVzID0gW1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJpbWllXCJdJyksXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByenlkb21la1wiXScpLFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJ6YXdvbGFuaWVcIl0nKVxyXG4gICAgXTtcclxuICAgIG5vZGVzLmZvckVhY2goKG5vZGUsIGlkeCkgPT4gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGxldCBzZWN0aW9uQ29tcGxldGVkID0gaW5pdFVzZXJGbG93VG9OZXh0U2VjdGlvbl9jaGVja0lmVGhpc1NlY3Rpb25Jc0NvbXBsZXRlZChub2Rlcyk7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzICYmIHNlY3Rpb25Db21wbGV0ZWQgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgaW5pdFVzZXJGbG93VmlhU2VjdGlvbl9nb1RvTmV4dE5vZGUobm9kZSwgaWR4LCBub2Rlcyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAxMyAmJiBzZWN0aW9uQ29tcGxldGVkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIG5vZGUuYmx1cigpO1xyXG4gICAgICAgICAgICBpbml0VXNlckZsb3dUb05leHRTZWN0aW9uX3Nob3dCdG5PZkFjY2VwdGFuY2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9KSk7XHJcbiAgICBub2Rlcy5mb3JFYWNoKChub2RlLCBpZHgpID0+IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHNlY3Rpb25Db21wbGV0ZWQgPSBpbml0VXNlckZsb3dUb05leHRTZWN0aW9uX2NoZWNrSWZUaGlzU2VjdGlvbklzQ29tcGxldGVkKG5vZGVzKTtcclxuICAgICAgICBpZiAoc2VjdGlvbkNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBpbml0VXNlckZsb3dUb05leHRTZWN0aW9uX3Nob3dCdG5PZkFjY2VwdGFuY2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRVc2VyRmxvd1ZpYVNlY3Rpb25fZ29Ub05leHROb2RlKG5vZGUsIGlkeCwgbm9kZXMpIHtcclxuICAgIG5vZGUuYmx1cigpO1xyXG4gICAgaWYgKGlkeCA8IDIpIHtcclxuICAgICAgICBub2Rlc1tpZHggKyAxXS5mb2N1cygpO1xyXG4gICAgfSBlbHNlIGlmIChpZHggPT09IDIpIHtcclxuICAgICAgICBub2Rlc1swXS5mb2N1cygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0VXNlckZsb3dUb05leHRTZWN0aW9uX2NoZWNrSWZUaGlzU2VjdGlvbklzQ29tcGxldGVkKG5vZGVzKSB7XHJcbiAgICBsZXQgYXJyID0gW2ZhbHNlLCBmYWxzZSwgZmFsc2VdO1xyXG4gICAgbm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSwgaWR4KSB7XHJcbiAgICAgICAgaWYgKG5vZGUudmFsdWUudHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGFycltpZHhdID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYXJyW2lkeF0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKGFyci5pbmRleE9mKGZhbHNlKSA9PT0gLTEpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0VXNlckZsb3dUb05leHRTZWN0aW9uX3Nob3dCdG5PZkFjY2VwdGFuY2UoKSB7XHJcbiAgICBsZXQgYWNjZXB0YXRpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZC1BX2J0bi1iZWx0X2J0bi1wb3NpdGlvbmVyLmZpcnN0U2VjdGlvbkJ0bicpO1xyXG4gICAgYWNjZXB0YXRpb25CdG4uY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0hpZGRlbicpO1xyXG4gICAgYWNjZXB0YXRpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2V0Q3VycmVudERhdGFUb0F2YXRhckRlc2NyaXB0aW9uKCk7XHJcbiAgICAgICAgaW5pdGlhbGl6ZU5leHRTZWN0aW9uKDEpO1xyXG4gICAgICAgIC8vaW5pdGlhbGl6ZU5leHRHdWlkZVRleHQoMSk7XHJcbiAgICAgICAgLy90aGlzSXNDbGlja2VkKGFjY2VwdGF0aW9uQnRuKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEN1cnJlbnREYXRhVG9BdmF0YXJEZXNjcmlwdGlvbigpIHtcclxuICAgIHNldE5hbWVUb0RlcygpO1xyXG4gICAgc2V0Tmlja25hbWVUb0RlcygpO1xyXG4gICAgc2V0U2VudGVuY2VUb0RlcygpO1xyXG59IiwiaW1wb3J0IGl0ZXJhdG9yT2ZQb2ludHNMZWZ0IGZyb20gJy4vYXNpZGUuanMnO1xyXG5pbXBvcnQge2d1aWRlUmVhY3RzfSBmcm9tICcuL2FzaWRlLmpzJztcclxuJ3VzZSBzdHJpY3QnO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY2hvb3NlWW91ckF2YXRhcilcclxuZnVuY3Rpb24gY2hvb3NlWW91ckF2YXRhciAoKSB7XHJcbiAgbGV0IGNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcicpXHJcbiAgbGV0IGF2YXRhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfcmFkaW8tbGFiLWNvbnRhaW5lcicpXHJcbiAgbGV0IGFtb3VudCA9IGF2YXRhcnMubGVuZ3RoXHJcbiAgZm9yIChsZXQgaSA9IDA7aSA8IGFtb3VudDtpKyspIHtcclxuICAgIGxldCBpdGVtID0gYXZhdGFyc1tpXVxyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgY2hvb3NlVGhpc0F2YXRhcihpdGVtLCBhdmF0YXJzLCBhbW91bnQpXHJcbiAgICAgIHNldE9uZVBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uKGkpXHJcbiAgICAgIHN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0cyhjb250YWluZXJzKVxyXG4gICAgICBlbmFibGVBdHRhY2tzKGkpXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBjaG9vc2VUaGlzQXZhdGFyIChpdGVtLCBhdmF0YXJzLCBhbW91bnQpIHtcclxuICBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuY2hlY2tlZCA9IHRydWU7XHJcbiAgZm9yIChsZXQgaT0wOyBpPGFtb3VudDsgaSsrKXtcclxuICAgICAgbGV0IGF2ID0gYXZhdGFyc1tpXTtcclxuICAgICAgYXYuY2xhc3NMaXN0LnJlbW92ZSgnaXNDbGlja2VkJyk7XHJcbiAgfVxyXG4gIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXNDbGlja2VkJyk7XHJcbiAgaXRlcmF0b3JPZlBvaW50c0xlZnQuZGVsZXRhdG9yKCk7XHJcbiAgZ3VpZGVSZWFjdHMoMik7XHJcbn1cclxuZnVuY3Rpb24gc2V0T25lUGFydE9mQXR0YWNrRGVzY3JpcHRpb24gKGkpIHtcclxuICBsZXQgZGVzUGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Agc3Bhbi4tLWRlc19rbGFzYScpXHJcbiAgbGV0IGFycmF5ID0gW1xyXG4gICAgJyB1ZGVyemVuaWUgYnJvbmnEhSBicnV0YWxuxIUuJyxcclxuICAgICcgdWRlcnplbmllIGJyb25pxIUgc3RyemVsZWNrxIUuJyxcclxuICAgICcgdWRlcnplbmllIGJyb25pxIUgemRyYWR6aWVja8SFLicsXHJcbiAgICAnIHVkZXJ6ZW5pZSBicm9uacSFIHN6YWxlxYRjesSFLicsXHJcbiAgICAnIHVkZXJ6ZW5pZSBicm9uacSFIHN6YXJsYXRhxYRza8SFLicsXHJcbiAgICAnIHVkZXJ6ZW5pZSBicm9uacSFIGx1YiBjenlta29sd2llaywgY28gd3BhZG5pZSBrYXLFgm93aSB3IMWCYXBza2EuJ1xyXG4gIF1cclxuICBkZXNQYXJ0LmlubmVyVGV4dCA9IGFycmF5W2ldXHJcbiAgbGV0IG5leHREZXNQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncCBzcGFuLi0tZGVzX2VwaXRldCcpO1xyXG4gIG5leHREZXNQYXJ0LmNsYXNzTGlzdC5hZGQoJ2l0c0hpZGRlbicpO1xyXG4gIGxldCBhbm90aGVyTmV4dERlc1BhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfenl3aW9sJyk7XHJcbiAgYW5vdGhlck5leHREZXNQYXJ0LmNsYXNzTGlzdC5hZGQoJ2l0c0hpZGRlbicpO1xyXG4gIGxldCBvdGhlckFub3RoZXJOZXh0RGVzUGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19pbWllJyk7XHJcbiAgb3RoZXJBbm90aGVyTmV4dERlc1BhcnQuY2xhc3NMaXN0LmFkZCgnaXRzSGlkZGVuJyk7XHJcbiAgbGV0IHByekRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19wcnp5ZG9tZWsnKTtcclxuICBsZXQgemRhRGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3pkYW5pZScpO1xyXG4gIHByekRlcy5jbGFzc0xpc3QuYWRkKCdpdHNIaWRkZW4nKTtcclxuICB6ZGFEZXMuY2xhc3NMaXN0LmFkZCgnaXRzSGlkZGVuJyk7XHJcbn1cclxuZnVuY3Rpb24gc3luY2hyb25pemVCYWNrZ3JvdW5kc09mT3RoZXJPcHRzIChjb250YWluZXJzKSB7XHJcbiAgbGV0IGFtb3VudCA9IGNvbnRhaW5lcnMubGVuZ3RoXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xyXG4gICAgbGV0IGNvbnQgPSBjb250YWluZXJzW2ldXHJcbiAgICBsZXQgb3B0aW9ucyA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJylcclxuICAgIGxldCBpdGVyID0gb3B0aW9ucy5sZW5ndGhcclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlcjsgeCsrKSB7XHJcbiAgICAgIGxldCBiZWx0ID0gY29udC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0JylbeF1cclxuICAgICAgYmVsdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5oZXJpdCdcclxuICAgIH1cclxuICB9XHJcbn1cclxuZnVuY3Rpb24gZW5hYmxlQXR0YWNrcyAoaSkge1xyXG4gIGxldCBlbmFibGVkQXR0YWNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyJylcclxuICBmb3IgKGxldCB4ID0gMDsgeCA8IDY7IHgrKykge1xyXG4gICAgbGV0IGRpc2FibGVkSXRlbSA9IGVuYWJsZWRBdHRhY2tzW3hdXHJcbiAgICBkaXNhYmxlZEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnZW5hYmxlZCcpXHJcbiAgICBsZXQgb3B0cyA9IGRpc2FibGVkSXRlbS5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKVxyXG4gICAgbGV0IGFtb3VudCA9IG9wdHMubGVuZ3RoXHJcbiAgICBmb3IgKGxldCBqID0gMDtqIDwgYW1vdW50O2orKykge1xyXG4gICAgICBpZiAob3B0c1tqXS5zZWxlY3RlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIG9wdHNbal0uc2VsZWN0ZWQgPSBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCBlbmFibGVkQXR0YWNrID0gZW5hYmxlZEF0dGFja3NbaV1cclxuICBlbmFibGVkQXR0YWNrLmNsYXNzTGlzdC5hZGQoJ2VuYWJsZWQnKVxyXG59XHJcbiIsImltcG9ydCBpdGVyYXRvck9mUG9pbnRzTGVmdCBmcm9tICcuL2FzaWRlLmpzJ1xyXG5pbXBvcnQgeyBndWlkZVJlYWN0cyB9IGZyb20gJy4vYXNpZGUuanMnXHJcbid1c2Ugc3RyaWN0J1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdGlhbGl6ZUF0dGFja3NQYXJ0KVxyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZUF0dGFja3NQYXJ0ICgpIHtcclxuICBsZXQgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyJylcclxuICBsZXQgYW1vdW50ID0gY29udGFpbmVycy5sZW5ndGhcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XHJcbiAgICBsZXQgY29udCA9IGNvbnRhaW5lcnNbaV1cclxuICAgIGxldCBvcHRpb25zID0gY29udC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKVxyXG4gICAgbGV0IGl0ZXIgPSBvcHRpb25zLmxlbmd0aFxyXG4gICAgZm9yIChsZXQgeCA9IDA7eCA8IGl0ZXI7eCsrKSB7XHJcbiAgICAgIGxldCBvcHQgPSBvcHRpb25zW3hdXHJcbiAgICAgIG9wdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIG9uTU91dClcclxuICAgICAgb3B0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBvbk1FbnRlcilcclxuICAgICAgZnVuY3Rpb24gb25NRW50ZXIgKCkge1xyXG4gICAgICAgIGlmIChvcHQuc2VsZWN0ZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICBzeW5jaHJvbml6ZVRoaXNCY2tncldpdGhJbWFnZUJlbHRIb3ZlckJja2dyKG9wdCwgY29udCwgeCwgdHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZnVuY3Rpb24gb25NT3V0ICgpIHtcclxuICAgICAgICBpZiAob3B0LnNlbGVjdGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgc3luY2hyb25pemVUaGlzQmNrZ3JXaXRoSW1hZ2VCZWx0SG92ZXJCY2tncihvcHQsIGNvbnQsIHgsIGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IHNlbGVjdExpc3QgPSBjb250LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpXHJcbiAgICBzZWxlY3RMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgZm9yIChsZXQgcSA9IDA7IHEgPCBpdGVyO3ErKykge1xyXG4gICAgICAgIGxldCBvcHQgPSBvcHRpb25zW3FdXHJcbiAgICAgICAgaWYgKG9wdC52YWx1ZSA9PT0gc2VsZWN0TGlzdC52YWx1ZSkge1xyXG4gICAgICAgICAgaXRlcmF0b3JPZlBvaW50c0xlZnQuaXRlcmF0b3IoY29udCwgcSlcclxuICAgICAgICAgIGd1aWRlUmVhY3RzKDMpXHJcbiAgICAgICAgICBzeW5jaHJvbml6ZUJhY2tncm91bmRzT2ZPdGhlck9wdG5zKGNvbnQsIGl0ZXIpXHJcbiAgICAgICAgICBzeW5jaHJvbml6ZVRoaXNCY2tncldpdGhJbWFnZUJlbHRIb3ZlckJja2dyKG9wdCwgY29udCwgcSwgdHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIHN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0bnMgKGNvbnQsIGl0ZXIpIHtcclxuICBmb3IgKGxldCB4ID0gMDsgeCA8IGl0ZXI7IHgrKykge1xyXG4gICAgbGV0IGJlbHQgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnKVt4XVxyXG4gICAgYmVsdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5oZXJpdCdcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN5bmNocm9uaXplVGhpc0Jja2dyV2l0aEltYWdlQmVsdEhvdmVyQmNrZ3IgKG9wdCwgY29udCwgeCwgaXNFbnRlcikge1xyXG4gIGxldCBiZWx0ID0gY29udC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0JylbeF1cclxuICBpZiAoaXNFbnRlciA9PT0gdHJ1ZSkge1xyXG4gICAgbGV0IHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUob3B0KVxyXG4gICAgbGV0IGJjZ0NvbCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tncm91bmQtY29sb3InKVxyXG4gICAgYmVsdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBiY2dDb2xcclxuICB9IGVsc2UgaWYgKGlzRW50ZXIgPT09IGZhbHNlKSB7XHJcbiAgICBiZWx0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdpbmhlcml0J1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgaXRlcmF0b3JPZlBvaW50c0xlZnQgZnJvbSAnLi9hc2lkZS5qcyc7XHJcbid1c2Ugc3RyaWN0JztcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXQpO1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGxldCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzLTJfZmllbGRzZXQtZF9jb250YWluZXJfYXRyeWIgLi0tYmVsdF9pY29uLWNvbnRhaW5lcicpO1xyXG4gICAgbGV0IGJlbHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzLTJfZmllbGRzZXQtZF9jb250YWluZXJfYXRyeWIgLi0tYmVsdF9ib2R5LWNvbnRhaW5lcl9ib2R5Jyk7XHJcbiAgICBsZXQgaXRlciA9IGJ0bnMubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVyOyBpKyspIHtcclxuICAgICAgICBpZiAoaSA+IC0xKSB7XHJcbiAgICAgICAgICAgIGxldCBhdHRyeWIgPSBidG5zW2ldO1xyXG4gICAgICAgICAgICBsZXQgYmVsdCA9IGJlbHRzW2ldO1xyXG4gICAgICAgICAgICBhdHRyeWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3JPZlBvaW50c0xlZnQubGVmdCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRQb2ludChiZWx0KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvaW50KGJlbHQpIHtcclxuICAgIGxldCBJTUcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJTUcnKTtcclxuICAgIElNRy5zZXRBdHRyaWJ1dGUoJ3NyYycsICdpY29ucy9pa29uYS1wb3RlZy5zdmcnKTtcclxuICAgIGJlbHQuYXBwZW5kQ2hpbGQoSU1HKTtcclxuICAgIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0LmxlZnQtLTtcclxuICAgIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0LmVxdWFsaXphdG9yKCk7XHJcbiAgICBJTUcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZGVsZXRlVGhpc0lNRyhJTUcpXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVUaGlzSU1HKHgpIHtcclxuICAgIHgucmVtb3ZlKCk7XHJcbiAgICBpdGVyYXRvck9mUG9pbnRzTGVmdC5sZWZ0Kys7XHJcbiAgICBpdGVyYXRvck9mUG9pbnRzTGVmdC5lcXVhbGl6YXRvcigpO1xyXG59IiwiaW1wb3J0IHtndWlkZVJlYWN0c30gZnJvbSAnLi9hc2lkZS5qcyc7XHJcblwidXNlIHN0cmljdFwiO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0aWFsaXplVGhpc1NlY3Rpb24pO1xyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZVRoaXNTZWN0aW9uKCkge1xyXG4gICAgbGV0IGxpc3RBID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc2V0LWMgI3phc2xvbmFcIlxyXG4gICAgKTtcclxuICAgIGxldCBsaXN0QiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNldC1jICNwYW5jZXJ6XCJcclxuICAgICk7XHJcbiAgICBsZXQgaW1hZ2VzQSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNldC1jX2ltZ3NfaW1nLmFcIlxyXG4gICAgKTtcclxuICAgIGxldCBpbWFnZXNCID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICBcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc2V0LWNfaW1nc19pbWcuYlwiXHJcbiAgICApO1xyXG4gICAgbGV0IG9wdHNBID0gbGlzdEEucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvblwiKTtcclxuICAgIGxldCBvcHRzQiA9IGxpc3RCLnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb25cIik7XHJcbiAgICBkeW5hbWl6ZVRoaXNMaXN0KGxpc3RBLCBvcHRzQSwgaW1hZ2VzQSwgbGlzdEIpO1xyXG4gICAgZHluYW1pemVUaGlzTGlzdChsaXN0Qiwgb3B0c0IsIGltYWdlc0IsIGxpc3RBKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHluYW1pemVUaGlzTGlzdChsaXN0LCBvcHRzLCBpbWFnZXMsIG90aGVyTGlzdCkge1xyXG4gICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBsaXN0LnZhbHVlO1xyXG4gICAgICAgIGxldCBpdGVyID0gb3B0cy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpdGVyIC0gMTsgaisrKSB7XHJcbiAgICAgICAgICAgIGltYWdlc1tqXS5jbGFzc0xpc3QuYWRkKFwiaXRJc1Vuc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBvcHQgPSBvcHRzW2ldO1xyXG4gICAgICAgICAgICBsZXQgb3B0VmFsdWUgPSBvcHQudmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gb3B0VmFsdWUgJiYgaSAhPT0gMykge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJpdElzVW5zZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbmFibGVOZXh0Rm9ybVBhcnQobGlzdCwgb3RoZXJMaXN0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlbmFibGVOZXh0Rm9ybVBhcnQobGlzdCwgb3RoZXJMaXN0KSB7XHJcbiAgICBsZXQgYSA9IGxpc3QudmFsdWU7XHJcbiAgICBsZXQgYiA9IG90aGVyTGlzdC52YWx1ZTtcclxuICAgIGlmIChhICE9PSBcIlwiICYmIGIgIT09IFwiXCIpIHtcclxuICAgICAgICBsZXQgbmV4dFBhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHMtMicpO1xyXG4gICAgICAgIG5leHRQYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2l0SXNIaWRkZW4nKTtcclxuICAgICAgICBsZXQgYWxsT3JuYW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLmNvcnB1c19zZWN0aW9uX2Zvcm1fb3JuYW1lbnQtbWFya2VyJyk7XHJcbiAgICAgICAgbGV0IHRoaXNPcm5hbWVudCA9IGFsbE9ybmFtZW50c1syXTtcclxuICAgICAgICB0aGlzT3JuYW1lbnQuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pY29ucy9wb2xlLjIuc3ZnJyk7XHJcbiAgICAgICAgdGhpc09ybmFtZW50LmNsYXNzTGlzdC5hZGQoJ2l0SXNQYXNzZWRUaHJvdWdodCcpO1xyXG4gICAgICAgIGxldCBuZXh0T3JuYW1lbnQgPSBhbGxPcm5hbWVudHNbM107XHJcbiAgICAgICAgbmV4dE9ybmFtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2l0SXNIaWRkZW4nKTtcclxuICAgICAgICBndWlkZVJlYWN0cyg1KTtcclxuICAgIH1cclxufSIsImltcG9ydCBpdGVyYXRvck9mUG9pbnRzTGVmdCBmcm9tICcuL2FzaWRlLmpzJztcclxuaW1wb3J0IHtndWlkZVJlYWN0c30gZnJvbSAnLi9hc2lkZS5qcyc7XHJcbid1c2Ugc3RyaWN0JztcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRpYWxpemVUaGlzU2VsZWN0KVxyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZVRoaXNTZWxlY3QoKSB7XHJcbiAgICBsZXQgb3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkcy0yX2ZpZWxkc2V0LWRfY29udGFpbmVyX21vY2UnKTtcclxuICAgIGxldCBpdGVyID0gb3B0aW9ucy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXI7IGkrKykge1xyXG4gICAgICAgIGxldCBvcHQgPSBvcHRpb25zW2ldO1xyXG4gICAgICAgIG9wdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaXRJc0NsaWNrZWQob3B0LCBvcHRpb25zLCBpdGVyLCBpKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGl0SXNDbGlja2VkKG9wdCwgb3B0cywgaXRlciwgaSkge1xyXG4gICAgbGV0IGNoZWNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJtb2MtcGlldG5vXCJdJyk7XHJcbiAgICBsZXQgY29zdE9mVGhpcyA9IFsxLDIsMiwxLDMsMV07XHJcbiAgICBpZiAoY2hlY2tzW2ldLmNoZWNrZWQ9PT10cnVlKXtcclxuICAgICAgICBjaGVja3NbaV0uY2hlY2tlZD1mYWxzZTtcclxuICAgICAgICBpdGVyYXRvck9mUG9pbnRzTGVmdC5pdGVyYXRvckIoY29zdE9mVGhpc1tpXSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBjaGVja3NbaV0uY2hlY2tlZD10cnVlO1xyXG4gICAgICAgIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0LmRlbGV0YXRvckIoY29zdE9mVGhpc1tpXSk7XHJcbiAgICAgICAgZ3VpZGVSZWFjdHMoNik7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGl0ZXI7IGorKykge1xyXG4gICAgICAgIGlmIChjaGVja3Nbal0uY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBvcHRzW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ2l0SXNIaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoZWNrc1tqXS5jaGVja2VkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBvcHRzW2pdLmNsYXNzTGlzdC5hZGQoJ2l0SXNIaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImluaXRpYWxpemVHdWlkZSIsImhpZGVVc2VyR3VpZGUiLCJzZXRUaW1lb3V0IiwiYXNpZGUiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwib3JubSIsInJvdGF0ZUFuZEhpZGVBc2lkZSIsImJ0biIsImNvbnRyb2xsZXIiLCJoZWFkQmVsdCIsInBpZWNlIiwib2Zmc2V0SGVpZ2h0Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJhdyIsIm9mZnNldFdpZHRoIiwiYWgiLCJ3c3AiLCJ4IiwieSIsInoiLCJsZWZ0IiwiYm90dG9tIiwiZ3VpZGVSZWFjdHMiLCJpIiwicmVtb3ZlIiwic2hha2VUb0ZvY3VzVXNlcnNBdHRlbnRpb24iLCJndWlkZSIsInRpdGxlIiwiYXJyIiwiaW5uZXJUZXh0IiwiYXJyQiIsIml0ZXJhdG9yT2ZQb2ludHNMZWZ0Iiwic3BlbnRPbkF0dGFjayIsIml0ZXJhdG9yIiwiY29udCIsIml0ZXJEZXZpY2UiLCJvcHQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicG9pbnRzIiwiYW1vdW50IiwibGVuZ3RoIiwiYmlsYW5zIiwiYW5pbWF0ZU9wdHNTcGVuZGluZyIsImRlbGV0YXRvciIsImNvaW4iLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXhTIiwid2luZG93Iiwic2Nyb2xsWSIsImF4WCIsIm9mZnNldFRvcCIsImF4WiIsImF4WSIsIm9mZnNldExlZnQiLCJ0b3AiLCJhcHBlbmRDaGlsZCIsIndpZHRoIiwiaGVpZ2h0IiwicmVtb3ZlQ2hpbGQiLCJpdGVyYXRvckIiLCJpbnRlZ2VyIiwiZGVsZXRhdG9yQiIsImVxdWFsaXphdG9yIiwidGhpcyIsImluaXRpYWxpemVOZXh0U2VjdGlvbiIsImFsbE9ybmFtZW50cyIsInRoaXNPcm5hbWVudCIsIm5leHRPcm5hbWVudCIsInplbnNjcm9sbCIsInRvWSIsImVuYWJsZU5leHRTZWN0aW9uIiwiYWxsU2VjdGlvbnMiLCJ1bmRlZmluZWQiLCJpbml0aWFsaXplIiwib3B0cyIsIml0ZW0iLCJzZXRJTUciLCJlbmFibGVTdHJpa2VOYW1lUGFydCIsInNldFN0cmlrZU5hbWVUb0RlcyIsInNldFBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uIiwic2V0Rm9yY2VEZXMiLCJvbmx5T25jZSIsImRlc1BhcnQiLCJhcnJheSIsImJlbHQiLCJpbWFnIiwiYXR0cnliIiwiZ2V0QXR0cmlidXRlIiwiaWNvbiIsImFsbElNR3MiLCJzdGFuZGFydCIsImltYWdlVG9EZWwiLCJqIiwidGhlSU1HIiwic291cmNlSU1HIiwibmV3SU1HIiwic2V0TmV4dFBhcnRPZkZvcm11bGFGb3JUaGVGaXJzdFRpbWUiLCJpbnAiLCJzdHJOYW1lIiwidmFsdWUiLCJzaG93QWxsRGVzIiwiaXRtIiwidHJpbSIsInNldE5leHRQYXJ0T2ZGb3JtdWxhIiwiSU1HcyIsIml0ZXIiLCJzdHJuZyIsIklNRyIsInB1c2giLCJzdHJpbmdUb1NldCIsImpvaW4iLCJ6eXdEZXMiLCJpbWlEZXMiLCJwcnpEZXMiLCJ6ZGFEZXMiLCJzZXROYW1lVG9EZXMiLCJuYW0iLCJzZXROaWNrbmFtZVRvRGVzIiwiaW5wQiIsInN1cm5hbSIsInNldFNlbnRlbmNlVG9EZXMiLCJhbGxEZXMiLCJ0ZXh0QXJlYSIsImFyZWFWYWx1ZSIsImVuYWJsZU5leHRQYXJ0T2ZGb3JtIiwibmV4dFBhcnQiLCJib3hTaXplIiwiekluZGV4IiwiaW5pdFVzZXJGbG93VmlhU2VjdGlvbl9zZWxlY3ROb2Rlc1RvVGhpc1Byb2Nlc3MiLCJub2RlcyIsImZvckVhY2giLCJub2RlIiwiaWR4IiwiZXZlbnQiLCJzZWN0aW9uQ29tcGxldGVkIiwiaW5pdFVzZXJGbG93VG9OZXh0U2VjdGlvbl9jaGVja0lmVGhpc1NlY3Rpb25Jc0NvbXBsZXRlZCIsImtleUNvZGUiLCJpbml0VXNlckZsb3dWaWFTZWN0aW9uX2dvVG9OZXh0Tm9kZSIsImJsdXIiLCJpbml0VXNlckZsb3dUb05leHRTZWN0aW9uX3Nob3dCdG5PZkFjY2VwdGFuY2UiLCJmb2N1cyIsImluZGV4T2YiLCJhY2NlcHRhdGlvbkJ0biIsInNldEN1cnJlbnREYXRhVG9BdmF0YXJEZXNjcmlwdGlvbiIsImNob29zZVlvdXJBdmF0YXIiLCJjb250YWluZXJzIiwiYXZhdGFycyIsImNob29zZVRoaXNBdmF0YXIiLCJzZXRPbmVQYXJ0T2ZBdHRhY2tEZXNjcmlwdGlvbiIsInN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0cyIsImVuYWJsZUF0dGFja3MiLCJjaGVja2VkIiwiYXYiLCJuZXh0RGVzUGFydCIsImFub3RoZXJOZXh0RGVzUGFydCIsIm90aGVyQW5vdGhlck5leHREZXNQYXJ0Iiwib3B0aW9ucyIsImJhY2tncm91bmRDb2xvciIsImVuYWJsZWRBdHRhY2tzIiwiZGlzYWJsZWRJdGVtIiwic2VsZWN0ZWQiLCJlbmFibGVkQXR0YWNrIiwiaW5pdGlhbGl6ZUF0dGFja3NQYXJ0Iiwib25NT3V0Iiwib25NRW50ZXIiLCJzeW5jaHJvbml6ZVRoaXNCY2tncldpdGhJbWFnZUJlbHRIb3ZlckJja2dyIiwic2VsZWN0TGlzdCIsInEiLCJzeW5jaHJvbml6ZUJhY2tncm91bmRzT2ZPdGhlck9wdG5zIiwiaXNFbnRlciIsImdldENvbXB1dGVkU3R5bGUiLCJiY2dDb2wiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiaW5pdCIsImJ0bnMiLCJiZWx0cyIsImFkZFBvaW50IiwiZGVsZXRlVGhpc0lNRyIsImluaXRpYWxpemVUaGlzU2VjdGlvbiIsImxpc3RBIiwibGlzdEIiLCJpbWFnZXNBIiwiaW1hZ2VzQiIsIm9wdHNBIiwib3B0c0IiLCJkeW5hbWl6ZVRoaXNMaXN0IiwibGlzdCIsImltYWdlcyIsIm90aGVyTGlzdCIsIm9wdFZhbHVlIiwiZW5hYmxlTmV4dEZvcm1QYXJ0IiwiYSIsImIiLCJpbml0aWFsaXplVGhpc1NlbGVjdCIsIml0SXNDbGlja2VkIiwiY2hlY2tzIiwiY29zdE9mVGhpcyJdLCJtYXBwaW5ncyI6Ijs7O0lBQUFBLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4Q0MsZUFBOUM7O0lBRUEsU0FBU0EsZUFBVCxHQUEyQjtJQUN6QkM7SUFDQUMsYUFBVyxZ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
