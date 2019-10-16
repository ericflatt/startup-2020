//mobile redirect
//mobile only site will be built
if (screen.width <= 768) {
document.location = "https://google.com";
}

//countdown timer
// Set the date we're counting down to
var countDownDate = new Date("Feb 8, 2020 11:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="countdown"
  document.getElementById("countdown").innerHTML = days + " days, " + hours + " hours, "
  + minutes + " minutes, " + seconds + " seconds";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);


window.sr = ScrollReveal(); 
//how to use scrollReveal
// sr.reveal('h1', {
//     delay: 0,
//     duration: 200,
//     origin: 'bottom',
//     distance: '100px' 
// });


//side scroll

window.scrollConverter = (function (window, document, undefined) {

  
  var docElem = document.documentElement,
    active = false,
    hasDeactivated = false,
    eventsBound = false;
  
  var mouseWheelHandler;
  var scrollHandler;
  
  var scrollCallback = function (offset, event, callback) {
  
      if (!active) {
        return true;
      }
  
      var delta, numPixelsPerStep, change, newOffset,
        docOffset, scrollWidth, winWidth, maxOffset;
  
      delta = 0;
      numPixelsPerStep = 10;
  
      docOffset = (docElem ? docElem.offsetWidth : 0) || 0;
      scrollWidth = document.body.scrollWidth || 0;
      winWidth = docElem ? docElem.clientWidth : 0;
      maxOffset = Math.max(docOffset, scrollWidth) - winWidth;
 
      if (Math.abs(event.wheelDeltaX) > Math.abs(event.wheelDeltaY)) {
        return true;
      }
  
  
      if (event.detail) {
        delta = event.detail * -240;
      }
      
      else if (event.wheelDelta) {
        delta = event.wheelDelta * 5;
      }
  
      
      change = delta / 120 * numPixelsPerStep;
      newOffset = offset.x - change;
  
      if (newOffset >= 0 && newOffset <= maxOffset) {
        offset.x = newOffset;
        offset.setByScript = true;
        window.scrollTo(offset.x, offset.y);
      }
      else if (offset.x !== 0 && offset.x !== maxOffset) {
        offset.x = newOffset > maxOffset ? maxOffset : 0;
        offset.setByScript = true;
        window.scrollTo(offset.x, offset.y);
      }
  
      if (typeof callback === "function") {
        callback(offset);
      }
  
      return false;
    },
  
    supportsEventListenerPassiveOption = function () {
      var supportsPassiveOption = false;
      try {
        var options = Object.defineProperty({}, 'passive', {
          get: function() {
            supportsPassiveOption = true;
          }
        });
        window.addEventListener('test', null, options);
        window.removeEventListener('test', null, options);
      } catch (error) {}
      return supportsPassiveOption;
    },
  
    getOffset = function (axis) {
      axis = axis.toUpperCase();
      var pageOffset = "page" + axis + "Offset",
        scrollValue = "scroll" + axis,
        scrollDir = "scroll" + (axis === "X" ? "Left" : "Top");
  
      return window[pageOffset] || window[scrollValue] || (function () {
        var rootElem = document.documentElement || document.body.parentNode;
        return ((typeof rootElem[scrollDir] === "number") ? rootElem : document.body)[scrollDir];
      }());
    },
  
    bindEvents = function (offset, cb) {
  
      var callback = function (e) {
  
          e = e || window.event;
  
          var shouldPreventDefault = scrollCallback(offset, e, cb) === false;
  
          if (shouldPreventDefault) {
            if (e.preventDefault && e.stopPropagation) {
              e.preventDefault();
              e.stopPropagation();
            } else {
              return false;
            }
          }
        },
  
        updateOffsetOnScroll = function () {
  
          if (!offset.setByScript) {
            offset.x = getOffset("x");
            offset.y = getOffset("y");
          }
          offset.setByScript = false;
        };
  
      mouseWheelHandler = callback;
      scrollHandler = updateOffsetOnScroll;
  
      if (window.addEventListener) {
        var useCaptureOrOptions = supportsEventListenerPassiveOption()
          ? { capture: false, passive: false }
          : false;
  
        if ("onmousewheel" in window) {
          window.addEventListener("mousewheel", mouseWheelHandler, useCaptureOrOptions);
          window.addEventListener("scroll", scrollHandler, useCaptureOrOptions);
        }
        else {
          window.addEventListener("DOMMouseScroll", mouseWheelHandler, useCaptureOrOptions);
          window.addEventListener("scroll", scrollHandler, useCaptureOrOptions);
        }
      }
      else {
        document.attachEvent("onmousewheel", mouseWheelHandler);
        window.attachEvent("onscroll", scrollHandler);
      }
    },
  
    unbindEvents = function () {
      if (!mouseWheelHandler && !scrollHandler) return;
  
      if (window.removeEventListener) {
        var useCaptureOrOptions = supportsEventListenerPassiveOption()
          ? { capture: false, passive: false }
          : false;
  
        if ("onmousewheel" in window) {
          window.removeEventListener("mousewheel", mouseWheelHandler, useCaptureOrOptions);
          window.removeEventListener("scroll", scrollHandler, useCaptureOrOptions);
        }
        else {
          window.removeEventListener("DOMMouseScroll", mouseWheelHandler, useCaptureOrOptions);
          window.removeEventListener("scroll", scrollHandler, useCaptureOrOptions);
        }
      }
      else {
        document.detachEvent("onmousewheel", mouseWheelHandler);
        window.detachEvent("onscroll", scrollHandler);
      }
    },
  
    deactivateScrolling = function (e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };
  
  return {
  
    
    activate: function (callback) {
  
      active = true;
  
      if (!eventsBound) {
        var offset = { x: 0, y: 0 };
        bindEvents(offset, callback);
        eventsBound = true;
      }
  
      if (hasDeactivated) {
        if (window.addEventListener) {
          var useCaptureOrOptions = supportsEventListenerPassiveOption()
            ? { capture: true, passive: false }
            : true;
          window.removeEventListener("scroll", deactivateScrolling, useCaptureOrOptions);
        } else {
          window.detachEvent("onscroll", deactivateScrolling);
        }
        hasDeactivated = false;
      }
    },
  
    deactivate: function () {
      active = false;
  
      if (eventsBound) {
        unbindEvents();
        eventsBound = false;
      }
    },
  
    deactivateAllScrolling: function () {
  
      active = false;
      hasDeactivated = true;
  
      if (window.addEventListener) {
        var useCaptureOrOptions = supportsEventListenerPassiveOption()
          ? { capture: true, passive: false }
          : true;
        window.addEventListener("scroll", deactivateScrolling, useCaptureOrOptions);
      } else {
        window.attachEvent("onscroll", deactivateScrolling);
      }
    }
  };
  }(window, document));
  
  (function () {
    
    scrollConverter.activate();
  
  }());

