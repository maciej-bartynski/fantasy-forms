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
      if (iterator === 1 || iterator === 2) {
        thisOrnament = allOrnaments[0];
        nextOrnament = allOrnaments[1];
      }
      thisOrnament.setAttribute('src', './icons/pole.2.svg');
      thisOrnament.classList.add('itIsPassedThrought');
      nextOrnament.classList.remove('itIsHidden');
      // window.scrollTo(0, nextOrnament.offsetTop)
      zenscroll.toY(thisOrnament.offsetTop);
      enableNextSection(iterator);
    }
    function enableNextSection(iterator) {
      iterator += 1;
      var allSections = [undefined, document.querySelector('.corpus_section_form_fields'), document.querySelectorAll('.corpus_section_form_fields fieldset')[1], document.querySelectorAll('.corpus_section_form_fields fieldset')[2], document.querySelector('.corpus_section_form_field-C'), document.querySelector('.corpus_section_form_fields-2')];
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
    var controller$1 = 0;

    function initUserFlowToNextSection_showBtnOfAcceptance() {
      if (controller$1 === 0) {
        var btnContainerForThisSection = document.querySelector('.corpus_section_form_field-A_btn-belt_btn-positioner.firstSectionBtn');
        var btnOfThisSection = btnContainerForThisSection.querySelector('.corpus_section_form_field-A_btn-belt_btn-positioner_btn');
        showBtnOfAcceptance(btnOfThisSection, btnContainerForThisSection);
        setCurrentDataToAvatarDescription();
        controller$1 = 1;
      }
    }

    function setCurrentDataToAvatarDescription() {
      setNameToDes();
      setNicknameToDes();
      setSentenceToDes();
    }

    function objectToArray(object) {
        var amount = object.length;
        var array = [];
        for (var i = 0; i < amount; i++) {
            array.push(object[i]);
        }
        return array;
    }

    document.addEventListener("DOMContentLoaded", initializeAttacksPart);
    function enableAttacks(i) {
      var attacks = objectToArray(document.querySelectorAll(".corpus_section_form_fields_fieldset-b_container_select-container"));
      attacks.forEach(function (attack, idx) {
        attack.classList.remove("enabled");
        var options = objectToArray(attack.querySelectorAll("option"));
        attack.querySelector("select").addEventListener("change", function () {
          synchronizeBackgroundsOnChange(attack, options);
        });
        attack.querySelector("select").addEventListener("blur", function () {
          synchronizeBackgroundsOnBlur(attack, attack.querySelector("select"), options);
        });
        options.forEach(function (option) {
          if (option.selected === true) {
            option.selected = false;
          }
        });
        objectToArray(attack.querySelectorAll(".corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt")).forEach(function (belt) {
          belt.classList.remove("JSonBlur", "JSonSelect");
        });
      });
      attacks[i].classList.add("enabled");
    }

    function synchronizeBackgroundsOnChange(node, children) {
      var belts = objectToArray(node.querySelectorAll(".corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt"));
      belts.forEach(function (belt) {
        return belt.classList.remove("JSonSelect", "JSonBlur");
      });
      children.forEach(function (opt, idx) {
        if (opt.value === node.querySelector("select").value) {
          belts[idx].classList.add("JSonSelect");
          initUserFlowToNextSection_showBtnOfAcceptance$1();
          iteratorOfPointsLeft.iterator(node, idx);
        }
      });
    }
    function synchronizeBackgroundsOnBlur(node, list, options) {
      options.forEach(function (option, idx) {
        if (option.value === list.value) {
          node.querySelectorAll(".corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt")[idx].classList.add("JSonBlur");
        }
      });
    }

    var controller$2 = 0;

    function initUserFlowToNextSection_showBtnOfAcceptance$1() {
      if (controller$2 === 0) {
        var btnContainerForThisSection = document.querySelector(".corpus_section_form_field-A_btn-belt_btn-positioner.thirdSectionBtn");
        var btnOfThisSection = btnContainerForThisSection.querySelector(".corpus_section_form_field-A_btn-belt_btn-positioner_btn");
        showBtnOfAcceptance(btnOfThisSection, btnContainerForThisSection);
        controller$2 = 1;
      }
    }

    function initializeAttacksPart() {
      objectToArray(document.querySelectorAll(".corpus_section_form_fields_fieldset-b_container_select-container")).forEach(function (container) {
        //on select-list option mouse hover over
        objectToArray(container.querySelectorAll("option")).forEach(function (option, idx) {
          option.addEventListener("mouseout", function (event) {
            highlightBackground(container, event, idx);
          });
          option.addEventListener("mouseover", function (event) {
            highlightBackground(container, event, idx);
          });
        });
        //option-like div
        objectToArray(container.querySelectorAll(".corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt")).forEach(function (belt, idx) {
          belt.addEventListener("mouseover", function (event) {
            highlightBackground(container, event, idx);
          });
          belt.addEventListener("mouseout", function (event) {
            highlightBackground(container, event, idx);
          });
          belt.addEventListener("click", function (event) {
            var changeEv = document.createEvent('Event');
            changeEv.initEvent('change');
            container.querySelectorAll("option")[idx].selected = true;
            container.querySelector("select").dispatchEvent(changeEv);
            // synchronizeBackgroundsOnChange(container, objectToArray(container.querySelectorAll("option")));
          });
        });
      });
    }

    function highlightBackground(container, event, idx) {
      if (event.type === "mouseover") {
        container.querySelectorAll(".corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt")[idx].classList.add("JSonHover");
        container.querySelectorAll("option")[idx].classList.add("JSonHover");
      } else if (event.type === "mouseout") {
        container.querySelectorAll(".corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt")[idx].classList.remove("JSonHover");
        container.querySelectorAll("option")[idx].classList.remove("JSonHover");
      }
    }

    document.addEventListener('DOMContentLoaded', function () {
        initUserFlowViaSection_selectNodesToThisProcess$1();
    });

    function initUserFlowViaSection_selectNodesToThisProcess$1() {
        var avatarObjects = document.querySelectorAll('.corpus_section_form_fields_fieldset-b_container_radio-lab-container');
        var avatars = objectToArray(avatarObjects);
        avatars.forEach(function (item, idx) {
            return item.addEventListener('click', function () {
                avatarIsClicked(item, avatars, idx);
            });
        });
    }

    function avatarIsClicked(avatar, avatars, idx) {
        avatars.forEach(function (item) {
            return item.classList.remove('isClicked');
        });
        var av = avatar.querySelector('input');
        av.checked = true;
        avatar.classList.add('isClicked');
        initUserFlowToNextSection_showBtnOfAcceptance$2(idx);
    }
    var controller$3 = 0;

    function initUserFlowToNextSection_showBtnOfAcceptance$2(idx) {
        enableAttacks(idx);
        if (controller$3 === 0) {
            var btnContainerForThisSection = document.querySelector('.corpus_section_form_field-A_btn-belt_btn-positioner.secondSectionBtn');
            var btnOfThisSection = btnContainerForThisSection.querySelector('.corpus_section_form_field-A_btn-belt_btn-positioner_btn');
            showBtnOfAcceptance(btnOfThisSection, btnContainerForThisSection);
            controller$3 = 1;
        }
    }

    /*function initUserFlowViaSection_selectNodesToThisProcess () {
      let nodes = [
        document.querySelectorAll('input[name="klasa"]'),
        document.querySelectorAll('select[name="uderzenie"]'),
        document.querySelectorAll('input[name="nazwauderzenia"]')
      ]
      initUserFlowViaSection_goToNextNode(nodes);
      //nodes[2].addEventListener('change', function () {
        //let btnContainerForThisSection = document.querySelector('.corpus_section_form_field-A_btn-belt_btn-positioner.secondSectionBtn')
        //let btnOfThisSection = btnContainerForThisSection.querySelector('.corpus_section_form_field-A_btn-belt_btn-positioner_btn')
       // showBtnOfAcceptance(btnOfThisSection, btnContainerForThisSection)
      //})
    }
    function initUserFlowViaSection_goToNextNode(nodes){
        let amount = nodes.length;
        for (let i=0; i<amount; i++){
            let nodeSet = nodes[i];
            let optIterator = nodeSet.length;
            for (let j=0; j<optIterator; j++){
                let option = nodeSet[j];
                option.addEventListener('change', function(){
                    goToNextNode(nodes, i);
                });
            }
        }
    }
    */

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyIuLi9zb3VyY2UvZHluYW1pY3MvYXNpZGUuanMiLCIuLi9ub2RlX21vZHVsZXMvemVuc2Nyb2xsL3plbnNjcm9sbC5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9mb3JtX2luaXRpYWxpemVOZXh0U2VjdGlvbi5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9hdGFraS1zZXQtdHh0LmpzIiwiLi4vc291cmNlL2R5bmFtaWNzL2Zvcm1fc2VjdGlvbi1vbmUuanMiLCIuLi9zb3VyY2UvZHluYW1pY3Mvb2JqZWN0LXRvLWFycmF5LmpzIiwiLi4vc291cmNlL2R5bmFtaWNzL2Zvcm1fc2VjdGlvbi10aHJlZS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9mb3JtX3NlY3Rpb24tdHdvLmpzIiwiLi4vc291cmNlL2R5bmFtaWNzL2F0dHJ5YnMuanMiLCIuLi9zb3VyY2UvZHluYW1pY3Mvb2Jyb255LmpzIiwiLi4vc291cmNlL2R5bmFtaWNzL21vY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRpYWxpemVHdWlkZSlcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVHdWlkZSgpIHtcclxuICBoaWRlVXNlckd1aWRlKCk7XHJcbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpO1xyXG4gICAgYXNpZGUuY2xhc3NMaXN0LmFkZCgnb25Mb2FkJyk7XHJcbiAgfSwgMClcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZVVzZXJHdWlkZSgpIHtcclxuICBsZXQgb3JubSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1oZWFkJylcclxuICBvcm5tLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlQW5kSGlkZUFzaWRlKVxyXG4gIGxldCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1ndWlkZV9oaWRlJylcclxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVBbmRIaWRlQXNpZGUpXHJcbn1cclxubGV0IGNvbnRyb2xsZXIgPSAwXHJcblxyXG5mdW5jdGlvbiByb3RhdGVBbmRIaWRlQXNpZGUoKSB7XHJcbiAgbGV0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXNpZGUnKVxyXG4gIGlmIChjb250cm9sbGVyID09PSAwKSB7XHJcbiAgICBsZXQgaGVhZEJlbHQgPSBhc2lkZS5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtaGVhZCcpO1xyXG4gICAgbGV0IHBpZWNlID0gaGVhZEJlbHQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgYXNpZGUuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknXHJcbiAgICBsZXQgYXcgPSBhc2lkZS5vZmZzZXRXaWR0aFxyXG4gICAgbGV0IGFoID0gYXNpZGUub2Zmc2V0SGVpZ2h0XHJcbiAgICBsZXQgd3NwID0gYWggKyAoKGF3IC0gYWgpIC8gMilcclxuICAgIGxldCB4ID0gKHdzcCAqIC0xKSArIHBpZWNlXHJcbiAgICBsZXQgeSA9IHggKyAncHgnXHJcbiAgICBsZXQgeiA9ICgoYXcgLSBhaCkgLyAyKSArICdweCdcclxuICAgIGFzaWRlLnN0eWxlLmxlZnQgPSB5XHJcbiAgICBhc2lkZS5zdHlsZS5ib3R0b20gPSB6XHJcbiAgICBjb250cm9sbGVyID0gMVxyXG4gIH0gZWxzZSBpZiAoY29udHJvbGxlciA9PT0gMSkge1xyXG4gICAgYXNpZGUuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSdcclxuICAgIGFzaWRlLnN0eWxlLmxlZnQgPSAwXHJcbiAgICBhc2lkZS5zdHlsZS5ib3R0b20gPSAwXHJcbiAgICBjb250cm9sbGVyID0gMFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGd1aWRlUmVhY3RzKGkpIHtcclxuICBsZXQgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpO1xyXG4gIGFzaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ29uQWR2aWNlJyk7XHJcbiAgYXNpZGUuY2xhc3NMaXN0LnJlbW92ZSgnb25BZHZpY2VCJyk7XHJcbiAgc2V0VGltZW91dChmdW5jdGlvbigpe3NoYWtlVG9Gb2N1c1VzZXJzQXR0ZW50aW9uKGFzaWRlKX0sMCk7XHJcbiAgbGV0IGd1aWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWZvb3QgLnVzZXItZ3VpZGUnKTtcclxuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtZm9vdF90aXRsZScpO1xyXG4gIGxldCBhcnIgPSBbXHJcbiAgICAnR2R5IHdwaXN6ZXN6IGltacSZLCBwcnp5ZG9tZWsgaSB6YXdvxYJhbmllLCBwbyB6YXR3aWVyZHplbml1IHptaWFuIHBvamF3aSBzacSZIG5hc3TEmXBuYSBjesSZxZvEhyBmb3JtdWxhcnphLicsXHJcbiAgICAnUG8gd3lib3J6ZSBrbGFzeSwgcG9qYXdpIHNpZSBva25vIHd5Ym9ydSBhdGFrdSBzcG/Fm3LDs2QgdWRlcnplxYQgY2hhcmFrdGVyeXN0eWN6bnljaCBkbGEgdGVqIHBvc3RhY2kuJyxcclxuICAgICdXeWJpZXJ6IHVkZXJ6ZW5pZSwga2xpa2FqxIVjIHcgc8WCb3dvIG9waXN1asSFY2UgamUuIFByenkga2HFvGR5bSBlcGl0ZWNpZSB3aWRuaWVqZSBjaGFyYWt0ZXJ5c3R5a2EgY2lvc3UgdyBJa29uYWNoIMW7eXdpb8WCw7N3IGkgSWtvbmFjaCBVZGVyemXFhC4nLFxyXG4gICAgJ1d5bXnFm2wgbmF6d2UgZGxhIHVkZXJ6ZW5pYSB6IHBvcHJ6ZWRuaWVnbyBrcm9rdS4gR2R5IGrEhSB6YXR3aWVyZHppc3osIHBvamF3aSBzaWUga29sZWpuYSBjemXFm8SHIGthcnR5IHBvc3RhY2kuJyxcclxuICAgICdQbyB3eWJvcnplIGplZG5laiBvcGNqaSB6IGthxbxkZWogbGlzdHksIHBvamF3aSBzaWUga29sZWpuYSBjemXFm8SHIGthcnR5IHBvc3RhY2kuJyxcclxuICAgICdLbGlrbmlqIHR5bGUgb3BjamksIGlsZSBjaGNlc3ouIEthxbxkeSB6ZXN0YXcgKGN6eWxpIG1vYyBpIHBpZXRubykgemFiaWVyYSBjaSBwZXduxIUgaWxvxZvEhyBwdW5rdMOzdyBNxIVkcm/Fm2NpLicsXHJcbiAgICAnUm96ZGFqIHBvem9zdGHFgmUgcHVua3R5IG3EhWRyb8WbY2kgbmEgd3Nww7PFgmN6eW5uaWtpIHBvc3RhY2k6IMW7eWNpZSwgTcSFZHJvxZvEhywgUnVjaCBpIER6aWHFgmFuaWUuJ1xyXG4gIF1cclxuICBndWlkZS5pbm5lclRleHQgPSBhcnJbaV1cclxuICBsZXQgYXJyQiA9IFtcclxuICAgICd0b8W8c2Ftb8WbxIc6JyxcclxuICAgICdrbGFzYTonLFxyXG4gICAgJ2F0YWs6JyxcclxuICAgICduYXp3YSBhdGFrdTonLFxyXG4gICAgJ29icm9uYTonLFxyXG4gICAgJ3pkb2xub8WbxIcgaSBzxYJhYm/Fm8SHJyxcclxuICAgICdhdHJ5YnV0eTonXHJcbiAgXVxyXG4gIHRpdGxlLmlubmVyVGV4dCA9IGFyckJbaV1cclxufVxyXG5mdW5jdGlvbiBzaGFrZVRvRm9jdXNVc2Vyc0F0dGVudGlvbihhc2lkZSkge1xyXG4gIGlmIChjb250cm9sbGVyID09PSAxKSB7XHJcbiAgICBsZXQgaGVhZEJlbHQgPSBhc2lkZS5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtaGVhZCcpO1xyXG4gICAgbGV0IHBpZWNlID0gaGVhZEJlbHQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgYXNpZGUuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xyXG4gICAgbGV0IGF3ID0gYXNpZGUub2Zmc2V0V2lkdGg7XHJcbiAgICBsZXQgYWggPSBhc2lkZS5vZmZzZXRIZWlnaHQ7XHJcbiAgICBsZXQgd3NwID0gYWggKyAoKGF3IC0gYWgpIC8gMik7XHJcbiAgICBsZXQgeCA9ICh3c3AgKiAtMSkgKyBwaWVjZTtcclxuICAgIGxldCB5ID0geCArICdweCc7XHJcbiAgICBsZXQgeiA9ICgoYXcgLSBhaCkgLyAyKSArICdweCc7XHJcbiAgICBhc2lkZS5zdHlsZS5sZWZ0ID0geTtcclxuICAgIGFzaWRlLnN0eWxlLmJvdHRvbSA9IHo7XHJcbiAgICBhc2lkZS5jbGFzc0xpc3QuYWRkKCdvbkFkdmljZScpO1xyXG4gIH0gZWxzZSBpZiAoY29udHJvbGxlciA9PT0gMCkge1xyXG4gICAgYXNpZGUuY2xhc3NMaXN0LmFkZCgnb25BZHZpY2VCJyk7XHJcbiAgfVxyXG59XHJcblxyXG52YXIgaXRlcmF0b3JPZlBvaW50c0xlZnQgPSB7XHJcbiAgbGVmdDogMjAsXHJcbiAgc3BlbnRPbkF0dGFjazogMCxcclxuICBpdGVyYXRvcihjb250LCB4KSB7XHJcbiAgICBsZXQgaXRlckRldmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1ib2R5X2hvdy1tdWNoJylcclxuICAgIGxldCBvcHQgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnKVt4XVxyXG4gICAgbGV0IHBvaW50cyA9IG9wdC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVxyXG4gICAgbGV0IGFtb3VudCA9IChwb2ludHMubGVuZ3RoIC0gMSlcclxuICAgIGxldCBiaWxhbnMgPSBhbW91bnQgLSB0aGlzLnNwZW50T25BdHRhY2tcclxuICAgIHRoaXMubGVmdCA9IHRoaXMubGVmdCAtIGJpbGFuc1xyXG4gICAgdGhpcy5zcGVudE9uQXR0YWNrID0gYW1vdW50XHJcbiAgICBpdGVyRGV2aWNlLmlubmVyVGV4dCA9ICdQb3pvc3RhxYJvJyArICcgJyArIHRoaXMubGVmdCArICd4J1xyXG4gICAgdGhpcy5hbmltYXRlT3B0c1NwZW5kaW5nKG9wdCwgYW1vdW50KTtcclxuICB9LFxyXG4gIGRlbGV0YXRvcigpIHtcclxuICAgIGxldCBpdGVyRGV2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWJvZHlfaG93LW11Y2gnKVxyXG4gICAgdGhpcy5sZWZ0ID0gdGhpcy5sZWZ0ICsgdGhpcy5zcGVudE9uQXR0YWNrXHJcbiAgICB0aGlzLnNwZW50T25BdHRhY2sgPSAwXHJcbiAgICBpdGVyRGV2aWNlLmlubmVyVGV4dCA9ICdQb3pvc3RhxYJvJyArICcgJyArIHRoaXMubGVmdCArICd4J1xyXG4gIH0sXHJcbiAgYW5pbWF0ZU9wdHNTcGVuZGluZyhvcHQsIGFtb3VudCkge1xyXG4gICAgbGV0IGNvaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJTUcnKTtcclxuICAgIGNvaW4uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pY29ucy9pa29uYS1wb3RlZy5zdmcnKTtcclxuICAgIGNvaW4uY2xhc3NMaXN0LmFkZCgnaXRJc0NvaW4nKTtcclxuICAgIGxldCBheFMgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgIGxldCBheFggPSBvcHQub2Zmc2V0VG9wO1xyXG4gICAgbGV0IGF4WiA9IGF4WCAtIGF4UztcclxuICAgIGxldCBheFkgPSBvcHQub2Zmc2V0TGVmdDtcclxuICAgIGNvaW4uc3R5bGUudG9wID0gYXhaICsgJ3B4JztcclxuICAgIGNvaW4uc3R5bGUubGVmdCA9IGF4WSArICdweCc7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoY29pbik7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29pbi5zdHlsZS5sZWZ0ID0gJzAnO1xyXG4gICAgICBjb2luLnN0eWxlLnRvcCA9ICc5MCUnO1xyXG4gICAgICBjb2luLnN0eWxlLndpZHRoID0gJzU1cHgnO1xyXG4gICAgICBjb2luLnN0eWxlLmhlaWdodCA9ICc1NXB4JztcclxuICAgIH0sIDApO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5yZW1vdmVDaGlsZChjb2luKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXNpZGUnKS5jbGFzc0xpc3QuYWRkKCdvbkFkdmljZScpO1xyXG4gICAgfSwgNTUwKTtcclxuICB9LFxyXG4gIGl0ZXJhdG9yQihpbnRlZ2VyKSB7XHJcbiAgICBsZXQgaXRlckRldmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1ib2R5X2hvdy1tdWNoJylcclxuICAgIHRoaXMubGVmdCA9IHRoaXMubGVmdCArIGludGVnZXJcclxuICAgIGl0ZXJEZXZpY2UuaW5uZXJUZXh0ID0gJ1Bvem9zdGHFgm8nICsgJyAnICsgdGhpcy5sZWZ0ICsgJ3gnXHJcbiAgfSxcclxuICBkZWxldGF0b3JCKGludGVnZXIpIHtcclxuICAgIGxldCBpdGVyRGV2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWJvZHlfaG93LW11Y2gnKVxyXG4gICAgdGhpcy5sZWZ0ID0gdGhpcy5sZWZ0IC0gaW50ZWdlclxyXG4gICAgaXRlckRldmljZS5pbm5lclRleHQgPSAnUG96b3N0YcWCbycgKyAnICcgKyB0aGlzLmxlZnQgKyAneCdcclxuICB9LFxyXG4gIGVxdWFsaXphdG9yKCkge1xyXG4gICAgbGV0IGl0ZXJEZXZpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtYm9keV9ob3ctbXVjaCcpXHJcbiAgICBpdGVyRGV2aWNlLmlubmVyVGV4dCA9ICdQb3pvc3RhxYJvJyArICcgJyArIHRoaXMubGVmdCArICd4J1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBpdGVyYXRvck9mUG9pbnRzTGVmdCIsIi8qKlxuICogWmVuc2Nyb2xsIDQuMC4yXG4gKiBodHRwczovL2dpdGh1Yi5jb20vemVuZ2Fib3IvemVuc2Nyb2xsL1xuICpcbiAqIENvcHlyaWdodCAyMDE14oCTMjAxOCBHYWJvciBMZW5hcmRcbiAqXG4gKiBUaGlzIGlzIGZyZWUgYW5kIHVuZW5jdW1iZXJlZCBzb2Z0d2FyZSByZWxlYXNlZCBpbnRvIHRoZSBwdWJsaWMgZG9tYWluLlxuICogXG4gKiBBbnlvbmUgaXMgZnJlZSB0byBjb3B5LCBtb2RpZnksIHB1Ymxpc2gsIHVzZSwgY29tcGlsZSwgc2VsbCwgb3JcbiAqIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSwgZWl0aGVyIGluIHNvdXJjZSBjb2RlIGZvcm0gb3IgYXMgYSBjb21waWxlZFxuICogYmluYXJ5LCBmb3IgYW55IHB1cnBvc2UsIGNvbW1lcmNpYWwgb3Igbm9uLWNvbW1lcmNpYWwsIGFuZCBieSBhbnlcbiAqIG1lYW5zLlxuICogXG4gKiBJbiBqdXJpc2RpY3Rpb25zIHRoYXQgcmVjb2duaXplIGNvcHlyaWdodCBsYXdzLCB0aGUgYXV0aG9yIG9yIGF1dGhvcnNcbiAqIG9mIHRoaXMgc29mdHdhcmUgZGVkaWNhdGUgYW55IGFuZCBhbGwgY29weXJpZ2h0IGludGVyZXN0IGluIHRoZVxuICogc29mdHdhcmUgdG8gdGhlIHB1YmxpYyBkb21haW4uIFdlIG1ha2UgdGhpcyBkZWRpY2F0aW9uIGZvciB0aGUgYmVuZWZpdFxuICogb2YgdGhlIHB1YmxpYyBhdCBsYXJnZSBhbmQgdG8gdGhlIGRldHJpbWVudCBvZiBvdXIgaGVpcnMgYW5kXG4gKiBzdWNjZXNzb3JzLiBXZSBpbnRlbmQgdGhpcyBkZWRpY2F0aW9uIHRvIGJlIGFuIG92ZXJ0IGFjdCBvZlxuICogcmVsaW5xdWlzaG1lbnQgaW4gcGVycGV0dWl0eSBvZiBhbGwgcHJlc2VudCBhbmQgZnV0dXJlIHJpZ2h0cyB0byB0aGlzXG4gKiBzb2Z0d2FyZSB1bmRlciBjb3B5cmlnaHQgbGF3LlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICogRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gKiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuXG4gKiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUlxuICogT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsXG4gKiBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1JcbiAqIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICogRm9yIG1vcmUgaW5mb3JtYXRpb24sIHBsZWFzZSByZWZlciB0byA8aHR0cDovL3VubGljZW5zZS5vcmc+XG4gKiBcbiAqL1xuXG4vKmpzaGludCBkZXZlbDp0cnVlLCBhc2k6dHJ1ZSAqL1xuXG4vKmdsb2JhbCBkZWZpbmUsIG1vZHVsZSAqL1xuXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkoKSlcblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KClcblx0fSBlbHNlIHtcblx0XHQoZnVuY3Rpb24gaW5zdGFsbCgpIHtcblx0XHRcdC8vIFRvIG1ha2Ugc3VyZSBaZW5zY3JvbGwgY2FuIGJlIHJlZmVyZW5jZWQgZnJvbSB0aGUgaGVhZGVyLCBiZWZvcmUgYGJvZHlgIGlzIGF2YWlsYWJsZVxuXHRcdFx0aWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LmJvZHkpIHtcblx0XHRcdFx0cm9vdC56ZW5zY3JvbGwgPSBmYWN0b3J5KClcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIHJldHJ5IDltcyBsYXRlclxuXHRcdFx0XHRzZXRUaW1lb3V0KGluc3RhbGwsIDkpXG5cdFx0XHR9XG5cdFx0fSkoKVxuXHR9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcblx0XCJ1c2Ugc3RyaWN0XCJcblxuXG5cdC8vIERldGVjdCBpZiB0aGUgYnJvd3NlciBhbHJlYWR5IHN1cHBvcnRzIG5hdGl2ZSBzbW9vdGggc2Nyb2xsaW5nIChlLmcuLCBGaXJlZm94IDM2KyBhbmQgQ2hyb21lIDQ5KykgYW5kIGl0IGlzIGVuYWJsZWQ6XG5cdHZhciBpc05hdGl2ZVNtb290aFNjcm9sbEVuYWJsZWRPbiA9IGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0cmV0dXJuIGVsZW0gJiYgXCJnZXRDb21wdXRlZFN0eWxlXCIgaW4gd2luZG93ICYmXG5cdFx0XHR3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKVtcInNjcm9sbC1iZWhhdmlvclwiXSA9PT0gXCJzbW9vdGhcIlxuXHR9XG5cblxuXHQvLyBFeGl0IGlmIGl04oCZcyBub3QgYSBicm93c2VyIGVudmlyb25tZW50OlxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFwiZG9jdW1lbnRcIiBpbiB3aW5kb3cpKSB7XG5cdFx0cmV0dXJuIHt9XG5cdH1cblxuXG5cdHZhciBtYWtlU2Nyb2xsZXIgPSBmdW5jdGlvbiAoY29udGFpbmVyLCBkZWZhdWx0RHVyYXRpb24sIGVkZ2VPZmZzZXQpIHtcblxuXHRcdC8vIFVzZSBkZWZhdWx0cyBpZiBub3QgcHJvdmlkZWRcblx0XHRkZWZhdWx0RHVyYXRpb24gPSBkZWZhdWx0RHVyYXRpb24gfHwgOTk5IC8vbXNcblx0XHRpZiAoIWVkZ2VPZmZzZXQgJiYgZWRnZU9mZnNldCAhPT0gMCkge1xuXHRcdFx0Ly8gV2hlbiBzY3JvbGxpbmcsIHRoaXMgYW1vdW50IG9mIGRpc3RhbmNlIGlzIGtlcHQgZnJvbSB0aGUgZWRnZXMgb2YgdGhlIGNvbnRhaW5lcjpcblx0XHRcdGVkZ2VPZmZzZXQgPSA5IC8vcHhcblx0XHR9XG5cblx0XHQvLyBIYW5kbGluZyB0aGUgbGlmZS1jeWNsZSBvZiB0aGUgc2Nyb2xsZXJcblx0XHR2YXIgc2Nyb2xsVGltZW91dElkXG5cdFx0dmFyIHNldFNjcm9sbFRpbWVvdXRJZCA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuXHRcdFx0c2Nyb2xsVGltZW91dElkID0gbmV3VmFsdWVcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTdG9wIHRoZSBjdXJyZW50IHNtb290aCBzY3JvbGwgb3BlcmF0aW9uIGltbWVkaWF0ZWx5XG5cdFx0ICovXG5cdFx0dmFyIHN0b3BTY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQoc2Nyb2xsVGltZW91dElkKVxuXHRcdFx0c2V0U2Nyb2xsVGltZW91dElkKDApXG5cdFx0fVxuXG5cdFx0dmFyIGdldFRvcFdpdGhFZGdlT2Zmc2V0ID0gZnVuY3Rpb24gKGVsZW0pIHtcblx0XHRcdHJldHVybiBNYXRoLm1heCgwLCBjb250YWluZXIuZ2V0VG9wT2YoZWxlbSkgLSBlZGdlT2Zmc2V0KVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNjcm9sbHMgdG8gYSBzcGVjaWZpYyB2ZXJ0aWNhbCBwb3NpdGlvbiBpbiB0aGUgZG9jdW1lbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3RhcmdldFl9IFRoZSB2ZXJ0aWNhbCBwb3NpdGlvbiB3aXRoaW4gdGhlIGRvY3VtZW50LlxuXHRcdCAqIEBwYXJhbSB7ZHVyYXRpb259IE9wdGlvbmFsbHkgdGhlIGR1cmF0aW9uIG9mIHRoZSBzY3JvbGwgb3BlcmF0aW9uLlxuXHRcdCAqICAgICAgICBJZiBub3QgcHJvdmlkZWQgdGhlIGRlZmF1bHQgZHVyYXRpb24gaXMgdXNlZC5cblx0XHQgKiBAcGFyYW0ge29uRG9uZX0gQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBvbmNlIHRoZSBzY3JvbGwgZmluaXNoZWQuXG5cdFx0ICovXG5cdFx0dmFyIHNjcm9sbFRvWSA9IGZ1bmN0aW9uICh0YXJnZXRZLCBkdXJhdGlvbiwgb25Eb25lKSB7XG5cdFx0XHRzdG9wU2Nyb2xsKClcblx0XHRcdGlmIChkdXJhdGlvbiA9PT0gMCB8fCAoZHVyYXRpb24gJiYgZHVyYXRpb24gPCAwKSB8fCBpc05hdGl2ZVNtb290aFNjcm9sbEVuYWJsZWRPbihjb250YWluZXIuYm9keSkpIHtcblx0XHRcdFx0Y29udGFpbmVyLnRvWSh0YXJnZXRZKVxuXHRcdFx0XHRpZiAob25Eb25lKSB7XG5cdFx0XHRcdFx0b25Eb25lKClcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIHN0YXJ0WSA9IGNvbnRhaW5lci5nZXRZKClcblx0XHRcdFx0dmFyIGRpc3RhbmNlID0gTWF0aC5tYXgoMCwgdGFyZ2V0WSkgLSBzdGFydFlcblx0XHRcdFx0dmFyIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG5cdFx0XHRcdGR1cmF0aW9uID0gZHVyYXRpb24gfHwgTWF0aC5taW4oTWF0aC5hYnMoZGlzdGFuY2UpLCBkZWZhdWx0RHVyYXRpb24pO1xuXHRcdFx0XHQoZnVuY3Rpb24gbG9vcFNjcm9sbCgpIHtcblx0XHRcdFx0XHRzZXRTY3JvbGxUaW1lb3V0SWQoc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHQvLyBDYWxjdWxhdGUgcGVyY2VudGFnZTpcblx0XHRcdFx0XHRcdHZhciBwID0gTWF0aC5taW4oMSwgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnRUaW1lKSAvIGR1cmF0aW9uKVxuXHRcdFx0XHRcdFx0Ly8gQ2FsY3VsYXRlIHRoZSBhYnNvbHV0ZSB2ZXJ0aWNhbCBwb3NpdGlvbjpcblx0XHRcdFx0XHRcdHZhciB5ID0gTWF0aC5tYXgoMCwgTWF0aC5mbG9vcihzdGFydFkgKyBkaXN0YW5jZSoocCA8IDAuNSA/IDIqcCpwIDogcCooNCAtIHAqMiktMSkpKVxuXHRcdFx0XHRcdFx0Y29udGFpbmVyLnRvWSh5KVxuXHRcdFx0XHRcdFx0aWYgKHAgPCAxICYmIChjb250YWluZXIuZ2V0SGVpZ2h0KCkgKyB5KSA8IGNvbnRhaW5lci5ib2R5LnNjcm9sbEhlaWdodCkge1xuXHRcdFx0XHRcdFx0XHRsb29wU2Nyb2xsKClcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoc3RvcFNjcm9sbCwgOTkpIC8vIHdpdGggY29vbGRvd24gdGltZVxuXHRcdFx0XHRcdFx0XHRpZiAob25Eb25lKSB7XG5cdFx0XHRcdFx0XHRcdFx0b25Eb25lKClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIDkpKVxuXHRcdFx0XHR9KSgpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU2Nyb2xscyB0byB0aGUgdG9wIG9mIGEgc3BlY2lmaWMgZWxlbWVudC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7ZWxlbX0gVGhlIGVsZW1lbnQgdG8gc2Nyb2xsIHRvLlxuXHRcdCAqIEBwYXJhbSB7ZHVyYXRpb259IE9wdGlvbmFsbHkgdGhlIGR1cmF0aW9uIG9mIHRoZSBzY3JvbGwgb3BlcmF0aW9uLlxuXHRcdCAqIEBwYXJhbSB7b25Eb25lfSBBbiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBpbnZva2VkIG9uY2UgdGhlIHNjcm9sbCBmaW5pc2hlZC5cblx0XHQgKi9cblx0XHR2YXIgc2Nyb2xsVG9FbGVtID0gZnVuY3Rpb24gKGVsZW0sIGR1cmF0aW9uLCBvbkRvbmUpIHtcblx0XHRcdHNjcm9sbFRvWShnZXRUb3BXaXRoRWRnZU9mZnNldChlbGVtKSwgZHVyYXRpb24sIG9uRG9uZSlcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTY3JvbGxzIGFuIGVsZW1lbnQgaW50byB2aWV3IGlmIG5lY2Vzc2FyeS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7ZWxlbX0gVGhlIGVsZW1lbnQuXG5cdFx0ICogQHBhcmFtIHtkdXJhdGlvbn0gT3B0aW9uYWxseSB0aGUgZHVyYXRpb24gb2YgdGhlIHNjcm9sbCBvcGVyYXRpb24uXG5cdFx0ICogQHBhcmFtIHtvbkRvbmV9IEFuIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgb25jZSB0aGUgc2Nyb2xsIGZpbmlzaGVkLlxuXHRcdCAqL1xuXHRcdHZhciBzY3JvbGxJbnRvVmlldyA9IGZ1bmN0aW9uIChlbGVtLCBkdXJhdGlvbiwgb25Eb25lKSB7XG5cdFx0XHR2YXIgZWxlbUhlaWdodCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG5cdFx0XHR2YXIgZWxlbUJvdHRvbSA9IGNvbnRhaW5lci5nZXRUb3BPZihlbGVtKSArIGVsZW1IZWlnaHRcblx0XHRcdHZhciBjb250YWluZXJIZWlnaHQgPSBjb250YWluZXIuZ2V0SGVpZ2h0KClcblx0XHRcdHZhciB5ID0gY29udGFpbmVyLmdldFkoKVxuXHRcdFx0dmFyIGNvbnRhaW5lckJvdHRvbSA9IHkgKyBjb250YWluZXJIZWlnaHRcblx0XHRcdGlmIChnZXRUb3BXaXRoRWRnZU9mZnNldChlbGVtKSA8IHkgfHwgKGVsZW1IZWlnaHQgKyBlZGdlT2Zmc2V0KSA+IGNvbnRhaW5lckhlaWdodCkge1xuXHRcdFx0XHQvLyBFbGVtZW50IGlzIGNsaXBwZWQgYXQgdG9wIG9yIGlzIGhpZ2hlciB0aGFuIHNjcmVlbi5cblx0XHRcdFx0c2Nyb2xsVG9FbGVtKGVsZW0sIGR1cmF0aW9uLCBvbkRvbmUpXG5cdFx0XHR9IGVsc2UgaWYgKChlbGVtQm90dG9tICsgZWRnZU9mZnNldCkgPiBjb250YWluZXJCb3R0b20pIHtcblx0XHRcdFx0Ly8gRWxlbWVudCBpcyBjbGlwcGVkIGF0IHRoZSBib3R0b20uXG5cdFx0XHRcdHNjcm9sbFRvWShlbGVtQm90dG9tIC0gY29udGFpbmVySGVpZ2h0ICsgZWRnZU9mZnNldCwgZHVyYXRpb24sIG9uRG9uZSlcblx0XHRcdH0gZWxzZSBpZiAob25Eb25lKSB7XG5cdFx0XHRcdG9uRG9uZSgpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU2Nyb2xscyB0byB0aGUgY2VudGVyIG9mIGFuIGVsZW1lbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2VsZW19IFRoZSBlbGVtZW50LlxuXHRcdCAqIEBwYXJhbSB7ZHVyYXRpb259IE9wdGlvbmFsbHkgdGhlIGR1cmF0aW9uIG9mIHRoZSBzY3JvbGwgb3BlcmF0aW9uLlxuXHRcdCAqIEBwYXJhbSB7b2Zmc2V0fSBPcHRpb25hbGx5IHRoZSBvZmZzZXQgb2YgdGhlIHRvcCBvZiB0aGUgZWxlbWVudCBmcm9tIHRoZSBjZW50ZXIgb2YgdGhlIHNjcmVlbi5cblx0XHQgKiAgICAgICAgQSB2YWx1ZSBvZiAwIGlzIGlnbm9yZWQuXG5cdFx0ICogQHBhcmFtIHtvbkRvbmV9IEFuIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgb25jZSB0aGUgc2Nyb2xsIGZpbmlzaGVkLlxuXHRcdCAqL1xuXHRcdHZhciBzY3JvbGxUb0NlbnRlck9mID0gZnVuY3Rpb24gKGVsZW0sIGR1cmF0aW9uLCBvZmZzZXQsIG9uRG9uZSkge1xuXHRcdFx0c2Nyb2xsVG9ZKE1hdGgubWF4KDAsIGNvbnRhaW5lci5nZXRUb3BPZihlbGVtKSAtIGNvbnRhaW5lci5nZXRIZWlnaHQoKS8yICsgKG9mZnNldCB8fCBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodC8yKSksIGR1cmF0aW9uLCBvbkRvbmUpXG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogQ2hhbmdlcyBkZWZhdWx0IHNldHRpbmdzIGZvciB0aGlzIHNjcm9sbGVyLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtuZXdEZWZhdWx0RHVyYXRpb259IE9wdGlvbmFsbHkgYSBuZXcgdmFsdWUgZm9yIGRlZmF1bHQgZHVyYXRpb24sIHVzZWQgZm9yIGVhY2ggc2Nyb2xsIG1ldGhvZCBieSBkZWZhdWx0LlxuXHRcdCAqICAgICAgICBJZ25vcmVkIGlmIG51bGwgb3IgdW5kZWZpbmVkLlxuXHRcdCAqIEBwYXJhbSB7bmV3RWRnZU9mZnNldH0gT3B0aW9uYWxseSBhIG5ldyB2YWx1ZSBmb3IgdGhlIGVkZ2Ugb2Zmc2V0LCB1c2VkIGJ5IGVhY2ggc2Nyb2xsIG1ldGhvZCBieSBkZWZhdWx0LiBJZ25vcmVkIGlmIG51bGwgb3IgdW5kZWZpbmVkLlxuXHRcdCAqIEByZXR1cm5zIEFuIG9iamVjdCB3aXRoIHRoZSBjdXJyZW50IHZhbHVlcy5cblx0XHQgKi9cblx0XHR2YXIgc2V0dXAgPSBmdW5jdGlvbiAobmV3RGVmYXVsdER1cmF0aW9uLCBuZXdFZGdlT2Zmc2V0KSB7XG5cdFx0XHRpZiAobmV3RGVmYXVsdER1cmF0aW9uID09PSAwIHx8IG5ld0RlZmF1bHREdXJhdGlvbikge1xuXHRcdFx0XHRkZWZhdWx0RHVyYXRpb24gPSBuZXdEZWZhdWx0RHVyYXRpb25cblx0XHRcdH1cblx0XHRcdGlmIChuZXdFZGdlT2Zmc2V0ID09PSAwIHx8IG5ld0VkZ2VPZmZzZXQpIHtcblx0XHRcdFx0ZWRnZU9mZnNldCA9IG5ld0VkZ2VPZmZzZXRcblx0XHRcdH1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRlZmF1bHREdXJhdGlvbjogZGVmYXVsdER1cmF0aW9uLFxuXHRcdFx0XHRlZGdlT2Zmc2V0OiBlZGdlT2Zmc2V0XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHNldHVwOiBzZXR1cCxcblx0XHRcdHRvOiBzY3JvbGxUb0VsZW0sXG5cdFx0XHR0b1k6IHNjcm9sbFRvWSxcblx0XHRcdGludG9WaWV3OiBzY3JvbGxJbnRvVmlldyxcblx0XHRcdGNlbnRlcjogc2Nyb2xsVG9DZW50ZXJPZixcblx0XHRcdHN0b3A6IHN0b3BTY3JvbGwsXG5cdFx0XHRtb3Zpbmc6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICEhc2Nyb2xsVGltZW91dElkIH0sXG5cdFx0XHRnZXRZOiBjb250YWluZXIuZ2V0WSxcblx0XHRcdGdldFRvcE9mOiBjb250YWluZXIuZ2V0VG9wT2Zcblx0XHR9XG5cblx0fVxuXG5cblx0dmFyIGRvY0VsZW0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcblx0dmFyIGdldERvY1kgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5kb3cuc2Nyb2xsWSB8fCBkb2NFbGVtLnNjcm9sbFRvcCB9XG5cblx0Ly8gQ3JlYXRlIGEgc2Nyb2xsZXIgZm9yIHRoZSBkb2N1bWVudDpcblx0dmFyIHplbnNjcm9sbCA9IG1ha2VTY3JvbGxlcih7XG5cdFx0Ym9keTogZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB8fCBkb2N1bWVudC5ib2R5LFxuXHRcdHRvWTogZnVuY3Rpb24gKHkpIHsgd2luZG93LnNjcm9sbFRvKDAsIHkpIH0sXG5cdFx0Z2V0WTogZ2V0RG9jWSxcblx0XHRnZXRIZWlnaHQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2NFbGVtLmNsaWVudEhlaWdodCB9LFxuXHRcdGdldFRvcE9mOiBmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBnZXREb2NZKCkgLSBkb2NFbGVtLm9mZnNldFRvcCB9XG5cdH0pXG5cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIHNjcm9sbGVyIGZyb20gdGhlIHByb3ZpZGVkIGNvbnRhaW5lciBlbGVtZW50IChlLmcuLCBhIERJVilcblx0ICpcblx0ICogQHBhcmFtIHtzY3JvbGxDb250YWluZXJ9IFRoZSB2ZXJ0aWNhbCBwb3NpdGlvbiB3aXRoaW4gdGhlIGRvY3VtZW50LlxuXHQgKiBAcGFyYW0ge2RlZmF1bHREdXJhdGlvbn0gT3B0aW9uYWxseSBhIHZhbHVlIGZvciBkZWZhdWx0IGR1cmF0aW9uLCB1c2VkIGZvciBlYWNoIHNjcm9sbCBtZXRob2QgYnkgZGVmYXVsdC5cblx0ICogICAgICAgIElnbm9yZWQgaWYgMCBvciBudWxsIG9yIHVuZGVmaW5lZC5cblx0ICogQHBhcmFtIHtlZGdlT2Zmc2V0fSBPcHRpb25hbGx5IGEgdmFsdWUgZm9yIHRoZSBlZGdlIG9mZnNldCwgdXNlZCBieSBlYWNoIHNjcm9sbCBtZXRob2QgYnkgZGVmYXVsdC4gXG5cdCAqICAgICAgICBJZ25vcmVkIGlmIG51bGwgb3IgdW5kZWZpbmVkLlxuXHQgKiBAcmV0dXJucyBBIHNjcm9sbGVyIG9iamVjdCwgc2ltaWxhciB0byBgemVuc2Nyb2xsYCBidXQgY29udHJvbGxpbmcgdGhlIHByb3ZpZGVkIGVsZW1lbnQuXG5cdCAqL1xuXHR6ZW5zY3JvbGwuY3JlYXRlU2Nyb2xsZXIgPSBmdW5jdGlvbiAoc2Nyb2xsQ29udGFpbmVyLCBkZWZhdWx0RHVyYXRpb24sIGVkZ2VPZmZzZXQpIHtcblx0XHRyZXR1cm4gbWFrZVNjcm9sbGVyKHtcblx0XHRcdGJvZHk6IHNjcm9sbENvbnRhaW5lcixcblx0XHRcdHRvWTogZnVuY3Rpb24gKHkpIHsgc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCA9IHkgfSxcblx0XHRcdGdldFk6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3AgfSxcblx0XHRcdGdldEhlaWdodDogZnVuY3Rpb24gKCkgeyByZXR1cm4gTWF0aC5taW4oc2Nyb2xsQ29udGFpbmVyLmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY0VsZW0uY2xpZW50SGVpZ2h0KSB9LFxuXHRcdFx0Z2V0VG9wT2Y6IGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiBlbGVtLm9mZnNldFRvcCB9XG5cdFx0fSwgZGVmYXVsdER1cmF0aW9uLCBlZGdlT2Zmc2V0KVxuXHR9XG5cblxuXHQvLyBBdXRvbWF0aWMgbGluay1zbW9vdGhpbmcgb24gYWNob3JzXG5cdC8vIEV4Y2x1ZGUgSUU4LSBvciB3aGVuIG5hdGl2ZSBpcyBlbmFibGVkIG9yIFplbnNjcm9sbCBhdXRvLSBpcyBkaXNhYmxlZFxuXHRpZiAoXCJhZGRFdmVudExpc3RlbmVyXCIgaW4gd2luZG93ICYmICF3aW5kb3cubm9aZW5zbW9vdGggJiYgIWlzTmF0aXZlU21vb3RoU2Nyb2xsRW5hYmxlZE9uKGRvY3VtZW50LmJvZHkpKSB7XG5cblx0XHR2YXIgaXNIaXN0b3J5U3VwcG9ydGVkID0gXCJoaXN0b3J5XCIgaW4gd2luZG93ICYmIFwicHVzaFN0YXRlXCIgaW4gaGlzdG9yeVxuXHRcdHZhciBpc1Njcm9sbFJlc3RvcmF0aW9uU3VwcG9ydGVkID0gaXNIaXN0b3J5U3VwcG9ydGVkICYmIFwic2Nyb2xsUmVzdG9yYXRpb25cIiBpbiBoaXN0b3J5XG5cblx0XHQvLyBPbiBmaXJzdCBsb2FkICYgcmVmcmVzaCBtYWtlIHN1cmUgdGhlIGJyb3dzZXIgcmVzdG9yZXMgdGhlIHBvc2l0aW9uIGZpcnN0XG5cdFx0aWYgKGlzU2Nyb2xsUmVzdG9yYXRpb25TdXBwb3J0ZWQpIHtcblx0XHRcdGhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSBcImF1dG9cIlxuXHRcdH1cblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGlmIChpc1Njcm9sbFJlc3RvcmF0aW9uU3VwcG9ydGVkKSB7XG5cdFx0XHRcdC8vIFNldCBpdCB0byBtYW51YWxcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7IGhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSBcIm1hbnVhbFwiIH0sIDkpXG5cdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHRcdFx0aWYgKGV2ZW50LnN0YXRlICYmIFwiemVuc2Nyb2xsWVwiIGluIGV2ZW50LnN0YXRlKSB7XG5cdFx0XHRcdFx0XHR6ZW5zY3JvbGwudG9ZKGV2ZW50LnN0YXRlLnplbnNjcm9sbFkpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCBmYWxzZSlcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWRkIGVkZ2Ugb2Zmc2V0IG9uIGZpcnN0IGxvYWQgaWYgbmVjZXNzYXJ5XG5cdFx0XHQvLyBUaGlzIG1heSBub3Qgd29yayBvbiBJRSAob3Igb2xkZXIgY29tcHV0ZXI/KSBhcyBpdCByZXF1aXJlcyBtb3JlIHRpbWVvdXQsIGFyb3VuZCAxMDAgbXNcblx0XHRcdGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCkge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHQvLyBBZGp1c3RtZW50IGlzIG9ubHkgbmVlZGVkIGlmIHRoZXJlIGlzIGFuIGVkZ2Ugb2Zmc2V0OlxuXHRcdFx0XHRcdHZhciBlZGdlT2Zmc2V0ID0gemVuc2Nyb2xsLnNldHVwKCkuZWRnZU9mZnNldFxuXHRcdFx0XHRcdGlmIChlZGdlT2Zmc2V0KSB7XG5cdFx0XHRcdFx0XHR2YXIgdGFyZ2V0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiI1wiKVsxXSlcblx0XHRcdFx0XHRcdGlmICh0YXJnZXRFbGVtKSB7XG5cdFx0XHRcdFx0XHRcdHZhciB0YXJnZXRZID0gTWF0aC5tYXgoMCwgemVuc2Nyb2xsLmdldFRvcE9mKHRhcmdldEVsZW0pIC0gZWRnZU9mZnNldClcblx0XHRcdFx0XHRcdFx0dmFyIGRpZmYgPSB6ZW5zY3JvbGwuZ2V0WSgpIC0gdGFyZ2V0WVxuXHRcdFx0XHRcdFx0XHQvLyBPbmx5IGRvIHRoZSBhZGp1c3RtZW50IGlmIHRoZSBicm93c2VyIGlzIHZlcnkgY2xvc2UgdG8gdGhlIGVsZW1lbnQ6XG5cdFx0XHRcdFx0XHRcdGlmICgwIDw9IGRpZmYgJiYgZGlmZiA8IDkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIHRhcmdldFkpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIDkpXG5cdFx0XHR9XG5cblx0XHR9LCBmYWxzZSlcblxuXHRcdC8vIEhhbmRsaW5nIGNsaWNrcyBvbiBhbmNob3JzXG5cdFx0dmFyIFJFX25vWmVuc21vb3RoID0gbmV3IFJlZ0V4cChcIihefFxcXFxzKW5vWmVuc21vb3RoKFxcXFxzfCQpXCIpXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdHZhciBhbmNob3IgPSBldmVudC50YXJnZXRcblx0XHRcdHdoaWxlIChhbmNob3IgJiYgYW5jaG9yLnRhZ05hbWUgIT09IFwiQVwiKSB7XG5cdFx0XHRcdGFuY2hvciA9IGFuY2hvci5wYXJlbnROb2RlXG5cdFx0XHR9XG5cdFx0XHQvLyBMZXQgdGhlIGJyb3dzZXIgaGFuZGxlIHRoZSBjbGljayBpZiBpdCB3YXNuJ3Qgd2l0aCB0aGUgcHJpbWFyeSBidXR0b24sIG9yIHdpdGggc29tZSBtb2RpZmllciBrZXlzOlxuXHRcdFx0aWYgKCFhbmNob3IgfHwgZXZlbnQud2hpY2ggIT09IDEgfHwgZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LmFsdEtleSkge1xuXHRcdFx0XHRyZXR1cm5cblx0XHRcdH1cblx0XHRcdC8vIFNhdmUgdGhlIGN1cnJlbnQgc2Nyb2xsaW5nIHBvc2l0aW9uIHNvIGl0IGNhbiBiZSB1c2VkIGZvciBzY3JvbGwgcmVzdG9yYXRpb246XG5cdFx0XHRpZiAoaXNTY3JvbGxSZXN0b3JhdGlvblN1cHBvcnRlZCkge1xuXHRcdFx0XHR2YXIgaGlzdG9yeVN0YXRlID0gaGlzdG9yeS5zdGF0ZSAmJiB0eXBlb2YgaGlzdG9yeS5zdGF0ZSA9PT0gXCJvYmplY3RcIiA/IGhpc3Rvcnkuc3RhdGUgOiB7fVxuXHRcdFx0XHRoaXN0b3J5U3RhdGUuemVuc2Nyb2xsWSA9IHplbnNjcm9sbC5nZXRZKClcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRoaXN0b3J5LnJlcGxhY2VTdGF0ZShoaXN0b3J5U3RhdGUsIFwiXCIpXG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHQvLyBBdm9pZCB0aGUgQ2hyb21lIFNlY3VyaXR5IGV4Y2VwdGlvbiBvbiBmaWxlIHByb3RvY29sLCBlLmcuLCBmaWxlOi8vaW5kZXguaHRtbFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBGaW5kIHRoZSByZWZlcmVuY2VkIElEOlxuXHRcdFx0dmFyIGhyZWYgPSBhbmNob3IuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSB8fCBcIlwiXG5cdFx0XHRpZiAoaHJlZi5pbmRleE9mKFwiI1wiKSA9PT0gMCAmJiAhUkVfbm9aZW5zbW9vdGgudGVzdChhbmNob3IuY2xhc3NOYW1lKSkge1xuXHRcdFx0XHR2YXIgdGFyZ2V0WSA9IDBcblx0XHRcdFx0dmFyIHRhcmdldEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChocmVmLnN1YnN0cmluZygxKSlcblx0XHRcdFx0aWYgKGhyZWYgIT09IFwiI1wiKSB7XG5cdFx0XHRcdFx0aWYgKCF0YXJnZXRFbGVtKSB7XG5cdFx0XHRcdFx0XHQvLyBMZXQgdGhlIGJyb3dzZXIgaGFuZGxlIHRoZSBjbGljayBpZiB0aGUgdGFyZ2V0IElEIGlzIG5vdCBmb3VuZC5cblx0XHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0YXJnZXRZID0gemVuc2Nyb2xsLmdldFRvcE9mKHRhcmdldEVsZW0pXG5cdFx0XHRcdH1cblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHQvLyBCeSBkZWZhdWx0IHRyaWdnZXIgdGhlIGJyb3dzZXIncyBgaGFzaGNoYW5nZWAgZXZlbnQuLi5cblx0XHRcdFx0dmFyIG9uRG9uZSA9IGZ1bmN0aW9uICgpIHsgd2luZG93LmxvY2F0aW9uID0gaHJlZiB9XG5cdFx0XHRcdC8vIC4uLnVubGVzcyB0aGVyZSBpcyBhbiBlZGdlIG9mZnNldCBzcGVjaWZpZWRcblx0XHRcdFx0dmFyIGVkZ2VPZmZzZXQgPSB6ZW5zY3JvbGwuc2V0dXAoKS5lZGdlT2Zmc2V0XG5cdFx0XHRcdGlmIChlZGdlT2Zmc2V0KSB7XG5cdFx0XHRcdFx0dGFyZ2V0WSA9IE1hdGgubWF4KDAsIHRhcmdldFkgLSBlZGdlT2Zmc2V0KVxuXHRcdFx0XHRcdGlmIChpc0hpc3RvcnlTdXBwb3J0ZWQpIHtcblx0XHRcdFx0XHRcdG9uRG9uZSA9IGZ1bmN0aW9uICgpIHsgaGlzdG9yeS5wdXNoU3RhdGUoe30sIFwiXCIsIGhyZWYpIH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0emVuc2Nyb2xsLnRvWSh0YXJnZXRZLCBudWxsLCBvbkRvbmUpXG5cdFx0XHR9XG5cdFx0fSwgZmFsc2UpXG5cblx0fVxuXG5cblx0cmV0dXJuIHplbnNjcm9sbFxuXG5cbn0pKTtcbiIsImltcG9ydCB7IGd1aWRlUmVhY3RzIH0gZnJvbSAnLi9hc2lkZS5qcydcclxuaW1wb3J0IHplbnNjcm9sbCBmcm9tICcuLy4uLy4uL25vZGVfbW9kdWxlcy96ZW5zY3JvbGwvemVuc2Nyb2xsLmpzJ1xyXG4ndXNlIHN0cmljdCdcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRpYWxpemVCdG5zT2ZBY2NlcHRhbmNlKVxyXG5mdW5jdGlvbiBpbml0aWFsaXplQnRuc09mQWNjZXB0YW5jZSAoKSB7XHJcbiAgbGV0IGFjY2VwdGF0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGQtQV9idG4tYmVsdF9idG4tcG9zaXRpb25lcl9idG4nKVxyXG4gIGxldCBhbW91bnQgPSBhY2NlcHRhdGlvbkJ0bi5sZW5ndGhcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XHJcbiAgICBhY2NlcHRhdGlvbkJ0bltpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKGFjY2VwdGF0aW9uQnRuW2ldLmNsYXNzTGlzdC5jb250YWlucygnYmVmb3JlSXRJc0NsaWNrZWQnKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGFjY2VwdGF0aW9uQnRuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2JlZm9yZUl0SXNDbGlja2VkJylcclxuICAgICAgICBhY2NlcHRhdGlvbkJ0bltpXS5jbGFzc0xpc3QuYWRkKCdpdElzQ2xpY2tlZCcpXHJcbiAgICAgICAgc2lnblRoaXNBc0NsaWNrZWQoYWNjZXB0YXRpb25CdG5baV0pXHJcbiAgICAgICAgaW5pdGlhbGl6ZU5leHRTZWN0aW9uKGkpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5pdEFnYWluR3VpZGVUZXh0Rm9yVGhpc1NlY3Rpb24oaSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gc2lnblRoaXNBc0NsaWNrZWQgKGJ0bikge1xyXG4gIGJ0bi5pbm5lclRleHQgPSAnJztcclxufVxyXG5mdW5jdGlvbiBpbml0QWdhaW5HdWlkZVRleHRGb3JUaGlzU2VjdGlvbiAoaSkge1xyXG4gIGd1aWRlUmVhY3RzKGkpO1xyXG59XHJcbmZ1bmN0aW9uIGluaXRpYWxpemVOZXh0U2VjdGlvbiAoaXRlcmF0b3IpIHtcclxuICBsZXQgYWxsT3JuYW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLmNvcnB1c19zZWN0aW9uX2Zvcm1fb3JuYW1lbnQtbWFya2VyJylcclxuICBsZXQgdGhpc09ybmFtZW50ID0gYWxsT3JuYW1lbnRzW2l0ZXJhdG9yXTtcclxuICBsZXQgbmV4dE9ybmFtZW50ID0gYWxsT3JuYW1lbnRzW2l0ZXJhdG9yICsgMV07XHJcbiAgaWYgKGl0ZXJhdG9yPT09MXx8aXRlcmF0b3I9PT0yKXtcclxuICAgIHRoaXNPcm5hbWVudD1hbGxPcm5hbWVudHNbMF07XHJcbiAgICBuZXh0T3JuYW1lbnQ9YWxsT3JuYW1lbnRzWzFdO1xyXG4gIH1cclxuICB0aGlzT3JuYW1lbnQuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pY29ucy9wb2xlLjIuc3ZnJyk7XHJcbiAgdGhpc09ybmFtZW50LmNsYXNzTGlzdC5hZGQoJ2l0SXNQYXNzZWRUaHJvdWdodCcpO1xyXG4gIG5leHRPcm5hbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbiAgLy8gd2luZG93LnNjcm9sbFRvKDAsIG5leHRPcm5hbWVudC5vZmZzZXRUb3ApXHJcbiAgemVuc2Nyb2xsLnRvWSh0aGlzT3JuYW1lbnQub2Zmc2V0VG9wKTtcclxuICBlbmFibGVOZXh0U2VjdGlvbihpdGVyYXRvcik7XHJcbn1cclxuZnVuY3Rpb24gZW5hYmxlTmV4dFNlY3Rpb24gKGl0ZXJhdG9yKSB7XHJcbiAgaXRlcmF0b3IgKz0gMVxyXG4gIGxldCBhbGxTZWN0aW9ucyA9IFtcclxuICAgIHVuZGVmaW5lZCxcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkcycpLFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzIGZpZWxkc2V0JylbMV0sXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHMgZmllbGRzZXQnKVsyXSxcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkLUMnKSxcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkcy0yJylcclxuICBdXHJcbiAgYWxsU2VjdGlvbnNbaXRlcmF0b3JdLmNsYXNzTGlzdC5yZW1vdmUoJ2l0SXNIaWRkZW4nKTtcclxuICBndWlkZVJlYWN0cyhpdGVyYXRvcik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dCdG5PZkFjY2VwdGFuY2UgKGJ0biwgY29udGFpbmVyKSB7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2l0SXNIaWRkZW4nKTtcclxuICBidG4uY2xhc3NMaXN0LmFkZCgnYmVmb3JlSXRJc0NsaWNrZWQnKTtcclxufVxyXG4iLCIndXNlIHN0cmljdCdcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRpYWxpemUpXHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG4gIGxldCBvcHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9zZWxlY3QtbGlzdCBvcHRpb24nXHJcbiAgKVxyXG4gIGxldCBhbW91bnQgPSBvcHRzLmxlbmd0aFxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50OyBpKyspIHtcclxuICAgIGxldCBpdGVtID0gb3B0c1tpXVxyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgc2V0SU1HKGkpXHJcbiAgICAgIGVuYWJsZVN0cmlrZU5hbWVQYXJ0KClcclxuICAgICAgc2V0U3RyaWtlTmFtZVRvRGVzKGkpXHJcbiAgICAgIHNldFBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uKGkpXHJcbiAgICAgIHNldEZvcmNlRGVzKGkpXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5sZXQgb25seU9uY2UgPSAwXHJcblxyXG5mdW5jdGlvbiBlbmFibGVTdHJpa2VOYW1lUGFydCgpIHtcclxuICBvbmx5T25jZSsrXHJcbiAgaWYgKG9ubHlPbmNlID09PSAxKSB7XHJcbiAgICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdHJpa2VOYW1lJylcclxuICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnc3RyaWtlTmFtZScpXHJcbiAgfVxyXG59XHJcblxyXG5pbXBvcnQge2d1aWRlUmVhY3RzfSBmcm9tICcuL2FzaWRlLmpzJztcclxuZnVuY3Rpb24gc2V0UGFydE9mQXR0YWNrRGVzY3JpcHRpb24oaSkge1xyXG4gIGxldCBkZXNQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncCBzcGFuLi0tZGVzX2VwaXRldCcpXHJcbiAgZGVzUGFydC5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKVxyXG4gIGxldCBhcnJheSA9IFtcclxuICAgICdicnV0YWxuZScsXHJcbiAgICAnbmllcHJ6ZXdpZHl3YWxuZScsXHJcbiAgICAnd3nEh3dpY3pvbmUnLFxyXG4gICAgJ25pZXphd29kbmUnLFxyXG4gICAgJ3ByZWN5enlqbmUnLFxyXG4gICAgJ3ptYXNvd2FuZScsXHJcbiAgICAncG9kc3TEmXBuZScsXHJcbiAgICAnd3lyYWNob3dhbmUnLFxyXG4gICAgJ3pkcmFkemllY2tpZScsXHJcbiAgICAnc3phbGXFhGN6ZScsXHJcbiAgICAnb3ByYWNvd2FuZSB3IGxhYm9yYXRvcml1bSBhbGNoZW1pY3pueW0nLFxyXG4gICAgJ25pZXBvd3N0cnp5bWFuZScsXHJcbiAgICAnd8WCYWRjemUnLFxyXG4gICAgJ21yb2N6bmUnLFxyXG4gICAgJ3RhamVtbmUnLFxyXG4gICAgJ3fFm2NpZWvFgmUnLFxyXG4gICAgJ3dzcGllcmFuZSBtb2PEhSBvdGNoxYJhbmknLFxyXG4gICAgJ3ByemVzeWNvbmUgesWCxIUgbW9jxIUnXHJcbiAgXVxyXG4gIGRlc1BhcnQuaW5uZXJUZXh0ID0gJywgJyArIGFycmF5W2ldXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldElNRyhpKSB7XHJcbiAgbGV0IGJlbHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnXHJcbiAgKVtpXVxyXG4gIGxldCBpbWFnID0gYmVsdC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVswXVxyXG4gIGxldCBhdHRyeWIgPSBpbWFnLmdldEF0dHJpYnV0ZSgnc3JjJylcclxuICBsZXQgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLXBsYXRlX2ltZ19pY29uJylcclxuICBpY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgYXR0cnliKVxyXG4gIGxldCBhbGxJTUdzID0gYmVsdC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKS5sZW5ndGhcclxuICBsZXQgc3RhbmRhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1zdGFuZGFydF9pbWdfYmNrZycpXHJcbiAgd2hpbGUgKHN0YW5kYXJ0LnF1ZXJ5U2VsZWN0b3IoJ0lNRycpICE9PSBudWxsKSB7XHJcbiAgICBsZXQgaW1hZ2VUb0RlbCA9IHN0YW5kYXJ0LnF1ZXJ5U2VsZWN0b3IoJ0lNRycpXHJcbiAgICBzdGFuZGFydC5yZW1vdmVDaGlsZChpbWFnZVRvRGVsKVxyXG4gIH1cclxuICBmb3IgKGxldCBqID0gMDsgaiA8IGFsbElNR3M7IGorKykge1xyXG4gICAgaWYgKGogPiAwKSB7XHJcbiAgICAgIGxldCB0aGVJTUcgPSBiZWx0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpW2pdXHJcbiAgICAgIGxldCBzb3VyY2VJTUcgPSB0aGVJTUcuZ2V0QXR0cmlidXRlKCdzcmMnKVxyXG4gICAgICBsZXQgbmV3SU1HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgbmV3SU1HLnNldEF0dHJpYnV0ZSgnc3JjJywgc291cmNlSU1HKVxyXG4gICAgICBzdGFuZGFydC5hcHBlbmRDaGlsZChuZXdJTUcpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmxldCBzZXROZXh0UGFydE9mRm9ybXVsYUZvclRoZUZpcnN0VGltZT0wO1xyXG5mdW5jdGlvbiBzZXRTdHJpa2VOYW1lVG9EZXMoaSkge1xyXG4gIGxldCBpbnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibmF6d2F1ZGVyemVuaWFcIl0nKVxyXG4gIGlucC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBzdHJOYW1lID0gaW5wLnZhbHVlO1xyXG4gICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfbmF6d2EtY2lvc3UnKTtcclxuICAgIGl0ZW0uaW5uZXJUZXh0ID0gc3RyTmFtZSArICcgdG8gbGVnZW5kYXJuZSc7XHJcbiAgICBzaG93QWxsRGVzKCk7XHJcbiAgfSlcclxuICBpbnAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGl0bSA9IGlucC52YWx1ZVxyXG4gICAgaWYgKGl0bS50cmltKCkgIT09ICcnJiZzZXROZXh0UGFydE9mRm9ybXVsYUZvclRoZUZpcnN0VGltZT09PTApIHtcclxuICAgICAgbGV0IHN0ck5hbWUgPSBpbnAudmFsdWVcclxuICAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfbmF6d2EtY2lvc3UnKVxyXG4gICAgICBpdGVtLmlubmVyVGV4dCA9IHN0ck5hbWUgKyAnIHRvIGxlZ2VuZGFybmUnXHJcbiAgICAgIHNob3dBbGxEZXMoKTtcclxuICAgICAgc2V0TmV4dFBhcnRPZkZvcm11bGEoKTtcclxuICAgICAgc2V0TmV4dFBhcnRPZkZvcm11bGFGb3JUaGVGaXJzdFRpbWU9MTtcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRGb3JjZURlcyhpKSB7XHJcbiAgbGV0IGJlbHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnXHJcbiAgKVtpXTtcclxuICBsZXQgSU1HcyA9IGJlbHQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylcclxuICBsZXQgaXRlciA9IElNR3MubGVuZ3RoXHJcbiAgbGV0IHN0cm5nID0gW11cclxuICBmb3IgKGxldCBqID0gMDsgaiA8IGl0ZXI7IGorKykge1xyXG4gICAgbGV0IElNRyA9IElNR3Nbal1cclxuICAgIGxldCBhdHRyeWIgPSBJTUcuZ2V0QXR0cmlidXRlKCdzcmMnKVxyXG4gICAgaWYgKGogIT09IDApIHtcclxuICAgICAgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL2Jyb24tYmFyYmEuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ2RvZGF0a293xIUgbW9jxIUgdWRlcnplbmlvd8SFJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy9icm9uLWN6YXIuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ2RvZGF0a293xIUgbW9jxIUgY3phcm5va3NpxJlza8SFJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy9icm9uLXN0cnouc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ2RvZGF0a293eW0ga3Vuc3p0ZW0gc3RyemVsZWNraW0nKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL2Jyb24tc3phbC5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnZG9kYXRrb3d5bSBzemFsZcWEc3R3ZW0nKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL2Jyb24temRyYS5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnbmllc3BvZHppYW55bSB6ZHJhZGxpd3ltIGNpb3NlbScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvenl3LW9naWVuLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCfFvHl3aW/FgmVtIG9nbmlhJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy96eXctcm96a2xhZC5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnxbx5d2lvxYJlbSByb3prxYJhZHUnKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL3p5dy13b2Quc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ8W8eXdpb8WCZW0gd29keScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvenl3LXptaWFuYS5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnxbx5d2lvxYJlbSB6bWlhbnknKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL3p5dy16eXdpYS5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnxbx5d2lvxYJlbSDFvHl3aWknKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ3fFgmFzbsSFIG3EhWRyb8WbY2nEhSDFvHl3aW/FgsOzdyBpIHRhbGVudMOzdycpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgbGV0IHN0cmluZ1RvU2V0ID0gc3Rybmcuam9pbignLCAnKTtcclxuICBsZXQgenl3RGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3p5d2lvbCcpO1xyXG4gIGxldCBpbWlEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfaW1pZScpO1xyXG4gIGxldCBwcnpEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfcHJ6eWRvbWVrJyk7XHJcbiAgbGV0IHpkYURlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc196ZGFuaWUnKTtcclxuICB6eXdEZXMuY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJyk7XHJcbiAgaW1pRGVzLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpO1xyXG4gIHByekRlcy5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKTtcclxuICB6ZGFEZXMuY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJyk7XHJcbiAgenl3RGVzLmlubmVyVGV4dCA9IHN0cmluZ1RvU2V0ICsgJy4nO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXROYW1lVG9EZXMoKSB7XHJcbiAgbGV0IGlucCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJpbWllXCJdJylcclxuICBsZXQgbmFtID0gaW5wLnZhbHVlXHJcbiAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfaW1pZScpXHJcbiAgaXRlbS5pbm5lclRleHQgPSBuYW0gKyAnICc7XHJcbiAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXROaWNrbmFtZVRvRGVzKCkge1xyXG4gIGxldCBpbnBCID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByenlkb21la1wiXScpXHJcbiAgbGV0IHN1cm5hbSA9IGlucEIudmFsdWVcclxuICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19wcnp5ZG9tZWsnKVxyXG4gIGl0ZW0uaW5uZXJUZXh0ID0gc3VybmFtO1xyXG4gIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJylcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U2VudGVuY2VUb0RlcygpIHtcclxuICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc196ZGFuaWUnKVxyXG4gIGl0ZW0uaW5uZXJUZXh0ID0gJyB3em1hY25pYSBzd8OzaiBhdGFrICdcclxuICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dBbGxEZXMoKSB7XHJcbiAgbGV0IGFsbERlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlcycpXHJcbiAgYWxsRGVzLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldE5leHRQYXJ0T2ZGb3JtdWxhKCkge1xyXG4gIGxldCB0ZXh0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJuYXp3YXVkZXJ6ZW5pYVwiXScpO1xyXG4gIGxldCBhcmVhVmFsdWUgPSAodGV4dEFyZWEudmFsdWUpLnRyaW0oKTtcclxuICBpZiAoYXJlYVZhbHVlICE9PSAnJykge1xyXG4gICAgZW5hYmxlTmV4dFBhcnRPZkZvcm0oKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuYWJsZU5leHRQYXJ0T2ZGb3JtKCkge1xyXG4gIGxldCBuZXh0UGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkLUMnKTtcclxuICBuZXh0UGFydC5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbiAgbGV0IGFsbE9ybmFtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZy5jb3JwdXNfc2VjdGlvbl9mb3JtX29ybmFtZW50LW1hcmtlcicpO1xyXG4gIGxldCB0aGlzT3JuYW1lbnQgPSBhbGxPcm5hbWVudHNbMV07XHJcbiAgdGhpc09ybmFtZW50LnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaWNvbnMvcG9sZS4yLnN2ZycpO1xyXG4gIHRoaXNPcm5hbWVudC5jbGFzc0xpc3QuYWRkKCdpdElzUGFzc2VkVGhyb3VnaHQnKTtcclxuICBsZXQgbmV4dE9ybmFtZW50ID0gYWxsT3JuYW1lbnRzWzJdO1xyXG4gIG5leHRPcm5hbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbiAgdGhpc09ybmFtZW50LnN0eWxlLmJveFNpemU9XCJib3JkZXItYm94XCI7XHJcbiAgdGhpc09ybmFtZW50LnN0eWxlLnpJbmRleD1cIjFcIjtcclxuICBuZXh0UGFydC5zdHlsZS56SW5kZXg9XCIyXCI7XHJcbiAgZ3VpZGVSZWFjdHMoNCk7XHJcbn0iLCJpbXBvcnQge1xyXG4gIHNob3dCdG5PZkFjY2VwdGFuY2VcclxufSBmcm9tICcuL2Zvcm1faW5pdGlhbGl6ZU5leHRTZWN0aW9uLmpzJ1xyXG5pbXBvcnQge1xyXG4gIHNldE5hbWVUb0Rlc1xyXG59IGZyb20gJy4vYXRha2ktc2V0LXR4dC5qcydcclxuaW1wb3J0IHtcclxuICBzZXROaWNrbmFtZVRvRGVzXHJcbn0gZnJvbSAnLi9hdGFraS1zZXQtdHh0LmpzJ1xyXG5pbXBvcnQge1xyXG4gIHNldFNlbnRlbmNlVG9EZXNcclxufSBmcm9tICcuL2F0YWtpLXNldC10eHQuanMnXHJcbid1c2Ugc3RyaWN0J1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gIGluaXRVc2VyRmxvd1ZpYVNlY3Rpb25fc2VsZWN0Tm9kZXNUb1RoaXNQcm9jZXNzKClcclxufSlcclxuXHJcbmZ1bmN0aW9uIGluaXRVc2VyRmxvd1ZpYVNlY3Rpb25fc2VsZWN0Tm9kZXNUb1RoaXNQcm9jZXNzKCkge1xyXG4gIGxldCBub2RlcyA9IFtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJpbWllXCJdJyksXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJ6eWRvbWVrXCJdJyksXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiemF3b2xhbmllXCJdJylcclxuICBdXHJcbiAgbm9kZXMuZm9yRWFjaCgobm9kZSwgaWR4KSA9PiBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBsZXQgc2VjdGlvbkNvbXBsZXRlZCA9IGluaXRVc2VyRmxvd1RvTmV4dFNlY3Rpb25fY2hlY2tJZlRoaXNTZWN0aW9uSXNDb21wbGV0ZWQobm9kZXMpXHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgJiYgc2VjdGlvbkNvbXBsZXRlZCAhPT0gdHJ1ZSkge1xyXG4gICAgICBpbml0VXNlckZsb3dWaWFTZWN0aW9uX2dvVG9OZXh0Tm9kZShub2RlLCBpZHgsIG5vZGVzKVxyXG4gICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAxMyAmJiBzZWN0aW9uQ29tcGxldGVkID09PSB0cnVlKSB7XHJcbiAgICAgIG5vZGUuYmx1cigpXHJcbiAgICAgIGluaXRVc2VyRmxvd1RvTmV4dFNlY3Rpb25fc2hvd0J0bk9mQWNjZXB0YW5jZSgpXHJcbiAgICB9XHJcbiAgfSkpXHJcbiAgbm9kZXMuZm9yRWFjaCgobm9kZSwgaWR4KSA9PiBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgbGV0IHNlY3Rpb25Db21wbGV0ZWQgPSBpbml0VXNlckZsb3dUb05leHRTZWN0aW9uX2NoZWNrSWZUaGlzU2VjdGlvbklzQ29tcGxldGVkKG5vZGVzKVxyXG4gICAgaWYgKHNlY3Rpb25Db21wbGV0ZWQgPT09IHRydWUpIHtcclxuICAgICAgaW5pdFVzZXJGbG93VG9OZXh0U2VjdGlvbl9zaG93QnRuT2ZBY2NlcHRhbmNlKClcclxuICAgIH1cclxuICB9KSlcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFVzZXJGbG93VmlhU2VjdGlvbl9nb1RvTmV4dE5vZGUobm9kZSwgaWR4LCBub2Rlcykge1xyXG4gIG5vZGUuYmx1cigpXHJcbiAgaWYgKGlkeCA8IDIpIHtcclxuICAgIG5vZGVzW2lkeCArIDFdLmZvY3VzKClcclxuICB9IGVsc2UgaWYgKGlkeCA9PT0gMikge1xyXG4gICAgbm9kZXNbMF0uZm9jdXMoKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFVzZXJGbG93VG9OZXh0U2VjdGlvbl9jaGVja0lmVGhpc1NlY3Rpb25Jc0NvbXBsZXRlZChub2Rlcykge1xyXG4gIGxldCBhcnIgPSBbZmFsc2UsIGZhbHNlLCBmYWxzZV1cclxuICBub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlLCBpZHgpIHtcclxuICAgIGlmIChub2RlLnZhbHVlLnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgYXJyW2lkeF0gPSBmYWxzZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXJyW2lkeF0gPSB0cnVlXHJcbiAgICB9XHJcbiAgfSlcclxuICBpZiAoYXJyLmluZGV4T2YoZmFsc2UpID09PSAtMSkge1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG59XHJcbmxldCBjb250cm9sbGVyID0gMDtcclxuXHJcbmZ1bmN0aW9uIGluaXRVc2VyRmxvd1RvTmV4dFNlY3Rpb25fc2hvd0J0bk9mQWNjZXB0YW5jZSgpIHtcclxuICBpZiAoY29udHJvbGxlciA9PT0gMCkge1xyXG4gICAgbGV0IGJ0bkNvbnRhaW5lckZvclRoaXNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGQtQV9idG4tYmVsdF9idG4tcG9zaXRpb25lci5maXJzdFNlY3Rpb25CdG4nKVxyXG4gICAgbGV0IGJ0bk9mVGhpc1NlY3Rpb24gPSBidG5Db250YWluZXJGb3JUaGlzU2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZC1BX2J0bi1iZWx0X2J0bi1wb3NpdGlvbmVyX2J0bicpXHJcbiAgICBzaG93QnRuT2ZBY2NlcHRhbmNlKGJ0bk9mVGhpc1NlY3Rpb24sIGJ0bkNvbnRhaW5lckZvclRoaXNTZWN0aW9uKVxyXG4gICAgc2V0Q3VycmVudERhdGFUb0F2YXRhckRlc2NyaXB0aW9uKCk7XHJcbiAgICBjb250cm9sbGVyID0gMTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEN1cnJlbnREYXRhVG9BdmF0YXJEZXNjcmlwdGlvbigpIHtcclxuICBzZXROYW1lVG9EZXMoKVxyXG4gIHNldE5pY2tuYW1lVG9EZXMoKVxyXG4gIHNldFNlbnRlbmNlVG9EZXMoKVxyXG59IiwiJ3VzZSBzdHJpY3QnO1xyXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0VG9BcnJheShvYmplY3QpIHtcclxuICAgIGxldCBhbW91bnQgPSBvYmplY3QubGVuZ3RoO1xyXG4gICAgbGV0IGFycmF5ID1bXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpPGFtb3VudDsgaSsrKXtcclxuICAgICAgICBhcnJheS5wdXNoKG9iamVjdFtpXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbn0iLCJcInVzZSBzdHJpY3RcIjtcclxuaW1wb3J0IGl0ZXJhdG9yT2ZQb2ludHNMZWZ0IGZyb20gXCIuL2FzaWRlLmpzXCI7XHJcbmltcG9ydCB7IHNob3dCdG5PZkFjY2VwdGFuY2UgfSBmcm9tIFwiLi9mb3JtX2luaXRpYWxpemVOZXh0U2VjdGlvbi5qc1wiO1xyXG5pbXBvcnQgeyBvYmplY3RUb0FycmF5IH0gZnJvbSBcIi4vb2JqZWN0LXRvLWFycmF5LmpzXCI7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGluaXRpYWxpemVBdHRhY2tzUGFydCk7XHJcbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVBdHRhY2tzKGkpIHtcclxuICBsZXQgYXR0YWNrcyA9IG9iamVjdFRvQXJyYXkoXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICBcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyXCJcclxuICAgIClcclxuICApO1xyXG4gIGF0dGFja3MuZm9yRWFjaChmdW5jdGlvbihhdHRhY2ssIGlkeCkge1xyXG4gICAgYXR0YWNrLmNsYXNzTGlzdC5yZW1vdmUoXCJlbmFibGVkXCIpO1xyXG4gICAgbGV0IG9wdGlvbnMgPSBvYmplY3RUb0FycmF5KGF0dGFjay5xdWVyeVNlbGVjdG9yQWxsKFwib3B0aW9uXCIpKTtcclxuICAgIGF0dGFjay5xdWVyeVNlbGVjdG9yKFwic2VsZWN0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHN5bmNocm9uaXplQmFja2dyb3VuZHNPbkNoYW5nZShhdHRhY2ssIG9wdGlvbnMpO1xyXG4gICAgfSk7XHJcbiAgICBhdHRhY2sucXVlcnlTZWxlY3RvcihcInNlbGVjdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgc3luY2hyb25pemVCYWNrZ3JvdW5kc09uQmx1cihcclxuICAgICAgICBhdHRhY2ssXHJcbiAgICAgICAgYXR0YWNrLnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RcIiksXHJcbiAgICAgICAgb3B0aW9uc1xyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgICBvcHRpb25zLmZvckVhY2goZnVuY3Rpb24ob3B0aW9uKSB7XHJcbiAgICAgIGlmIChvcHRpb24uc2VsZWN0ZWQgPT09IHRydWUpIHtcclxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBvYmplY3RUb0FycmF5KFxyXG4gICAgICBhdHRhY2sucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICBcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHRcIlxyXG4gICAgICApXHJcbiAgICApLmZvckVhY2goZnVuY3Rpb24oYmVsdCkge1xyXG4gICAgICBiZWx0LmNsYXNzTGlzdC5yZW1vdmUoXCJKU29uQmx1clwiLCBcIkpTb25TZWxlY3RcIik7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBhdHRhY2tzW2ldLmNsYXNzTGlzdC5hZGQoXCJlbmFibGVkXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzeW5jaHJvbml6ZUJhY2tncm91bmRzT25DaGFuZ2Uobm9kZSwgY2hpbGRyZW4pIHtcclxuICBsZXQgYmVsdHMgPSBvYmplY3RUb0FycmF5KFxyXG4gICAgbm9kZS5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICBcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHRcIlxyXG4gICAgKVxyXG4gICk7XHJcbiAgYmVsdHMuZm9yRWFjaChiZWx0ID0+IGJlbHQuY2xhc3NMaXN0LnJlbW92ZShcIkpTb25TZWxlY3RcIiwgXCJKU29uQmx1clwiKSk7XHJcbiAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihvcHQsIGlkeCkge1xyXG4gICAgaWYgKG9wdC52YWx1ZSA9PT0gbm9kZS5xdWVyeVNlbGVjdG9yKFwic2VsZWN0XCIpLnZhbHVlKSB7XHJcbiAgICAgIGJlbHRzW2lkeF0uY2xhc3NMaXN0LmFkZChcIkpTb25TZWxlY3RcIik7XHJcbiAgICAgIGluaXRVc2VyRmxvd1RvTmV4dFNlY3Rpb25fc2hvd0J0bk9mQWNjZXB0YW5jZSgpO1xyXG4gICAgICBpdGVyYXRvck9mUG9pbnRzTGVmdC5pdGVyYXRvcihub2RlLCBpZHgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHN5bmNocm9uaXplQmFja2dyb3VuZHNPbkJsdXIobm9kZSwgbGlzdCwgb3B0aW9ucykge1xyXG4gIG9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbihvcHRpb24sIGlkeCkge1xyXG4gICAgaWYgKG9wdGlvbi52YWx1ZSA9PT0gbGlzdC52YWx1ZSkge1xyXG4gICAgICBub2RlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICBcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHRcIlxyXG4gICAgICAgIClcclxuICAgICAgICBbaWR4XS5jbGFzc0xpc3QuYWRkKFwiSlNvbkJsdXJcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmxldCBjb250cm9sbGVyID0gMDtcclxuXHJcbmZ1bmN0aW9uIGluaXRVc2VyRmxvd1RvTmV4dFNlY3Rpb25fc2hvd0J0bk9mQWNjZXB0YW5jZSgpIHtcclxuICBpZiAoY29udHJvbGxlciA9PT0gMCkge1xyXG4gICAgbGV0IGJ0bkNvbnRhaW5lckZvclRoaXNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZC1BX2J0bi1iZWx0X2J0bi1wb3NpdGlvbmVyLnRoaXJkU2VjdGlvbkJ0blwiXHJcbiAgICApO1xyXG4gICAgbGV0IGJ0bk9mVGhpc1NlY3Rpb24gPSBidG5Db250YWluZXJGb3JUaGlzU2VjdGlvbi5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkLUFfYnRuLWJlbHRfYnRuLXBvc2l0aW9uZXJfYnRuXCJcclxuICAgICk7XHJcbiAgICBzaG93QnRuT2ZBY2NlcHRhbmNlKGJ0bk9mVGhpc1NlY3Rpb24sIGJ0bkNvbnRhaW5lckZvclRoaXNTZWN0aW9uKTtcclxuICAgIGNvbnRyb2xsZXIgPSAxO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZUF0dGFja3NQYXJ0KCkge1xyXG4gIG9iamVjdFRvQXJyYXkoXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICBcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyXCJcclxuICAgIClcclxuICApLmZvckVhY2goZnVuY3Rpb24oY29udGFpbmVyKSB7XHJcbiAgICAvL29uIHNlbGVjdC1saXN0IG9wdGlvbiBtb3VzZSBob3ZlciBvdmVyXHJcbiAgICBvYmplY3RUb0FycmF5KGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwib3B0aW9uXCIpKS5mb3JFYWNoKGZ1bmN0aW9uKFxyXG4gICAgICBvcHRpb24sXHJcbiAgICAgIGlkeFxyXG4gICAgKSB7XHJcbiAgICAgIG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBoaWdobGlnaHRCYWNrZ3JvdW5kKGNvbnRhaW5lciwgZXZlbnQsIGlkeCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGhpZ2hsaWdodEJhY2tncm91bmQoY29udGFpbmVyLCBldmVudCwgaWR4KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIC8vb3B0aW9uLWxpa2UgZGl2XHJcbiAgICBvYmplY3RUb0FycmF5KFxyXG4gICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICBcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHRcIlxyXG4gICAgICApXHJcbiAgICApLmZvckVhY2goZnVuY3Rpb24oYmVsdCwgaWR4KSB7XHJcbiAgICAgIGJlbHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGhpZ2hsaWdodEJhY2tncm91bmQoY29udGFpbmVyLCBldmVudCwgaWR4KTtcclxuICAgICAgfSk7XHJcbiAgICAgIGJlbHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgaGlnaGxpZ2h0QmFja2dyb3VuZChjb250YWluZXIsIGV2ZW50LCBpZHgpO1xyXG4gICAgICB9KTtcclxuICAgICAgYmVsdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBsZXQgY2hhbmdlRXYgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcclxuICAgICAgICBjaGFuZ2VFdi5pbml0RXZlbnQoJ2NoYW5nZScpO1xyXG4gICAgICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwib3B0aW9uXCIpW2lkeF0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwic2VsZWN0XCIpLmRpc3BhdGNoRXZlbnQoY2hhbmdlRXYpO1xyXG4gICAgICAgLy8gc3luY2hyb25pemVCYWNrZ3JvdW5kc09uQ2hhbmdlKGNvbnRhaW5lciwgb2JqZWN0VG9BcnJheShjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvblwiKSkpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWdobGlnaHRCYWNrZ3JvdW5kKGNvbnRhaW5lciwgZXZlbnQsIGlkeCkge1xyXG4gIGlmIChldmVudC50eXBlID09PSBcIm1vdXNlb3ZlclwiKSB7XHJcbiAgICBjb250YWluZXJcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0XCJcclxuICAgICAgKVxyXG4gICAgICBbaWR4XS5jbGFzc0xpc3QuYWRkKFwiSlNvbkhvdmVyXCIpO1xyXG4gICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb25cIilbaWR4XS5jbGFzc0xpc3QuYWRkKFwiSlNvbkhvdmVyXCIpO1xyXG4gIH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gXCJtb3VzZW91dFwiKSB7XHJcbiAgICBjb250YWluZXJcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0XCJcclxuICAgICAgKVxyXG4gICAgICBbaWR4XS5jbGFzc0xpc3QucmVtb3ZlKFwiSlNvbkhvdmVyXCIpO1xyXG4gICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb25cIilbaWR4XS5jbGFzc0xpc3QucmVtb3ZlKFwiSlNvbkhvdmVyXCIpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gICAgc2hvd0J0bk9mQWNjZXB0YW5jZVxyXG59IGZyb20gJy4vZm9ybV9pbml0aWFsaXplTmV4dFNlY3Rpb24uanMnO1xyXG5pbXBvcnQge1xyXG4gICAgb2JqZWN0VG9BcnJheVxyXG59IGZyb20gJy4vb2JqZWN0LXRvLWFycmF5LmpzJztcclxuaW1wb3J0IHtcclxuICAgIGVuYWJsZUF0dGFja3NcclxufSBmcm9tICcuL2Zvcm1fc2VjdGlvbi10aHJlZS5qcyc7XHJcbid1c2Ugc3RyaWN0J1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgaW5pdFVzZXJGbG93VmlhU2VjdGlvbl9zZWxlY3ROb2Rlc1RvVGhpc1Byb2Nlc3MoKTtcclxufSlcclxuXHJcbmZ1bmN0aW9uIGluaXRVc2VyRmxvd1ZpYVNlY3Rpb25fc2VsZWN0Tm9kZXNUb1RoaXNQcm9jZXNzKCkge1xyXG4gICAgbGV0IGF2YXRhck9iamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfcmFkaW8tbGFiLWNvbnRhaW5lcicpO1xyXG4gICAgbGV0IGF2YXRhcnMgPSBvYmplY3RUb0FycmF5KGF2YXRhck9iamVjdHMpO1xyXG4gICAgYXZhdGFycy5mb3JFYWNoKChpdGVtLCBpZHgpID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgYXZhdGFySXNDbGlja2VkKGl0ZW0sIGF2YXRhcnMsIGlkeCk7XHJcbiAgICB9KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF2YXRhcklzQ2xpY2tlZChhdmF0YXIsIGF2YXRhcnMsIGlkeCkge1xyXG4gICAgYXZhdGFycy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpc0NsaWNrZWQnKSk7XHJcbiAgICBsZXQgYXYgPSBhdmF0YXIucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuICAgIGF2LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgYXZhdGFyLmNsYXNzTGlzdC5hZGQoJ2lzQ2xpY2tlZCcpO1xyXG4gICAgaW5pdFVzZXJGbG93VG9OZXh0U2VjdGlvbl9zaG93QnRuT2ZBY2NlcHRhbmNlKGlkeCk7XHJcbn1cclxubGV0IGNvbnRyb2xsZXIgPSAwO1xyXG5cclxuZnVuY3Rpb24gaW5pdFVzZXJGbG93VG9OZXh0U2VjdGlvbl9zaG93QnRuT2ZBY2NlcHRhbmNlKGlkeCkge1xyXG4gICAgZW5hYmxlQXR0YWNrcyhpZHgpO1xyXG4gICAgaWYgKGNvbnRyb2xsZXIgPT09IDApIHtcclxuICAgICAgICBsZXQgYnRuQ29udGFpbmVyRm9yVGhpc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZC1BX2J0bi1iZWx0X2J0bi1wb3NpdGlvbmVyLnNlY29uZFNlY3Rpb25CdG4nKVxyXG4gICAgICAgIGxldCBidG5PZlRoaXNTZWN0aW9uID0gYnRuQ29udGFpbmVyRm9yVGhpc1NlY3Rpb24ucXVlcnlTZWxlY3RvcignLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGQtQV9idG4tYmVsdF9idG4tcG9zaXRpb25lcl9idG4nKVxyXG4gICAgICAgIHNob3dCdG5PZkFjY2VwdGFuY2UoYnRuT2ZUaGlzU2VjdGlvbiwgYnRuQ29udGFpbmVyRm9yVGhpc1NlY3Rpb24pXHJcbiAgICAgICAgY29udHJvbGxlciA9IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLypmdW5jdGlvbiBpbml0VXNlckZsb3dWaWFTZWN0aW9uX3NlbGVjdE5vZGVzVG9UaGlzUHJvY2VzcyAoKSB7XHJcbiAgbGV0IG5vZGVzID0gW1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cImtsYXNhXCJdJyksXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3RbbmFtZT1cInVkZXJ6ZW5pZVwiXScpLFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cIm5hendhdWRlcnplbmlhXCJdJylcclxuICBdXHJcbiAgaW5pdFVzZXJGbG93VmlhU2VjdGlvbl9nb1RvTmV4dE5vZGUobm9kZXMpO1xyXG4gIC8vbm9kZXNbMl0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgLy9sZXQgYnRuQ29udGFpbmVyRm9yVGhpc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZC1BX2J0bi1iZWx0X2J0bi1wb3NpdGlvbmVyLnNlY29uZFNlY3Rpb25CdG4nKVxyXG4gICAgLy9sZXQgYnRuT2ZUaGlzU2VjdGlvbiA9IGJ0bkNvbnRhaW5lckZvclRoaXNTZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkLUFfYnRuLWJlbHRfYnRuLXBvc2l0aW9uZXJfYnRuJylcclxuICAgLy8gc2hvd0J0bk9mQWNjZXB0YW5jZShidG5PZlRoaXNTZWN0aW9uLCBidG5Db250YWluZXJGb3JUaGlzU2VjdGlvbilcclxuICAvL30pXHJcbn1cclxuZnVuY3Rpb24gaW5pdFVzZXJGbG93VmlhU2VjdGlvbl9nb1RvTmV4dE5vZGUobm9kZXMpe1xyXG4gICAgbGV0IGFtb3VudCA9IG5vZGVzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGk9MDsgaTxhbW91bnQ7IGkrKyl7XHJcbiAgICAgICAgbGV0IG5vZGVTZXQgPSBub2Rlc1tpXTtcclxuICAgICAgICBsZXQgb3B0SXRlcmF0b3IgPSBub2RlU2V0Lmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBqPTA7IGo8b3B0SXRlcmF0b3I7IGorKyl7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBub2RlU2V0W2pdO1xyXG4gICAgICAgICAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGdvVG9OZXh0Tm9kZShub2RlcywgaSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4qLyIsImltcG9ydCBpdGVyYXRvck9mUG9pbnRzTGVmdCBmcm9tICcuL2FzaWRlLmpzJztcclxuJ3VzZSBzdHJpY3QnO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdCk7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgbGV0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHMtMl9maWVsZHNldC1kX2NvbnRhaW5lcl9hdHJ5YiAuLS1iZWx0X2ljb24tY29udGFpbmVyJyk7XHJcbiAgICBsZXQgYmVsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHMtMl9maWVsZHNldC1kX2NvbnRhaW5lcl9hdHJ5YiAuLS1iZWx0X2JvZHktY29udGFpbmVyX2JvZHknKTtcclxuICAgIGxldCBpdGVyID0gYnRucy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXI7IGkrKykge1xyXG4gICAgICAgIGlmIChpID4gLTEpIHtcclxuICAgICAgICAgICAgbGV0IGF0dHJ5YiA9IGJ0bnNbaV07XHJcbiAgICAgICAgICAgIGxldCBiZWx0ID0gYmVsdHNbaV07XHJcbiAgICAgICAgICAgIGF0dHJ5Yi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVyYXRvck9mUG9pbnRzTGVmdC5sZWZ0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFBvaW50KGJlbHQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUG9pbnQoYmVsdCkge1xyXG4gICAgbGV0IElNRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0lNRycpO1xyXG4gICAgSU1HLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2ljb25zL2lrb25hLXBvdGVnLnN2ZycpO1xyXG4gICAgYmVsdC5hcHBlbmRDaGlsZChJTUcpO1xyXG4gICAgaXRlcmF0b3JPZlBvaW50c0xlZnQubGVmdC0tO1xyXG4gICAgaXRlcmF0b3JPZlBvaW50c0xlZnQuZXF1YWxpemF0b3IoKTtcclxuICAgIElNRy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkZWxldGVUaGlzSU1HKElNRylcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVRoaXNJTUcoeCkge1xyXG4gICAgeC5yZW1vdmUoKTtcclxuICAgIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0LmxlZnQrKztcclxuICAgIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0LmVxdWFsaXphdG9yKCk7XHJcbn0iLCJpbXBvcnQge2d1aWRlUmVhY3RzfSBmcm9tICcuL2FzaWRlLmpzJztcclxuXCJ1c2Ugc3RyaWN0XCI7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGluaXRpYWxpemVUaGlzU2VjdGlvbik7XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplVGhpc1NlY3Rpb24oKSB7XHJcbiAgICBsZXQgbGlzdEEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzZXQtYyAjemFzbG9uYVwiXHJcbiAgICApO1xyXG4gICAgbGV0IGxpc3RCID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc2V0LWMgI3BhbmNlcnpcIlxyXG4gICAgKTtcclxuICAgIGxldCBpbWFnZXNBID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICBcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc2V0LWNfaW1nc19pbWcuYVwiXHJcbiAgICApO1xyXG4gICAgbGV0IGltYWdlc0IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgIFwiLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzZXQtY19pbWdzX2ltZy5iXCJcclxuICAgICk7XHJcbiAgICBsZXQgb3B0c0EgPSBsaXN0QS5xdWVyeVNlbGVjdG9yQWxsKFwib3B0aW9uXCIpO1xyXG4gICAgbGV0IG9wdHNCID0gbGlzdEIucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvblwiKTtcclxuICAgIGR5bmFtaXplVGhpc0xpc3QobGlzdEEsIG9wdHNBLCBpbWFnZXNBLCBsaXN0Qik7XHJcbiAgICBkeW5hbWl6ZVRoaXNMaXN0KGxpc3RCLCBvcHRzQiwgaW1hZ2VzQiwgbGlzdEEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkeW5hbWl6ZVRoaXNMaXN0KGxpc3QsIG9wdHMsIGltYWdlcywgb3RoZXJMaXN0KSB7XHJcbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IGxpc3QudmFsdWU7XHJcbiAgICAgICAgbGV0IGl0ZXIgPSBvcHRzLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGl0ZXIgLSAxOyBqKyspIHtcclxuICAgICAgICAgICAgaW1hZ2VzW2pdLmNsYXNzTGlzdC5hZGQoXCJpdElzVW5zZWxlY3RlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVyOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG9wdCA9IG9wdHNbaV07XHJcbiAgICAgICAgICAgIGxldCBvcHRWYWx1ZSA9IG9wdC52YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBvcHRWYWx1ZSAmJiBpICE9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZXNbaV0uY2xhc3NMaXN0LnJlbW92ZShcIml0SXNVbnNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVuYWJsZU5leHRGb3JtUGFydChsaXN0LCBvdGhlckxpc3QpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuYWJsZU5leHRGb3JtUGFydChsaXN0LCBvdGhlckxpc3QpIHtcclxuICAgIGxldCBhID0gbGlzdC52YWx1ZTtcclxuICAgIGxldCBiID0gb3RoZXJMaXN0LnZhbHVlO1xyXG4gICAgaWYgKGEgIT09IFwiXCIgJiYgYiAhPT0gXCJcIikge1xyXG4gICAgICAgIGxldCBuZXh0UGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkcy0yJyk7XHJcbiAgICAgICAgbmV4dFBhcnQuY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0hpZGRlbicpO1xyXG4gICAgICAgIGxldCBhbGxPcm5hbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcuY29ycHVzX3NlY3Rpb25fZm9ybV9vcm5hbWVudC1tYXJrZXInKTtcclxuICAgICAgICBsZXQgdGhpc09ybmFtZW50ID0gYWxsT3JuYW1lbnRzWzJdO1xyXG4gICAgICAgIHRoaXNPcm5hbWVudC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ljb25zL3BvbGUuMi5zdmcnKTtcclxuICAgICAgICB0aGlzT3JuYW1lbnQuY2xhc3NMaXN0LmFkZCgnaXRJc1Bhc3NlZFRocm91Z2h0Jyk7XHJcbiAgICAgICAgbGV0IG5leHRPcm5hbWVudCA9IGFsbE9ybmFtZW50c1szXTtcclxuICAgICAgICBuZXh0T3JuYW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0hpZGRlbicpO1xyXG4gICAgICAgIGd1aWRlUmVhY3RzKDUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IGl0ZXJhdG9yT2ZQb2ludHNMZWZ0IGZyb20gJy4vYXNpZGUuanMnO1xyXG5pbXBvcnQge2d1aWRlUmVhY3RzfSBmcm9tICcuL2FzaWRlLmpzJztcclxuJ3VzZSBzdHJpY3QnO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdGlhbGl6ZVRoaXNTZWxlY3QpXHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplVGhpc1NlbGVjdCgpIHtcclxuICAgIGxldCBvcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzLTJfZmllbGRzZXQtZF9jb250YWluZXJfbW9jZScpO1xyXG4gICAgbGV0IGl0ZXIgPSBvcHRpb25zLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcjsgaSsrKSB7XHJcbiAgICAgICAgbGV0IG9wdCA9IG9wdGlvbnNbaV07XHJcbiAgICAgICAgb3B0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpdElzQ2xpY2tlZChvcHQsIG9wdGlvbnMsIGl0ZXIsIGkpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gaXRJc0NsaWNrZWQob3B0LCBvcHRzLCBpdGVyLCBpKSB7XHJcbiAgICBsZXQgY2hlY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cIm1vYy1waWV0bm9cIl0nKTtcclxuICAgIGxldCBjb3N0T2ZUaGlzID0gWzEsMiwyLDEsMywxXTtcclxuICAgIGlmIChjaGVja3NbaV0uY2hlY2tlZD09PXRydWUpe1xyXG4gICAgICAgIGNoZWNrc1tpXS5jaGVja2VkPWZhbHNlO1xyXG4gICAgICAgIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0Lml0ZXJhdG9yQihjb3N0T2ZUaGlzW2ldKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGNoZWNrc1tpXS5jaGVja2VkPXRydWU7XHJcbiAgICAgICAgaXRlcmF0b3JPZlBvaW50c0xlZnQuZGVsZXRhdG9yQihjb3N0T2ZUaGlzW2ldKTtcclxuICAgICAgICBndWlkZVJlYWN0cyg2KTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgaXRlcjsgaisrKSB7XHJcbiAgICAgICAgaWYgKGNoZWNrc1tqXS5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIG9wdHNbal0uY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hlY2tzW2pdLmNoZWNrZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIG9wdHNbal0uY2xhc3NMaXN0LmFkZCgnaXRJc0hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdGlhbGl6ZUd1aWRlIiwiaGlkZVVzZXJHdWlkZSIsInNldFRpbWVvdXQiLCJhc2lkZSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJvcm5tIiwicm90YXRlQW5kSGlkZUFzaWRlIiwiYnRuIiwiY29udHJvbGxlciIsImhlYWRCZWx0IiwicGllY2UiLCJvZmZzZXRIZWlnaHQiLCJzdHlsZSIsInRyYW5zZm9ybSIsImF3Iiwib2Zmc2V0V2lkdGgiLCJhaCIsIndzcCIsIngiLCJ5IiwieiIsImxlZnQiLCJib3R0b20iLCJndWlkZVJlYWN0cyIsImkiLCJyZW1vdmUiLCJzaGFrZVRvRm9jdXNVc2Vyc0F0dGVudGlvbiIsImd1aWRlIiwidGl0bGUiLCJhcnIiLCJpbm5lclRleHQiLCJhcnJCIiwiaXRlcmF0b3JPZlBvaW50c0xlZnQiLCJzcGVudE9uQXR0YWNrIiwiaXRlcmF0b3IiLCJjb250IiwiaXRlckRldmljZSIsIm9wdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwb2ludHMiLCJhbW91bnQiLCJsZW5ndGgiLCJiaWxhbnMiLCJhbmltYXRlT3B0c1NwZW5kaW5nIiwiZGVsZXRhdG9yIiwiY29pbiIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJheFMiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYXhYIiwib2Zmc2V0VG9wIiwiYXhaIiwiYXhZIiwib2Zmc2V0TGVmdCIsInRvcCIsImFwcGVuZENoaWxkIiwid2lkdGgiLCJoZWlnaHQiLCJyZW1vdmVDaGlsZCIsIml0ZXJhdG9yQiIsImludGVnZXIiLCJkZWxldGF0b3JCIiwiZXF1YWxpemF0b3IiLCJ0aGlzIiwiaW5pdGlhbGl6ZUJ0bnNPZkFjY2VwdGFuY2UiLCJhY2NlcHRhdGlvbkJ0biIsImNvbnRhaW5zIiwic2lnblRoaXNBc0NsaWNrZWQiLCJpbml0aWFsaXplTmV4dFNlY3Rpb24iLCJpbml0QWdhaW5HdWlkZVRleHRGb3JUaGlzU2VjdGlvbiIsImFsbE9ybmFtZW50cyIsInRoaXNPcm5hbWVudCIsIm5leHRPcm5hbWVudCIsInplbnNjcm9sbCIsInRvWSIsImVuYWJsZU5leHRTZWN0aW9uIiwiYWxsU2VjdGlvbnMiLCJ1bmRlZmluZWQiLCJzaG93QnRuT2ZBY2NlcHRhbmNlIiwiY29udGFpbmVyIiwiaW5pdGlhbGl6ZSIsIm9wdHMiLCJpdGVtIiwic2V0SU1HIiwiZW5hYmxlU3RyaWtlTmFtZVBhcnQiLCJzZXRTdHJpa2VOYW1lVG9EZXMiLCJzZXRQYXJ0T2ZBdHRhY2tEZXNjcmlwdGlvbiIsInNldEZvcmNlRGVzIiwib25seU9uY2UiLCJkZXNQYXJ0IiwiYXJyYXkiLCJiZWx0IiwiaW1hZyIsImF0dHJ5YiIsImdldEF0dHJpYnV0ZSIsImljb24iLCJhbGxJTUdzIiwic3RhbmRhcnQiLCJpbWFnZVRvRGVsIiwiaiIsInRoZUlNRyIsInNvdXJjZUlNRyIsIm5ld0lNRyIsInNldE5leHRQYXJ0T2ZGb3JtdWxhRm9yVGhlRmlyc3RUaW1lIiwiaW5wIiwic3RyTmFtZSIsInZhbHVlIiwic2hvd0FsbERlcyIsIml0bSIsInRyaW0iLCJzZXROZXh0UGFydE9mRm9ybXVsYSIsIklNR3MiLCJpdGVyIiwic3RybmciLCJJTUciLCJwdXNoIiwic3RyaW5nVG9TZXQiLCJqb2luIiwienl3RGVzIiwiaW1pRGVzIiwicHJ6RGVzIiwiemRhRGVzIiwic2V0TmFtZVRvRGVzIiwibmFtIiwic2V0Tmlja25hbWVUb0RlcyIsImlucEIiLCJzdXJuYW0iLCJzZXRTZW50ZW5jZVRvRGVzIiwiYWxsRGVzIiwidGV4dEFyZWEiLCJhcmVhVmFsdWUiLCJlbmFibGVOZXh0UGFydE9mRm9ybSIsIm5leHRQYXJ0IiwiYm94U2l6ZSIsInpJbmRleCIsImluaXRVc2VyRmxvd1ZpYVNlY3Rpb25fc2VsZWN0Tm9kZXNUb1RoaXNQcm9jZXNzIiwibm9kZXMiLCJmb3JFYWNoIiwibm9kZSIsImlkeCIsImV2ZW50Iiwic2VjdGlvbkNvbXBsZXRlZCIsImluaXRVc2VyRmxvd1RvTmV4dFNlY3Rpb25fY2hlY2tJZlRoaXNTZWN0aW9uSXNDb21wbGV0ZWQiLCJrZXlDb2RlIiwiaW5pdFVzZXJGbG93VmlhU2VjdGlvbl9nb1RvTmV4dE5vZGUiLCJibHVyIiwiaW5pdFVzZXJGbG93VG9OZXh0U2VjdGlvbl9zaG93QnRuT2ZBY2NlcHRhbmNlIiwiZm9jdXMiLCJpbmRleE9mIiwiYnRuQ29udGFpbmVyRm9yVGhpc1NlY3Rpb24iLCJidG5PZlRoaXNTZWN0aW9uIiwic2V0Q3VycmVudERhdGFUb0F2YXRhckRlc2NyaXB0aW9uIiwib2JqZWN0VG9BcnJheSIsIm9iamVjdCIsImluaXRpYWxpemVBdHRhY2tzUGFydCIsImVuYWJsZUF0dGFja3MiLCJhdHRhY2tzIiwiYXR0YWNrIiwib3B0aW9ucyIsInN5bmNocm9uaXplQmFja2dyb3VuZHNPbkNoYW5nZSIsInN5bmNocm9uaXplQmFja2dyb3VuZHNPbkJsdXIiLCJvcHRpb24iLCJzZWxlY3RlZCIsImNoaWxkcmVuIiwiYmVsdHMiLCJsaXN0IiwiaGlnaGxpZ2h0QmFja2dyb3VuZCIsImNoYW5nZUV2IiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwidHlwZSIsImF2YXRhck9iamVjdHMiLCJhdmF0YXJzIiwiYXZhdGFySXNDbGlja2VkIiwiYXZhdGFyIiwiYXYiLCJjaGVja2VkIiwiaW5pdCIsImJ0bnMiLCJhZGRQb2ludCIsImRlbGV0ZVRoaXNJTUciLCJpbml0aWFsaXplVGhpc1NlY3Rpb24iLCJsaXN0QSIsImxpc3RCIiwiaW1hZ2VzQSIsImltYWdlc0IiLCJvcHRzQSIsIm9wdHNCIiwiZHluYW1pemVUaGlzTGlzdCIsImltYWdlcyIsIm90aGVyTGlzdCIsIm9wdFZhbHVlIiwiZW5hYmxlTmV4dEZvcm1QYXJ0IiwiYSIsImIiLCJpbml0aWFsaXplVGhpc1NlbGVjdCIsIml0SXNDbGlja2VkIiwiY2hlY2tzIiwiY29zdE9mVGhpcyJdLCJtYXBwaW5ncyI6Ijs7O0lBQUFBLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4Q0MsZUFBOUM7O0lBRUEsU0FBU0EsZUFBVCxHQUEyQjtJQUN6QkM7SUFDQUMsYUFBVyxZQUFZO0lBQ3JCLFFBQUlDLFFBQVFMLFNBQVNNLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBWjtJQUNBRCxVQUFNRSxTQUFOLENBQWdCQyxHQUFoQixDQUFvQixRQUFwQjtJQUNELEdBSEQsRUFHRyxDQUhIO0lBSUQ7O0lBRUQsU0FBU0wsYUFBVCxHQUF5QjtJQUN2QixNQUFJTSxPQUFPVCxTQUFTTSxhQUFULENBQXVCLGFBQXZCLENBQVg7SUFDQUcsT0FBS1IsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0JTLGtCQUEvQjtJQUNBLE1BQUlDLE1BQU1YLFNBQVNNLGFBQVQsQ0FBdUIsa0JBQXZCLENBQVY7SUFDQUssTUFBSVYsZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEJTLGtCQUE5QjtJQUNEO0lBQ0QsSUFBSUUsYUFBYSxDQUFqQjs7SUFFQSxTQUFTRixrQkFBVCxHQUE4QjtJQUM1QixNQUFJTCxRQUFRTCxTQUFTTSxhQUFULENBQXVCLE9BQXZCLENBQVo7SUFDQSxN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
