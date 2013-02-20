// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
$.debounce = function(fn, delay) {
    var delay = delay || 250;
    return function() {
        var ctx = this, args = arguments;
        clearTimeout(fn.hnd);
        fn.hnd = setTimeout(function() {
            fn.apply(ctx, args);
        }, delay);
    };
};

 /** jQuery Animate backgroundPosition
  * @author Alexander Farkas * v. 1.02 */ 
 (function($) { $.extend($.fx.step,{ backgroundPosition: function(fx) { if (fx.state === 0 && typeof fx.end == 'string') { var start = $.curCSS(fx.elem,'backgroundPosition'); start = toArray(start); fx.start = [start[0],start[2]]; var end = toArray(fx.end); fx.end = [end[0],end[2]]; fx.unit = [end[1],end[3]]; } var nowPosX = []; nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0]; nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1]; fx.elem.style.backgroundPosition = nowPosX[0]+' '+nowPosX[1]; function toArray(strg){ strg = strg.replace(/left|top/g,'0px'); strg = strg.replace(/right|bottom/g,'100%'); strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2"); var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/); return [parseFloat(res[1],10),res[2],parseFloat(res[3],10),res[4]]; } } }); })(jQuery); 
 