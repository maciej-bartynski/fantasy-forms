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
      if (iterator === 3) {
        allSections[iterator].querySelector('.corpus_section_form_fields_fieldset-b_container').classList.remove('strikeName');
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyIuLi9zb3VyY2UvZHluYW1pY3MvYXNpZGUuanMiLCIuLi9ub2RlX21vZHVsZXMvemVuc2Nyb2xsL3plbnNjcm9sbC5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9mb3JtX2luaXRpYWxpemVOZXh0U2VjdGlvbi5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9hdGFraS1zZXQtdHh0LmpzIiwiLi4vc291cmNlL2R5bmFtaWNzL2Zvcm1fc2VjdGlvbi1vbmUuanMiLCIuLi9zb3VyY2UvZHluYW1pY3Mvb2JqZWN0LXRvLWFycmF5LmpzIiwiLi4vc291cmNlL2R5bmFtaWNzL2Zvcm1fc2VjdGlvbi10aHJlZS5qcyIsIi4uL3NvdXJjZS9keW5hbWljcy9mb3JtX3NlY3Rpb24tdHdvLmpzIiwiLi4vc291cmNlL2R5bmFtaWNzL2F0dHJ5YnMuanMiLCIuLi9zb3VyY2UvZHluYW1pY3Mvb2Jyb255LmpzIiwiLi4vc291cmNlL2R5bmFtaWNzL21vY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRpYWxpemVHdWlkZSlcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVHdWlkZSgpIHtcclxuICBoaWRlVXNlckd1aWRlKCk7XHJcbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpO1xyXG4gICAgYXNpZGUuY2xhc3NMaXN0LmFkZCgnb25Mb2FkJyk7XHJcbiAgfSwgMClcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZVVzZXJHdWlkZSgpIHtcclxuICBsZXQgb3JubSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1oZWFkJylcclxuICBvcm5tLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlQW5kSGlkZUFzaWRlKVxyXG4gIGxldCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1ndWlkZV9oaWRlJylcclxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVBbmRIaWRlQXNpZGUpXHJcbn1cclxubGV0IGNvbnRyb2xsZXIgPSAwXHJcblxyXG5mdW5jdGlvbiByb3RhdGVBbmRIaWRlQXNpZGUoKSB7XHJcbiAgbGV0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXNpZGUnKVxyXG4gIGlmIChjb250cm9sbGVyID09PSAwKSB7XHJcbiAgICBsZXQgaGVhZEJlbHQgPSBhc2lkZS5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtaGVhZCcpO1xyXG4gICAgbGV0IHBpZWNlID0gaGVhZEJlbHQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgYXNpZGUuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknXHJcbiAgICBsZXQgYXcgPSBhc2lkZS5vZmZzZXRXaWR0aFxyXG4gICAgbGV0IGFoID0gYXNpZGUub2Zmc2V0SGVpZ2h0XHJcbiAgICBsZXQgd3NwID0gYWggKyAoKGF3IC0gYWgpIC8gMilcclxuICAgIGxldCB4ID0gKHdzcCAqIC0xKSArIHBpZWNlXHJcbiAgICBsZXQgeSA9IHggKyAncHgnXHJcbiAgICBsZXQgeiA9ICgoYXcgLSBhaCkgLyAyKSArICdweCdcclxuICAgIGFzaWRlLnN0eWxlLmxlZnQgPSB5XHJcbiAgICBhc2lkZS5zdHlsZS5ib3R0b20gPSB6XHJcbiAgICBjb250cm9sbGVyID0gMVxyXG4gIH0gZWxzZSBpZiAoY29udHJvbGxlciA9PT0gMSkge1xyXG4gICAgYXNpZGUuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSdcclxuICAgIGFzaWRlLnN0eWxlLmxlZnQgPSAwXHJcbiAgICBhc2lkZS5zdHlsZS5ib3R0b20gPSAwXHJcbiAgICBjb250cm9sbGVyID0gMFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGd1aWRlUmVhY3RzKGkpIHtcclxuICBsZXQgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpO1xyXG4gIGFzaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ29uQWR2aWNlJyk7XHJcbiAgYXNpZGUuY2xhc3NMaXN0LnJlbW92ZSgnb25BZHZpY2VCJyk7XHJcbiAgc2V0VGltZW91dChmdW5jdGlvbigpe3NoYWtlVG9Gb2N1c1VzZXJzQXR0ZW50aW9uKGFzaWRlKX0sMCk7XHJcbiAgbGV0IGd1aWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWZvb3QgLnVzZXItZ3VpZGUnKTtcclxuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtZm9vdF90aXRsZScpO1xyXG4gIGxldCBhcnIgPSBbXHJcbiAgICAnR2R5IHdwaXN6ZXN6IGltacSZLCBwcnp5ZG9tZWsgaSB6YXdvxYJhbmllLCBwbyB6YXR3aWVyZHplbml1IHptaWFuIHBvamF3aSBzacSZIG5hc3TEmXBuYSBjesSZxZvEhyBmb3JtdWxhcnphLicsXHJcbiAgICAnUG8gd3lib3J6ZSBrbGFzeSwgcG9qYXdpIHNpZSBva25vIHd5Ym9ydSBhdGFrdSBzcG/Fm3LDs2QgdWRlcnplxYQgY2hhcmFrdGVyeXN0eWN6bnljaCBkbGEgdGVqIHBvc3RhY2kuJyxcclxuICAgICdXeWJpZXJ6IHVkZXJ6ZW5pZSwga2xpa2FqxIVjIHcgc8WCb3dvIG9waXN1asSFY2UgamUuIFByenkga2HFvGR5bSBlcGl0ZWNpZSB3aWRuaWVqZSBjaGFyYWt0ZXJ5c3R5a2EgY2lvc3UgdyBJa29uYWNoIMW7eXdpb8WCw7N3IGkgSWtvbmFjaCBVZGVyemXFhC4nLFxyXG4gICAgJ1d5bXnFm2wgbmF6d2UgZGxhIHVkZXJ6ZW5pYSB6IHBvcHJ6ZWRuaWVnbyBrcm9rdS4gR2R5IGrEhSB6YXR3aWVyZHppc3osIHBvamF3aSBzaWUga29sZWpuYSBjemXFm8SHIGthcnR5IHBvc3RhY2kuJyxcclxuICAgICdQbyB3eWJvcnplIGplZG5laiBvcGNqaSB6IGthxbxkZWogbGlzdHksIHBvamF3aSBzaWUga29sZWpuYSBjemXFm8SHIGthcnR5IHBvc3RhY2kuJyxcclxuICAgICdLbGlrbmlqIHR5bGUgb3BjamksIGlsZSBjaGNlc3ouIEthxbxkeSB6ZXN0YXcgKGN6eWxpIG1vYyBpIHBpZXRubykgemFiaWVyYSBjaSBwZXduxIUgaWxvxZvEhyBwdW5rdMOzdyBNxIVkcm/Fm2NpLicsXHJcbiAgICAnUm96ZGFqIHBvem9zdGHFgmUgcHVua3R5IG3EhWRyb8WbY2kgbmEgd3Nww7PFgmN6eW5uaWtpIHBvc3RhY2k6IMW7eWNpZSwgTcSFZHJvxZvEhywgUnVjaCBpIER6aWHFgmFuaWUuJ1xyXG4gIF1cclxuICBndWlkZS5pbm5lclRleHQgPSBhcnJbaV1cclxuICBsZXQgYXJyQiA9IFtcclxuICAgICd0b8W8c2Ftb8WbxIc6JyxcclxuICAgICdrbGFzYTonLFxyXG4gICAgJ2F0YWs6JyxcclxuICAgICduYXp3YSBhdGFrdTonLFxyXG4gICAgJ29icm9uYTonLFxyXG4gICAgJ3pkb2xub8WbxIcgaSBzxYJhYm/Fm8SHJyxcclxuICAgICdhdHJ5YnV0eTonXHJcbiAgXVxyXG4gIHRpdGxlLmlubmVyVGV4dCA9IGFyckJbaV1cclxufVxyXG5mdW5jdGlvbiBzaGFrZVRvRm9jdXNVc2Vyc0F0dGVudGlvbihhc2lkZSkge1xyXG4gIGlmIChjb250cm9sbGVyID09PSAxKSB7XHJcbiAgICBsZXQgaGVhZEJlbHQgPSBhc2lkZS5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtaGVhZCcpO1xyXG4gICAgbGV0IHBpZWNlID0gaGVhZEJlbHQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgYXNpZGUuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xyXG4gICAgbGV0IGF3ID0gYXNpZGUub2Zmc2V0V2lkdGg7XHJcbiAgICBsZXQgYWggPSBhc2lkZS5vZmZzZXRIZWlnaHQ7XHJcbiAgICBsZXQgd3NwID0gYWggKyAoKGF3IC0gYWgpIC8gMik7XHJcbiAgICBsZXQgeCA9ICh3c3AgKiAtMSkgKyBwaWVjZTtcclxuICAgIGxldCB5ID0geCArICdweCc7XHJcbiAgICBsZXQgeiA9ICgoYXcgLSBhaCkgLyAyKSArICdweCc7XHJcbiAgICBhc2lkZS5zdHlsZS5sZWZ0ID0geTtcclxuICAgIGFzaWRlLnN0eWxlLmJvdHRvbSA9IHo7XHJcbiAgICBhc2lkZS5jbGFzc0xpc3QuYWRkKCdvbkFkdmljZScpO1xyXG4gIH0gZWxzZSBpZiAoY29udHJvbGxlciA9PT0gMCkge1xyXG4gICAgYXNpZGUuY2xhc3NMaXN0LmFkZCgnb25BZHZpY2VCJyk7XHJcbiAgfVxyXG59XHJcblxyXG52YXIgaXRlcmF0b3JPZlBvaW50c0xlZnQgPSB7XHJcbiAgbGVmdDogMjAsXHJcbiAgc3BlbnRPbkF0dGFjazogMCxcclxuICBpdGVyYXRvcihjb250LCB4KSB7XHJcbiAgICBsZXQgaXRlckRldmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1ib2R5X2hvdy1tdWNoJylcclxuICAgIGxldCBvcHQgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcl9zZWxlY3QtY29udGFpbmVyX2ltZy1wYXJ0LWNvbnRhaW5lcl9vcHQnKVt4XVxyXG4gICAgbGV0IHBvaW50cyA9IG9wdC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVxyXG4gICAgbGV0IGFtb3VudCA9IChwb2ludHMubGVuZ3RoIC0gMSlcclxuICAgIGxldCBiaWxhbnMgPSBhbW91bnQgLSB0aGlzLnNwZW50T25BdHRhY2tcclxuICAgIHRoaXMubGVmdCA9IHRoaXMubGVmdCAtIGJpbGFuc1xyXG4gICAgdGhpcy5zcGVudE9uQXR0YWNrID0gYW1vdW50XHJcbiAgICBpdGVyRGV2aWNlLmlubmVyVGV4dCA9ICdQb3pvc3RhxYJvJyArICcgJyArIHRoaXMubGVmdCArICd4J1xyXG4gICAgdGhpcy5hbmltYXRlT3B0c1NwZW5kaW5nKG9wdCwgYW1vdW50KTtcclxuICB9LFxyXG4gIGRlbGV0YXRvcigpIHtcclxuICAgIGxldCBpdGVyRGV2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWJvZHlfaG93LW11Y2gnKVxyXG4gICAgdGhpcy5sZWZ0ID0gdGhpcy5sZWZ0ICsgdGhpcy5zcGVudE9uQXR0YWNrXHJcbiAgICB0aGlzLnNwZW50T25BdHRhY2sgPSAwXHJcbiAgICBpdGVyRGV2aWNlLmlubmVyVGV4dCA9ICdQb3pvc3RhxYJvJyArICcgJyArIHRoaXMubGVmdCArICd4J1xyXG4gIH0sXHJcbiAgYW5pbWF0ZU9wdHNTcGVuZGluZyhvcHQsIGFtb3VudCkge1xyXG4gICAgbGV0IGNvaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJTUcnKTtcclxuICAgIGNvaW4uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pY29ucy9pa29uYS1wb3RlZy5zdmcnKTtcclxuICAgIGNvaW4uY2xhc3NMaXN0LmFkZCgnaXRJc0NvaW4nKTtcclxuICAgIGxldCBheFMgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgIGxldCBheFggPSBvcHQub2Zmc2V0VG9wO1xyXG4gICAgbGV0IGF4WiA9IGF4WCAtIGF4UztcclxuICAgIGxldCBheFkgPSBvcHQub2Zmc2V0TGVmdDtcclxuICAgIGNvaW4uc3R5bGUudG9wID0gYXhaICsgJ3B4JztcclxuICAgIGNvaW4uc3R5bGUubGVmdCA9IGF4WSArICdweCc7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoY29pbik7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29pbi5zdHlsZS5sZWZ0ID0gJzAnO1xyXG4gICAgICBjb2luLnN0eWxlLnRvcCA9ICc5MCUnO1xyXG4gICAgICBjb2luLnN0eWxlLndpZHRoID0gJzU1cHgnO1xyXG4gICAgICBjb2luLnN0eWxlLmhlaWdodCA9ICc1NXB4JztcclxuICAgIH0sIDApO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5yZW1vdmVDaGlsZChjb2luKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXNpZGUnKS5jbGFzc0xpc3QuYWRkKCdvbkFkdmljZScpO1xyXG4gICAgfSwgNTUwKTtcclxuICB9LFxyXG4gIGl0ZXJhdG9yQihpbnRlZ2VyKSB7XHJcbiAgICBsZXQgaXRlckRldmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZS1ib2R5X2hvdy1tdWNoJylcclxuICAgIHRoaXMubGVmdCA9IHRoaXMubGVmdCArIGludGVnZXJcclxuICAgIGl0ZXJEZXZpY2UuaW5uZXJUZXh0ID0gJ1Bvem9zdGHFgm8nICsgJyAnICsgdGhpcy5sZWZ0ICsgJ3gnXHJcbiAgfSxcclxuICBkZWxldGF0b3JCKGludGVnZXIpIHtcclxuICAgIGxldCBpdGVyRGV2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlLWJvZHlfaG93LW11Y2gnKVxyXG4gICAgdGhpcy5sZWZ0ID0gdGhpcy5sZWZ0IC0gaW50ZWdlclxyXG4gICAgaXRlckRldmljZS5pbm5lclRleHQgPSAnUG96b3N0YcWCbycgKyAnICcgKyB0aGlzLmxlZnQgKyAneCdcclxuICB9LFxyXG4gIGVxdWFsaXphdG9yKCkge1xyXG4gICAgbGV0IGl0ZXJEZXZpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUtYm9keV9ob3ctbXVjaCcpXHJcbiAgICBpdGVyRGV2aWNlLmlubmVyVGV4dCA9ICdQb3pvc3RhxYJvJyArICcgJyArIHRoaXMubGVmdCArICd4J1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBpdGVyYXRvck9mUG9pbnRzTGVmdCIsIi8qKlxuICogWmVuc2Nyb2xsIDQuMC4yXG4gKiBodHRwczovL2dpdGh1Yi5jb20vemVuZ2Fib3IvemVuc2Nyb2xsL1xuICpcbiAqIENvcHlyaWdodCAyMDE14oCTMjAxOCBHYWJvciBMZW5hcmRcbiAqXG4gKiBUaGlzIGlzIGZyZWUgYW5kIHVuZW5jdW1iZXJlZCBzb2Z0d2FyZSByZWxlYXNlZCBpbnRvIHRoZSBwdWJsaWMgZG9tYWluLlxuICogXG4gKiBBbnlvbmUgaXMgZnJlZSB0byBjb3B5LCBtb2RpZnksIHB1Ymxpc2gsIHVzZSwgY29tcGlsZSwgc2VsbCwgb3JcbiAqIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSwgZWl0aGVyIGluIHNvdXJjZSBjb2RlIGZvcm0gb3IgYXMgYSBjb21waWxlZFxuICogYmluYXJ5LCBmb3IgYW55IHB1cnBvc2UsIGNvbW1lcmNpYWwgb3Igbm9uLWNvbW1lcmNpYWwsIGFuZCBieSBhbnlcbiAqIG1lYW5zLlxuICogXG4gKiBJbiBqdXJpc2RpY3Rpb25zIHRoYXQgcmVjb2duaXplIGNvcHlyaWdodCBsYXdzLCB0aGUgYXV0aG9yIG9yIGF1dGhvcnNcbiAqIG9mIHRoaXMgc29mdHdhcmUgZGVkaWNhdGUgYW55IGFuZCBhbGwgY29weXJpZ2h0IGludGVyZXN0IGluIHRoZVxuICogc29mdHdhcmUgdG8gdGhlIHB1YmxpYyBkb21haW4uIFdlIG1ha2UgdGhpcyBkZWRpY2F0aW9uIGZvciB0aGUgYmVuZWZpdFxuICogb2YgdGhlIHB1YmxpYyBhdCBsYXJnZSBhbmQgdG8gdGhlIGRldHJpbWVudCBvZiBvdXIgaGVpcnMgYW5kXG4gKiBzdWNjZXNzb3JzLiBXZSBpbnRlbmQgdGhpcyBkZWRpY2F0aW9uIHRvIGJlIGFuIG92ZXJ0IGFjdCBvZlxuICogcmVsaW5xdWlzaG1lbnQgaW4gcGVycGV0dWl0eSBvZiBhbGwgcHJlc2VudCBhbmQgZnV0dXJlIHJpZ2h0cyB0byB0aGlzXG4gKiBzb2Z0d2FyZSB1bmRlciBjb3B5cmlnaHQgbGF3LlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICogRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gKiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuXG4gKiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUlxuICogT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsXG4gKiBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1JcbiAqIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICogRm9yIG1vcmUgaW5mb3JtYXRpb24sIHBsZWFzZSByZWZlciB0byA8aHR0cDovL3VubGljZW5zZS5vcmc+XG4gKiBcbiAqL1xuXG4vKmpzaGludCBkZXZlbDp0cnVlLCBhc2k6dHJ1ZSAqL1xuXG4vKmdsb2JhbCBkZWZpbmUsIG1vZHVsZSAqL1xuXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkoKSlcblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KClcblx0fSBlbHNlIHtcblx0XHQoZnVuY3Rpb24gaW5zdGFsbCgpIHtcblx0XHRcdC8vIFRvIG1ha2Ugc3VyZSBaZW5zY3JvbGwgY2FuIGJlIHJlZmVyZW5jZWQgZnJvbSB0aGUgaGVhZGVyLCBiZWZvcmUgYGJvZHlgIGlzIGF2YWlsYWJsZVxuXHRcdFx0aWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LmJvZHkpIHtcblx0XHRcdFx0cm9vdC56ZW5zY3JvbGwgPSBmYWN0b3J5KClcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIHJldHJ5IDltcyBsYXRlclxuXHRcdFx0XHRzZXRUaW1lb3V0KGluc3RhbGwsIDkpXG5cdFx0XHR9XG5cdFx0fSkoKVxuXHR9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcblx0XCJ1c2Ugc3RyaWN0XCJcblxuXG5cdC8vIERldGVjdCBpZiB0aGUgYnJvd3NlciBhbHJlYWR5IHN1cHBvcnRzIG5hdGl2ZSBzbW9vdGggc2Nyb2xsaW5nIChlLmcuLCBGaXJlZm94IDM2KyBhbmQgQ2hyb21lIDQ5KykgYW5kIGl0IGlzIGVuYWJsZWQ6XG5cdHZhciBpc05hdGl2ZVNtb290aFNjcm9sbEVuYWJsZWRPbiA9IGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0cmV0dXJuIGVsZW0gJiYgXCJnZXRDb21wdXRlZFN0eWxlXCIgaW4gd2luZG93ICYmXG5cdFx0XHR3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKVtcInNjcm9sbC1iZWhhdmlvclwiXSA9PT0gXCJzbW9vdGhcIlxuXHR9XG5cblxuXHQvLyBFeGl0IGlmIGl04oCZcyBub3QgYSBicm93c2VyIGVudmlyb25tZW50OlxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFwiZG9jdW1lbnRcIiBpbiB3aW5kb3cpKSB7XG5cdFx0cmV0dXJuIHt9XG5cdH1cblxuXG5cdHZhciBtYWtlU2Nyb2xsZXIgPSBmdW5jdGlvbiAoY29udGFpbmVyLCBkZWZhdWx0RHVyYXRpb24sIGVkZ2VPZmZzZXQpIHtcblxuXHRcdC8vIFVzZSBkZWZhdWx0cyBpZiBub3QgcHJvdmlkZWRcblx0XHRkZWZhdWx0RHVyYXRpb24gPSBkZWZhdWx0RHVyYXRpb24gfHwgOTk5IC8vbXNcblx0XHRpZiAoIWVkZ2VPZmZzZXQgJiYgZWRnZU9mZnNldCAhPT0gMCkge1xuXHRcdFx0Ly8gV2hlbiBzY3JvbGxpbmcsIHRoaXMgYW1vdW50IG9mIGRpc3RhbmNlIGlzIGtlcHQgZnJvbSB0aGUgZWRnZXMgb2YgdGhlIGNvbnRhaW5lcjpcblx0XHRcdGVkZ2VPZmZzZXQgPSA5IC8vcHhcblx0XHR9XG5cblx0XHQvLyBIYW5kbGluZyB0aGUgbGlmZS1jeWNsZSBvZiB0aGUgc2Nyb2xsZXJcblx0XHR2YXIgc2Nyb2xsVGltZW91dElkXG5cdFx0dmFyIHNldFNjcm9sbFRpbWVvdXRJZCA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuXHRcdFx0c2Nyb2xsVGltZW91dElkID0gbmV3VmFsdWVcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTdG9wIHRoZSBjdXJyZW50IHNtb290aCBzY3JvbGwgb3BlcmF0aW9uIGltbWVkaWF0ZWx5XG5cdFx0ICovXG5cdFx0dmFyIHN0b3BTY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQoc2Nyb2xsVGltZW91dElkKVxuXHRcdFx0c2V0U2Nyb2xsVGltZW91dElkKDApXG5cdFx0fVxuXG5cdFx0dmFyIGdldFRvcFdpdGhFZGdlT2Zmc2V0ID0gZnVuY3Rpb24gKGVsZW0pIHtcblx0XHRcdHJldHVybiBNYXRoLm1heCgwLCBjb250YWluZXIuZ2V0VG9wT2YoZWxlbSkgLSBlZGdlT2Zmc2V0KVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNjcm9sbHMgdG8gYSBzcGVjaWZpYyB2ZXJ0aWNhbCBwb3NpdGlvbiBpbiB0aGUgZG9jdW1lbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3RhcmdldFl9IFRoZSB2ZXJ0aWNhbCBwb3NpdGlvbiB3aXRoaW4gdGhlIGRvY3VtZW50LlxuXHRcdCAqIEBwYXJhbSB7ZHVyYXRpb259IE9wdGlvbmFsbHkgdGhlIGR1cmF0aW9uIG9mIHRoZSBzY3JvbGwgb3BlcmF0aW9uLlxuXHRcdCAqICAgICAgICBJZiBub3QgcHJvdmlkZWQgdGhlIGRlZmF1bHQgZHVyYXRpb24gaXMgdXNlZC5cblx0XHQgKiBAcGFyYW0ge29uRG9uZX0gQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBvbmNlIHRoZSBzY3JvbGwgZmluaXNoZWQuXG5cdFx0ICovXG5cdFx0dmFyIHNjcm9sbFRvWSA9IGZ1bmN0aW9uICh0YXJnZXRZLCBkdXJhdGlvbiwgb25Eb25lKSB7XG5cdFx0XHRzdG9wU2Nyb2xsKClcblx0XHRcdGlmIChkdXJhdGlvbiA9PT0gMCB8fCAoZHVyYXRpb24gJiYgZHVyYXRpb24gPCAwKSB8fCBpc05hdGl2ZVNtb290aFNjcm9sbEVuYWJsZWRPbihjb250YWluZXIuYm9keSkpIHtcblx0XHRcdFx0Y29udGFpbmVyLnRvWSh0YXJnZXRZKVxuXHRcdFx0XHRpZiAob25Eb25lKSB7XG5cdFx0XHRcdFx0b25Eb25lKClcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIHN0YXJ0WSA9IGNvbnRhaW5lci5nZXRZKClcblx0XHRcdFx0dmFyIGRpc3RhbmNlID0gTWF0aC5tYXgoMCwgdGFyZ2V0WSkgLSBzdGFydFlcblx0XHRcdFx0dmFyIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG5cdFx0XHRcdGR1cmF0aW9uID0gZHVyYXRpb24gfHwgTWF0aC5taW4oTWF0aC5hYnMoZGlzdGFuY2UpLCBkZWZhdWx0RHVyYXRpb24pO1xuXHRcdFx0XHQoZnVuY3Rpb24gbG9vcFNjcm9sbCgpIHtcblx0XHRcdFx0XHRzZXRTY3JvbGxUaW1lb3V0SWQoc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHQvLyBDYWxjdWxhdGUgcGVyY2VudGFnZTpcblx0XHRcdFx0XHRcdHZhciBwID0gTWF0aC5taW4oMSwgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnRUaW1lKSAvIGR1cmF0aW9uKVxuXHRcdFx0XHRcdFx0Ly8gQ2FsY3VsYXRlIHRoZSBhYnNvbHV0ZSB2ZXJ0aWNhbCBwb3NpdGlvbjpcblx0XHRcdFx0XHRcdHZhciB5ID0gTWF0aC5tYXgoMCwgTWF0aC5mbG9vcihzdGFydFkgKyBkaXN0YW5jZSoocCA8IDAuNSA/IDIqcCpwIDogcCooNCAtIHAqMiktMSkpKVxuXHRcdFx0XHRcdFx0Y29udGFpbmVyLnRvWSh5KVxuXHRcdFx0XHRcdFx0aWYgKHAgPCAxICYmIChjb250YWluZXIuZ2V0SGVpZ2h0KCkgKyB5KSA8IGNvbnRhaW5lci5ib2R5LnNjcm9sbEhlaWdodCkge1xuXHRcdFx0XHRcdFx0XHRsb29wU2Nyb2xsKClcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoc3RvcFNjcm9sbCwgOTkpIC8vIHdpdGggY29vbGRvd24gdGltZVxuXHRcdFx0XHRcdFx0XHRpZiAob25Eb25lKSB7XG5cdFx0XHRcdFx0XHRcdFx0b25Eb25lKClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIDkpKVxuXHRcdFx0XHR9KSgpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU2Nyb2xscyB0byB0aGUgdG9wIG9mIGEgc3BlY2lmaWMgZWxlbWVudC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7ZWxlbX0gVGhlIGVsZW1lbnQgdG8gc2Nyb2xsIHRvLlxuXHRcdCAqIEBwYXJhbSB7ZHVyYXRpb259IE9wdGlvbmFsbHkgdGhlIGR1cmF0aW9uIG9mIHRoZSBzY3JvbGwgb3BlcmF0aW9uLlxuXHRcdCAqIEBwYXJhbSB7b25Eb25lfSBBbiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBpbnZva2VkIG9uY2UgdGhlIHNjcm9sbCBmaW5pc2hlZC5cblx0XHQgKi9cblx0XHR2YXIgc2Nyb2xsVG9FbGVtID0gZnVuY3Rpb24gKGVsZW0sIGR1cmF0aW9uLCBvbkRvbmUpIHtcblx0XHRcdHNjcm9sbFRvWShnZXRUb3BXaXRoRWRnZU9mZnNldChlbGVtKSwgZHVyYXRpb24sIG9uRG9uZSlcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTY3JvbGxzIGFuIGVsZW1lbnQgaW50byB2aWV3IGlmIG5lY2Vzc2FyeS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7ZWxlbX0gVGhlIGVsZW1lbnQuXG5cdFx0ICogQHBhcmFtIHtkdXJhdGlvbn0gT3B0aW9uYWxseSB0aGUgZHVyYXRpb24gb2YgdGhlIHNjcm9sbCBvcGVyYXRpb24uXG5cdFx0ICogQHBhcmFtIHtvbkRvbmV9IEFuIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgb25jZSB0aGUgc2Nyb2xsIGZpbmlzaGVkLlxuXHRcdCAqL1xuXHRcdHZhciBzY3JvbGxJbnRvVmlldyA9IGZ1bmN0aW9uIChlbGVtLCBkdXJhdGlvbiwgb25Eb25lKSB7XG5cdFx0XHR2YXIgZWxlbUhlaWdodCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG5cdFx0XHR2YXIgZWxlbUJvdHRvbSA9IGNvbnRhaW5lci5nZXRUb3BPZihlbGVtKSArIGVsZW1IZWlnaHRcblx0XHRcdHZhciBjb250YWluZXJIZWlnaHQgPSBjb250YWluZXIuZ2V0SGVpZ2h0KClcblx0XHRcdHZhciB5ID0gY29udGFpbmVyLmdldFkoKVxuXHRcdFx0dmFyIGNvbnRhaW5lckJvdHRvbSA9IHkgKyBjb250YWluZXJIZWlnaHRcblx0XHRcdGlmIChnZXRUb3BXaXRoRWRnZU9mZnNldChlbGVtKSA8IHkgfHwgKGVsZW1IZWlnaHQgKyBlZGdlT2Zmc2V0KSA+IGNvbnRhaW5lckhlaWdodCkge1xuXHRcdFx0XHQvLyBFbGVtZW50IGlzIGNsaXBwZWQgYXQgdG9wIG9yIGlzIGhpZ2hlciB0aGFuIHNjcmVlbi5cblx0XHRcdFx0c2Nyb2xsVG9FbGVtKGVsZW0sIGR1cmF0aW9uLCBvbkRvbmUpXG5cdFx0XHR9IGVsc2UgaWYgKChlbGVtQm90dG9tICsgZWRnZU9mZnNldCkgPiBjb250YWluZXJCb3R0b20pIHtcblx0XHRcdFx0Ly8gRWxlbWVudCBpcyBjbGlwcGVkIGF0IHRoZSBib3R0b20uXG5cdFx0XHRcdHNjcm9sbFRvWShlbGVtQm90dG9tIC0gY29udGFpbmVySGVpZ2h0ICsgZWRnZU9mZnNldCwgZHVyYXRpb24sIG9uRG9uZSlcblx0XHRcdH0gZWxzZSBpZiAob25Eb25lKSB7XG5cdFx0XHRcdG9uRG9uZSgpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU2Nyb2xscyB0byB0aGUgY2VudGVyIG9mIGFuIGVsZW1lbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2VsZW19IFRoZSBlbGVtZW50LlxuXHRcdCAqIEBwYXJhbSB7ZHVyYXRpb259IE9wdGlvbmFsbHkgdGhlIGR1cmF0aW9uIG9mIHRoZSBzY3JvbGwgb3BlcmF0aW9uLlxuXHRcdCAqIEBwYXJhbSB7b2Zmc2V0fSBPcHRpb25hbGx5IHRoZSBvZmZzZXQgb2YgdGhlIHRvcCBvZiB0aGUgZWxlbWVudCBmcm9tIHRoZSBjZW50ZXIgb2YgdGhlIHNjcmVlbi5cblx0XHQgKiAgICAgICAgQSB2YWx1ZSBvZiAwIGlzIGlnbm9yZWQuXG5cdFx0ICogQHBhcmFtIHtvbkRvbmV9IEFuIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgb25jZSB0aGUgc2Nyb2xsIGZpbmlzaGVkLlxuXHRcdCAqL1xuXHRcdHZhciBzY3JvbGxUb0NlbnRlck9mID0gZnVuY3Rpb24gKGVsZW0sIGR1cmF0aW9uLCBvZmZzZXQsIG9uRG9uZSkge1xuXHRcdFx0c2Nyb2xsVG9ZKE1hdGgubWF4KDAsIGNvbnRhaW5lci5nZXRUb3BPZihlbGVtKSAtIGNvbnRhaW5lci5nZXRIZWlnaHQoKS8yICsgKG9mZnNldCB8fCBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodC8yKSksIGR1cmF0aW9uLCBvbkRvbmUpXG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogQ2hhbmdlcyBkZWZhdWx0IHNldHRpbmdzIGZvciB0aGlzIHNjcm9sbGVyLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtuZXdEZWZhdWx0RHVyYXRpb259IE9wdGlvbmFsbHkgYSBuZXcgdmFsdWUgZm9yIGRlZmF1bHQgZHVyYXRpb24sIHVzZWQgZm9yIGVhY2ggc2Nyb2xsIG1ldGhvZCBieSBkZWZhdWx0LlxuXHRcdCAqICAgICAgICBJZ25vcmVkIGlmIG51bGwgb3IgdW5kZWZpbmVkLlxuXHRcdCAqIEBwYXJhbSB7bmV3RWRnZU9mZnNldH0gT3B0aW9uYWxseSBhIG5ldyB2YWx1ZSBmb3IgdGhlIGVkZ2Ugb2Zmc2V0LCB1c2VkIGJ5IGVhY2ggc2Nyb2xsIG1ldGhvZCBieSBkZWZhdWx0LiBJZ25vcmVkIGlmIG51bGwgb3IgdW5kZWZpbmVkLlxuXHRcdCAqIEByZXR1cm5zIEFuIG9iamVjdCB3aXRoIHRoZSBjdXJyZW50IHZhbHVlcy5cblx0XHQgKi9cblx0XHR2YXIgc2V0dXAgPSBmdW5jdGlvbiAobmV3RGVmYXVsdER1cmF0aW9uLCBuZXdFZGdlT2Zmc2V0KSB7XG5cdFx0XHRpZiAobmV3RGVmYXVsdER1cmF0aW9uID09PSAwIHx8IG5ld0RlZmF1bHREdXJhdGlvbikge1xuXHRcdFx0XHRkZWZhdWx0RHVyYXRpb24gPSBuZXdEZWZhdWx0RHVyYXRpb25cblx0XHRcdH1cblx0XHRcdGlmIChuZXdFZGdlT2Zmc2V0ID09PSAwIHx8IG5ld0VkZ2VPZmZzZXQpIHtcblx0XHRcdFx0ZWRnZU9mZnNldCA9IG5ld0VkZ2VPZmZzZXRcblx0XHRcdH1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRlZmF1bHREdXJhdGlvbjogZGVmYXVsdER1cmF0aW9uLFxuXHRcdFx0XHRlZGdlT2Zmc2V0OiBlZGdlT2Zmc2V0XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHNldHVwOiBzZXR1cCxcblx0XHRcdHRvOiBzY3JvbGxUb0VsZW0sXG5cdFx0XHR0b1k6IHNjcm9sbFRvWSxcblx0XHRcdGludG9WaWV3OiBzY3JvbGxJbnRvVmlldyxcblx0XHRcdGNlbnRlcjogc2Nyb2xsVG9DZW50ZXJPZixcblx0XHRcdHN0b3A6IHN0b3BTY3JvbGwsXG5cdFx0XHRtb3Zpbmc6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICEhc2Nyb2xsVGltZW91dElkIH0sXG5cdFx0XHRnZXRZOiBjb250YWluZXIuZ2V0WSxcblx0XHRcdGdldFRvcE9mOiBjb250YWluZXIuZ2V0VG9wT2Zcblx0XHR9XG5cblx0fVxuXG5cblx0dmFyIGRvY0VsZW0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcblx0dmFyIGdldERvY1kgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5kb3cuc2Nyb2xsWSB8fCBkb2NFbGVtLnNjcm9sbFRvcCB9XG5cblx0Ly8gQ3JlYXRlIGEgc2Nyb2xsZXIgZm9yIHRoZSBkb2N1bWVudDpcblx0dmFyIHplbnNjcm9sbCA9IG1ha2VTY3JvbGxlcih7XG5cdFx0Ym9keTogZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB8fCBkb2N1bWVudC5ib2R5LFxuXHRcdHRvWTogZnVuY3Rpb24gKHkpIHsgd2luZG93LnNjcm9sbFRvKDAsIHkpIH0sXG5cdFx0Z2V0WTogZ2V0RG9jWSxcblx0XHRnZXRIZWlnaHQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2NFbGVtLmNsaWVudEhlaWdodCB9LFxuXHRcdGdldFRvcE9mOiBmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBnZXREb2NZKCkgLSBkb2NFbGVtLm9mZnNldFRvcCB9XG5cdH0pXG5cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIHNjcm9sbGVyIGZyb20gdGhlIHByb3ZpZGVkIGNvbnRhaW5lciBlbGVtZW50IChlLmcuLCBhIERJVilcblx0ICpcblx0ICogQHBhcmFtIHtzY3JvbGxDb250YWluZXJ9IFRoZSB2ZXJ0aWNhbCBwb3NpdGlvbiB3aXRoaW4gdGhlIGRvY3VtZW50LlxuXHQgKiBAcGFyYW0ge2RlZmF1bHREdXJhdGlvbn0gT3B0aW9uYWxseSBhIHZhbHVlIGZvciBkZWZhdWx0IGR1cmF0aW9uLCB1c2VkIGZvciBlYWNoIHNjcm9sbCBtZXRob2QgYnkgZGVmYXVsdC5cblx0ICogICAgICAgIElnbm9yZWQgaWYgMCBvciBudWxsIG9yIHVuZGVmaW5lZC5cblx0ICogQHBhcmFtIHtlZGdlT2Zmc2V0fSBPcHRpb25hbGx5IGEgdmFsdWUgZm9yIHRoZSBlZGdlIG9mZnNldCwgdXNlZCBieSBlYWNoIHNjcm9sbCBtZXRob2QgYnkgZGVmYXVsdC4gXG5cdCAqICAgICAgICBJZ25vcmVkIGlmIG51bGwgb3IgdW5kZWZpbmVkLlxuXHQgKiBAcmV0dXJucyBBIHNjcm9sbGVyIG9iamVjdCwgc2ltaWxhciB0byBgemVuc2Nyb2xsYCBidXQgY29udHJvbGxpbmcgdGhlIHByb3ZpZGVkIGVsZW1lbnQuXG5cdCAqL1xuXHR6ZW5zY3JvbGwuY3JlYXRlU2Nyb2xsZXIgPSBmdW5jdGlvbiAoc2Nyb2xsQ29udGFpbmVyLCBkZWZhdWx0RHVyYXRpb24sIGVkZ2VPZmZzZXQpIHtcblx0XHRyZXR1cm4gbWFrZVNjcm9sbGVyKHtcblx0XHRcdGJvZHk6IHNjcm9sbENvbnRhaW5lcixcblx0XHRcdHRvWTogZnVuY3Rpb24gKHkpIHsgc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCA9IHkgfSxcblx0XHRcdGdldFk6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3AgfSxcblx0XHRcdGdldEhlaWdodDogZnVuY3Rpb24gKCkgeyByZXR1cm4gTWF0aC5taW4oc2Nyb2xsQ29udGFpbmVyLmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY0VsZW0uY2xpZW50SGVpZ2h0KSB9LFxuXHRcdFx0Z2V0VG9wT2Y6IGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiBlbGVtLm9mZnNldFRvcCB9XG5cdFx0fSwgZGVmYXVsdER1cmF0aW9uLCBlZGdlT2Zmc2V0KVxuXHR9XG5cblxuXHQvLyBBdXRvbWF0aWMgbGluay1zbW9vdGhpbmcgb24gYWNob3JzXG5cdC8vIEV4Y2x1ZGUgSUU4LSBvciB3aGVuIG5hdGl2ZSBpcyBlbmFibGVkIG9yIFplbnNjcm9sbCBhdXRvLSBpcyBkaXNhYmxlZFxuXHRpZiAoXCJhZGRFdmVudExpc3RlbmVyXCIgaW4gd2luZG93ICYmICF3aW5kb3cubm9aZW5zbW9vdGggJiYgIWlzTmF0aXZlU21vb3RoU2Nyb2xsRW5hYmxlZE9uKGRvY3VtZW50LmJvZHkpKSB7XG5cblx0XHR2YXIgaXNIaXN0b3J5U3VwcG9ydGVkID0gXCJoaXN0b3J5XCIgaW4gd2luZG93ICYmIFwicHVzaFN0YXRlXCIgaW4gaGlzdG9yeVxuXHRcdHZhciBpc1Njcm9sbFJlc3RvcmF0aW9uU3VwcG9ydGVkID0gaXNIaXN0b3J5U3VwcG9ydGVkICYmIFwic2Nyb2xsUmVzdG9yYXRpb25cIiBpbiBoaXN0b3J5XG5cblx0XHQvLyBPbiBmaXJzdCBsb2FkICYgcmVmcmVzaCBtYWtlIHN1cmUgdGhlIGJyb3dzZXIgcmVzdG9yZXMgdGhlIHBvc2l0aW9uIGZpcnN0XG5cdFx0aWYgKGlzU2Nyb2xsUmVzdG9yYXRpb25TdXBwb3J0ZWQpIHtcblx0XHRcdGhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSBcImF1dG9cIlxuXHRcdH1cblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGlmIChpc1Njcm9sbFJlc3RvcmF0aW9uU3VwcG9ydGVkKSB7XG5cdFx0XHRcdC8vIFNldCBpdCB0byBtYW51YWxcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7IGhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSBcIm1hbnVhbFwiIH0sIDkpXG5cdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHRcdFx0aWYgKGV2ZW50LnN0YXRlICYmIFwiemVuc2Nyb2xsWVwiIGluIGV2ZW50LnN0YXRlKSB7XG5cdFx0XHRcdFx0XHR6ZW5zY3JvbGwudG9ZKGV2ZW50LnN0YXRlLnplbnNjcm9sbFkpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCBmYWxzZSlcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWRkIGVkZ2Ugb2Zmc2V0IG9uIGZpcnN0IGxvYWQgaWYgbmVjZXNzYXJ5XG5cdFx0XHQvLyBUaGlzIG1heSBub3Qgd29yayBvbiBJRSAob3Igb2xkZXIgY29tcHV0ZXI/KSBhcyBpdCByZXF1aXJlcyBtb3JlIHRpbWVvdXQsIGFyb3VuZCAxMDAgbXNcblx0XHRcdGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCkge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHQvLyBBZGp1c3RtZW50IGlzIG9ubHkgbmVlZGVkIGlmIHRoZXJlIGlzIGFuIGVkZ2Ugb2Zmc2V0OlxuXHRcdFx0XHRcdHZhciBlZGdlT2Zmc2V0ID0gemVuc2Nyb2xsLnNldHVwKCkuZWRnZU9mZnNldFxuXHRcdFx0XHRcdGlmIChlZGdlT2Zmc2V0KSB7XG5cdFx0XHRcdFx0XHR2YXIgdGFyZ2V0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiI1wiKVsxXSlcblx0XHRcdFx0XHRcdGlmICh0YXJnZXRFbGVtKSB7XG5cdFx0XHRcdFx0XHRcdHZhciB0YXJnZXRZID0gTWF0aC5tYXgoMCwgemVuc2Nyb2xsLmdldFRvcE9mKHRhcmdldEVsZW0pIC0gZWRnZU9mZnNldClcblx0XHRcdFx0XHRcdFx0dmFyIGRpZmYgPSB6ZW5zY3JvbGwuZ2V0WSgpIC0gdGFyZ2V0WVxuXHRcdFx0XHRcdFx0XHQvLyBPbmx5IGRvIHRoZSBhZGp1c3RtZW50IGlmIHRoZSBicm93c2VyIGlzIHZlcnkgY2xvc2UgdG8gdGhlIGVsZW1lbnQ6XG5cdFx0XHRcdFx0XHRcdGlmICgwIDw9IGRpZmYgJiYgZGlmZiA8IDkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIHRhcmdldFkpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIDkpXG5cdFx0XHR9XG5cblx0XHR9LCBmYWxzZSlcblxuXHRcdC8vIEhhbmRsaW5nIGNsaWNrcyBvbiBhbmNob3JzXG5cdFx0dmFyIFJFX25vWmVuc21vb3RoID0gbmV3IFJlZ0V4cChcIihefFxcXFxzKW5vWmVuc21vb3RoKFxcXFxzfCQpXCIpXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdHZhciBhbmNob3IgPSBldmVudC50YXJnZXRcblx0XHRcdHdoaWxlIChhbmNob3IgJiYgYW5jaG9yLnRhZ05hbWUgIT09IFwiQVwiKSB7XG5cdFx0XHRcdGFuY2hvciA9IGFuY2hvci5wYXJlbnROb2RlXG5cdFx0XHR9XG5cdFx0XHQvLyBMZXQgdGhlIGJyb3dzZXIgaGFuZGxlIHRoZSBjbGljayBpZiBpdCB3YXNuJ3Qgd2l0aCB0aGUgcHJpbWFyeSBidXR0b24sIG9yIHdpdGggc29tZSBtb2RpZmllciBrZXlzOlxuXHRcdFx0aWYgKCFhbmNob3IgfHwgZXZlbnQud2hpY2ggIT09IDEgfHwgZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LmFsdEtleSkge1xuXHRcdFx0XHRyZXR1cm5cblx0XHRcdH1cblx0XHRcdC8vIFNhdmUgdGhlIGN1cnJlbnQgc2Nyb2xsaW5nIHBvc2l0aW9uIHNvIGl0IGNhbiBiZSB1c2VkIGZvciBzY3JvbGwgcmVzdG9yYXRpb246XG5cdFx0XHRpZiAoaXNTY3JvbGxSZXN0b3JhdGlvblN1cHBvcnRlZCkge1xuXHRcdFx0XHR2YXIgaGlzdG9yeVN0YXRlID0gaGlzdG9yeS5zdGF0ZSAmJiB0eXBlb2YgaGlzdG9yeS5zdGF0ZSA9PT0gXCJvYmplY3RcIiA/IGhpc3Rvcnkuc3RhdGUgOiB7fVxuXHRcdFx0XHRoaXN0b3J5U3RhdGUuemVuc2Nyb2xsWSA9IHplbnNjcm9sbC5nZXRZKClcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRoaXN0b3J5LnJlcGxhY2VTdGF0ZShoaXN0b3J5U3RhdGUsIFwiXCIpXG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHQvLyBBdm9pZCB0aGUgQ2hyb21lIFNlY3VyaXR5IGV4Y2VwdGlvbiBvbiBmaWxlIHByb3RvY29sLCBlLmcuLCBmaWxlOi8vaW5kZXguaHRtbFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBGaW5kIHRoZSByZWZlcmVuY2VkIElEOlxuXHRcdFx0dmFyIGhyZWYgPSBhbmNob3IuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSB8fCBcIlwiXG5cdFx0XHRpZiAoaHJlZi5pbmRleE9mKFwiI1wiKSA9PT0gMCAmJiAhUkVfbm9aZW5zbW9vdGgudGVzdChhbmNob3IuY2xhc3NOYW1lKSkge1xuXHRcdFx0XHR2YXIgdGFyZ2V0WSA9IDBcblx0XHRcdFx0dmFyIHRhcmdldEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChocmVmLnN1YnN0cmluZygxKSlcblx0XHRcdFx0aWYgKGhyZWYgIT09IFwiI1wiKSB7XG5cdFx0XHRcdFx0aWYgKCF0YXJnZXRFbGVtKSB7XG5cdFx0XHRcdFx0XHQvLyBMZXQgdGhlIGJyb3dzZXIgaGFuZGxlIHRoZSBjbGljayBpZiB0aGUgdGFyZ2V0IElEIGlzIG5vdCBmb3VuZC5cblx0XHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0YXJnZXRZID0gemVuc2Nyb2xsLmdldFRvcE9mKHRhcmdldEVsZW0pXG5cdFx0XHRcdH1cblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHQvLyBCeSBkZWZhdWx0IHRyaWdnZXIgdGhlIGJyb3dzZXIncyBgaGFzaGNoYW5nZWAgZXZlbnQuLi5cblx0XHRcdFx0dmFyIG9uRG9uZSA9IGZ1bmN0aW9uICgpIHsgd2luZG93LmxvY2F0aW9uID0gaHJlZiB9XG5cdFx0XHRcdC8vIC4uLnVubGVzcyB0aGVyZSBpcyBhbiBlZGdlIG9mZnNldCBzcGVjaWZpZWRcblx0XHRcdFx0dmFyIGVkZ2VPZmZzZXQgPSB6ZW5zY3JvbGwuc2V0dXAoKS5lZGdlT2Zmc2V0XG5cdFx0XHRcdGlmIChlZGdlT2Zmc2V0KSB7XG5cdFx0XHRcdFx0dGFyZ2V0WSA9IE1hdGgubWF4KDAsIHRhcmdldFkgLSBlZGdlT2Zmc2V0KVxuXHRcdFx0XHRcdGlmIChpc0hpc3RvcnlTdXBwb3J0ZWQpIHtcblx0XHRcdFx0XHRcdG9uRG9uZSA9IGZ1bmN0aW9uICgpIHsgaGlzdG9yeS5wdXNoU3RhdGUoe30sIFwiXCIsIGhyZWYpIH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0emVuc2Nyb2xsLnRvWSh0YXJnZXRZLCBudWxsLCBvbkRvbmUpXG5cdFx0XHR9XG5cdFx0fSwgZmFsc2UpXG5cblx0fVxuXG5cblx0cmV0dXJuIHplbnNjcm9sbFxuXG5cbn0pKTtcbiIsImltcG9ydCB7IGd1aWRlUmVhY3RzIH0gZnJvbSAnLi9hc2lkZS5qcydcclxuaW1wb3J0IHplbnNjcm9sbCBmcm9tICcuLy4uLy4uL25vZGVfbW9kdWxlcy96ZW5zY3JvbGwvemVuc2Nyb2xsLmpzJ1xyXG4ndXNlIHN0cmljdCdcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRpYWxpemVCdG5zT2ZBY2NlcHRhbmNlKVxyXG5mdW5jdGlvbiBpbml0aWFsaXplQnRuc09mQWNjZXB0YW5jZSAoKSB7XHJcbiAgbGV0IGFjY2VwdGF0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGQtQV9idG4tYmVsdF9idG4tcG9zaXRpb25lcl9idG4nKVxyXG4gIGxldCBhbW91bnQgPSBhY2NlcHRhdGlvbkJ0bi5sZW5ndGhcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XHJcbiAgICBhY2NlcHRhdGlvbkJ0bltpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKGFjY2VwdGF0aW9uQnRuW2ldLmNsYXNzTGlzdC5jb250YWlucygnYmVmb3JlSXRJc0NsaWNrZWQnKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGFjY2VwdGF0aW9uQnRuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2JlZm9yZUl0SXNDbGlja2VkJylcclxuICAgICAgICBhY2NlcHRhdGlvbkJ0bltpXS5jbGFzc0xpc3QuYWRkKCdpdElzQ2xpY2tlZCcpXHJcbiAgICAgICAgc2lnblRoaXNBc0NsaWNrZWQoYWNjZXB0YXRpb25CdG5baV0pXHJcbiAgICAgICAgaW5pdGlhbGl6ZU5leHRTZWN0aW9uKGkpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5pdEFnYWluR3VpZGVUZXh0Rm9yVGhpc1NlY3Rpb24oaSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gc2lnblRoaXNBc0NsaWNrZWQgKGJ0bikge1xyXG4gIGJ0bi5pbm5lclRleHQgPSAnJztcclxufVxyXG5mdW5jdGlvbiBpbml0QWdhaW5HdWlkZVRleHRGb3JUaGlzU2VjdGlvbiAoaSkge1xyXG4gIGd1aWRlUmVhY3RzKGkpO1xyXG59XHJcbmZ1bmN0aW9uIGluaXRpYWxpemVOZXh0U2VjdGlvbiAoaXRlcmF0b3IpIHtcclxuICBsZXQgYWxsT3JuYW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLmNvcnB1c19zZWN0aW9uX2Zvcm1fb3JuYW1lbnQtbWFya2VyJylcclxuICBsZXQgdGhpc09ybmFtZW50ID0gYWxsT3JuYW1lbnRzW2l0ZXJhdG9yXTtcclxuICBsZXQgbmV4dE9ybmFtZW50ID0gYWxsT3JuYW1lbnRzW2l0ZXJhdG9yICsgMV07XHJcbiAgaWYgKGl0ZXJhdG9yPT09MXx8aXRlcmF0b3I9PT0yKXtcclxuICAgIHRoaXNPcm5hbWVudD1hbGxPcm5hbWVudHNbMF07XHJcbiAgICBuZXh0T3JuYW1lbnQ9YWxsT3JuYW1lbnRzWzFdO1xyXG4gIH1cclxuICB0aGlzT3JuYW1lbnQuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pY29ucy9wb2xlLjIuc3ZnJyk7XHJcbiAgdGhpc09ybmFtZW50LmNsYXNzTGlzdC5hZGQoJ2l0SXNQYXNzZWRUaHJvdWdodCcpO1xyXG4gIG5leHRPcm5hbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbiAgLy8gd2luZG93LnNjcm9sbFRvKDAsIG5leHRPcm5hbWVudC5vZmZzZXRUb3ApXHJcbiAgemVuc2Nyb2xsLnRvWSh0aGlzT3JuYW1lbnQub2Zmc2V0VG9wKTtcclxuICBlbmFibGVOZXh0U2VjdGlvbihpdGVyYXRvcik7XHJcbn1cclxuZnVuY3Rpb24gZW5hYmxlTmV4dFNlY3Rpb24gKGl0ZXJhdG9yKSB7XHJcbiAgaXRlcmF0b3IgKz0gMVxyXG4gIGxldCBhbGxTZWN0aW9ucyA9IFtcclxuICAgIHVuZGVmaW5lZCxcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkcycpLFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzIGZpZWxkc2V0JylbMV0sXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHMgZmllbGRzZXQnKVsyXSxcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkLUMnKSxcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkcy0yJylcclxuICBdXHJcbiAgYWxsU2VjdGlvbnNbaXRlcmF0b3JdLmNsYXNzTGlzdC5yZW1vdmUoJ2l0SXNIaWRkZW4nKTtcclxuICBpZihpdGVyYXRvcj09PTMpe1xyXG4gICAgYWxsU2VjdGlvbnNbaXRlcmF0b3JdLnF1ZXJ5U2VsZWN0b3IoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc19maWVsZHNldC1iX2NvbnRhaW5lcicpLmNsYXNzTGlzdC5yZW1vdmUoJ3N0cmlrZU5hbWUnKTtcclxuICB9XHJcbiAgZ3VpZGVSZWFjdHMoaXRlcmF0b3IpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93QnRuT2ZBY2NlcHRhbmNlIChidG4sIGNvbnRhaW5lcikge1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdpdElzSGlkZGVuJyk7XHJcbiAgYnRuLmNsYXNzTGlzdC5hZGQoJ2JlZm9yZUl0SXNDbGlja2VkJyk7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0aWFsaXplKVxyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuICBsZXQgb3B0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfc2VsZWN0LWxpc3Qgb3B0aW9uJ1xyXG4gIClcclxuICBsZXQgYW1vdW50ID0gb3B0cy5sZW5ndGhcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XHJcbiAgICBsZXQgaXRlbSA9IG9wdHNbaV1cclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNldElNRyhpKVxyXG4gICAgICBlbmFibGVTdHJpa2VOYW1lUGFydCgpXHJcbiAgICAgIHNldFN0cmlrZU5hbWVUb0RlcyhpKVxyXG4gICAgICBzZXRQYXJ0T2ZBdHRhY2tEZXNjcmlwdGlvbihpKVxyXG4gICAgICBzZXRGb3JjZURlcyhpKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxubGV0IG9ubHlPbmNlID0gMFxyXG5cclxuZnVuY3Rpb24gZW5hYmxlU3RyaWtlTmFtZVBhcnQoKSB7XHJcbiAgb25seU9uY2UrK1xyXG4gIGlmIChvbmx5T25jZSA9PT0gMSkge1xyXG4gICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RyaWtlTmFtZScpXHJcbiAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3N0cmlrZU5hbWUnKVxyXG4gIH1cclxufVxyXG5cclxuaW1wb3J0IHtndWlkZVJlYWN0c30gZnJvbSAnLi9hc2lkZS5qcyc7XHJcbmZ1bmN0aW9uIHNldFBhcnRPZkF0dGFja0Rlc2NyaXB0aW9uKGkpIHtcclxuICBsZXQgZGVzUGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Agc3Bhbi4tLWRlc19lcGl0ZXQnKVxyXG4gIGRlc1BhcnQuY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJylcclxuICBsZXQgYXJyYXkgPSBbXHJcbiAgICAnYnJ1dGFsbmUnLFxyXG4gICAgJ25pZXByemV3aWR5d2FsbmUnLFxyXG4gICAgJ3d5xId3aWN6b25lJyxcclxuICAgICduaWV6YXdvZG5lJyxcclxuICAgICdwcmVjeXp5am5lJyxcclxuICAgICd6bWFzb3dhbmUnLFxyXG4gICAgJ3BvZHN0xJlwbmUnLFxyXG4gICAgJ3d5cmFjaG93YW5lJyxcclxuICAgICd6ZHJhZHppZWNraWUnLFxyXG4gICAgJ3N6YWxlxYRjemUnLFxyXG4gICAgJ29wcmFjb3dhbmUgdyBsYWJvcmF0b3JpdW0gYWxjaGVtaWN6bnltJyxcclxuICAgICduaWVwb3dzdHJ6eW1hbmUnLFxyXG4gICAgJ3fFgmFkY3plJyxcclxuICAgICdtcm9jem5lJyxcclxuICAgICd0YWplbW5lJyxcclxuICAgICd3xZtjaWVrxYJlJyxcclxuICAgICd3c3BpZXJhbmUgbW9jxIUgb3RjaMWCYW5pJyxcclxuICAgICdwcnplc3ljb25lIHrFgsSFIG1vY8SFJ1xyXG4gIF1cclxuICBkZXNQYXJ0LmlubmVyVGV4dCA9ICcsICcgKyBhcnJheVtpXVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRJTUcoaSkge1xyXG4gIGxldCBiZWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0J1xyXG4gIClbaV1cclxuICBsZXQgaW1hZyA9IGJlbHQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylbMF1cclxuICBsZXQgYXR0cnliID0gaW1hZy5nZXRBdHRyaWJ1dGUoJ3NyYycpXHJcbiAgbGV0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1wbGF0ZV9pbWdfaWNvbicpXHJcbiAgaWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIGF0dHJ5YilcclxuICBsZXQgYWxsSU1HcyA9IGJlbHQucXVlcnlTZWxlY3RvckFsbCgnaW1nJykubGVuZ3RoXHJcbiAgbGV0IHN0YW5kYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tc3RhbmRhcnRfaW1nX2Jja2cnKVxyXG4gIHdoaWxlIChzdGFuZGFydC5xdWVyeVNlbGVjdG9yKCdJTUcnKSAhPT0gbnVsbCkge1xyXG4gICAgbGV0IGltYWdlVG9EZWwgPSBzdGFuZGFydC5xdWVyeVNlbGVjdG9yKCdJTUcnKVxyXG4gICAgc3RhbmRhcnQucmVtb3ZlQ2hpbGQoaW1hZ2VUb0RlbClcclxuICB9XHJcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBhbGxJTUdzOyBqKyspIHtcclxuICAgIGlmIChqID4gMCkge1xyXG4gICAgICBsZXQgdGhlSU1HID0gYmVsdC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVtqXVxyXG4gICAgICBsZXQgc291cmNlSU1HID0gdGhlSU1HLmdldEF0dHJpYnV0ZSgnc3JjJylcclxuICAgICAgbGV0IG5ld0lNRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgIG5ld0lNRy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNvdXJjZUlNRylcclxuICAgICAgc3RhbmRhcnQuYXBwZW5kQ2hpbGQobmV3SU1HKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5sZXQgc2V0TmV4dFBhcnRPZkZvcm11bGFGb3JUaGVGaXJzdFRpbWU9MDtcclxuZnVuY3Rpb24gc2V0U3RyaWtlTmFtZVRvRGVzKGkpIHtcclxuICBsZXQgaW5wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm5hendhdWRlcnplbmlhXCJdJylcclxuICBpbnAuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgc3RyTmFtZSA9IGlucC52YWx1ZTtcclxuICAgIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX25hendhLWNpb3N1Jyk7XHJcbiAgICBpdGVtLmlubmVyVGV4dCA9IHN0ck5hbWUgKyAnIHRvIGxlZ2VuZGFybmUnO1xyXG4gICAgc2hvd0FsbERlcygpO1xyXG4gIH0pXHJcbiAgaW5wLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBpdG0gPSBpbnAudmFsdWVcclxuICAgIGlmIChpdG0udHJpbSgpICE9PSAnJyYmc2V0TmV4dFBhcnRPZkZvcm11bGFGb3JUaGVGaXJzdFRpbWU9PT0wKSB7XHJcbiAgICAgIGxldCBzdHJOYW1lID0gaW5wLnZhbHVlXHJcbiAgICAgIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX25hendhLWNpb3N1JylcclxuICAgICAgaXRlbS5pbm5lclRleHQgPSBzdHJOYW1lICsgJyB0byBsZWdlbmRhcm5lJ1xyXG4gICAgICBzaG93QWxsRGVzKCk7XHJcbiAgICAgIHNldE5leHRQYXJ0T2ZGb3JtdWxhKCk7XHJcbiAgICAgIHNldE5leHRQYXJ0T2ZGb3JtdWxhRm9yVGhlRmlyc3RUaW1lPTE7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Rm9yY2VEZXMoaSkge1xyXG4gIGxldCBiZWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0J1xyXG4gIClbaV07XHJcbiAgbGV0IElNR3MgPSBiZWx0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpXHJcbiAgbGV0IGl0ZXIgPSBJTUdzLmxlbmd0aFxyXG4gIGxldCBzdHJuZyA9IFtdXHJcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBpdGVyOyBqKyspIHtcclxuICAgIGxldCBJTUcgPSBJTUdzW2pdXHJcbiAgICBsZXQgYXR0cnliID0gSU1HLmdldEF0dHJpYnV0ZSgnc3JjJylcclxuICAgIGlmIChqICE9PSAwKSB7XHJcbiAgICAgIGlmIChhdHRyeWIgPT09ICdpY29ucy9icm9uLWJhcmJhLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCdkb2RhdGtvd8SFIG1vY8SFIHVkZXJ6ZW5pb3fEhScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvYnJvbi1jemFyLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCdkb2RhdGtvd8SFIG1vY8SFIGN6YXJub2tzacSZc2vEhScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvYnJvbi1zdHJ6LnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCdkb2RhdGtvd3ltIGt1bnN6dGVtIHN0cnplbGVja2ltJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy9icm9uLXN6YWwuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ2RvZGF0a293eW0gc3phbGXFhHN0d2VtJylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy9icm9uLXpkcmEuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ25pZXNwb2R6aWFueW0gemRyYWRsaXd5bSBjaW9zZW0nKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL3p5dy1vZ2llbi5zdmcnKSB7XHJcbiAgICAgICAgc3RybmcucHVzaCgnxbx5d2lvxYJlbSBvZ25pYScpXHJcbiAgICAgIH0gZWxzZSBpZiAoYXR0cnliID09PSAnaWNvbnMvenl3LXJvemtsYWQuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ8W8eXdpb8WCZW0gcm96a8WCYWR1JylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy96eXctd29kLnN2ZycpIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCfFvHl3aW/FgmVtIHdvZHknKVxyXG4gICAgICB9IGVsc2UgaWYgKGF0dHJ5YiA9PT0gJ2ljb25zL3p5dy16bWlhbmEuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ8W8eXdpb8WCZW0gem1pYW55JylcclxuICAgICAgfSBlbHNlIGlmIChhdHRyeWIgPT09ICdpY29ucy96eXctenl3aWEuc3ZnJykge1xyXG4gICAgICAgIHN0cm5nLnB1c2goJ8W8eXdpb8WCZW0gxbx5d2lpJylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdHJuZy5wdXNoKCd3xYJhc27EhSBtxIVkcm/Fm2NpxIUgxbx5d2lvxYLDs3cgaSB0YWxlbnTDs3cnKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCBzdHJpbmdUb1NldCA9IHN0cm5nLmpvaW4oJywgJyk7XHJcbiAgbGV0IHp5d0RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLWRlc196eXdpb2wnKTtcclxuICBsZXQgaW1pRGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX2ltaWUnKTtcclxuICBsZXQgcHJ6RGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX3Byenlkb21laycpO1xyXG4gIGxldCB6ZGFEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfemRhbmllJyk7XHJcbiAgenl3RGVzLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpO1xyXG4gIGltaURlcy5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKTtcclxuICBwcnpEZXMuY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJyk7XHJcbiAgemRhRGVzLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpO1xyXG4gIHp5d0Rlcy5pbm5lclRleHQgPSBzdHJpbmdUb1NldCArICcuJztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0TmFtZVRvRGVzKCkge1xyXG4gIGxldCBpbnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiaW1pZVwiXScpXHJcbiAgbGV0IG5hbSA9IGlucC52YWx1ZVxyXG4gIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tZGVzX2ltaWUnKVxyXG4gIGl0ZW0uaW5uZXJUZXh0ID0gbmFtICsgJyAnO1xyXG4gIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXRzSGlkZGVuJylcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0Tmlja25hbWVUb0RlcygpIHtcclxuICBsZXQgaW5wQiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcnp5ZG9tZWtcIl0nKVxyXG4gIGxldCBzdXJuYW0gPSBpbnBCLnZhbHVlXHJcbiAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfcHJ6eWRvbWVrJylcclxuICBpdGVtLmlubmVyVGV4dCA9IHN1cm5hbTtcclxuICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2l0c0hpZGRlbicpXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFNlbnRlbmNlVG9EZXMoKSB7XHJcbiAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXNfemRhbmllJylcclxuICBpdGVtLmlubmVyVGV4dCA9ICcgd3ptYWNuaWEgc3fDs2ogYXRhayAnXHJcbiAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93QWxsRGVzKCkge1xyXG4gIGxldCBhbGxEZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1kZXMnKVxyXG4gIGFsbERlcy5jbGFzc0xpc3QucmVtb3ZlKCdpdHNIaWRkZW4nKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXROZXh0UGFydE9mRm9ybXVsYSgpIHtcclxuICBsZXQgdGV4dEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibmF6d2F1ZGVyemVuaWFcIl0nKTtcclxuICBsZXQgYXJlYVZhbHVlID0gKHRleHRBcmVhLnZhbHVlKS50cmltKCk7XHJcbiAgaWYgKGFyZWFWYWx1ZSAhPT0gJycpIHtcclxuICAgIGVuYWJsZU5leHRQYXJ0T2ZGb3JtKCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbmFibGVOZXh0UGFydE9mRm9ybSgpIHtcclxuICBsZXQgbmV4dFBhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZC1DJyk7XHJcbiAgbmV4dFBhcnQuY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0hpZGRlbicpO1xyXG4gIGxldCBhbGxPcm5hbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcuY29ycHVzX3NlY3Rpb25fZm9ybV9vcm5hbWVudC1tYXJrZXInKTtcclxuICBsZXQgdGhpc09ybmFtZW50ID0gYWxsT3JuYW1lbnRzWzFdO1xyXG4gIHRoaXNPcm5hbWVudC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ljb25zL3BvbGUuMi5zdmcnKTtcclxuICB0aGlzT3JuYW1lbnQuY2xhc3NMaXN0LmFkZCgnaXRJc1Bhc3NlZFRocm91Z2h0Jyk7XHJcbiAgbGV0IG5leHRPcm5hbWVudCA9IGFsbE9ybmFtZW50c1syXTtcclxuICBuZXh0T3JuYW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXRJc0hpZGRlbicpO1xyXG4gIHRoaXNPcm5hbWVudC5zdHlsZS5ib3hTaXplPVwiYm9yZGVyLWJveFwiO1xyXG4gIHRoaXNPcm5hbWVudC5zdHlsZS56SW5kZXg9XCIxXCI7XHJcbiAgbmV4dFBhcnQuc3R5bGUuekluZGV4PVwiMlwiO1xyXG4gIGd1aWRlUmVhY3RzKDQpO1xyXG59IiwiaW1wb3J0IHtcclxuICBzaG93QnRuT2ZBY2NlcHRhbmNlXHJcbn0gZnJvbSAnLi9mb3JtX2luaXRpYWxpemVOZXh0U2VjdGlvbi5qcydcclxuaW1wb3J0IHtcclxuICBzZXROYW1lVG9EZXNcclxufSBmcm9tICcuL2F0YWtpLXNldC10eHQuanMnXHJcbmltcG9ydCB7XHJcbiAgc2V0Tmlja25hbWVUb0Rlc1xyXG59IGZyb20gJy4vYXRha2ktc2V0LXR4dC5qcydcclxuaW1wb3J0IHtcclxuICBzZXRTZW50ZW5jZVRvRGVzXHJcbn0gZnJvbSAnLi9hdGFraS1zZXQtdHh0LmpzJ1xyXG4ndXNlIHN0cmljdCdcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICBpbml0VXNlckZsb3dWaWFTZWN0aW9uX3NlbGVjdE5vZGVzVG9UaGlzUHJvY2VzcygpXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBpbml0VXNlckZsb3dWaWFTZWN0aW9uX3NlbGVjdE5vZGVzVG9UaGlzUHJvY2VzcygpIHtcclxuICBsZXQgbm9kZXMgPSBbXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiaW1pZVwiXScpLFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByenlkb21la1wiXScpLFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInphd29sYW5pZVwiXScpXHJcbiAgXVxyXG4gIG5vZGVzLmZvckVhY2goKG5vZGUsIGlkeCkgPT4gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgbGV0IHNlY3Rpb25Db21wbGV0ZWQgPSBpbml0VXNlckZsb3dUb05leHRTZWN0aW9uX2NoZWNrSWZUaGlzU2VjdGlvbklzQ29tcGxldGVkKG5vZGVzKVxyXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzICYmIHNlY3Rpb25Db21wbGV0ZWQgIT09IHRydWUpIHtcclxuICAgICAgaW5pdFVzZXJGbG93VmlhU2VjdGlvbl9nb1RvTmV4dE5vZGUobm9kZSwgaWR4LCBub2RlcylcclxuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgJiYgc2VjdGlvbkNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICBub2RlLmJsdXIoKVxyXG4gICAgICBpbml0VXNlckZsb3dUb05leHRTZWN0aW9uX3Nob3dCdG5PZkFjY2VwdGFuY2UoKVxyXG4gICAgfVxyXG4gIH0pKVxyXG4gIG5vZGVzLmZvckVhY2goKG5vZGUsIGlkeCkgPT4gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGxldCBzZWN0aW9uQ29tcGxldGVkID0gaW5pdFVzZXJGbG93VG9OZXh0U2VjdGlvbl9jaGVja0lmVGhpc1NlY3Rpb25Jc0NvbXBsZXRlZChub2RlcylcclxuICAgIGlmIChzZWN0aW9uQ29tcGxldGVkID09PSB0cnVlKSB7XHJcbiAgICAgIGluaXRVc2VyRmxvd1RvTmV4dFNlY3Rpb25fc2hvd0J0bk9mQWNjZXB0YW5jZSgpXHJcbiAgICB9XHJcbiAgfSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRVc2VyRmxvd1ZpYVNlY3Rpb25fZ29Ub05leHROb2RlKG5vZGUsIGlkeCwgbm9kZXMpIHtcclxuICBub2RlLmJsdXIoKVxyXG4gIGlmIChpZHggPCAyKSB7XHJcbiAgICBub2Rlc1tpZHggKyAxXS5mb2N1cygpXHJcbiAgfSBlbHNlIGlmIChpZHggPT09IDIpIHtcclxuICAgIG5vZGVzWzBdLmZvY3VzKClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRVc2VyRmxvd1RvTmV4dFNlY3Rpb25fY2hlY2tJZlRoaXNTZWN0aW9uSXNDb21wbGV0ZWQobm9kZXMpIHtcclxuICBsZXQgYXJyID0gW2ZhbHNlLCBmYWxzZSwgZmFsc2VdXHJcbiAgbm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSwgaWR4KSB7XHJcbiAgICBpZiAobm9kZS52YWx1ZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgIGFycltpZHhdID0gZmFsc2VcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFycltpZHhdID0gdHJ1ZVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgaWYgKGFyci5pbmRleE9mKGZhbHNlKSA9PT0gLTEpIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxufVxyXG5sZXQgY29udHJvbGxlciA9IDA7XHJcblxyXG5mdW5jdGlvbiBpbml0VXNlckZsb3dUb05leHRTZWN0aW9uX3Nob3dCdG5PZkFjY2VwdGFuY2UoKSB7XHJcbiAgaWYgKGNvbnRyb2xsZXIgPT09IDApIHtcclxuICAgIGxldCBidG5Db250YWluZXJGb3JUaGlzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkLUFfYnRuLWJlbHRfYnRuLXBvc2l0aW9uZXIuZmlyc3RTZWN0aW9uQnRuJylcclxuICAgIGxldCBidG5PZlRoaXNTZWN0aW9uID0gYnRuQ29udGFpbmVyRm9yVGhpc1NlY3Rpb24ucXVlcnlTZWxlY3RvcignLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGQtQV9idG4tYmVsdF9idG4tcG9zaXRpb25lcl9idG4nKVxyXG4gICAgc2hvd0J0bk9mQWNjZXB0YW5jZShidG5PZlRoaXNTZWN0aW9uLCBidG5Db250YWluZXJGb3JUaGlzU2VjdGlvbilcclxuICAgIHNldEN1cnJlbnREYXRhVG9BdmF0YXJEZXNjcmlwdGlvbigpO1xyXG4gICAgY29udHJvbGxlciA9IDE7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRDdXJyZW50RGF0YVRvQXZhdGFyRGVzY3JpcHRpb24oKSB7XHJcbiAgc2V0TmFtZVRvRGVzKClcclxuICBzZXROaWNrbmFtZVRvRGVzKClcclxuICBzZXRTZW50ZW5jZVRvRGVzKClcclxufSIsIid1c2Ugc3RyaWN0JztcclxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdFRvQXJyYXkob2JqZWN0KSB7XHJcbiAgICBsZXQgYW1vdW50ID0gb2JqZWN0Lmxlbmd0aDtcclxuICAgIGxldCBhcnJheSA9W107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaTxhbW91bnQ7IGkrKyl7XHJcbiAgICAgICAgYXJyYXkucHVzaChvYmplY3RbaV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG59IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmltcG9ydCBpdGVyYXRvck9mUG9pbnRzTGVmdCBmcm9tIFwiLi9hc2lkZS5qc1wiO1xyXG5pbXBvcnQgeyBzaG93QnRuT2ZBY2NlcHRhbmNlIH0gZnJvbSBcIi4vZm9ybV9pbml0aWFsaXplTmV4dFNlY3Rpb24uanNcIjtcclxuaW1wb3J0IHsgb2JqZWN0VG9BcnJheSB9IGZyb20gXCIuL29iamVjdC10by1hcnJheS5qc1wiO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0aWFsaXplQXR0YWNrc1BhcnQpO1xyXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlQXR0YWNrcyhpKSB7XHJcbiAgbGV0IGF0dGFja3MgPSBvYmplY3RUb0FycmF5KFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lclwiXHJcbiAgICApXHJcbiAgKTtcclxuICBhdHRhY2tzLmZvckVhY2goZnVuY3Rpb24oYXR0YWNrLCBpZHgpIHtcclxuICAgIGF0dGFjay5jbGFzc0xpc3QucmVtb3ZlKFwiZW5hYmxlZFwiKTtcclxuICAgIGxldCBvcHRpb25zID0gb2JqZWN0VG9BcnJheShhdHRhY2sucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvblwiKSk7XHJcbiAgICBhdHRhY2sucXVlcnlTZWxlY3RvcihcInNlbGVjdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBzeW5jaHJvbml6ZUJhY2tncm91bmRzT25DaGFuZ2UoYXR0YWNrLCBvcHRpb25zKTtcclxuICAgIH0pO1xyXG4gICAgYXR0YWNrLnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RcIikuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHN5bmNocm9uaXplQmFja2dyb3VuZHNPbkJsdXIoXHJcbiAgICAgICAgYXR0YWNrLFxyXG4gICAgICAgIGF0dGFjay5xdWVyeVNlbGVjdG9yKFwic2VsZWN0XCIpLFxyXG4gICAgICAgIG9wdGlvbnNcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgb3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKG9wdGlvbikge1xyXG4gICAgICBpZiAob3B0aW9uLnNlbGVjdGVkID09PSB0cnVlKSB7XHJcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgb2JqZWN0VG9BcnJheShcclxuICAgICAgYXR0YWNrLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0XCJcclxuICAgICAgKVxyXG4gICAgKS5mb3JFYWNoKGZ1bmN0aW9uKGJlbHQpIHtcclxuICAgICAgYmVsdC5jbGFzc0xpc3QucmVtb3ZlKFwiSlNvbkJsdXJcIiwgXCJKU29uU2VsZWN0XCIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgYXR0YWNrc1tpXS5jbGFzc0xpc3QuYWRkKFwiZW5hYmxlZFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3luY2hyb25pemVCYWNrZ3JvdW5kc09uQ2hhbmdlKG5vZGUsIGNoaWxkcmVuKSB7XHJcbiAgbGV0IGJlbHRzID0gb2JqZWN0VG9BcnJheShcclxuICAgIG5vZGUucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0XCJcclxuICAgIClcclxuICApO1xyXG4gIGJlbHRzLmZvckVhY2goYmVsdCA9PiBiZWx0LmNsYXNzTGlzdC5yZW1vdmUoXCJKU29uU2VsZWN0XCIsIFwiSlNvbkJsdXJcIikpO1xyXG4gIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24ob3B0LCBpZHgpIHtcclxuICAgIGlmIChvcHQudmFsdWUgPT09IG5vZGUucXVlcnlTZWxlY3RvcihcInNlbGVjdFwiKS52YWx1ZSkge1xyXG4gICAgICBiZWx0c1tpZHhdLmNsYXNzTGlzdC5hZGQoXCJKU29uU2VsZWN0XCIpO1xyXG4gICAgICBpbml0VXNlckZsb3dUb05leHRTZWN0aW9uX3Nob3dCdG5PZkFjY2VwdGFuY2UoKTtcclxuICAgICAgaXRlcmF0b3JPZlBvaW50c0xlZnQuaXRlcmF0b3Iobm9kZSwgaWR4KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiBzeW5jaHJvbml6ZUJhY2tncm91bmRzT25CbHVyKG5vZGUsIGxpc3QsIG9wdGlvbnMpIHtcclxuICBvcHRpb25zLmZvckVhY2goZnVuY3Rpb24ob3B0aW9uLCBpZHgpIHtcclxuICAgIGlmIChvcHRpb24udmFsdWUgPT09IGxpc3QudmFsdWUpIHtcclxuICAgICAgbm9kZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0XCJcclxuICAgICAgICApXHJcbiAgICAgICAgW2lkeF0uY2xhc3NMaXN0LmFkZChcIkpTb25CbHVyXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5sZXQgY29udHJvbGxlciA9IDA7XHJcblxyXG5mdW5jdGlvbiBpbml0VXNlckZsb3dUb05leHRTZWN0aW9uX3Nob3dCdG5PZkFjY2VwdGFuY2UoKSB7XHJcbiAgaWYgKGNvbnRyb2xsZXIgPT09IDApIHtcclxuICAgIGxldCBidG5Db250YWluZXJGb3JUaGlzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGQtQV9idG4tYmVsdF9idG4tcG9zaXRpb25lci50aGlyZFNlY3Rpb25CdG5cIlxyXG4gICAgKTtcclxuICAgIGxldCBidG5PZlRoaXNTZWN0aW9uID0gYnRuQ29udGFpbmVyRm9yVGhpc1NlY3Rpb24ucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZC1BX2J0bi1iZWx0X2J0bi1wb3NpdGlvbmVyX2J0blwiXHJcbiAgICApO1xyXG4gICAgc2hvd0J0bk9mQWNjZXB0YW5jZShidG5PZlRoaXNTZWN0aW9uLCBidG5Db250YWluZXJGb3JUaGlzU2VjdGlvbik7XHJcbiAgICBjb250cm9sbGVyID0gMTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVBdHRhY2tzUGFydCgpIHtcclxuICBvYmplY3RUb0FycmF5KFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lclwiXHJcbiAgICApXHJcbiAgKS5mb3JFYWNoKGZ1bmN0aW9uKGNvbnRhaW5lcikge1xyXG4gICAgLy9vbiBzZWxlY3QtbGlzdCBvcHRpb24gbW91c2UgaG92ZXIgb3ZlclxyXG4gICAgb2JqZWN0VG9BcnJheShjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvblwiKSkuZm9yRWFjaChmdW5jdGlvbihcclxuICAgICAgb3B0aW9uLFxyXG4gICAgICBpZHhcclxuICAgICkge1xyXG4gICAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgaGlnaGxpZ2h0QmFja2dyb3VuZChjb250YWluZXIsIGV2ZW50LCBpZHgpO1xyXG4gICAgICB9KTtcclxuICAgICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBoaWdobGlnaHRCYWNrZ3JvdW5kKGNvbnRhaW5lciwgZXZlbnQsIGlkeCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAvL29wdGlvbi1saWtlIGRpdlxyXG4gICAgb2JqZWN0VG9BcnJheShcclxuICAgICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNfZmllbGRzZXQtYl9jb250YWluZXJfc2VsZWN0LWNvbnRhaW5lcl9pbWctcGFydC1jb250YWluZXJfb3B0XCJcclxuICAgICAgKVxyXG4gICAgKS5mb3JFYWNoKGZ1bmN0aW9uKGJlbHQsIGlkeCkge1xyXG4gICAgICBiZWx0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBoaWdobGlnaHRCYWNrZ3JvdW5kKGNvbnRhaW5lciwgZXZlbnQsIGlkeCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBiZWx0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGhpZ2hsaWdodEJhY2tncm91bmQoY29udGFpbmVyLCBldmVudCwgaWR4KTtcclxuICAgICAgfSk7XHJcbiAgICAgIGJlbHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGNoYW5nZUV2ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XHJcbiAgICAgICAgY2hhbmdlRXYuaW5pdEV2ZW50KCdjaGFuZ2UnKTtcclxuICAgICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvblwiKVtpZHhdLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcihcInNlbGVjdFwiKS5kaXNwYXRjaEV2ZW50KGNoYW5nZUV2KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlnaGxpZ2h0QmFja2dyb3VuZChjb250YWluZXIsIGV2ZW50LCBpZHgpIHtcclxuICBpZiAoZXZlbnQudHlwZSA9PT0gXCJtb3VzZW92ZXJcIikge1xyXG4gICAgY29udGFpbmVyXHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgIFwiLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdFwiXHJcbiAgICAgIClcclxuICAgICAgW2lkeF0uY2xhc3NMaXN0LmFkZChcIkpTb25Ib3ZlclwiKTtcclxuICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwib3B0aW9uXCIpW2lkeF0uY2xhc3NMaXN0LmFkZChcIkpTb25Ib3ZlclwiKTtcclxuICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09IFwibW91c2VvdXRcIikge1xyXG4gICAgY29udGFpbmVyXHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgIFwiLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3NlbGVjdC1jb250YWluZXJfaW1nLXBhcnQtY29udGFpbmVyX29wdFwiXHJcbiAgICAgIClcclxuICAgICAgW2lkeF0uY2xhc3NMaXN0LnJlbW92ZShcIkpTb25Ib3ZlclwiKTtcclxuICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwib3B0aW9uXCIpW2lkeF0uY2xhc3NMaXN0LnJlbW92ZShcIkpTb25Ib3ZlclwiKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICAgIHNob3dCdG5PZkFjY2VwdGFuY2VcclxufSBmcm9tICcuL2Zvcm1faW5pdGlhbGl6ZU5leHRTZWN0aW9uLmpzJztcclxuaW1wb3J0IHtcclxuICAgIG9iamVjdFRvQXJyYXlcclxufSBmcm9tICcuL29iamVjdC10by1hcnJheS5qcyc7XHJcbmltcG9ydCB7XHJcbiAgICBlbmFibGVBdHRhY2tzXHJcbn0gZnJvbSAnLi9mb3JtX3NlY3Rpb24tdGhyZWUuanMnO1xyXG4ndXNlIHN0cmljdCdcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGluaXRVc2VyRmxvd1ZpYVNlY3Rpb25fc2VsZWN0Tm9kZXNUb1RoaXNQcm9jZXNzKCk7XHJcbn0pXHJcblxyXG5mdW5jdGlvbiBpbml0VXNlckZsb3dWaWFTZWN0aW9uX3NlbGVjdE5vZGVzVG9UaGlzUHJvY2VzcygpIHtcclxuICAgIGxldCBhdmF0YXJPYmplY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzX2ZpZWxkc2V0LWJfY29udGFpbmVyX3JhZGlvLWxhYi1jb250YWluZXInKTtcclxuICAgIGxldCBhdmF0YXJzID0gb2JqZWN0VG9BcnJheShhdmF0YXJPYmplY3RzKTtcclxuICAgIGF2YXRhcnMuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGF2YXRhcklzQ2xpY2tlZChpdGVtLCBhdmF0YXJzLCBpZHgpO1xyXG4gICAgfSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhdmF0YXJJc0NsaWNrZWQoYXZhdGFyLCBhdmF0YXJzLCBpZHgpIHtcclxuICAgIGF2YXRhcnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXNDbGlja2VkJykpO1xyXG4gICAgbGV0IGF2ID0gYXZhdGFyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbiAgICBhdi5jaGVja2VkID0gdHJ1ZTtcclxuICAgIGF2YXRhci5jbGFzc0xpc3QuYWRkKCdpc0NsaWNrZWQnKTtcclxuICAgIGluaXRVc2VyRmxvd1RvTmV4dFNlY3Rpb25fc2hvd0J0bk9mQWNjZXB0YW5jZShpZHgpO1xyXG59XHJcbmxldCBjb250cm9sbGVyID0gMDtcclxuXHJcbmZ1bmN0aW9uIGluaXRVc2VyRmxvd1RvTmV4dFNlY3Rpb25fc2hvd0J0bk9mQWNjZXB0YW5jZShpZHgpIHtcclxuICAgIGVuYWJsZUF0dGFja3MoaWR4KTtcclxuICAgIGlmIChjb250cm9sbGVyID09PSAwKSB7XHJcbiAgICAgICAgbGV0IGJ0bkNvbnRhaW5lckZvclRoaXNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGQtQV9idG4tYmVsdF9idG4tcG9zaXRpb25lci5zZWNvbmRTZWN0aW9uQnRuJylcclxuICAgICAgICBsZXQgYnRuT2ZUaGlzU2VjdGlvbiA9IGJ0bkNvbnRhaW5lckZvclRoaXNTZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkLUFfYnRuLWJlbHRfYnRuLXBvc2l0aW9uZXJfYnRuJylcclxuICAgICAgICBzaG93QnRuT2ZBY2NlcHRhbmNlKGJ0bk9mVGhpc1NlY3Rpb24sIGJ0bkNvbnRhaW5lckZvclRoaXNTZWN0aW9uKVxyXG4gICAgICAgIGNvbnRyb2xsZXIgPSAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qZnVuY3Rpb24gaW5pdFVzZXJGbG93VmlhU2VjdGlvbl9zZWxlY3ROb2Rlc1RvVGhpc1Byb2Nlc3MgKCkge1xyXG4gIGxldCBub2RlcyA9IFtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJrbGFzYVwiXScpLFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0W25hbWU9XCJ1ZGVyemVuaWVcIl0nKSxcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJuYXp3YXVkZXJ6ZW5pYVwiXScpXHJcbiAgXVxyXG4gIGluaXRVc2VyRmxvd1ZpYVNlY3Rpb25fZ29Ub05leHROb2RlKG5vZGVzKTtcclxuICAvL25vZGVzWzJdLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vbGV0IGJ0bkNvbnRhaW5lckZvclRoaXNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGQtQV9idG4tYmVsdF9idG4tcG9zaXRpb25lci5zZWNvbmRTZWN0aW9uQnRuJylcclxuICAgIC8vbGV0IGJ0bk9mVGhpc1NlY3Rpb24gPSBidG5Db250YWluZXJGb3JUaGlzU2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZC1BX2J0bi1iZWx0X2J0bi1wb3NpdGlvbmVyX2J0bicpXHJcbiAgIC8vIHNob3dCdG5PZkFjY2VwdGFuY2UoYnRuT2ZUaGlzU2VjdGlvbiwgYnRuQ29udGFpbmVyRm9yVGhpc1NlY3Rpb24pXHJcbiAgLy99KVxyXG59XHJcbmZ1bmN0aW9uIGluaXRVc2VyRmxvd1ZpYVNlY3Rpb25fZ29Ub05leHROb2RlKG5vZGVzKXtcclxuICAgIGxldCBhbW91bnQgPSBub2Rlcy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpPTA7IGk8YW1vdW50OyBpKyspe1xyXG4gICAgICAgIGxldCBub2RlU2V0ID0gbm9kZXNbaV07XHJcbiAgICAgICAgbGV0IG9wdEl0ZXJhdG9yID0gbm9kZVNldC5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgaj0wOyBqPG9wdEl0ZXJhdG9yOyBqKyspe1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gbm9kZVNldFtqXTtcclxuICAgICAgICAgICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBnb1RvTmV4dE5vZGUobm9kZXMsIGkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuKi8iLCJpbXBvcnQgaXRlcmF0b3JPZlBvaW50c0xlZnQgZnJvbSAnLi9hc2lkZS5qcyc7XHJcbid1c2Ugc3RyaWN0JztcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXQpO1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGxldCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzLTJfZmllbGRzZXQtZF9jb250YWluZXJfYXRyeWIgLi0tYmVsdF9pY29uLWNvbnRhaW5lcicpO1xyXG4gICAgbGV0IGJlbHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcnB1c19zZWN0aW9uX2Zvcm1fZmllbGRzLTJfZmllbGRzZXQtZF9jb250YWluZXJfYXRyeWIgLi0tYmVsdF9ib2R5LWNvbnRhaW5lcl9ib2R5Jyk7XHJcbiAgICBsZXQgaXRlciA9IGJ0bnMubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVyOyBpKyspIHtcclxuICAgICAgICBpZiAoaSA+IC0xKSB7XHJcbiAgICAgICAgICAgIGxldCBhdHRyeWIgPSBidG5zW2ldO1xyXG4gICAgICAgICAgICBsZXQgYmVsdCA9IGJlbHRzW2ldO1xyXG4gICAgICAgICAgICBhdHRyeWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3JPZlBvaW50c0xlZnQubGVmdCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRQb2ludChiZWx0KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvaW50KGJlbHQpIHtcclxuICAgIGxldCBJTUcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJTUcnKTtcclxuICAgIElNRy5zZXRBdHRyaWJ1dGUoJ3NyYycsICdpY29ucy9pa29uYS1wb3RlZy5zdmcnKTtcclxuICAgIGJlbHQuYXBwZW5kQ2hpbGQoSU1HKTtcclxuICAgIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0LmxlZnQtLTtcclxuICAgIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0LmVxdWFsaXphdG9yKCk7XHJcbiAgICBJTUcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZGVsZXRlVGhpc0lNRyhJTUcpXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVUaGlzSU1HKHgpIHtcclxuICAgIHgucmVtb3ZlKCk7XHJcbiAgICBpdGVyYXRvck9mUG9pbnRzTGVmdC5sZWZ0Kys7XHJcbiAgICBpdGVyYXRvck9mUG9pbnRzTGVmdC5lcXVhbGl6YXRvcigpO1xyXG59IiwiaW1wb3J0IHtndWlkZVJlYWN0c30gZnJvbSAnLi9hc2lkZS5qcyc7XHJcblwidXNlIHN0cmljdFwiO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0aWFsaXplVGhpc1NlY3Rpb24pO1xyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZVRoaXNTZWN0aW9uKCkge1xyXG4gICAgbGV0IGxpc3RBID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc2V0LWMgI3phc2xvbmFcIlxyXG4gICAgKTtcclxuICAgIGxldCBsaXN0QiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNldC1jICNwYW5jZXJ6XCJcclxuICAgICk7XHJcbiAgICBsZXQgaW1hZ2VzQSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgXCIuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHNldC1jX2ltZ3NfaW1nLmFcIlxyXG4gICAgKTtcclxuICAgIGxldCBpbWFnZXNCID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICBcIi5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkc2V0LWNfaW1nc19pbWcuYlwiXHJcbiAgICApO1xyXG4gICAgbGV0IG9wdHNBID0gbGlzdEEucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvblwiKTtcclxuICAgIGxldCBvcHRzQiA9IGxpc3RCLnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb25cIik7XHJcbiAgICBkeW5hbWl6ZVRoaXNMaXN0KGxpc3RBLCBvcHRzQSwgaW1hZ2VzQSwgbGlzdEIpO1xyXG4gICAgZHluYW1pemVUaGlzTGlzdChsaXN0Qiwgb3B0c0IsIGltYWdlc0IsIGxpc3RBKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHluYW1pemVUaGlzTGlzdChsaXN0LCBvcHRzLCBpbWFnZXMsIG90aGVyTGlzdCkge1xyXG4gICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBsaXN0LnZhbHVlO1xyXG4gICAgICAgIGxldCBpdGVyID0gb3B0cy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpdGVyIC0gMTsgaisrKSB7XHJcbiAgICAgICAgICAgIGltYWdlc1tqXS5jbGFzc0xpc3QuYWRkKFwiaXRJc1Vuc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBvcHQgPSBvcHRzW2ldO1xyXG4gICAgICAgICAgICBsZXQgb3B0VmFsdWUgPSBvcHQudmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gb3B0VmFsdWUgJiYgaSAhPT0gMykge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJpdElzVW5zZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbmFibGVOZXh0Rm9ybVBhcnQobGlzdCwgb3RoZXJMaXN0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlbmFibGVOZXh0Rm9ybVBhcnQobGlzdCwgb3RoZXJMaXN0KSB7XHJcbiAgICBsZXQgYSA9IGxpc3QudmFsdWU7XHJcbiAgICBsZXQgYiA9IG90aGVyTGlzdC52YWx1ZTtcclxuICAgIGlmIChhICE9PSBcIlwiICYmIGIgIT09IFwiXCIpIHtcclxuICAgICAgICBsZXQgbmV4dFBhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29ycHVzX3NlY3Rpb25fZm9ybV9maWVsZHMtMicpO1xyXG4gICAgICAgIG5leHRQYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2l0SXNIaWRkZW4nKTtcclxuICAgICAgICBsZXQgYWxsT3JuYW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLmNvcnB1c19zZWN0aW9uX2Zvcm1fb3JuYW1lbnQtbWFya2VyJyk7XHJcbiAgICAgICAgbGV0IHRoaXNPcm5hbWVudCA9IGFsbE9ybmFtZW50c1syXTtcclxuICAgICAgICB0aGlzT3JuYW1lbnQuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pY29ucy9wb2xlLjIuc3ZnJyk7XHJcbiAgICAgICAgdGhpc09ybmFtZW50LmNsYXNzTGlzdC5hZGQoJ2l0SXNQYXNzZWRUaHJvdWdodCcpO1xyXG4gICAgICAgIGxldCBuZXh0T3JuYW1lbnQgPSBhbGxPcm5hbWVudHNbM107XHJcbiAgICAgICAgbmV4dE9ybmFtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2l0SXNIaWRkZW4nKTtcclxuICAgICAgICBndWlkZVJlYWN0cyg1KTtcclxuICAgIH1cclxufSIsImltcG9ydCBpdGVyYXRvck9mUG9pbnRzTGVmdCBmcm9tICcuL2FzaWRlLmpzJztcclxuaW1wb3J0IHtndWlkZVJlYWN0c30gZnJvbSAnLi9hc2lkZS5qcyc7XHJcbid1c2Ugc3RyaWN0JztcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRpYWxpemVUaGlzU2VsZWN0KVxyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZVRoaXNTZWxlY3QoKSB7XHJcbiAgICBsZXQgb3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3JwdXNfc2VjdGlvbl9mb3JtX2ZpZWxkcy0yX2ZpZWxkc2V0LWRfY29udGFpbmVyX21vY2UnKTtcclxuICAgIGxldCBpdGVyID0gb3B0aW9ucy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXI7IGkrKykge1xyXG4gICAgICAgIGxldCBvcHQgPSBvcHRpb25zW2ldO1xyXG4gICAgICAgIG9wdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaXRJc0NsaWNrZWQob3B0LCBvcHRpb25zLCBpdGVyLCBpKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGl0SXNDbGlja2VkKG9wdCwgb3B0cywgaXRlciwgaSkge1xyXG4gICAgbGV0IGNoZWNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJtb2MtcGlldG5vXCJdJyk7XHJcbiAgICBsZXQgY29zdE9mVGhpcyA9IFsxLDIsMiwxLDMsMV07XHJcbiAgICBpZiAoY2hlY2tzW2ldLmNoZWNrZWQ9PT10cnVlKXtcclxuICAgICAgICBjaGVja3NbaV0uY2hlY2tlZD1mYWxzZTtcclxuICAgICAgICBpdGVyYXRvck9mUG9pbnRzTGVmdC5pdGVyYXRvckIoY29zdE9mVGhpc1tpXSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBjaGVja3NbaV0uY2hlY2tlZD10cnVlO1xyXG4gICAgICAgIGl0ZXJhdG9yT2ZQb2ludHNMZWZ0LmRlbGV0YXRvckIoY29zdE9mVGhpc1tpXSk7XHJcbiAgICAgICAgZ3VpZGVSZWFjdHMoNik7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGl0ZXI7IGorKykge1xyXG4gICAgICAgIGlmIChjaGVja3Nbal0uY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBvcHRzW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ2l0SXNIaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoZWNrc1tqXS5jaGVja2VkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBvcHRzW2pdLmNsYXNzTGlzdC5hZGQoJ2l0SXNIaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImluaXRpYWxpemVHdWlkZSIsImhpZGVVc2VyR3VpZGUiLCJzZXRUaW1lb3V0IiwiYXNpZGUiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwib3JubSIsInJvdGF0ZUFuZEhpZGVBc2lkZSIsImJ0biIsImNvbnRyb2xsZXIiLCJoZWFkQmVsdCIsInBpZWNlIiwib2Zmc2V0SGVpZ2h0Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJhdyIsIm9mZnNldFdpZHRoIiwiYWgiLCJ3c3AiLCJ4IiwieSIsInoiLCJsZWZ0IiwiYm90dG9tIiwiZ3VpZGVSZWFjdHMiLCJpIiwicmVtb3ZlIiwic2hha2VUb0ZvY3VzVXNlcnNBdHRlbnRpb24iLCJndWlkZSIsInRpdGxlIiwiYXJyIiwiaW5uZXJUZXh0IiwiYXJyQiIsIml0ZXJhdG9yT2ZQb2ludHNMZWZ0Iiwic3BlbnRPbkF0dGFjayIsIml0ZXJhdG9yIiwiY29udCIsIml0ZXJEZXZpY2UiLCJvcHQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicG9pbnRzIiwiYW1vdW50IiwibGVuZ3RoIiwiYmlsYW5zIiwiYW5pbWF0ZU9wdHNTcGVuZGluZyIsImRlbGV0YXRvciIsImNvaW4iLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXhTIiwid2luZG93Iiwic2Nyb2xsWSIsImF4WCIsIm9mZnNldFRvcCIsImF4WiIsImF4WSIsIm9mZnNldExlZnQiLCJ0b3AiLCJhcHBlbmRDaGlsZCIsIndpZHRoIiwiaGVpZ2h0IiwicmVtb3ZlQ2hpbGQiLCJpdGVyYXRvckIiLCJpbnRlZ2VyIiwiZGVsZXRhdG9yQiIsImVxdWFsaXphdG9yIiwidGhpcyIsImluaXRpYWxpemVCdG5zT2ZBY2NlcHRhbmNlIiwiYWNjZXB0YXRpb25CdG4iLCJjb250YWlucyIsInNpZ25UaGlzQXNDbGlja2VkIiwiaW5pdGlhbGl6ZU5leHRTZWN0aW9uIiwiaW5pdEFnYWluR3VpZGVUZXh0Rm9yVGhpc1NlY3Rpb24iLCJhbGxPcm5hbWVudHMiLCJ0aGlzT3JuYW1lbnQiLCJuZXh0T3JuYW1lbnQiLCJ6ZW5zY3JvbGwiLCJ0b1kiLCJlbmFibGVOZXh0U2VjdGlvbiIsImFsbFNlY3Rpb25zIiwidW5kZWZpbmVkIiwic2hvd0J0bk9mQWNjZXB0YW5jZSIsImNvbnRhaW5lciIsImluaXRpYWxpemUiLCJvcHRzIiwiaXRlbSIsInNldElNRyIsImVuYWJsZVN0cmlrZU5hbWVQYXJ0Iiwic2V0U3RyaWtlTmFtZVRvRGVzIiwic2V0UGFydE9mQXR0YWNrRGVzY3JpcHRpb24iLCJzZXRGb3JjZURlcyIsIm9ubHlPbmNlIiwiZGVzUGFydCIsImFycmF5IiwiYmVsdCIsImltYWciLCJhdHRyeWIiLCJnZXRBdHRyaWJ1dGUiLCJpY29uIiwiYWxsSU1HcyIsInN0YW5kYXJ0IiwiaW1hZ2VUb0RlbCIsImoiLCJ0aGVJTUciLCJzb3VyY2VJTUciLCJuZXdJTUciLCJzZXROZXh0UGFydE9mRm9ybXVsYUZvclRoZUZpcnN0VGltZSIsImlucCIsInN0ck5hbWUiLCJ2YWx1ZSIsInNob3dBbGxEZXMiLCJpdG0iLCJ0cmltIiwic2V0TmV4dFBhcnRPZkZvcm11bGEiLCJJTUdzIiwiaXRlciIsInN0cm5nIiwiSU1HIiwicHVzaCIsInN0cmluZ1RvU2V0Iiwiam9pbiIsInp5d0RlcyIsImltaURlcyIsInByekRlcyIsInpkYURlcyIsInNldE5hbWVUb0RlcyIsIm5hbSIsInNldE5pY2tuYW1lVG9EZXMiLCJpbnBCIiwic3VybmFtIiwic2V0U2VudGVuY2VUb0RlcyIsImFsbERlcyIsInRleHRBcmVhIiwiYXJlYVZhbHVlIiwiZW5hYmxlTmV4dFBhcnRPZkZvcm0iLCJuZXh0UGFydCIsImJveFNpemUiLCJ6SW5kZXgiLCJpbml0VXNlckZsb3dWaWFTZWN0aW9uX3NlbGVjdE5vZGVzVG9UaGlzUHJvY2VzcyIsIm5vZGVzIiwiZm9yRWFjaCIsIm5vZGUiLCJpZHgiLCJldmVudCIsInNlY3Rpb25Db21wbGV0ZWQiLCJpbml0VXNlckZsb3dUb05leHRTZWN0aW9uX2NoZWNrSWZUaGlzU2VjdGlvbklzQ29tcGxldGVkIiwia2V5Q29kZSIsImluaXRVc2VyRmxvd1ZpYVNlY3Rpb25fZ29Ub05leHROb2RlIiwiYmx1ciIsImluaXRVc2VyRmxvd1RvTmV4dFNlY3Rpb25fc2hvd0J0bk9mQWNjZXB0YW5jZSIsImZvY3VzIiwiaW5kZXhPZiIsImJ0bkNvbnRhaW5lckZvclRoaXNTZWN0aW9uIiwiYnRuT2ZUaGlzU2VjdGlvbiIsInNldEN1cnJlbnREYXRhVG9BdmF0YXJEZXNjcmlwdGlvbiIsIm9iamVjdFRvQXJyYXkiLCJvYmplY3QiLCJpbml0aWFsaXplQXR0YWNrc1BhcnQiLCJlbmFibGVBdHRhY2tzIiwiYXR0YWNrcyIsImF0dGFjayIsIm9wdGlvbnMiLCJzeW5jaHJvbml6ZUJhY2tncm91bmRzT25DaGFuZ2UiLCJzeW5jaHJvbml6ZUJhY2tncm91bmRzT25CbHVyIiwib3B0aW9uIiwic2VsZWN0ZWQiLCJjaGlsZHJlbiIsImJlbHRzIiwibGlzdCIsImhpZ2hsaWdodEJhY2tncm91bmQiLCJjaGFuZ2VFdiIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsInR5cGUiLCJhdmF0YXJPYmplY3RzIiwiYXZhdGFycyIsImF2YXRhcklzQ2xpY2tlZCIsImF2YXRhciIsImF2IiwiY2hlY2tlZCIsImluaXQiLCJidG5zIiwiYWRkUG9pbnQiLCJkZWxldGVUaGlzSU1HIiwiaW5pdGlhbGl6ZVRoaXNTZWN0aW9uIiwibGlzdEEiLCJsaXN0QiIsImltYWdlc0EiLCJpbWFnZXNCIiwib3B0c0EiLCJvcHRzQiIsImR5bmFtaXplVGhpc0xpc3QiLCJpbWFnZXMiLCJvdGhlckxpc3QiLCJvcHRWYWx1ZSIsImVuYWJsZU5leHRGb3JtUGFydCIsImEiLCJiIiwiaW5pdGlhbGl6ZVRoaXNTZWxlY3QiLCJpdElzQ2xpY2tlZCIsImNoZWNrcyIsImNvc3RPZlRoaXMiXSwibWFwcGluZ3MiOiI7OztJQUFBQSxTQUFTQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOENDLGVBQTlDOztJQUVBLFNBQVNBLGVBQVQsR0FBMkI7SUFDekJDO0lBQ0FDLGFBQVcsWUFBWTtJQUNyQixRQUFJQyxRQUFRTCxTQUFTTSxhQUFULENBQXVCLE9BQXZCLENBQVo7SUFDQUQsVUFBTUUsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsUUFBcEI7SUFDRCxHQUhELEVBR0csQ0FISDtJQUlEOztJQUVELFNBQVNMLGFBQVQsR0FBeUI7SUFDdkIsTUFBSU0sT0FBT1QsU0FBU00sYUFBVCxDQUF1QixhQUF2QixDQUFYO0lBQ0FHLE9BQUtSLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCUyxrQkFBL0I7SUFDQSxNQUFJQyxNQUFNWCxTQUFTTSxhQUFULENBQXVCLGtCQUF2QixDQUFWO0lBQ0FLLE1BQUlWLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCUyxrQkFBOUI7SUFDRDtJQUNELElBQUlFLGFBQWEsQ0FBakI7O0lBRUEsU0FBU0Ysa0JBQVQsR0FBOEI7SUFDNUIs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
