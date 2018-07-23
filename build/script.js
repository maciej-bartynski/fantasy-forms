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
        attack.querySelector('select').addEventListener('change', function () {
          synchronizeBackgroundsOnChange(attack, options);
        });
        options.forEach(function (option) {
          if (option.selected === true) {
            option.selected = false;
          }
        });
      });
      attacks[i].classList.add("enabled");
    }

    function synchronizeBackgroundsOnChange(node, children) {
      var belts = objectToArray(node.querySelectorAll(".corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt"));
      belts.forEach(function (belt) {
        return belt.removeAttribute('style');
      });
      children.forEach(function (opt, idx) {
        if (opt.value === node.querySelector('select').value) {
          belts[idx].style.backgroundColor = 'rgb(30, 144, 255)';
          initUserFlowToNextSection_showBtnOfAcceptance$1();
          iteratorOfPointsLeft.iterator(node, idx);
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
          belt.addEventListener('mouseover', function (event) {
            highlightBackground(container, event, idx);
          });
          belt.addEventListener('mouseout', function (event) {
            highlightBackground(container, event, idx);
          });
        });
      });
      /*
        
        let selectList = cont.querySelector("select");
        selectList.addEventListener("change", function() {
          for (let q = 0; q < iter; q++) {
            let opt = options[q];
            if (opt.value === selectList.value) {
              iteratorOfPointsLeft.iterator(cont, q);
              //guideReacts(3)
              initUserFlowToNextSection_showBtnOfAcceptance();
              synchronizeBackgroundsOfOtherOptns(cont, iter);
              synchronizeThisBckgrWithImageBeltHoverBckgr(opt, cont, q, true);
            }
          }
        });
      }*/
    }

    function highlightBackground(container, event, idx) {
      if (event.type === "mouseover") {
        container.querySelectorAll(".corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt")[idx].classList.add('JSonHover');
        container.querySelectorAll("option")[idx].classList.add('JSonHover');
      } else if (event.type === "mouseout") {
        container.querySelectorAll(".corpus_section_form_fields_fieldset-b_container_select-container_img-part-container_opt")[idx].classList.remove('JSonHover');
        container.querySelectorAll("option")[idx].classList.remove('JSonHover');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyIuLi9zb3VyY2UvZHluYW1pY3MvYXNpZGUuanMiLCIuLi9ub2RlX21vZHVsZXMvemVuc2Nyb2xsL3plbnNjcm9sbC5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9mb3JtX2luaXRpYWxpemVOZXh0U2VjdGlvbi5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9hdGFraS1zZXQtdHh0LmpzIiwiLi4vc291cmNlL2R5bmFtaWNzL2Zvcm1fc2VjdGlvbi1vbmUuanMiLCIuLi9zb3VyY2UvZHluYW1pY3Mvb2JqZWN0LXRvLWFycmF5LmpzIiwiLi4vc291cmNlL2R5bmFtaWNzL2Zvcm1fc2VjdGlvbi10aHJlZS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9mb3JtX3NlY3Rpb24tdHdvLmpzIiwiLi4vc291cmNlL2R5bmFtaWNzL2F0dHJ5YnMuanMiLCIuLi9zb3VyY2UvZHluYW1pY3Mvb2Jyb255LmpzIiwiLi4vc291cmNlL2R5bmFtaWNzL21vY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRpYWxpemVHdWlkZSlcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVHdWlkZSgpIHtcclxuICBoaWRlVXNlckd1aWRlKCk7XHJcbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpO1xyXG4gICAgYXNpZGUuY2xhc3NMaXN0LmFkZCgnb25Mb2FkJyk7XHJcbiAgfSwgMClcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZVVzZXJHdWlkZSgpIHtcclxuICBsZXQgb3JubSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1oZWFkJylcclxuICBvcm5tLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlQW5kSGlkZUFzaWRlKVxyXG4gIGxldCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1ndWlkZV9oaWRlJylcclxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVBbmRIaWRlQXNpZGUpXHJcbn1cclxubGV0IGNvbnRyb2xsZXIgPSAwXHJcblxyXG5mdW5jdGlvbiByb3RhdGVBbmRIaWRlQXNpZGUoKSB7XHJcbiAgbGV0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXNpZGUnKVxyXG4gIGlmIChjb250cm9sbGVyID09PSAwKSB7XHJcbiAgICBsZXQgaGVhZEJlbHQgPSBhc2lkZS5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtaGVhZCcpO1xyXG4gICAgbGV0IHBpZWNlID0gaGVhZEJlbHQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgYXNpZGUuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknXHJcbiAgICBsZXQgYXcgPSBhc2lkZS5vZmZzZXRXaWR0aFxyXG4gICAgbGV0IGFoID0gYXNpZGUub2Zmc2V0SGVpZ2h0XHJcbiAgICBsZXQgd3NwID0gYWggKyAoKGF3IC0gYWgpIC8gMilcclxuICAgIGxldCB4ID0gKHdzcCAqIC0xKSArIHBpZWNlXHJcbiAgICBsZXQgeSA9IHggKyAncHgnXHJcbiAgICBsZXQgeiA9ICgoYXcgLSBhaCkgLyAyKSArICdweCdcclxuICAgIGFzaWRlLnN0eWxlLmxlZnQgPSB5XHJcbiAgICBhc2lkZS5zdHlsZS5ib3R0b20gPSB6XHJcbiAgICBjb250cm9sbGVyID0gMVxyXG4gIH0gZWxzZSBpZiAoY29udHJvbGxlciA9PT0gMSkge1xyXG4gICAgYXNpZGUuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSdcclxuICAgIGFzaWRlLnN0eWxlLmxlZnQgPSAwXHJcbiAgICBhc2lkZS5zdHlsZS5ib3R0b20gPSAwXHJcbiAgICBjb250cm9sbGVyID0gMFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGd1aWRlUmVhY3RzKGkpIHtcclxuICBsZXQgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpO1xyXG4gIGFzaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ29uQWR2aWNlJyk7XHJcbiAgYXNpZGUuY2xhc3NMaXN0LnJlbW92ZSgnb25BZHZpY2VCJyk7XHJcbiAgc2V0VGltZW91dChmdW5jdGlvbigpe3NoYWtlVG9Gb2N1c1VzZXJzQXR0ZW50aW9uKGFzaWRlKX0sMCk7XHJcbiAgbGV0IGd1aWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWZvb3QgLnVzZXItZ3VpZGUnKTtcclxuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtZm9vdF90aXRsZScpO1xyXG4gIGxldCBhcnIgPSBbXHJcbiAgICAnR2R5IHdwaXN6ZXN6IGltacSZLCBwcnp5ZG9tZWsgaSB6YXdvxYJhbmllLCBwbyB6YXR3aWVyZHplbml1IHptaWFuIHBvamF3aSBzacSZIG5hc3TEmXBuYSBjesSZxZvEhyBmb3JtdWxhcnphLicsXHJcbiAgICAnUG8gd3lib3J6ZSBrbGFzeSwgcG9qYXdpIHNpZSBva25vIHd5Ym9ydSBhdGFrdSBzcG/Fm3LDs2QgdWRlcnplxYQgY2hhcmFrdGVyeXN0eWN6bnljaCBkbGEgdGVqIHBvc3RhY2kuJyxcclxuICAgICdXeWJpZXJ6IHVkZXJ6ZW5pZSwga2xpa2FqxIVjIHcgc8WCb3dvIG9waXN1asSFY2UgamUuIFByenkga2HFvGR5bSBlcGl0ZWNpZSB3aWRuaWVqZSBjaGFyYWt0ZXJ5c3R5a2EgY2lvc3UgdyBJa29uYWNoIMW7eXdpb8WCw7N3IGkgSWtvbmFjaCBVZGVyemXFhC4nLFxyXG4gICAgJ1d5bXnFm2wgbmF6d2UgZGxhIHVkZXJ6ZW5pYSB6IHBvcHJ6ZWRuaWVnbyBrcm9rdS4gR2R5IGrEhSB6YXR3aWVyZHppc3osIHBvamF3aSBzaWUga29sZWpuYSBjemXFm8SHIGthcnR5IHBvc3RhY2kuJyxcclxuICAgICdQbyB3eWJvcnplIGplZG5laiBvcGNqaSB6IGthxbxkZWogbGlzdHksIHBvamF3aSBzaWUga29sZWpuYSBjemXFm8SHIGthcnR5IHBvc3RhY2kuJyxcclxuICAgICdLbGlrbmlqIHR5bGUgb3BjamksIGlsZSBjaGNlc3ouIEthxbxkeSB6ZXN0YXcgKGN6eWxpIG1vYyBpIHBpZXRubykgemFiaWVyYSBjaSBwZXduxIUgaWxvxZvEhyBwdW5rdMOzdyBNxIVkcm/Fm2NpLicsXHJcbiAgICAnUm96ZGFqIHBvem9zdGHFgmUgcHVua3R5IG3EhWRyb8WbY2kgbmEgd3Nww7PFgmN6eW5uaWtpIHBvc3RhY2k6IMW7eWNpZSwgTcSFZHJvxZvEhywgUnVjaCBpIER6aWHFgmFuaWUuJ1xyXG4gIF1cclxuICBndWlkZS5pbm5lclRleHQgPSBhcnJbaV1cclxuICBsZXQgYXJyQiA9IFtcclxuICAgICd0b8W8c2Ftb8WbxIc6JyxcclxuICAgICdrbGFzYTonLFxyXG4gICAgJ2F0YWs6JyxcclxuICAgICduYXp3YSBhdGFrdTonLFxyXG4gICAgJ29icm9uYTonLFxyXG4gICAgJ3pkb2xub8WbxIcgaSBzxYJhYm/Fm8SHJyxcclxuICAgICdhdHJ5YnV0eTonXHJcbiAgXVxyXG4gIHRpdGxlLmlubmVyVGV4dCA9IGFyckJbaV1cclxufVxyXG5mdW5jdGlvbiBzaGFrZVRvRm9jdXNVc2Vyc0F0dGVudGlvbihhc2lkZSkge1xyXG4gIGlmIChjb250cm9sbGVyID09PSAxKSB7XHJcbiAgICBsZXQgaGVhZEJlbHQgPSBhc2lkZS5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtaGVhZCcpO1xyXG4gICAgbGV0IHBpZWNlID0gaGVhZEJlbHQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgYXNpZGUuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xyXG4gICAgbGV0IGF3ID0gYXNpZGUub2Zmc2V0V2lkdGg7XHJcbiAgICBsZXQgYWggPSBhc2lkZS5vZmZzZXRIZWlnaHQ7XHJcbiAgICBsZXQgd3NwID0gYWggKyAoKGF3IC0gYWgpIC8gMik7XHJcbiAgICBsZXQgeCA9ICh3c3AgKiAtMSkgKyBwaWVjZTtcclxuICAgIGxldCB5ID0geCArICdweCc7XHJcbiAgICBsZXQgeiA9ICgoYXcgLSBhaCkgLyAyKSArICdweCc7XHJcbiAgICBhc2lkZS5zdHlsZS5sZWZ0ID0geTtcclxuICAgIGFzaWRlLnN0eWxlLmJvdHRvbSA9IHo7XHJcbiAgICBhc2lkZS5jbGFzc0xpc3QuYWRkKCdvbkFkdmljZScpO1xyXG4gIH0gZWxzZSBpZiAoY29udHJvbGxlciA9PT0gMCkge1xyXG4gICAgYXNpZGUuY2xhc3NMaXN0LmFkZCgnb25BZHZpY2VCJyk7XHJcbiAgfVxyXG59XHJcblxyXG52YXIgaXRlcmF0b3JPZlBvaW50c0xlZnQgPSB7XHJcbiAgbGVmdDogMjAsXHJcbiAgc3BlbnRPbkF0dGFjazogMCxcclxuICBpdGVyYXRvcihjb250LCB4KSB7XHJcbiAgICBsZXQgaXRlckRldmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1ib2R5X2hvdy1tdWNoJylcclxuICAgIGxldCBvcHQgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnKVt4XVxyXG4gICAgbGV0IHBvaW50cyA9IG9wdC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVxyXG4gICAgbGV0IGFtb3VudCA9IChwb2ludHMubGVuZ3RoIC0gMSlcclxuICAgIGxldCBiaWxhbnMgPSBhbW91bnQgLSB0aGlzLnNwZW50T25BdHRhY2tcclxuICAgIHRoaXMubGVmdCA9IHRoaXMubGVmdCAtIGJpbGFuc1xyXG4gICAgdGhpcy5zcGVudE9uQXR0YWNrID0gYW1vdW50XHJcbiAgICBpdGVyRGV2aWNlLmlubmVyVGV4dCA9ICdQb3pvc3RhxYJvJyArICcgJyArIHRoaXMubGVmdCArICd4J1xyXG4gICAgdGhpcy5hbmltYXRlT3B0c1NwZW5kaW5nKG9wdCwgYW1vdW50KTtcclxuICB9LFxyXG4gIGRlbGV0YXRvcigpIHtcclxuICAgIGxldCBpdGVyRGV2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWJvZHlfaG93LW11Y2gnKVxyXG4gICAgdGhpcy5sZWZ0ID0gdGhpcy5sZWZ0ICsgdGhpcy5zcGVudE9uQXR0YWNrXHJcbiAgICB0aGlzLnNwZW50T25BdHRhY2sgPSAwXHJcbiAgICBpdGVyRGV2aWNlLmlubmVyVGV4dCA9ICdQb3pvc3RhxYJvJyArICcgJyArIHRoaXMubGVmdCArICd4J1xyXG4gIH0sXHJcbiAgYW5pbWF0ZU9wdHNTcGVuZGluZyhvcHQsIGFtb3VudCkge1xyXG4gICAgbGV0IGNvaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJTUcnKTtcclxuICAgIGNvaW4uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pY29ucy9pa29uYS1wb3RlZy5zdmcnKTtcclxuICAgIGNvaW4uY2xhc3NMaXN0LmFkZCgnaXRJc0NvaW4nKTtcclxuICAgIGxldCBheFMgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgIGxldCBheFggPSBvcHQub2Zmc2V0VG9wO1xyXG4gICAgbGV0IGF4WiA9IGF4WCAtIGF4UztcclxuICAgIGxldCBheFkgPSBvcHQub2Zmc2V0TGVmdDtcclxuICAgIGNvaW4uc3R5bGUudG9wID0gYXhaICsgJ3B4JztcclxuICAgIGNvaW4uc3R5bGUubGVmdCA9IGF4WSArICdweCc7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoY29pbik7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29pbi5zdHlsZS5sZWZ0ID0gJzAnO1xyXG4gICAgICBjb2luLnN0eWxlLnRvcCA9ICc5MCUnO1xyXG4gICAgICBjb2luLnN0eWxlLndpZHRoID0gJzU1cHgnO1xyXG4gICAgICBjb2luLnN0eWxlLmhlaWdodCA9ICc1NXB4JztcclxuICAgIH0sIDApO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5yZW1vdmVDaGlsZChjb2luKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXNpZGUnKS5jbGFzc0xpc3QuYWRkKCdvbkFkdmljZScpO1xyXG4gICAgfSwgNTUwKTtcclxuICB9LFxyXG4gIGl0ZXJhdG9yQihpbnRlZ2VyKSB7XHJcbiAgICBsZXQgaXRlckRldmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1ib2R5X2hvdy1tdWNoJylcclxuICAgIHRoaXMubGVmdCA9IHRoaXMubGVmdCArIGludGVnZXJcclxuICAgIGl0ZXJEZXZpY2UuaW5uZXJUZXh0ID0gJ1Bvem9zdGHFgm8nICsgJyAnICsgdGhpcy5sZWZ0ICsgJ3gnXHJcbiAgfSxcclxuICBkZWxldGF0b3JCKGludGVnZXIpIHtcclxuICAgIGxldCBpdGVyRGV2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWJvZHlfaG93LW11Y2gnKVxyXG4gICAgdGhpcy5sZWZ0ID0gdGhpcy5sZWZ0IC0gaW50ZWdlclxyXG4gICAgaXRlckRldmljZS5pbm5lclRleHQgPSAnUG96b3N0YcWCbycgKyAnICcgKyB0aGlzLmxlZnQgKyAneCdcclxuICB9LFxyXG4gIGVxdWFsaXphdG9yKCkge1xyXG4gICAgbGV0IGl0ZXJEZXZpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtYm9keV9ob3ctbXVjaCcpXHJcbiAgICBpdGVyRGV2aWNlLmlubmVyVGV4dCA9ICdQb3pvc3RhxYJvJyArICcgJyArIHRoaXMubGVmdCArICd4J1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBpdGVyYXRvck9mUG9pbnRzTGVmdCIsIi8qKlxuICogWmVuc2Nyb2xsIDQuMC4yXG4gKiBodHRwczovL2dpdGh1Yi5jb20vemVuZ2Fib3IvemVuc2Nyb2xsL1xuICpcbiAqIENvcHlyaWdodCAyMDE14oCTMjAxOCBHYWJvciBMZW5hcmRcbiAqXG4gKiBUaGlzIGlzIGZyZWUgYW5kIHVuZW5jdW1iZXJlZCBzb2Z0d2FyZSByZWxlYXNlZCBpbnRvIHRoZSBwdWJsaWMgZG9tYWluLlxuICogXG4gKiBBbnlvbmUgaXMgZnJlZSB0byBjb3B5LCBtb2RpZnksIHB1Ymxpc2gsIHVzZSwgY29tcGlsZSwgc2VsbCwgb3JcbiAqIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSwgZWl0aGVyIGluIHNvdXJjZSBjb2RlIGZvcm0gb3IgYXMgYSBjb21waWxlZFxuICogYmluYXJ5LCBmb3IgYW55IHB1cnBvc2UsIGNvbW1lcmNpYWwgb3Igbm9uLWNvbW1lcmNpYWwsIGFuZCBieSBhbnlcbiAqIG1lYW5zLlxuICogXG4gKiBJbiBqdXJpc2RpY3Rpb25zIHRoYXQgcmVjb2duaXplIGNvcHlyaWdodCBsYXdzLCB0aGUgYXV0aG9yIG9yIGF1dGhvcnNcbiAqIG9mIHRoaXMgc29mdHdhcmUgZGVkaWNhdGUgYW55IGFuZCBhbGwgY29weXJpZ2h0IGludGVyZXN0IGluIHRoZVxuICogc29mdHdhcmUgdG8gdGhlIHB1YmxpYyBkb21haW4uIFdlIG1ha2UgdGhpcyBkZWRpY2F0aW9uIGZvciB0aGUgYmVuZWZpdFxuICogb2YgdGhlIHB1YmxpYyBhdCBsYXJnZSBhbmQgdG8gdGhlIGRldHJpbWVudCBvZiBvdXIgaGVpcnMgYW5kXG4gKiBzdWNjZXNzb3JzLiBXZSBpbnRlbmQgdGhpcyBkZWRpY2F0aW9uIHRvIGJlIGFuIG92ZXJ0IGFjdCBvZlxuICogcmVsaW5xdWlzaG1lbnQgaW4gcGVycGV0dWl0eSBvZiBhbGwgcHJlc2VudCBhbmQgZnV0dXJlIHJpZ2h0cyB0byB0aGlzXG4gKiBzb2Z0d2FyZSB1bmRlciBjb3B5cmlnaHQgbGF3LlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICogRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gKiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuXG4gKiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUlxuICogT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsXG4gKiBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1JcbiAqIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICogRm9yIG1vcmUgaW5mb3JtYXRpb24sIHBsZWFzZSByZWZlciB0byA8aHR0cDovL3VubGljZW5zZS5vcmc+XG4gKiBcbiAqL1xuXG4vKmpzaGludCBkZXZlbDp0cnVlLCBhc2k6dHJ1ZSAqL1xuXG4vKmdsb2JhbCBkZWZpbmUsIG1vZHVsZSAqL1xuXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkoKSlcblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KClcblx0fSBlbHNlIHtcblx0XHQoZnVuY3Rpb24gaW5zdGFsbCgpIHtcblx0XHRcdC8vIFRvIG1ha2Ugc3VyZSBaZW5zY3JvbGwgY2FuIGJlIHJlZmVyZW5jZWQgZnJvbSB0aGUgaGVhZGVyLCBiZWZvcmUgYGJvZHlgIGlzIGF2YWlsYWJsZVxuXHRcdFx0aWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LmJvZHkpIHtcblx0XHRcdFx0cm9vdC56ZW5zY3JvbGwgPSBmYWN0b3J5KClcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIHJldHJ5IDltcyBsYXRlclxuXHRcdFx0XHRzZXRUaW1lb3V0KGluc3RhbGwsIDkpXG5cdFx0XHR9XG5cdFx0fSkoKVxuXHR9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcblx0XCJ1c2Ugc3RyaWN0XCJcblxuXG5cdC8vIERldGVjdCBpZiB0aGUgYnJvd3NlciBhbHJlYWR5IHN1cHBvcnRzIG5hdGl2ZSBzbW9vdGggc2Nyb2xsaW5nIChlLmcuLCBGaXJlZm94IDM2KyBhbmQgQ2hyb21lIDQ5KykgYW5kIGl0IGlzIGVuYWJsZWQ6XG5cdHZhciBpc05hdGl2ZVNtb290aFNjcm9sbEVuYWJsZWRPbiA9IGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0cmV0dXJuIGVsZW0gJiYgXCJnZXRDb21wdXRlZFN0eWxlXCIgaW4gd2luZG93ICYmXG5cdFx0XHR3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKVtcInNjcm9sbC1iZWhhdmlvclwiXSA9PT0gXCJzbW9vdGhcIlxuXHR9XG5cblxuXHQvLyBFeGl0IGlmIGl04oCZcyBub3QgYSBicm93c2VyIGVudmlyb25tZW50OlxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFwiZG9jdW1lbnRcIiBpbiB3aW5kb3cpKSB7XG5cdFx0cmV0dXJuIHt9XG5cdH1cblxuXG5cdHZhciBtYWtlU2Nyb2xsZXIgPSBmdW5jdGlvbiAoY29udGFpbmVyLCBkZWZhdWx0RHVyYXRpb24sIGVkZ2VPZmZzZXQpIHtcblxuXHRcdC8vIFVzZSBkZWZhdWx0cyBpZiBub3QgcHJvdmlkZWRcblx0XHRkZWZhdWx0RHVyYXRpb24gPSBkZWZhdWx0RHVyYXRpb24gfHwgOTk5IC8vbXNcblx0XHRpZiAoIWVkZ2VPZmZzZXQgJiYgZWRnZU9mZnNldCAhPT0gMCkge1xuXHRcdFx0Ly8gV2hlbiBzY3JvbGxpbmcsIHRoaXMgYW1vdW50IG9mIGRpc3RhbmNlIGlzIGtlcHQgZnJvbSB0aGUgZWRnZXMgb2YgdGhlIGNvbnRhaW5lcjpcblx0XHRcdGVkZ2VPZmZzZXQgPSA5IC8vcHhcblx0XHR9XG5cblx0XHQvLyBIYW5kbGluZyB0aGUgbGlmZS1jeWNsZSBvZiB0aGUgc2Nyb2xsZXJcblx0XHR2YXIgc2Nyb2xsVGltZW91dElkXG5cdFx0dmFyIHNldFNjcm9sbFRpbWVvdXRJZCA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuXHRcdFx0c2Nyb2xsVGltZW91dElkID0gbmV3VmFsdWVcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTdG9wIHRoZSBjdXJyZW50IHNtb290aCBzY3JvbGwgb3BlcmF0aW9uIGltbWVkaWF0ZWx5XG5cdFx0ICovXG5cdFx0dmFyIHN0b3BTY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQoc2Nyb2xsVGltZW91dElkKVxuXHRcdFx0c2V0U2Nyb2xsVGltZW91dElkKDApXG5cdFx0fVxuXG5cdFx0dmFyIGdldFRvcFdpdGhFZGdlT2Zmc2V0ID0gZnVuY3Rpb24gKGVsZW0pIHtcblx0XHRcdHJldHVybiBNYXRoLm1heCgwLCBjb250YWluZXIuZ2V0VG9wT2YoZWxlbSkgLSBlZGdlT2Zmc2V0KVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNjcm9sbHMgdG8gYSBzcGVjaWZpYyB2ZXJ0aWNhbCBwb3NpdGlvbiBpbiB0aGUgZG9jdW1lbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3RhcmdldFl9IFRoZSB2ZXJ0aWNhbCBwb3NpdGlvbiB3aXRoaW4gdGhlIGRvY3VtZW50LlxuXHRcdCAqIEBwYXJhbSB7ZHVyYXRpb259IE9wdGlvbmFsbHkgdGhlIGR1cmF0aW9uIG9mIHRoZSBzY3JvbGwgb3BlcmF0aW9uLlxuXHRcdCAqICAgICAgICBJZiBub3QgcHJvdmlkZWQgdGhlIGRlZmF1bHQgZHVyYXRpb24gaXMgdXNlZC5cblx0XHQgKiBAcGFyYW0ge29uRG9uZX0gQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBvbmNlIHRoZSBzY3JvbGwgZmluaXNoZWQuXG5cdFx0ICovXG5cdFx0dmFyIHNjcm9sbFRvWSA9IGZ1bmN0aW9uICh0YXJnZXRZLCBkdXJhdGlvbiwgb25Eb25lKSB7XG5cdFx0XHRzdG9wU2Nyb2xsKClcblx0XHRcdGlmIChkdXJhdGlvbiA9PT0gMCB8fCAoZHVyYXRpb24gJiYgZHVyYXRpb24gPCAwKSB8fCBpc05hdGl2ZVNtb290aFNjcm9sbEVuYWJsZWRPbihjb250YWluZXIuYm9keSkpIHtcblx0XHRcdFx0Y29udGFpbmVyLnRvWSh0YXJnZXRZKVxuXHRcdFx0XHRpZiAob25Eb25lKSB7XG5cdFx0XHRcdFx0b25Eb25lKClcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIHN0YXJ0WSA9IGNvbnRhaW5lci5nZXRZKClcblx0XHRcdFx0dmFyIGRpc3RhbmNlID0gTWF0aC5tYXgoMCwgdGFyZ2V0WSkgLSBzdGFydFlcblx0XHRcdFx0dmFyIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG5cdFx0XHRcdGR1cmF0aW9uID0gZHVyYXRpb24gfHwgTWF0aC5taW4oTWF0aC5hYnMoZGlzdGFuY2UpLCBkZWZhdWx0RHVyYXRpb24pO1xuXHRcdFx0XHQoZnVuY3Rpb24gbG9vcFNjcm9sbCgpIHtcblx0XHRcdFx0XHRzZXRTY3JvbGxUaW1lb3V0SWQoc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHQvLyBDYWxjdWxhdGUgcGVyY2VudGFnZTpcblx0XHRcdFx0XHRcdHZhciBwID0gTWF0aC5taW4oMSwgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnRUaW1lKSAvIGR1cmF0aW9uKVxuXHRcdFx0XHRcdFx0Ly8gQ2FsY3VsYXRlIHRoZSBhYnNvbHV0ZSB2ZXJ0aWNhbCBwb3NpdGlvbjpcblx0XHRcdFx0XHRcdHZhciB5ID0gTWF0aC5tYXgoMCwgTWF0aC5mbG9vcihzdGFydFkgKyBkaXN0YW5jZSoocCA8IDAuNSA/IDIqcCpwIDogcCooNCAtIHAqMiktMSkpKVxuXHRcdFx0XHRcdFx0Y29udGFpbmVyLnRvWSh5KVxuXHRcdFx0XHRcdFx0aWYgKHAgPCAxICYmIChjb250YWluZXIuZ2V0SGVpZ2h0KCkgKyB5KSA8IGNvbnRhaW5lci5ib2R5LnNjcm9sbEhlaWdodCkge1xuXHRcdFx0XHRcdFx0XHRsb29wU2Nyb2xsKClcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoc3RvcFNjcm9sbCwgOTkpIC8vIHdpdGggY29vbGRvd24gdGltZVxuXHRcdFx0XHRcdFx0XHRpZiAob25Eb25lKSB7XG5cdFx0XHRcdFx0XHRcdFx0b25Eb25lKClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIDkpKVxuXHRcdFx0XHR9KSgpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU2Nyb2xscyB0byB0aGUgdG9wIG9mIGEgc3BlY2lmaWMgZWxlbWVudC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7ZWxlbX0gVGhlIGVsZW1lbnQgdG8gc2Nyb2xsIHRvLlxuXHRcdCAqIEBwYXJhbSB7ZHVyYXRpb259IE9wdGlvbmFsbHkgdGhlIGR1cmF0aW9uIG9mIHRoZSBzY3JvbGwgb3BlcmF0aW9uLlxuXHRcdCAqIEBwYXJhbSB7b25Eb25lfSBBbiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBpbnZva2VkIG9uY2UgdGhlIHNjcm9sbCBmaW5pc2hlZC5cblx0XHQgKi9cblx0XHR2YXIgc2Nyb2xsVG9FbGVtID0gZnVuY3Rpb24gKGVsZW0sIGR1cmF0aW9uLCBvbkRvbmUpIHtcblx0XHRcdHNjcm9sbFRvWShnZXRUb3BXaXRoRWRnZU9mZnNldChlbGVtKSwgZHVyYXRpb24sIG9uRG9uZSlcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTY3JvbGxzIGFuIGVsZW1lbnQgaW50byB2aWV3IGlmIG5lY2Vzc2FyeS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7ZWxlbX0gVGhlIGVsZW1lbnQuXG5cdFx0ICogQHBhcmFtIHtkdXJhdGlvbn0gT3B0aW9uYWxseSB0aGUgZHVyYXRpb24gb2YgdGhlIHNjcm9sbCBvcGVyYXRpb24uXG5cdFx0ICogQHBhcmFtIHtvbkRvbmV9IEFuIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgb25jZSB0aGUgc2Nyb2xsIGZpbmlzaGVkLlxuXHRcdCAqL1xuXHRcdHZhciBzY3JvbGxJbnRvVmlldyA9IGZ1bmN0aW9uIChlbGVtLCBkdXJhdGlvbiwgb25Eb25lKSB7XG5cdFx0XHR2YXIgZWxlbUhlaWdodCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG5cdFx0XHR2YXIgZWxlbUJvdHRvbSA9IGNvbnRhaW5lci5nZXRUb3BPZihlbGVtKSArIGVsZW1IZWlnaHRcblx0XHRcdHZhciBjb250YWluZXJIZWlnaHQgPSBjb250YWluZXIuZ2V0SGVpZ2h0KClcblx0XHRcdHZhciB5ID0gY29udGFpbmVyLmdldFkoKVxuXHRcdFx0dmFyIGNvbnRhaW5lckJvdHRvbSA9IHkgKyBjb250YWluZXJIZWlnaHRcblx0XHRcdGlmIChnZXRUb3BXaXRoRWRnZU9mZnNldChlbGVtKSA8IHkgfHwgKGVsZW1IZWlnaHQgKyBlZGdlT2Zmc2V0KSA+IGNvbnRhaW5lckhlaWdodCkge1xuXHRcdFx0XHQvLyBFbGVtZW50IGlzIGNsaXBwZWQgYXQgdG9wIG9yIGlzIGhpZ2hlciB0aGFuIHNjcmVlbi5cblx0XHRcdFx0c2Nyb2xsVG9FbGVtKGVsZW0sIGR1cmF0aW9uLCBvbkRvbmUpXG5cdFx0XHR9IGVsc2UgaWYgKChlbGVtQm90dG9tICsgZWRnZU9mZnNldCkgPiBjb250YWluZXJCb3R0b20pIHtcblx0XHRcdFx0Ly8gRWxlbWVudCBpcyBjbGlwcGVkIGF0IHRoZSBib3R0b20uXG5cdFx0XHRcdHNjcm9sbFRvWShlbGVtQm90dG9tIC0gY29udGFpbmVySGVpZ2h0ICsgZWRnZU9mZnNldCwgZHVyYXRpb24sIG9uRG9uZSlcblx0XHRcdH0gZWxzZSBpZiAob25Eb25lKSB7XG5cdFx0XHRcdG9uRG9uZSgpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU2Nyb2xscyB0byB0aGUgY2VudGVyIG9mIGFuIGVsZW1lbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2VsZW19IFRoZSBlbGVtZW50LlxuXHRcdCAqIEBwYXJhbSB7ZHVyYXRpb259IE9wdGlvbmFsbHkgdGhlIGR1cmF0aW9uIG9mIHRoZSBzY3JvbGwgb3BlcmF0aW9uLlxuXHRcdCAqIEBwYXJhbSB7b2Zmc2V0fSBPcHRpb25hbGx5IHRoZSBvZmZzZXQgb2YgdGhlIHRvcCBvZiB0aGUgZWxlbWVudCBmcm9tIHRoZSBjZW50ZXIgb2YgdGhlIHNjcmVlbi5cblx0XHQgKiAgICAgICAgQSB2YWx1ZSBvZiAwIGlzIGlnbm9yZWQuXG5cdFx0ICogQHBhcmFtIHtvbkRvbmV9IEFuIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgb25jZSB0aGUgc2Nyb2xsIGZpbmlzaGVkLlxuXHRcdCAqL1xuXHRcdHZhciBzY3JvbGxUb0NlbnRlck9mID0gZnVuY3Rpb24gKGVsZW0sIGR1cmF0aW9uLCBvZmZzZXQsIG9uRG9uZSkge1xuXHRcdFx0c2Nyb2xsVG9ZKE1hdGgubWF4KDAsIGNvbnRhaW5lci5nZXRUb3BPZihlbGVtKSAtIGNvbnRhaW5lci5nZXRIZWlnaHQoKS8yICsgKG9mZnNldCB8fCBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodC8yKSksIGR1cmF0aW9uLCBvbkRvbmUpXG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogQ2hhbmdlcyBkZWZhdWx0IHNldHRpbmdzIGZvciB0aGlzIHNjcm9sbGVyLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtuZXdEZWZhdWx0RHVyYXRpb259IE9wdGlvbmFsbHkgYSBuZXcgdmFsdWUgZm9yIGRlZmF1bHQgZHVyYXRpb24sIHVzZWQgZm9yIGVhY2ggc2Nyb2xsIG1ldGhvZCBieSBkZWZhdWx0LlxuXHRcdCAqICAgICAgICBJZ25vcmVkIGlmIG51bGwgb3IgdW5kZWZpbmVkLlxuXHRcdCAqIEBwYXJhbSB7bmV3RWRnZU9mZnNldH0gT3B0aW9uYWxseSBhIG5ldyB2YWx1ZSBmb3IgdGhlIGVkZ2Ugb2Zmc2V0LCB1c2VkIGJ5IGVhY2ggc2Nyb2xsIG1ldGhvZCBieSBkZWZhdWx0LiBJZ25vcmVkIGlmIG51bGwgb3IgdW5kZWZpbmVkLlxuXHRcdCAqIEByZXR1cm5zIEFuIG9iamVjdCB3aXRoIHRoZSBjdXJyZW50IHZhbHVlcy5cblx0XHQgKi9cblx0XHR2YXIgc2V0dXAgPSBmdW5jdGlvbiAobmV3RGVmYXVsdER1cmF0aW9uLCBuZXdFZGdlT2Zmc2V0KSB7XG5cdFx0XHRpZiAobmV3RGVmYXVsdER1cmF0aW9uID09PSAwIHx8IG5ld0RlZmF1bHREdXJhdGlvbikge1xuXHRcdFx0XHRkZWZhdWx0RHVyYXRpb24gPSBuZXdEZWZhdWx0RHVyYXRpb25cblx0XHRcdH1cblx0XHRcdGlmIChuZXdFZGdlT2Zmc2V0ID09PSAwIHx8IG5ld0VkZ2VPZmZzZXQpIHtcblx0XHRcdFx0ZWRnZU9mZnNldCA9IG5ld0VkZ2VPZmZzZXRcblx0XHRcdH1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRlZmF1bHREdXJhdGlvbjogZGVmYXVsdER1cmF0aW9uLFxuXHRcdFx0XHRlZGdlT2Zmc2V0OiBlZGdlT2Zmc2V0XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHNldHVwOiBzZXR1cCxcblx0XHRcdHRvOiBzY3JvbGxUb0VsZW0sXG5cdFx0XHR0b1k6IHNjcm9sbFRvWSxcblx0XHRcdGludG9WaWV3OiBzY3JvbGxJbnRvVmlldyxcblx0XHRcdGNlbnRlcjogc2Nyb2xsVG9DZW50ZXJPZixcblx0XHRcdHN0b3A6IHN0b3BTY3JvbGwsXG5cdFx0XHRtb3Zpbmc6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICEhc2Nyb2xsVGltZW91dElkIH0sXG5cdFx0XHRnZXRZOiBjb250YWluZXIuZ2V0WSxcblx0XHRcdGdldFRvcE9mOiBjb250YWluZXIuZ2V0VG9wT2Zcblx0XHR9XG5cblx0fVxuXG5cblx0dmFyIGRvY0VsZW0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcblx0dmFyIGdldERvY1kgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5kb3cuc2Nyb2xsWSB8fCBkb2NFbGVtLnNjcm9sbFRvcCB9XG5cblx0Ly8gQ3JlYXRlIGEgc2Nyb2xsZXIgZm9yIHRoZSBkb2N1bWVudDpcblx0dmFyIHplbnNjcm9sbCA9IG1ha2VTY3JvbGxlcih7XG5cdFx0Ym9keTogZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB8fCBkb2N1bWVudC5ib2R5LFxuXHRcdHRvWTogZnVuY3Rpb24gKHkpIHsgd2luZG93LnNjcm9sbFRvKDAsIHkpIH0sXG5cdFx0Z2V0WTogZ2V0RG9jWSxcblx0XHRnZXRIZWlnaHQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2NFbGVtLmNsaWVudEhlaWdodCB9LFxuXHRcdGdldFRvcE9mOiBmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBnZXREb2NZKCkgLSBkb2NFbGVtLm9mZnNldFRvcCB9XG5cdH0pXG5cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIHNjcm9sbGVyIGZyb20gdGhlIHByb3ZpZGVkIGNvbnRhaW5lciBlbGVtZW50IChlLmcuLCBhIERJVilcblx0ICpcblx0ICogQHBhcmFtIHtzY3JvbGxDb250YWluZXJ9IFRoZSB2ZXJ0aWNhbCBwb3NpdGlvbiB3aXRoaW4gdGhlIGRvY3VtZW50LlxuXHQgKiBAcGFyYW0ge2RlZmF1bHREdXJhdGlvbn0gT3B0aW9uYWxseSBhIHZhbHVlIGZvciBkZWZhdWx0IGR1cmF0aW9uLCB1c2VkIGZvciBlYWNoIHNjcm9sbCBtZXRob2QgYnkgZGVmYXVsdC5cblx0ICogICAgICAgIElnbm9yZWQgaWYgMCBvciBudWxsIG9yIHVuZGVmaW5lZC5cblx0ICogQHBhcmFtIHtlZGdlT2Zmc2V0fSBPcHRpb25hbGx5IGEgdmFsdWUgZm9yIHRoZSBlZGdlIG9mZnNldCwgdXNlZCBieSBlYWNoIHNjcm9sbCBtZXRob2QgYnkgZGVmYXVsdC4gXG5cdCAqICAgICAgICBJZ25vcmVkIGlmIG51bGwgb3IgdW5kZWZpbmVkLlxuXHQgKiBAcmV0dXJucyBBIHNjcm9sbGVyIG9iamVjdCwgc2ltaWxhciB0byBgemVuc2Nyb2xsYCBidXQgY29udHJvbGxpbmcgdGhlIHByb3ZpZGVkIGVsZW1lbnQuXG5cdCAqL1xuXHR6ZW5zY3JvbGwuY3JlYXRlU2Nyb2xsZXIgPSBmdW5jdGlvbiAoc2Nyb2xsQ29udGFpbmVyLCBkZWZhdWx0RHVyYXRpb24sIGVkZ2VPZmZzZXQpIHtcblx0XHRyZXR1cm4gbWFrZVNjcm9sbGVyKHtcblx0XHRcdGJvZHk6IHNjcm9sbENvbnRhaW5lcixcblx0XHRcdHRvWTogZnVuY3Rpb24gKHkpIHsgc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCA9IHkgfSxcblx0XHRcdGdldFk6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3AgfSxcblx0XHRcdGdldEhlaWdodDogZnVuY3Rpb24gKCkgeyByZXR1cm4gTWF0aC5taW4oc2Nyb2xsQ29udGFpbmVyLmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY0VsZW0uY2xpZW50SGVpZ2h0KSB9LFxuXHRcdFx0Z2V0VG9wT2Y6IGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiBlbGVtLm9mZnNldFRvcCB9XG5cdFx0fSwgZGVmYXVsdER1cmF0aW9uLCBlZGdlT2Zmc2V0KVxuXHR9XG5cblxuXHQvLyBBdXRvbWF0aWMgbGluay1zbW9vdGhpbmcgb24gYWNob3JzXG5cdC8vIEV4Y2x1ZGUgSUU4LSBvciB3aGVuIG5hdGl2ZSBpcyBlbmFibGVkIG9yIFplbnNjcm9sbCBhdXRvLSBpcyBkaXNhYmxlZFxuXHRpZiAoXCJhZGRFdmVudExpc3RlbmVyXCIgaW4gd2luZG93ICYmICF3aW5kb3cubm9aZW5zbW9vdGggJiYgIWlzTmF0aXZlU21vb3RoU2Nyb2xsRW5hYmxlZE9uKGRvY3VtZW50LmJvZHkpKSB7XG5cblx0XHR2YXIgaXNIaXN0b3J5U3VwcG9ydGVkID0gXCJoaXN0b3J5XCIgaW4gd2luZG93ICYmIFwicHVzaFN0YXRlXCIgaW4gaGlzdG9yeVxuXHRcdHZhciBpc1Njcm9sbFJlc3RvcmF0aW9uU3VwcG9ydGVkID0gaXNIaXN0b3J5U3VwcG9ydGVkICYmIFwic2Nyb2xsUmVzdG9yYXRpb25cIiBpbiBoaXN0b3J5XG5cblx0XHQvLyBPbiBmaXJzdCBsb2FkICYgcmVmcmVzaCBtYWtlIHN1cmUgdGhlIGJyb3dzZXIgcmVzdG9yZXMgdGhlIHBvc2l0aW9uIGZpcnN0XG5cdFx0aWYgKGlzU2Nyb2xsUmVzdG9yYXRpb25TdXBwb3J0ZWQpIHtcblx0XHRcdGhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSBcImF1dG9cIlxuXHRcdH1cblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGlmIChpc1Njcm9sbFJlc3RvcmF0aW9uU3VwcG9ydGVkKSB7XG5cdFx0XHRcdC8vIFNldCBpdCB0byBtYW51YWxcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7IGhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSBcIm1hbnVhbFwiIH0sIDkpXG5cdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHRcdFx0aWYgKGV2ZW50LnN0YXRlICYmIFwiemVuc2Nyb2xsWVwiIGluIGV2ZW50LnN0YXRlKSB7XG5cdFx0XHRcdFx0XHR6ZW5zY3JvbGwudG9ZKGV2ZW50LnN0YXRlLnplbnNjcm9sbFkpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCBmYWxzZSlcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWRkIGVkZ2Ugb2Zmc2V0IG9uIGZpcnN0IGxvYWQgaWYgbmVjZXNzYXJ5XG5cdFx0XHQvLyBUaGlzIG1heSBub3Qgd29yayBvbiBJRSAob3Igb2xkZXIgY29tcHV0ZXI/KSBhcyBpdCByZXF1aXJlcyBtb3JlIHRpbWVvdXQsIGFyb3VuZCAxMDAgbXNcblx0XHRcdGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCkge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHQvLyBBZGp1c3RtZW50IGlzIG9ubHkgbmVlZGVkIGlmIHRoZXJlIGlzIGFuIGVkZ2Ugb2Zmc2V0OlxuXHRcdFx0XHRcdHZhciBlZGdlT2Zmc2V0ID0gemVuc2Nyb2xsLnNldHVwKCkuZWRnZU9mZnNldFxuXHRcdFx0XHRcdGlmIChlZGdlT2Zmc2V0KSB7XG5cdFx0XHRcdFx0XHR2YXIgdGFyZ2V0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiI1wiKVsxXSlcblx0XHRcdFx0XHRcdGlmICh0YXJnZXRFbGVtKSB7XG5cdFx0XHRcdFx0XHRcdHZhciB0YXJnZXRZID0gTWF0aC5tYXgoMCwgemVuc2Nyb2xsLmdldFRvcE9mKHRhcmdldEVsZW0pIC0gZWRnZU9mZnNldClcblx0XHRcdFx0XHRcdFx0dmFyIGRpZmYgPSB6ZW5zY3JvbGwuZ2V0WSgpIC0gdGFyZ2V0WVxuXHRcdFx0XHRcdFx0XHQvLyBPbmx5IGRvIHRoZSBhZGp1c3RtZW50IGlmIHRoZSBicm93c2VyIGlzIHZlcnkgY2xvc2UgdG8gdGhlIGVsZW1lbnQ6XG5cdFx0XHRcdFx0XHRcdGlmICgwIDw9IGRpZmYgJiYgZGlmZiA8IDkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIHRhcmdldFkpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIDkpXG5cdFx0XHR9XG5cblx0XHR9LCBmYWxzZSlcblxuXHRcdC8vIEhhbmRsaW5nIGNsaWNrcyBvbiBhbmNob3JzXG5cdFx0dmFyIFJFX25vWmVuc21vb3RoID0gbmV3IFJlZ0V4cChcIihefFxcXFxzKW5vWmVuc21vb3RoKFxcXFxzfCQpXCIpXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdHZhciBhbmNob3IgPSBldmVudC50YXJnZXRcblx0XHRcdHdoaWxlIChhbmNob3IgJiYgYW5jaG9yLnRhZ05hbWUgIT09IFwiQVwiKSB7XG5cdFx0XHRcdGFuY2hvciA9IGFuY2hvci5wYXJlbnROb2RlXG5cdFx0XHR9XG5cdFx0XHQvLyBMZXQgdGhlIGJyb3dzZXIgaGFuZGxlIHRoZSBjbGljayBpZiBpdCB3YXNuJ3Qgd2l0aCB0aGUgcHJpbWFyeSBidXR0b24sIG9yIHdpdGggc29tZSBtb2RpZmllciBrZXlzOlxuXHRcdFx0aWYgKCFhbmNob3IgfHwgZXZlbnQud2hpY2ggIT09IDEgfHwgZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LmFsdEtleSkge1xuXHRcdFx0XHRyZXR1cm5cblx0XHRcdH1cblx0XHRcdC8vIFNhdmUgdGhlIGN1cnJlbnQgc2Nyb2xsaW5nIHBvc2l0aW9uIHNvIGl0IGNhbiBiZSB1c2VkIGZvciBzY3JvbGwgcmVzdG9yYXRpb246XG5cdFx0XHRpZiAoaXNTY3JvbGxSZXN0b3JhdGlvblN1cHBvcnRlZCkge1xuXHRcdFx0XHR2YXIgaGlzdG9yeVN0YXRlID0gaGlzdG9yeS5zdGF0ZSAmJiB0eXBlb2YgaGlzdG9yeS5zdGF0ZSA9PT0gXCJvYmplY3RcIiA/IGhpc3Rvcnkuc3RhdGUgOiB7fVxuXHRcdFx0XHRoaXN0b3J5U3RhdGUuemVuc2Nyb2xsWSA9IHplbnNjcm9sbC5nZXRZKClcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRoaXN0b3J5LnJlcGxhY2VTdGF0ZShoaXN0b3J5U3RhdGUsIFwiXCIpXG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHQvLyBBdm9pZCB0aGUgQ2hyb21lIFNlY3VyaXR5IGV4Y2VwdGlvbiBvbiBmaWxlIHByb3RvY29sLCBlLmcuLCBmaWxlOi8vaW5kZXguaHRtbFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBGaW5kIHRoZSByZWZlcmVuY2VkIElEOlxuXHRcdFx0dmFyIGhyZWYgPSBhbmNob3IuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSB8fCBcIlwiXG5cdFx0XHRpZiAoaHJlZi5pbmRleE9mKFwiI1wiKSA9PT0gMCAmJiAhUkVfbm9aZW5zbW9vdGgudGVzdChhbmNob3IuY2xhc3NOYW1lKSkge1xuXHRcdFx0XHR2YXIgdGFyZ2V0WSA9IDBcblx0XHRcdFx0dmFyIHRhcmdldEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChocmVmLnN1YnN0cmluZygxKSlcblx0XHRcdFx0aWYgKGhyZWYgIT09IFwiI1wiKSB7XG5cdFx0XHRcdFx0aWYgKCF0YXJnZXRFbGVtKSB7XG5cdFx0XHRcdFx0XHQvLyBMZXQgdGhlIGJyb3dzZXIgaGFuZGxlIHRoZSBjbGljayBpZiB0aGUgdGFyZ2V0IElEIGlzIG5vdCBmb3VuZC5cblx0XHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0YXJnZXRZID0gemVuc2Nyb2xsLmdldFRvcE9mKHRhcmdldEVsZW0pXG5cdFx0XHRcdH1cblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHQvLyBCeSBkZWZhdWx0IHRyaWdnZXIgdGhlIGJyb3dzZXIncyBgaGFzaGNoYW5nZWAgZXZlbnQuLi5cblx0XHRcdFx0dmFyIG9uRG9uZSA9IGZ1bmN0aW9uICgpIHsgd2luZG93LmxvY2F0aW9uID0gaHJlZiB9XG5cdFx0XHRcdC8vIC4uLnVubGVzcyB0aGVyZSBpcyBhbiBlZGdlIG9mZnNldCBzcGVjaWZpZWRcblx0XHRcdFx0dmFyIGVkZ2VPZmZzZXQgPSB6ZW5zY3JvbGwuc2V0dXAoKS5lZGdlT2Zmc2V0XG5cdFx0XHRcdGlmIChlZGdlT2Zmc2V0KSB7XG5cdFx0XHRcdFx0dGFyZ2V0WSA9IE1hdGgubWF4KDAsIHRhcmdldFkgLSBlZGdlT2Zmc2V0KVxuXHRcdFx0XHRcdGlmIChpc0hpc3RvcnlTdXBwb3J0ZWQpIHtcblx0XHRcdFx0XHRcdG9uRG9uZSA9IGZ1bmN0aW9uICgpIHsgaGlzdG9yeS5wdXNoU3RhdGUoe30sIFwiXCIsIGhyZWYpIH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0emVuc2Nyb2xsLnRvWSh0YXJnZXRZLCBudWxsLCBvbkRvbmUpXG5cdFx0XHR9XG5cdFx0fSwgZmFsc2UpXG5cblx0fVxuXG5cblx0cmV0dXJuIHplbnNjcm9sbFxuXG5cbn0pKTtcbiIsImltcG9ydCB7IGd1aWRlUmVhY3RzIH0gZnJvbSAnLi9hc2lkZS5qcydcclxuaW1wb3J0IHplbnNjcm9sbCBmcm9tICcuLy4uLy4uL25vZGVfbW9kdWxlcy96ZW5zY3JvbGwvemVuc2Nyb2xsLmpzJ1xyXG4ndXNlIHN0cmljdCdcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRpYWxpemVCdG5zT2ZBY2NlcHRhbmNlKVxyXG5mdW5jdGlvbiBpbml0aWFsaXplQnRuc09mQWNjZXB0YW5jZSAoKSB7XHJcbiAgbGV0IGFjY2VwdGF0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGQtQV9idG4tYmVsdF9idG4tcG9zaXRpb25lcl9idG4nKVxyXG4gIGxldCBhbW91bnQgPSBhY2NlcHRhdGlvbkJ0bi5sZW5ndGhcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XHJcbiAgICBhY2NlcHRhdGlvbkJ0bltpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKGFjY2VwdGF0aW9uQnRuW2ldLmNsYXNzTGlzdC5jb250YWlucygnYmVmb3JlSXRJc0NsaWNrZWQnKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGFjY2VwdGF0aW9uQnRuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2JlZm9yZUl0SXNDbGlja2VkJylcclxuICAgICAgICBhY2NlcHRhdGlvbkJ0bltpXS5jbGFzc0xpc3QuYWRkKCdpdElzQ2xpY2tlZCcpXHJcbiAgICAgICAgc2lnblRoaXNBc0NsaWNrZWQoYWNjZXB0YXRpb25CdG5baV0pXHJcbiAgICAgICAgaW5pdGlhbGl6ZU5leHRTZWN0aW9uKGkpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5pdEFnYWluR3VpZGVUZXh0Rm9yVGhpc1NlY3Rpb24oaSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gc2lnblRoaXNBc0NsaWNrZWQgKGJ0bikge1xyXG4gIGJ0bi5pbm5lclRleHQgPSAnJztcclxufVxyXG5mdW5jdGlvbiBpbml0QWdhaW5HdWlkZVRleHRGb3JUaGlzU2VjdGlvbiAoaSkge1xyXG4gIGd1aWRlUmVhY3RzKGkpO1xyXG59XHJcbmZ1bmN0aW9uIGluaXRpYWxpemVOZXh0U2VjdGlvbiAoaXRlcmF0b3IpIHtcclxuICBsZXQgYWxsT3JuYW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLmNvcnB1c19zZWN0aW9uX2Zvcm1fb3JuYW1lbnQtbWFya2VyJylcclxuICBsZXQgdGhpc09ybmFtZW50ID0gYWxsT3JuYW1lbnRzW2l0ZXJhdG9yXTtcclxuICBsZXQgbmV4dE9ybmFtZW50ID0gYWxsT3JuYW1lbnRzW2l0ZXJhdG9yICsgMV07XHJcbiAgaWYgKGl0ZXJhdG9yPT09MXx8aXRlcmF0b3I9PT0yKXtcclxuICAgIHRoaXNPcm5hbWVudD1hbGxPcm5hbWVudHNbMF07XHJcbiAgICBuZXh0T3JuYW1lbnQ9YWxsT3JuYW1lbnRzWzFdO1xyXG4gIH1cclxuICB0aGlzT3JuYW1lbnQuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pY29ucy9wb2xlLjIuc3ZnJyk7XHJcbiAgdGhpc09ybmFtZW50LmNsYXNzTGlzdC5hZGQoJ2l0SXNQYXNzZWRUaHJvdWdodCcpO1xyXG4gIG5leHRPcm5hbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbiAgLy8gd2luZG93LnNjcm9sbFRvKDAsIG5leHRPcm5hbWVudC5vZmZzZXRUb3ApXHJcbiAgemVuc2Nyb2xsLnRvWSh0aGlzT3JuYW1lbnQub2Zmc2V0VG9wKTtcclxuICBlbmFibGVOZXh0U2VjdGlvbihpdGVyYXRvcik7XHJcbn1cclxuZnVuY3Rpb24gZW5hYmxlTmV4dFNlY3Rpb24gKGl0ZXJhdG9yKSB7XHJcbiAgaXRlcmF0b3IgKz0gMVxyXG4gIGxldCBhbGxTZWN0aW9ucyA9IFtcclxuICAgIHVuZGVmaW5lZCxcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkcycpLFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzIGZpZWxkc2V0JylbMV0sXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHMgZmllbGRzZXQnKVsyXSxcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkLUMnKSxcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkcy0yJylcclxuICBdXHJcbiAgYWxsU2VjdGlvbnNbaXRlcmF0b3JdLmNsYXNzTGlzdC5yZW1vdmUoJ2l0SXNIaWRkZW4nKTtcclxuICBndWlkZVJlYWN0cyhpdGVyYXRvcik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dCdG5PZkFjY2VwdGFuY2UgKGJ0biwgY29udGFpbmVyKSB7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2l0SXNIaWRkZW4nKTtcclxuICBidG4uY2xhc3NMaXN0LmFkZCgnYmVmb3JlSXRJc0NsaWNrZWQnKTtcclxufVxyXG4iLCIndXNlIHN0cmljdCdcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRpYWxpemUpXHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG4gIGxldCBvcHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9zZWxlY3QtbGlzdCBvcHRpb24nXHJcbiAgKVxyXG4gIGxldCBhbW91bnQgPSBvcHRzLmxlbmd0aFxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50OyBpKyspIHtcclxuICAgIGxldCBpdGVtID0gb3B0c1tpXVxyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgc2V0SU1HKGkpXHJcbiAgICAgIGVuYWJsZVN0cmlrZU5hbWVQYXJ0KClcclxuICAgICAgc2V0U3RyaWtlTmFtZVRvRGVzKGkpXHJcbiAgICAgIHNldFBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uKGkpXHJcbiAgICAgIHNldEZvcmNlRGVzKGkpXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5sZXQgb25seU9uY2UgPSAwXHJcblxyXG5mdW5jdGlvbiBlbmFibGVTdHJpa2VOYW1lUGFydCgpIHtcclxuICBvbmx5T25jZSsrXHJcbiAgaWYgKG9ubHlPbmNlID09PSAxKSB7XHJcbiAgICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdHJpa2VOYW1lJylcclxuICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnc3RyaWtlTmFtZScpXHJcbiAgfVxyXG59XHJcblxyXG5pbXBvcnQge2d1aWRlUmVhY3RzfSBmcm9tICcuL2FzaWRlLmpzJztcclxuZnVuY3Rpb24gc2V0UGFydE9mQXR0YWNrRGVzY3JpcHRpb24oaSkge1xyXG4gIGxldCBkZXNQYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncCBzcGFuLi0tZGVzX2VwaXRldCcpXHJcbiAgZGVzUGFydC5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKVxyXG4gIGxldCBhcnJheSA9IFtcclxuICAgICdicnV0YWxuZScsXHJcbiAgICAnbmllcHJ6ZXdpZHl3YWxuZScsXHJcbiAgICAnd3nEh3dpY3pvbmUnLFxyXG4gICAgJ25pZXphd29kbmUnLFxyXG4gICAgJ3ByZWN5enlqbmUnLFxyXG4gICAgJ3ptYXNvd2FuZScsXHJcbiAgICAncG9kc3TEmXBuZScsXHJcbiAgICAnd3lyYWNob3dhbmUnLFxyXG4gICAgJ3pkcmFkemllY2tpZScsXHJcbiAgICAnc3phbGXFhGN6ZScsXHJcbiAgICAnb3ByYWNvd2FuZSB3IGxhYm9yYXRvcml1bSBhbGNoZW1pY3pueW0nLFxyXG4gICAgJ25pZXBvd3N0cnp5bWFuZScsXHJcbiAgICAnd8WCYWRjemUnLFxyXG4gICAgJ21yb2N6bmUnLFxyXG4gICAgJ3RhamVtbmUnLFxyXG4gICAgJ3fFm2NpZWvFgmUnLFxyXG4gICAgJ3dzcGllcmFuZSBtb2PEhSBvdGNoxYJhbmknLFxyXG4gICAgJ3ByemVzeWNvbmUgesWCxIUgbW9jxIUnXHJcbiAgXVxyXG4gIGRlc1BhcnQuaW5uZXJUZXh0ID0gJywgJyArIGFycmF5W2ldXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldElNRyhpKSB7XHJcbiAgbGV0IGJlbHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnXHJcbiAgKVtpXVxyXG4gIGxldCBpbWFnID0gYmVsdC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVswXVxyXG4gIGxldCBhdHRyeWIgPSBpbWFnLmdldEF0dHJpYnV0ZSgnc3JjJylcclxuICBsZXQgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLXBsYXRlX2ltZ19pY29uJylcclxuICBpY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgYXR0cnliKVxyXG4gIGxldCBhbGxJTUdzID0gYmVsdC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKS5sZW5ndGhcclxuICBsZXQgc3RhbmRhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1zdGFuZGFydF9pbWdfYmNrZycpXHJcbiAgd2hpbGUgKHN0YW5kYXJ0LnF1ZXJ5U2VsZWN0b3IoJ0lNRycpICE9PSBudWxsKSB7XHJcbiAgICBsZXQgaW1hZ2VUb0RlbCA9IHN0YW5kYXJ0LnF1ZXJ5U2VsZWN0b3IoJ0lNRycpXHJcbiAgICBzdGFuZGFydC5yZW1vdmVDaGlsZChpbWFnZVRvRGVsKVxyXG4gIH1cclxuICBmb3IgKGxldCBqID0gMDsgaiA8IGFsbElNR3M7IGorKykge1xyXG4gICAgaWYgKGogPiAwKSB7XHJcbiAgICAgIGxldCB0aGVJTUcgPSBiZWx0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpW2pdXHJcbiAgICAgIGxldCBzb3VyY2VJTUcgPSB0aGVJTUcuZ2V0QXR0cmlidXRlKCdzcmMnKVxyXG4gICAgICBsZXQgbmV3SU1HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgbmV3SU1HLnNldEF0dHJpYnV0ZSgnc3JjJywgc291cmNlSU1HKVxyXG4gICAgICBzdGFuZGFydC5hcHBlbmRDaGlsZChuZXdJTUcpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmxldCBzZXROZXh0UGFydE9mRm9ybXVsYUZvclRoZUZpcnN0VGltZT0wO1xyXG5mdW5jdGlvbiBzZXRTdHJpa2VOYW1lVG9EZXMoaSkge1xyXG4gIGxldCBpbnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibmF6d2F1ZGVyemVuaWFcIl0nKVxyXG4gIGlucC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBzdHJOYW1lID0gaW5wLnZhbHVlO1xyXG4gICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfbmF6d2EtY2lvc3UnKTtcclxuICAgIGl0ZW0uaW5uZXJUZXh0ID0gc3RyTmFtZSArICcgdG8gbGVnZW5kYXJuZSc7XHJcbiAgICBzaG93QWxsRGVzKCk7XHJcbiAgfSlcclxuICBpbnAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGl0bSA9IGlucC52YWx1ZVxyXG4gICAgaWYgKGl0bS50cmltKCkgIT09ICcnJiZzZXROZXh0UGFydE9mRm9ybXVsYUZvclRoZUZpcnN0VGltZT09PTApIHtcclxuICAgICAgbGV0IHN0ck5hbWUgPSBpbnAudmFsdWVcclxuICAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfbmF6d2EtY2lvc3UnKVxyXG4gICAgICBpdGVtLmlubmVyVGV4dCA9IHN0ck5hbWUgKyAnIHRvIGxlZ2VuZGFybmUnXHJcbiAgICAgIHNob3dBbGxEZXMoKTtcclxuICAgICAgc2V0TmV4dFBhcnRPZkZvcm11bGEoKTtcclxuICAgICAgc2V0TmV4dFBhcnRPZkZvcm11bGFGb3JUaGVGaXJzdFRpbWU9MTtcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRGb3JjZURlcyhpKSB7XHJcbiAgbGV0IGJlbHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnXHJcbiAgKVtpXTtcclxuICBsZXQgSU1HcyA9IGJlbHQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylcclxuICBsZXQgaXRlciA9IElNR3MubGVuZ3RoXHJcbiAgbGV0IHN0cm5nID0gW11cclxuICBmb3IgKGxldCBqID0gMDsgaiA8IGl0ZXI7IGorKykge1xyXG4gICAgbGV0IElNRyA9IElNR3Nbal1cclxuICAgIGxldCBhdHRyeWIgPSBJTUcuZ2V0QXR0cmlidXRlKCdzcmMnKVxyXG4gICAgaWYgKGogIT09IDApIHtcclxuICAgICAgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL2Jyb24tYmFyYmEuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ2RvZGF0a293xIUgbW9jxIUgdWRlcnplbmlvd8SFJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy9icm9uLWN6YXIuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ2RvZGF0a293xIUgbW9jxIUgY3phcm5va3NpxJlza8SFJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy9icm9uLXN0cnouc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ2RvZGF0a293eW0ga3Vuc3p0ZW0gc3RyemVsZWNraW0nKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL2Jyb24tc3phbC5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnZG9kYXRrb3d5bSBzemFsZcWEc3R3ZW0nKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL2Jyb24temRyYS5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnbmllc3BvZHppYW55bSB6ZHJhZGxpd3ltIGNpb3NlbScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvenl3LW9naWVuLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCfFvHl3aW/FgmVtIG9nbmlhJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy96eXctcm96a2xhZC5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnxbx5d2lvxYJlbSByb3prxYJhZHUnKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL3p5dy13b2Quc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ8W8eXdpb8WCZW0gd29keScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvenl3LXptaWFuYS5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnxbx5d2lvxYJlbSB6bWlhbnknKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL3p5dy16eXdpYS5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnxbx5d2lvxYJlbSDFvHl3aWknKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ3fFgmFzbsSFIG3EhWRyb8WbY2nEhSDFvHl3aW/FgsOzdyBpIHRhbGVudMOzdycpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgbGV0IHN0cmluZ1RvU2V0ID0gc3Rybmcuam9pbignLCAnKTtcclxuICBsZXQgenl3RGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3p5d2lvbCcpO1xyXG4gIGxldCBpbWlEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfaW1pZScpO1xyXG4gIGxldCBwcnpEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfcHJ6eWRvbWVrJyk7XHJcbiAgbGV0IHpkYURlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc196ZGFuaWUnKTtcclxuICB6eXdEZXMuY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJyk7XHJcbiAgaW1pRGVzLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpO1xyXG4gIHByekRlcy5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKTtcclxuICB6ZGFEZXMuY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJyk7XHJcbiAgenl3RGVzLmlubmVyVGV4dCA9IHN0cmluZ1RvU2V0ICsgJy4nO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXROYW1lVG9EZXMoKSB7XHJcbiAgbGV0IGlucCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJpbWllXCJdJylcclxuICBsZXQgbmFtID0gaW5wLnZhbHVlXHJcbiAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfaW1pZScpXHJcbiAgaXRlbS5pbm5lclRleHQgPSBuYW0gKyAnICc7XHJcbiAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXROaWNrbmFtZVRvRGVzKCkge1xyXG4gIGxldCBpbnBCID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByenlkb21la1wiXScpXHJcbiAgbGV0IHN1cm5hbSA9IGlucEIudmFsdWVcclxuICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc19wcnp5ZG9tZWsnKVxyXG4gIGl0ZW0uaW5uZXJUZXh0ID0gc3VybmFtO1xyXG4gIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJylcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U2VudGVuY2VUb0RlcygpIHtcclxuICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc196ZGFuaWUnKVxyXG4gIGl0ZW0uaW5uZXJUZXh0ID0gJyB3em1hY25pYSBzd8OzaiBhdGFrICdcclxuICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dBbGxEZXMoKSB7XHJcbiAgbGV0IGFsbERlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlcycpXHJcbiAgYWxsRGVzLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldE5leHRQYXJ0T2ZGb3JtdWxhKCkge1xyXG4gIGxldCB0ZXh0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJuYXp3YXVkZXJ6ZW5pYVwiXScpO1xyXG4gIGxldCBhcmVhVmFsdWUgPSAodGV4dEFyZWEudmFsdWUpLnRyaW0oKTtcclxuICBpZiAoYXJlYVZhbHVlICE9PSAnJykge1xyXG4gICAgZW5hYmxlTmV4dFBhcnRPZkZvcm0oKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuYWJsZU5leHRQYXJ0T2ZGb3JtKCkge1xyXG4gIGxldCBuZXh0UGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkLUMnKTtcclxuICBuZXh0UGFydC5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbiAgbGV0IGFsbE9ybmFtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZy5jb3JwdXNfc2VjdGlvbl9mb3JtX29ybmFtZW50LW1hcmtlcicpO1xyXG4gIGxldCB0aGlzT3JuYW1lbnQgPSBhbGxPcm5hbWVudHNbMV07XHJcbiAgdGhpc09ybmFtZW50LnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaWNvbnMvcG9sZS4yLnN2ZycpO1xyXG4gIHRoaXNPcm5hbWVudC5jbGFzc0xpc3QuYWRkKCdpdElzUGFzc2VkVGhyb3VnaHQnKTtcclxuICBsZXQgbmV4dE9ybmFtZW50ID0gYWxsT3JuYW1lbnRzWzJdO1xyXG4gIG5leHRPcm5hbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbiAgdGhpc09ybmFtZW50LnN0eWxlLmJveFNpemU9XCJib3JkZXItYm94XCI7XHJcbiAgdGhpc09ybmFtZW50LnN0eWxlLnpJbmRleD1cIjFcIjtcclxuICBuZXh0UGFydC5zdHlsZS56SW5kZXg9XCIyXCI7XHJcbiAgZ3VpZGVSZWFjdHMoNCk7XHJcbn0iLCJpbXBvcnQge1xyXG4gIHNob3dCdG5PZkFjY2VwdGFuY2VcclxufSBmcm9tICcuL2Zvcm1faW5pdGlhbGl6ZU5leHRTZWN0aW9uLmpzJ1xyXG5pbXBvcnQge1xyXG4gIHNldE5hbWVUb0Rlc1xyXG59IGZyb20gJy4vYXRha2ktc2V0LXR4dC5qcydcclxuaW1wb3J0IHtcclxuICBzZXROaWNrbmFtZVRvRGVzXHJcbn0gZnJvbSAnLi9hdGFraS1zZXQtdHh0LmpzJ1xyXG5pbXBvcnQge1xyXG4gIHNldFNlbnRlbmNlVG9EZXNcclxufSBmcm9tICcuL2F0YWtpLXNldC10eHQuanMnXHJcbid1c2Ugc3RyaWN0J1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gIGluaXRVc2VyRmxvd1ZpYVNlY3Rpb25fc2VsZWN0Tm9kZXNUb1RoaXNQcm9jZXNzKClcclxufSlcclxuXHJcbmZ1bmN0aW9uIGluaXRVc2VyRmxvd1ZpYVNlY3Rpb25fc2VsZWN0Tm9kZXNUb1RoaXNQcm9jZXNzKCkge1xyXG4gIGxldCBub2RlcyA9IFtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJpbWllXCJdJyksXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJ6eWRvbWVrXCJdJyksXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiemF3b2xhbmllXCJdJylcclxuICBdXHJcbiAgbm9kZXMuZm9yRWFjaCgobm9kZSwgaWR4KSA9PiBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBsZXQgc2VjdGlvbkNvbXBsZXRlZCA9IGluaXRVc2VyRmxvd1RvTmV4dFNlY3Rpb25fY2hlY2tJZlRoaXNTZWN0aW9uSXNDb21wbGV0ZWQobm9kZXMpXHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgJiYgc2VjdGlvbkNvbXBsZXRlZCAhPT0gdHJ1ZSkge1xyXG4gICAgICBpbml0VXNlckZsb3dWaWFTZWN0aW9uX2dvVG9OZXh0Tm9kZShub2RlLCBpZHgsIG5vZGVzKVxyXG4gICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAxMyAmJiBzZWN0aW9uQ29tcGxldGVkID09PSB0cnVlKSB7XHJcbiAgICAgIG5vZGUuYmx1cigpXHJcbiAgICAgIGluaXRVc2VyRmxvd1RvTmV4dFNlY3Rpb25fc2hvd0J0bk9mQWNjZXB0YW5jZSgpXHJcbiAgICB9XHJcbiAgfSkpXHJcbiAgbm9kZXMuZm9yRWFjaCgobm9kZSwgaWR4KSA9PiBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgbGV0IHNlY3Rpb25Db21wbGV0ZWQgPSBpbml0VXNlckZsb3dUb05leHRTZWN0aW9uX2NoZWNrSWZUaGlzU2VjdGlvbklzQ29tcGxldGVkKG5vZGVzKVxyXG4gICAgaWYgKHNlY3Rpb25Db21wbGV0ZWQgPT09IHRydWUpIHtcclxuICAgICAgaW5pdFVzZXJGbG93VG9OZXh0U2VjdGlvbl9zaG93QnRuT2ZBY2NlcHRhbmNlKClcclxuICAgIH1cclxuICB9KSlcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFVzZXJGbG93VmlhU2VjdGlvbl9nb1RvTmV4dE5vZGUobm9kZSwgaWR4LCBub2Rlcykge1xyXG4gIG5vZGUuYmx1cigpXHJcbiAgaWYgKGlkeCA8IDIpIHtcclxuICAgIG5vZGVzW2lkeCArIDFdLmZvY3VzKClcclxuICB9IGVsc2UgaWYgKGlkeCA9PT0gMikge1xyXG4gICAgbm9kZXNbMF0uZm9jdXMoKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFVzZXJGbG93VG9OZXh0U2VjdGlvbl9jaGVja0lmVGhpc1NlY3Rpb25Jc0NvbXBsZXRlZChub2Rlcykge1xyXG4gIGxldCBhcnIgPSBbZmFsc2UsIGZhbHNlLCBmYWxzZV1cclxuICBub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlLCBpZHgpIHtcclxuICAgIGlmIChub2RlLnZhbHVlLnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgYXJyW2lkeF0gPSBmYWxzZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXJyW2lkeF0gPSB0cnVlXHJcbiAgICB9XHJcbiAgfSlcclxuICBpZiAoYXJyLmluZGV4T2YoZmFsc2UpID09PSAtMSkge1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG59XHJcbmxldCBjb250cm9sbGVyID0gMDtcclxuXHJcbmZ1bmN0aW9uIGluaXRVc2VyRmxvd1RvTmV4dFNlY3Rpb25fc2hvd0J0bk9mQWNjZXB0YW5jZSgpIHtcclxuICBpZiAoY29udHJvbGxlciA9PT0gMCkge1xyXG4gICAgbGV0IGJ0bkNvbnRhaW5lckZvclRoaXNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGQtQV9idG4tYmVsdF9idG4tcG9zaXRpb25lci5maXJzdFNlY3Rpb25CdG4nKVxyXG4gICAgbGV0IGJ0bk9mVGhpc1NlY3Rpb24gPSBidG5Db250YWluZXJGb3JUaGlzU2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZC1BX2J0bi1iZWx0X2J0bi1wb3NpdGlvbmVyX2J0bicpXHJcbiAgICBzaG93QnRuT2ZBY2NlcHRhbmNlKGJ0bk9mVGhpc1NlY3Rpb24sIGJ0bkNvbnRhaW5lckZvclRoaXNTZWN0aW9uKVxyXG4gICAgc2V0Q3VycmVudERhdGFUb0F2YXRhckRlc2NyaXB0aW9uKCk7XHJcbiAgICBjb250cm9sbGVyID0gMTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEN1cnJlbnREYXRhVG9BdmF0YXJEZXNjcmlwdGlvbigpIHtcclxuICBzZXROYW1lVG9EZXMoKVxyXG4gIHNldE5pY2tuYW1lVG9EZXMoKVxyXG4gIHNldFNlbnRlbmNlVG9EZXMoKVxyXG59IiwiJ3VzZSBzdHJpY3QnO1xyXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0VG9BcnJheShvYmplY3QpIHtcclxuICAgIGxldCBhbW91bnQgPSBvYmplY3QubGVuZ3RoO1xyXG4gICAgbGV0IGFycmF5ID1bXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpPGFtb3VudDsgaSsrKXtcclxuICAgICAgICBhcnJheS5wdXNoKG9iamVjdFtpXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbn0iLCJcInVzZSBzdHJpY3RcIjtcclxuaW1wb3J0IGl0ZXJhdG9yT2ZQb2ludHNMZWZ0IGZyb20gXCIuL2FzaWRlLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgc2hvd0J0bk9mQWNjZXB0YW5jZVxyXG59IGZyb20gXCIuL2Zvcm1faW5pdGlhbGl6ZU5leHRTZWN0aW9uLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgb2JqZWN0VG9BcnJheVxyXG59IGZyb20gXCIuL29iamVjdC10by1hcnJheS5qc1wiO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0aWFsaXplQXR0YWNrc1BhcnQpO1xyXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlQXR0YWNrcyhpKSB7XHJcbiAgbGV0IGF0dGFja3MgPSBvYmplY3RUb0FycmF5KFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lclwiXHJcbiAgICApXHJcbiAgKTtcclxuICBhdHRhY2tzLmZvckVhY2goZnVuY3Rpb24gKGF0dGFjaywgaWR4KSB7XHJcbiAgICBhdHRhY2suY2xhc3NMaXN0LnJlbW92ZShcImVuYWJsZWRcIik7XHJcbiAgICBsZXQgb3B0aW9ucyA9IG9iamVjdFRvQXJyYXkoYXR0YWNrLnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb25cIikpO1xyXG4gICAgYXR0YWNrLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgc3luY2hyb25pemVCYWNrZ3JvdW5kc09uQ2hhbmdlKGF0dGFjaywgb3B0aW9ucyk7XHJcbiAgICB9KTtcclxuICAgIG9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAob3B0aW9uKSB7XHJcbiAgICAgIGlmIChvcHRpb24uc2VsZWN0ZWQgPT09IHRydWUpIHtcclxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgYXR0YWNrc1tpXS5jbGFzc0xpc3QuYWRkKFwiZW5hYmxlZFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3luY2hyb25pemVCYWNrZ3JvdW5kc09uQ2hhbmdlKG5vZGUsIGNoaWxkcmVuKSB7XHJcbiAgbGV0IGJlbHRzID0gb2JqZWN0VG9BcnJheShcclxuICAgIG5vZGVcclxuICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdFwiKSk7XHJcbiAgYmVsdHMuZm9yRWFjaChiZWx0ID0+IGJlbHQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpKTtcclxuICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChvcHQsIGlkeCkge1xyXG4gICAgaWYgKG9wdC52YWx1ZSA9PT0gbm9kZS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKS52YWx1ZSkge1xyXG4gICAgICBiZWx0c1tpZHhdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMzAsIDE0NCwgMjU1KSc7XHJcbiAgICAgIGluaXRVc2VyRmxvd1RvTmV4dFNlY3Rpb25fc2hvd0J0bk9mQWNjZXB0YW5jZSgpO1xyXG4gICAgICBpdGVyYXRvck9mUG9pbnRzTGVmdC5pdGVyYXRvcihub2RlLCBpZHgpO1xyXG4gICAgfVxyXG4gIH0pXHJcbn07XHJcblxyXG5sZXQgY29udHJvbGxlciA9IDA7XHJcblxyXG5mdW5jdGlvbiBpbml0VXNlckZsb3dUb05leHRTZWN0aW9uX3Nob3dCdG5PZkFjY2VwdGFuY2UoKSB7XHJcbiAgaWYgKGNvbnRyb2xsZXIgPT09IDApIHtcclxuICAgIGxldCBidG5Db250YWluZXJGb3JUaGlzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGQtQV9idG4tYmVsdF9idG4tcG9zaXRpb25lci50aGlyZFNlY3Rpb25CdG5cIlxyXG4gICAgKTtcclxuICAgIGxldCBidG5PZlRoaXNTZWN0aW9uID0gYnRuQ29udGFpbmVyRm9yVGhpc1NlY3Rpb24ucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZC1BX2J0bi1iZWx0X2J0bi1wb3NpdGlvbmVyX2J0blwiXHJcbiAgICApO1xyXG4gICAgc2hvd0J0bk9mQWNjZXB0YW5jZShidG5PZlRoaXNTZWN0aW9uLCBidG5Db250YWluZXJGb3JUaGlzU2VjdGlvbik7XHJcbiAgICBjb250cm9sbGVyID0gMTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVBdHRhY2tzUGFydCgpIHtcclxuICBvYmplY3RUb0FycmF5KFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lclwiXHJcbiAgICApXHJcbiAgKS5mb3JFYWNoKGZ1bmN0aW9uIChjb250YWluZXIpIHtcclxuICAgIC8vb24gc2VsZWN0LWxpc3Qgb3B0aW9uIG1vdXNlIGhvdmVyIG92ZXJcclxuICAgIG9iamVjdFRvQXJyYXkoY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb25cIikpLmZvckVhY2goZnVuY3Rpb24gKFxyXG4gICAgICBvcHRpb24sXHJcbiAgICAgIGlkeFxyXG4gICAgKSB7XHJcbiAgICAgIG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgaGlnaGxpZ2h0QmFja2dyb3VuZChjb250YWluZXIsIGV2ZW50LCBpZHgpO1xyXG4gICAgICB9KTtcclxuICAgICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgaGlnaGxpZ2h0QmFja2dyb3VuZChjb250YWluZXIsIGV2ZW50LCBpZHgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgLy9vcHRpb24tbGlrZSBkaXZcclxuICAgIG9iamVjdFRvQXJyYXkoXHJcbiAgICAgIGNvbnRhaW5lclxyXG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHRcIikpLmZvckVhY2goZnVuY3Rpb24gKGJlbHQsIGlkeCkge1xyXG4gICAgICBiZWx0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGhpZ2hsaWdodEJhY2tncm91bmQoY29udGFpbmVyLCBldmVudCwgaWR4KTtcclxuICAgICAgfSk7XHJcbiAgICAgIGJlbHQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBoaWdobGlnaHRCYWNrZ3JvdW5kKGNvbnRhaW5lciwgZXZlbnQsIGlkeCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgLypcclxuICAgIFxyXG4gICAgbGV0IHNlbGVjdExpc3QgPSBjb250LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RcIik7XHJcbiAgICBzZWxlY3RMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGZvciAobGV0IHEgPSAwOyBxIDwgaXRlcjsgcSsrKSB7XHJcbiAgICAgICAgbGV0IG9wdCA9IG9wdGlvbnNbcV07XHJcbiAgICAgICAgaWYgKG9wdC52YWx1ZSA9PT0gc2VsZWN0TGlzdC52YWx1ZSkge1xyXG4gICAgICAgICAgaXRlcmF0b3JPZlBvaW50c0xlZnQuaXRlcmF0b3IoY29udCwgcSk7XHJcbiAgICAgICAgICAvL2d1aWRlUmVhY3RzKDMpXHJcbiAgICAgICAgICBpbml0VXNlckZsb3dUb05leHRTZWN0aW9uX3Nob3dCdG5PZkFjY2VwdGFuY2UoKTtcclxuICAgICAgICAgIHN5bmNocm9uaXplQmFja2dyb3VuZHNPZk90aGVyT3B0bnMoY29udCwgaXRlcik7XHJcbiAgICAgICAgICBzeW5jaHJvbml6ZVRoaXNCY2tncldpdGhJbWFnZUJlbHRIb3ZlckJja2dyKG9wdCwgY29udCwgcSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9Ki9cclxufVxyXG5cclxuZnVuY3Rpb24gaGlnaGxpZ2h0QmFja2dyb3VuZChjb250YWluZXIsIGV2ZW50LCBpZHgpIHtcclxuICBpZiAoZXZlbnQudHlwZSA9PT0gXCJtb3VzZW92ZXJcIikge1xyXG4gICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgIFwiLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdFwiXHJcbiAgICApW2lkeF0uY2xhc3NMaXN0LmFkZCgnSlNvbkhvdmVyJyk7XHJcbiAgICBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgXCJvcHRpb25cIlxyXG4gICAgKVtpZHhdLmNsYXNzTGlzdC5hZGQoJ0pTb25Ib3ZlcicpO1xyXG4gIH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gXCJtb3VzZW91dFwiKSB7XHJcbiAgICBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0XCJcclxuICAgIClbaWR4XS5jbGFzc0xpc3QucmVtb3ZlKCdKU29uSG92ZXInKTtcclxuICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICBcIm9wdGlvblwiXHJcbiAgICApW2lkeF0uY2xhc3NMaXN0LnJlbW92ZSgnSlNvbkhvdmVyJyk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtcclxuICAgIHNob3dCdG5PZkFjY2VwdGFuY2VcclxufSBmcm9tICcuL2Zvcm1faW5pdGlhbGl6ZU5leHRTZWN0aW9uLmpzJztcclxuaW1wb3J0IHtcclxuICAgIG9iamVjdFRvQXJyYXlcclxufSBmcm9tICcuL29iamVjdC10by1hcnJheS5qcyc7XHJcbmltcG9ydCB7XHJcbiAgICBlbmFibGVBdHRhY2tzXHJcbn0gZnJvbSAnLi9mb3JtX3NlY3Rpb24tdGhyZWUuanMnO1xyXG4ndXNlIHN0cmljdCdcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGluaXRVc2VyRmxvd1ZpYVNlY3Rpb25fc2VsZWN0Tm9kZXNUb1RoaXNQcm9jZXNzKCk7XHJcbn0pXHJcblxyXG5mdW5jdGlvbiBpbml0VXNlckZsb3dWaWFTZWN0aW9uX3NlbGVjdE5vZGVzVG9UaGlzUHJvY2VzcygpIHtcclxuICAgIGxldCBhdmF0YXJPYmplY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3JhZGlvLWxhYi1jb250YWluZXInKTtcclxuICAgIGxldCBhdmF0YXJzID0gb2JqZWN0VG9BcnJheShhdmF0YXJPYmplY3RzKTtcclxuICAgIGF2YXRhcnMuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGF2YXRhcklzQ2xpY2tlZChpdGVtLCBhdmF0YXJzLCBpZHgpO1xyXG4gICAgfSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhdmF0YXJJc0NsaWNrZWQoYXZhdGFyLCBhdmF0YXJzLCBpZHgpIHtcclxuICAgIGF2YXRhcnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXNDbGlja2VkJykpO1xyXG4gICAgbGV0IGF2ID0gYXZhdGFyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbiAgICBhdi5jaGVja2VkID0gdHJ1ZTtcclxuICAgIGF2YXRhci5jbGFzc0xpc3QuYWRkKCdpc0NsaWNrZWQnKTtcclxuICAgIGluaXRVc2VyRmxvd1RvTmV4dFNlY3Rpb25fc2hvd0J0bk9mQWNjZXB0YW5jZShpZHgpO1xyXG59XHJcbmxldCBjb250cm9sbGVyID0gMDtcclxuXHJcbmZ1bmN0aW9uIGluaXRVc2VyRmxvd1RvTmV4dFNlY3Rpb25fc2hvd0J0bk9mQWNjZXB0YW5jZShpZHgpIHtcclxuICAgIGVuYWJsZUF0dGFja3MoaWR4KTtcclxuICAgIGlmIChjb250cm9sbGVyID09PSAwKSB7XHJcbiAgICAgICAgbGV0IGJ0bkNvbnRhaW5lckZvclRoaXNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGQtQV9idG4tYmVsdF9idG4tcG9zaXRpb25lci5zZWNvbmRTZWN0aW9uQnRuJylcclxuICAgICAgICBsZXQgYnRuT2ZUaGlzU2VjdGlvbiA9IGJ0bkNvbnRhaW5lckZvclRoaXNTZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkLUFfYnRuLWJlbHRfYnRuLXBvc2l0aW9uZXJfYnRuJylcclxuICAgICAgICBzaG93QnRuT2ZBY2NlcHRhbmNlKGJ0bk9mVGhpc1NlY3Rpb24sIGJ0bkNvbnRhaW5lckZvclRoaXNTZWN0aW9uKVxyXG4gICAgICAgIGNvbnRyb2xsZXIgPSAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qZnVuY3Rpb24gaW5pdFVzZXJGbG93VmlhU2VjdGlvbl9zZWxlY3ROb2Rlc1RvVGhpc1Byb2Nlc3MgKCkge1xyXG4gIGxldCBub2RlcyA9IFtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJrbGFzYVwiXScpLFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0W25hbWU9XCJ1ZGVyemVuaWVcIl0nKSxcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJuYXp3YXVkZXJ6ZW5pYVwiXScpXHJcbiAgXVxyXG4gIGluaXRVc2VyRmxvd1ZpYVNlY3Rpb25fZ29Ub05leHROb2RlKG5vZGVzKTtcclxuICAvL25vZGVzWzJdLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vbGV0IGJ0bkNvbnRhaW5lckZvclRoaXNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGQtQV9idG4tYmVsdF9idG4tcG9zaXRpb25lci5zZWNvbmRTZWN0aW9uQnRuJylcclxuICAgIC8vbGV0IGJ0bk9mVGhpc1NlY3Rpb24gPSBidG5Db250YWluZXJGb3JUaGlzU2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZC1BX2J0bi1iZWx0X2J0bi1wb3NpdGlvbmVyX2J0bicpXHJcbiAgIC8vIHNob3dCdG5PZkFjY2VwdGFuY2UoYnRuT2ZUaGlzU2VjdGlvbiwgYnRuQ29udGFpbmVyRm9yVGhpc1NlY3Rpb24pXHJcbiAgLy99KVxyXG59XHJcbmZ1bmN0aW9uIGluaXRVc2VyRmxvd1ZpYVNlY3Rpb25fZ29Ub05leHROb2RlKG5vZGVzKXtcclxuICAgIGxldCBhbW91bnQgPSBub2Rlcy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpPTA7IGk8YW1vdW50OyBpKyspe1xyXG4gICAgICAgIGxldCBub2RlU2V0ID0gbm9kZXNbaV07XHJcbiAgICAgICAgbGV0IG9wdEl0ZXJhdG9yID0gbm9kZVNldC5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgaj0wOyBqPG9wdEl0ZXJhdG9yOyBqKyspe1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gbm9kZVNldFtqXTtcclxuICAgICAgICAgICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBnb1RvTmV4dE5vZGUobm9kZXMsIGkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuKi8iLCJpbXBvcnQgaXRlcmF0b3JPZlBvaW50c0xlZnQgZnJvbSAnLi9hc2lkZS5qcyc7XHJcbid1c2Ugc3RyaWN0JztcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXQpO1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGxldCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzLTJfZmllbGRzZXQtZF9jb250YWluZXJfYXRyeWIgLi0tYmVsdF9pY29uLWNvbnRhaW5lcicpO1xyXG4gICAgbGV0IGJlbHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzLTJfZmllbGRzZXQtZF9jb250YWluZXJfYXRyeWIgLi0tYmVsdF9ib2R5LWNvbnRhaW5lcl9ib2R5Jyk7XHJcbiAgICBsZXQgaXRlciA9IGJ0bnMubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVyOyBpKyspIHtcclxuICAgICAgICBpZiAoaSA+IC0xKSB7XHJcbiAgICAgICAgICAgIGxldCBhdHRyeWIgPSBidG5zW2ldO1xyXG4gICAgICAgICAgICBsZXQgYmVsdCA9IGJlbHRzW2ldO1xyXG4gICAgICAgICAgICBhdHRyeWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3JPZlBvaW50c0xlZnQubGVmdCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRQb2ludChiZWx0KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvaW50KGJlbHQpIHtcclxuICAgIGxldCBJTUcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJTUcnKTtcclxuICAgIElNRy5zZXRBdHRyaWJ1dGUoJ3NyYycsICdpY29ucy9pa29uYS1wb3RlZy5zdmcnKTtcclxuICAgIGJlbHQuYXBwZW5kQ2hpbGQoSU1HKTtcclxuICAgIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0LmxlZnQtLTtcclxuICAgIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0LmVxdWFsaXphdG9yKCk7XHJcbiAgICBJTUcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZGVsZXRlVGhpc0lNRyhJTUcpXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVUaGlzSU1HKHgpIHtcclxuICAgIHgucmVtb3ZlKCk7XHJcbiAgICBpdGVyYXRvck9mUG9pbnRzTGVmdC5sZWZ0Kys7XHJcbiAgICBpdGVyYXRvck9mUG9pbnRzTGVmdC5lcXVhbGl6YXRvcigpO1xyXG59IiwiaW1wb3J0IHtndWlkZVJlYWN0c30gZnJvbSAnLi9hc2lkZS5qcyc7XHJcblwidXNlIHN0cmljdFwiO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0aWFsaXplVGhpc1NlY3Rpb24pO1xyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZVRoaXNTZWN0aW9uKCkge1xyXG4gICAgbGV0IGxpc3RBID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc2V0LWMgI3phc2xvbmFcIlxyXG4gICAgKTtcclxuICAgIGxldCBsaXN0QiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNldC1jICNwYW5jZXJ6XCJcclxuICAgICk7XHJcbiAgICBsZXQgaW1hZ2VzQSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNldC1jX2ltZ3NfaW1nLmFcIlxyXG4gICAgKTtcclxuICAgIGxldCBpbWFnZXNCID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICBcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc2V0LWNfaW1nc19pbWcuYlwiXHJcbiAgICApO1xyXG4gICAgbGV0IG9wdHNBID0gbGlzdEEucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvblwiKTtcclxuICAgIGxldCBvcHRzQiA9IGxpc3RCLnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb25cIik7XHJcbiAgICBkeW5hbWl6ZVRoaXNMaXN0KGxpc3RBLCBvcHRzQSwgaW1hZ2VzQSwgbGlzdEIpO1xyXG4gICAgZHluYW1pemVUaGlzTGlzdChsaXN0Qiwgb3B0c0IsIGltYWdlc0IsIGxpc3RBKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHluYW1pemVUaGlzTGlzdChsaXN0LCBvcHRzLCBpbWFnZXMsIG90aGVyTGlzdCkge1xyXG4gICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBsaXN0LnZhbHVlO1xyXG4gICAgICAgIGxldCBpdGVyID0gb3B0cy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpdGVyIC0gMTsgaisrKSB7XHJcbiAgICAgICAgICAgIGltYWdlc1tqXS5jbGFzc0xpc3QuYWRkKFwiaXRJc1Vuc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBvcHQgPSBvcHRzW2ldO1xyXG4gICAgICAgICAgICBsZXQgb3B0VmFsdWUgPSBvcHQudmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gb3B0VmFsdWUgJiYgaSAhPT0gMykge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJpdElzVW5zZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbmFibGVOZXh0Rm9ybVBhcnQobGlzdCwgb3RoZXJMaXN0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlbmFibGVOZXh0Rm9ybVBhcnQobGlzdCwgb3RoZXJMaXN0KSB7XHJcbiAgICBsZXQgYSA9IGxpc3QudmFsdWU7XHJcbiAgICBsZXQgYiA9IG90aGVyTGlzdC52YWx1ZTtcclxuICAgIGlmIChhICE9PSBcIlwiICYmIGIgIT09IFwiXCIpIHtcclxuICAgICAgICBsZXQgbmV4dFBhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHMtMicpO1xyXG4gICAgICAgIG5leHRQYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2l0SXNIaWRkZW4nKTtcclxuICAgICAgICBsZXQgYWxsT3JuYW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLmNvcnB1c19zZWN0aW9uX2Zvcm1fb3JuYW1lbnQtbWFya2VyJyk7XHJcbiAgICAgICAgbGV0IHRoaXNPcm5hbWVudCA9IGFsbE9ybmFtZW50c1syXTtcclxuICAgICAgICB0aGlzT3JuYW1lbnQuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pY29ucy9wb2xlLjIuc3ZnJyk7XHJcbiAgICAgICAgdGhpc09ybmFtZW50LmNsYXNzTGlzdC5hZGQoJ2l0SXNQYXNzZWRUaHJvdWdodCcpO1xyXG4gICAgICAgIGxldCBuZXh0T3JuYW1lbnQgPSBhbGxPcm5hbWVudHNbM107XHJcbiAgICAgICAgbmV4dE9ybmFtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2l0SXNIaWRkZW4nKTtcclxuICAgICAgICBndWlkZVJlYWN0cyg1KTtcclxuICAgIH1cclxufSIsImltcG9ydCBpdGVyYXRvck9mUG9pbnRzTGVmdCBmcm9tICcuL2FzaWRlLmpzJztcclxuaW1wb3J0IHtndWlkZVJlYWN0c30gZnJvbSAnLi9hc2lkZS5qcyc7XHJcbid1c2Ugc3RyaWN0JztcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRpYWxpemVUaGlzU2VsZWN0KVxyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZVRoaXNTZWxlY3QoKSB7XHJcbiAgICBsZXQgb3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkcy0yX2ZpZWxkc2V0LWRfY29udGFpbmVyX21vY2UnKTtcclxuICAgIGxldCBpdGVyID0gb3B0aW9ucy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXI7IGkrKykge1xyXG4gICAgICAgIGxldCBvcHQgPSBvcHRpb25zW2ldO1xyXG4gICAgICAgIG9wdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaXRJc0NsaWNrZWQob3B0LCBvcHRpb25zLCBpdGVyLCBpKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGl0SXNDbGlja2VkKG9wdCwgb3B0cywgaXRlciwgaSkge1xyXG4gICAgbGV0IGNoZWNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJtb2MtcGlldG5vXCJdJyk7XHJcbiAgICBsZXQgY29zdE9mVGhpcyA9IFsxLDIsMiwxLDMsMV07XHJcbiAgICBpZiAoY2hlY2tzW2ldLmNoZWNrZWQ9PT10cnVlKXtcclxuICAgICAgICBjaGVja3NbaV0uY2hlY2tlZD1mYWxzZTtcclxuICAgICAgICBpdGVyYXRvck9mUG9pbnRzTGVmdC5pdGVyYXRvckIoY29zdE9mVGhpc1tpXSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBjaGVja3NbaV0uY2hlY2tlZD10cnVlO1xyXG4gICAgICAgIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0LmRlbGV0YXRvckIoY29zdE9mVGhpc1tpXSk7XHJcbiAgICAgICAgZ3VpZGVSZWFjdHMoNik7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGl0ZXI7IGorKykge1xyXG4gICAgICAgIGlmIChjaGVja3Nbal0uY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBvcHRzW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ2l0SXNIaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoZWNrc1tqXS5jaGVja2VkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBvcHRzW2pdLmNsYXNzTGlzdC5hZGQoJ2l0SXNIaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImluaXRpYWxpemVHdWlkZSIsImhpZGVVc2VyR3VpZGUiLCJzZXRUaW1lb3V0IiwiYXNpZGUiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwib3JubSIsInJvdGF0ZUFuZEhpZGVBc2lkZSIsImJ0biIsImNvbnRyb2xsZXIiLCJoZWFkQmVsdCIsInBpZWNlIiwib2Zmc2V0SGVpZ2h0Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJhdyIsIm9mZnNldFdpZHRoIiwiYWgiLCJ3c3AiLCJ4IiwieSIsInoiLCJsZWZ0IiwiYm90dG9tIiwiZ3VpZGVSZWFjdHMiLCJpIiwicmVtb3ZlIiwic2hha2VUb0ZvY3VzVXNlcnNBdHRlbnRpb24iLCJndWlkZSIsInRpdGxlIiwiYXJyIiwiaW5uZXJUZXh0IiwiYXJyQiIsIml0ZXJhdG9yT2ZQb2ludHNMZWZ0Iiwic3BlbnRPbkF0dGFjayIsIml0ZXJhdG9yIiwiY29udCIsIml0ZXJEZXZpY2UiLCJvcHQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicG9pbnRzIiwiYW1vdW50IiwibGVuZ3RoIiwiYmlsYW5zIiwiYW5pbWF0ZU9wdHNTcGVuZGluZyIsImRlbGV0YXRvciIsImNvaW4iLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXhTIiwid2luZG93Iiwic2Nyb2xsWSIsImF4WCIsIm9mZnNldFRvcCIsImF4WiIsImF4WSIsIm9mZnNldExlZnQiLCJ0b3AiLCJhcHBlbmRDaGlsZCIsIndpZHRoIiwiaGVpZ2h0IiwicmVtb3ZlQ2hpbGQiLCJpdGVyYXRvckIiLCJpbnRlZ2VyIiwiZGVsZXRhdG9yQiIsImVxdWFsaXphdG9yIiwidGhpcyIsImluaXRpYWxpemVCdG5zT2ZBY2NlcHRhbmNlIiwiYWNjZXB0YXRpb25CdG4iLCJjb250YWlucyIsInNpZ25UaGlzQXNDbGlja2VkIiwiaW5pdGlhbGl6ZU5leHRTZWN0aW9uIiwiaW5pdEFnYWluR3VpZGVUZXh0Rm9yVGhpc1NlY3Rpb24iLCJhbGxPcm5hbWVudHMiLCJ0aGlzT3JuYW1lbnQiLCJuZXh0T3JuYW1lbnQiLCJ6ZW5zY3JvbGwiLCJ0b1kiLCJlbmFibGVOZXh0U2VjdGlvbiIsImFsbFNlY3Rpb25zIiwidW5kZWZpbmVkIiwic2hvd0J0bk9mQWNjZXB0YW5jZSIsImNvbnRhaW5lciIsImluaXRpYWxpemUiLCJvcHRzIiwiaXRlbSIsInNldElNRyIsImVuYWJsZVN0cmlrZU5hbWVQYXJ0Iiwic2V0U3RyaWtlTmFtZVRvRGVzIiwic2V0UGFydE9mQXR0YWNrRGVzY3JpcHRpb24iLCJzZXRGb3JjZURlcyIsIm9ubHlPbmNlIiwiZGVzUGFydCIsImFycmF5IiwiYmVsdCIsImltYWciLCJhdHRyeWIiLCJnZXRBdHRyaWJ1dGUiLCJpY29uIiwiYWxsSU1HcyIsInN0YW5kYXJ0IiwiaW1hZ2VUb0RlbCIsImoiLCJ0aGVJTUciLCJzb3VyY2VJTUciLCJuZXdJTUciLCJzZXROZXh0UGFydE9mRm9ybXVsYUZvclRoZUZpcnN0VGltZSIsImlucCIsInN0ck5hbWUiLCJ2YWx1ZSIsInNob3dBbGxEZXMiLCJpdG0iLCJ0cmltIiwic2V0TmV4dFBhcnRPZkZvcm11bGEiLCJJTUdzIiwiaXRlciIsInN0cm5nIiwiSU1HIiwicHVzaCIsInN0cmluZ1RvU2V0Iiwiam9pbiIsInp5d0RlcyIsImltaURlcyIsInByekRlcyIsInpkYURlcyIsInNldE5hbWVUb0RlcyIsIm5hbSIsInNldE5pY2tuYW1lVG9EZXMiLCJpbnBCIiwic3VybmFtIiwic2V0U2VudGVuY2VUb0RlcyIsImFsbERlcyIsInRleHRBcmVhIiwiYXJlYVZhbHVlIiwiZW5hYmxlTmV4dFBhcnRPZkZvcm0iLCJuZXh0UGFydCIsImJveFNpemUiLCJ6SW5kZXgiLCJpbml0VXNlckZsb3dWaWFTZWN0aW9uX3NlbGVjdE5vZGVzVG9UaGlzUHJvY2VzcyIsIm5vZGVzIiwiZm9yRWFjaCIsIm5vZGUiLCJpZHgiLCJldmVudCIsInNlY3Rpb25Db21wbGV0ZWQiLCJpbml0VXNlckZsb3dUb05leHRTZWN0aW9uX2NoZWNrSWZUaGlzU2VjdGlvbklzQ29tcGxldGVkIiwia2V5Q29kZSIsImluaXRVc2VyRmxvd1ZpYVNlY3Rpb25fZ29Ub05leHROb2RlIiwiYmx1ciIsImluaXRVc2VyRmxvd1RvTmV4dFNlY3Rpb25fc2hvd0J0bk9mQWNjZXB0YW5jZSIsImZvY3VzIiwiaW5kZXhPZiIsImJ0bkNvbnRhaW5lckZvclRoaXNTZWN0aW9uIiwiYnRuT2ZUaGlzU2VjdGlvbiIsInNldEN1cnJlbnREYXRhVG9BdmF0YXJEZXNjcmlwdGlvbiIsIm9iamVjdFRvQXJyYXkiLCJvYmplY3QiLCJpbml0aWFsaXplQXR0YWNrc1BhcnQiLCJlbmFibGVBdHRhY2tzIiwiYXR0YWNrcyIsImF0dGFjayIsIm9wdGlvbnMiLCJzeW5jaHJvbml6ZUJhY2tncm91bmRzT25DaGFuZ2UiLCJvcHRpb24iLCJzZWxlY3RlZCIsImNoaWxkcmVuIiwiYmVsdHMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoaWdobGlnaHRCYWNrZ3JvdW5kIiwidHlwZSIsImF2YXRhck9iamVjdHMiLCJhdmF0YXJzIiwiYXZhdGFySXNDbGlja2VkIiwiYXZhdGFyIiwiYXYiLCJjaGVja2VkIiwiaW5pdCIsImJ0bnMiLCJhZGRQb2ludCIsImRlbGV0ZVRoaXNJTUciLCJpbml0aWFsaXplVGhpc1NlY3Rpb24iLCJsaXN0QSIsImxpc3RCIiwiaW1hZ2VzQSIsImltYWdlc0IiLCJvcHRzQSIsIm9wdHNCIiwiZHluYW1pemVUaGlzTGlzdCIsImxpc3QiLCJpbWFnZXMiLCJvdGhlckxpc3QiLCJvcHRWYWx1ZSIsImVuYWJsZU5leHRGb3JtUGFydCIsImEiLCJiIiwiaW5pdGlhbGl6ZVRoaXNTZWxlY3QiLCJpdElzQ2xpY2tlZCIsImNoZWNrcyIsImNvc3RPZlRoaXMiXSwibWFwcGluZ3MiOiI7OztJQUFBQSxTQUFTQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOENDLGVBQTlDOztJQUVBLFNBQVNBLGVBQVQsR0FBMkI7SUFDekJDO0lBQ0FDLGFBQVcsWUFBWTtJQUNyQixRQUFJQyxRQUFRTCxTQUFTTSxhQUFULENBQXVCLE9BQXZCLENBQVo7SUFDQUQsVUFBTUUsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsUUFBcEI7SUFDRCxHQUhELEVBR0csQ0FISDtJQUlEOztJQUVELFNBQVNMLGFBQVQsR0FBeUI7SUFDdkIsTUFBSU0sT0FBT1QsU0FBU00sYUFBVCxDQUF1QixhQUF2QixDQUFYO0lBQ0FHLE9BQUtSLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCUyxrQkFBL0I7SUFDQSxNQUFJQyxNQUFNWCxTQUFTTSxhQUFULENBQXVCLGtCQUF2QixDQUFWO0lBQ0FLLE1BQUlWLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCUyxrQkFBOUI7SUFDRDtJQUNELElBQUlFLGFBQWEsQ0FBakI7O0lB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
